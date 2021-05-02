/** @jsx jsx */
import { jsx } from 'theme-ui'

export default props =>
  <div
    {...props}
    sx={{
      px: 3,
      py: 2,
      my: 3,
      fontWeight: 'bold',
      bg: 'highlight',
      borderRadius: 2,
      borderLeft: t => `4px solid ${t.colors.accent}`,
      p: {
        m: 0,
      }
    }}
  />
