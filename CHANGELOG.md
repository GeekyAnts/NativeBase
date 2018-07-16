# Version [2.7.1](https://github.com/GeekyAnts/NativeBase/releases/tag/v2.7.1)

### General Features

*   **React Native Vector Icons:** Upgraded from 4.5.0 to 4.6.0. Commit ([4420ec3](https://github.com/GeekyAnts/NativeBase/commit/4420ec37ee8e802b38237703e82824307fcf7d13)), ([9963c3e](https://github.com/GeekyAnts/NativeBase/commit/9963c3e2055fcbefb58a2d9df87e655fb43c1409))


### Upgraded Features

*   **ActionSheet:** Added hide() to close actionsheet on command (Android). PR [#2099](https://github.com/GeekyAnts/NativeBase/pull/2099), closes [#2090](https://github.com/GeekyAnts/NativeBase/issues/2090)
*   **Date Picker:**
    -   Show default date if `placeHolderText` prop is not defined. PR [#2087](https://github.com/GeekyAnts/NativeBase/pull/2087), closes [#2086](https://github.com/GeekyAnts/NativeBase/issues/2086)
    -   Added `disabled` prop to prevent user making selection of date. PR [#2114](https://github.com/GeekyAnts/NativeBase/pull/2114), closes [#2113](https://github.com/GeekyAnts/NativeBase/issues/2113)
    -   Allow formatting of DatePicker chosen date text. Commit ([0b59fb7](https://github.com/GeekyAnts/NativeBase/commit/0b59fb7eab77c51b36508f3ba842911260426ffd)), closes [#2056](https://github.com/GeekyAnts/NativeBase/issues/2056)
*   **Drawer:** Deprecated NativeBase Drawer. PR [#2100](https://github.com/GeekyAnts/NativeBase/pull/2100)
*   **Tab:** Tab button text font size is customizable from theme. PR [#2051](https://github.com/GeekyAnts/NativeBase/pull/2051), closes [#1992](https://github.com/GeekyAnts/NativeBase/issues/1992)
*   **Theme:** Added default background color (white) for container component. PR [#2068](https://github.com/GeekyAnts/NativeBase/pull/2068)


### Bug Fixes

*   **Checkbox:** Checkbox icon takes `CheckboxIconMarginTop` theme variable. PR [#1944](https://github.com/GeekyAnts/NativeBase/pull/1944)
*   **Picker:** Supports different `Picker.Item` generation. PR [#2074](https://github.com/GeekyAnts/NativeBase/pull/2074), closes [#983](https://github.com/GeekyAnts/NativeBase/issues/983)
*   **Theme:** Theme files support transform (array of objects). PR [#2106](https://github.com/GeekyAnts/NativeBase/pull/2106), closes [#2103](https://github.com/GeekyAnts/NativeBase/issues/2103)
*   **Typescript:**
    -   Added prop "mode" in Picker. PR [#2021](https://github.com/GeekyAnts/NativeBase/pull/2021)
    -   Added Content `keyboardShouldPersistTaps` and `keyboardDismissMode` typings. Commit ([bf33038](https://github.com/GeekyAnts/NativeBase/commit/bf3303876f9f7cb9d66f9e9a9c73315e26f655e8))
