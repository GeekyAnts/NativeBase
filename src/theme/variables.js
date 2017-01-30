import color from 'color';

import { Platform, Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
export default {

    // AndroidRipple
  androidRipple: true,
  androidRippleColor: 'rgba(256, 256, 256, 0.7)',
  androidRippleColorDark: 'rgba(0, 0, 0, 0.15)',

    // Badge
  badgeBg: '#ED1727',
  badgeColor: '#fff',
    // New Variable
  badgePadding: (Platform.OS === 'ios') ? 3 : 0,

    // Button
  btnFontFamily: (Platform.OS === 'ios') ? 'System' : 'Roboto_medium',
  btnDisabledBg: '#b5b5b5',
  btnDisabledClr: '#f1f1f1',

    // CheckBox
  CheckboxRadius: (Platform.OS === 'ios') ? 13 : 0,
  CheckboxBorderWidth: (Platform.Os === 'ios') ? 1 : 2,
  CheckboxPaddingLeft: (Platform.OS === 'ios') ? 4 : 2,
  CheckboxPaddingBottom: (Platform.OS === 'ios') ? 0 : 5,
  CheckboxIconSize: (Platform.OS === 'ios') ? 21 : 14,
  CheckboxIconMarginTop: (Platform.OS === 'ios') ? undefined : 1,
  CheckboxFontSize: (Platform.OS === 'ios') ? (23 / 0.9) : 18,
  DefaultFontSize: 17,
  checkboxBgColor: '#039BE5',
  checkboxSize: 20,
  checkboxTickColor: '#fff',

    // New Variable
  get defaultTextColor() {
    return this.textColor;
  },


  get btnPrimaryBg() {
    return this.brandPrimary;
  },
  get btnPrimaryColor() {
    return this.inverseTextColor;
  },
  get btnInfoBg() {
    return this.brandInfo;
  },
  get btnInfoColor() {
    return this.inverseTextColor;
  },
  get btnSuccessBg() {
    return this.brandSuccess;
  },
  get btnSuccessColor() {
    return this.inverseTextColor;
  },
  get btnDangerBg() {
    return this.brandDanger;
  },
  get btnDangerColor() {
    return this.inverseTextColor;
  },
  get btnWarningBg() {
    return this.brandWarning;
  },
  get btnWarningColor() {
    return this.inverseTextColor;
  },
  get btnTextSize() {
    return (Platform.OS === 'ios') ? this.fontSizeBase * 1.1 :
        this.fontSizeBase - 1;
  },
  get btnTextSizeLarge() {
    return this.fontSizeBase * 1.5;
  },
  get btnTextSizeSmall() {
    return this.fontSizeBase * 0.8;
  },
  get borderRadiusLarge() {
    return this.fontSizeBase * 3.8;
  },

  buttonPadding: 6,

  get iconSizeLarge() {
    return this.iconFontSize * 1.5;
  },
  get iconSizeSmall() {
    return this.iconFontSize * 0.6;
  },


    // Card
  cardDefaultBg: '#fff',


      // Color
  brandPrimary: '#5067FF',
  brandInfo: '#5bc0de',
  brandSuccess: '#5cb85c',
  brandDanger: '#d9534f',
  brandWarning: '#f0ad4e',
  brandSidebar: '#252932',


    // Font
  fontFamily: (Platform.OS === 'ios') ? 'System' : 'Roboto',
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
  footerDefaultBg: (Platform.OS === 'ios') ? '#F8F8F8' : '#4179F7',


    // FooterTab
  tabBarTextColor: (Platform.OS === 'ios') ? '#6b6b6b' : '#b3c7f9',
  tabBarTextSize: (Platform.OS === 'ios') ? 14 : 11,
  activeTab: '#007aff',
  sTabBarActiveTextColor: '#007aff',
  tabBarActiveTextColor: (Platform.OS === 'ios') ? '#007aff' : '#fff',
  tabActiveBgColor: (Platform.OS === 'ios') ? '#cde1f9' : undefined,

    // Tab
  tabDefaultBg: (Platform.OS === 'ios') ? '#F8F8F8' : '#4179F7',
  topTabBarTextColor: (Platform.OS === 'ios') ? '#6b6b6b' : '#b3c7f9',
  topTabBarActiveTextColor: (Platform.OS === 'ios') ? '#007aff' : '#fff',
  topTabActiveBgColor: (Platform.OS === 'ios') ? '#cde1f9' : undefined,
  topTabBarBorderColor: (Platform.OS === 'ios') ? '#007aff' : '#fff',


    // Header
  iosToolbarBtnColor: '#007aff',
  toolbarDefaultBg: (Platform.OS === 'ios') ? '#F8F8F8' : '#3F51B5',
  toolbarHeight: (Platform.OS === 'ios') ? 64 : 56,
  toolbarIconSize: (Platform.OS === 'ios') ? 20 : 22,
  toolbarInputColor: '#CECDD2',
  toolbarInverseBg: '#222',
  toolbarTextColor: (Platform.OS === 'ios') ? '#000' : '#fff',
  get statusBarColor() {
    return color(this.toolbarDefaultBg).darken(0.2).hexString();
  },


    // Icon
  iconFamily: 'MaterialIcons',
  iconFontSize: (Platform.OS === 'ios') ? 30 : 28,
  iconMargin: 7,
  iconHeaderSize: (Platform.OS === 'ios') ? 33 : 28,


    // InputGroup
  inputFontSize: 15,
  inputBorderColor: '#D9D5DC',
  inputSuccessBorderColor: '#2b8339',
  inputErrorBorderColor: '#ed2f2f',

  get inputColor() {
    return this.textColor;
  },
  get inputColorPlaceholder() {
    return '#575757';
  },

  inputGroupMarginBottom: 10,
  inputHeightBase: 40,
  inputPaddingLeft: 5,

  get inputPaddingLeftIcon() {
    return this.inputPaddingLeft * 8;
  },


    // Line Height
  btnLineHeight: 19,
  lineHeightH1: 32,
  lineHeightH2: 27,
  lineHeightH3: 22,
  iconLineHeight: (Platform.OS === 'ios') ? 37 : 30,
  lineHeight: (Platform.OS === 'ios') ? 20 : 24,


    // List
  listBorderColor: '#ccc',
  listDividerBg: '#f4f4f4',
  listItemHeight: 45,

    // Changed Variable
  listItemPadding: (Platform.OS === 'ios') ? 10 : 12,

  listNoteColor: '#808080',
  listNoteSize: 13,


    // Progress Bar
  defaultProgressColor: '#E4202D',
  inverseProgressColor: '#1A191B',


    // Radio Button
  radioBtnSize: (Platform.OS === 'ios') ? 25 : 23,
  radioSelectedColorAndroid: '#5067FF',

    // New Variable
  radioBtnLineHeight: (Platform.OS === 'ios') ? 29 : 24,

  radioColor: '#7e7e7e',

  get radioSelectedColor() {
    return color(this.radioColor).darken(0.2).hexString();
  },


    // Spinner
  defaultSpinnerColor: '#45D56E',
  inverseSpinnerColor: '#1A191B',


    // Tabs
  tabBgColor: '#F8F8F8',
  tabFontSize: 15,
  tabTextColor: '#222222',


    // Text
  textColor: '#000',
  inverseTextColor: '#fff',


    // Title
  titleFontfamily: (Platform.OS === 'ios') ? 'System' : 'Roboto_medium',
  titleFontSize: (Platform.OS === 'ios') ? 17 : 19,
  subTitleFontSize: (Platform.OS === 'ios') ? 12 : 14,
  subtitleColor: '#8e8e93',

    // New Variable
  titleFontColor: (Platform.OS === 'ios') ? '#000' : '#FFF',


    // Other
  borderRadiusBase: (Platform.OS === 'ios') ? 5 : 2,
  borderWidth: 1,
  contentPadding: 10,

  get darkenHeader() {
    return color(this.tabBgColor).darken(0.03).hexString();
  },

  dropdownBg: '#000',
  dropdownLinkColor: '#414142',
  inputLineHeight: 24,
  jumbotronBg: '#C9C9CE',
  jumbotronPadding: 30,
  deviceWidth,
  deviceHeight,

    // New Variable
  inputGroupRoundedBorderRadius: 30,
};
