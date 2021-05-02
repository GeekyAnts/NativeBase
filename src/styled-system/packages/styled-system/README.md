<img src='https://styled-system.com/logo.svg' width='128' height='128' />

# Styled System

Responsive, theme-based style props for building design systems with React
https://styled-system.com

[![stars][]][github]
[![Build Status][circleci-badge]][circleci]
[![Downloads][]][npm]
[![Version][]][npm]
[![spectrum-badge][]][spectrum]
![size][]
![MIT License][license]
[![system-ui/theme][system-ui-badge]](https://system-ui.com/theme)

[version]: https://flat.badgen.net/npm/v/styled-system
[downloads]: https://flat.badgen.net/npm/dm/styled-system
[license]: https://flat.badgen.net/badge/license/MIT/blue
[stars]: https://flat.badgen.net/github/stars/styled-system/styled-system
[size]: https://flat.badgen.net/bundlephobia/minzip/styled-system
[spectrum-badge]: https://flat.badgen.net/badge/spectrum/community/purple
[system-ui-badge]: https://flat.badgen.net/badge/system-ui/theme/black
[npm]: https://npmjs.com/package/styled-system
[github]: https://github.com/styled-system/styled-system
[spectrum]: https://spectrum.chat/styled-system
[circleci]: https://circleci.com/gh/styled-system/styled-system
[circleci-badge]: https://flat.badgen.net/circleci/github/styled-system/styled-system/master

```sh
npm i styled-system
```

## Features

- Add style props that hook into your own theme
- Quickly set responsive font-size, margin, padding, width, and more with props
- Influenced by constraint-based design system principles
- Typographic scale
- Spacing scale for margin and padding
- Works with any color palette
- Works with most css-in-js libraries, including [styled-components][] & [emotion][emotion]
- Used in [Rebass](https://rebassjs.org), [Reflexbox](https://rebassjs.org/reflexbox/), and the [Priceline Design System](https://github.com/priceline/design-system)

> "This is honestly my favourite way to build UI components right now ![party parrot][party-parrot]"
>
> – [Varun Vachhar][varun-post]

[party-parrot]: https://github.com/jmhobbs/cultofthepartyparrot.com/raw/master/parrots/parrot.gif

> "If you haven't seen Styled System before, do yourself a favour and check it out. It's been a huge influence in my thinking on component-oriented styles."
>
> – [Mark Dalgleish][markdalgleish]

<!--
> "Fantastic set of tools that offer the ease and API of tachyons/functional CSS but, are way more customisable."
>
> – [Varun Vachhar](https://mobile.twitter.com/winkerVSbecks/status/955619873463431168)
-->

> "The future of css-in-js is going to look something like styled-system with its responsive values."<br/>
>
> – [Kye Hohenberger](https://mobile.twitter.com/kyehohenberger/status/905474043729416192)

> "Coming from @tachyons_css, the styled-system utilities from @jxnblk is the missing link I’ve been looking for."<br/>
>
> – [Nathan Young](https://mobile.twitter.com/nathanyoung/status/891353221880360960)

> "If you make websites/apps with React check out Styled System if you haven't already. You will be amazed at how much faster you can build."
>
> – [David Yeiser][david-tweet]

> "If you like Tachyons you will love styled-system. If you don't like Tachyons, you will love styled-system."
>
> – [Adam Morse][mrmrs]

> "Styled System is one of the best libraries I have ever used."
>
> – [Miha Sedej](https://tresko.dev/theming-react-datepicker-datepicker-react-styled)

[mrmrs]: https://mobile.twitter.com/mrmrs_/status/913189805055401984

## Try It Out

Try the [examples](examples) on CodeSandbox

- [Basic Example](https://codesandbox.io/s/github/styled-system/styled-system/tree/master/examples/basic)
- [Emotion](https://codesandbox.io/s/github/styled-system/styled-system/tree/master/examples/emotion)

### Table of Contents

- [Usage](#usage)
- [Docs](#docs)
- [Further Reading](#further-reading)
- [Built with Styled System](#built-with-styled-system)
- [Related](#related)

## Usage

```jsx
// Example uses styled-components, but styled-system works with most other css-in-js libraries as well
import styled from 'styled-components'
import { space, layout, typography, color } from 'styled-system'

// Add styled-system functions to your component
const Box = styled.div`
  ${space}
  ${layout}
  ${typography}
  ${color}
`
```

Each style function exposes its own set of component props
that handle styles based on values defined in a theme.

```jsx
// width: 50%
<Box width={1/2} />

// font-size: 20px (theme.fontSizes[4])
<Box fontSize={4} />

// margin: 16px (theme.space[2])
<Box m={2} />

// padding: 32px (theme.space[3])
<Box p={3} />

// color
<Box color='tomato' />

// color: #333 (theme.colors.gray[0])
<Box color='gray.0' />

// background color
<Box bg='tomato' />
```

## Responsive Style Props

Set responsive width, margin, padding, font-size, and other properties with a shorthand array syntax.
[Read more](https://styled-system.com/responsive-styles)

```jsx
// responsive width
<Box width={[ 1, 1/2, 1/4 ]} />

// responsive font-size
<Box fontSize={[ 2, 3, 4 ]} />

// responsive margin
<Box m={[ 1, 2, 3 ]} />

// responsive padding
<Box p={[ 1, 2, 3 ]} />
```

To learn more, see the [Getting Started](https://styled-system.com/getting-started) guide or read the docs.

## Docs

- [Getting Started](https://styled-system.com/getting-started)
- [Responsive Styles](https://styled-system.com/responsive-styles)
- [How it Works](https://styled-system.com/how-it-works)
- [Custom Props](https://styled-system.com/custom-props)
- [Variants](https://styled-system.com/variants)
- [API](https://styled-system.com/api)
- [Reference Table](https://styled-system.com/table)
- [Packages](https://styled-system.com/packages)
- [Guides](https://styled-system.com/guides)
- [@styled-system/css](https://styled-system.com/css)

---

## Further Reading

- [Component Based Design System With Styled-System][varun-post]
- [Build Better Component Libraries with Styled System][alan-b-smith-post]
- [Building a beautiful, reusable button with Styled System](https://johno.com/styled-system-button)
- [Defining Component APIs in React](http://jxnblk.com/blog/defining-component-apis-in-react/)
- [The Three Tenets of Styled System](https://jxnblk.com/blog/the-three-tenets-of-styled-system/)

## Built with Styled System

- [Primer Components](https://primer.style/components)
- [Priceline Design System](https://pricelinelabs.github.io/design-system/)
- [Cloudflare Design Color](https://cloudflare.design/color/)
- [Styled System HTML](https://johnpolacek.github.io/styled-system-html/)
- [Rebass](https://rebassjs.org)
- [Reflexbox](https://rebassjs.org/reflexbox/)
- [@datepicker-react/styled](https://github.com/tresko/react-datepicker)

## Related

- [System UI](https://system-ui.com)
- [Spectrum.Chat Community](https://spectrum.chat/styled-system)
- [styled-components][]
- [emotion][]

[styled-components]: https://github.com/styled-components/styled-components
[emotion]: https://github.com/emotion-js/emotion
[varun-post]: https://varun.ca/styled-system/
[alan-b-smith-post]: https://medium.com/styled-components/build-better-component-libraries-with-styled-system-4951653d54ee
[david-tweet]: https://mobile.twitter.com/davidyeiser/status/965920740582285312

<!-- extra links -->

[cole-tweet]: https://mobile.twitter.com/colebemis/status/996565848138526721
[mrmrs-elements]: https://github.com/mrmrs/elements
[broccs-react-starter]: https://github.com/broccolini/react-website-starter
[markdalgleish]: https://mobile.twitter.com/markdalgleish/status/1107732365474848768
[varun vachhar]: https://mobile.twitter.com/winkerVSbecks/status/955619873463431168

[MIT License](LICENSE.md)
