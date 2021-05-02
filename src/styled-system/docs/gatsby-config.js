const remarkPlugins = [require('remark-slug'), require('remark-unwrap-images')]
const gatsbyRemarkPlugins = [
  {
    resolve: 'gatsby-remark-prismjs',
    options: {
      aliases: {
        sh: 'bash',
        js: 'javascript',
      },
      noInlineHighlight: true,
    },
  },
]

module.exports = {
  siteMetadata: {
    title: 'Styled System',
    description: 'Style props for rapid UI development',
    author: '@jxnblk',
    install: 'npm i styled-system',
    github: 'https://github.com/styled-system/styled-system',
    quotes: [
      {
        text:
          'This is honestly my favourite way to build UI components right now',
        source: 'Varun Vachhar',
        href: 'https://varun.ca/styled-system/',
      },
      {
        text:
          'If you haven’t seen Styled System before, do yourself a favour and check it out. It’s been a huge influence in my thinking on component-oriented styles.',
        source: 'Mark Dalgleish',
        href:
          'https://mobile.twitter.com/markdalgleish/status/1107732365474848768',
      },
      {
        text:
          'The future of css-in-js is going to look something like styled-system with its responsive values.',
        source: 'Kye Hohenberger',
        href:
          'https://mobile.twitter.com/kyehohenberger/status/905474043729416192',
      },
      {
        text:
          'Coming from @tachyons_css, the styled-system utilities from @jxnblk is the missing link I’ve been looking for.',
        source: 'Nathan Young',
        href:
          'https://mobile.twitter.com/nathanyoung/status/891353221880360960',
      },
      {
        text:
          'If you make websites/apps with React check out Styled System if you haven’t already. You will be amazed at how much faster you can build.',

        source: 'David Yeiser',
        href:
          'https://mobile.twitter.com/davidyeiser/status/965920740582285312',
      },
      {
        text:
          'If you like Tachyons you will love styled-system. If you don’t like Tachyons, you will love styled-system.',
        source: 'Adam Morse',
        href: 'https://mobile.twitter.com/mrmrs_/status/913189805055401984',
      },
      {
        text: 'Styled System is one of the best libraries I have ever used.',
        source: 'Miha Sedej',
        href: 'https://tresko.dev/theming-react-datepicker-datepicker-react-styled',
      },
    ],
    features: [
      'Primitive building blocks for component-based design systems',
      'Style props that pick up values from a global theme',
      'Quickly set responsive font-size, margin, padding, width, and more',
      'Inspired by constraint-based design system principles',
      'Typographic scale for consistent design',
      'White space scale for margin, padding, and layout',
      'Supports any color palette',
      'Works with most CSS-in-JS libraries, including Styled Components and Emotion',
    ],
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'docs',
        path: __dirname,
        ignore: ['**/public/**/*', '**/.cache/**/*'],
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.md', '.mdx'],
        remarkPlugins,
        gatsbyRemarkPlugins,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-4603832-13',
      },
    },
  ],
}
