# Version [2.12.0] (https://github.com/GeekyAnts/NativeBase/releases/tag/v2.12.0)


### General Features

*   **Installation:** Changed `CRNA` to `Expo` in installation instructions. PR [#2584](https://github.com/GeekyAnts/NativeBase/pull/2584).
*   **Vulnerability Issue:** Upgraded loadsh to fix vulnerability issue. Commit [10d381a](https://github.com/GeekyAnts/NativeBase/commit/10d381a81ca0df072bfcf9d55622f80bf8ab8a8c), [e6e7946](https://github.com/GeekyAnts/NativeBase/commit/e6e794630ca6db29e1d072c02798fc1f4cb7f744), closes [#2602](https://github.com/GeekyAnts/NativeBase/issues/2602)


### Upgraded Features

*   **Accordion:** Added Test case for Accordion. PR[#2578](https://github.com/GeekyAnts/NativeBase/pull/2578), closes [#2546](https://github.com/GeekyAnts/NativeBase/issues/2546)
*   **FAB:** Disable FABs android ripple effect and ripple effect wrt borderRadius. Commit[56597c4](https://github.com/GeekyAnts/NativeBase/commit/56597c45df1b75e1658b1e049d38e08dbc954e3e), closes [#2313](https://github.com/GeekyAnts/NativeBase/issues/2313)
*   **Item:** Added Item Event Handler. PR [#2552](https://github.com/GeekyAnts/NativeBase/pull/2552), closes [#2525](https://github.com/GeekyAnts/NativeBase/issues/2525).
*   **Tabs:** Tabs width update. PR [#2572](https://github.com/GeekyAnts/NativeBase/pull/2572), closes [#2558](https://github.com/GeekyAnts/NativeBase/issues/2558)
*   **Theme:** 
   - iPhoneX feature flag modification from specified theme. PR[#2514](https://github.com/GeekyAnts/NativeBase/pull/2514), closes [#2382](https://github.com/GeekyAnts/NativeBase/issues/2382)
   - Updated theme variable value for ListItem. PR[#2569](https://github.com/GeekyAnts/NativeBase/pull/2569), closes [#2513](https://github.com/GeekyAnts/NativeBase/issues/2513)
*   **Typescript:** 
   - Added Button `hasText` to Typescript. PR[#2526](https://github.com/GeekyAnts/NativeBase/pull/2526).
   - Added hide() function to Toast typing. PR[#2521](https://github.com/GeekyAnts/NativeBase/pull/2521).
   - Added `prerenderingSiblingsNumber` to Tabs. PR [#2531](https://github.com/GeekyAnts/NativeBase/pull/2531), closes [#1620](https://github.com/GeekyAnts/NativeBase/issues/1620)
   - Updated Type definitions. PR [#2210](https://github.com/GeekyAnts/NativeBase/pull/2210).



### Bug Fixes

*   **ActionSheet:** Fixed height issue. PR [#2553](https://github.com/GeekyAnts/NativeBase/pull/2553), closes [#2545](https://github.com/GeekyAnts/NativeBase/issues/2545)
*   **Button:** Fixed nested array style. PR [#2511](https://github.com/GeekyAnts/NativeBase/pull/2511), closes [#2419](https://github.com/GeekyAnts/NativeBase/issues/2419)
*   **DatePicker:** Date Picker disabled prop fix. PR [#2510](https://github.com/GeekyAnts/NativeBase/pull/2510), closes [#2509](https://github.com/GeekyAnts/NativeBase/issues/2509)
*   **Fab:** Fixed Fab syntax bugs. PR [#2577](https://github.com/GeekyAnts/NativeBase/pull/2577)
*   **Picker:** Picker text ellipsize for iOS. Commit [460eddc](https://github.com/GeekyAnts/NativeBase/commit/460eddcc843662061bc1de11650585360d72321f), closes [#2431](https://github.com/GeekyAnts/NativeBase/issues/2431)
*   **Theme:** 
    - Fixed Header height issue for iPhoneX with material theme combination. Commit [4c8a68b](https://github.com/GeekyAnts/NativeBase/commit/4c8a68b1886bfd1eca8d976d72726ffe6062bc94), closes [#2581](https://github.com/GeekyAnts/NativeBase/issues/2581)
*   **Typescript:** Fixed React Native style types refs. PR [#2562](https://github.com/GeekyAnts/NativeBase/pull/2562), closes [#2123](https://github.com/GeekyAnts/NativeBase/issues/2123)