# Version [2.4.3](https://github.com/GeekyAnts/NativeBase/releases/tag/v2.4.3)


### General
-   **Folder Structure:** Renamed `Utils` to `utils`. PR ([#1795](https://github.com/GeekyAnts/NativeBase/pull/1795))


### Bug Fixes
-   **Button:** Removed `lineHeight` dependency in button. PR ([#1829](https://github.com/GeekyAnts/NativeBase/pull/1829)), closes ([#1827](https://github.com/GeekyAnts/NativeBase/issues/1827))
-   **Card:**
    -   Added `noShadow` to card theme. PR ([#1821](https://github.com/GeekyAnts/NativeBase/pull/1821)), closes ([#1819](https://github.com/GeekyAnts/NativeBase/issues/1819))
    -   Fixed CardItem header and footer border for Android. PR ([#1820](https://github.com/GeekyAnts/NativeBase/pull/1820)), closes ([#1818](https://github.com/GeekyAnts/NativeBase/issues/1818))
-   **Header:** Reduce space between left button and title for Android. PR ([#1789](https://github.com/GeekyAnts/NativeBase/pull/1789)), closes ([#1550](https://github.com/GeekyAnts/NativeBase/issues/1550))
-   **Input:**
    -   FloatingLabel renders icon, label and input in its order of definition. PR ([d51b2f9](https://github.com/GeekyAnts/NativeBase/commit/d51b2f94cadd4f60d2a17445c2b9f52d6a35597a), [#1796](https://github.com/GeekyAnts/NativeBase/pull/1796)), closes ([#1781](https://github.com/GeekyAnts/NativeBase/issues/1781))
    -   Added missing ref to Input in Item.js. PR ([#1786](https://github.com/GeekyAnts/NativeBase/pull/1786)), closes ([#1780](https://github.com/GeekyAnts/NativeBase/issues/1780))
    -   Removed `lineHeight` dependency of Input. PR ([#1835](https://github.com/GeekyAnts/NativeBase/pull/1835)), closes ([#1731](https://github.com/GeekyAnts/NativeBase/issues/1731))
-   **Picker:** Removed Content warapping Flatlist. PR ([#1817](https://github.com/GeekyAnts/NativeBase/pull/1817)), closes ([#1816](https://github.com/GeekyAnts/NativeBase/issues/1816))
-   **Typescript:**
    -   Moved listview properties of interface ReactListViewProperties to Card interface. PR ([#1785](https://github.com/GeekyAnts/NativeBase/pull/1785)), closes ([#1765](https://github.com/GeekyAnts/NativeBase/issues/1765))
    -   Added missing props to list interface. PR ([#1802](https://github.com/GeekyAnts/NativeBase/pull/1802)), closes ([#1801](https://github.com/GeekyAnts/NativeBase/issues/1801))
    -   Added `getRef` to Input interface. PR ([#1804](https://github.com/GeekyAnts/NativeBase/pull/1804)), closes ([#1803](https://github.com/GeekyAnts/NativeBase/issues/1803))
    -   Added `span` and `hasSubtitle` to Header interface. PR ([#1828](https://github.com/GeekyAnts/NativeBase/pull/1828)), closes ([#1824](https://github.com/GeekyAnts/NativeBase/issues/1824))
    -   Added missing props of Picker, Header, SwipeRow, Toast. PR ([#1839](https://github.com/GeekyAnts/NativeBase/pull/1839)), closes ([#1838](https://github.com/GeekyAnts/NativeBase/issues/1838))