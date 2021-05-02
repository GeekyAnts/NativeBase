import { Platform } from 'react-native'
import merge from 'lodash/merge'
const assign = Object.assign

// sort object-value responsive styles
const sort = (obj) => {
  const next = {}
  Object.keys(obj)
    .sort((a, b) =>
      a.localeCompare(b, undefined, {
        numeric: true,
        sensitivity: 'base',
      })
    )
    .forEach((key) => {
      next[key] = obj[key]
    })
  return next
}

const defaults = {
  breakpoints: [40, 52, 64].map((n) => n + 'em'),
}
const createMediaQuery = (n) => `@media screen and (min-width: ${n})`
const getValue = (n, scale) => get(scale, n, n)

export const get = (obj, key, def, p, undef) => {
  key = key && key.split ? key.split('.') : [key]
  for (p = 0; p < key.length; p++) {
    obj = obj ? obj[key[p]] : undef
  }
  return obj === undef ? def : obj
}

const shadowResolver = (props) => {
  return props.theme.shadows()[props.shadow]
}

const platformUnderscoreMap = {
  web: '_web',
  android: '_android',
  ios: '_ios',
}

export const createParser = (config) => {
  const cache = {}
  const parse = (props) => {
    let styles = {}
    let shouldSort = false

    if (props[platformUnderscoreMap[Platform.OS]]) {
      props = merge(props, props[platformUnderscoreMap[Platform.OS]])
      delete props[platformUnderscoreMap[Platform.OS]]
    }

    if (typeof props.shadow === 'number') {
      styles = merge(styles, props.theme.shadows()[props.shadow])
      delete props.shadow
    }

    const isCacheDisabled = props.theme && props.theme.disableStyledSystemCache

    for (const key in props) {
      if (!config[key]) continue
      const sx = config[key]
      const raw = props[key]
      const scale = get(props.theme, sx.scale, sx.defaults)

      if (typeof raw === 'object') {
        cache.breakpoints =
          (!isCacheDisabled && cache.breakpoints) ||
          get(props.theme, 'breakpoints', defaults.breakpoints)
        if (Array.isArray(raw)) {
          cache.media = (!isCacheDisabled && cache.media) || [
            null,
            ...cache.breakpoints.map(createMediaQuery),
          ]
          styles = merge(
            styles,
            parseResponsiveStyle(cache.media, sx, scale, raw, props)
          )
          continue
        }
        if (raw !== null) {
          styles = merge(
            styles,
            parseResponsiveObject(cache.breakpoints, sx, scale, raw, props)
          )
          shouldSort = true
        }
        continue
      }
      assign(styles, sx(raw, scale, props))
    }

    // sort object-based responsive styles
    if (shouldSort) {
      styles = sort(styles)
    }

    return styles
  }
  parse.config = config
  parse.propNames = Object.keys(config)
  parse.cache = cache

  const keys = Object.keys(config).filter((k) => k !== 'config')
  if (keys.length > 1) {
    keys.forEach((key) => {
      parse[key] = createParser({ [key]: config[key] })
    })
  }

  return parse
}

const parseResponsiveStyle = (mediaQueries, sx, scale, raw, _props) => {
  let styles = {}
  raw.slice(0, mediaQueries.length).forEach((value, i) => {
    const media = mediaQueries[i]
    const style = sx(value, scale, _props)
    if (!media) {
      assign(styles, style)
    } else {
      assign(styles, {
        [media]: assign({}, styles[media], style),
      })
    }
  })
  return styles
}

const parseResponsiveObject = (breakpoints, sx, scale, raw, _props) => {
  let styles = {}
  for (let key in raw) {
    const breakpoint = breakpoints[key]
    const value = raw[key]
    const style = sx(value, scale, _props)
    if (!breakpoint) {
      assign(styles, style)
    } else {
      const media = createMediaQuery(breakpoint)
      assign(styles, {
        [media]: assign({}, styles[media], style),
      })
    }
  }
  return styles
}

export const createStyleFunction = ({
  properties,
  property,
  scale,
  transform = getValue,
  defaultScale,
}) => {
  properties = properties || [property]
  const sx = (value, scale, _props) => {
    const result = {}
    const n = transform(value, scale, _props)
    if (n === null) return
    properties.forEach((prop) => {
      result[prop] = n
    })
    return result
  }
  sx.scale = scale
  sx.defaults = defaultScale
  return sx
}

// new v5 API
export const system = (args = {}) => {
  const config = {}
  Object.keys(args).forEach((key) => {
    const conf = args[key]
    if (conf === true) {
      // shortcut definition
      config[key] = createStyleFunction({
        property: key,
        scale: key,
      })
      return
    }
    if (typeof conf === 'function') {
      config[key] = conf
      return
    }
    config[key] = createStyleFunction(conf)
  })

  const parser = createParser(config)
  return parser
}

export const compose = (...parsers) => {
  let config = {}
  parsers.forEach((parser) => {
    if (!parser || !parser.config) return
    assign(config, parser.config)
  })
  const parser = createParser(config)

  return parser
}
