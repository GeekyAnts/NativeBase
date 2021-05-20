import { system } from '../../core/src'

const config = {
  border: {
    property: 'border',
    scale: 'borders',
  },
  borderWidth: {
    property: 'borderWidth',
    scale: 'borderWidths',
  },
  borderStyle: {
    property: 'borderStyle',
    scale: 'borderStyles',
  },
  borderColor: {
    property: 'borderColor',
    scale: 'colors',
  },
  borderRadius: {
    property: 'borderRadius',
    scale: 'radii',
  },
  borderTop: {
    property: 'borderTop',
    scale: 'borders',
  },
  borderTopLeftRadius: {
    property: 'borderTopLeftRadius',
    scale: 'radii',
  },
  borderTopRightRadius: {
    property: 'borderTopRightRadius',
    scale: 'radii',
  },
  borderRight: {
    property: 'borderRight',
    scale: 'borders',
  },
  borderBottom: {
    property: 'borderBottom',
    scale: 'borders',
  },
  borderBottomLeftRadius: {
    property: 'borderBottomLeftRadius',
    scale: 'radii',
  },
  borderBottomRightRadius: {
    property: 'borderBottomRightRadius',
    scale: 'radii',
  },
  borderLeft: {
    property: 'borderLeft',
    scale: 'borders',
  },
  borderX: {
    properties: ['borderLeft', 'borderRight'],
    scale: 'borders',
  },
  borderY: {
    properties: ['borderTop', 'borderBottom'],
    scale: 'borders',
  },
}

config.borderTopWidth = {
  property: 'borderTopWidth',
  scale: 'borderWidths',
}

config.borderTopColor = {
  property: 'borderTopColor',
  scale: 'colors',
}
config.borderTopStyle = {
  property: 'borderTopStyle',
  scale: 'borderStyles',
}
config.borderTopLeftRadius = {
  property: 'borderTopLeftRadius',
  scale: 'radii',
}
config.borderTopRightRadius = {
  property: 'borderTopRightRadius',
  scale: 'radii',
}
config.borderBottomWidth = {
  property: 'borderBottomWidth',
  scale: 'borderWidths',
}
config.borderBottomColor = {
  property: 'borderBottomColor',
  scale: 'colors',
}
config.borderBottomStyle = {
  property: 'borderBottomStyle',
  scale: 'borderStyles',
}
config.borderBottomLeftRadius = {
  property: 'borderBottomLeftRadius',
  scale: 'radii',
}
config.borderBottomRightRadius = {
  property: 'borderBottomRightRadius',
  scale: 'radii',
}
config.borderLeftWidth = {
  property: 'borderLeftWidth',
  scale: 'borderWidths',
}
config.borderLeftColor = {
  property: 'borderLeftColor',
  scale: 'colors',
}
config.borderLeftStyle = {
  property: 'borderLeftStyle',
  scale: 'borderStyles',
}
config.borderRightWidth = {
  property: 'borderRightWidth',
  scale: 'borderWidths',
}
config.borderRightColor = {
  property: 'borderRightColor',
  scale: 'colors',
}
config.borderRightStyle = {
  property: 'borderRightStyle',
  scale: 'borderStyles',
}

export const border = system(config)

export default border
