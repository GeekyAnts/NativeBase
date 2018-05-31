# Version [](https://github.com/GeekyAnts/NativeBase/releases/tag/)

### New Features

*   Added Accordion component. ([28b1033](https://github.com/GeekyAnts/NativeBase/commit/28b1033241a3b91177bb7eda5d5ca0cacf9f14b8)), closes [#1721](https://github.com/GeekyAnts/NativeBase/issues/1721)
*   Added Date Picker component. ([b7968c4](https://github.com/GeekyAnts/NativeBase/commit/b7968c4cc057f3162f75812134bf5c0bb06f59ef)), closes [#882](https://github.com/GeekyAnts/NativeBase/issues/882)
*   Added Jest test cases to components. ([b267c1c](https://github.com/GeekyAnts/NativeBase/commit/b267c1cc8af542c13db8641c791cbd3233b82f10))



### Upgraded Features

*	Upgraded dev dependencies to support Jest test cases. ([b267c1c](https://github.com/GeekyAnts/NativeBase/commit/b267c1cc8af542c13db8641c791cbd3233b82f10))
*   Safearea implementation for Header, Content and Footer. PR [#1614](https://github.com/GeekyAnts/NativeBase/pull/1614), [#1920](https://github.com/GeekyAnts/NativeBase/pull/1920), closes [#1951](https://github.com/GeekyAnts/NativeBase/issues/1951)
*   **Icon:** Added `type` Icon Proptypes. PR [#1797](https://github.com/GeekyAnts/NativeBase/pull/1797)
*   **Picker:** Added back `modalStyle` for iOS picker. PR [#1928](https://github.com/GeekyAnts/NativeBase/pull/1928), closes [#1923](https://github.com/GeekyAnts/NativeBase/issues/1923)
*   **Segment:** Added icon support with segments. PR [#1929](https://github.com/GeekyAnts/NativeBase/pull/1929)
*   **Typescript:**
    -   Added Icon typing to Button. PR [#1902](https://github.com/GeekyAnts/NativeBase/pull/1902)
    -   Added `noIndent` typing to ListItem. PR [#1902](https://github.com/GeekyAnts/NativeBase/pull/1902)
    -   Updated with new types which supports latest of react-native types (16.3+). PR [#1913](https://github.com/GeekyAnts/NativeBase/pull/1913), closes [#1905](https://github.com/GeekyAnts/NativeBase/issues/1905)



### Bug Fixes

*   **ActionSheet:**
    -   Update ActionSheet `refs`, if application root is reinitialized. PR [#1700](https://github.com/GeekyAnts/NativeBase/pull/1700), closes [#1397](https://github.com/GeekyAnts/NativeBase/issues/1397), [#1315](https://github.com/GeekyAnts/NativeBase/issues/1315), [#937](https://github.com/GeekyAnts/NativeBase/issues/937), [#1895](https://github.com/GeekyAnts/NativeBase/issues/1895)
    -   Title space added to Actionsheet only in presence of title prop. PR [#1945](https://github.com/GeekyAnts/NativeBase/pull/1945), closes [#1938](https://github.com/GeekyAnts/NativeBase/issues/1938)
*   **Button:** `View` renders Block style button in `Form` for Android. PR [#1900](https://github.com/GeekyAnts/NativeBase/pull/1900), closes [#1852](https://github.com/GeekyAnts/NativeBase/issues/1852)
*   **Input:** Floating Label reset its position when input is cleared. PR [#1606](https://github.com/GeekyAnts/NativeBase/pull/1606), closes [#1079](https://github.com/GeekyAnts/NativeBase/issues/1079), [#1605](https://github.com/GeekyAnts/NativeBase/issues/1605)
*   **ListItem:**
    -   Added `touchableHighlightStyle` props for listItem. PR [#1890](https://github.com/GeekyAnts/NativeBase/pull/1890), closes [#1799](https://github.com/GeekyAnts/NativeBase/issues/1799)
    -   ListItem supports all touchablenativefeedback props. PR [#1950](https://github.com/GeekyAnts/NativeBase/pull/1950), closes [#1946](https://github.com/GeekyAnts/NativeBase/issues/1946)
*   **Picker:**
    -   Picker renders with single item defined in its `Item` list. PR [#1921](https://github.com/GeekyAnts/NativeBase/pull/1921), closes [#1918](https://github.com/GeekyAnts/NativeBase/issues/1918)
    -   Picker radio button aligned to right. PR [#1953](https://github.com/GeekyAnts/NativeBase/pull/1953), closes [#1952](https://github.com/GeekyAnts/NativeBase/issues/1952)
*   **Segment:** Removed segment button horizontal padding. PR [#1926](https://github.com/GeekyAnts/NativeBase/pull/1926), closes [#1917](https://github.com/GeekyAnts/NativeBase/issues/1917)
*   **Toast:**
    -   Update Toast `refs`, if application root is reinitialized. PR [#1700](https://github.com/GeekyAnts/NativeBase/pull/1700), closes [#1121](https://github.com/GeekyAnts/NativeBase/issues/1121), [#1895](https://github.com/GeekyAnts/NativeBase/issues/1895), [#1790](https://github.com/GeekyAnts/NativeBase/issues/1790)
    -   Set Toast without timeout along with reason for `onClose`. PR [#1737](https://github.com/GeekyAnts/NativeBase/pull/1737), closes [#1706](https://github.com/GeekyAnts/NativeBase/issues/1706), closes [#1708](https://github.com/GeekyAnts/NativeBase/issues/1708)
*   **Typescript:** CheckBox interface extends Touchableopacity props. PR [#1912](https://github.com/GeekyAnts/NativeBase/pull/1912), closes [#1906](https://github.com/GeekyAnts/NativeBase/issues/1906)
