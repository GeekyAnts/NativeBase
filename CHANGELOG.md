# Version [2.3.8](https://github.com/GeekyAnts/NativeBase/releases/tag/v2.3.8)


### General

-   **Dev-dependencies:** Upgraded `react-native-easy-grid` from 0.1.15 to 0.1.17


### Enhancement Features

-   **Button:** Improved Button theme structure to remove code redundancies. PR ([#1515](https://github.com/GeekyAnts/NativeBase/pull/1515)), closes ([#1137](https://github.com/GeekyAnts/NativeBase/issues/1137))
-   **CardItem:** Improved CardItem theme structure to remove code redundancies. PR ([#1516](https://github.com/GeekyAnts/NativeBase/pull/1516))
-   **Icon:** Accept Icon Type as a prop. PR ([#1319](https://github.com/GeekyAnts/NativeBase/pull/1319)), closes ([#1346](https://github.com/GeekyAnts/NativeBase/issues/1346))
-   **List:** Added enable EmptySections flag to List to render empty section headers. PR ([#1339](https://github.com/GeekyAnts/NativeBase/pull/1339))
-   **Toast:** 
    -   Toast component improvements with `onClose` callback. PR ([#1392](https://github.com/GeekyAnts/NativeBase/pull/1392))
    -   Fixed Toast timeout bug. *Save the timeout ID when a toast is shown so that we can clear any existing timeout when a new toast is shown so that an old timeout doesn't close a new toast prematurely.* PR ([#1542](https://github.com/GeekyAnts/NativeBase/pull/1542))
-   **TypeScript:** Added optional `SwipeRow` properties to prevent tslint error. PR ([#1507](https://github.com/GeekyAnts/NativeBase/pull/1507))


### Bug Fixes

-   **Input:** FLoating Label is cropped from top while it floats on top. PR ([#1547](https://github.com/GeekyAnts/NativeBase/pull/1547)), closes ([#1532](https://github.com/GeekyAnts/NativeBase/issues/1532))
-   **H1, H2, H3:** `H1`, `H2`, `H3` now takes number along with string as input. PR ([#1539](https://github.com/GeekyAnts/NativeBase/pull/1539)), closes ([#516](https://github.com/GeekyAnts/NativeBase/issues/516))
-   **Segment:** Fixed segment overlapping with Right element in Header. PR ([#1554](https://github.com/GeekyAnts/NativeBase/pull/1554)), closes ([#1160](https://github.com/GeekyAnts/NativeBase/issues/1160))
-   **Theme:** Fixed menu icon color for Android. PR ([#1538](https://github.com/GeekyAnts/NativeBase/pull/1538)), closes ([#1537](https://github.com/GeekyAnts/NativeBase/issues/1537))
-   **TypeScript:** 
    -   Added TypeScript support for Picker `placeholderStyle`. PR ([#1546](https://github.com/GeekyAnts/NativeBase/pull/1546)), closes ([#1544](https://github.com/GeekyAnts/NativeBase/issues/1544))
    -   `ViewStyles` to accept array. PR ([#1529](https://github.com/GeekyAnts/NativeBase/pull/1529)), closes ([#1520](https://github.com/GeekyAnts/NativeBase/issues/1520))
    -   Typescript declaration file missing `ScrollableTab`. PR ([#1519](https://github.com/GeekyAnts/NativeBase/pull/1519)), closes ([#1517](https://github.com/GeekyAnts/NativeBase/issues/1517))
    -   Fixed Header `Title` type. PR ([#1496](https://github.com/GeekyAnts/NativeBase/pull/1496))

