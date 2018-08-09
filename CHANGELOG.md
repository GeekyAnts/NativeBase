# Version [2.7.2](https://github.com/GeekyAnts/NativeBase/releases/tag/v2.7.2)

### General Features

*   **lodash:** Upgraded lodash to 4.17.0 to fix low severity vulnerability. Commit ([c2fe1e7](https://github.com/GeekyAnts/NativeBase/commit/c2fe1e70f923d9283cf4f5f227bcc0e1a38b8183)), closes [#2118](https://github.com/GeekyAnts/NativeBase/issues/2118)


### Upgraded Features

*   **Accordion:** Takes flexible dataArray input by passing `item` as callback parameter instead of `title` and `content`. PR [#2125](https://github.com/GeekyAnts/NativeBase/pull/2125), closes [#2116](https://github.com/GeekyAnts/NativeBase/issues/2116)
*   **Toast:** Added `hide` function for hiding toast. PR [#2124](https://github.com/GeekyAnts/NativeBase/pull/2124), closes [#1287](https://github.com/GeekyAnts/NativeBase/issues/1287)
*   **Typescript:** Updated extended prop names. PR [#2070](https://github.com/GeekyAnts/NativeBase/pull/2070)



### Bug Fixes

*   **Card:** Fixe Card flexes with wrapping Content. PR [#2148](https://github.com/GeekyAnts/NativeBase/pull/2148), closes [#2136](https://github.com/GeekyAnts/NativeBase/issues/2136)
*   **Footer:** Vue Native - Footer issue fixed for iPhoneX. Commits ([a4a077d](https://github.com/GeekyAnts/NativeBase/commit/a4a077d1fa59aa049ab093d0e32a5c6def0ff5e1))
*   **Header:**
    -   Fixed vertical alignment of elements in Header on iPhoneX. PR [#2133](https://github.com/GeekyAnts/NativeBase/pull/2133), closes [#2128](https://github.com/GeekyAnts/NativeBase/issues/2128)
    -   Vue Native - Header issue fixed for iPhoneX. Commits ([a4a077d](https://github.com/GeekyAnts/NativeBase/commit/a4a077d1fa59aa049ab093d0e32a5c6def0ff5e1))
*   **Icon:** Fixed Ionicons, Feather and MaterialCommunityIcons font issue of 2.7.1. Commits ([951f154](https://github.com/GeekyAnts/NativeBase/commit/951f154d2a10d5459801ddce57addf3ee867e0ac)), ([f93b115](https://github.com/GeekyAnts/NativeBase/commit/f93b11530e572431ffd3148bcd65063609896e2f)), ([7a42759](https://github.com/GeekyAnts/NativeBase/commit/7a42759513706f60546ce3045376a6a93f574a48)), closes [#2138](https://github.com/GeekyAnts/NativeBase/issues/2138), [#2153](https://github.com/GeekyAnts/NativeBase/issues/2153)
*   **Input:** Modified assertion on the `Item` component to use the `displayName` prop to support HOC. PR [#2001](https://github.com/GeekyAnts/NativeBase/pull/2001), closes [#2011](https://github.com/GeekyAnts/NativeBase/issues/2011)
*   **Tabs:** Allow overriding of theme variable with explicit styles prop on Tab. PR [#2144](https://github.com/GeekyAnts/NativeBase/pull/2144), closes [#2134](https://github.com/GeekyAnts/NativeBase/issues/2134)
*   **TypeScript:** Fixed date picker props. PR [#2132](https://github.com/GeekyAnts/NativeBase/pull/2132), closes [#2126](https://github.com/GeekyAnts/NativeBase/issues/2126)
