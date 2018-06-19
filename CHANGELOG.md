# Version [2.5.2](https://github.com/GeekyAnts/NativeBase/releases/tag/v2.5.2)

### Upgraded Features

*   **Accordion:** Added border style to accordion along with customisable from theme. PR [#2010](https://github.com/GeekyAnts/NativeBase/pull/2010) 
*   **Card:** Added card borderRadius to theme. PR [#2008](https://github.com/GeekyAnts/NativeBase/pull/2008), closes [#1845](https://github.com/GeekyAnts/NativeBase/issues/1845)
*   **DatePicker:**
    -   Exposed `onDateChange` method for iOS. PR [#1987](https://github.com/GeekyAnts/NativeBase/pull/1987)
    -   Added `placeHolderTextStyle` props to DatePicker. PR [#1972](https://github.com/GeekyAnts/NativeBase/pull/1972), closes [#1991](https://github.com/GeekyAnts/NativeBase/issues/1991)
*	**Header:** Added `transparent` prop with Header. PR [#1995](https://github.com/GeekyAnts/NativeBase/pull/1995), closes [#1981](https://github.com/GeekyAnts/NativeBase/issues/1981)
*   **Typescript:** Added definitions for Accordion and DatePicker. PR [#1997](https://github.com/GeekyAnts/NativeBase/pull/1997), closes [#1986](https://github.com/GeekyAnts/NativeBase/issues/1986)


### Bug Fixes

*   **General:** NativeBase passes flow check. [4663af0](https://github.com/GeekyAnts/NativeBase/commit/4663af052e6e4852d3c37289503f84201ba04c26), closes [#633](https://github.com/GeekyAnts/NativeBase/issues/633)
*   **Header:** Fix header padding issue on iphoneX in case of inline styles. PR [#2012](https://github.com/GeekyAnts/NativeBase/pull/2012), closes [#1985](https://github.com/GeekyAnts/NativeBase/issues/1985)
*   **Input:**
    -   StackedLabel supports `multiline` prop. PR [#1927](https://github.com/GeekyAnts/NativeBase/pull/1927), closes [#1924](https://github.com/GeekyAnts/NativeBase/issues/1924)
    -   Fixed back StackedLabel input scroll. PR [#2007](https://github.com/GeekyAnts/NativeBase/pull/2007), closes [#2006](https://github.com/GeekyAnts/NativeBase/issues/2006)
    -   FloatingLabel supports `multiline` prop. PR [#1935](https://github.com/GeekyAnts/NativeBase/pull/1935)
    -   Added check to filter out Input. PR [#1922](https://github.com/GeekyAnts/NativeBase/pull/1922), closes [#1915](https://github.com/GeekyAnts/NativeBase/issues/1915)
*   **Tabs:** Tab button text font size is customizable from theme. PR [#1996](https://github.com/GeekyAnts/NativeBase/pull/1996), closes [#1992](https://github.com/GeekyAnts/NativeBase/issues/1992)
*   **Typescript:** 
    -   Fixed typo. PR [#1990](https://github.com/GeekyAnts/NativeBase/pull/1990), closes [#1982](https://github.com/GeekyAnts/NativeBase/issues/1982)