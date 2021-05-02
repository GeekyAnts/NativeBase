
# Ecosystem

Styled System is a low-level, framework-agnostic suite of utilities.
It can be used with many different libraries, including React, Vue.js, Angular, Styled Components, Emotion, JSS, and more.
While Styled System will always remain fairly low-level, there are many other libraries built on top of the core concepts and functionality included in this library.

If you're looking for a framework-agnostic utility for managing design constraints and scales within a design system,
and want to build custom components with a consistent *learn-once-use-anywhere* API, Styled System is a perfect choice.

If you're looking for something more batteries-included or something off-the-shelf that you can start using today,
consider the following libraries, which are built on top of the core Styled System.

## Rebass

[Rebass][] is a themeable primitive UI component library for React,
built with [Emotion][], [Styled Components][], and Styled System.
Since it is built with Styled System, any theme object created for Styled System should work with Rebass.
Rebass components include a consistent style props API, and can be used to build out larger component libraries.

Rebass is completely themeable and includes a flexible *variants* API.
Rebass is intended to serve as base components that you can extend to create custom component libraries and design systems.
Rebass is also an excellent choice for building out prototypes and UI without needing to invest time in building a custom design system up-front.
Rebass components can be used standalone or with apps built with [Theme UI][].

## Reflexbox

[Reflexbox][] is the core `Box` and `Flex` layout components used to build Rebass.
If you're looking for best-in-class developer ergonomics for handling flexbox layout, but don't need the additional components included in Rebass, this package is for you.

## Theme UI

[Theme UI][] is a batteries-included library, that's intended for creating themeable component libraries, apps, sites, and [Gatsby][] themes.
Theme UI is built with Styled System, [Emotion][], and [MDX][].
It includes plugins and integrations for [Gatsby][], [Typography.js][], [Prism][], and more.
Theme UI has first-class support for styling MDX and markdown content,
and it also includes additional features like *[color modes][]* and a growing library of theme [presets](https://theme-ui.com/presets).
Use Theme UI if you're looking for a complete but flexible styling solution with theme-based design-constraints
and developer ergonomics.

[color modes]: https://theme-ui.com/color-modes

## Theme Specification

The [Theme Specification][] drives all the theming concepts used throughout these libraries.
By conforming to this standard, theme objects created with any of the libraries above will work with the other libraries.

## Other Community Libraries

- [Radix][] is a design system and component library for Modulz
- [Styled System HTML][] is HTML elements extended as components, ready for theming via styled system
- [Tachyons Styled React][] is Tachyons implemented with Emotion and Styled System
- [Hack Club Design System][] is [Hack Club][]’s design system/component library built on styled-components
- [Fluid System][] is a style props function transformer for generating fluid styles through Styled System

[rebass]: https://rebassjs.org
[reflexbox]: https://rebassjs.org/reflexbox
[theme ui]: https://theme-ui.com
[emotion]: https://emotion.sh
[styled components]: https://styled-components.com
[mdx]: https://mdxjs.com
[radix]: https://radix.modulz.app/docs/getting-started/
[Styled System HTML]: https://johnpolacek.github.io/styled-system-html/
[tachyons styled react]: https://github.com/tachyons-css/tachyons-styled-react
[hack club design system]: https://design.hackclub.com
[hack club]: https://hackclub.com/
[theme specification]: https://github.com/system-ui/theme-specification
[gatsby]: https://gatsbyjs.org
[typography.js]: https://github.com/KyleAMathews/typography.js
[prism]: https://github.com/PrismJS/prism
[fluid system]: https://github.com/galacemiguel/fluid-system
