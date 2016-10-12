
# [0.5.9](https://github.com/GeekyAnts/NativeBase/releases/tag/v0.5.9)

### Bug Fixes

-	**Picker:** Updates `Picker.Item` value dynamically ([b03f0e5](https://github.com/GeekyAnts/NativeBase/commit/b03f0e52fa417c586b3d6cd65e2caf7d8dbe0299)), closes [#169](https://github.com/GeekyAnts/NativeBase/issues/169), [#156](https://github.com/GeekyAnts/NativeBase/issues/156)
-	**Keyboard-aware-scroll-view:** 
    - resetScrollToCoords: This is an user definable prop. Coordinates that will be used to reset the scroll when the keyboard hides. Also restores scroll position after keyboard hides if <i>resetScrollToCoords</i> is not set. ([bc98be8](https://github.com/GeekyAnts/NativeBase/commit/bc98be8bb14b41df22856a618e07b71a0f9e857e))
    - disableKBDismissScroll: Disables automatic scroll on focus. ([d92aa1b](https://github.com/GeekyAnts/NativeBase/commit/d92aa1b35009d6a419b420a37a3bd2b3021c5167))
- **Content:** Eliminates margin on the top of Content which includes any fields inside of it. ([9dce714](https://github.com/GeekyAnts/NativeBase/commit/9dce7141faf591d28f2df857856c91209b42c74f)), closes [#182](https://github.com/GeekyAnts/NativeBase/issues/182)


### Enhancement Features 

-	**FooterTab:** Added onPress support for elements of FooterTab ([47a5ae7](https://github.com/GeekyAnts/NativeBase/commit/47a5ae73edd5c1112fd8aa7ed0a6a7e5015f60d7)), closes [#180](https://github.com/GeekyAnts/NativeBase/issues/180), [#188](https://github.com/GeekyAnts/NativeBase/issues/188)
- **InputGroup:** Allows null block inside InputGroup Component. ([94c7913](https://github.com/GeekyAnts/NativeBase/commit/94c7913622f489a185564fdbad215f38e71a2366)), closes [#137](https://github.com/GeekyAnts/NativeBase/issues/137), [#202](https://github.com/GeekyAnts/NativeBase/issues/202)
- **Tabs:** Helps to switch between the Tabs component programatically. Say `page = 1`. ([3253fe8](https://github.com/GeekyAnts/NativeBase/commit/3253fe81fac3004c752c196c13be1208d5b33341)), closes [#181](https://github.com/GeekyAnts/NativeBase/issues/181), [#203](https://github.com/GeekyAnts/NativeBase/issues/203)
- **Tabs:** Ensures that Tabs component's props.children is an array, else creates a single item array if it is not. Thus allows calls to .filter() and .map(). ([c9bc57d](https://github.com/GeekyAnts/NativeBase/commit/c9bc57d45199bfdc2806646dde560128053230e6)), closes [#207](https://github.com/GeekyAnts/NativeBase/issues/207)
- **ES Lint:** Config ESLint (airbnb) to enforce coding style. ([dee1deb](https://github.com/GeekyAnts/NativeBase/commit/dee1debac7a93d9772aca21436f1dd4fd97f1039))



### New Features

-	**Deck Swiper:** Tinder-like swipe cards to select/reject data set with features to swipe left and right.
- **Generate Image from Icon:** Generates an Image resource for NativeBase Icons. ([eb2e79a](https://github.com/GeekyAnts/NativeBase/commit/eb2e79afe3990295f1459fe5632832d680b5d3cc)), closes [#183](https://github.com/GeekyAnts/NativeBase/issues/183)
- **filter() for null values:** Usually if a null value is passed as a child to Component, it throws few errors. This .filter() removes all false values from this.props.children, preventing the errors, and returning the correct result. ([9690468](https://github.com/GeekyAnts/NativeBase/commit/9690468ef70c978bafaf1ddc48dec67d0deb69da))
