# Version [2.3.6](https://github.com/GeekyAnts/NativeBase/releases/tag/v2.3.6)

### New Features
-   **Font:**
    -   Adding support for Feather Font. PR ([#1383](https://github.com/GeekyAnts/NativeBase/pull/1383)), closes ([#1379](https://github.com/GeekyAnts/NativeBase/issues/1379))
    -   Added support for EvilIcons. PR([#1477](https://github.com/GeekyAnts/NativeBase/pull/1477), closes ([#1468](https://github.com/GeekyAnts/NativeBase/issues/1468))


### Enhancement Features

-   **ActionSheet:** Replaced ListView with FlatList in ActionSheet. PR ([#1447](https://github.com/GeekyAnts/NativeBase/pull/1447))
-   **CardItem:** Added activeOpacity prop for CardItem. PR ([#1454](https://github.com/GeekyAnts/NativeBase/pull/1454)), closes ([#1453](https://github.com/GeekyAnts/NativeBase/issues/1453))
-   **Picker:** Replaced ListView with FlatList in Picker. PR ([#1442](https://github.com/GeekyAnts/NativeBase/pull/1442)), closes ([#1239](https://github.com/GeekyAnts/NativeBase/issues/1239))
-   **SwipeRow:** Added style implementation for SwipeRow. PR ([#1451](https://github.com/GeekyAnts/NativeBase/pull/1451)), closes ([#1430](https://github.com/GeekyAnts/NativeBase/issues/1430))
-   **Theme:**
    -   Updated Shoutem theme from 0.2.1 to 0.2.2. PR ([#4 GeekyAnts theme](https://github.com/GeekyAnts/theme/pull/4)), closes ([#1359](https://github.com/GeekyAnts/NativeBase/issues/1359))
    -   Removed unused theme variables. PR ([#1463](https://github.com/GeekyAnts/NativeBase/pull/1463), [#1480](https://github.com/GeekyAnts/NativeBase/pull/1480)), closes ([#1481](https://github.com/GeekyAnts/NativeBase/issues/1481))
    -   Sorted variables component-wise alphabetically.
-   **Type definition:**
    -   Updated type definition for ActionSheet. Title optional. PR ([#1426](https://github.com/GeekyAnts/NativeBase/pull/1426)), closes ([#1425](https://github.com/GeekyAnts/NativeBase/issues/1425))
    -   Added Btn, Tabs and Tabs missing types. PR ([#1338](https://github.com/GeekyAnts/NativeBase/pull/1338))


### Bug Fixes

-   **General:**
    -   Removes unused and broken var declaration. PR ([#1396](https://github.com/GeekyAnts/NativeBase/pull/1396)), closes ([#1359](https://github.com/GeekyAnts/NativeBase/issues/1359))
    -   Added missing property style to interface separator in index.d.ts. PR ([#1441](https://github.com/GeekyAnts/NativeBase/pull/1441)), closes ([#1398](https://github.com/GeekyAnts/NativeBase/issues/1398))
-   **FAB:** 
    -   Fixed buttongroup popping out initially on bottomLeft.
    -   Proper spacing between FAB and buttongroup 
    for all positions.
    -   PR ([#1448](https://github.com/GeekyAnts/NativeBase/pull/1448)), closes ([#1432](https://github.com/GeekyAnts/NativeBase/issues/1432))
-   **Tab:** Tab's initialPage and tab indicator issue fixed. PR ([#1376](https://github.com/GeekyAnts/NativeBase/pull/1376), [#1443](https://github.com/GeekyAnts/NativeBase/pull/1443)), closes ([#1010](https://github.com/GeekyAnts/NativeBase/issues/1010))
-   **Type definition:** SwipeRow not exported in TypeScript definition. Added missing export SubTitle in typescript 
    declaration file. PR ([#1424](https://github.com/GeekyAnts/NativeBase/pull/1424)), closes ([#1423](https://github.com/GeekyAnts/NativeBase/issues/1423))
