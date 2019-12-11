// @flow

import color from 'color';
import { Platform, PixelRatio } from 'react-native';

import { deviceHeight, deviceWidth, isIos, isIphoneX } from './common';

const platform = Platform.OS;
const platformStyle = undefined;

export default {
  platformStyle,
  platform,

  // Accordion
  accordionBorderColor: '#d3d3d3',
  accordionContentPadding: 10,
  accordionIconFontSize: 18,
  contentStyle: '#f5f4f5',
  expandedIconStyle: '#000',
  headerStyle: '#edebed',
  iconStyle: '#000',

  // ActionSheet
  elevation: 4,
  containerTouchableBackgroundColor: 'rgba(0,0,0,0.4)',
  innerTouchableBackgroundColor: '#fff',
  listItemHeight: 50,
  listItemBorderColor: 'transparent',
  marginHorizontal: -15,
  marginLeft: 14,
  marginTop: 15,
  minHeight: 56,
  padding: 15,
  touchableTextColor: '#757575',

  // Android
  androidRipple: true,
  androidRippleColor: 'rgba(256, 256, 256, 0.3)',
  androidRippleColorDark: 'rgba(0, 0, 0, 0.15)',
  buttonUppercaseAndroidText: true,

  // Badge
  badgeBg: '#ED1727',
  badgeColor: '#fff',
  badgePadding: isIos ? 3 : 0,

  // Button
  buttonFontFamily: isIos ? 'System' : 'Roboto_medium',
  buttonDisabledBg: '#b5b5b5',
  buttonPadding: 6,
  buttonDefaultActiveOpacity: 0.5,
  buttonDefaultFlex: 1,
  buttonDefaultBorderRadius: 2,
  buttonDefaultBorderWidth: 1,
  get buttonPrimaryBg() {
    return this.brandPrimary;
  },
  get buttonPrimaryColor() {
    return this.inverseTextColor;
  },
  get buttonInfoBg() {
    return this.brandInfo;
  },
  get buttonInfoColor() {
    return this.inverseTextColor;
  },
  get buttonSuccessBg() {
    return this.brandSuccess;
  },
  get buttonSuccessColor() {
    return this.inverseTextColor;
  },
  get buttonDangerBg() {
    return this.brandDanger;
  },
  get buttonDangerColor() {
    return this.inverseTextColor;
  },
  get buttonWarningBg() {
    return this.brandWarning;
  },
  get buttonWarningColor() {
    return this.inverseTextColor;
  },
  get buttonTextSize() {
    return isIos ? this.fontSizeBase * 1.1 : this.fontSizeBase - 1;
  },
  get buttonTextSizeLarge() {
    return this.fontSizeBase * 1.5;
  },
  get buttonTextSizeSmall() {
    return this.fontSizeBase * 0.8;
  },
  get borderRadiusLarge() {
    return this.fontSizeBase * 3.8;
  },
  get iconSizeLarge() {
    return this.iconFontSize * 1.5;
  },
  get iconSizeSmall() {
    return this.iconFontSize * 0.6;
  },

  // Card
  cardDefaultBg: '#fff',
  cardBorderColor: '#ccc',
  cardBorderRadius: 2,
  cardItemPadding: isIos ? 10 : 12,

  // CheckBox
  CheckboxRadius: isIos ? 13 : 0,
  CheckboxBorderWidth: isIos ? 1 : 2,
  CheckboxPaddingLeft: isIos ? 4 : 2,
  CheckboxPaddingBottom: isIos ? 0 : 5,
  CheckboxIconSize: isIos ? 21 : 16,
  CheckboxIconMarginTop: isIos ? undefined : 1,
  CheckboxFontSize: isIos ? 23 / 0.9 : 17,
  checkboxBgColor: '#039BE5',
  checkboxSize: 20,
  checkboxTickColor: '#fff',
  checkboxDefaultColor: 'transparent',
  checkboxTextShadowRadius: 0,

  // Color
  brandPrimary: isIos ? '#007aff' : '#3F51B5',
  brandInfo: '#62B1F6',
  brandSuccess: '#5cb85c',
  brandDanger: '#d9534f',
  brandWarning: '#f0ad4e',
  brandDark: '#000',
  brandLight: '#f4f4f4',

  // Container
  containerBgColor: '#fff',

  // Date Picker
  datePickerFlex: 1,
  datePickerPadding: 10,
  datePickerTextColor: '#000',
  datePickerBg: 'transparent',

  // FAB
  fabBackgroundColor: 'blue',
  fabBorderRadius: 28,
  fabBottom: 0,
  fabButtonBorderRadius: 20,
  fabButtonHeight: 40,
  fabButtonLeft: 7,
  fabButtonMarginBottom: 10,
  fabContainerBottom: 20,
  fabDefaultPosition: 20,
  fabElevation: 4,
  fabIconColor: '#fff',
  fabIconSize: 24,
  fabShadowColor: '#000',
  fabShadowOffsetHeight: 2,
  fabShadowOffsetWidth: 0,
  fabShadowOpacity: 0.4,
  fabShadowRadius: 2,
  fabWidth: 56,

  // Font
  DefaultFontSize: 16,
  fontFamily: isIos ? 'System' : 'Roboto',
  fontSizeBase: 15,
  get fontSizeH1() {
    return this.fontSizeBase * 1.8;
  },
  get fontSizeH2() {
    return this.fontSizeBase * 1.6;
  },
  get fontSizeH3() {
    return this.fontSizeBase * 1.4;
  },

  // Footer
  footerHeight: 55,
  footerDefaultBg: isIos ? '#F8F8F8' : '#3F51B5',
  footerPaddingBottom: 0,

  // FooterTab
  tabBarTextColor: isIos ? '#6b6b6b' : '#b3c7f9',
  tabBarTextSize: isIos ? 14 : 11,
  activeTab: isIos ? '#007aff' : '#fff',
  sTabBarActiveTextColor: '#007aff',
  tabBarActiveTextColor: isIos ? '#007aff' : '#fff',
  tabActiveBgColor: isIos ? '#cde1f9' : '#3F51B5',

  // Header
  toolbarBtnColor: isIos ? '#007aff' : '#fff',
  toolbarDefaultBg: isIos ? '#F8F8F8' : '#3F51B5',
  toolbarHeight: isIos ? 64 : 56,
  toolbarSearchIconSize: isIos ? 20 : 23,
  toolbarInputColor: isIos ? '#CECDD2' : '#fff',
  searchBarHeight: isIos ? 30 : 40,
  searchBarInputHeight: isIos ? 30 : 50,
  toolbarBtnTextColor: isIos ? '#007aff' : '#fff',
  toolbarDefaultBorder: isIos ? '#a7a6ab' : '#3F51B5',
  iosStatusbar: isIos ? 'dark-content' : 'light-content',
  get statusBarColor() {
    return color(this.toolbarDefaultBg)
      .darken(0.2)
      .hex();
  },
  get darkenHeader() {
    return color(this.tabBgColor)
      .darken(0.03)
      .hex();
  },

  // Icon
  iconFamily: 'Ionicons',
  iconFontSize: isIos ? 30 : 28,
  iconHeaderSize: isIos ? 33 : 24,

  // InputGroup
  inputFontSize: 17,
  inputBorderColor: '#D9D5DC',
  inputSuccessBorderColor: '#2b8339',
  inputErrorBorderColor: '#ed2f2f',
  inputHeightBase: 50,
  get inputColor() {
    return this.textColor;
  },
  get inputColorPlaceholder() {
    return '#575757';
  },

  // Line Height
  buttonLineHeight: 19,
  lineHeightH1: 32,
  lineHeightH2: 27,
  lineHeightH3: 22,
  lineHeight: isIos ? 20 : 24,
  listItemSelected: isIos ? '#007aff' : '#3F51B5',

  // List
  listBg: 'transparent',
  listBorderColor: '#c9c9c9',
  listDividerBg: '#f4f4f4',
  listBtnUnderlayColor: '#DDD',
  listItemPadding: isIos ? 10 : 12,
  listNoteColor: '#808080',
  listNoteSize: 13,

  // Progress Bar
  defaultProgressColor: '#E4202D',
  inverseProgressColor: '#1A191B',

  // Radio Button
  radioBtnSize: isIos ? 25 : 23,
  radioSelectedColorAndroid: '#3F51B5',
  radioBtnLineHeight: isIos ? 29 : 24,
  get radioColor() {
    return this.brandPrimary;
  },

  // Segment
  segmentBackgroundColor: isIos ? '#F8F8F8' : '#3F51B5',
  segmentActiveBackgroundColor: isIos ? '#007aff' : '#fff',
  segmentTextColor: isIos ? '#007aff' : '#fff',
  segmentActiveTextColor: isIos ? '#fff' : '#3F51B5',
  segmentBorderColor: isIos ? '#007aff' : '#fff',
  segmentBorderColorMain: isIos ? '#a7a6ab' : '#3F51B5',

  // Spinner
  defaultSpinnerColor: '#45D56E',
  inverseSpinnerColor: '#1A191B',

  // Tab
  tabBarDisabledTextColor: '#BDBDBD',
  tabDefaultBg: isIos ? '#F8F8F8' : '#3F51B5',
  topTabBarTextColor: isIos ? '#6b6b6b' : '#b3c7f9',
  topTabBarActiveTextColor: isIos ? '#007aff' : '#fff',
  topTabBarBorderColor: isIos ? '#a7a6ab' : '#fff',
  topTabBarActiveBorderColor: isIos ? '#007aff' : '#fff',

  // Tabs
  tabBgColor: '#F8F8F8',
  tabFontSize: 15,

  // Text
  textColor: '#000',
  inverseTextColor: '#fff',
  noteFontSize: 14,
  get defaultTextColor() {
    return this.textColor;
  },

  // Title
  titleFontfamily: isIos ? 'System' : 'Roboto_medium',
  titleFontSize: isIos ? 17 : 19,
  subTitleFontSize: isIos ? 11 : 14,
  subtitleColor: isIos ? '#8e8e93' : '#FFF',
  titleFontColor: isIos ? '#000' : '#FFF',

  // Other
  borderRadiusBase: isIos ? 5 : 2,
  borderWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
  contentPadding: 10,
  dropdownLinkColor: '#414142',
  inputLineHeight: 24,
  deviceWidth,
  deviceHeight,
  isIphoneX,
  inputGroupRoundedBorderRadius: 30,

  // iPhoneX SafeArea
  Inset: {
    portrait: {
      topInset: 24,
      leftInset: 0,
      rightInset: 0,
      bottomInset: 34
    },
    landscape: {
      topInset: 0,
      leftInset: 44,
      rightInset: 44,
      bottomInset: 21
    }
  }
};
