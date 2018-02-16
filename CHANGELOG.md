# Version [2.3.9](https://github.com/GeekyAnts/NativeBase/releases/tag/v2.3.9)


### General

-   **Button:** TouchableNativeFeedback supports Android Platform Version 21 onwards. PR ([#1581](https://github.com/GeekyAnts/NativeBase/pull/1581)), closes ([#1580](https://github.com/GeekyAnts/NativeBase/issues/1580))


### Enhancement Features

-   **Theme:** Fix/remove platform dependency/materialjs. PR ([#1563](https://github.com/GeekyAnts/NativeBase/pull/1563))
-   **Toast:**
    -   Refactored ToastContainer to DRY-up calls to `Animated.timing`.
    -   Save a timeout when fading the toast out by using the `Animated.timing completion` callback.
    PR ([#1562](https://github.com/GeekyAnts/NativeBase/pull/1562))
-   **Typescript:**
    -   Added `thumbnail` prop in ListItem Typescript. PR ([#1583](https://github.com/GeekyAnts/NativeBase/pull/1583))
    -   Added `small` and `large` properties to Thumbnail. PR ([#1590](https://github.com/GeekyAnts/NativeBase/pull/1590))
    -   Added `leftOpenValue` property to interface List. PR ([#1569](https://github.com/GeekyAnts/NativeBase/pull/1569)), closes ([#1565](https://github.com/GeekyAnts/NativeBase/issues/1565))
    -   Added few Card and CardItem types. PR ([#1588](https://github.com/GeekyAnts/NativeBase/pull/1588))
    -   Added `type` prop to Icon. PR ([#1594](https://github.com/GeekyAnts/NativeBase/pull/1594))
    -   Added button icon types for ActionSheet options. PR ([#1589](https://github.com/GeekyAnts/NativeBase/pull/1589))


### Bug Fixes

-   **ActionSheet:**
    -   Fixed warning issue. Changed Flatlist keytype from number to string. PR ([#1573](https://github.com/GeekyAnts/NativeBase/pull/1573)), closes ([#1571](https://github.com/GeekyAnts/NativeBase/issues/1571))
    -   Defined bounds of ActionSheet modal to restrict within the Root container in case of huge list of options for ActionSheet modal. PR ([#1597](https://github.com/GeekyAnts/NativeBase/pull/1597)), closes ([#1595](https://github.com/GeekyAnts/NativeBase/issues/1595))
-   **Footer:** Styled child components of Footer. PR ([#1582](https://github.com/GeekyAnts/NativeBase/pull/1582)), closes ([#1576](https://github.com/GeekyAnts/NativeBase/issues/1576))
-   **Input:** Fixed overlapsping of Stack label with Input text field when wrapped without Content. PR ([#1585](https://github.com/GeekyAnts/NativeBase/pull/1585)), closes ([#1533](https://github.com/GeekyAnts/NativeBase/issues/1533))
-   **Typescript:**
    -   Changed `SubTitle` to `Subtitle`. PR ([#1586](https://github.com/GeekyAnts/NativeBase/pull/1586))