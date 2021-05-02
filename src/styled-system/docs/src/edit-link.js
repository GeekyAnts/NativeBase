/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Location } from '@reach/router'

// Removes preceding and trailing slashes
const parsePage = string => string.replace(/\/+$/, '').substr(1)

const base = 'https://github.com/styled-system/styled-system/edit/master'

// Pages that don't reference the default /docs/{page}.md
const custom = {
  css: '/packages/css/README.md',
  demo: '/docs/src/pages/demo.js',
}

// Don't display the edit link on these pages:
const ignore = ['babel-plugin']

const getHREF = page => {
  if (custom[page]) return base + custom[page]
  return `${base}/docs/${page}.md`
}

export default () => (
  <Location>
    {({ location }) => {
      const page = parsePage(location.pathname)

      if (ignore.includes(page)) {
        return null
      }

      return (
        <a
          href={
            location.pathname === '/'
              ? base + '/docs/getting-started.md'
              : getHREF(page)
          }
          sx={{
            display: 'inline-block',
            color: 'inherit',
            fontSize: 1,
            my: 4,
          }}
        >
          Edit this page on GitHub
        </a>
      )
    }}
  </Location>
)
