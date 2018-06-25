# Version [2.6.1](https://github.com/GeekyAnts/NativeBase/releases/tag/v2.6.1)

### Upgraded Features

*   **Accordion:** Added `expanded` props to accordion. PR [#1970](https://github.com/GeekyAnts/NativeBase/pull/1970)
*   **ActionSheet:** Fixed as per design guidelines. Commit [1a22d69](https://github.com/GeekyAnts/NativeBase/commit/1a22d69ddc87799a2e7f82741d5ce865e6a899ca)
*   **Date Picker:** Added `onDateChange` callback support for Android. PR [#2027](https://github.com/GeekyAnts/NativeBase/pull/2027), closes [#2016](https://github.com/GeekyAnts/NativeBase/issues/2016)
*   **Picker:** Fixed Header Left Button alignment as per design guidelines. Commit [0b4e5af](https://github.com/GeekyAnts/NativeBase/commit/0b4e5af82d5afc17bafb4b143d3694b5ebc3588c)
*   **Theme:**
    -   **Card:**
        -   Replaced `listItemPadding` for cards with new variable `cardItemPadding`. This lets to customize space between Card and CardItem. Commit [470494c](https://github.com/GeekyAnts/NativeBase/commit/470494ca720e553095022b149e49f245cd323654), closes [#2020](https://github.com/GeekyAnts/NativeBase/issues/2020)
        -   Updated `transparent` prop to render without elevation and border. PR [#2031](https://github.com/GeekyAnts/NativeBase/pull/2031)
    -   **Input:** Added Picker support with Input. Introduced `picker` prop with `<Item>`. Commit [2138e2b](https://github.com/GeekyAnts/NativeBase/commit/2138e2b51902d1e924c476090d1c96353e9c1be8)



### Bug Fixes

*   **Accordion:** Added expanded parameter to renderHeader callback method. PR [#2039](https://github.com/GeekyAnts/NativeBase/pull/2039), closes [#2023](https://github.com/GeekyAnts/NativeBase/issues/2023)
*   **Font:** Added `Fonts/MaterialCommunityIcons.ttf`. Commit [a8235c5](https://github.com/GeekyAnts/NativeBase/commit/a8235c50bdb79b955b436932d4470e263064c849)
*   **Header:** Added Statusbar color support for `transparent` Header on Android. PR [#2032](https://github.com/GeekyAnts/NativeBase/pull/2032), closes [#1981](https://github.com/GeekyAnts/NativeBase/issues/1981)
*   **Input:** Fixed FloatingLabel's float issue onFocus of Input. (everted [#1606](https://github.com/GeekyAnts/NativeBase/pull/1606)) PR [#2030](https://github.com/GeekyAnts/NativeBase/pull/2030), closes [#2000](https://github.com/GeekyAnts/NativeBase/issues/2000)