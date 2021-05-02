# Changelog

## Unreleased

- Update dependencies

## v5.1.5 2020-02-17

- `@styled-system/css` fix media query order #1137
- Update dependencies

## v5.1.4 2019-12-02

- `@styled-system/css` add `outlineColor` support #825
- Update dependencies

## v5.1.3 2019-09-16

- Add `@styled-system/props` utility #824

## v5.1.2 2019-09-11

- Update dependencies
- Fix sort for media queries in plain object syntax #812

## v5.1.1 2019-08-22

- Fix for passing props through to transform function #723
- Update dependencies

## v5.1.0 2019-08-12

- New `variant` API with support for inline variant definitions and theme-based style objects #699

## v5.0.23 2019-08-12

- Add support for `overflowX` and `overflowY` #682
- `@styled-system/css`: add support for `size` #684
- Update dependencies

## v5.0.22 2019-08-09

- `@styled-system/css`: add support for `fill`, `stroke`, and `flexBasis` #679

## v5.0.21 2019-08-07

- Fix publish

## v5.0.20 2019-08-07

- Add theme support for more border properties #670 & #671

## v5.0.19 2019-08-05

- `@styled-system/css` allow functional values to return responsive array values #654

## v5.0.18 2019-07-31

- Fix for incorrectly ordered `@media` rules when `null` values are used in multiple array-value props #638
- Fix for incorrectly ordered `@media` rules with responsive object values
- Added integration tests with Styled Components and Emotion
- `@styled-system/prop-types` exports `createPropTypes`

## v5.0.17 2019-07-30

- Failed lerna publish

## v5.0.16 2019-07-22

- Update dependencies
- `@styled-system/css`: fix for `p` paragraph/padding collision
- Add option to disable breakpoint caching #595

## v5.0.15 2019-07-15

- Export single-property functions for v4 shims #584

## v5.0.14 2019-07-15

- Use `theme.space` for position props #598

## v5.0.13 2019-07-05

- `@styled-system/css`: add support for `gap`, `rowGap`, and `columnGap` properties #596

## v5.0.12 2019-06-25

- Fix for parser config

## v5.0.11 2019-06-24

- `@styled-system/css`: use `theme.space` in grid properties #574

## v5.0.10 2019-06-19

- `@styled-system/css`: use `theme.space` in position properties #568
- `@styled-system/css`: fix null check #572

## v5.0.9 2019-06-18

- `@styled-system/css`: use theme in `textShadow` property #567

## v5.0.8 2019-06-12

- Add missing prop types #557

## v5.0.7 2019-06-11

- `@styled-system/should-forward-prop`: add missing props #554
- Fix example #548

## v5.0.6 2019-06-10

- Update dependencies #553
- Add unit test #545
- Update docs #542, #543

## v5.0.5 2019-06-03

- Fix `get` utility #536
- Fix `boxShadow` export #535
- Fix typo in docs #534
- Fix typo in docs #530

## v5.0.4 2019-06-03

- Fix export #528
- Update docs #525, #526, #527

## v5.0.3 2019-06-03

- Fix margin transform

## v5.0.2 2019-06-02

- Add null check for `get` utility

## v5.0.1 2019-06-02

- Edit Babel config

## v5.0.0 2019-06-02

- Faster (fastest implementation yet)
- New `system` API for custom style props
- Built-in style props are now grouped into categories
- Style functions are now available as separate packages (e.g. `@styled-system/core`, `@styled-system/space`)
- Removes `propTypes` (use `.propNames` or the optional `@styled-system/prop-types` package instead)
- No longer converts numbers to `px` strings
- Changes interal `get` utility
- Removes: `isObject`, `is`, `px`, `num`, `createMediaQuery`, `defaultBreakpoints`, `merge`, `cloneFunction`, `mapProps`
- No longer returns `null` (returns and empty object instead)
- No longer converts padding to negative values (not needed)
- Removes `themeGet` from main package, use `@styled-system/theme-get` instead
- The new `theme.sizes` scale replaces `heights`, `minHeights`, `maxHeights`, `minWidths`, and `maxWidths`; and is used for the `width` prop
- Style functions now cache `theme.breakpoints`. If you rely on dynamically changing breakpoints in runtime, this is a breaking change

## v4.2.3 2019-05-27

- Fix for sort order in IE #465

## v4.2.2 2019-05-08

- Fix for `merge` utility #483

## v4.2.1 2019-05-04

- Fix build

## v4.2.0 2019-05-04

- Merge returned styles into a single object #473

## v4.1.0 2019-03-28

- #440
- #442
- #439
- #438

## v4.0.8 2019-03-23

- Fix `.npmignore`

## v4.0.7 2019-03-23

- #434
- #435
- #433
- #431

## v4.0.6 2019-03-21

- Changes source order in `borders` #429

## v4.0.5 2019-03-15

- Fix for missing `propTypes` on `space` function

## v4.0.1 2019-02-27

- Fix for props in `textStyles` and `colorStyles`

## v4.0.0 2019-02-23

- Rewritten core for less code duplication
- No longer merges returned style object, but returns arrays instead, which should work with common CSS-in-JS libraries
- `space` function has been rewritten with the core `style` and `compose` utilities
- Adds long-form props for margin and padding (e.g. `marginTop`). Shorthand aliases still work as before.
- Reintroduces the `alias` argument to `style` utility
- Removes the `styles` object export
- Removes the `util` object export
- Removes `merge` utility
- Removes the `mixed` utility since it did not behave as expected
- The theme "scale" is now passed as the second argument to the `transformValue` option in `style` utility
- Removes the `ratio` style function
- The following changes to the `borders` style function
  - The shorthand border props no longer transform numbers to pixel widths with a `solid` `border-style`
  - Adds `borderWidth`, `borderStyle`, `borderColor`, and `borderRadius` props
  - All border props are also available as individual imports
- Removes `styleType` from prop types `meta` fields
- Changes to the `get` utility: now returns the last argument as a fallback
- Rename `bgColor` to `backgroundColor`

## v3.2.1 2019-01-02

- Adds prop types for objects #366

## v3.2.0 2019-01-02

- Allow object syntax for responsive values #341

## v3.1.12 2019-01-02

- Allow nested objects for `theme.space` #352

## v3.1.11 2018-10-11

- Bugfix: remove usage of `in` operator in get utility

## v3.1.10 2018-10-10

- Convert numbers to pixels with keyed space values

## v3.1.9 2018-10-10

- Allow `getTheme` to return falsy values

## v3.1.8 2018-10-10

- Use Babel runtime

## v3.1.7 2018-10-10

- Fix for `breakpoints` numbers not being converted to pixels

## v3.1.6 2018-09-23

- Fix `.npmignore`

## v3.1.5 2018-09-23

- Update docs

## v3.1.4 2018-09-19

- Fix for passing falsy value as first item in array values

## v3.1.3 2018-09-14

- Add `module` field to package.json

## v3.1.2 2018-09-14

- Fix missing `styles` object keys

## v3.1.1 2018-09-14

- Patch to debug broken release

## v3.1.0 2018-09-11

- Upgrade to Babel 7

## v3.0.0

- Performance rewrite
- Simplified API
- Faster
- Smaller

### Added

- `variant`
- `compose`
- `css`

### Changed

- `style` utility is now responsive by default
- All built-in style functions now support responsive array values
- `backgroundImage` no longer wraps values with `url()`
- `buttonStyle` prop has been renamed to `variant`
- The `style` utility `getter` argument has beend renamed to `transformValue`
- `util.get` no longer supports a fallback argument

### Removed

- `propTypes[prop].meta` (temporarily removed)
- `responsiveStyle` use `style` instead
- `complexStyle` use `variant` instead
- `complexStyle` (`variant`) boolean props are no longer supported
- `pseudoStyle`
- `hover`
- `focus`
- `active`
- `disabled`
- `fontSize` and `width` no longer support shorthand props
- `alias` option
- `numberToPx` option (pass `util.px` to the `transformValue` argument instead)
- `util.media`
- `util.neg`
- `util.arr`
- `util.getWidth`
- `util.mq`
- `util.fallbackTheme`
- `util.breaks`
- `util.dec`
- `util.getValue`

## 2.3.0

### Added

- Metadata for supporting system-docs package

## 2.2.0

### Added

- CSS Grid utilities

## 2.1.0

### Changed

- Reorganized code base

## 2.0.0

### Added

- More utilities for CSS properties
- `fontFamily`
- `display`
- `minWidth`
- `height`
- `maxHeight`
- `minHeight`
- `size` (width & height)
- `alignContent`
- `order`
- `borders` utility that normalizes the API with other styled-system utilities
- `backgroundImage`
- `backgroundSize`
- `backgroundPosition`
- `zIndex`
- `top`
- `right`
- `bottom`
- `left`

### Changed

- Uses verbose naming convention for `textAlign`, `alignItems`, `justifyContent`, `flexWrap`, and other CSS properties
- `style`, `responsiveStyle`, and `pseudoStyle` utilities now accept `getter` and `getters` arguments for converting values
- Rewritten with ES module syntax
- DRYer code base for utilities like `fontSize`, `width`, and `color`
- The repo has been reorganized as a monorepo
- The `flexWrap` utility now expects a string value for its prop (previously a boolean)
- The `borderTop`, `borderRight`, `borderBottom`, and `borderLeft` props no longer accept boolean props, but follow the same convention as other utilities
- The default spacing scale has changed to `[ 0, 4, 8, 16, 32, 64, 128, 256, 512 ]` (this only affects usage without a custom `theme.space` provided
- Number values for breakpoints are now converted to px instead of ems to better match the rest of the library
- The `theme` utility has been renamed to `themeGet` (alternative names under consideration)
- The `pseudoStyle` arguments API has changed to more closely align with `style` and `responsiveStyle`

### Removed

- The `cleanElement` utility is now a separate package, removing the `react` dependency from the core library
- The `borderWidth` utility has been replaced with the `borders` utility
- The `theme` utility has been renamed to `themeGet` (alternative names under consideration)
- `removeProps` utility
- `idx` utility
- Legacy `responsiveStyle` arguments API
