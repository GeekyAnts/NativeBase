# Version [2.4.2](https://github.com/GeekyAnts/NativeBase/releases/tag/v2.4.2)


### General

-   Upgraded `react native vector icons`. PR ([#1718](https://github.com/GeekyAnts/NativeBase/pull/1718))
-   Upgraded `react-native-keyboard-aware-scroll-view `. PR ([#1719](https://github.com/GeekyAnts/NativeBase/pull/1719))



### Bug Fixes
-   **Button:**
    -   Fixed icon alignment with `small` button for iOS. PR ([#1761](https://github.com/GeekyAnts/NativeBase/pull/1761)), closes ([#1743](https://github.com/GeekyAnts/NativeBase/issues/1743))
    -   Added `transparent` theme with `disabled` button. PR ([#1760](https://github.com/GeekyAnts/NativeBase/pull/1760)), closes ([#1742](https://github.com/GeekyAnts/NativeBase/issues/1742))
    -   Added `maxHeight` to rounded button. PR ([#1754](https://github.com/GeekyAnts/NativeBase/pull/1754)), closes ([#1749](https://github.com/GeekyAnts/NativeBase/issues/1749))
    -   Aligned icons with title text. PR ([#1775](https://github.com/GeekyAnts/NativeBase/pull/1775)), closes ([#1724](https://github.com/GeekyAnts/NativeBase/issues/1724))
-   **Content:** Moved padding from Content's style to `contentContainerStyle`. PR ([#1738](https://github.com/GeekyAnts/NativeBase/pull/1738)), closes ([#1720](https://github.com/GeekyAnts/NativeBase/issues/1720))
-   **Input:**
    -   Fixed Input scrolling issue for `stackedLabel`. Closes ([#1766](https://github.com/GeekyAnts/NativeBase/issues/1766))
    -   Input fixed to fetch variables from theme context. `inputColorPlaceholder` reflects changes when customized in ejected theme. PR ([#1751](https://github.com/GeekyAnts/NativeBase/pull/1751)), closes ([#1750](https://github.com/GeekyAnts/NativeBase/issues/1750))
-   **Searchbar:** Fixed searchbar input lineHeight when `Input` is passed with `value`. PR ([#1759](https://github.com/GeekyAnts/NativeBase/pull/1759)), closes ([#1731](https://github.com/GeekyAnts/NativeBase/issues/1731))
-   **TypeScript:**
    -   Added contentProps to Tabs. PR ([#1748](https://github.com/GeekyAnts/NativeBase/pull/1748)), closes ([#1747](https://github.com/GeekyAnts/NativeBase/issues/1747))
    -   Overrided picker style type. PR ([#1753](https://github.com/GeekyAnts/NativeBase/pull/1753)), closes ([#1145](https://github.com/GeekyAnts/NativeBase/issues/1145))