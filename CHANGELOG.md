# Version [2.3.5](https://github.com/GeekyAnts/NativeBase/releases/tag/v2.3.5)

### Bug Fixes

-   **Release Crash:** Fixed PropTypes issue, which caused Release Crash for iOS and Android.
PR ([#1382](https://github.com/GeekyAnts/NativeBase/pull/1382)), closes ([#1348](https://github.com/GeekyAnts/NativeBase/issues/1348))
-   **Actionsheet:** 
    -   Actionsheet for Android returns `buttonIndex` as number.
        PR ([#1401](https://github.com/GeekyAnts/NativeBase/pull/1401)), closes ([#1353](https://github.com/GeekyAnts/NativeBase/issues/1353))
    -   Fixed Actionsheet returning different buttonIndex for different platforms when on touch outside
        PR ([#1407](https://github.com/GeekyAnts/NativeBase/pull/1407))
-   **Card:** Fixed UI breakage with Card for iPhoneX view.
PR ([#1417](https://github.com/GeekyAnts/NativeBase/pull/1417)), closes ([#1234](https://github.com/GeekyAnts/NativeBase/issues/1234))
-   **Icon:** Wrong icon name mapping for Android.
PR ([#1404](https://github.com/GeekyAnts/NativeBase/pull/1404)), closes ([#1331](https://github.com/GeekyAnts/NativeBase/issues/1331))
-   **Picker:** Added placeholderStyle to Picker. Customizable color for Icon with Picker
PR ([#1414](https://github.com/GeekyAnts/NativeBase/pull/1414)), closes ([#1413](https://github.com/GeekyAnts/NativeBase/issues/1413))
-   **Searchbar:** Text vertically centered in Header SearchBar.
PR ([#1403](https://github.com/GeekyAnts/NativeBase/pull/1403)), closes ([#1028](https://github.com/GeekyAnts/NativeBase/issues/1028))
-   **Tabs:** Fixed `overlayTop` position for Tabs.
PR ([#1405](https://github.com/GeekyAnts/NativeBase/pull/1405)), closes ([#1330](https://github.com/GeekyAnts/NativeBase/issues/1330))
-   **Toast:** Text and Button-text supports empty string. Added default duration of 1500.
PR ([#1395](https://github.com/GeekyAnts/NativeBase/pull/1395)), closes ([#1351](https://github.com/GeekyAnts/NativeBase/issues/1351))
-   **Theme:** 
    -   Removed unused variable `listItemHeight`.
        PR ([#1412](https://github.com/GeekyAnts/NativeBase/pull/1412)), closes ([#1398](https://github.com/GeekyAnts/NativeBase/issues/1398))
    -   Use theme to turn off `uppercase` buttons on Android
        PR ([#1422](https://github.com/GeekyAnts/NativeBase/pull/1422)), closes ([#1235](https://github.com/GeekyAnts/NativeBase/issues/1235))
