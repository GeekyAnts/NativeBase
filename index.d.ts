declare module 'native-base/theme/components/Body' {
	 const _default: () => {
	    flex: number;
	    alignItems: string;
	    alignSelf: string;
	};
	export default _default;

}
declare module 'native-base/theme/components/Left' {
	 const _default: () => {
	    flex: number;
	    alignSelf: string;
	    alignItems: string;
	};
	export default _default;

}
declare module 'native-base/theme/components/Right' {
	 const _default: () => {
	    'NativeBase.Button': {
	        alignSelf: null;
	    };
	    flex: number;
	    alignSelf: string;
	    alignItems: string;
	};
	export default _default;

}
declare module 'native-base/theme/variables/commonColor' {
	export const PLATFORM: {
	    ANDROID: string;
	    IOS: string;
	    MATERIAL: string;
	    WEB: string;
	}; const _default: {
	    platformStyle: undefined;
	    platform: "android" | "ios" | "web" | "windows" | "macos";
	    headerStyle: string;
	    iconStyle: string;
	    contentStyle: string;
	    expandedIconStyle: string;
	    accordionBorderColor: string;
	    elevation: number;
	    containerTouchableBackgroundColor: string;
	    innerTouchableBackgroundColor: string;
	    listItemHeight: number;
	    listItemBorderColor: string;
	    marginHorizontal: number;
	    marginLeft: number;
	    marginTop: number;
	    minHeight: number;
	    padding: number;
	    touchableTextColor: string;
	    androidRipple: boolean;
	    androidRippleColor: string;
	    androidRippleColorDark: string;
	    buttonUppercaseAndroidText: boolean;
	    badgeBg: string;
	    badgeColor: string;
	    badgePadding: number;
	    buttonFontFamily: string;
	    buttonDisabledBg: string;
	    buttonPadding: number;
	    readonly buttonPrimaryBg: string;
	    readonly buttonPrimaryColor: string;
	    readonly buttonInfoBg: string;
	    readonly buttonInfoColor: string;
	    readonly buttonSuccessBg: string;
	    readonly buttonSuccessColor: string;
	    readonly buttonDangerBg: string;
	    readonly buttonDangerColor: string;
	    readonly buttonWarningBg: string;
	    readonly buttonWarningColor: string;
	    readonly buttonTextSize: number;
	    readonly buttonTextSizeLarge: number;
	    readonly buttonTextSizeSmall: number;
	    readonly borderRadiusLarge: number;
	    readonly iconSizeLarge: number;
	    readonly iconSizeSmall: number;
	    cardDefaultBg: string;
	    cardBorderColor: string;
	    cardBorderRadius: number;
	    cardItemPadding: number;
	    CheckboxRadius: number;
	    CheckboxBorderWidth: number;
	    CheckboxPaddingLeft: number;
	    CheckboxPaddingBottom: number;
	    CheckboxIconSize: number;
	    CheckboxIconMarginTop: number | undefined;
	    CheckboxFontSize: number;
	    checkboxBgColor: string;
	    checkboxSize: number;
	    checkboxTickColor: string;
	    brandPrimary: string;
	    brandInfo: string;
	    brandSuccess: string;
	    brandDanger: string;
	    brandWarning: string;
	    brandDark: string;
	    brandLight: string;
	    containerBgColor: string;
	    datePickerTextColor: string;
	    datePickerBg: string;
	    fabWidth: number;
	    DefaultFontSize: number;
	    fontFamily: string;
	    fontSizeBase: number;
	    readonly fontSizeH1: number;
	    readonly fontSizeH2: number;
	    readonly fontSizeH3: number;
	    footerHeight: number;
	    footerDefaultBg: string;
	    footerPaddingBottom: number;
	    tabBarTextColor: string;
	    tabBarTextSize: number;
	    activeTab: string;
	    sTabBarActiveTextColor: string;
	    tabBarActiveTextColor: string;
	    tabActiveBgColor: string;
	    toolbarBtnColor: string;
	    toolbarDefaultBg: string;
	    toolbarHeight: number;
	    toolbarSearchIconSize: number;
	    toolbarInputColor: string;
	    searchBarHeight: number;
	    searchBarInputHeight: number;
	    toolbarBtnTextColor: string;
	    iosStatusbar: string;
	    toolbarDefaultBorder: string;
	    readonly statusBarColor: string;
	    readonly darkenHeader: string;
	    iconFamily: string;
	    iconFontSize: number;
	    iconHeaderSize: number;
	    inputFontSize: number;
	    inputBorderColor: string;
	    inputSuccessBorderColor: string;
	    inputErrorBorderColor: string;
	    inputHeightBase: number;
	    readonly inputColor: string;
	    readonly inputColorPlaceholder: string;
	    buttonLineHeight: number;
	    lineHeightH1: number;
	    lineHeightH2: number;
	    lineHeightH3: number;
	    lineHeight: number;
	    listBg: string;
	    listBorderColor: string;
	    listDividerBg: string;
	    listBtnUnderlayColor: string;
	    listItemPadding: number;
	    listNoteColor: string;
	    listNoteSize: number;
	    listItemSelected: string;
	    defaultProgressColor: string;
	    inverseProgressColor: string;
	    radioBtnSize: number;
	    radioSelectedColorAndroid: string;
	    radioBtnLineHeight: number;
	    readonly radioColor: string;
	    segmentBackgroundColor: string;
	    segmentActiveBackgroundColor: string;
	    segmentTextColor: string;
	    segmentActiveTextColor: string;
	    segmentBorderColor: string;
	    segmentBorderColorMain: string;
	    defaultSpinnerColor: string;
	    inverseSpinnerColor: string;
	    tabDefaultBg: string;
	    topTabBarTextColor: string;
	    topTabBarActiveTextColor: string;
	    topTabBarBorderColor: string;
	    topTabBarActiveBorderColor: string;
	    tabBgColor: string;
	    tabFontSize: number;
	    textColor: string;
	    inverseTextColor: string;
	    noteFontSize: number;
	    readonly defaultTextColor: string;
	    titleFontfamily: string;
	    titleFontSize: number;
	    subTitleFontSize: number;
	    subtitleColor: string;
	    titleFontColor: string;
	    borderRadiusBase: number;
	    borderWidth: number;
	    contentPadding: number;
	    dropdownLinkColor: string;
	    inputLineHeight: number;
	    deviceWidth: number;
	    deviceHeight: number;
	    isIphoneX: boolean;
	    inputGroupRoundedBorderRadius: number;
	    Inset: {
	        portrait: {
	            topInset: number;
	            leftInset: number;
	            rightInset: number;
	            bottomInset: number;
	        };
	        landscape: {
	            topInset: number;
	            leftInset: number;
	            rightInset: number;
	            bottomInset: number;
	        };
	    };
	};
	export default _default;

}
declare module 'native-base/theme/variables/platform' {
	 const _default: {
	    platformStyle: undefined;
	    platform: "android" | "ios" | "web" | "windows" | "macos";
	    accordionBorderColor: string;
	    accordionContentPadding: number;
	    accordionIconFontSize: number;
	    contentStyle: string;
	    expandedIconStyle: string;
	    headerStyle: string;
	    iconStyle: string;
	    elevation: number;
	    containerTouchableBackgroundColor: string;
	    innerTouchableBackgroundColor: string;
	    listItemHeight: number;
	    listItemBorderColor: string;
	    marginHorizontal: number;
	    marginLeft: number;
	    marginTop: number;
	    minHeight: number;
	    padding: number;
	    touchableTextColor: string;
	    androidRipple: boolean;
	    androidRippleColor: string;
	    androidRippleColorDark: string;
	    buttonUppercaseAndroidText: boolean;
	    badgeBg: string;
	    badgeColor: string;
	    badgePadding: number;
	    buttonFontFamily: string;
	    buttonDisabledBg: string;
	    buttonPadding: number;
	    buttonDefaultActiveOpacity: number;
	    buttonDefaultFlex: number;
	    buttonDefaultBorderRadius: number;
	    buttonDefaultBorderWidth: number;
	    readonly buttonPrimaryBg: string;
	    readonly buttonPrimaryColor: string;
	    readonly buttonInfoBg: string;
	    readonly buttonInfoColor: string;
	    readonly buttonSuccessBg: string;
	    readonly buttonSuccessColor: string;
	    readonly buttonDangerBg: string;
	    readonly buttonDangerColor: string;
	    readonly buttonWarningBg: string;
	    readonly buttonWarningColor: string;
	    readonly buttonTextSize: number;
	    readonly buttonTextSizeLarge: number;
	    readonly buttonTextSizeSmall: number;
	    readonly borderRadiusLarge: number;
	    readonly iconSizeLarge: number;
	    readonly iconSizeSmall: number;
	    cardDefaultBg: string;
	    cardBorderColor: string;
	    cardBorderRadius: number;
	    cardItemPadding: number;
	    CheckboxRadius: number;
	    CheckboxBorderWidth: number;
	    CheckboxPaddingLeft: number;
	    CheckboxPaddingBottom: number;
	    CheckboxIconSize: number;
	    CheckboxIconMarginTop: number | undefined;
	    CheckboxFontSize: number;
	    checkboxBgColor: string;
	    checkboxSize: number;
	    checkboxTickColor: string;
	    checkboxDefaultColor: string;
	    checkboxTextShadowRadius: number;
	    brandPrimary: string;
	    brandInfo: string;
	    brandSuccess: string;
	    brandDanger: string;
	    brandWarning: string;
	    brandDark: string;
	    brandLight: string;
	    containerBgColor: string;
	    datePickerFlex: number;
	    datePickerPadding: number;
	    datePickerTextColor: string;
	    datePickerBg: string;
	    fabBackgroundColor: string;
	    fabBorderRadius: number;
	    fabBottom: number;
	    fabButtonBorderRadius: number;
	    fabButtonHeight: number;
	    fabButtonLeft: number;
	    fabButtonMarginBottom: number;
	    fabContainerBottom: number;
	    fabDefaultPosition: number;
	    fabElevation: number;
	    fabIconColor: string;
	    fabIconSize: number;
	    fabShadowColor: string;
	    fabShadowOffsetHeight: number;
	    fabShadowOffsetWidth: number;
	    fabShadowOpacity: number;
	    fabShadowRadius: number;
	    fabWidth: number;
	    DefaultFontSize: number;
	    fontFamily: string;
	    fontSizeBase: number;
	    readonly fontSizeH1: number;
	    readonly fontSizeH2: number;
	    readonly fontSizeH3: number;
	    footerHeight: number;
	    footerDefaultBg: string;
	    footerPaddingBottom: number;
	    tabBarTextColor: string;
	    tabBarTextSize: number;
	    activeTab: string;
	    sTabBarActiveTextColor: string;
	    tabBarActiveTextColor: string;
	    tabActiveBgColor: string;
	    toolbarBtnColor: string;
	    toolbarDefaultBg: string;
	    toolbarHeight: number;
	    toolbarSearchIconSize: number;
	    toolbarInputColor: string;
	    searchBarHeight: number;
	    searchBarInputHeight: number;
	    toolbarBtnTextColor: string;
	    toolbarDefaultBorder: string;
	    iosStatusbar: string;
	    readonly statusBarColor: string;
	    readonly darkenHeader: string;
	    iconFamily: string;
	    iconFontSize: number;
	    iconHeaderSize: number;
	    inputFontSize: number;
	    inputBorderColor: string;
	    inputSuccessBorderColor: string;
	    inputErrorBorderColor: string;
	    inputHeightBase: number;
	    readonly inputColor: string;
	    readonly inputColorPlaceholder: string;
	    buttonLineHeight: number;
	    lineHeightH1: number;
	    lineHeightH2: number;
	    lineHeightH3: number;
	    lineHeight: number;
	    listItemSelected: string;
	    listBg: string;
	    listBorderColor: string;
	    listDividerBg: string;
	    listBtnUnderlayColor: string;
	    listItemPadding: number;
	    listNoteColor: string;
	    listNoteSize: number;
	    defaultProgressColor: string;
	    inverseProgressColor: string;
	    radioBtnSize: number;
	    radioSelectedColorAndroid: string;
	    radioBtnLineHeight: number;
	    readonly radioColor: string;
	    segmentBackgroundColor: string;
	    segmentActiveBackgroundColor: string;
	    segmentTextColor: string;
	    segmentActiveTextColor: string;
	    segmentBorderColor: string;
	    segmentBorderColorMain: string;
	    defaultSpinnerColor: string;
	    inverseSpinnerColor: string;
	    tabBarDisabledTextColor: string;
	    tabDefaultBg: string;
	    topTabBarTextColor: string;
	    topTabBarActiveTextColor: string;
	    topTabBarBorderColor: string;
	    topTabBarActiveBorderColor: string;
	    tabBgColor: string;
	    tabFontSize: number;
	    textColor: string;
	    inverseTextColor: string;
	    noteFontSize: number;
	    readonly defaultTextColor: string;
	    titleFontfamily: string;
	    titleFontSize: number;
	    subTitleFontSize: number;
	    subtitleColor: string;
	    titleFontColor: string;
	    borderRadiusBase: number;
	    borderWidth: number;
	    contentPadding: number;
	    dropdownLinkColor: string;
	    inputLineHeight: number;
	    deviceWidth: number;
	    deviceHeight: number;
	    isIphoneX: boolean;
	    inputGroupRoundedBorderRadius: number;
	    Inset: {
	        portrait: {
	            topInset: number;
	            leftInset: number;
	            rightInset: number;
	            bottomInset: number;
	        };
	        landscape: {
	            topInset: number;
	            leftInset: number;
	            rightInset: number;
	            bottomInset: number;
	        };
	    };
	};
	export default _default;

}
declare module 'native-base/theme/components/Header' {
	 const _default: (variables?: {
	    platformStyle: undefined;
	    platform: "android" | "ios" | "web" | "windows" | "macos";
	    accordionBorderColor: string;
	    accordionContentPadding: number;
	    accordionIconFontSize: number;
	    contentStyle: string;
	    expandedIconStyle: string;
	    headerStyle: string;
	    iconStyle: string;
	    elevation: number;
	    containerTouchableBackgroundColor: string;
	    innerTouchableBackgroundColor: string;
	    listItemHeight: number;
	    listItemBorderColor: string;
	    marginHorizontal: number;
	    marginLeft: number;
	    marginTop: number;
	    minHeight: number;
	    padding: number;
	    touchableTextColor: string;
	    androidRipple: boolean;
	    androidRippleColor: string;
	    androidRippleColorDark: string;
	    buttonUppercaseAndroidText: boolean;
	    badgeBg: string;
	    badgeColor: string;
	    badgePadding: number;
	    buttonFontFamily: string;
	    buttonDisabledBg: string;
	    buttonPadding: number;
	    buttonDefaultActiveOpacity: number;
	    buttonDefaultFlex: number;
	    buttonDefaultBorderRadius: number;
	    buttonDefaultBorderWidth: number;
	    readonly buttonPrimaryBg: string;
	    readonly buttonPrimaryColor: string;
	    readonly buttonInfoBg: string;
	    readonly buttonInfoColor: string;
	    readonly buttonSuccessBg: string;
	    readonly buttonSuccessColor: string;
	    readonly buttonDangerBg: string;
	    readonly buttonDangerColor: string;
	    readonly buttonWarningBg: string;
	    readonly buttonWarningColor: string;
	    readonly buttonTextSize: number;
	    readonly buttonTextSizeLarge: number;
	    readonly buttonTextSizeSmall: number;
	    readonly borderRadiusLarge: number;
	    readonly iconSizeLarge: number;
	    readonly iconSizeSmall: number;
	    cardDefaultBg: string;
	    cardBorderColor: string;
	    cardBorderRadius: number;
	    cardItemPadding: number;
	    CheckboxRadius: number;
	    CheckboxBorderWidth: number;
	    CheckboxPaddingLeft: number;
	    CheckboxPaddingBottom: number;
	    CheckboxIconSize: number;
	    CheckboxIconMarginTop: number | undefined;
	    CheckboxFontSize: number;
	    checkboxBgColor: string;
	    checkboxSize: number;
	    checkboxTickColor: string;
	    checkboxDefaultColor: string;
	    checkboxTextShadowRadius: number;
	    brandPrimary: string;
	    brandInfo: string;
	    brandSuccess: string;
	    brandDanger: string;
	    brandWarning: string;
	    brandDark: string;
	    brandLight: string;
	    containerBgColor: string;
	    datePickerFlex: number;
	    datePickerPadding: number;
	    datePickerTextColor: string;
	    datePickerBg: string;
	    fabBackgroundColor: string;
	    fabBorderRadius: number;
	    fabBottom: number;
	    fabButtonBorderRadius: number;
	    fabButtonHeight: number;
	    fabButtonLeft: number;
	    fabButtonMarginBottom: number;
	    fabContainerBottom: number;
	    fabDefaultPosition: number;
	    fabElevation: number;
	    fabIconColor: string;
	    fabIconSize: number;
	    fabShadowColor: string;
	    fabShadowOffsetHeight: number;
	    fabShadowOffsetWidth: number;
	    fabShadowOpacity: number;
	    fabShadowRadius: number;
	    fabWidth: number;
	    DefaultFontSize: number;
	    fontFamily: string;
	    fontSizeBase: number;
	    readonly fontSizeH1: number;
	    readonly fontSizeH2: number;
	    readonly fontSizeH3: number;
	    footerHeight: number;
	    footerDefaultBg: string;
	    footerPaddingBottom: number;
	    tabBarTextColor: string;
	    tabBarTextSize: number;
	    activeTab: string;
	    sTabBarActiveTextColor: string;
	    tabBarActiveTextColor: string;
	    tabActiveBgColor: string;
	    toolbarBtnColor: string;
	    toolbarDefaultBg: string;
	    toolbarHeight: number;
	    toolbarSearchIconSize: number;
	    toolbarInputColor: string;
	    searchBarHeight: number;
	    searchBarInputHeight: number;
	    toolbarBtnTextColor: string;
	    toolbarDefaultBorder: string;
	    iosStatusbar: string;
	    readonly statusBarColor: string;
	    readonly darkenHeader: string;
	    iconFamily: string;
	    iconFontSize: number;
	    iconHeaderSize: number;
	    inputFontSize: number;
	    inputBorderColor: string;
	    inputSuccessBorderColor: string;
	    inputErrorBorderColor: string;
	    inputHeightBase: number;
	    readonly inputColor: string;
	    readonly inputColorPlaceholder: string;
	    buttonLineHeight: number;
	    lineHeightH1: number;
	    lineHeightH2: number;
	    lineHeightH3: number;
	    lineHeight: number;
	    listItemSelected: string;
	    listBg: string;
	    listBorderColor: string;
	    listDividerBg: string;
	    listBtnUnderlayColor: string;
	    listItemPadding: number;
	    listNoteColor: string;
	    listNoteSize: number;
	    defaultProgressColor: string;
	    inverseProgressColor: string;
	    radioBtnSize: number;
	    radioSelectedColorAndroid: string;
	    radioBtnLineHeight: number;
	    readonly radioColor: string;
	    segmentBackgroundColor: string;
	    segmentActiveBackgroundColor: string;
	    segmentTextColor: string;
	    segmentActiveTextColor: string;
	    segmentBorderColor: string;
	    segmentBorderColorMain: string;
	    defaultSpinnerColor: string;
	    inverseSpinnerColor: string;
	    tabBarDisabledTextColor: string;
	    tabDefaultBg: string;
	    topTabBarTextColor: string;
	    topTabBarActiveTextColor: string;
	    topTabBarBorderColor: string;
	    topTabBarActiveBorderColor: string;
	    tabBgColor: string;
	    tabFontSize: number;
	    textColor: string;
	    inverseTextColor: string;
	    noteFontSize: number;
	    readonly defaultTextColor: string;
	    titleFontfamily: string;
	    titleFontSize: number;
	    subTitleFontSize: number;
	    subtitleColor: string;
	    titleFontColor: string;
	    borderRadiusBase: number;
	    borderWidth: number;
	    contentPadding: number;
	    dropdownLinkColor: string;
	    inputLineHeight: number;
	    deviceWidth: number;
	    deviceHeight: number;
	    isIphoneX: boolean;
	    inputGroupRoundedBorderRadius: number;
	    Inset: {
	        portrait: {
	            topInset: number;
	            leftInset: number;
	            rightInset: number;
	            bottomInset: number;
	        };
	        landscape: {
	            topInset: number;
	            leftInset: number;
	            rightInset: number;
	            bottomInset: number;
	        };
	    };
	}) => {
	    '.span': {
	        height: number;
	        'NativeBase.Left': {
	            alignSelf: string;
	        };
	        'NativeBase.Body': {
	            alignSelf: string;
	            alignItems: string;
	            justifyContent: string;
	            paddingBottom: number;
	        };
	        'NativeBase.Right': {
	            alignSelf: string;
	        };
	    };
	    '.hasSubtitle': {
	        'NativeBase.Body': {
	            'NativeBase.Title': {
	                fontSize: number;
	                fontFamily: string;
	                textAlign: string;
	                fontWeight: string;
	                paddingBottom: number;
	            };
	            'NativeBase.Subtitle': {
	                fontSize: number;
	                fontFamily: string;
	                color: string;
	                textAlign: string;
	            };
	        };
	    };
	    '.transparent': {
	        backgroundColor: string;
	        borderBottomColor: string;
	        elevation: number;
	        shadowColor: null;
	        shadowOffset: null;
	        shadowRadius: null;
	        shadowOpacity: null;
	        paddingTop: number | undefined;
	        height: number;
	    };
	    '.noShadow': {
	        elevation: number;
	        shadowColor: null;
	        shadowOffset: null;
	        shadowRadius: null;
	        shadowOpacity: null;
	    };
	    '.hasTabs': {
	        elevation: number;
	        shadowColor: null;
	        shadowOffset: null;
	        shadowRadius: null;
	        shadowOpacity: null;
	        borderBottomWidth: null;
	    };
	    '.hasSegment': {
	        elevation: number;
	        shadowColor: null;
	        shadowOffset: null;
	        shadowRadius: null;
	        shadowOpacity: null;
	        borderBottomWidth: null;
	        'NativeBase.Left': {
	            flex: number;
	        };
	        'NativeBase.Right': {
	            flex: number;
	        };
	        'NativeBase.Body': {
	            flex: number;
	            'NativeBase.Segment': {
	                marginRight: number;
	                alignSelf: string;
	                'NativeBase.Button': {
	                    paddingLeft: number;
	                    paddingRight: number;
	                };
	            };
	        };
	    };
	    '.noLeft': {
	        'NativeBase.Left': {
	            width: number | undefined;
	            flex: number;
	        };
	        'NativeBase.Body': {
	            'NativeBase.Title': {
	                paddingLeft: number | undefined;
	            };
	            'NativeBase.Subtitle': {
	                paddingLeft: number | undefined;
	            };
	        };
	    };
	    'NativeBase.Button': {
	        justifyContent: string;
	        alignSelf: string;
	        alignItems: string;
	        '.transparent': {
	            'NativeBase.Text': {
	                color: string;
	                fontWeight: string;
	            };
	            'NativeBase.Icon': {
	                color: string;
	            };
	            'NativeBase.IconNB': {
	                color: string;
	            };
	            paddingHorizontal: number;
	        };
	        paddingHorizontal: number;
	    };
	    '.searchBar': {
	        'NativeBase.Item': {
	            'NativeBase.Icon': {
	                backgroundColor: string;
	                color: string;
	                fontSize: number;
	                alignItems: string;
	                marginTop: number;
	                paddingRight: number;
	                paddingLeft: number;
	            };
	            'NativeBase.IconNB': {
	                backgroundColor: string;
	                color: null;
	                alignSelf: string;
	            };
	            'NativeBase.Input': {
	                alignSelf: string;
	                lineHeight: null;
	                height: number;
	            };
	            alignSelf: string;
	            alignItems: string;
	            justifyContent: string;
	            flex: number;
	            height: number;
	            borderColor: string;
	            backgroundColor: string;
	        };
	        'NativeBase.Button': {
	            '.transparent': {
	                'NativeBase.Text': {
	                    fontWeight: string;
	                };
	                paddingHorizontal: null;
	                paddingLeft: number | null;
	            };
	            paddingHorizontal: null | undefined;
	            width: number | undefined;
	            height: number | undefined;
	        };
	    };
	    '.rounded': {
	        'NativeBase.Item': {
	            borderRadius: number;
	        };
	    };
	    'NativeBase.Left': {
	        'NativeBase.Button': {
	            '.hasText': {
	                marginLeft: number;
	                height: number;
	                'NativeBase.Icon': {
	                    color: string;
	                    fontSize: number;
	                    marginTop: number;
	                    marginRight: number;
	                    marginLeft: number;
	                };
	                'NativeBase.Text': {
	                    color: string;
	                    fontSize: number;
	                    marginLeft: number;
	                    lineHeight: number;
	                };
	                'NativeBase.IconNB': {
	                    color: string;
	                    fontSize: number;
	                    marginTop: number;
	                    marginRight: number;
	                    marginLeft: number;
	                };
	            };
	            '.transparent': {
	                marginLeft: number;
	                'NativeBase.Icon': {
	                    color: string;
	                    fontSize: number;
	                    marginTop: number;
	                    marginRight: number;
	                    marginLeft: number;
	                    paddingTop: number;
	                };
	                'NativeBase.IconNB': {
	                    color: string;
	                    fontSize: number;
	                    marginTop: number;
	                    marginRight: number;
	                    marginLeft: number;
	                    paddingTop: number;
	                };
	                'NativeBase.Text': {
	                    color: string;
	                    fontSize: number;
	                    top: number;
	                    paddingLeft: number;
	                    paddingRight: number | undefined;
	                };
	                backgroundColor: string;
	                borderColor: null;
	                elevation: number;
	                shadowColor: null;
	                shadowOffset: null;
	                shadowRadius: null;
	                shadowOpacity: null;
	            };
	            'NativeBase.Icon': {
	                color: string;
	            };
	            'NativeBase.IconNB': {
	                color: string;
	            };
	            alignSelf: null;
	            paddingRight: number;
	            paddingLeft: number;
	        };
	        flex: number;
	        alignSelf: string;
	        alignItems: string;
	    };
	    'NativeBase.Body': {
	        flex: number;
	        alignItems: string;
	        alignSelf: string;
	        'NativeBase.Segment': {
	            borderWidth: number;
	            alignSelf: string;
	            marginRight: number;
	        };
	        'NativeBase.Button': {
	            alignSelf: string;
	            '.transparent': {
	                backgroundColor: string;
	            };
	            'NativeBase.Icon': {
	                color: string;
	            };
	            'NativeBase.IconNB': {
	                color: string;
	            };
	            'NativeBase.Text': {
	                color: string;
	                backgroundColor: string;
	            };
	        };
	    };
	    'NativeBase.Right': {
	        'NativeBase.Button': {
	            '.hasText': {
	                height: number;
	                'NativeBase.Icon': {
	                    color: string;
	                    fontSize: number;
	                    marginTop: number;
	                    marginRight: number;
	                    marginLeft: number;
	                };
	                'NativeBase.Text': {
	                    color: string;
	                    fontSize: number;
	                    lineHeight: number;
	                };
	                'NativeBase.IconNB': {
	                    color: string;
	                    fontSize: number;
	                    marginTop: number;
	                    marginRight: number;
	                    marginLeft: number;
	                };
	            };
	            '.transparent': {
	                marginRight: number;
	                paddingLeft: number;
	                paddingRight: number;
	                paddingHorizontal: number;
	                borderRadius: number;
	                'NativeBase.Icon': {
	                    color: string;
	                    fontSize: number;
	                    marginTop: number;
	                    marginLeft: number;
	                    marginRight: number;
	                };
	                'NativeBase.IconNB': {
	                    color: string;
	                    fontSize: number;
	                    marginTop: number;
	                    marginLeft: number;
	                    marginRight: number;
	                };
	                'NativeBase.Text': {
	                    color: string;
	                    fontSize: number;
	                    top: number;
	                    paddingRight: number | undefined;
	                };
	                backgroundColor: string;
	                borderColor: null;
	                elevation: number;
	                shadowColor: null;
	                shadowOffset: null;
	                shadowRadius: null;
	                shadowOpacity: null;
	            };
	            'NativeBase.Icon': {
	                color: string;
	            };
	            'NativeBase.IconNB': {
	                color: string;
	            };
	            alignSelf: null;
	            paddingHorizontal: number;
	        };
	        flex: number;
	        alignSelf: string;
	        alignItems: string;
	        flexDirection: string;
	        justifyContent: string;
	    };
	    backgroundColor: string;
	    flexDirection: string;
	    paddingLeft: number;
	    paddingRight: number;
	    justifyContent: string;
	    paddingTop: number;
	    borderBottomWidth: number;
	    borderBottomColor: string;
	    height: number;
	    elevation: number;
	    shadowColor: string | undefined;
	    shadowOffset: {
	        width: number;
	        height: number;
	    } | undefined;
	    shadowOpacity: number | undefined;
	    shadowRadius: number | undefined;
	    top: number;
	    left: number;
	    right: number;
	};
	export default _default;

}
declare module 'native-base/theme/components/Switch' {
	 const _default: () => {
	    marginVertical: number;
	};
	export default _default;

}
declare module 'native-base/theme/components/Thumbnail' {
	 const _default: () => {
	    '.square': {
	        borderRadius: number;
	        '.small': {
	            width: number;
	            height: number;
	            borderRadius: number;
	        };
	        '.large': {
	            width: number;
	            height: number;
	            borderRadius: number;
	        };
	    };
	    '.small': {
	        width: number;
	        height: number;
	        borderRadius: number;
	        '.square': {
	            borderRadius: number;
	        };
	    };
	    '.large': {
	        width: number;
	        height: number;
	        borderRadius: number;
	        '.square': {
	            borderRadius: number;
	        };
	    };
	    width: number;
	    height: number;
	    borderRadius: number;
	};
	export default _default;

}
declare module 'native-base/theme/components/Container' {
	 const _default: (variables?: {
	    platformStyle: undefined;
	    platform: "android" | "ios" | "web" | "windows" | "macos";
	    accordionBorderColor: string;
	    accordionContentPadding: number;
	    accordionIconFontSize: number;
	    contentStyle: string;
	    expandedIconStyle: string;
	    headerStyle: string;
	    iconStyle: string;
	    elevation: number;
	    containerTouchableBackgroundColor: string;
	    innerTouchableBackgroundColor: string;
	    listItemHeight: number;
	    listItemBorderColor: string;
	    marginHorizontal: number;
	    marginLeft: number;
	    marginTop: number;
	    minHeight: number;
	    padding: number;
	    touchableTextColor: string;
	    androidRipple: boolean;
	    androidRippleColor: string;
	    androidRippleColorDark: string;
	    buttonUppercaseAndroidText: boolean;
	    badgeBg: string;
	    badgeColor: string;
	    badgePadding: number;
	    buttonFontFamily: string;
	    buttonDisabledBg: string;
	    buttonPadding: number;
	    buttonDefaultActiveOpacity: number;
	    buttonDefaultFlex: number;
	    buttonDefaultBorderRadius: number;
	    buttonDefaultBorderWidth: number;
	    readonly buttonPrimaryBg: string;
	    readonly buttonPrimaryColor: string;
	    readonly buttonInfoBg: string;
	    readonly buttonInfoColor: string;
	    readonly buttonSuccessBg: string;
	    readonly buttonSuccessColor: string;
	    readonly buttonDangerBg: string;
	    readonly buttonDangerColor: string;
	    readonly buttonWarningBg: string;
	    readonly buttonWarningColor: string;
	    readonly buttonTextSize: number;
	    readonly buttonTextSizeLarge: number;
	    readonly buttonTextSizeSmall: number;
	    readonly borderRadiusLarge: number;
	    readonly iconSizeLarge: number;
	    readonly iconSizeSmall: number;
	    cardDefaultBg: string;
	    cardBorderColor: string;
	    cardBorderRadius: number;
	    cardItemPadding: number;
	    CheckboxRadius: number;
	    CheckboxBorderWidth: number;
	    CheckboxPaddingLeft: number;
	    CheckboxPaddingBottom: number;
	    CheckboxIconSize: number;
	    CheckboxIconMarginTop: number | undefined;
	    CheckboxFontSize: number;
	    checkboxBgColor: string;
	    checkboxSize: number;
	    checkboxTickColor: string;
	    checkboxDefaultColor: string;
	    checkboxTextShadowRadius: number;
	    brandPrimary: string;
	    brandInfo: string;
	    brandSuccess: string;
	    brandDanger: string;
	    brandWarning: string;
	    brandDark: string;
	    brandLight: string;
	    containerBgColor: string;
	    datePickerFlex: number;
	    datePickerPadding: number;
	    datePickerTextColor: string;
	    datePickerBg: string;
	    fabBackgroundColor: string;
	    fabBorderRadius: number;
	    fabBottom: number;
	    fabButtonBorderRadius: number;
	    fabButtonHeight: number;
	    fabButtonLeft: number;
	    fabButtonMarginBottom: number;
	    fabContainerBottom: number;
	    fabDefaultPosition: number;
	    fabElevation: number;
	    fabIconColor: string;
	    fabIconSize: number;
	    fabShadowColor: string;
	    fabShadowOffsetHeight: number;
	    fabShadowOffsetWidth: number;
	    fabShadowOpacity: number;
	    fabShadowRadius: number;
	    fabWidth: number;
	    DefaultFontSize: number;
	    fontFamily: string;
	    fontSizeBase: number;
	    readonly fontSizeH1: number;
	    readonly fontSizeH2: number;
	    readonly fontSizeH3: number;
	    footerHeight: number;
	    footerDefaultBg: string;
	    footerPaddingBottom: number;
	    tabBarTextColor: string;
	    tabBarTextSize: number;
	    activeTab: string;
	    sTabBarActiveTextColor: string;
	    tabBarActiveTextColor: string;
	    tabActiveBgColor: string;
	    toolbarBtnColor: string;
	    toolbarDefaultBg: string;
	    toolbarHeight: number;
	    toolbarSearchIconSize: number;
	    toolbarInputColor: string;
	    searchBarHeight: number;
	    searchBarInputHeight: number;
	    toolbarBtnTextColor: string;
	    toolbarDefaultBorder: string;
	    iosStatusbar: string;
	    readonly statusBarColor: string;
	    readonly darkenHeader: string;
	    iconFamily: string;
	    iconFontSize: number;
	    iconHeaderSize: number;
	    inputFontSize: number;
	    inputBorderColor: string;
	    inputSuccessBorderColor: string;
	    inputErrorBorderColor: string;
	    inputHeightBase: number;
	    readonly inputColor: string;
	    readonly inputColorPlaceholder: string;
	    buttonLineHeight: number;
	    lineHeightH1: number;
	    lineHeightH2: number;
	    lineHeightH3: number;
	    lineHeight: number;
	    listItemSelected: string;
	    listBg: string;
	    listBorderColor: string;
	    listDividerBg: string;
	    listBtnUnderlayColor: string;
	    listItemPadding: number;
	    listNoteColor: string;
	    listNoteSize: number;
	    defaultProgressColor: string;
	    inverseProgressColor: string;
	    radioBtnSize: number;
	    radioSelectedColorAndroid: string;
	    radioBtnLineHeight: number;
	    readonly radioColor: string;
	    segmentBackgroundColor: string;
	    segmentActiveBackgroundColor: string;
	    segmentTextColor: string;
	    segmentActiveTextColor: string;
	    segmentBorderColor: string;
	    segmentBorderColorMain: string;
	    defaultSpinnerColor: string;
	    inverseSpinnerColor: string;
	    tabBarDisabledTextColor: string;
	    tabDefaultBg: string;
	    topTabBarTextColor: string;
	    topTabBarActiveTextColor: string;
	    topTabBarBorderColor: string;
	    topTabBarActiveBorderColor: string;
	    tabBgColor: string;
	    tabFontSize: number;
	    textColor: string;
	    inverseTextColor: string;
	    noteFontSize: number;
	    readonly defaultTextColor: string;
	    titleFontfamily: string;
	    titleFontSize: number;
	    subTitleFontSize: number;
	    subtitleColor: string;
	    titleFontColor: string;
	    borderRadiusBase: number;
	    borderWidth: number;
	    contentPadding: number;
	    dropdownLinkColor: string;
	    inputLineHeight: number;
	    deviceWidth: number;
	    deviceHeight: number;
	    isIphoneX: boolean;
	    inputGroupRoundedBorderRadius: number;
	    Inset: {
	        portrait: {
	            topInset: number;
	            leftInset: number;
	            rightInset: number;
	            bottomInset: number;
	        };
	        landscape: {
	            topInset: number;
	            leftInset: number;
	            rightInset: number;
	            bottomInset: number;
	        };
	    };
	}) => {
	    flex: number;
	    height: number;
	    backgroundColor: string;
	};
	export default _default;

}
declare module 'native-base/theme/components/Content' {
	 const _default: () => {
	    flex: number;
	    backgroundColor: string;
	    'NativeBase.Segment': {
	        borderWidth: number;
	        backgroundColor: string;
	    };
	};
	export default _default;

}
declare module 'native-base/theme/components/Button' {
	 const _default: (variables?: {
	    platformStyle: undefined;
	    platform: "android" | "ios" | "web" | "windows" | "macos";
	    accordionBorderColor: string;
	    accordionContentPadding: number;
	    accordionIconFontSize: number;
	    contentStyle: string;
	    expandedIconStyle: string;
	    headerStyle: string;
	    iconStyle: string;
	    elevation: number;
	    containerTouchableBackgroundColor: string;
	    innerTouchableBackgroundColor: string;
	    listItemHeight: number;
	    listItemBorderColor: string;
	    marginHorizontal: number;
	    marginLeft: number;
	    marginTop: number;
	    minHeight: number;
	    padding: number;
	    touchableTextColor: string;
	    androidRipple: boolean;
	    androidRippleColor: string;
	    androidRippleColorDark: string;
	    buttonUppercaseAndroidText: boolean;
	    badgeBg: string;
	    badgeColor: string;
	    badgePadding: number;
	    buttonFontFamily: string;
	    buttonDisabledBg: string;
	    buttonPadding: number;
	    buttonDefaultActiveOpacity: number;
	    buttonDefaultFlex: number;
	    buttonDefaultBorderRadius: number;
	    buttonDefaultBorderWidth: number;
	    readonly buttonPrimaryBg: string;
	    readonly buttonPrimaryColor: string;
	    readonly buttonInfoBg: string;
	    readonly buttonInfoColor: string;
	    readonly buttonSuccessBg: string;
	    readonly buttonSuccessColor: string;
	    readonly buttonDangerBg: string;
	    readonly buttonDangerColor: string;
	    readonly buttonWarningBg: string;
	    readonly buttonWarningColor: string;
	    readonly buttonTextSize: number;
	    readonly buttonTextSizeLarge: number;
	    readonly buttonTextSizeSmall: number;
	    readonly borderRadiusLarge: number;
	    readonly iconSizeLarge: number;
	    readonly iconSizeSmall: number;
	    cardDefaultBg: string;
	    cardBorderColor: string;
	    cardBorderRadius: number;
	    cardItemPadding: number;
	    CheckboxRadius: number;
	    CheckboxBorderWidth: number;
	    CheckboxPaddingLeft: number;
	    CheckboxPaddingBottom: number;
	    CheckboxIconSize: number;
	    CheckboxIconMarginTop: number | undefined;
	    CheckboxFontSize: number;
	    checkboxBgColor: string;
	    checkboxSize: number;
	    checkboxTickColor: string;
	    checkboxDefaultColor: string;
	    checkboxTextShadowRadius: number;
	    brandPrimary: string;
	    brandInfo: string;
	    brandSuccess: string;
	    brandDanger: string;
	    brandWarning: string;
	    brandDark: string;
	    brandLight: string;
	    containerBgColor: string;
	    datePickerFlex: number;
	    datePickerPadding: number;
	    datePickerTextColor: string;
	    datePickerBg: string;
	    fabBackgroundColor: string;
	    fabBorderRadius: number;
	    fabBottom: number;
	    fabButtonBorderRadius: number;
	    fabButtonHeight: number;
	    fabButtonLeft: number;
	    fabButtonMarginBottom: number;
	    fabContainerBottom: number;
	    fabDefaultPosition: number;
	    fabElevation: number;
	    fabIconColor: string;
	    fabIconSize: number;
	    fabShadowColor: string;
	    fabShadowOffsetHeight: number;
	    fabShadowOffsetWidth: number;
	    fabShadowOpacity: number;
	    fabShadowRadius: number;
	    fabWidth: number;
	    DefaultFontSize: number;
	    fontFamily: string;
	    fontSizeBase: number;
	    readonly fontSizeH1: number;
	    readonly fontSizeH2: number;
	    readonly fontSizeH3: number;
	    footerHeight: number;
	    footerDefaultBg: string;
	    footerPaddingBottom: number;
	    tabBarTextColor: string;
	    tabBarTextSize: number;
	    activeTab: string;
	    sTabBarActiveTextColor: string;
	    tabBarActiveTextColor: string;
	    tabActiveBgColor: string;
	    toolbarBtnColor: string;
	    toolbarDefaultBg: string;
	    toolbarHeight: number;
	    toolbarSearchIconSize: number;
	    toolbarInputColor: string;
	    searchBarHeight: number;
	    searchBarInputHeight: number;
	    toolbarBtnTextColor: string;
	    toolbarDefaultBorder: string;
	    iosStatusbar: string;
	    readonly statusBarColor: string;
	    readonly darkenHeader: string;
	    iconFamily: string;
	    iconFontSize: number;
	    iconHeaderSize: number;
	    inputFontSize: number;
	    inputBorderColor: string;
	    inputSuccessBorderColor: string;
	    inputErrorBorderColor: string;
	    inputHeightBase: number;
	    readonly inputColor: string;
	    readonly inputColorPlaceholder: string;
	    buttonLineHeight: number;
	    lineHeightH1: number;
	    lineHeightH2: number;
	    lineHeightH3: number;
	    lineHeight: number;
	    listItemSelected: string;
	    listBg: string;
	    listBorderColor: string;
	    listDividerBg: string;
	    listBtnUnderlayColor: string;
	    listItemPadding: number;
	    listNoteColor: string;
	    listNoteSize: number;
	    defaultProgressColor: string;
	    inverseProgressColor: string;
	    radioBtnSize: number;
	    radioSelectedColorAndroid: string;
	    radioBtnLineHeight: number;
	    readonly radioColor: string;
	    segmentBackgroundColor: string;
	    segmentActiveBackgroundColor: string;
	    segmentTextColor: string;
	    segmentActiveTextColor: string;
	    segmentBorderColor: string;
	    segmentBorderColorMain: string;
	    defaultSpinnerColor: string;
	    inverseSpinnerColor: string;
	    tabBarDisabledTextColor: string;
	    tabDefaultBg: string;
	    topTabBarTextColor: string;
	    topTabBarActiveTextColor: string;
	    topTabBarBorderColor: string;
	    topTabBarActiveBorderColor: string;
	    tabBgColor: string;
	    tabFontSize: number;
	    textColor: string;
	    inverseTextColor: string;
	    noteFontSize: number;
	    readonly defaultTextColor: string;
	    titleFontfamily: string;
	    titleFontSize: number;
	    subTitleFontSize: number;
	    subtitleColor: string;
	    titleFontColor: string;
	    borderRadiusBase: number;
	    borderWidth: number;
	    contentPadding: number;
	    dropdownLinkColor: string;
	    inputLineHeight: number;
	    deviceWidth: number;
	    deviceHeight: number;
	    isIphoneX: boolean;
	    inputGroupRoundedBorderRadius: number;
	    Inset: {
	        portrait: {
	            topInset: number;
	            leftInset: number;
	            rightInset: number;
	            bottomInset: number;
	        };
	        landscape: {
	            topInset: number;
	            leftInset: number;
	            rightInset: number;
	            bottomInset: number;
	        };
	    };
	}) => {
	    '.disabled': {
	        '.transparent': {
	            backgroundColor: string;
	            'NativeBase.Text': {
	                color: string;
	            };
	            'NativeBase.Icon': {
	                color: string;
	            };
	            'NativeBase.IconNB': {
	                color: string;
	            };
	        };
	        'NativeBase.Icon': {
	            color: string;
	        };
	        'NativeBase.IconNB': {
	            color: string;
	        };
	        backgroundColor: string;
	    };
	    '.bordered': {
	        borderWidth: number;
	        elevation: null;
	        shadowColor: null;
	        shadowOffset: null;
	        shadowOpacity: null;
	        shadowRadius: null;
	        backgroundColor: string;
	        'NativeBase.Text': {
	            color: string;
	        };
	        'NativeBase.Icon': {
	            color: string;
	        };
	        'NativeBase.IconNB': {
	            color: string;
	        };
	        '.dark': {
	            backgroundColor: string;
	            borderColor: string;
	            borderWidth: number;
	            'NativeBase.Text': {
	                color: string;
	            };
	            'NativeBase.Icon': {
	                color: string;
	            };
	            'NativeBase.IconNB': {
	                color: string;
	            };
	        };
	        '.light': {
	            backgroundColor: string;
	            borderColor: string;
	            borderWidth: number;
	            'NativeBase.Text': {
	                color: string;
	            };
	            'NativeBase.Icon': {
	                color: string;
	            };
	            'NativeBase.IconNB': {
	                color: string;
	            };
	        };
	        '.primary': {
	            backgroundColor: string;
	            borderColor: string;
	            borderWidth: number;
	            'NativeBase.Text': {
	                color: string;
	            };
	            'NativeBase.Icon': {
	                color: string;
	            };
	            'NativeBase.IconNB': {
	                color: string;
	            };
	        };
	        '.success': {
	            backgroundColor: string;
	            borderColor: string;
	            borderWidth: number;
	            'NativeBase.Text': {
	                color: string;
	            };
	            'NativeBase.Icon': {
	                color: string;
	            };
	            'NativeBase.IconNB': {
	                color: string;
	            };
	        };
	        '.info': {
	            backgroundColor: string;
	            borderColor: string;
	            borderWidth: number;
	            'NativeBase.Text': {
	                color: string;
	            };
	            'NativeBase.Icon': {
	                color: string;
	            };
	            'NativeBase.IconNB': {
	                color: string;
	            };
	        };
	        '.warning': {
	            backgroundColor: string;
	            borderColor: string;
	            borderWidth: number;
	            'NativeBase.Text': {
	                color: string;
	            };
	            'NativeBase.Icon': {
	                color: string;
	            };
	            'NativeBase.IconNB': {
	                color: string;
	            };
	        };
	        '.danger': {
	            backgroundColor: string;
	            borderColor: string;
	            borderWidth: number;
	            'NativeBase.Text': {
	                color: string;
	            };
	            'NativeBase.Icon': {
	                color: string;
	            };
	            'NativeBase.IconNB': {
	                color: string;
	            };
	        };
	        '.disabled': {
	            backgroundColor: string;
	            borderColor: string;
	            borderWidth: number;
	            'NativeBase.Text': {
	                color: string;
	            };
	        };
	    };
	    '.dark': {
	        '.bordered': {
	            'NativeBase.Text': {
	                color: string;
	            };
	            'NativeBase.Icon': {
	                color: string;
	            };
	            'NativeBase.IconNB': {
	                color: string;
	            };
	        };
	        backgroundColor: string;
	    };
	    '.light': {
	        backgroundColor: string;
	        'NativeBase.Text': {
	            color: string;
	        };
	        'NativeBase.Icon': {
	            color: string;
	        };
	        'NativeBase.IconNB': {
	            color: string;
	        };
	        '.transparent': {
	            backgroundColor: string;
	            'NativeBase.Text': {
	                color: string;
	            };
	            'NativeBase.Icon': {
	                color: string;
	            };
	            'NativeBase.IconNB': {
	                color: string;
	            };
	        };
	        '.bordered': {
	            'NativeBase.Text': {
	                color: string;
	            };
	            'NativeBase.Icon': {
	                color: string;
	            };
	            'NativeBase.IconNB': {
	                color: string;
	            };
	        };
	    };
	    '.primary': {
	        '.bordered': {
	            'NativeBase.Text': {
	                color: string;
	            };
	            'NativeBase.Icon': {
	                color: string;
	            };
	            'NativeBase.IconNB': {
	                color: string;
	            };
	        };
	        backgroundColor: string;
	    };
	    '.success': {
	        '.bordered': {
	            'NativeBase.Text': {
	                color: string;
	            };
	            'NativeBase.Icon': {
	                color: string;
	            };
	            'NativeBase.IconNB': {
	                color: string;
	            };
	        };
	        backgroundColor: string;
	    };
	    '.info': {
	        '.bordered': {
	            'NativeBase.Text': {
	                color: string;
	            };
	            'NativeBase.Icon': {
	                color: string;
	            };
	            'NativeBase.IconNB': {
	                color: string;
	            };
	        };
	        backgroundColor: string;
	    };
	    '.warning': {
	        '.bordered': {
	            'NativeBase.Text': {
	                color: string;
	            };
	            'NativeBase.Icon': {
	                color: string;
	            };
	            'NativeBase.IconNB': {
	                color: string;
	            };
	        };
	        backgroundColor: string;
	    };
	    '.danger': {
	        '.bordered': {
	            'NativeBase.Text': {
	                color: string;
	            };
	            'NativeBase.Icon': {
	                color: string;
	            };
	            'NativeBase.IconNB': {
	                color: string;
	            };
	        };
	        backgroundColor: string;
	    };
	    '.block': {
	        justifyContent: string;
	        alignSelf: string;
	    };
	    '.full': {
	        justifyContent: string;
	        alignSelf: string;
	        borderRadius: number;
	    };
	    '.rounded': {
	        borderRadius: number;
	    };
	    '.transparent': {
	        '.dark': {
	            'NativeBase.Text': {
	                color: string;
	            };
	            'NativeBase.Icon': {
	                color: string;
	            };
	            'NativeBase.IconNB': {
	                color: string;
	            };
	        };
	        '.danger': {
	            'NativeBase.Text': {
	                color: string;
	            };
	            'NativeBase.Icon': {
	                color: string;
	            };
	            'NativeBase.IconNB': {
	                color: string;
	            };
	        };
	        '.warning': {
	            'NativeBase.Text': {
	                color: string;
	            };
	            'NativeBase.Icon': {
	                color: string;
	            };
	            'NativeBase.IconNB': {
	                color: string;
	            };
	        };
	        '.info': {
	            'NativeBase.Text': {
	                color: string;
	            };
	            'NativeBase.Icon': {
	                color: string;
	            };
	            'NativeBase.IconNB': {
	                color: string;
	            };
	        };
	        '.primary': {
	            'NativeBase.Text': {
	                color: string;
	            };
	            'NativeBase.Icon': {
	                color: string;
	            };
	            'NativeBase.IconNB': {
	                color: string;
	            };
	        };
	        '.success': {
	            'NativeBase.Text': {
	                color: string;
	            };
	            'NativeBase.Icon': {
	                color: string;
	            };
	            'NativeBase.IconNB': {
	                color: string;
	            };
	        };
	        '.light': {
	            'NativeBase.Text': {
	                color: string;
	            };
	            'NativeBase.Icon': {
	                color: string;
	            };
	            'NativeBase.IconNB': {
	                color: string;
	            };
	        };
	        '.disabled': {
	            backgroundColor: string;
	            borderColor: string;
	            borderWidth: number;
	            'NativeBase.Text': {
	                color: string;
	            };
	            'NativeBase.Icon': {
	                color: string;
	            };
	            'NativeBase.IconNB': {
	                color: string;
	            };
	        };
	        'NativeBase.Text': {
	            color: string;
	        };
	        'NativeBase.Icon': {
	            color: string;
	        };
	        'NativeBase.IconNB': {
	            color: string;
	        };
	        backgroundColor: string;
	        elevation: number;
	        shadowColor: null;
	        shadowOffset: null;
	        shadowRadius: null;
	        shadowOpacity: null;
	    };
	    '.small': {
	        height: number;
	        'NativeBase.Text': {
	            fontSize: number;
	        };
	        'NativeBase.Icon': {
	            fontSize: number;
	            paddingTop: number;
	        };
	        'NativeBase.IconNB': {
	            fontSize: number;
	            paddingTop: number;
	        };
	    };
	    '.large': {
	        height: number;
	        'NativeBase.Text': {
	            fontSize: number;
	        };
	    };
	    '.capitalize': {};
	    '.vertical': {
	        flexDirection: string;
	        height: null;
	    };
	    'NativeBase.Text': {
	        fontFamily: string;
	        marginLeft: number;
	        marginRight: number;
	        color: string;
	        fontSize: number;
	        paddingHorizontal: number;
	        backgroundColor: string;
	    };
	    'NativeBase.Icon': {
	        color: string;
	        fontSize: number;
	        marginHorizontal: number;
	        paddingTop: number | undefined;
	    };
	    'NativeBase.IconNB': {
	        color: string;
	        fontSize: number;
	        marginHorizontal: number;
	        paddingTop: number | undefined;
	    };
	    '.iconLeft': {
	        'NativeBase.Text': {
	            marginLeft: number;
	        };
	        'NativeBase.IconNB': {
	            marginRight: number;
	            marginLeft: number;
	        };
	        'NativeBase.Icon': {
	            marginRight: number;
	            marginLeft: number;
	        };
	    };
	    '.iconRight': {
	        'NativeBase.Text': {
	            marginRight: number;
	        };
	        'NativeBase.IconNB': {
	            marginLeft: number;
	            marginRight: number;
	        };
	        'NativeBase.Icon': {
	            marginLeft: number;
	            marginRight: number;
	        };
	    };
	    '.picker': {
	        'NativeBase.Text': {
	            '.note': {
	                fontSize: number;
	                lineHeight: null;
	            };
	        };
	    };
	    paddingVertical: number;
	    backgroundColor: string;
	    borderRadius: number;
	    borderColor: string;
	    borderWidth: null;
	    height: number;
	    flexDirection: string;
	    elevation: number;
	    shadowColor: string | undefined;
	    shadowOffset: {
	        width: number;
	        height: number;
	    } | undefined;
	    shadowOpacity: number | undefined;
	    shadowRadius: number | undefined;
	    alignItems: string;
	    justifyContent: string;
	};
	export default _default;

}
declare module 'native-base/theme/components/Title' {
	 const _default: (variables?: {
	    platformStyle: undefined;
	    platform: "android" | "ios" | "web" | "windows" | "macos";
	    accordionBorderColor: string;
	    accordionContentPadding: number;
	    accordionIconFontSize: number;
	    contentStyle: string;
	    expandedIconStyle: string;
	    headerStyle: string;
	    iconStyle: string;
	    elevation: number;
	    containerTouchableBackgroundColor: string;
	    innerTouchableBackgroundColor: string;
	    listItemHeight: number;
	    listItemBorderColor: string;
	    marginHorizontal: number;
	    marginLeft: number;
	    marginTop: number;
	    minHeight: number;
	    padding: number;
	    touchableTextColor: string;
	    androidRipple: boolean;
	    androidRippleColor: string;
	    androidRippleColorDark: string;
	    buttonUppercaseAndroidText: boolean;
	    badgeBg: string;
	    badgeColor: string;
	    badgePadding: number;
	    buttonFontFamily: string;
	    buttonDisabledBg: string;
	    buttonPadding: number;
	    buttonDefaultActiveOpacity: number;
	    buttonDefaultFlex: number;
	    buttonDefaultBorderRadius: number;
	    buttonDefaultBorderWidth: number;
	    readonly buttonPrimaryBg: string;
	    readonly buttonPrimaryColor: string;
	    readonly buttonInfoBg: string;
	    readonly buttonInfoColor: string;
	    readonly buttonSuccessBg: string;
	    readonly buttonSuccessColor: string;
	    readonly buttonDangerBg: string;
	    readonly buttonDangerColor: string;
	    readonly buttonWarningBg: string;
	    readonly buttonWarningColor: string;
	    readonly buttonTextSize: number;
	    readonly buttonTextSizeLarge: number;
	    readonly buttonTextSizeSmall: number;
	    readonly borderRadiusLarge: number;
	    readonly iconSizeLarge: number;
	    readonly iconSizeSmall: number;
	    cardDefaultBg: string;
	    cardBorderColor: string;
	    cardBorderRadius: number;
	    cardItemPadding: number;
	    CheckboxRadius: number;
	    CheckboxBorderWidth: number;
	    CheckboxPaddingLeft: number;
	    CheckboxPaddingBottom: number;
	    CheckboxIconSize: number;
	    CheckboxIconMarginTop: number | undefined;
	    CheckboxFontSize: number;
	    checkboxBgColor: string;
	    checkboxSize: number;
	    checkboxTickColor: string;
	    checkboxDefaultColor: string;
	    checkboxTextShadowRadius: number;
	    brandPrimary: string;
	    brandInfo: string;
	    brandSuccess: string;
	    brandDanger: string;
	    brandWarning: string;
	    brandDark: string;
	    brandLight: string;
	    containerBgColor: string;
	    datePickerFlex: number;
	    datePickerPadding: number;
	    datePickerTextColor: string;
	    datePickerBg: string;
	    fabBackgroundColor: string;
	    fabBorderRadius: number;
	    fabBottom: number;
	    fabButtonBorderRadius: number;
	    fabButtonHeight: number;
	    fabButtonLeft: number;
	    fabButtonMarginBottom: number;
	    fabContainerBottom: number;
	    fabDefaultPosition: number;
	    fabElevation: number;
	    fabIconColor: string;
	    fabIconSize: number;
	    fabShadowColor: string;
	    fabShadowOffsetHeight: number;
	    fabShadowOffsetWidth: number;
	    fabShadowOpacity: number;
	    fabShadowRadius: number;
	    fabWidth: number;
	    DefaultFontSize: number;
	    fontFamily: string;
	    fontSizeBase: number;
	    readonly fontSizeH1: number;
	    readonly fontSizeH2: number;
	    readonly fontSizeH3: number;
	    footerHeight: number;
	    footerDefaultBg: string;
	    footerPaddingBottom: number;
	    tabBarTextColor: string;
	    tabBarTextSize: number;
	    activeTab: string;
	    sTabBarActiveTextColor: string;
	    tabBarActiveTextColor: string;
	    tabActiveBgColor: string;
	    toolbarBtnColor: string;
	    toolbarDefaultBg: string;
	    toolbarHeight: number;
	    toolbarSearchIconSize: number;
	    toolbarInputColor: string;
	    searchBarHeight: number;
	    searchBarInputHeight: number;
	    toolbarBtnTextColor: string;
	    toolbarDefaultBorder: string;
	    iosStatusbar: string;
	    readonly statusBarColor: string;
	    readonly darkenHeader: string;
	    iconFamily: string;
	    iconFontSize: number;
	    iconHeaderSize: number;
	    inputFontSize: number;
	    inputBorderColor: string;
	    inputSuccessBorderColor: string;
	    inputErrorBorderColor: string;
	    inputHeightBase: number;
	    readonly inputColor: string;
	    readonly inputColorPlaceholder: string;
	    buttonLineHeight: number;
	    lineHeightH1: number;
	    lineHeightH2: number;
	    lineHeightH3: number;
	    lineHeight: number;
	    listItemSelected: string;
	    listBg: string;
	    listBorderColor: string;
	    listDividerBg: string;
	    listBtnUnderlayColor: string;
	    listItemPadding: number;
	    listNoteColor: string;
	    listNoteSize: number;
	    defaultProgressColor: string;
	    inverseProgressColor: string;
	    radioBtnSize: number;
	    radioSelectedColorAndroid: string;
	    radioBtnLineHeight: number;
	    readonly radioColor: string;
	    segmentBackgroundColor: string;
	    segmentActiveBackgroundColor: string;
	    segmentTextColor: string;
	    segmentActiveTextColor: string;
	    segmentBorderColor: string;
	    segmentBorderColorMain: string;
	    defaultSpinnerColor: string;
	    inverseSpinnerColor: string;
	    tabBarDisabledTextColor: string;
	    tabDefaultBg: string;
	    topTabBarTextColor: string;
	    topTabBarActiveTextColor: string;
	    topTabBarBorderColor: string;
	    topTabBarActiveBorderColor: string;
	    tabBgColor: string;
	    tabFontSize: number;
	    textColor: string;
	    inverseTextColor: string;
	    noteFontSize: number;
	    readonly defaultTextColor: string;
	    titleFontfamily: string;
	    titleFontSize: number;
	    subTitleFontSize: number;
	    subtitleColor: string;
	    titleFontColor: string;
	    borderRadiusBase: number;
	    borderWidth: number;
	    contentPadding: number;
	    dropdownLinkColor: string;
	    inputLineHeight: number;
	    deviceWidth: number;
	    deviceHeight: number;
	    isIphoneX: boolean;
	    inputGroupRoundedBorderRadius: number;
	    Inset: {
	        portrait: {
	            topInset: number;
	            leftInset: number;
	            rightInset: number;
	            bottomInset: number;
	        };
	        landscape: {
	            topInset: number;
	            leftInset: number;
	            rightInset: number;
	            bottomInset: number;
	        };
	    };
	}) => {
	    fontSize: number;
	    fontFamily: string;
	    color: string;
	    fontWeight: string | undefined;
	    textAlign: string;
	    paddingLeft: number;
	    marginLeft: number | undefined;
	    paddingTop: number;
	};
	export default _default;

}
declare module 'native-base/theme/components/Subtitle' {
	 const _default: (variables?: {
	    platformStyle: undefined;
	    platform: "android" | "ios" | "web" | "windows" | "macos";
	    accordionBorderColor: string;
	    accordionContentPadding: number;
	    accordionIconFontSize: number;
	    contentStyle: string;
	    expandedIconStyle: string;
	    headerStyle: string;
	    iconStyle: string;
	    elevation: number;
	    containerTouchableBackgroundColor: string;
	    innerTouchableBackgroundColor: string;
	    listItemHeight: number;
	    listItemBorderColor: string;
	    marginHorizontal: number;
	    marginLeft: number;
	    marginTop: number;
	    minHeight: number;
	    padding: number;
	    touchableTextColor: string;
	    androidRipple: boolean;
	    androidRippleColor: string;
	    androidRippleColorDark: string;
	    buttonUppercaseAndroidText: boolean;
	    badgeBg: string;
	    badgeColor: string;
	    badgePadding: number;
	    buttonFontFamily: string;
	    buttonDisabledBg: string;
	    buttonPadding: number;
	    buttonDefaultActiveOpacity: number;
	    buttonDefaultFlex: number;
	    buttonDefaultBorderRadius: number;
	    buttonDefaultBorderWidth: number;
	    readonly buttonPrimaryBg: string;
	    readonly buttonPrimaryColor: string;
	    readonly buttonInfoBg: string;
	    readonly buttonInfoColor: string;
	    readonly buttonSuccessBg: string;
	    readonly buttonSuccessColor: string;
	    readonly buttonDangerBg: string;
	    readonly buttonDangerColor: string;
	    readonly buttonWarningBg: string;
	    readonly buttonWarningColor: string;
	    readonly buttonTextSize: number;
	    readonly buttonTextSizeLarge: number;
	    readonly buttonTextSizeSmall: number;
	    readonly borderRadiusLarge: number;
	    readonly iconSizeLarge: number;
	    readonly iconSizeSmall: number;
	    cardDefaultBg: string;
	    cardBorderColor: string;
	    cardBorderRadius: number;
	    cardItemPadding: number;
	    CheckboxRadius: number;
	    CheckboxBorderWidth: number;
	    CheckboxPaddingLeft: number;
	    CheckboxPaddingBottom: number;
	    CheckboxIconSize: number;
	    CheckboxIconMarginTop: number | undefined;
	    CheckboxFontSize: number;
	    checkboxBgColor: string;
	    checkboxSize: number;
	    checkboxTickColor: string;
	    checkboxDefaultColor: string;
	    checkboxTextShadowRadius: number;
	    brandPrimary: string;
	    brandInfo: string;
	    brandSuccess: string;
	    brandDanger: string;
	    brandWarning: string;
	    brandDark: string;
	    brandLight: string;
	    containerBgColor: string;
	    datePickerFlex: number;
	    datePickerPadding: number;
	    datePickerTextColor: string;
	    datePickerBg: string;
	    fabBackgroundColor: string;
	    fabBorderRadius: number;
	    fabBottom: number;
	    fabButtonBorderRadius: number;
	    fabButtonHeight: number;
	    fabButtonLeft: number;
	    fabButtonMarginBottom: number;
	    fabContainerBottom: number;
	    fabDefaultPosition: number;
	    fabElevation: number;
	    fabIconColor: string;
	    fabIconSize: number;
	    fabShadowColor: string;
	    fabShadowOffsetHeight: number;
	    fabShadowOffsetWidth: number;
	    fabShadowOpacity: number;
	    fabShadowRadius: number;
	    fabWidth: number;
	    DefaultFontSize: number;
	    fontFamily: string;
	    fontSizeBase: number;
	    readonly fontSizeH1: number;
	    readonly fontSizeH2: number;
	    readonly fontSizeH3: number;
	    footerHeight: number;
	    footerDefaultBg: string;
	    footerPaddingBottom: number;
	    tabBarTextColor: string;
	    tabBarTextSize: number;
	    activeTab: string;
	    sTabBarActiveTextColor: string;
	    tabBarActiveTextColor: string;
	    tabActiveBgColor: string;
	    toolbarBtnColor: string;
	    toolbarDefaultBg: string;
	    toolbarHeight: number;
	    toolbarSearchIconSize: number;
	    toolbarInputColor: string;
	    searchBarHeight: number;
	    searchBarInputHeight: number;
	    toolbarBtnTextColor: string;
	    toolbarDefaultBorder: string;
	    iosStatusbar: string;
	    readonly statusBarColor: string;
	    readonly darkenHeader: string;
	    iconFamily: string;
	    iconFontSize: number;
	    iconHeaderSize: number;
	    inputFontSize: number;
	    inputBorderColor: string;
	    inputSuccessBorderColor: string;
	    inputErrorBorderColor: string;
	    inputHeightBase: number;
	    readonly inputColor: string;
	    readonly inputColorPlaceholder: string;
	    buttonLineHeight: number;
	    lineHeightH1: number;
	    lineHeightH2: number;
	    lineHeightH3: number;
	    lineHeight: number;
	    listItemSelected: string;
	    listBg: string;
	    listBorderColor: string;
	    listDividerBg: string;
	    listBtnUnderlayColor: string;
	    listItemPadding: number;
	    listNoteColor: string;
	    listNoteSize: number;
	    defaultProgressColor: string;
	    inverseProgressColor: string;
	    radioBtnSize: number;
	    radioSelectedColorAndroid: string;
	    radioBtnLineHeight: number;
	    readonly radioColor: string;
	    segmentBackgroundColor: string;
	    segmentActiveBackgroundColor: string;
	    segmentTextColor: string;
	    segmentActiveTextColor: string;
	    segmentBorderColor: string;
	    segmentBorderColorMain: string;
	    defaultSpinnerColor: string;
	    inverseSpinnerColor: string;
	    tabBarDisabledTextColor: string;
	    tabDefaultBg: string;
	    topTabBarTextColor: string;
	    topTabBarActiveTextColor: string;
	    topTabBarBorderColor: string;
	    topTabBarActiveBorderColor: string;
	    tabBgColor: string;
	    tabFontSize: number;
	    textColor: string;
	    inverseTextColor: string;
	    noteFontSize: number;
	    readonly defaultTextColor: string;
	    titleFontfamily: string;
	    titleFontSize: number;
	    subTitleFontSize: number;
	    subtitleColor: string;
	    titleFontColor: string;
	    borderRadiusBase: number;
	    borderWidth: number;
	    contentPadding: number;
	    dropdownLinkColor: string;
	    inputLineHeight: number;
	    deviceWidth: number;
	    deviceHeight: number;
	    isIphoneX: boolean;
	    inputGroupRoundedBorderRadius: number;
	    Inset: {
	        portrait: {
	            topInset: number;
	            leftInset: number;
	            rightInset: number;
	            bottomInset: number;
	        };
	        landscape: {
	            topInset: number;
	            leftInset: number;
	            rightInset: number;
	            bottomInset: number;
	        };
	    };
	}) => {
	    fontSize: number;
	    fontFamily: string;
	    color: string;
	    textAlign: string;
	    paddingLeft: number;
	    marginLeft: number | undefined;
	};
	export default _default;

}
declare module 'native-base/theme/components/InputGroup' {
	 const _default: (variables?: {
	    platformStyle: undefined;
	    platform: "android" | "ios" | "web" | "windows" | "macos";
	    accordionBorderColor: string;
	    accordionContentPadding: number;
	    accordionIconFontSize: number;
	    contentStyle: string;
	    expandedIconStyle: string;
	    headerStyle: string;
	    iconStyle: string;
	    elevation: number;
	    containerTouchableBackgroundColor: string;
	    innerTouchableBackgroundColor: string;
	    listItemHeight: number;
	    listItemBorderColor: string;
	    marginHorizontal: number;
	    marginLeft: number;
	    marginTop: number;
	    minHeight: number;
	    padding: number;
	    touchableTextColor: string;
	    androidRipple: boolean;
	    androidRippleColor: string;
	    androidRippleColorDark: string;
	    buttonUppercaseAndroidText: boolean;
	    badgeBg: string;
	    badgeColor: string;
	    badgePadding: number;
	    buttonFontFamily: string;
	    buttonDisabledBg: string;
	    buttonPadding: number;
	    buttonDefaultActiveOpacity: number;
	    buttonDefaultFlex: number;
	    buttonDefaultBorderRadius: number;
	    buttonDefaultBorderWidth: number;
	    readonly buttonPrimaryBg: string;
	    readonly buttonPrimaryColor: string;
	    readonly buttonInfoBg: string;
	    readonly buttonInfoColor: string;
	    readonly buttonSuccessBg: string;
	    readonly buttonSuccessColor: string;
	    readonly buttonDangerBg: string;
	    readonly buttonDangerColor: string;
	    readonly buttonWarningBg: string;
	    readonly buttonWarningColor: string;
	    readonly buttonTextSize: number;
	    readonly buttonTextSizeLarge: number;
	    readonly buttonTextSizeSmall: number;
	    readonly borderRadiusLarge: number;
	    readonly iconSizeLarge: number;
	    readonly iconSizeSmall: number;
	    cardDefaultBg: string;
	    cardBorderColor: string;
	    cardBorderRadius: number;
	    cardItemPadding: number;
	    CheckboxRadius: number;
	    CheckboxBorderWidth: number;
	    CheckboxPaddingLeft: number;
	    CheckboxPaddingBottom: number;
	    CheckboxIconSize: number;
	    CheckboxIconMarginTop: number | undefined;
	    CheckboxFontSize: number;
	    checkboxBgColor: string;
	    checkboxSize: number;
	    checkboxTickColor: string;
	    checkboxDefaultColor: string;
	    checkboxTextShadowRadius: number;
	    brandPrimary: string;
	    brandInfo: string;
	    brandSuccess: string;
	    brandDanger: string;
	    brandWarning: string;
	    brandDark: string;
	    brandLight: string;
	    containerBgColor: string;
	    datePickerFlex: number;
	    datePickerPadding: number;
	    datePickerTextColor: string;
	    datePickerBg: string;
	    fabBackgroundColor: string;
	    fabBorderRadius: number;
	    fabBottom: number;
	    fabButtonBorderRadius: number;
	    fabButtonHeight: number;
	    fabButtonLeft: number;
	    fabButtonMarginBottom: number;
	    fabContainerBottom: number;
	    fabDefaultPosition: number;
	    fabElevation: number;
	    fabIconColor: string;
	    fabIconSize: number;
	    fabShadowColor: string;
	    fabShadowOffsetHeight: number;
	    fabShadowOffsetWidth: number;
	    fabShadowOpacity: number;
	    fabShadowRadius: number;
	    fabWidth: number;
	    DefaultFontSize: number;
	    fontFamily: string;
	    fontSizeBase: number;
	    readonly fontSizeH1: number;
	    readonly fontSizeH2: number;
	    readonly fontSizeH3: number;
	    footerHeight: number;
	    footerDefaultBg: string;
	    footerPaddingBottom: number;
	    tabBarTextColor: string;
	    tabBarTextSize: number;
	    activeTab: string;
	    sTabBarActiveTextColor: string;
	    tabBarActiveTextColor: string;
	    tabActiveBgColor: string;
	    toolbarBtnColor: string;
	    toolbarDefaultBg: string;
	    toolbarHeight: number;
	    toolbarSearchIconSize: number;
	    toolbarInputColor: string;
	    searchBarHeight: number;
	    searchBarInputHeight: number;
	    toolbarBtnTextColor: string;
	    toolbarDefaultBorder: string;
	    iosStatusbar: string;
	    readonly statusBarColor: string;
	    readonly darkenHeader: string;
	    iconFamily: string;
	    iconFontSize: number;
	    iconHeaderSize: number;
	    inputFontSize: number;
	    inputBorderColor: string;
	    inputSuccessBorderColor: string;
	    inputErrorBorderColor: string;
	    inputHeightBase: number;
	    readonly inputColor: string;
	    readonly inputColorPlaceholder: string;
	    buttonLineHeight: number;
	    lineHeightH1: number;
	    lineHeightH2: number;
	    lineHeightH3: number;
	    lineHeight: number;
	    listItemSelected: string;
	    listBg: string;
	    listBorderColor: string;
	    listDividerBg: string;
	    listBtnUnderlayColor: string;
	    listItemPadding: number;
	    listNoteColor: string;
	    listNoteSize: number;
	    defaultProgressColor: string;
	    inverseProgressColor: string;
	    radioBtnSize: number;
	    radioSelectedColorAndroid: string;
	    radioBtnLineHeight: number;
	    readonly radioColor: string;
	    segmentBackgroundColor: string;
	    segmentActiveBackgroundColor: string;
	    segmentTextColor: string;
	    segmentActiveTextColor: string;
	    segmentBorderColor: string;
	    segmentBorderColorMain: string;
	    defaultSpinnerColor: string;
	    inverseSpinnerColor: string;
	    tabBarDisabledTextColor: string;
	    tabDefaultBg: string;
	    topTabBarTextColor: string;
	    topTabBarActiveTextColor: string;
	    topTabBarBorderColor: string;
	    topTabBarActiveBorderColor: string;
	    tabBgColor: string;
	    tabFontSize: number;
	    textColor: string;
	    inverseTextColor: string;
	    noteFontSize: number;
	    readonly defaultTextColor: string;
	    titleFontfamily: string;
	    titleFontSize: number;
	    subTitleFontSize: number;
	    subtitleColor: string;
	    titleFontColor: string;
	    borderRadiusBase: number;
	    borderWidth: number;
	    contentPadding: number;
	    dropdownLinkColor: string;
	    inputLineHeight: number;
	    deviceWidth: number;
	    deviceHeight: number;
	    isIphoneX: boolean;
	    inputGroupRoundedBorderRadius: number;
	    Inset: {
	        portrait: {
	            topInset: number;
	            leftInset: number;
	            rightInset: number;
	            bottomInset: number;
	        };
	        landscape: {
	            topInset: number;
	            leftInset: number;
	            rightInset: number;
	            bottomInset: number;
	        };
	    };
	}) => {
	    'NativeBase.Icon': {
	        fontSize: number;
	        color: string;
	        paddingHorizontal: number;
	    };
	    'NativeBase.IconNB': {
	        fontSize: number;
	        color: string;
	        paddingHorizontal: number;
	    };
	    'NativeBase.Input': {
	        height: number;
	        color: string;
	        paddingLeft: number;
	        paddingRight: number;
	        flex: number;
	        fontSize: number;
	        lineHeight: number;
	    };
	    '.underline': {
	        '.success': {
	            borderColor: string;
	        };
	        '.error': {
	            borderColor: string;
	        };
	        paddingLeft: number;
	        borderWidth: number;
	        borderTopWidth: number;
	        borderRightWidth: number;
	        borderLeftWidth: number;
	        borderColor: string;
	    };
	    '.regular': {
	        '.success': {
	            borderColor: string;
	        };
	        '.error': {
	            borderColor: string;
	        };
	        paddingLeft: number;
	        borderWidth: number;
	        borderColor: string;
	    };
	    '.rounded': {
	        '.success': {
	            borderColor: string;
	        };
	        '.error': {
	            borderColor: string;
	        };
	        paddingLeft: number;
	        borderWidth: number;
	        borderRadius: number;
	        borderColor: string;
	    };
	    '.success': {
	        'NativeBase.Icon': {
	            color: string;
	        };
	        'NativeBase.IconNB': {
	            color: string;
	        };
	        '.rounded': {
	            borderRadius: number;
	            borderColor: string;
	        };
	        '.regular': {
	            borderColor: string;
	        };
	        '.underline': {
	            borderWidth: number;
	            borderTopWidth: number;
	            borderRightWidth: number;
	            borderLeftWidth: number;
	            borderColor: string;
	        };
	        borderColor: string;
	    };
	    '.error': {
	        'NativeBase.Icon': {
	            color: string;
	        };
	        'NativeBase.IconNB': {
	            color: string;
	        };
	        '.rounded': {
	            borderRadius: number;
	            borderColor: string;
	        };
	        '.regular': {
	            borderColor: string;
	        };
	        '.underline': {
	            borderWidth: number;
	            borderTopWidth: number;
	            borderRightWidth: number;
	            borderLeftWidth: number;
	            borderColor: string;
	        };
	        borderColor: string;
	    };
	    '.disabled': {
	        'NativeBase.Icon': {
	            color: string;
	        };
	        'NativeBase.IconNB': {
	            color: string;
	        };
	    };
	    paddingLeft: number;
	    borderWidth: number;
	    borderTopWidth: number;
	    borderRightWidth: number;
	    borderLeftWidth: number;
	    borderColor: string;
	    backgroundColor: string;
	    flexDirection: string;
	    alignItems: string;
	};
	export default _default;

}
declare module 'native-base/theme/components/Badge' {
	 const _default: (variables?: {
	    platformStyle: undefined;
	    platform: "android" | "ios" | "web" | "windows" | "macos";
	    accordionBorderColor: string;
	    accordionContentPadding: number;
	    accordionIconFontSize: number;
	    contentStyle: string;
	    expandedIconStyle: string;
	    headerStyle: string;
	    iconStyle: string;
	    elevation: number;
	    containerTouchableBackgroundColor: string;
	    innerTouchableBackgroundColor: string;
	    listItemHeight: number;
	    listItemBorderColor: string;
	    marginHorizontal: number;
	    marginLeft: number;
	    marginTop: number;
	    minHeight: number;
	    padding: number;
	    touchableTextColor: string;
	    androidRipple: boolean;
	    androidRippleColor: string;
	    androidRippleColorDark: string;
	    buttonUppercaseAndroidText: boolean;
	    badgeBg: string;
	    badgeColor: string;
	    badgePadding: number;
	    buttonFontFamily: string;
	    buttonDisabledBg: string;
	    buttonPadding: number;
	    buttonDefaultActiveOpacity: number;
	    buttonDefaultFlex: number;
	    buttonDefaultBorderRadius: number;
	    buttonDefaultBorderWidth: number;
	    readonly buttonPrimaryBg: string;
	    readonly buttonPrimaryColor: string;
	    readonly buttonInfoBg: string;
	    readonly buttonInfoColor: string;
	    readonly buttonSuccessBg: string;
	    readonly buttonSuccessColor: string;
	    readonly buttonDangerBg: string;
	    readonly buttonDangerColor: string;
	    readonly buttonWarningBg: string;
	    readonly buttonWarningColor: string;
	    readonly buttonTextSize: number;
	    readonly buttonTextSizeLarge: number;
	    readonly buttonTextSizeSmall: number;
	    readonly borderRadiusLarge: number;
	    readonly iconSizeLarge: number;
	    readonly iconSizeSmall: number;
	    cardDefaultBg: string;
	    cardBorderColor: string;
	    cardBorderRadius: number;
	    cardItemPadding: number;
	    CheckboxRadius: number;
	    CheckboxBorderWidth: number;
	    CheckboxPaddingLeft: number;
	    CheckboxPaddingBottom: number;
	    CheckboxIconSize: number;
	    CheckboxIconMarginTop: number | undefined;
	    CheckboxFontSize: number;
	    checkboxBgColor: string;
	    checkboxSize: number;
	    checkboxTickColor: string;
	    checkboxDefaultColor: string;
	    checkboxTextShadowRadius: number;
	    brandPrimary: string;
	    brandInfo: string;
	    brandSuccess: string;
	    brandDanger: string;
	    brandWarning: string;
	    brandDark: string;
	    brandLight: string;
	    containerBgColor: string;
	    datePickerFlex: number;
	    datePickerPadding: number;
	    datePickerTextColor: string;
	    datePickerBg: string;
	    fabBackgroundColor: string;
	    fabBorderRadius: number;
	    fabBottom: number;
	    fabButtonBorderRadius: number;
	    fabButtonHeight: number;
	    fabButtonLeft: number;
	    fabButtonMarginBottom: number;
	    fabContainerBottom: number;
	    fabDefaultPosition: number;
	    fabElevation: number;
	    fabIconColor: string;
	    fabIconSize: number;
	    fabShadowColor: string;
	    fabShadowOffsetHeight: number;
	    fabShadowOffsetWidth: number;
	    fabShadowOpacity: number;
	    fabShadowRadius: number;
	    fabWidth: number;
	    DefaultFontSize: number;
	    fontFamily: string;
	    fontSizeBase: number;
	    readonly fontSizeH1: number;
	    readonly fontSizeH2: number;
	    readonly fontSizeH3: number;
	    footerHeight: number;
	    footerDefaultBg: string;
	    footerPaddingBottom: number;
	    tabBarTextColor: string;
	    tabBarTextSize: number;
	    activeTab: string;
	    sTabBarActiveTextColor: string;
	    tabBarActiveTextColor: string;
	    tabActiveBgColor: string;
	    toolbarBtnColor: string;
	    toolbarDefaultBg: string;
	    toolbarHeight: number;
	    toolbarSearchIconSize: number;
	    toolbarInputColor: string;
	    searchBarHeight: number;
	    searchBarInputHeight: number;
	    toolbarBtnTextColor: string;
	    toolbarDefaultBorder: string;
	    iosStatusbar: string;
	    readonly statusBarColor: string;
	    readonly darkenHeader: string;
	    iconFamily: string;
	    iconFontSize: number;
	    iconHeaderSize: number;
	    inputFontSize: number;
	    inputBorderColor: string;
	    inputSuccessBorderColor: string;
	    inputErrorBorderColor: string;
	    inputHeightBase: number;
	    readonly inputColor: string;
	    readonly inputColorPlaceholder: string;
	    buttonLineHeight: number;
	    lineHeightH1: number;
	    lineHeightH2: number;
	    lineHeightH3: number;
	    lineHeight: number;
	    listItemSelected: string;
	    listBg: string;
	    listBorderColor: string;
	    listDividerBg: string;
	    listBtnUnderlayColor: string;
	    listItemPadding: number;
	    listNoteColor: string;
	    listNoteSize: number;
	    defaultProgressColor: string;
	    inverseProgressColor: string;
	    radioBtnSize: number;
	    radioSelectedColorAndroid: string;
	    radioBtnLineHeight: number;
	    readonly radioColor: string;
	    segmentBackgroundColor: string;
	    segmentActiveBackgroundColor: string;
	    segmentTextColor: string;
	    segmentActiveTextColor: string;
	    segmentBorderColor: string;
	    segmentBorderColorMain: string;
	    defaultSpinnerColor: string;
	    inverseSpinnerColor: string;
	    tabBarDisabledTextColor: string;
	    tabDefaultBg: string;
	    topTabBarTextColor: string;
	    topTabBarActiveTextColor: string;
	    topTabBarBorderColor: string;
	    topTabBarActiveBorderColor: string;
	    tabBgColor: string;
	    tabFontSize: number;
	    textColor: string;
	    inverseTextColor: string;
	    noteFontSize: number;
	    readonly defaultTextColor: string;
	    titleFontfamily: string;
	    titleFontSize: number;
	    subTitleFontSize: number;
	    subtitleColor: string;
	    titleFontColor: string;
	    borderRadiusBase: number;
	    borderWidth: number;
	    contentPadding: number;
	    dropdownLinkColor: string;
	    inputLineHeight: number;
	    deviceWidth: number;
	    deviceHeight: number;
	    isIphoneX: boolean;
	    inputGroupRoundedBorderRadius: number;
	    Inset: {
	        portrait: {
	            topInset: number;
	            leftInset: number;
	            rightInset: number;
	            bottomInset: number;
	        };
	        landscape: {
	            topInset: number;
	            leftInset: number;
	            rightInset: number;
	            bottomInset: number;
	        };
	    };
	}) => {
	    '.primary': {
	        backgroundColor: string;
	    };
	    '.warning': {
	        backgroundColor: string;
	    };
	    '.info': {
	        backgroundColor: string;
	    };
	    '.success': {
	        backgroundColor: string;
	    };
	    '.danger': {
	        backgroundColor: string;
	    };
	    'NativeBase.Text': {
	        color: string;
	        fontSize: number;
	        lineHeight: number;
	        textAlign: string;
	        paddingHorizontal: number;
	    };
	    backgroundColor: string;
	    padding: number;
	    paddingHorizontal: number;
	    alignSelf: string;
	    justifyContent: string | undefined;
	    borderRadius: number;
	    height: number;
	};
	export default _default;

}
declare module 'native-base/theme/components/CheckBox' {
	 const _default: (variables?: {
	    platformStyle: undefined;
	    platform: "android" | "ios" | "web" | "windows" | "macos";
	    accordionBorderColor: string;
	    accordionContentPadding: number;
	    accordionIconFontSize: number;
	    contentStyle: string;
	    expandedIconStyle: string;
	    headerStyle: string;
	    iconStyle: string;
	    elevation: number;
	    containerTouchableBackgroundColor: string;
	    innerTouchableBackgroundColor: string;
	    listItemHeight: number;
	    listItemBorderColor: string;
	    marginHorizontal: number;
	    marginLeft: number;
	    marginTop: number;
	    minHeight: number;
	    padding: number;
	    touchableTextColor: string;
	    androidRipple: boolean;
	    androidRippleColor: string;
	    androidRippleColorDark: string;
	    buttonUppercaseAndroidText: boolean;
	    badgeBg: string;
	    badgeColor: string;
	    badgePadding: number;
	    buttonFontFamily: string;
	    buttonDisabledBg: string;
	    buttonPadding: number;
	    buttonDefaultActiveOpacity: number;
	    buttonDefaultFlex: number;
	    buttonDefaultBorderRadius: number;
	    buttonDefaultBorderWidth: number;
	    readonly buttonPrimaryBg: string;
	    readonly buttonPrimaryColor: string;
	    readonly buttonInfoBg: string;
	    readonly buttonInfoColor: string;
	    readonly buttonSuccessBg: string;
	    readonly buttonSuccessColor: string;
	    readonly buttonDangerBg: string;
	    readonly buttonDangerColor: string;
	    readonly buttonWarningBg: string;
	    readonly buttonWarningColor: string;
	    readonly buttonTextSize: number;
	    readonly buttonTextSizeLarge: number;
	    readonly buttonTextSizeSmall: number;
	    readonly borderRadiusLarge: number;
	    readonly iconSizeLarge: number;
	    readonly iconSizeSmall: number;
	    cardDefaultBg: string;
	    cardBorderColor: string;
	    cardBorderRadius: number;
	    cardItemPadding: number;
	    CheckboxRadius: number;
	    CheckboxBorderWidth: number;
	    CheckboxPaddingLeft: number;
	    CheckboxPaddingBottom: number;
	    CheckboxIconSize: number;
	    CheckboxIconMarginTop: number | undefined;
	    CheckboxFontSize: number;
	    checkboxBgColor: string;
	    checkboxSize: number;
	    checkboxTickColor: string;
	    checkboxDefaultColor: string;
	    checkboxTextShadowRadius: number;
	    brandPrimary: string;
	    brandInfo: string;
	    brandSuccess: string;
	    brandDanger: string;
	    brandWarning: string;
	    brandDark: string;
	    brandLight: string;
	    containerBgColor: string;
	    datePickerFlex: number;
	    datePickerPadding: number;
	    datePickerTextColor: string;
	    datePickerBg: string;
	    fabBackgroundColor: string;
	    fabBorderRadius: number;
	    fabBottom: number;
	    fabButtonBorderRadius: number;
	    fabButtonHeight: number;
	    fabButtonLeft: number;
	    fabButtonMarginBottom: number;
	    fabContainerBottom: number;
	    fabDefaultPosition: number;
	    fabElevation: number;
	    fabIconColor: string;
	    fabIconSize: number;
	    fabShadowColor: string;
	    fabShadowOffsetHeight: number;
	    fabShadowOffsetWidth: number;
	    fabShadowOpacity: number;
	    fabShadowRadius: number;
	    fabWidth: number;
	    DefaultFontSize: number;
	    fontFamily: string;
	    fontSizeBase: number;
	    readonly fontSizeH1: number;
	    readonly fontSizeH2: number;
	    readonly fontSizeH3: number;
	    footerHeight: number;
	    footerDefaultBg: string;
	    footerPaddingBottom: number;
	    tabBarTextColor: string;
	    tabBarTextSize: number;
	    activeTab: string;
	    sTabBarActiveTextColor: string;
	    tabBarActiveTextColor: string;
	    tabActiveBgColor: string;
	    toolbarBtnColor: string;
	    toolbarDefaultBg: string;
	    toolbarHeight: number;
	    toolbarSearchIconSize: number;
	    toolbarInputColor: string;
	    searchBarHeight: number;
	    searchBarInputHeight: number;
	    toolbarBtnTextColor: string;
	    toolbarDefaultBorder: string;
	    iosStatusbar: string;
	    readonly statusBarColor: string;
	    readonly darkenHeader: string;
	    iconFamily: string;
	    iconFontSize: number;
	    iconHeaderSize: number;
	    inputFontSize: number;
	    inputBorderColor: string;
	    inputSuccessBorderColor: string;
	    inputErrorBorderColor: string;
	    inputHeightBase: number;
	    readonly inputColor: string;
	    readonly inputColorPlaceholder: string;
	    buttonLineHeight: number;
	    lineHeightH1: number;
	    lineHeightH2: number;
	    lineHeightH3: number;
	    lineHeight: number;
	    listItemSelected: string;
	    listBg: string;
	    listBorderColor: string;
	    listDividerBg: string;
	    listBtnUnderlayColor: string;
	    listItemPadding: number;
	    listNoteColor: string;
	    listNoteSize: number;
	    defaultProgressColor: string;
	    inverseProgressColor: string;
	    radioBtnSize: number;
	    radioSelectedColorAndroid: string;
	    radioBtnLineHeight: number;
	    readonly radioColor: string;
	    segmentBackgroundColor: string;
	    segmentActiveBackgroundColor: string;
	    segmentTextColor: string;
	    segmentActiveTextColor: string;
	    segmentBorderColor: string;
	    segmentBorderColorMain: string;
	    defaultSpinnerColor: string;
	    inverseSpinnerColor: string;
	    tabBarDisabledTextColor: string;
	    tabDefaultBg: string;
	    topTabBarTextColor: string;
	    topTabBarActiveTextColor: string;
	    topTabBarBorderColor: string;
	    topTabBarActiveBorderColor: string;
	    tabBgColor: string;
	    tabFontSize: number;
	    textColor: string;
	    inverseTextColor: string;
	    noteFontSize: number;
	    readonly defaultTextColor: string;
	    titleFontfamily: string;
	    titleFontSize: number;
	    subTitleFontSize: number;
	    subtitleColor: string;
	    titleFontColor: string;
	    borderRadiusBase: number;
	    borderWidth: number;
	    contentPadding: number;
	    dropdownLinkColor: string;
	    inputLineHeight: number;
	    deviceWidth: number;
	    deviceHeight: number;
	    isIphoneX: boolean;
	    inputGroupRoundedBorderRadius: number;
	    Inset: {
	        portrait: {
	            topInset: number;
	            leftInset: number;
	            rightInset: number;
	            bottomInset: number;
	        };
	        landscape: {
	            topInset: number;
	            leftInset: number;
	            rightInset: number;
	            bottomInset: number;
	        };
	    };
	}) => {
	    '.checked': {
	        'NativeBase.Icon': {
	            color: string;
	        };
	        'NativeBase.IconNB': {
	            color: string;
	        };
	    };
	    'NativeBase.Icon': {
	        color: string;
	        lineHeight: number;
	        marginTop: number | undefined;
	        fontSize: number;
	    };
	    'NativeBase.IconNB': {
	        color: string;
	        lineHeight: number;
	        marginTop: number | undefined;
	        fontSize: number;
	    };
	    borderRadius: number;
	    overflow: string;
	    width: number;
	    height: number;
	    borderWidth: number;
	    paddingLeft: number;
	    paddingBottom: number;
	    left: number;
	};
	export default _default;

}
declare module 'native-base/theme/components/Card' {
	 const _default: (variables?: {
	    platformStyle: undefined;
	    platform: "android" | "ios" | "web" | "windows" | "macos";
	    accordionBorderColor: string;
	    accordionContentPadding: number;
	    accordionIconFontSize: number;
	    contentStyle: string;
	    expandedIconStyle: string;
	    headerStyle: string;
	    iconStyle: string;
	    elevation: number;
	    containerTouchableBackgroundColor: string;
	    innerTouchableBackgroundColor: string;
	    listItemHeight: number;
	    listItemBorderColor: string;
	    marginHorizontal: number;
	    marginLeft: number;
	    marginTop: number;
	    minHeight: number;
	    padding: number;
	    touchableTextColor: string;
	    androidRipple: boolean;
	    androidRippleColor: string;
	    androidRippleColorDark: string;
	    buttonUppercaseAndroidText: boolean;
	    badgeBg: string;
	    badgeColor: string;
	    badgePadding: number;
	    buttonFontFamily: string;
	    buttonDisabledBg: string;
	    buttonPadding: number;
	    buttonDefaultActiveOpacity: number;
	    buttonDefaultFlex: number;
	    buttonDefaultBorderRadius: number;
	    buttonDefaultBorderWidth: number;
	    readonly buttonPrimaryBg: string;
	    readonly buttonPrimaryColor: string;
	    readonly buttonInfoBg: string;
	    readonly buttonInfoColor: string;
	    readonly buttonSuccessBg: string;
	    readonly buttonSuccessColor: string;
	    readonly buttonDangerBg: string;
	    readonly buttonDangerColor: string;
	    readonly buttonWarningBg: string;
	    readonly buttonWarningColor: string;
	    readonly buttonTextSize: number;
	    readonly buttonTextSizeLarge: number;
	    readonly buttonTextSizeSmall: number;
	    readonly borderRadiusLarge: number;
	    readonly iconSizeLarge: number;
	    readonly iconSizeSmall: number;
	    cardDefaultBg: string;
	    cardBorderColor: string;
	    cardBorderRadius: number;
	    cardItemPadding: number;
	    CheckboxRadius: number;
	    CheckboxBorderWidth: number;
	    CheckboxPaddingLeft: number;
	    CheckboxPaddingBottom: number;
	    CheckboxIconSize: number;
	    CheckboxIconMarginTop: number | undefined;
	    CheckboxFontSize: number;
	    checkboxBgColor: string;
	    checkboxSize: number;
	    checkboxTickColor: string;
	    checkboxDefaultColor: string;
	    checkboxTextShadowRadius: number;
	    brandPrimary: string;
	    brandInfo: string;
	    brandSuccess: string;
	    brandDanger: string;
	    brandWarning: string;
	    brandDark: string;
	    brandLight: string;
	    containerBgColor: string;
	    datePickerFlex: number;
	    datePickerPadding: number;
	    datePickerTextColor: string;
	    datePickerBg: string;
	    fabBackgroundColor: string;
	    fabBorderRadius: number;
	    fabBottom: number;
	    fabButtonBorderRadius: number;
	    fabButtonHeight: number;
	    fabButtonLeft: number;
	    fabButtonMarginBottom: number;
	    fabContainerBottom: number;
	    fabDefaultPosition: number;
	    fabElevation: number;
	    fabIconColor: string;
	    fabIconSize: number;
	    fabShadowColor: string;
	    fabShadowOffsetHeight: number;
	    fabShadowOffsetWidth: number;
	    fabShadowOpacity: number;
	    fabShadowRadius: number;
	    fabWidth: number;
	    DefaultFontSize: number;
	    fontFamily: string;
	    fontSizeBase: number;
	    readonly fontSizeH1: number;
	    readonly fontSizeH2: number;
	    readonly fontSizeH3: number;
	    footerHeight: number;
	    footerDefaultBg: string;
	    footerPaddingBottom: number;
	    tabBarTextColor: string;
	    tabBarTextSize: number;
	    activeTab: string;
	    sTabBarActiveTextColor: string;
	    tabBarActiveTextColor: string;
	    tabActiveBgColor: string;
	    toolbarBtnColor: string;
	    toolbarDefaultBg: string;
	    toolbarHeight: number;
	    toolbarSearchIconSize: number;
	    toolbarInputColor: string;
	    searchBarHeight: number;
	    searchBarInputHeight: number;
	    toolbarBtnTextColor: string;
	    toolbarDefaultBorder: string;
	    iosStatusbar: string;
	    readonly statusBarColor: string;
	    readonly darkenHeader: string;
	    iconFamily: string;
	    iconFontSize: number;
	    iconHeaderSize: number;
	    inputFontSize: number;
	    inputBorderColor: string;
	    inputSuccessBorderColor: string;
	    inputErrorBorderColor: string;
	    inputHeightBase: number;
	    readonly inputColor: string;
	    readonly inputColorPlaceholder: string;
	    buttonLineHeight: number;
	    lineHeightH1: number;
	    lineHeightH2: number;
	    lineHeightH3: number;
	    lineHeight: number;
	    listItemSelected: string;
	    listBg: string;
	    listBorderColor: string;
	    listDividerBg: string;
	    listBtnUnderlayColor: string;
	    listItemPadding: number;
	    listNoteColor: string;
	    listNoteSize: number;
	    defaultProgressColor: string;
	    inverseProgressColor: string;
	    radioBtnSize: number;
	    radioSelectedColorAndroid: string;
	    radioBtnLineHeight: number;
	    readonly radioColor: string;
	    segmentBackgroundColor: string;
	    segmentActiveBackgroundColor: string;
	    segmentTextColor: string;
	    segmentActiveTextColor: string;
	    segmentBorderColor: string;
	    segmentBorderColorMain: string;
	    defaultSpinnerColor: string;
	    inverseSpinnerColor: string;
	    tabBarDisabledTextColor: string;
	    tabDefaultBg: string;
	    topTabBarTextColor: string;
	    topTabBarActiveTextColor: string;
	    topTabBarBorderColor: string;
	    topTabBarActiveBorderColor: string;
	    tabBgColor: string;
	    tabFontSize: number;
	    textColor: string;
	    inverseTextColor: string;
	    noteFontSize: number;
	    readonly defaultTextColor: string;
	    titleFontfamily: string;
	    titleFontSize: number;
	    subTitleFontSize: number;
	    subtitleColor: string;
	    titleFontColor: string;
	    borderRadiusBase: number;
	    borderWidth: number;
	    contentPadding: number;
	    dropdownLinkColor: string;
	    inputLineHeight: number;
	    deviceWidth: number;
	    deviceHeight: number;
	    isIphoneX: boolean;
	    inputGroupRoundedBorderRadius: number;
	    Inset: {
	        portrait: {
	            topInset: number;
	            leftInset: number;
	            rightInset: number;
	            bottomInset: number;
	        };
	        landscape: {
	            topInset: number;
	            leftInset: number;
	            rightInset: number;
	            bottomInset: number;
	        };
	    };
	}) => {
	    '.transparent': {
	        shadowColor: null;
	        shadowOffset: null;
	        shadowOpacity: null;
	        shadowRadius: null;
	        elevation: null;
	        backgroundColor: string;
	        borderWidth: number;
	    };
	    '.noShadow': {
	        shadowColor: null;
	        shadowOffset: null;
	        shadowOpacity: null;
	        elevation: null;
	    };
	    marginVertical: number;
	    marginHorizontal: number;
	    borderWidth: number;
	    borderRadius: number;
	    borderColor: string;
	    flexWrap: string;
	    backgroundColor: string;
	    shadowColor: string;
	    shadowOffset: {
	        width: number;
	        height: number;
	    };
	    shadowOpacity: number;
	    shadowRadius: number;
	    elevation: number;
	};
	export default _default;

}
declare module 'native-base/theme/components/Radio' {
	 const _default: (variables?: {
	    platformStyle: undefined;
	    platform: "android" | "ios" | "web" | "windows" | "macos";
	    accordionBorderColor: string;
	    accordionContentPadding: number;
	    accordionIconFontSize: number;
	    contentStyle: string;
	    expandedIconStyle: string;
	    headerStyle: string;
	    iconStyle: string;
	    elevation: number;
	    containerTouchableBackgroundColor: string;
	    innerTouchableBackgroundColor: string;
	    listItemHeight: number;
	    listItemBorderColor: string;
	    marginHorizontal: number;
	    marginLeft: number;
	    marginTop: number;
	    minHeight: number;
	    padding: number;
	    touchableTextColor: string;
	    androidRipple: boolean;
	    androidRippleColor: string;
	    androidRippleColorDark: string;
	    buttonUppercaseAndroidText: boolean;
	    badgeBg: string;
	    badgeColor: string;
	    badgePadding: number;
	    buttonFontFamily: string;
	    buttonDisabledBg: string;
	    buttonPadding: number;
	    buttonDefaultActiveOpacity: number;
	    buttonDefaultFlex: number;
	    buttonDefaultBorderRadius: number;
	    buttonDefaultBorderWidth: number;
	    readonly buttonPrimaryBg: string;
	    readonly buttonPrimaryColor: string;
	    readonly buttonInfoBg: string;
	    readonly buttonInfoColor: string;
	    readonly buttonSuccessBg: string;
	    readonly buttonSuccessColor: string;
	    readonly buttonDangerBg: string;
	    readonly buttonDangerColor: string;
	    readonly buttonWarningBg: string;
	    readonly buttonWarningColor: string;
	    readonly buttonTextSize: number;
	    readonly buttonTextSizeLarge: number;
	    readonly buttonTextSizeSmall: number;
	    readonly borderRadiusLarge: number;
	    readonly iconSizeLarge: number;
	    readonly iconSizeSmall: number;
	    cardDefaultBg: string;
	    cardBorderColor: string;
	    cardBorderRadius: number;
	    cardItemPadding: number;
	    CheckboxRadius: number;
	    CheckboxBorderWidth: number;
	    CheckboxPaddingLeft: number;
	    CheckboxPaddingBottom: number;
	    CheckboxIconSize: number;
	    CheckboxIconMarginTop: number | undefined;
	    CheckboxFontSize: number;
	    checkboxBgColor: string;
	    checkboxSize: number;
	    checkboxTickColor: string;
	    checkboxDefaultColor: string;
	    checkboxTextShadowRadius: number;
	    brandPrimary: string;
	    brandInfo: string;
	    brandSuccess: string;
	    brandDanger: string;
	    brandWarning: string;
	    brandDark: string;
	    brandLight: string;
	    containerBgColor: string;
	    datePickerFlex: number;
	    datePickerPadding: number;
	    datePickerTextColor: string;
	    datePickerBg: string;
	    fabBackgroundColor: string;
	    fabBorderRadius: number;
	    fabBottom: number;
	    fabButtonBorderRadius: number;
	    fabButtonHeight: number;
	    fabButtonLeft: number;
	    fabButtonMarginBottom: number;
	    fabContainerBottom: number;
	    fabDefaultPosition: number;
	    fabElevation: number;
	    fabIconColor: string;
	    fabIconSize: number;
	    fabShadowColor: string;
	    fabShadowOffsetHeight: number;
	    fabShadowOffsetWidth: number;
	    fabShadowOpacity: number;
	    fabShadowRadius: number;
	    fabWidth: number;
	    DefaultFontSize: number;
	    fontFamily: string;
	    fontSizeBase: number;
	    readonly fontSizeH1: number;
	    readonly fontSizeH2: number;
	    readonly fontSizeH3: number;
	    footerHeight: number;
	    footerDefaultBg: string;
	    footerPaddingBottom: number;
	    tabBarTextColor: string;
	    tabBarTextSize: number;
	    activeTab: string;
	    sTabBarActiveTextColor: string;
	    tabBarActiveTextColor: string;
	    tabActiveBgColor: string;
	    toolbarBtnColor: string;
	    toolbarDefaultBg: string;
	    toolbarHeight: number;
	    toolbarSearchIconSize: number;
	    toolbarInputColor: string;
	    searchBarHeight: number;
	    searchBarInputHeight: number;
	    toolbarBtnTextColor: string;
	    toolbarDefaultBorder: string;
	    iosStatusbar: string;
	    readonly statusBarColor: string;
	    readonly darkenHeader: string;
	    iconFamily: string;
	    iconFontSize: number;
	    iconHeaderSize: number;
	    inputFontSize: number;
	    inputBorderColor: string;
	    inputSuccessBorderColor: string;
	    inputErrorBorderColor: string;
	    inputHeightBase: number;
	    readonly inputColor: string;
	    readonly inputColorPlaceholder: string;
	    buttonLineHeight: number;
	    lineHeightH1: number;
	    lineHeightH2: number;
	    lineHeightH3: number;
	    lineHeight: number;
	    listItemSelected: string;
	    listBg: string;
	    listBorderColor: string;
	    listDividerBg: string;
	    listBtnUnderlayColor: string;
	    listItemPadding: number;
	    listNoteColor: string;
	    listNoteSize: number;
	    defaultProgressColor: string;
	    inverseProgressColor: string;
	    radioBtnSize: number;
	    radioSelectedColorAndroid: string;
	    radioBtnLineHeight: number;
	    readonly radioColor: string;
	    segmentBackgroundColor: string;
	    segmentActiveBackgroundColor: string;
	    segmentTextColor: string;
	    segmentActiveTextColor: string;
	    segmentBorderColor: string;
	    segmentBorderColorMain: string;
	    defaultSpinnerColor: string;
	    inverseSpinnerColor: string;
	    tabBarDisabledTextColor: string;
	    tabDefaultBg: string;
	    topTabBarTextColor: string;
	    topTabBarActiveTextColor: string;
	    topTabBarBorderColor: string;
	    topTabBarActiveBorderColor: string;
	    tabBgColor: string;
	    tabFontSize: number;
	    textColor: string;
	    inverseTextColor: string;
	    noteFontSize: number;
	    readonly defaultTextColor: string;
	    titleFontfamily: string;
	    titleFontSize: number;
	    subTitleFontSize: number;
	    subtitleColor: string;
	    titleFontColor: string;
	    borderRadiusBase: number;
	    borderWidth: number;
	    contentPadding: number;
	    dropdownLinkColor: string;
	    inputLineHeight: number;
	    deviceWidth: number;
	    deviceHeight: number;
	    isIphoneX: boolean;
	    inputGroupRoundedBorderRadius: number;
	    Inset: {
	        portrait: {
	            topInset: number;
	            leftInset: number;
	            rightInset: number;
	            bottomInset: number;
	        };
	        landscape: {
	            topInset: number;
	            leftInset: number;
	            rightInset: number;
	            bottomInset: number;
	        };
	    };
	}) => {
	    '.selected': {
	        'NativeBase.IconNB': {
	            color: string;
	            lineHeight: number;
	            height: number | undefined;
	        };
	    };
	    'NativeBase.IconNB': {
	        color: string | undefined;
	        lineHeight: number | undefined;
	        fontSize: number | undefined;
	    };
	};
	export default _default;

}
declare module 'native-base/theme/components/H3' {
	 const _default: (variables?: {
	    platformStyle: undefined;
	    platform: "android" | "ios" | "web" | "windows" | "macos";
	    accordionBorderColor: string;
	    accordionContentPadding: number;
	    accordionIconFontSize: number;
	    contentStyle: string;
	    expandedIconStyle: string;
	    headerStyle: string;
	    iconStyle: string;
	    elevation: number;
	    containerTouchableBackgroundColor: string;
	    innerTouchableBackgroundColor: string;
	    listItemHeight: number;
	    listItemBorderColor: string;
	    marginHorizontal: number;
	    marginLeft: number;
	    marginTop: number;
	    minHeight: number;
	    padding: number;
	    touchableTextColor: string;
	    androidRipple: boolean;
	    androidRippleColor: string;
	    androidRippleColorDark: string;
	    buttonUppercaseAndroidText: boolean;
	    badgeBg: string;
	    badgeColor: string;
	    badgePadding: number;
	    buttonFontFamily: string;
	    buttonDisabledBg: string;
	    buttonPadding: number;
	    buttonDefaultActiveOpacity: number;
	    buttonDefaultFlex: number;
	    buttonDefaultBorderRadius: number;
	    buttonDefaultBorderWidth: number;
	    readonly buttonPrimaryBg: string;
	    readonly buttonPrimaryColor: string;
	    readonly buttonInfoBg: string;
	    readonly buttonInfoColor: string;
	    readonly buttonSuccessBg: string;
	    readonly buttonSuccessColor: string;
	    readonly buttonDangerBg: string;
	    readonly buttonDangerColor: string;
	    readonly buttonWarningBg: string;
	    readonly buttonWarningColor: string;
	    readonly buttonTextSize: number;
	    readonly buttonTextSizeLarge: number;
	    readonly buttonTextSizeSmall: number;
	    readonly borderRadiusLarge: number;
	    readonly iconSizeLarge: number;
	    readonly iconSizeSmall: number;
	    cardDefaultBg: string;
	    cardBorderColor: string;
	    cardBorderRadius: number;
	    cardItemPadding: number;
	    CheckboxRadius: number;
	    CheckboxBorderWidth: number;
	    CheckboxPaddingLeft: number;
	    CheckboxPaddingBottom: number;
	    CheckboxIconSize: number;
	    CheckboxIconMarginTop: number | undefined;
	    CheckboxFontSize: number;
	    checkboxBgColor: string;
	    checkboxSize: number;
	    checkboxTickColor: string;
	    checkboxDefaultColor: string;
	    checkboxTextShadowRadius: number;
	    brandPrimary: string;
	    brandInfo: string;
	    brandSuccess: string;
	    brandDanger: string;
	    brandWarning: string;
	    brandDark: string;
	    brandLight: string;
	    containerBgColor: string;
	    datePickerFlex: number;
	    datePickerPadding: number;
	    datePickerTextColor: string;
	    datePickerBg: string;
	    fabBackgroundColor: string;
	    fabBorderRadius: number;
	    fabBottom: number;
	    fabButtonBorderRadius: number;
	    fabButtonHeight: number;
	    fabButtonLeft: number;
	    fabButtonMarginBottom: number;
	    fabContainerBottom: number;
	    fabDefaultPosition: number;
	    fabElevation: number;
	    fabIconColor: string;
	    fabIconSize: number;
	    fabShadowColor: string;
	    fabShadowOffsetHeight: number;
	    fabShadowOffsetWidth: number;
	    fabShadowOpacity: number;
	    fabShadowRadius: number;
	    fabWidth: number;
	    DefaultFontSize: number;
	    fontFamily: string;
	    fontSizeBase: number;
	    readonly fontSizeH1: number;
	    readonly fontSizeH2: number;
	    readonly fontSizeH3: number;
	    footerHeight: number;
	    footerDefaultBg: string;
	    footerPaddingBottom: number;
	    tabBarTextColor: string;
	    tabBarTextSize: number;
	    activeTab: string;
	    sTabBarActiveTextColor: string;
	    tabBarActiveTextColor: string;
	    tabActiveBgColor: string;
	    toolbarBtnColor: string;
	    toolbarDefaultBg: string;
	    toolbarHeight: number;
	    toolbarSearchIconSize: number;
	    toolbarInputColor: string;
	    searchBarHeight: number;
	    searchBarInputHeight: number;
	    toolbarBtnTextColor: string;
	    toolbarDefaultBorder: string;
	    iosStatusbar: string;
	    readonly statusBarColor: string;
	    readonly darkenHeader: string;
	    iconFamily: string;
	    iconFontSize: number;
	    iconHeaderSize: number;
	    inputFontSize: number;
	    inputBorderColor: string;
	    inputSuccessBorderColor: string;
	    inputErrorBorderColor: string;
	    inputHeightBase: number;
	    readonly inputColor: string;
	    readonly inputColorPlaceholder: string;
	    buttonLineHeight: number;
	    lineHeightH1: number;
	    lineHeightH2: number;
	    lineHeightH3: number;
	    lineHeight: number;
	    listItemSelected: string;
	    listBg: string;
	    listBorderColor: string;
	    listDividerBg: string;
	    listBtnUnderlayColor: string;
	    listItemPadding: number;
	    listNoteColor: string;
	    listNoteSize: number;
	    defaultProgressColor: string;
	    inverseProgressColor: string;
	    radioBtnSize: number;
	    radioSelectedColorAndroid: string;
	    radioBtnLineHeight: number;
	    readonly radioColor: string;
	    segmentBackgroundColor: string;
	    segmentActiveBackgroundColor: string;
	    segmentTextColor: string;
	    segmentActiveTextColor: string;
	    segmentBorderColor: string;
	    segmentBorderColorMain: string;
	    defaultSpinnerColor: string;
	    inverseSpinnerColor: string;
	    tabBarDisabledTextColor: string;
	    tabDefaultBg: string;
	    topTabBarTextColor: string;
	    topTabBarActiveTextColor: string;
	    topTabBarBorderColor: string;
	    topTabBarActiveBorderColor: string;
	    tabBgColor: string;
	    tabFontSize: number;
	    textColor: string;
	    inverseTextColor: string;
	    noteFontSize: number;
	    readonly defaultTextColor: string;
	    titleFontfamily: string;
	    titleFontSize: number;
	    subTitleFontSize: number;
	    subtitleColor: string;
	    titleFontColor: string;
	    borderRadiusBase: number;
	    borderWidth: number;
	    contentPadding: number;
	    dropdownLinkColor: string;
	    inputLineHeight: number;
	    deviceWidth: number;
	    deviceHeight: number;
	    isIphoneX: boolean;
	    inputGroupRoundedBorderRadius: number;
	    Inset: {
	        portrait: {
	            topInset: number;
	            leftInset: number;
	            rightInset: number;
	            bottomInset: number;
	        };
	        landscape: {
	            topInset: number;
	            leftInset: number;
	            rightInset: number;
	            bottomInset: number;
	        };
	    };
	}) => {
	    color: string;
	    fontSize: number;
	    lineHeight: number;
	};
	export default _default;

}
declare module 'native-base/theme/components/H2' {
	 const _default: (variables?: {
	    platformStyle: undefined;
	    platform: "android" | "ios" | "web" | "windows" | "macos";
	    accordionBorderColor: string;
	    accordionContentPadding: number;
	    accordionIconFontSize: number;
	    contentStyle: string;
	    expandedIconStyle: string;
	    headerStyle: string;
	    iconStyle: string;
	    elevation: number;
	    containerTouchableBackgroundColor: string;
	    innerTouchableBackgroundColor: string;
	    listItemHeight: number;
	    listItemBorderColor: string;
	    marginHorizontal: number;
	    marginLeft: number;
	    marginTop: number;
	    minHeight: number;
	    padding: number;
	    touchableTextColor: string;
	    androidRipple: boolean;
	    androidRippleColor: string;
	    androidRippleColorDark: string;
	    buttonUppercaseAndroidText: boolean;
	    badgeBg: string;
	    badgeColor: string;
	    badgePadding: number;
	    buttonFontFamily: string;
	    buttonDisabledBg: string;
	    buttonPadding: number;
	    buttonDefaultActiveOpacity: number;
	    buttonDefaultFlex: number;
	    buttonDefaultBorderRadius: number;
	    buttonDefaultBorderWidth: number;
	    readonly buttonPrimaryBg: string;
	    readonly buttonPrimaryColor: string;
	    readonly buttonInfoBg: string;
	    readonly buttonInfoColor: string;
	    readonly buttonSuccessBg: string;
	    readonly buttonSuccessColor: string;
	    readonly buttonDangerBg: string;
	    readonly buttonDangerColor: string;
	    readonly buttonWarningBg: string;
	    readonly buttonWarningColor: string;
	    readonly buttonTextSize: number;
	    readonly buttonTextSizeLarge: number;
	    readonly buttonTextSizeSmall: number;
	    readonly borderRadiusLarge: number;
	    readonly iconSizeLarge: number;
	    readonly iconSizeSmall: number;
	    cardDefaultBg: string;
	    cardBorderColor: string;
	    cardBorderRadius: number;
	    cardItemPadding: number;
	    CheckboxRadius: number;
	    CheckboxBorderWidth: number;
	    CheckboxPaddingLeft: number;
	    CheckboxPaddingBottom: number;
	    CheckboxIconSize: number;
	    CheckboxIconMarginTop: number | undefined;
	    CheckboxFontSize: number;
	    checkboxBgColor: string;
	    checkboxSize: number;
	    checkboxTickColor: string;
	    checkboxDefaultColor: string;
	    checkboxTextShadowRadius: number;
	    brandPrimary: string;
	    brandInfo: string;
	    brandSuccess: string;
	    brandDanger: string;
	    brandWarning: string;
	    brandDark: string;
	    brandLight: string;
	    containerBgColor: string;
	    datePickerFlex: number;
	    datePickerPadding: number;
	    datePickerTextColor: string;
	    datePickerBg: string;
	    fabBackgroundColor: string;
	    fabBorderRadius: number;
	    fabBottom: number;
	    fabButtonBorderRadius: number;
	    fabButtonHeight: number;
	    fabButtonLeft: number;
	    fabButtonMarginBottom: number;
	    fabContainerBottom: number;
	    fabDefaultPosition: number;
	    fabElevation: number;
	    fabIconColor: string;
	    fabIconSize: number;
	    fabShadowColor: string;
	    fabShadowOffsetHeight: number;
	    fabShadowOffsetWidth: number;
	    fabShadowOpacity: number;
	    fabShadowRadius: number;
	    fabWidth: number;
	    DefaultFontSize: number;
	    fontFamily: string;
	    fontSizeBase: number;
	    readonly fontSizeH1: number;
	    readonly fontSizeH2: number;
	    readonly fontSizeH3: number;
	    footerHeight: number;
	    footerDefaultBg: string;
	    footerPaddingBottom: number;
	    tabBarTextColor: string;
	    tabBarTextSize: number;
	    activeTab: string;
	    sTabBarActiveTextColor: string;
	    tabBarActiveTextColor: string;
	    tabActiveBgColor: string;
	    toolbarBtnColor: string;
	    toolbarDefaultBg: string;
	    toolbarHeight: number;
	    toolbarSearchIconSize: number;
	    toolbarInputColor: string;
	    searchBarHeight: number;
	    searchBarInputHeight: number;
	    toolbarBtnTextColor: string;
	    toolbarDefaultBorder: string;
	    iosStatusbar: string;
	    readonly statusBarColor: string;
	    readonly darkenHeader: string;
	    iconFamily: string;
	    iconFontSize: number;
	    iconHeaderSize: number;
	    inputFontSize: number;
	    inputBorderColor: string;
	    inputSuccessBorderColor: string;
	    inputErrorBorderColor: string;
	    inputHeightBase: number;
	    readonly inputColor: string;
	    readonly inputColorPlaceholder: string;
	    buttonLineHeight: number;
	    lineHeightH1: number;
	    lineHeightH2: number;
	    lineHeightH3: number;
	    lineHeight: number;
	    listItemSelected: string;
	    listBg: string;
	    listBorderColor: string;
	    listDividerBg: string;
	    listBtnUnderlayColor: string;
	    listItemPadding: number;
	    listNoteColor: string;
	    listNoteSize: number;
	    defaultProgressColor: string;
	    inverseProgressColor: string;
	    radioBtnSize: number;
	    radioSelectedColorAndroid: string;
	    radioBtnLineHeight: number;
	    readonly radioColor: string;
	    segmentBackgroundColor: string;
	    segmentActiveBackgroundColor: string;
	    segmentTextColor: string;
	    segmentActiveTextColor: string;
	    segmentBorderColor: string;
	    segmentBorderColorMain: string;
	    defaultSpinnerColor: string;
	    inverseSpinnerColor: string;
	    tabBarDisabledTextColor: string;
	    tabDefaultBg: string;
	    topTabBarTextColor: string;
	    topTabBarActiveTextColor: string;
	    topTabBarBorderColor: string;
	    topTabBarActiveBorderColor: string;
	    tabBgColor: string;
	    tabFontSize: number;
	    textColor: string;
	    inverseTextColor: string;
	    noteFontSize: number;
	    readonly defaultTextColor: string;
	    titleFontfamily: string;
	    titleFontSize: number;
	    subTitleFontSize: number;
	    subtitleColor: string;
	    titleFontColor: string;
	    borderRadiusBase: number;
	    borderWidth: number;
	    contentPadding: number;
	    dropdownLinkColor: string;
	    inputLineHeight: number;
	    deviceWidth: number;
	    deviceHeight: number;
	    isIphoneX: boolean;
	    inputGroupRoundedBorderRadius: number;
	    Inset: {
	        portrait: {
	            topInset: number;
	            leftInset: number;
	            rightInset: number;
	            bottomInset: number;
	        };
	        landscape: {
	            topInset: number;
	            leftInset: number;
	            rightInset: number;
	            bottomInset: number;
	        };
	    };
	}) => {
	    color: string;
	    fontSize: number;
	    lineHeight: number;
	};
	export default _default;

}
declare module 'native-base/theme/components/H1' {
	 const _default: (variables?: {
	    platformStyle: undefined;
	    platform: "android" | "ios" | "web" | "windows" | "macos";
	    accordionBorderColor: string;
	    accordionContentPadding: number;
	    accordionIconFontSize: number;
	    contentStyle: string;
	    expandedIconStyle: string;
	    headerStyle: string;
	    iconStyle: string;
	    elevation: number;
	    containerTouchableBackgroundColor: string;
	    innerTouchableBackgroundColor: string;
	    listItemHeight: number;
	    listItemBorderColor: string;
	    marginHorizontal: number;
	    marginLeft: number;
	    marginTop: number;
	    minHeight: number;
	    padding: number;
	    touchableTextColor: string;
	    androidRipple: boolean;
	    androidRippleColor: string;
	    androidRippleColorDark: string;
	    buttonUppercaseAndroidText: boolean;
	    badgeBg: string;
	    badgeColor: string;
	    badgePadding: number;
	    buttonFontFamily: string;
	    buttonDisabledBg: string;
	    buttonPadding: number;
	    buttonDefaultActiveOpacity: number;
	    buttonDefaultFlex: number;
	    buttonDefaultBorderRadius: number;
	    buttonDefaultBorderWidth: number;
	    readonly buttonPrimaryBg: string;
	    readonly buttonPrimaryColor: string;
	    readonly buttonInfoBg: string;
	    readonly buttonInfoColor: string;
	    readonly buttonSuccessBg: string;
	    readonly buttonSuccessColor: string;
	    readonly buttonDangerBg: string;
	    readonly buttonDangerColor: string;
	    readonly buttonWarningBg: string;
	    readonly buttonWarningColor: string;
	    readonly buttonTextSize: number;
	    readonly buttonTextSizeLarge: number;
	    readonly buttonTextSizeSmall: number;
	    readonly borderRadiusLarge: number;
	    readonly iconSizeLarge: number;
	    readonly iconSizeSmall: number;
	    cardDefaultBg: string;
	    cardBorderColor: string;
	    cardBorderRadius: number;
	    cardItemPadding: number;
	    CheckboxRadius: number;
	    CheckboxBorderWidth: number;
	    CheckboxPaddingLeft: number;
	    CheckboxPaddingBottom: number;
	    CheckboxIconSize: number;
	    CheckboxIconMarginTop: number | undefined;
	    CheckboxFontSize: number;
	    checkboxBgColor: string;
	    checkboxSize: number;
	    checkboxTickColor: string;
	    checkboxDefaultColor: string;
	    checkboxTextShadowRadius: number;
	    brandPrimary: string;
	    brandInfo: string;
	    brandSuccess: string;
	    brandDanger: string;
	    brandWarning: string;
	    brandDark: string;
	    brandLight: string;
	    containerBgColor: string;
	    datePickerFlex: number;
	    datePickerPadding: number;
	    datePickerTextColor: string;
	    datePickerBg: string;
	    fabBackgroundColor: string;
	    fabBorderRadius: number;
	    fabBottom: number;
	    fabButtonBorderRadius: number;
	    fabButtonHeight: number;
	    fabButtonLeft: number;
	    fabButtonMarginBottom: number;
	    fabContainerBottom: number;
	    fabDefaultPosition: number;
	    fabElevation: number;
	    fabIconColor: string;
	    fabIconSize: number;
	    fabShadowColor: string;
	    fabShadowOffsetHeight: number;
	    fabShadowOffsetWidth: number;
	    fabShadowOpacity: number;
	    fabShadowRadius: number;
	    fabWidth: number;
	    DefaultFontSize: number;
	    fontFamily: string;
	    fontSizeBase: number;
	    readonly fontSizeH1: number;
	    readonly fontSizeH2: number;
	    readonly fontSizeH3: number;
	    footerHeight: number;
	    footerDefaultBg: string;
	    footerPaddingBottom: number;
	    tabBarTextColor: string;
	    tabBarTextSize: number;
	    activeTab: string;
	    sTabBarActiveTextColor: string;
	    tabBarActiveTextColor: string;
	    tabActiveBgColor: string;
	    toolbarBtnColor: string;
	    toolbarDefaultBg: string;
	    toolbarHeight: number;
	    toolbarSearchIconSize: number;
	    toolbarInputColor: string;
	    searchBarHeight: number;
	    searchBarInputHeight: number;
	    toolbarBtnTextColor: string;
	    toolbarDefaultBorder: string;
	    iosStatusbar: string;
	    readonly statusBarColor: string;
	    readonly darkenHeader: string;
	    iconFamily: string;
	    iconFontSize: number;
	    iconHeaderSize: number;
	    inputFontSize: number;
	    inputBorderColor: string;
	    inputSuccessBorderColor: string;
	    inputErrorBorderColor: string;
	    inputHeightBase: number;
	    readonly inputColor: string;
	    readonly inputColorPlaceholder: string;
	    buttonLineHeight: number;
	    lineHeightH1: number;
	    lineHeightH2: number;
	    lineHeightH3: number;
	    lineHeight: number;
	    listItemSelected: string;
	    listBg: string;
	    listBorderColor: string;
	    listDividerBg: string;
	    listBtnUnderlayColor: string;
	    listItemPadding: number;
	    listNoteColor: string;
	    listNoteSize: number;
	    defaultProgressColor: string;
	    inverseProgressColor: string;
	    radioBtnSize: number;
	    radioSelectedColorAndroid: string;
	    radioBtnLineHeight: number;
	    readonly radioColor: string;
	    segmentBackgroundColor: string;
	    segmentActiveBackgroundColor: string;
	    segmentTextColor: string;
	    segmentActiveTextColor: string;
	    segmentBorderColor: string;
	    segmentBorderColorMain: string;
	    defaultSpinnerColor: string;
	    inverseSpinnerColor: string;
	    tabBarDisabledTextColor: string;
	    tabDefaultBg: string;
	    topTabBarTextColor: string;
	    topTabBarActiveTextColor: string;
	    topTabBarBorderColor: string;
	    topTabBarActiveBorderColor: string;
	    tabBgColor: string;
	    tabFontSize: number;
	    textColor: string;
	    inverseTextColor: string;
	    noteFontSize: number;
	    readonly defaultTextColor: string;
	    titleFontfamily: string;
	    titleFontSize: number;
	    subTitleFontSize: number;
	    subtitleColor: string;
	    titleFontColor: string;
	    borderRadiusBase: number;
	    borderWidth: number;
	    contentPadding: number;
	    dropdownLinkColor: string;
	    inputLineHeight: number;
	    deviceWidth: number;
	    deviceHeight: number;
	    isIphoneX: boolean;
	    inputGroupRoundedBorderRadius: number;
	    Inset: {
	        portrait: {
	            topInset: number;
	            leftInset: number;
	            rightInset: number;
	            bottomInset: number;
	        };
	        landscape: {
	            topInset: number;
	            leftInset: number;
	            rightInset: number;
	            bottomInset: number;
	        };
	    };
	}) => {
	    color: string;
	    fontSize: number;
	    lineHeight: number;
	};
	export default _default;

}
declare module 'native-base/theme/components/Footer' {
	 const _default: (variables?: {
	    platformStyle: undefined;
	    platform: "android" | "ios" | "web" | "windows" | "macos";
	    accordionBorderColor: string;
	    accordionContentPadding: number;
	    accordionIconFontSize: number;
	    contentStyle: string;
	    expandedIconStyle: string;
	    headerStyle: string;
	    iconStyle: string;
	    elevation: number;
	    containerTouchableBackgroundColor: string;
	    innerTouchableBackgroundColor: string;
	    listItemHeight: number;
	    listItemBorderColor: string;
	    marginHorizontal: number;
	    marginLeft: number;
	    marginTop: number;
	    minHeight: number;
	    padding: number;
	    touchableTextColor: string;
	    androidRipple: boolean;
	    androidRippleColor: string;
	    androidRippleColorDark: string;
	    buttonUppercaseAndroidText: boolean;
	    badgeBg: string;
	    badgeColor: string;
	    badgePadding: number;
	    buttonFontFamily: string;
	    buttonDisabledBg: string;
	    buttonPadding: number;
	    buttonDefaultActiveOpacity: number;
	    buttonDefaultFlex: number;
	    buttonDefaultBorderRadius: number;
	    buttonDefaultBorderWidth: number;
	    readonly buttonPrimaryBg: string;
	    readonly buttonPrimaryColor: string;
	    readonly buttonInfoBg: string;
	    readonly buttonInfoColor: string;
	    readonly buttonSuccessBg: string;
	    readonly buttonSuccessColor: string;
	    readonly buttonDangerBg: string;
	    readonly buttonDangerColor: string;
	    readonly buttonWarningBg: string;
	    readonly buttonWarningColor: string;
	    readonly buttonTextSize: number;
	    readonly buttonTextSizeLarge: number;
	    readonly buttonTextSizeSmall: number;
	    readonly borderRadiusLarge: number;
	    readonly iconSizeLarge: number;
	    readonly iconSizeSmall: number;
	    cardDefaultBg: string;
	    cardBorderColor: string;
	    cardBorderRadius: number;
	    cardItemPadding: number;
	    CheckboxRadius: number;
	    CheckboxBorderWidth: number;
	    CheckboxPaddingLeft: number;
	    CheckboxPaddingBottom: number;
	    CheckboxIconSize: number;
	    CheckboxIconMarginTop: number | undefined;
	    CheckboxFontSize: number;
	    checkboxBgColor: string;
	    checkboxSize: number;
	    checkboxTickColor: string;
	    checkboxDefaultColor: string;
	    checkboxTextShadowRadius: number;
	    brandPrimary: string;
	    brandInfo: string;
	    brandSuccess: string;
	    brandDanger: string;
	    brandWarning: string;
	    brandDark: string;
	    brandLight: string;
	    containerBgColor: string;
	    datePickerFlex: number;
	    datePickerPadding: number;
	    datePickerTextColor: string;
	    datePickerBg: string;
	    fabBackgroundColor: string;
	    fabBorderRadius: number;
	    fabBottom: number;
	    fabButtonBorderRadius: number;
	    fabButtonHeight: number;
	    fabButtonLeft: number;
	    fabButtonMarginBottom: number;
	    fabContainerBottom: number;
	    fabDefaultPosition: number;
	    fabElevation: number;
	    fabIconColor: string;
	    fabIconSize: number;
	    fabShadowColor: string;
	    fabShadowOffsetHeight: number;
	    fabShadowOffsetWidth: number;
	    fabShadowOpacity: number;
	    fabShadowRadius: number;
	    fabWidth: number;
	    DefaultFontSize: number;
	    fontFamily: string;
	    fontSizeBase: number;
	    readonly fontSizeH1: number;
	    readonly fontSizeH2: number;
	    readonly fontSizeH3: number;
	    footerHeight: number;
	    footerDefaultBg: string;
	    footerPaddingBottom: number;
	    tabBarTextColor: string;
	    tabBarTextSize: number;
	    activeTab: string;
	    sTabBarActiveTextColor: string;
	    tabBarActiveTextColor: string;
	    tabActiveBgColor: string;
	    toolbarBtnColor: string;
	    toolbarDefaultBg: string;
	    toolbarHeight: number;
	    toolbarSearchIconSize: number;
	    toolbarInputColor: string;
	    searchBarHeight: number;
	    searchBarInputHeight: number;
	    toolbarBtnTextColor: string;
	    toolbarDefaultBorder: string;
	    iosStatusbar: string;
	    readonly statusBarColor: string;
	    readonly darkenHeader: string;
	    iconFamily: string;
	    iconFontSize: number;
	    iconHeaderSize: number;
	    inputFontSize: number;
	    inputBorderColor: string;
	    inputSuccessBorderColor: string;
	    inputErrorBorderColor: string;
	    inputHeightBase: number;
	    readonly inputColor: string;
	    readonly inputColorPlaceholder: string;
	    buttonLineHeight: number;
	    lineHeightH1: number;
	    lineHeightH2: number;
	    lineHeightH3: number;
	    lineHeight: number;
	    listItemSelected: string;
	    listBg: string;
	    listBorderColor: string;
	    listDividerBg: string;
	    listBtnUnderlayColor: string;
	    listItemPadding: number;
	    listNoteColor: string;
	    listNoteSize: number;
	    defaultProgressColor: string;
	    inverseProgressColor: string;
	    radioBtnSize: number;
	    radioSelectedColorAndroid: string;
	    radioBtnLineHeight: number;
	    readonly radioColor: string;
	    segmentBackgroundColor: string;
	    segmentActiveBackgroundColor: string;
	    segmentTextColor: string;
	    segmentActiveTextColor: string;
	    segmentBorderColor: string;
	    segmentBorderColorMain: string;
	    defaultSpinnerColor: string;
	    inverseSpinnerColor: string;
	    tabBarDisabledTextColor: string;
	    tabDefaultBg: string;
	    topTabBarTextColor: string;
	    topTabBarActiveTextColor: string;
	    topTabBarBorderColor: string;
	    topTabBarActiveBorderColor: string;
	    tabBgColor: string;
	    tabFontSize: number;
	    textColor: string;
	    inverseTextColor: string;
	    noteFontSize: number;
	    readonly defaultTextColor: string;
	    titleFontfamily: string;
	    titleFontSize: number;
	    subTitleFontSize: number;
	    subtitleColor: string;
	    titleFontColor: string;
	    borderRadiusBase: number;
	    borderWidth: number;
	    contentPadding: number;
	    dropdownLinkColor: string;
	    inputLineHeight: number;
	    deviceWidth: number;
	    deviceHeight: number;
	    isIphoneX: boolean;
	    inputGroupRoundedBorderRadius: number;
	    Inset: {
	        portrait: {
	            topInset: number;
	            leftInset: number;
	            rightInset: number;
	            bottomInset: number;
	        };
	        landscape: {
	            topInset: number;
	            leftInset: number;
	            rightInset: number;
	            bottomInset: number;
	        };
	    };
	}) => {
	    'NativeBase.Left': {
	        'NativeBase.Button': {
	            'NativeBase.IconNB': {
	                color: string;
	            };
	            'NativeBase.Icon': {
	                color: string;
	            };
	            '.transparent': {
	                'NativeBase.Text': {
	                    color: string;
	                };
	                'NativeBase.IconNB': {
	                    color: string;
	                };
	                'NativeBase.Icon': {
	                    color: string;
	                };
	                backgroundColor: string;
	                borderColor: null;
	                elevation: number;
	                shadowColor: null;
	                shadowOffset: null;
	                shadowRadius: null;
	                shadowOpacity: null;
	            };
	            alignSelf: null;
	        };
	        flex: number;
	        alignSelf: string;
	        alignItems: string;
	    };
	    'NativeBase.Body': {
	        flex: number;
	        alignItems: string;
	        alignSelf: string;
	        flexDirection: string;
	        'NativeBase.Button': {
	            'NativeBase.IconNB': {
	                color: string;
	            };
	            'NativeBase.Icon': {
	                color: string;
	            };
	            alignSelf: string;
	            '.transparent': {
	                'NativeBase.Text': {
	                    color: string;
	                };
	                'NativeBase.IconNB': {
	                    color: string;
	                };
	                'NativeBase.Icon': {
	                    color: string;
	                };
	                backgroundColor: string;
	                borderColor: null;
	                elevation: number;
	                shadowColor: null;
	                shadowOffset: null;
	                shadowRadius: null;
	                shadowOpacity: null;
	            };
	            '.full': {
	                height: number;
	                paddingBottom: number;
	                flex: number;
	            };
	        };
	    };
	    'NativeBase.Right': {
	        'NativeBase.Button': {
	            'NativeBase.IconNB': {
	                color: string;
	            };
	            'NativeBase.Icon': {
	                color: string;
	            };
	            '.transparent': {
	                'NativeBase.Text': {
	                    color: string;
	                };
	                'NativeBase.IconNB': {
	                    color: string;
	                };
	                'NativeBase.Icon': {
	                    color: string;
	                };
	                backgroundColor: string;
	                borderColor: null;
	                elevation: number;
	                shadowColor: null;
	                shadowOffset: null;
	                shadowRadius: null;
	                shadowOpacity: null;
	            };
	            alignSelf: null;
	        };
	        flex: number;
	        alignSelf: string;
	        alignItems: string;
	    };
	    backgroundColor: string;
	    flexDirection: string;
	    justifyContent: string;
	    borderTopWidth: number | undefined;
	    borderColor: string | undefined;
	    height: number;
	    paddingBottom: number;
	    elevation: number;
	    left: number;
	    right: number;
	};
	export default _default;

}
declare module 'native-base/theme/components/FooterTab' {
	 const _default: (variables?: {
	    platformStyle: undefined;
	    platform: "android" | "ios" | "web" | "windows" | "macos";
	    accordionBorderColor: string;
	    accordionContentPadding: number;
	    accordionIconFontSize: number;
	    contentStyle: string;
	    expandedIconStyle: string;
	    headerStyle: string;
	    iconStyle: string;
	    elevation: number;
	    containerTouchableBackgroundColor: string;
	    innerTouchableBackgroundColor: string;
	    listItemHeight: number;
	    listItemBorderColor: string;
	    marginHorizontal: number;
	    marginLeft: number;
	    marginTop: number;
	    minHeight: number;
	    padding: number;
	    touchableTextColor: string;
	    androidRipple: boolean;
	    androidRippleColor: string;
	    androidRippleColorDark: string;
	    buttonUppercaseAndroidText: boolean;
	    badgeBg: string;
	    badgeColor: string;
	    badgePadding: number;
	    buttonFontFamily: string;
	    buttonDisabledBg: string;
	    buttonPadding: number;
	    buttonDefaultActiveOpacity: number;
	    buttonDefaultFlex: number;
	    buttonDefaultBorderRadius: number;
	    buttonDefaultBorderWidth: number;
	    readonly buttonPrimaryBg: string;
	    readonly buttonPrimaryColor: string;
	    readonly buttonInfoBg: string;
	    readonly buttonInfoColor: string;
	    readonly buttonSuccessBg: string;
	    readonly buttonSuccessColor: string;
	    readonly buttonDangerBg: string;
	    readonly buttonDangerColor: string;
	    readonly buttonWarningBg: string;
	    readonly buttonWarningColor: string;
	    readonly buttonTextSize: number;
	    readonly buttonTextSizeLarge: number;
	    readonly buttonTextSizeSmall: number;
	    readonly borderRadiusLarge: number;
	    readonly iconSizeLarge: number;
	    readonly iconSizeSmall: number;
	    cardDefaultBg: string;
	    cardBorderColor: string;
	    cardBorderRadius: number;
	    cardItemPadding: number;
	    CheckboxRadius: number;
	    CheckboxBorderWidth: number;
	    CheckboxPaddingLeft: number;
	    CheckboxPaddingBottom: number;
	    CheckboxIconSize: number;
	    CheckboxIconMarginTop: number | undefined;
	    CheckboxFontSize: number;
	    checkboxBgColor: string;
	    checkboxSize: number;
	    checkboxTickColor: string;
	    checkboxDefaultColor: string;
	    checkboxTextShadowRadius: number;
	    brandPrimary: string;
	    brandInfo: string;
	    brandSuccess: string;
	    brandDanger: string;
	    brandWarning: string;
	    brandDark: string;
	    brandLight: string;
	    containerBgColor: string;
	    datePickerFlex: number;
	    datePickerPadding: number;
	    datePickerTextColor: string;
	    datePickerBg: string;
	    fabBackgroundColor: string;
	    fabBorderRadius: number;
	    fabBottom: number;
	    fabButtonBorderRadius: number;
	    fabButtonHeight: number;
	    fabButtonLeft: number;
	    fabButtonMarginBottom: number;
	    fabContainerBottom: number;
	    fabDefaultPosition: number;
	    fabElevation: number;
	    fabIconColor: string;
	    fabIconSize: number;
	    fabShadowColor: string;
	    fabShadowOffsetHeight: number;
	    fabShadowOffsetWidth: number;
	    fabShadowOpacity: number;
	    fabShadowRadius: number;
	    fabWidth: number;
	    DefaultFontSize: number;
	    fontFamily: string;
	    fontSizeBase: number;
	    readonly fontSizeH1: number;
	    readonly fontSizeH2: number;
	    readonly fontSizeH3: number;
	    footerHeight: number;
	    footerDefaultBg: string;
	    footerPaddingBottom: number;
	    tabBarTextColor: string;
	    tabBarTextSize: number;
	    activeTab: string;
	    sTabBarActiveTextColor: string;
	    tabBarActiveTextColor: string;
	    tabActiveBgColor: string;
	    toolbarBtnColor: string;
	    toolbarDefaultBg: string;
	    toolbarHeight: number;
	    toolbarSearchIconSize: number;
	    toolbarInputColor: string;
	    searchBarHeight: number;
	    searchBarInputHeight: number;
	    toolbarBtnTextColor: string;
	    toolbarDefaultBorder: string;
	    iosStatusbar: string;
	    readonly statusBarColor: string;
	    readonly darkenHeader: string;
	    iconFamily: string;
	    iconFontSize: number;
	    iconHeaderSize: number;
	    inputFontSize: number;
	    inputBorderColor: string;
	    inputSuccessBorderColor: string;
	    inputErrorBorderColor: string;
	    inputHeightBase: number;
	    readonly inputColor: string;
	    readonly inputColorPlaceholder: string;
	    buttonLineHeight: number;
	    lineHeightH1: number;
	    lineHeightH2: number;
	    lineHeightH3: number;
	    lineHeight: number;
	    listItemSelected: string;
	    listBg: string;
	    listBorderColor: string;
	    listDividerBg: string;
	    listBtnUnderlayColor: string;
	    listItemPadding: number;
	    listNoteColor: string;
	    listNoteSize: number;
	    defaultProgressColor: string;
	    inverseProgressColor: string;
	    radioBtnSize: number;
	    radioSelectedColorAndroid: string;
	    radioBtnLineHeight: number;
	    readonly radioColor: string;
	    segmentBackgroundColor: string;
	    segmentActiveBackgroundColor: string;
	    segmentTextColor: string;
	    segmentActiveTextColor: string;
	    segmentBorderColor: string;
	    segmentBorderColorMain: string;
	    defaultSpinnerColor: string;
	    inverseSpinnerColor: string;
	    tabBarDisabledTextColor: string;
	    tabDefaultBg: string;
	    topTabBarTextColor: string;
	    topTabBarActiveTextColor: string;
	    topTabBarBorderColor: string;
	    topTabBarActiveBorderColor: string;
	    tabBgColor: string;
	    tabFontSize: number;
	    textColor: string;
	    inverseTextColor: string;
	    noteFontSize: number;
	    readonly defaultTextColor: string;
	    titleFontfamily: string;
	    titleFontSize: number;
	    subTitleFontSize: number;
	    subtitleColor: string;
	    titleFontColor: string;
	    borderRadiusBase: number;
	    borderWidth: number;
	    contentPadding: number;
	    dropdownLinkColor: string;
	    inputLineHeight: number;
	    deviceWidth: number;
	    deviceHeight: number;
	    isIphoneX: boolean;
	    inputGroupRoundedBorderRadius: number;
	    Inset: {
	        portrait: {
	            topInset: number;
	            leftInset: number;
	            rightInset: number;
	            bottomInset: number;
	        };
	        landscape: {
	            topInset: number;
	            leftInset: number;
	            rightInset: number;
	            bottomInset: number;
	        };
	    };
	}) => {
	    'NativeBase.Button': {
	        '.active': {
	            'NativeBase.Text': {
	                color: string;
	                fontSize: number;
	                lineHeight: number;
	            };
	            'NativeBase.Icon': {
	                color: string;
	            };
	            'NativeBase.IconNB': {
	                color: string;
	            };
	            backgroundColor: string;
	        };
	        flexDirection: null;
	        backgroundColor: string;
	        borderColor: null;
	        elevation: number;
	        shadowColor: null;
	        shadowOffset: null;
	        shadowRadius: null;
	        shadowOpacity: null;
	        alignSelf: string;
	        flex: number;
	        height: number;
	        justifyContent: string;
	        '.badge': {
	            'NativeBase.Badge': {
	                'NativeBase.Text': {
	                    fontSize: number;
	                    fontWeight: string | undefined;
	                    lineHeight: number;
	                };
	                top: number;
	                alignSelf: string;
	                left: number;
	                zIndex: number;
	                height: number;
	                padding: number;
	                paddingHorizontal: number;
	            };
	            'NativeBase.Icon': {
	                marginTop: number;
	            };
	        };
	        'NativeBase.Icon': {
	            color: string;
	        };
	        'NativeBase.IconNB': {
	            color: string;
	        };
	        'NativeBase.Text': {
	            color: string;
	            fontSize: number;
	            lineHeight: number;
	        };
	    };
	    backgroundColor: string | undefined;
	    flexDirection: string;
	    justifyContent: string;
	    flex: number;
	    alignSelf: string;
	};
	export default _default;

}
declare module 'native-base/theme/components/Fab' {
	 const _default: () => {
	    'NativeBase.Button': {
	        alignItems: string;
	        padding: null;
	        justifyContent: string;
	        'NativeBase.Icon': {
	            alignSelf: string;
	            fontSize: number;
	            marginLeft: number;
	            marginRight: number;
	        };
	        'NativeBase.IconNB': {
	            alignSelf: string;
	            fontSize: number;
	            marginLeft: number;
	            marginRight: number;
	        };
	    };
	};
	export default _default;

}
declare module 'native-base/theme/components/Item' {
	 const _default: (variables?: {
	    platformStyle: undefined;
	    platform: "android" | "ios" | "web" | "windows" | "macos";
	    accordionBorderColor: string;
	    accordionContentPadding: number;
	    accordionIconFontSize: number;
	    contentStyle: string;
	    expandedIconStyle: string;
	    headerStyle: string;
	    iconStyle: string;
	    elevation: number;
	    containerTouchableBackgroundColor: string;
	    innerTouchableBackgroundColor: string;
	    listItemHeight: number;
	    listItemBorderColor: string;
	    marginHorizontal: number;
	    marginLeft: number;
	    marginTop: number;
	    minHeight: number;
	    padding: number;
	    touchableTextColor: string;
	    androidRipple: boolean;
	    androidRippleColor: string;
	    androidRippleColorDark: string;
	    buttonUppercaseAndroidText: boolean;
	    badgeBg: string;
	    badgeColor: string;
	    badgePadding: number;
	    buttonFontFamily: string;
	    buttonDisabledBg: string;
	    buttonPadding: number;
	    buttonDefaultActiveOpacity: number;
	    buttonDefaultFlex: number;
	    buttonDefaultBorderRadius: number;
	    buttonDefaultBorderWidth: number;
	    readonly buttonPrimaryBg: string;
	    readonly buttonPrimaryColor: string;
	    readonly buttonInfoBg: string;
	    readonly buttonInfoColor: string;
	    readonly buttonSuccessBg: string;
	    readonly buttonSuccessColor: string;
	    readonly buttonDangerBg: string;
	    readonly buttonDangerColor: string;
	    readonly buttonWarningBg: string;
	    readonly buttonWarningColor: string;
	    readonly buttonTextSize: number;
	    readonly buttonTextSizeLarge: number;
	    readonly buttonTextSizeSmall: number;
	    readonly borderRadiusLarge: number;
	    readonly iconSizeLarge: number;
	    readonly iconSizeSmall: number;
	    cardDefaultBg: string;
	    cardBorderColor: string;
	    cardBorderRadius: number;
	    cardItemPadding: number;
	    CheckboxRadius: number;
	    CheckboxBorderWidth: number;
	    CheckboxPaddingLeft: number;
	    CheckboxPaddingBottom: number;
	    CheckboxIconSize: number;
	    CheckboxIconMarginTop: number | undefined;
	    CheckboxFontSize: number;
	    checkboxBgColor: string;
	    checkboxSize: number;
	    checkboxTickColor: string;
	    checkboxDefaultColor: string;
	    checkboxTextShadowRadius: number;
	    brandPrimary: string;
	    brandInfo: string;
	    brandSuccess: string;
	    brandDanger: string;
	    brandWarning: string;
	    brandDark: string;
	    brandLight: string;
	    containerBgColor: string;
	    datePickerFlex: number;
	    datePickerPadding: number;
	    datePickerTextColor: string;
	    datePickerBg: string;
	    fabBackgroundColor: string;
	    fabBorderRadius: number;
	    fabBottom: number;
	    fabButtonBorderRadius: number;
	    fabButtonHeight: number;
	    fabButtonLeft: number;
	    fabButtonMarginBottom: number;
	    fabContainerBottom: number;
	    fabDefaultPosition: number;
	    fabElevation: number;
	    fabIconColor: string;
	    fabIconSize: number;
	    fabShadowColor: string;
	    fabShadowOffsetHeight: number;
	    fabShadowOffsetWidth: number;
	    fabShadowOpacity: number;
	    fabShadowRadius: number;
	    fabWidth: number;
	    DefaultFontSize: number;
	    fontFamily: string;
	    fontSizeBase: number;
	    readonly fontSizeH1: number;
	    readonly fontSizeH2: number;
	    readonly fontSizeH3: number;
	    footerHeight: number;
	    footerDefaultBg: string;
	    footerPaddingBottom: number;
	    tabBarTextColor: string;
	    tabBarTextSize: number;
	    activeTab: string;
	    sTabBarActiveTextColor: string;
	    tabBarActiveTextColor: string;
	    tabActiveBgColor: string;
	    toolbarBtnColor: string;
	    toolbarDefaultBg: string;
	    toolbarHeight: number;
	    toolbarSearchIconSize: number;
	    toolbarInputColor: string;
	    searchBarHeight: number;
	    searchBarInputHeight: number;
	    toolbarBtnTextColor: string;
	    toolbarDefaultBorder: string;
	    iosStatusbar: string;
	    readonly statusBarColor: string;
	    readonly darkenHeader: string;
	    iconFamily: string;
	    iconFontSize: number;
	    iconHeaderSize: number;
	    inputFontSize: number;
	    inputBorderColor: string;
	    inputSuccessBorderColor: string;
	    inputErrorBorderColor: string;
	    inputHeightBase: number;
	    readonly inputColor: string;
	    readonly inputColorPlaceholder: string;
	    buttonLineHeight: number;
	    lineHeightH1: number;
	    lineHeightH2: number;
	    lineHeightH3: number;
	    lineHeight: number;
	    listItemSelected: string;
	    listBg: string;
	    listBorderColor: string;
	    listDividerBg: string;
	    listBtnUnderlayColor: string;
	    listItemPadding: number;
	    listNoteColor: string;
	    listNoteSize: number;
	    defaultProgressColor: string;
	    inverseProgressColor: string;
	    radioBtnSize: number;
	    radioSelectedColorAndroid: string;
	    radioBtnLineHeight: number;
	    readonly radioColor: string;
	    segmentBackgroundColor: string;
	    segmentActiveBackgroundColor: string;
	    segmentTextColor: string;
	    segmentActiveTextColor: string;
	    segmentBorderColor: string;
	    segmentBorderColorMain: string;
	    defaultSpinnerColor: string;
	    inverseSpinnerColor: string;
	    tabBarDisabledTextColor: string;
	    tabDefaultBg: string;
	    topTabBarTextColor: string;
	    topTabBarActiveTextColor: string;
	    topTabBarBorderColor: string;
	    topTabBarActiveBorderColor: string;
	    tabBgColor: string;
	    tabFontSize: number;
	    textColor: string;
	    inverseTextColor: string;
	    noteFontSize: number;
	    readonly defaultTextColor: string;
	    titleFontfamily: string;
	    titleFontSize: number;
	    subTitleFontSize: number;
	    subtitleColor: string;
	    titleFontColor: string;
	    borderRadiusBase: number;
	    borderWidth: number;
	    contentPadding: number;
	    dropdownLinkColor: string;
	    inputLineHeight: number;
	    deviceWidth: number;
	    deviceHeight: number;
	    isIphoneX: boolean;
	    inputGroupRoundedBorderRadius: number;
	    Inset: {
	        portrait: {
	            topInset: number;
	            leftInset: number;
	            rightInset: number;
	            bottomInset: number;
	        };
	        landscape: {
	            topInset: number;
	            leftInset: number;
	            rightInset: number;
	            bottomInset: number;
	        };
	    };
	}) => {
	    '.floatingLabel': {
	        'NativeBase.Input': {
	            height: number;
	            top: number;
	            paddingTop: number;
	            paddingBottom: number;
	            '.multiline': {
	                minHeight: number;
	                paddingTop: number;
	                paddingBottom: number;
	            };
	        };
	        'NativeBase.Label': {
	            paddingTop: number;
	        };
	        'NativeBase.Icon': {
	            top: number;
	            paddingTop: number;
	        };
	        'NativeBase.IconNB': {
	            top: number;
	            paddingTop: number;
	        };
	    };
	    '.fixedLabel': {
	        'NativeBase.Label': {
	            position: null;
	            top: null;
	            left: null;
	            right: null;
	            flex: number;
	            height: null;
	            width: null;
	            fontSize: number;
	        };
	        'NativeBase.Input': {
	            flex: number;
	            fontSize: number;
	        };
	    };
	    '.stackedLabel': {
	        'NativeBase.Label': {
	            position: null;
	            top: null;
	            left: null;
	            right: null;
	            paddingTop: number;
	            alignSelf: string;
	            fontSize: number;
	        };
	        'NativeBase.Icon': {
	            marginTop: number;
	        };
	        'NativeBase.Input': {
	            alignSelf: string;
	            flex: number;
	            width: number | null;
	            fontSize: number;
	            lineHeight: number;
	            '.secureTextEntry': {
	                fontSize: number;
	            };
	            '.multiline': {
	                paddingTop: number | undefined;
	                paddingBottom: number | undefined;
	            };
	        };
	        flexDirection: null;
	        minHeight: number;
	    };
	    '.inlineLabel': {
	        'NativeBase.Label': {
	            position: null;
	            top: null;
	            left: null;
	            right: null;
	            paddingRight: number;
	            height: null;
	            width: null;
	            fontSize: number;
	        };
	        'NativeBase.Input': {
	            paddingLeft: number;
	            fontSize: number;
	        };
	        flexDirection: string;
	    };
	    'NativeBase.Label': {
	        fontSize: number;
	        color: string;
	        paddingRight: number;
	    };
	    'NativeBase.Icon': {
	        fontSize: number;
	        paddingRight: number;
	    };
	    'NativeBase.IconNB': {
	        fontSize: number;
	        paddingRight: number;
	    };
	    'NativeBase.Input': {
	        '.multiline': {
	            height: null;
	        };
	        height: number;
	        color: string;
	        flex: number;
	        top: number | undefined;
	        fontSize: number;
	    };
	    '.underline': {
	        'NativeBase.Input': {
	            paddingLeft: number;
	        };
	        '.success': {
	            borderColor: string;
	        };
	        '.error': {
	            borderColor: string;
	        };
	        borderWidth: number;
	        borderTopWidth: number;
	        borderRightWidth: number;
	        borderLeftWidth: number;
	        borderColor: string;
	    };
	    '.regular': {
	        'NativeBase.Input': {
	            paddingLeft: number;
	        };
	        'NativeBase.Icon': {
	            paddingLeft: number;
	        };
	        '.success': {
	            borderColor: string;
	        };
	        '.error': {
	            borderColor: string;
	        };
	        borderWidth: number;
	        borderColor: string;
	    };
	    '.rounded': {
	        'NativeBase.Input': {
	            paddingLeft: number;
	        };
	        'NativeBase.Icon': {
	            paddingLeft: number;
	        };
	        '.success': {
	            borderColor: string;
	        };
	        '.error': {
	            borderColor: string;
	        };
	        borderWidth: number;
	        borderRadius: number;
	        borderColor: string;
	    };
	    '.success': {
	        'NativeBase.Icon': {
	            color: string;
	        };
	        'NativeBase.IconNB': {
	            color: string;
	        };
	        '.rounded': {
	            borderRadius: number;
	            borderColor: string;
	        };
	        '.regular': {
	            borderColor: string;
	        };
	        '.underline': {
	            borderWidth: number;
	            borderTopWidth: number;
	            borderRightWidth: number;
	            borderLeftWidth: number;
	            borderColor: string;
	        };
	        borderColor: string;
	    };
	    '.error': {
	        'NativeBase.Icon': {
	            color: string;
	        };
	        'NativeBase.IconNB': {
	            color: string;
	        };
	        '.rounded': {
	            borderRadius: number;
	            borderColor: string;
	        };
	        '.regular': {
	            borderColor: string;
	        };
	        '.underline': {
	            borderWidth: number;
	            borderTopWidth: number;
	            borderRightWidth: number;
	            borderLeftWidth: number;
	            borderColor: string;
	        };
	        borderColor: string;
	    };
	    '.disabled': {
	        'NativeBase.Icon': {
	            color: string;
	        };
	        'NativeBase.IconNB': {
	            color: string;
	        };
	    };
	    '.picker': {
	        marginLeft: number;
	    };
	    borderWidth: number;
	    borderTopWidth: number;
	    borderRightWidth: number;
	    borderLeftWidth: number;
	    borderColor: string;
	    backgroundColor: string;
	    flexDirection: string;
	    alignItems: string;
	    marginLeft: number;
	};
	export default _default;

}
declare module 'native-base/theme/components/Label' {
	 const _default: () => {
	    '.focused': {
	        width: number;
	    };
	    fontSize: number;
	};
	export default _default;

}
declare module 'native-base/theme/components/Textarea' {
	 const _default: (variables?: {
	    platformStyle: undefined;
	    platform: "android" | "ios" | "web" | "windows" | "macos";
	    accordionBorderColor: string;
	    accordionContentPadding: number;
	    accordionIconFontSize: number;
	    contentStyle: string;
	    expandedIconStyle: string;
	    headerStyle: string;
	    iconStyle: string;
	    elevation: number;
	    containerTouchableBackgroundColor: string;
	    innerTouchableBackgroundColor: string;
	    listItemHeight: number;
	    listItemBorderColor: string;
	    marginHorizontal: number;
	    marginLeft: number;
	    marginTop: number;
	    minHeight: number;
	    padding: number;
	    touchableTextColor: string;
	    androidRipple: boolean;
	    androidRippleColor: string;
	    androidRippleColorDark: string;
	    buttonUppercaseAndroidText: boolean;
	    badgeBg: string;
	    badgeColor: string;
	    badgePadding: number;
	    buttonFontFamily: string;
	    buttonDisabledBg: string;
	    buttonPadding: number;
	    buttonDefaultActiveOpacity: number;
	    buttonDefaultFlex: number;
	    buttonDefaultBorderRadius: number;
	    buttonDefaultBorderWidth: number;
	    readonly buttonPrimaryBg: string;
	    readonly buttonPrimaryColor: string;
	    readonly buttonInfoBg: string;
	    readonly buttonInfoColor: string;
	    readonly buttonSuccessBg: string;
	    readonly buttonSuccessColor: string;
	    readonly buttonDangerBg: string;
	    readonly buttonDangerColor: string;
	    readonly buttonWarningBg: string;
	    readonly buttonWarningColor: string;
	    readonly buttonTextSize: number;
	    readonly buttonTextSizeLarge: number;
	    readonly buttonTextSizeSmall: number;
	    readonly borderRadiusLarge: number;
	    readonly iconSizeLarge: number;
	    readonly iconSizeSmall: number;
	    cardDefaultBg: string;
	    cardBorderColor: string;
	    cardBorderRadius: number;
	    cardItemPadding: number;
	    CheckboxRadius: number;
	    CheckboxBorderWidth: number;
	    CheckboxPaddingLeft: number;
	    CheckboxPaddingBottom: number;
	    CheckboxIconSize: number;
	    CheckboxIconMarginTop: number | undefined;
	    CheckboxFontSize: number;
	    checkboxBgColor: string;
	    checkboxSize: number;
	    checkboxTickColor: string;
	    checkboxDefaultColor: string;
	    checkboxTextShadowRadius: number;
	    brandPrimary: string;
	    brandInfo: string;
	    brandSuccess: string;
	    brandDanger: string;
	    brandWarning: string;
	    brandDark: string;
	    brandLight: string;
	    containerBgColor: string;
	    datePickerFlex: number;
	    datePickerPadding: number;
	    datePickerTextColor: string;
	    datePickerBg: string;
	    fabBackgroundColor: string;
	    fabBorderRadius: number;
	    fabBottom: number;
	    fabButtonBorderRadius: number;
	    fabButtonHeight: number;
	    fabButtonLeft: number;
	    fabButtonMarginBottom: number;
	    fabContainerBottom: number;
	    fabDefaultPosition: number;
	    fabElevation: number;
	    fabIconColor: string;
	    fabIconSize: number;
	    fabShadowColor: string;
	    fabShadowOffsetHeight: number;
	    fabShadowOffsetWidth: number;
	    fabShadowOpacity: number;
	    fabShadowRadius: number;
	    fabWidth: number;
	    DefaultFontSize: number;
	    fontFamily: string;
	    fontSizeBase: number;
	    readonly fontSizeH1: number;
	    readonly fontSizeH2: number;
	    readonly fontSizeH3: number;
	    footerHeight: number;
	    footerDefaultBg: string;
	    footerPaddingBottom: number;
	    tabBarTextColor: string;
	    tabBarTextSize: number;
	    activeTab: string;
	    sTabBarActiveTextColor: string;
	    tabBarActiveTextColor: string;
	    tabActiveBgColor: string;
	    toolbarBtnColor: string;
	    toolbarDefaultBg: string;
	    toolbarHeight: number;
	    toolbarSearchIconSize: number;
	    toolbarInputColor: string;
	    searchBarHeight: number;
	    searchBarInputHeight: number;
	    toolbarBtnTextColor: string;
	    toolbarDefaultBorder: string;
	    iosStatusbar: string;
	    readonly statusBarColor: string;
	    readonly darkenHeader: string;
	    iconFamily: string;
	    iconFontSize: number;
	    iconHeaderSize: number;
	    inputFontSize: number;
	    inputBorderColor: string;
	    inputSuccessBorderColor: string;
	    inputErrorBorderColor: string;
	    inputHeightBase: number;
	    readonly inputColor: string;
	    readonly inputColorPlaceholder: string;
	    buttonLineHeight: number;
	    lineHeightH1: number;
	    lineHeightH2: number;
	    lineHeightH3: number;
	    lineHeight: number;
	    listItemSelected: string;
	    listBg: string;
	    listBorderColor: string;
	    listDividerBg: string;
	    listBtnUnderlayColor: string;
	    listItemPadding: number;
	    listNoteColor: string;
	    listNoteSize: number;
	    defaultProgressColor: string;
	    inverseProgressColor: string;
	    radioBtnSize: number;
	    radioSelectedColorAndroid: string;
	    radioBtnLineHeight: number;
	    readonly radioColor: string;
	    segmentBackgroundColor: string;
	    segmentActiveBackgroundColor: string;
	    segmentTextColor: string;
	    segmentActiveTextColor: string;
	    segmentBorderColor: string;
	    segmentBorderColorMain: string;
	    defaultSpinnerColor: string;
	    inverseSpinnerColor: string;
	    tabBarDisabledTextColor: string;
	    tabDefaultBg: string;
	    topTabBarTextColor: string;
	    topTabBarActiveTextColor: string;
	    topTabBarBorderColor: string;
	    topTabBarActiveBorderColor: string;
	    tabBgColor: string;
	    tabFontSize: number;
	    textColor: string;
	    inverseTextColor: string;
	    noteFontSize: number;
	    readonly defaultTextColor: string;
	    titleFontfamily: string;
	    titleFontSize: number;
	    subTitleFontSize: number;
	    subtitleColor: string;
	    titleFontColor: string;
	    borderRadiusBase: number;
	    borderWidth: number;
	    contentPadding: number;
	    dropdownLinkColor: string;
	    inputLineHeight: number;
	    deviceWidth: number;
	    deviceHeight: number;
	    isIphoneX: boolean;
	    inputGroupRoundedBorderRadius: number;
	    Inset: {
	        portrait: {
	            topInset: number;
	            leftInset: number;
	            rightInset: number;
	            bottomInset: number;
	        };
	        landscape: {
	            topInset: number;
	            leftInset: number;
	            rightInset: number;
	            bottomInset: number;
	        };
	    };
	}) => {
	    '.underline': {
	        borderBottomWidth: number;
	        marginTop: number;
	        borderColor: string;
	    };
	    '.bordered': {
	        borderWidth: number;
	        marginTop: number;
	        borderColor: string;
	    };
	    color: string;
	    paddingLeft: number;
	    paddingRight: number;
	    fontSize: number;
	    textAlignVertical: string;
	};
	export default _default;

}
declare module 'native-base/theme/components/Text' {
	 const _default: (variables?: {
	    platformStyle: undefined;
	    platform: "android" | "ios" | "web" | "windows" | "macos";
	    accordionBorderColor: string;
	    accordionContentPadding: number;
	    accordionIconFontSize: number;
	    contentStyle: string;
	    expandedIconStyle: string;
	    headerStyle: string;
	    iconStyle: string;
	    elevation: number;
	    containerTouchableBackgroundColor: string;
	    innerTouchableBackgroundColor: string;
	    listItemHeight: number;
	    listItemBorderColor: string;
	    marginHorizontal: number;
	    marginLeft: number;
	    marginTop: number;
	    minHeight: number;
	    padding: number;
	    touchableTextColor: string;
	    androidRipple: boolean;
	    androidRippleColor: string;
	    androidRippleColorDark: string;
	    buttonUppercaseAndroidText: boolean;
	    badgeBg: string;
	    badgeColor: string;
	    badgePadding: number;
	    buttonFontFamily: string;
	    buttonDisabledBg: string;
	    buttonPadding: number;
	    buttonDefaultActiveOpacity: number;
	    buttonDefaultFlex: number;
	    buttonDefaultBorderRadius: number;
	    buttonDefaultBorderWidth: number;
	    readonly buttonPrimaryBg: string;
	    readonly buttonPrimaryColor: string;
	    readonly buttonInfoBg: string;
	    readonly buttonInfoColor: string;
	    readonly buttonSuccessBg: string;
	    readonly buttonSuccessColor: string;
	    readonly buttonDangerBg: string;
	    readonly buttonDangerColor: string;
	    readonly buttonWarningBg: string;
	    readonly buttonWarningColor: string;
	    readonly buttonTextSize: number;
	    readonly buttonTextSizeLarge: number;
	    readonly buttonTextSizeSmall: number;
	    readonly borderRadiusLarge: number;
	    readonly iconSizeLarge: number;
	    readonly iconSizeSmall: number;
	    cardDefaultBg: string;
	    cardBorderColor: string;
	    cardBorderRadius: number;
	    cardItemPadding: number;
	    CheckboxRadius: number;
	    CheckboxBorderWidth: number;
	    CheckboxPaddingLeft: number;
	    CheckboxPaddingBottom: number;
	    CheckboxIconSize: number;
	    CheckboxIconMarginTop: number | undefined;
	    CheckboxFontSize: number;
	    checkboxBgColor: string;
	    checkboxSize: number;
	    checkboxTickColor: string;
	    checkboxDefaultColor: string;
	    checkboxTextShadowRadius: number;
	    brandPrimary: string;
	    brandInfo: string;
	    brandSuccess: string;
	    brandDanger: string;
	    brandWarning: string;
	    brandDark: string;
	    brandLight: string;
	    containerBgColor: string;
	    datePickerFlex: number;
	    datePickerPadding: number;
	    datePickerTextColor: string;
	    datePickerBg: string;
	    fabBackgroundColor: string;
	    fabBorderRadius: number;
	    fabBottom: number;
	    fabButtonBorderRadius: number;
	    fabButtonHeight: number;
	    fabButtonLeft: number;
	    fabButtonMarginBottom: number;
	    fabContainerBottom: number;
	    fabDefaultPosition: number;
	    fabElevation: number;
	    fabIconColor: string;
	    fabIconSize: number;
	    fabShadowColor: string;
	    fabShadowOffsetHeight: number;
	    fabShadowOffsetWidth: number;
	    fabShadowOpacity: number;
	    fabShadowRadius: number;
	    fabWidth: number;
	    DefaultFontSize: number;
	    fontFamily: string;
	    fontSizeBase: number;
	    readonly fontSizeH1: number;
	    readonly fontSizeH2: number;
	    readonly fontSizeH3: number;
	    footerHeight: number;
	    footerDefaultBg: string;
	    footerPaddingBottom: number;
	    tabBarTextColor: string;
	    tabBarTextSize: number;
	    activeTab: string;
	    sTabBarActiveTextColor: string;
	    tabBarActiveTextColor: string;
	    tabActiveBgColor: string;
	    toolbarBtnColor: string;
	    toolbarDefaultBg: string;
	    toolbarHeight: number;
	    toolbarSearchIconSize: number;
	    toolbarInputColor: string;
	    searchBarHeight: number;
	    searchBarInputHeight: number;
	    toolbarBtnTextColor: string;
	    toolbarDefaultBorder: string;
	    iosStatusbar: string;
	    readonly statusBarColor: string;
	    readonly darkenHeader: string;
	    iconFamily: string;
	    iconFontSize: number;
	    iconHeaderSize: number;
	    inputFontSize: number;
	    inputBorderColor: string;
	    inputSuccessBorderColor: string;
	    inputErrorBorderColor: string;
	    inputHeightBase: number;
	    readonly inputColor: string;
	    readonly inputColorPlaceholder: string;
	    buttonLineHeight: number;
	    lineHeightH1: number;
	    lineHeightH2: number;
	    lineHeightH3: number;
	    lineHeight: number;
	    listItemSelected: string;
	    listBg: string;
	    listBorderColor: string;
	    listDividerBg: string;
	    listBtnUnderlayColor: string;
	    listItemPadding: number;
	    listNoteColor: string;
	    listNoteSize: number;
	    defaultProgressColor: string;
	    inverseProgressColor: string;
	    radioBtnSize: number;
	    radioSelectedColorAndroid: string;
	    radioBtnLineHeight: number;
	    readonly radioColor: string;
	    segmentBackgroundColor: string;
	    segmentActiveBackgroundColor: string;
	    segmentTextColor: string;
	    segmentActiveTextColor: string;
	    segmentBorderColor: string;
	    segmentBorderColorMain: string;
	    defaultSpinnerColor: string;
	    inverseSpinnerColor: string;
	    tabBarDisabledTextColor: string;
	    tabDefaultBg: string;
	    topTabBarTextColor: string;
	    topTabBarActiveTextColor: string;
	    topTabBarBorderColor: string;
	    topTabBarActiveBorderColor: string;
	    tabBgColor: string;
	    tabFontSize: number;
	    textColor: string;
	    inverseTextColor: string;
	    noteFontSize: number;
	    readonly defaultTextColor: string;
	    titleFontfamily: string;
	    titleFontSize: number;
	    subTitleFontSize: number;
	    subtitleColor: string;
	    titleFontColor: string;
	    borderRadiusBase: number;
	    borderWidth: number;
	    contentPadding: number;
	    dropdownLinkColor: string;
	    inputLineHeight: number;
	    deviceWidth: number;
	    deviceHeight: number;
	    isIphoneX: boolean;
	    inputGroupRoundedBorderRadius: number;
	    Inset: {
	        portrait: {
	            topInset: number;
	            leftInset: number;
	            rightInset: number;
	            bottomInset: number;
	        };
	        landscape: {
	            topInset: number;
	            leftInset: number;
	            rightInset: number;
	            bottomInset: number;
	        };
	    };
	}) => {
	    fontSize: number;
	    fontFamily: string;
	    color: string;
	    '.note': {
	        color: string;
	        fontSize: number;
	    };
	};
	export default _default;

}
declare module 'native-base/theme/components/Toast' {
	 const _default: (variables?: {
	    platformStyle: undefined;
	    platform: "android" | "ios" | "web" | "windows" | "macos";
	    accordionBorderColor: string;
	    accordionContentPadding: number;
	    accordionIconFontSize: number;
	    contentStyle: string;
	    expandedIconStyle: string;
	    headerStyle: string;
	    iconStyle: string;
	    elevation: number;
	    containerTouchableBackgroundColor: string;
	    innerTouchableBackgroundColor: string;
	    listItemHeight: number;
	    listItemBorderColor: string;
	    marginHorizontal: number;
	    marginLeft: number;
	    marginTop: number;
	    minHeight: number;
	    padding: number;
	    touchableTextColor: string;
	    androidRipple: boolean;
	    androidRippleColor: string;
	    androidRippleColorDark: string;
	    buttonUppercaseAndroidText: boolean;
	    badgeBg: string;
	    badgeColor: string;
	    badgePadding: number;
	    buttonFontFamily: string;
	    buttonDisabledBg: string;
	    buttonPadding: number;
	    buttonDefaultActiveOpacity: number;
	    buttonDefaultFlex: number;
	    buttonDefaultBorderRadius: number;
	    buttonDefaultBorderWidth: number;
	    readonly buttonPrimaryBg: string;
	    readonly buttonPrimaryColor: string;
	    readonly buttonInfoBg: string;
	    readonly buttonInfoColor: string;
	    readonly buttonSuccessBg: string;
	    readonly buttonSuccessColor: string;
	    readonly buttonDangerBg: string;
	    readonly buttonDangerColor: string;
	    readonly buttonWarningBg: string;
	    readonly buttonWarningColor: string;
	    readonly buttonTextSize: number;
	    readonly buttonTextSizeLarge: number;
	    readonly buttonTextSizeSmall: number;
	    readonly borderRadiusLarge: number;
	    readonly iconSizeLarge: number;
	    readonly iconSizeSmall: number;
	    cardDefaultBg: string;
	    cardBorderColor: string;
	    cardBorderRadius: number;
	    cardItemPadding: number;
	    CheckboxRadius: number;
	    CheckboxBorderWidth: number;
	    CheckboxPaddingLeft: number;
	    CheckboxPaddingBottom: number;
	    CheckboxIconSize: number;
	    CheckboxIconMarginTop: number | undefined;
	    CheckboxFontSize: number;
	    checkboxBgColor: string;
	    checkboxSize: number;
	    checkboxTickColor: string;
	    checkboxDefaultColor: string;
	    checkboxTextShadowRadius: number;
	    brandPrimary: string;
	    brandInfo: string;
	    brandSuccess: string;
	    brandDanger: string;
	    brandWarning: string;
	    brandDark: string;
	    brandLight: string;
	    containerBgColor: string;
	    datePickerFlex: number;
	    datePickerPadding: number;
	    datePickerTextColor: string;
	    datePickerBg: string;
	    fabBackgroundColor: string;
	    fabBorderRadius: number;
	    fabBottom: number;
	    fabButtonBorderRadius: number;
	    fabButtonHeight: number;
	    fabButtonLeft: number;
	    fabButtonMarginBottom: number;
	    fabContainerBottom: number;
	    fabDefaultPosition: number;
	    fabElevation: number;
	    fabIconColor: string;
	    fabIconSize: number;
	    fabShadowColor: string;
	    fabShadowOffsetHeight: number;
	    fabShadowOffsetWidth: number;
	    fabShadowOpacity: number;
	    fabShadowRadius: number;
	    fabWidth: number;
	    DefaultFontSize: number;
	    fontFamily: string;
	    fontSizeBase: number;
	    readonly fontSizeH1: number;
	    readonly fontSizeH2: number;
	    readonly fontSizeH3: number;
	    footerHeight: number;
	    footerDefaultBg: string;
	    footerPaddingBottom: number;
	    tabBarTextColor: string;
	    tabBarTextSize: number;
	    activeTab: string;
	    sTabBarActiveTextColor: string;
	    tabBarActiveTextColor: string;
	    tabActiveBgColor: string;
	    toolbarBtnColor: string;
	    toolbarDefaultBg: string;
	    toolbarHeight: number;
	    toolbarSearchIconSize: number;
	    toolbarInputColor: string;
	    searchBarHeight: number;
	    searchBarInputHeight: number;
	    toolbarBtnTextColor: string;
	    toolbarDefaultBorder: string;
	    iosStatusbar: string;
	    readonly statusBarColor: string;
	    readonly darkenHeader: string;
	    iconFamily: string;
	    iconFontSize: number;
	    iconHeaderSize: number;
	    inputFontSize: number;
	    inputBorderColor: string;
	    inputSuccessBorderColor: string;
	    inputErrorBorderColor: string;
	    inputHeightBase: number;
	    readonly inputColor: string;
	    readonly inputColorPlaceholder: string;
	    buttonLineHeight: number;
	    lineHeightH1: number;
	    lineHeightH2: number;
	    lineHeightH3: number;
	    lineHeight: number;
	    listItemSelected: string;
	    listBg: string;
	    listBorderColor: string;
	    listDividerBg: string;
	    listBtnUnderlayColor: string;
	    listItemPadding: number;
	    listNoteColor: string;
	    listNoteSize: number;
	    defaultProgressColor: string;
	    inverseProgressColor: string;
	    radioBtnSize: number;
	    radioSelectedColorAndroid: string;
	    radioBtnLineHeight: number;
	    readonly radioColor: string;
	    segmentBackgroundColor: string;
	    segmentActiveBackgroundColor: string;
	    segmentTextColor: string;
	    segmentActiveTextColor: string;
	    segmentBorderColor: string;
	    segmentBorderColorMain: string;
	    defaultSpinnerColor: string;
	    inverseSpinnerColor: string;
	    tabBarDisabledTextColor: string;
	    tabDefaultBg: string;
	    topTabBarTextColor: string;
	    topTabBarActiveTextColor: string;
	    topTabBarBorderColor: string;
	    topTabBarActiveBorderColor: string;
	    tabBgColor: string;
	    tabFontSize: number;
	    textColor: string;
	    inverseTextColor: string;
	    noteFontSize: number;
	    readonly defaultTextColor: string;
	    titleFontfamily: string;
	    titleFontSize: number;
	    subTitleFontSize: number;
	    subtitleColor: string;
	    titleFontColor: string;
	    borderRadiusBase: number;
	    borderWidth: number;
	    contentPadding: number;
	    dropdownLinkColor: string;
	    inputLineHeight: number;
	    deviceWidth: number;
	    deviceHeight: number;
	    isIphoneX: boolean;
	    inputGroupRoundedBorderRadius: number;
	    Inset: {
	        portrait: {
	            topInset: number;
	            leftInset: number;
	            rightInset: number;
	            bottomInset: number;
	        };
	        landscape: {
	            topInset: number;
	            leftInset: number;
	            rightInset: number;
	            bottomInset: number;
	        };
	    };
	}) => {
	    '.danger': {
	        backgroundColor: string;
	    };
	    '.warning': {
	        backgroundColor: string;
	    };
	    '.success': {
	        backgroundColor: string;
	    };
	    backgroundColor: string;
	    borderRadius: number;
	    flexDirection: string;
	    justifyContent: string;
	    alignItems: string;
	    padding: number;
	    minHeight: number;
	    'NativeBase.Text': {
	        color: string;
	        flex: number;
	    };
	    'NativeBase.Button': {
	        backgroundColor: string;
	        height: number;
	        elevation: number;
	        'NativeBase.Text': {
	            fontSize: number;
	        };
	    };
	};
	export default _default;

}
declare module 'native-base/theme/components/Tab' {
	 const _default: () => {
	    flex: number;
	    backgroundColor: string;
	};
	export default _default;

}
declare module 'native-base/theme/components/TabBar' {
	 const _default: (variables?: {
	    platformStyle: undefined;
	    platform: "android" | "ios" | "web" | "windows" | "macos";
	    accordionBorderColor: string;
	    accordionContentPadding: number;
	    accordionIconFontSize: number;
	    contentStyle: string;
	    expandedIconStyle: string;
	    headerStyle: string;
	    iconStyle: string;
	    elevation: number;
	    containerTouchableBackgroundColor: string;
	    innerTouchableBackgroundColor: string;
	    listItemHeight: number;
	    listItemBorderColor: string;
	    marginHorizontal: number;
	    marginLeft: number;
	    marginTop: number;
	    minHeight: number;
	    padding: number;
	    touchableTextColor: string;
	    androidRipple: boolean;
	    androidRippleColor: string;
	    androidRippleColorDark: string;
	    buttonUppercaseAndroidText: boolean;
	    badgeBg: string;
	    badgeColor: string;
	    badgePadding: number;
	    buttonFontFamily: string;
	    buttonDisabledBg: string;
	    buttonPadding: number;
	    buttonDefaultActiveOpacity: number;
	    buttonDefaultFlex: number;
	    buttonDefaultBorderRadius: number;
	    buttonDefaultBorderWidth: number;
	    readonly buttonPrimaryBg: string;
	    readonly buttonPrimaryColor: string;
	    readonly buttonInfoBg: string;
	    readonly buttonInfoColor: string;
	    readonly buttonSuccessBg: string;
	    readonly buttonSuccessColor: string;
	    readonly buttonDangerBg: string;
	    readonly buttonDangerColor: string;
	    readonly buttonWarningBg: string;
	    readonly buttonWarningColor: string;
	    readonly buttonTextSize: number;
	    readonly buttonTextSizeLarge: number;
	    readonly buttonTextSizeSmall: number;
	    readonly borderRadiusLarge: number;
	    readonly iconSizeLarge: number;
	    readonly iconSizeSmall: number;
	    cardDefaultBg: string;
	    cardBorderColor: string;
	    cardBorderRadius: number;
	    cardItemPadding: number;
	    CheckboxRadius: number;
	    CheckboxBorderWidth: number;
	    CheckboxPaddingLeft: number;
	    CheckboxPaddingBottom: number;
	    CheckboxIconSize: number;
	    CheckboxIconMarginTop: number | undefined;
	    CheckboxFontSize: number;
	    checkboxBgColor: string;
	    checkboxSize: number;
	    checkboxTickColor: string;
	    checkboxDefaultColor: string;
	    checkboxTextShadowRadius: number;
	    brandPrimary: string;
	    brandInfo: string;
	    brandSuccess: string;
	    brandDanger: string;
	    brandWarning: string;
	    brandDark: string;
	    brandLight: string;
	    containerBgColor: string;
	    datePickerFlex: number;
	    datePickerPadding: number;
	    datePickerTextColor: string;
	    datePickerBg: string;
	    fabBackgroundColor: string;
	    fabBorderRadius: number;
	    fabBottom: number;
	    fabButtonBorderRadius: number;
	    fabButtonHeight: number;
	    fabButtonLeft: number;
	    fabButtonMarginBottom: number;
	    fabContainerBottom: number;
	    fabDefaultPosition: number;
	    fabElevation: number;
	    fabIconColor: string;
	    fabIconSize: number;
	    fabShadowColor: string;
	    fabShadowOffsetHeight: number;
	    fabShadowOffsetWidth: number;
	    fabShadowOpacity: number;
	    fabShadowRadius: number;
	    fabWidth: number;
	    DefaultFontSize: number;
	    fontFamily: string;
	    fontSizeBase: number;
	    readonly fontSizeH1: number;
	    readonly fontSizeH2: number;
	    readonly fontSizeH3: number;
	    footerHeight: number;
	    footerDefaultBg: string;
	    footerPaddingBottom: number;
	    tabBarTextColor: string;
	    tabBarTextSize: number;
	    activeTab: string;
	    sTabBarActiveTextColor: string;
	    tabBarActiveTextColor: string;
	    tabActiveBgColor: string;
	    toolbarBtnColor: string;
	    toolbarDefaultBg: string;
	    toolbarHeight: number;
	    toolbarSearchIconSize: number;
	    toolbarInputColor: string;
	    searchBarHeight: number;
	    searchBarInputHeight: number;
	    toolbarBtnTextColor: string;
	    toolbarDefaultBorder: string;
	    iosStatusbar: string;
	    readonly statusBarColor: string;
	    readonly darkenHeader: string;
	    iconFamily: string;
	    iconFontSize: number;
	    iconHeaderSize: number;
	    inputFontSize: number;
	    inputBorderColor: string;
	    inputSuccessBorderColor: string;
	    inputErrorBorderColor: string;
	    inputHeightBase: number;
	    readonly inputColor: string;
	    readonly inputColorPlaceholder: string;
	    buttonLineHeight: number;
	    lineHeightH1: number;
	    lineHeightH2: number;
	    lineHeightH3: number;
	    lineHeight: number;
	    listItemSelected: string;
	    listBg: string;
	    listBorderColor: string;
	    listDividerBg: string;
	    listBtnUnderlayColor: string;
	    listItemPadding: number;
	    listNoteColor: string;
	    listNoteSize: number;
	    defaultProgressColor: string;
	    inverseProgressColor: string;
	    radioBtnSize: number;
	    radioSelectedColorAndroid: string;
	    radioBtnLineHeight: number;
	    readonly radioColor: string;
	    segmentBackgroundColor: string;
	    segmentActiveBackgroundColor: string;
	    segmentTextColor: string;
	    segmentActiveTextColor: string;
	    segmentBorderColor: string;
	    segmentBorderColorMain: string;
	    defaultSpinnerColor: string;
	    inverseSpinnerColor: string;
	    tabBarDisabledTextColor: string;
	    tabDefaultBg: string;
	    topTabBarTextColor: string;
	    topTabBarActiveTextColor: string;
	    topTabBarBorderColor: string;
	    topTabBarActiveBorderColor: string;
	    tabBgColor: string;
	    tabFontSize: number;
	    textColor: string;
	    inverseTextColor: string;
	    noteFontSize: number;
	    readonly defaultTextColor: string;
	    titleFontfamily: string;
	    titleFontSize: number;
	    subTitleFontSize: number;
	    subtitleColor: string;
	    titleFontColor: string;
	    borderRadiusBase: number;
	    borderWidth: number;
	    contentPadding: number;
	    dropdownLinkColor: string;
	    inputLineHeight: number;
	    deviceWidth: number;
	    deviceHeight: number;
	    isIphoneX: boolean;
	    inputGroupRoundedBorderRadius: number;
	    Inset: {
	        portrait: {
	            topInset: number;
	            leftInset: number;
	            rightInset: number;
	            bottomInset: number;
	        };
	        landscape: {
	            topInset: number;
	            leftInset: number;
	            rightInset: number;
	            bottomInset: number;
	        };
	    };
	}) => {
	    '.tabIcon': {
	        height: undefined;
	    };
	    '.vertical': {
	        height: number;
	    };
	    'NativeBase.Button': {
	        '.transparent': {
	            'NativeBase.Text': {
	                fontSize: number;
	                color: string;
	                fontWeight: string;
	            };
	            'NativeBase.IconNB': {
	                color: string;
	            };
	        };
	        'NativeBase.IconNB': {
	            color: string;
	        };
	        'NativeBase.Text': {
	            fontSize: number;
	            color: string;
	            fontWeight: string;
	        };
	        '.isTabActive': {
	            'NativeBase.Text': {
	                fontWeight: string;
	            };
	        };
	        flex: number;
	        alignSelf: string;
	        alignItems: string;
	        justifyContent: string;
	        borderRadius: null;
	        borderBottomColor: string;
	        backgroundColor: string;
	    };
	    height: number;
	    flexDirection: string;
	    justifyContent: string;
	    borderWidth: number;
	    borderTopWidth: number;
	    borderLeftWidth: number;
	    borderRightWidth: number;
	    borderBottomColor: string;
	    backgroundColor: string;
	};
	export default _default;

}
declare module 'native-base/theme/components/TabContainer' {
	 const _default: (variables?: {
	    platformStyle: undefined;
	    platform: "android" | "ios" | "web" | "windows" | "macos";
	    accordionBorderColor: string;
	    accordionContentPadding: number;
	    accordionIconFontSize: number;
	    contentStyle: string;
	    expandedIconStyle: string;
	    headerStyle: string;
	    iconStyle: string;
	    elevation: number;
	    containerTouchableBackgroundColor: string;
	    innerTouchableBackgroundColor: string;
	    listItemHeight: number;
	    listItemBorderColor: string;
	    marginHorizontal: number;
	    marginLeft: number;
	    marginTop: number;
	    minHeight: number;
	    padding: number;
	    touchableTextColor: string;
	    androidRipple: boolean;
	    androidRippleColor: string;
	    androidRippleColorDark: string;
	    buttonUppercaseAndroidText: boolean;
	    badgeBg: string;
	    badgeColor: string;
	    badgePadding: number;
	    buttonFontFamily: string;
	    buttonDisabledBg: string;
	    buttonPadding: number;
	    buttonDefaultActiveOpacity: number;
	    buttonDefaultFlex: number;
	    buttonDefaultBorderRadius: number;
	    buttonDefaultBorderWidth: number;
	    readonly buttonPrimaryBg: string;
	    readonly buttonPrimaryColor: string;
	    readonly buttonInfoBg: string;
	    readonly buttonInfoColor: string;
	    readonly buttonSuccessBg: string;
	    readonly buttonSuccessColor: string;
	    readonly buttonDangerBg: string;
	    readonly buttonDangerColor: string;
	    readonly buttonWarningBg: string;
	    readonly buttonWarningColor: string;
	    readonly buttonTextSize: number;
	    readonly buttonTextSizeLarge: number;
	    readonly buttonTextSizeSmall: number;
	    readonly borderRadiusLarge: number;
	    readonly iconSizeLarge: number;
	    readonly iconSizeSmall: number;
	    cardDefaultBg: string;
	    cardBorderColor: string;
	    cardBorderRadius: number;
	    cardItemPadding: number;
	    CheckboxRadius: number;
	    CheckboxBorderWidth: number;
	    CheckboxPaddingLeft: number;
	    CheckboxPaddingBottom: number;
	    CheckboxIconSize: number;
	    CheckboxIconMarginTop: number | undefined;
	    CheckboxFontSize: number;
	    checkboxBgColor: string;
	    checkboxSize: number;
	    checkboxTickColor: string;
	    checkboxDefaultColor: string;
	    checkboxTextShadowRadius: number;
	    brandPrimary: string;
	    brandInfo: string;
	    brandSuccess: string;
	    brandDanger: string;
	    brandWarning: string;
	    brandDark: string;
	    brandLight: string;
	    containerBgColor: string;
	    datePickerFlex: number;
	    datePickerPadding: number;
	    datePickerTextColor: string;
	    datePickerBg: string;
	    fabBackgroundColor: string;
	    fabBorderRadius: number;
	    fabBottom: number;
	    fabButtonBorderRadius: number;
	    fabButtonHeight: number;
	    fabButtonLeft: number;
	    fabButtonMarginBottom: number;
	    fabContainerBottom: number;
	    fabDefaultPosition: number;
	    fabElevation: number;
	    fabIconColor: string;
	    fabIconSize: number;
	    fabShadowColor: string;
	    fabShadowOffsetHeight: number;
	    fabShadowOffsetWidth: number;
	    fabShadowOpacity: number;
	    fabShadowRadius: number;
	    fabWidth: number;
	    DefaultFontSize: number;
	    fontFamily: string;
	    fontSizeBase: number;
	    readonly fontSizeH1: number;
	    readonly fontSizeH2: number;
	    readonly fontSizeH3: number;
	    footerHeight: number;
	    footerDefaultBg: string;
	    footerPaddingBottom: number;
	    tabBarTextColor: string;
	    tabBarTextSize: number;
	    activeTab: string;
	    sTabBarActiveTextColor: string;
	    tabBarActiveTextColor: string;
	    tabActiveBgColor: string;
	    toolbarBtnColor: string;
	    toolbarDefaultBg: string;
	    toolbarHeight: number;
	    toolbarSearchIconSize: number;
	    toolbarInputColor: string;
	    searchBarHeight: number;
	    searchBarInputHeight: number;
	    toolbarBtnTextColor: string;
	    toolbarDefaultBorder: string;
	    iosStatusbar: string;
	    readonly statusBarColor: string;
	    readonly darkenHeader: string;
	    iconFamily: string;
	    iconFontSize: number;
	    iconHeaderSize: number;
	    inputFontSize: number;
	    inputBorderColor: string;
	    inputSuccessBorderColor: string;
	    inputErrorBorderColor: string;
	    inputHeightBase: number;
	    readonly inputColor: string;
	    readonly inputColorPlaceholder: string;
	    buttonLineHeight: number;
	    lineHeightH1: number;
	    lineHeightH2: number;
	    lineHeightH3: number;
	    lineHeight: number;
	    listItemSelected: string;
	    listBg: string;
	    listBorderColor: string;
	    listDividerBg: string;
	    listBtnUnderlayColor: string;
	    listItemPadding: number;
	    listNoteColor: string;
	    listNoteSize: number;
	    defaultProgressColor: string;
	    inverseProgressColor: string;
	    radioBtnSize: number;
	    radioSelectedColorAndroid: string;
	    radioBtnLineHeight: number;
	    readonly radioColor: string;
	    segmentBackgroundColor: string;
	    segmentActiveBackgroundColor: string;
	    segmentTextColor: string;
	    segmentActiveTextColor: string;
	    segmentBorderColor: string;
	    segmentBorderColorMain: string;
	    defaultSpinnerColor: string;
	    inverseSpinnerColor: string;
	    tabBarDisabledTextColor: string;
	    tabDefaultBg: string;
	    topTabBarTextColor: string;
	    topTabBarActiveTextColor: string;
	    topTabBarBorderColor: string;
	    topTabBarActiveBorderColor: string;
	    tabBgColor: string;
	    tabFontSize: number;
	    textColor: string;
	    inverseTextColor: string;
	    noteFontSize: number;
	    readonly defaultTextColor: string;
	    titleFontfamily: string;
	    titleFontSize: number;
	    subTitleFontSize: number;
	    subtitleColor: string;
	    titleFontColor: string;
	    borderRadiusBase: number;
	    borderWidth: number;
	    contentPadding: number;
	    dropdownLinkColor: string;
	    inputLineHeight: number;
	    deviceWidth: number;
	    deviceHeight: number;
	    isIphoneX: boolean;
	    inputGroupRoundedBorderRadius: number;
	    Inset: {
	        portrait: {
	            topInset: number;
	            leftInset: number;
	            rightInset: number;
	            bottomInset: number;
	        };
	        landscape: {
	            topInset: number;
	            leftInset: number;
	            rightInset: number;
	            bottomInset: number;
	        };
	    };
	}) => {
	    elevation: number;
	    height: number;
	    flexDirection: string;
	    shadowColor: string | undefined;
	    shadowOffset: {
	        width: number;
	        height: number;
	    } | undefined;
	    shadowOpacity: number | undefined;
	    shadowRadius: number | undefined;
	    justifyContent: string;
	    borderBottomWidth: number;
	    borderColor: string;
	};
	export default _default;

}
declare module 'native-base/theme/components/View' {
	 const _default: (variables?: {
	    platformStyle: undefined;
	    platform: "android" | "ios" | "web" | "windows" | "macos";
	    accordionBorderColor: string;
	    accordionContentPadding: number;
	    accordionIconFontSize: number;
	    contentStyle: string;
	    expandedIconStyle: string;
	    headerStyle: string;
	    iconStyle: string;
	    elevation: number;
	    containerTouchableBackgroundColor: string;
	    innerTouchableBackgroundColor: string;
	    listItemHeight: number;
	    listItemBorderColor: string;
	    marginHorizontal: number;
	    marginLeft: number;
	    marginTop: number;
	    minHeight: number;
	    padding: number;
	    touchableTextColor: string;
	    androidRipple: boolean;
	    androidRippleColor: string;
	    androidRippleColorDark: string;
	    buttonUppercaseAndroidText: boolean;
	    badgeBg: string;
	    badgeColor: string;
	    badgePadding: number;
	    buttonFontFamily: string;
	    buttonDisabledBg: string;
	    buttonPadding: number;
	    buttonDefaultActiveOpacity: number;
	    buttonDefaultFlex: number;
	    buttonDefaultBorderRadius: number;
	    buttonDefaultBorderWidth: number;
	    readonly buttonPrimaryBg: string;
	    readonly buttonPrimaryColor: string;
	    readonly buttonInfoBg: string;
	    readonly buttonInfoColor: string;
	    readonly buttonSuccessBg: string;
	    readonly buttonSuccessColor: string;
	    readonly buttonDangerBg: string;
	    readonly buttonDangerColor: string;
	    readonly buttonWarningBg: string;
	    readonly buttonWarningColor: string;
	    readonly buttonTextSize: number;
	    readonly buttonTextSizeLarge: number;
	    readonly buttonTextSizeSmall: number;
	    readonly borderRadiusLarge: number;
	    readonly iconSizeLarge: number;
	    readonly iconSizeSmall: number;
	    cardDefaultBg: string;
	    cardBorderColor: string;
	    cardBorderRadius: number;
	    cardItemPadding: number;
	    CheckboxRadius: number;
	    CheckboxBorderWidth: number;
	    CheckboxPaddingLeft: number;
	    CheckboxPaddingBottom: number;
	    CheckboxIconSize: number;
	    CheckboxIconMarginTop: number | undefined;
	    CheckboxFontSize: number;
	    checkboxBgColor: string;
	    checkboxSize: number;
	    checkboxTickColor: string;
	    checkboxDefaultColor: string;
	    checkboxTextShadowRadius: number;
	    brandPrimary: string;
	    brandInfo: string;
	    brandSuccess: string;
	    brandDanger: string;
	    brandWarning: string;
	    brandDark: string;
	    brandLight: string;
	    containerBgColor: string;
	    datePickerFlex: number;
	    datePickerPadding: number;
	    datePickerTextColor: string;
	    datePickerBg: string;
	    fabBackgroundColor: string;
	    fabBorderRadius: number;
	    fabBottom: number;
	    fabButtonBorderRadius: number;
	    fabButtonHeight: number;
	    fabButtonLeft: number;
	    fabButtonMarginBottom: number;
	    fabContainerBottom: number;
	    fabDefaultPosition: number;
	    fabElevation: number;
	    fabIconColor: string;
	    fabIconSize: number;
	    fabShadowColor: string;
	    fabShadowOffsetHeight: number;
	    fabShadowOffsetWidth: number;
	    fabShadowOpacity: number;
	    fabShadowRadius: number;
	    fabWidth: number;
	    DefaultFontSize: number;
	    fontFamily: string;
	    fontSizeBase: number;
	    readonly fontSizeH1: number;
	    readonly fontSizeH2: number;
	    readonly fontSizeH3: number;
	    footerHeight: number;
	    footerDefaultBg: string;
	    footerPaddingBottom: number;
	    tabBarTextColor: string;
	    tabBarTextSize: number;
	    activeTab: string;
	    sTabBarActiveTextColor: string;
	    tabBarActiveTextColor: string;
	    tabActiveBgColor: string;
	    toolbarBtnColor: string;
	    toolbarDefaultBg: string;
	    toolbarHeight: number;
	    toolbarSearchIconSize: number;
	    toolbarInputColor: string;
	    searchBarHeight: number;
	    searchBarInputHeight: number;
	    toolbarBtnTextColor: string;
	    toolbarDefaultBorder: string;
	    iosStatusbar: string;
	    readonly statusBarColor: string;
	    readonly darkenHeader: string;
	    iconFamily: string;
	    iconFontSize: number;
	    iconHeaderSize: number;
	    inputFontSize: number;
	    inputBorderColor: string;
	    inputSuccessBorderColor: string;
	    inputErrorBorderColor: string;
	    inputHeightBase: number;
	    readonly inputColor: string;
	    readonly inputColorPlaceholder: string;
	    buttonLineHeight: number;
	    lineHeightH1: number;
	    lineHeightH2: number;
	    lineHeightH3: number;
	    lineHeight: number;
	    listItemSelected: string;
	    listBg: string;
	    listBorderColor: string;
	    listDividerBg: string;
	    listBtnUnderlayColor: string;
	    listItemPadding: number;
	    listNoteColor: string;
	    listNoteSize: number;
	    defaultProgressColor: string;
	    inverseProgressColor: string;
	    radioBtnSize: number;
	    radioSelectedColorAndroid: string;
	    radioBtnLineHeight: number;
	    readonly radioColor: string;
	    segmentBackgroundColor: string;
	    segmentActiveBackgroundColor: string;
	    segmentTextColor: string;
	    segmentActiveTextColor: string;
	    segmentBorderColor: string;
	    segmentBorderColorMain: string;
	    defaultSpinnerColor: string;
	    inverseSpinnerColor: string;
	    tabBarDisabledTextColor: string;
	    tabDefaultBg: string;
	    topTabBarTextColor: string;
	    topTabBarActiveTextColor: string;
	    topTabBarBorderColor: string;
	    topTabBarActiveBorderColor: string;
	    tabBgColor: string;
	    tabFontSize: number;
	    textColor: string;
	    inverseTextColor: string;
	    noteFontSize: number;
	    readonly defaultTextColor: string;
	    titleFontfamily: string;
	    titleFontSize: number;
	    subTitleFontSize: number;
	    subtitleColor: string;
	    titleFontColor: string;
	    borderRadiusBase: number;
	    borderWidth: number;
	    contentPadding: number;
	    dropdownLinkColor: string;
	    inputLineHeight: number;
	    deviceWidth: number;
	    deviceHeight: number;
	    isIphoneX: boolean;
	    inputGroupRoundedBorderRadius: number;
	    Inset: {
	        portrait: {
	            topInset: number;
	            leftInset: number;
	            rightInset: number;
	            bottomInset: number;
	        };
	        landscape: {
	            topInset: number;
	            leftInset: number;
	            rightInset: number;
	            bottomInset: number;
	        };
	    };
	}) => {
	    '.padder': {
	        padding: number;
	    };
	};
	export default _default;

}
declare module 'native-base/theme/components/TabHeading' {
	 const _default: (variables?: {
	    platformStyle: undefined;
	    platform: "android" | "ios" | "web" | "windows" | "macos";
	    accordionBorderColor: string;
	    accordionContentPadding: number;
	    accordionIconFontSize: number;
	    contentStyle: string;
	    expandedIconStyle: string;
	    headerStyle: string;
	    iconStyle: string;
	    elevation: number;
	    containerTouchableBackgroundColor: string;
	    innerTouchableBackgroundColor: string;
	    listItemHeight: number;
	    listItemBorderColor: string;
	    marginHorizontal: number;
	    marginLeft: number;
	    marginTop: number;
	    minHeight: number;
	    padding: number;
	    touchableTextColor: string;
	    androidRipple: boolean;
	    androidRippleColor: string;
	    androidRippleColorDark: string;
	    buttonUppercaseAndroidText: boolean;
	    badgeBg: string;
	    badgeColor: string;
	    badgePadding: number;
	    buttonFontFamily: string;
	    buttonDisabledBg: string;
	    buttonPadding: number;
	    buttonDefaultActiveOpacity: number;
	    buttonDefaultFlex: number;
	    buttonDefaultBorderRadius: number;
	    buttonDefaultBorderWidth: number;
	    readonly buttonPrimaryBg: string;
	    readonly buttonPrimaryColor: string;
	    readonly buttonInfoBg: string;
	    readonly buttonInfoColor: string;
	    readonly buttonSuccessBg: string;
	    readonly buttonSuccessColor: string;
	    readonly buttonDangerBg: string;
	    readonly buttonDangerColor: string;
	    readonly buttonWarningBg: string;
	    readonly buttonWarningColor: string;
	    readonly buttonTextSize: number;
	    readonly buttonTextSizeLarge: number;
	    readonly buttonTextSizeSmall: number;
	    readonly borderRadiusLarge: number;
	    readonly iconSizeLarge: number;
	    readonly iconSizeSmall: number;
	    cardDefaultBg: string;
	    cardBorderColor: string;
	    cardBorderRadius: number;
	    cardItemPadding: number;
	    CheckboxRadius: number;
	    CheckboxBorderWidth: number;
	    CheckboxPaddingLeft: number;
	    CheckboxPaddingBottom: number;
	    CheckboxIconSize: number;
	    CheckboxIconMarginTop: number | undefined;
	    CheckboxFontSize: number;
	    checkboxBgColor: string;
	    checkboxSize: number;
	    checkboxTickColor: string;
	    checkboxDefaultColor: string;
	    checkboxTextShadowRadius: number;
	    brandPrimary: string;
	    brandInfo: string;
	    brandSuccess: string;
	    brandDanger: string;
	    brandWarning: string;
	    brandDark: string;
	    brandLight: string;
	    containerBgColor: string;
	    datePickerFlex: number;
	    datePickerPadding: number;
	    datePickerTextColor: string;
	    datePickerBg: string;
	    fabBackgroundColor: string;
	    fabBorderRadius: number;
	    fabBottom: number;
	    fabButtonBorderRadius: number;
	    fabButtonHeight: number;
	    fabButtonLeft: number;
	    fabButtonMarginBottom: number;
	    fabContainerBottom: number;
	    fabDefaultPosition: number;
	    fabElevation: number;
	    fabIconColor: string;
	    fabIconSize: number;
	    fabShadowColor: string;
	    fabShadowOffsetHeight: number;
	    fabShadowOffsetWidth: number;
	    fabShadowOpacity: number;
	    fabShadowRadius: number;
	    fabWidth: number;
	    DefaultFontSize: number;
	    fontFamily: string;
	    fontSizeBase: number;
	    readonly fontSizeH1: number;
	    readonly fontSizeH2: number;
	    readonly fontSizeH3: number;
	    footerHeight: number;
	    footerDefaultBg: string;
	    footerPaddingBottom: number;
	    tabBarTextColor: string;
	    tabBarTextSize: number;
	    activeTab: string;
	    sTabBarActiveTextColor: string;
	    tabBarActiveTextColor: string;
	    tabActiveBgColor: string;
	    toolbarBtnColor: string;
	    toolbarDefaultBg: string;
	    toolbarHeight: number;
	    toolbarSearchIconSize: number;
	    toolbarInputColor: string;
	    searchBarHeight: number;
	    searchBarInputHeight: number;
	    toolbarBtnTextColor: string;
	    toolbarDefaultBorder: string;
	    iosStatusbar: string;
	    readonly statusBarColor: string;
	    readonly darkenHeader: string;
	    iconFamily: string;
	    iconFontSize: number;
	    iconHeaderSize: number;
	    inputFontSize: number;
	    inputBorderColor: string;
	    inputSuccessBorderColor: string;
	    inputErrorBorderColor: string;
	    inputHeightBase: number;
	    readonly inputColor: string;
	    readonly inputColorPlaceholder: string;
	    buttonLineHeight: number;
	    lineHeightH1: number;
	    lineHeightH2: number;
	    lineHeightH3: number;
	    lineHeight: number;
	    listItemSelected: string;
	    listBg: string;
	    listBorderColor: string;
	    listDividerBg: string;
	    listBtnUnderlayColor: string;
	    listItemPadding: number;
	    listNoteColor: string;
	    listNoteSize: number;
	    defaultProgressColor: string;
	    inverseProgressColor: string;
	    radioBtnSize: number;
	    radioSelectedColorAndroid: string;
	    radioBtnLineHeight: number;
	    readonly radioColor: string;
	    segmentBackgroundColor: string;
	    segmentActiveBackgroundColor: string;
	    segmentTextColor: string;
	    segmentActiveTextColor: string;
	    segmentBorderColor: string;
	    segmentBorderColorMain: string;
	    defaultSpinnerColor: string;
	    inverseSpinnerColor: string;
	    tabBarDisabledTextColor: string;
	    tabDefaultBg: string;
	    topTabBarTextColor: string;
	    topTabBarActiveTextColor: string;
	    topTabBarBorderColor: string;
	    topTabBarActiveBorderColor: string;
	    tabBgColor: string;
	    tabFontSize: number;
	    textColor: string;
	    inverseTextColor: string;
	    noteFontSize: number;
	    readonly defaultTextColor: string;
	    titleFontfamily: string;
	    titleFontSize: number;
	    subTitleFontSize: number;
	    subtitleColor: string;
	    titleFontColor: string;
	    borderRadiusBase: number;
	    borderWidth: number;
	    contentPadding: number;
	    dropdownLinkColor: string;
	    inputLineHeight: number;
	    deviceWidth: number;
	    deviceHeight: number;
	    isIphoneX: boolean;
	    inputGroupRoundedBorderRadius: number;
	    Inset: {
	        portrait: {
	            topInset: number;
	            leftInset: number;
	            rightInset: number;
	            bottomInset: number;
	        };
	        landscape: {
	            topInset: number;
	            leftInset: number;
	            rightInset: number;
	            bottomInset: number;
	        };
	    };
	}) => {
	    flexDirection: string;
	    backgroundColor: string;
	    flex: number;
	    alignItems: string;
	    justifyContent: string;
	    '.scrollable': {
	        paddingHorizontal: number;
	        flex: number;
	        minWidth: number | undefined;
	    };
	    'NativeBase.Text': {
	        color: string;
	        marginHorizontal: number;
	    };
	    'NativeBase.Icon': {
	        color: string;
	        fontSize: number | undefined;
	    };
	    '.active': {
	        'NativeBase.Text': {
	            color: string;
	            fontWeight: string;
	        };
	        'NativeBase.Icon': {
	            color: string;
	        };
	    };
	};
	export default _default;

}
declare module 'native-base/theme/components/Icon' {
	 const _default: (variables?: {
	    platformStyle: undefined;
	    platform: "android" | "ios" | "web" | "windows" | "macos";
	    accordionBorderColor: string;
	    accordionContentPadding: number;
	    accordionIconFontSize: number;
	    contentStyle: string;
	    expandedIconStyle: string;
	    headerStyle: string;
	    iconStyle: string;
	    elevation: number;
	    containerTouchableBackgroundColor: string;
	    innerTouchableBackgroundColor: string;
	    listItemHeight: number;
	    listItemBorderColor: string;
	    marginHorizontal: number;
	    marginLeft: number;
	    marginTop: number;
	    minHeight: number;
	    padding: number;
	    touchableTextColor: string;
	    androidRipple: boolean;
	    androidRippleColor: string;
	    androidRippleColorDark: string;
	    buttonUppercaseAndroidText: boolean;
	    badgeBg: string;
	    badgeColor: string;
	    badgePadding: number;
	    buttonFontFamily: string;
	    buttonDisabledBg: string;
	    buttonPadding: number;
	    buttonDefaultActiveOpacity: number;
	    buttonDefaultFlex: number;
	    buttonDefaultBorderRadius: number;
	    buttonDefaultBorderWidth: number;
	    readonly buttonPrimaryBg: string;
	    readonly buttonPrimaryColor: string;
	    readonly buttonInfoBg: string;
	    readonly buttonInfoColor: string;
	    readonly buttonSuccessBg: string;
	    readonly buttonSuccessColor: string;
	    readonly buttonDangerBg: string;
	    readonly buttonDangerColor: string;
	    readonly buttonWarningBg: string;
	    readonly buttonWarningColor: string;
	    readonly buttonTextSize: number;
	    readonly buttonTextSizeLarge: number;
	    readonly buttonTextSizeSmall: number;
	    readonly borderRadiusLarge: number;
	    readonly iconSizeLarge: number;
	    readonly iconSizeSmall: number;
	    cardDefaultBg: string;
	    cardBorderColor: string;
	    cardBorderRadius: number;
	    cardItemPadding: number;
	    CheckboxRadius: number;
	    CheckboxBorderWidth: number;
	    CheckboxPaddingLeft: number;
	    CheckboxPaddingBottom: number;
	    CheckboxIconSize: number;
	    CheckboxIconMarginTop: number | undefined;
	    CheckboxFontSize: number;
	    checkboxBgColor: string;
	    checkboxSize: number;
	    checkboxTickColor: string;
	    checkboxDefaultColor: string;
	    checkboxTextShadowRadius: number;
	    brandPrimary: string;
	    brandInfo: string;
	    brandSuccess: string;
	    brandDanger: string;
	    brandWarning: string;
	    brandDark: string;
	    brandLight: string;
	    containerBgColor: string;
	    datePickerFlex: number;
	    datePickerPadding: number;
	    datePickerTextColor: string;
	    datePickerBg: string;
	    fabBackgroundColor: string;
	    fabBorderRadius: number;
	    fabBottom: number;
	    fabButtonBorderRadius: number;
	    fabButtonHeight: number;
	    fabButtonLeft: number;
	    fabButtonMarginBottom: number;
	    fabContainerBottom: number;
	    fabDefaultPosition: number;
	    fabElevation: number;
	    fabIconColor: string;
	    fabIconSize: number;
	    fabShadowColor: string;
	    fabShadowOffsetHeight: number;
	    fabShadowOffsetWidth: number;
	    fabShadowOpacity: number;
	    fabShadowRadius: number;
	    fabWidth: number;
	    DefaultFontSize: number;
	    fontFamily: string;
	    fontSizeBase: number;
	    readonly fontSizeH1: number;
	    readonly fontSizeH2: number;
	    readonly fontSizeH3: number;
	    footerHeight: number;
	    footerDefaultBg: string;
	    footerPaddingBottom: number;
	    tabBarTextColor: string;
	    tabBarTextSize: number;
	    activeTab: string;
	    sTabBarActiveTextColor: string;
	    tabBarActiveTextColor: string;
	    tabActiveBgColor: string;
	    toolbarBtnColor: string;
	    toolbarDefaultBg: string;
	    toolbarHeight: number;
	    toolbarSearchIconSize: number;
	    toolbarInputColor: string;
	    searchBarHeight: number;
	    searchBarInputHeight: number;
	    toolbarBtnTextColor: string;
	    toolbarDefaultBorder: string;
	    iosStatusbar: string;
	    readonly statusBarColor: string;
	    readonly darkenHeader: string;
	    iconFamily: string;
	    iconFontSize: number;
	    iconHeaderSize: number;
	    inputFontSize: number;
	    inputBorderColor: string;
	    inputSuccessBorderColor: string;
	    inputErrorBorderColor: string;
	    inputHeightBase: number;
	    readonly inputColor: string;
	    readonly inputColorPlaceholder: string;
	    buttonLineHeight: number;
	    lineHeightH1: number;
	    lineHeightH2: number;
	    lineHeightH3: number;
	    lineHeight: number;
	    listItemSelected: string;
	    listBg: string;
	    listBorderColor: string;
	    listDividerBg: string;
	    listBtnUnderlayColor: string;
	    listItemPadding: number;
	    listNoteColor: string;
	    listNoteSize: number;
	    defaultProgressColor: string;
	    inverseProgressColor: string;
	    radioBtnSize: number;
	    radioSelectedColorAndroid: string;
	    radioBtnLineHeight: number;
	    readonly radioColor: string;
	    segmentBackgroundColor: string;
	    segmentActiveBackgroundColor: string;
	    segmentTextColor: string;
	    segmentActiveTextColor: string;
	    segmentBorderColor: string;
	    segmentBorderColorMain: string;
	    defaultSpinnerColor: string;
	    inverseSpinnerColor: string;
	    tabBarDisabledTextColor: string;
	    tabDefaultBg: string;
	    topTabBarTextColor: string;
	    topTabBarActiveTextColor: string;
	    topTabBarBorderColor: string;
	    topTabBarActiveBorderColor: string;
	    tabBgColor: string;
	    tabFontSize: number;
	    textColor: string;
	    inverseTextColor: string;
	    noteFontSize: number;
	    readonly defaultTextColor: string;
	    titleFontfamily: string;
	    titleFontSize: number;
	    subTitleFontSize: number;
	    subtitleColor: string;
	    titleFontColor: string;
	    borderRadiusBase: number;
	    borderWidth: number;
	    contentPadding: number;
	    dropdownLinkColor: string;
	    inputLineHeight: number;
	    deviceWidth: number;
	    deviceHeight: number;
	    isIphoneX: boolean;
	    inputGroupRoundedBorderRadius: number;
	    Inset: {
	        portrait: {
	            topInset: number;
	            leftInset: number;
	            rightInset: number;
	            bottomInset: number;
	        };
	        landscape: {
	            topInset: number;
	            leftInset: number;
	            rightInset: number;
	            bottomInset: number;
	        };
	    };
	}) => {
	    fontSize: number;
	    color: string;
	};
	export default _default;

}
declare module 'native-base/theme/components/Input' {
	 const _default: (variables?: {
	    platformStyle: undefined;
	    platform: "android" | "ios" | "web" | "windows" | "macos";
	    accordionBorderColor: string;
	    accordionContentPadding: number;
	    accordionIconFontSize: number;
	    contentStyle: string;
	    expandedIconStyle: string;
	    headerStyle: string;
	    iconStyle: string;
	    elevation: number;
	    containerTouchableBackgroundColor: string;
	    innerTouchableBackgroundColor: string;
	    listItemHeight: number;
	    listItemBorderColor: string;
	    marginHorizontal: number;
	    marginLeft: number;
	    marginTop: number;
	    minHeight: number;
	    padding: number;
	    touchableTextColor: string;
	    androidRipple: boolean;
	    androidRippleColor: string;
	    androidRippleColorDark: string;
	    buttonUppercaseAndroidText: boolean;
	    badgeBg: string;
	    badgeColor: string;
	    badgePadding: number;
	    buttonFontFamily: string;
	    buttonDisabledBg: string;
	    buttonPadding: number;
	    buttonDefaultActiveOpacity: number;
	    buttonDefaultFlex: number;
	    buttonDefaultBorderRadius: number;
	    buttonDefaultBorderWidth: number;
	    readonly buttonPrimaryBg: string;
	    readonly buttonPrimaryColor: string;
	    readonly buttonInfoBg: string;
	    readonly buttonInfoColor: string;
	    readonly buttonSuccessBg: string;
	    readonly buttonSuccessColor: string;
	    readonly buttonDangerBg: string;
	    readonly buttonDangerColor: string;
	    readonly buttonWarningBg: string;
	    readonly buttonWarningColor: string;
	    readonly buttonTextSize: number;
	    readonly buttonTextSizeLarge: number;
	    readonly buttonTextSizeSmall: number;
	    readonly borderRadiusLarge: number;
	    readonly iconSizeLarge: number;
	    readonly iconSizeSmall: number;
	    cardDefaultBg: string;
	    cardBorderColor: string;
	    cardBorderRadius: number;
	    cardItemPadding: number;
	    CheckboxRadius: number;
	    CheckboxBorderWidth: number;
	    CheckboxPaddingLeft: number;
	    CheckboxPaddingBottom: number;
	    CheckboxIconSize: number;
	    CheckboxIconMarginTop: number | undefined;
	    CheckboxFontSize: number;
	    checkboxBgColor: string;
	    checkboxSize: number;
	    checkboxTickColor: string;
	    checkboxDefaultColor: string;
	    checkboxTextShadowRadius: number;
	    brandPrimary: string;
	    brandInfo: string;
	    brandSuccess: string;
	    brandDanger: string;
	    brandWarning: string;
	    brandDark: string;
	    brandLight: string;
	    containerBgColor: string;
	    datePickerFlex: number;
	    datePickerPadding: number;
	    datePickerTextColor: string;
	    datePickerBg: string;
	    fabBackgroundColor: string;
	    fabBorderRadius: number;
	    fabBottom: number;
	    fabButtonBorderRadius: number;
	    fabButtonHeight: number;
	    fabButtonLeft: number;
	    fabButtonMarginBottom: number;
	    fabContainerBottom: number;
	    fabDefaultPosition: number;
	    fabElevation: number;
	    fabIconColor: string;
	    fabIconSize: number;
	    fabShadowColor: string;
	    fabShadowOffsetHeight: number;
	    fabShadowOffsetWidth: number;
	    fabShadowOpacity: number;
	    fabShadowRadius: number;
	    fabWidth: number;
	    DefaultFontSize: number;
	    fontFamily: string;
	    fontSizeBase: number;
	    readonly fontSizeH1: number;
	    readonly fontSizeH2: number;
	    readonly fontSizeH3: number;
	    footerHeight: number;
	    footerDefaultBg: string;
	    footerPaddingBottom: number;
	    tabBarTextColor: string;
	    tabBarTextSize: number;
	    activeTab: string;
	    sTabBarActiveTextColor: string;
	    tabBarActiveTextColor: string;
	    tabActiveBgColor: string;
	    toolbarBtnColor: string;
	    toolbarDefaultBg: string;
	    toolbarHeight: number;
	    toolbarSearchIconSize: number;
	    toolbarInputColor: string;
	    searchBarHeight: number;
	    searchBarInputHeight: number;
	    toolbarBtnTextColor: string;
	    toolbarDefaultBorder: string;
	    iosStatusbar: string;
	    readonly statusBarColor: string;
	    readonly darkenHeader: string;
	    iconFamily: string;
	    iconFontSize: number;
	    iconHeaderSize: number;
	    inputFontSize: number;
	    inputBorderColor: string;
	    inputSuccessBorderColor: string;
	    inputErrorBorderColor: string;
	    inputHeightBase: number;
	    readonly inputColor: string;
	    readonly inputColorPlaceholder: string;
	    buttonLineHeight: number;
	    lineHeightH1: number;
	    lineHeightH2: number;
	    lineHeightH3: number;
	    lineHeight: number;
	    listItemSelected: string;
	    listBg: string;
	    listBorderColor: string;
	    listDividerBg: string;
	    listBtnUnderlayColor: string;
	    listItemPadding: number;
	    listNoteColor: string;
	    listNoteSize: number;
	    defaultProgressColor: string;
	    inverseProgressColor: string;
	    radioBtnSize: number;
	    radioSelectedColorAndroid: string;
	    radioBtnLineHeight: number;
	    readonly radioColor: string;
	    segmentBackgroundColor: string;
	    segmentActiveBackgroundColor: string;
	    segmentTextColor: string;
	    segmentActiveTextColor: string;
	    segmentBorderColor: string;
	    segmentBorderColorMain: string;
	    defaultSpinnerColor: string;
	    inverseSpinnerColor: string;
	    tabBarDisabledTextColor: string;
	    tabDefaultBg: string;
	    topTabBarTextColor: string;
	    topTabBarActiveTextColor: string;
	    topTabBarBorderColor: string;
	    topTabBarActiveBorderColor: string;
	    tabBgColor: string;
	    tabFontSize: number;
	    textColor: string;
	    inverseTextColor: string;
	    noteFontSize: number;
	    readonly defaultTextColor: string;
	    titleFontfamily: string;
	    titleFontSize: number;
	    subTitleFontSize: number;
	    subtitleColor: string;
	    titleFontColor: string;
	    borderRadiusBase: number;
	    borderWidth: number;
	    contentPadding: number;
	    dropdownLinkColor: string;
	    inputLineHeight: number;
	    deviceWidth: number;
	    deviceHeight: number;
	    isIphoneX: boolean;
	    inputGroupRoundedBorderRadius: number;
	    Inset: {
	        portrait: {
	            topInset: number;
	            leftInset: number;
	            rightInset: number;
	            bottomInset: number;
	        };
	        landscape: {
	            topInset: number;
	            leftInset: number;
	            rightInset: number;
	            bottomInset: number;
	        };
	    };
	}) => {
	    '.multiline': {
	        height: null;
	    };
	    height: number;
	    color: string;
	    paddingLeft: number;
	    paddingRight: number;
	    flex: number;
	    fontSize: number;
	};
	export default _default;

}
declare module 'native-base/theme/components/SwipeRow' {
	 const _default: () => {
	    'NativeBase.ListItem': {
	        '.list': {
	            backgroundColor: string;
	        };
	        marginLeft: number;
	    };
	    'NativeBase.Left': {
	        flex: number;
	        alignSelf: null;
	        alignItems: null;
	        'NativeBase.Button': {
	            flex: number;
	            alignItems: string;
	            justifyContent: string;
	            alignSelf: string;
	            borderRadius: number;
	        };
	    };
	    'NativeBase.Right': {
	        flex: number;
	        alignSelf: null;
	        alignItems: null;
	        'NativeBase.Button': {
	            flex: number;
	            alignItems: string;
	            justifyContent: string;
	            alignSelf: string;
	            borderRadius: number;
	        };
	    };
	    'NativeBase.Button': {
	        flex: number;
	        height: null;
	        alignItems: string;
	        justifyContent: string;
	        alignSelf: string;
	        borderRadius: number;
	    };
	};
	export default _default;

}
declare module 'native-base/theme/components/Segment' {
	 const _default: (variables?: {
	    platformStyle: undefined;
	    platform: "android" | "ios" | "web" | "windows" | "macos";
	    accordionBorderColor: string;
	    accordionContentPadding: number;
	    accordionIconFontSize: number;
	    contentStyle: string;
	    expandedIconStyle: string;
	    headerStyle: string;
	    iconStyle: string;
	    elevation: number;
	    containerTouchableBackgroundColor: string;
	    innerTouchableBackgroundColor: string;
	    listItemHeight: number;
	    listItemBorderColor: string;
	    marginHorizontal: number;
	    marginLeft: number;
	    marginTop: number;
	    minHeight: number;
	    padding: number;
	    touchableTextColor: string;
	    androidRipple: boolean;
	    androidRippleColor: string;
	    androidRippleColorDark: string;
	    buttonUppercaseAndroidText: boolean;
	    badgeBg: string;
	    badgeColor: string;
	    badgePadding: number;
	    buttonFontFamily: string;
	    buttonDisabledBg: string;
	    buttonPadding: number;
	    buttonDefaultActiveOpacity: number;
	    buttonDefaultFlex: number;
	    buttonDefaultBorderRadius: number;
	    buttonDefaultBorderWidth: number;
	    readonly buttonPrimaryBg: string;
	    readonly buttonPrimaryColor: string;
	    readonly buttonInfoBg: string;
	    readonly buttonInfoColor: string;
	    readonly buttonSuccessBg: string;
	    readonly buttonSuccessColor: string;
	    readonly buttonDangerBg: string;
	    readonly buttonDangerColor: string;
	    readonly buttonWarningBg: string;
	    readonly buttonWarningColor: string;
	    readonly buttonTextSize: number;
	    readonly buttonTextSizeLarge: number;
	    readonly buttonTextSizeSmall: number;
	    readonly borderRadiusLarge: number;
	    readonly iconSizeLarge: number;
	    readonly iconSizeSmall: number;
	    cardDefaultBg: string;
	    cardBorderColor: string;
	    cardBorderRadius: number;
	    cardItemPadding: number;
	    CheckboxRadius: number;
	    CheckboxBorderWidth: number;
	    CheckboxPaddingLeft: number;
	    CheckboxPaddingBottom: number;
	    CheckboxIconSize: number;
	    CheckboxIconMarginTop: number | undefined;
	    CheckboxFontSize: number;
	    checkboxBgColor: string;
	    checkboxSize: number;
	    checkboxTickColor: string;
	    checkboxDefaultColor: string;
	    checkboxTextShadowRadius: number;
	    brandPrimary: string;
	    brandInfo: string;
	    brandSuccess: string;
	    brandDanger: string;
	    brandWarning: string;
	    brandDark: string;
	    brandLight: string;
	    containerBgColor: string;
	    datePickerFlex: number;
	    datePickerPadding: number;
	    datePickerTextColor: string;
	    datePickerBg: string;
	    fabBackgroundColor: string;
	    fabBorderRadius: number;
	    fabBottom: number;
	    fabButtonBorderRadius: number;
	    fabButtonHeight: number;
	    fabButtonLeft: number;
	    fabButtonMarginBottom: number;
	    fabContainerBottom: number;
	    fabDefaultPosition: number;
	    fabElevation: number;
	    fabIconColor: string;
	    fabIconSize: number;
	    fabShadowColor: string;
	    fabShadowOffsetHeight: number;
	    fabShadowOffsetWidth: number;
	    fabShadowOpacity: number;
	    fabShadowRadius: number;
	    fabWidth: number;
	    DefaultFontSize: number;
	    fontFamily: string;
	    fontSizeBase: number;
	    readonly fontSizeH1: number;
	    readonly fontSizeH2: number;
	    readonly fontSizeH3: number;
	    footerHeight: number;
	    footerDefaultBg: string;
	    footerPaddingBottom: number;
	    tabBarTextColor: string;
	    tabBarTextSize: number;
	    activeTab: string;
	    sTabBarActiveTextColor: string;
	    tabBarActiveTextColor: string;
	    tabActiveBgColor: string;
	    toolbarBtnColor: string;
	    toolbarDefaultBg: string;
	    toolbarHeight: number;
	    toolbarSearchIconSize: number;
	    toolbarInputColor: string;
	    searchBarHeight: number;
	    searchBarInputHeight: number;
	    toolbarBtnTextColor: string;
	    toolbarDefaultBorder: string;
	    iosStatusbar: string;
	    readonly statusBarColor: string;
	    readonly darkenHeader: string;
	    iconFamily: string;
	    iconFontSize: number;
	    iconHeaderSize: number;
	    inputFontSize: number;
	    inputBorderColor: string;
	    inputSuccessBorderColor: string;
	    inputErrorBorderColor: string;
	    inputHeightBase: number;
	    readonly inputColor: string;
	    readonly inputColorPlaceholder: string;
	    buttonLineHeight: number;
	    lineHeightH1: number;
	    lineHeightH2: number;
	    lineHeightH3: number;
	    lineHeight: number;
	    listItemSelected: string;
	    listBg: string;
	    listBorderColor: string;
	    listDividerBg: string;
	    listBtnUnderlayColor: string;
	    listItemPadding: number;
	    listNoteColor: string;
	    listNoteSize: number;
	    defaultProgressColor: string;
	    inverseProgressColor: string;
	    radioBtnSize: number;
	    radioSelectedColorAndroid: string;
	    radioBtnLineHeight: number;
	    readonly radioColor: string;
	    segmentBackgroundColor: string;
	    segmentActiveBackgroundColor: string;
	    segmentTextColor: string;
	    segmentActiveTextColor: string;
	    segmentBorderColor: string;
	    segmentBorderColorMain: string;
	    defaultSpinnerColor: string;
	    inverseSpinnerColor: string;
	    tabBarDisabledTextColor: string;
	    tabDefaultBg: string;
	    topTabBarTextColor: string;
	    topTabBarActiveTextColor: string;
	    topTabBarBorderColor: string;
	    topTabBarActiveBorderColor: string;
	    tabBgColor: string;
	    tabFontSize: number;
	    textColor: string;
	    inverseTextColor: string;
	    noteFontSize: number;
	    readonly defaultTextColor: string;
	    titleFontfamily: string;
	    titleFontSize: number;
	    subTitleFontSize: number;
	    subtitleColor: string;
	    titleFontColor: string;
	    borderRadiusBase: number;
	    borderWidth: number;
	    contentPadding: number;
	    dropdownLinkColor: string;
	    inputLineHeight: number;
	    deviceWidth: number;
	    deviceHeight: number;
	    isIphoneX: boolean;
	    inputGroupRoundedBorderRadius: number;
	    Inset: {
	        portrait: {
	            topInset: number;
	            leftInset: number;
	            rightInset: number;
	            bottomInset: number;
	        };
	        landscape: {
	            topInset: number;
	            leftInset: number;
	            rightInset: number;
	            bottomInset: number;
	        };
	    };
	}) => {
	    height: number;
	    borderColor: string;
	    flexDirection: string;
	    justifyContent: string;
	    backgroundColor: string;
	    'NativeBase.Button': {
	        alignSelf: string;
	        borderRadius: number;
	        paddingTop: number;
	        paddingBottom: number;
	        height: number;
	        backgroundColor: string;
	        borderWidth: number;
	        borderLeftWidth: number;
	        borderColor: string;
	        elevation: number;
	        '.active': {
	            backgroundColor: string;
	            'NativeBase.Text': {
	                color: string;
	            };
	            'NativeBase.Icon': {
	                color: string;
	            };
	        };
	        '.first': {
	            borderTopLeftRadius: number | undefined;
	            borderBottomLeftRadius: number | undefined;
	            borderLeftWidth: number;
	        };
	        '.last': {
	            borderTopRightRadius: number | undefined;
	            borderBottomRightRadius: number | undefined;
	        };
	        'NativeBase.Text': {
	            color: string;
	            fontSize: number;
	        };
	        'NativeBase.Icon': {
	            fontSize: number;
	            paddingTop: number;
	            color: string;
	        };
	    };
	};
	export default _default;

}
declare module 'native-base/theme/components/Spinner' {
	 const _default: () => {
	    height: number;
	};
	export default _default;

}
declare module 'native-base/theme/components/CardItem' {
	 const _default: (variables?: {
	    platformStyle: undefined;
	    platform: "android" | "ios" | "web" | "windows" | "macos";
	    accordionBorderColor: string;
	    accordionContentPadding: number;
	    accordionIconFontSize: number;
	    contentStyle: string;
	    expandedIconStyle: string;
	    headerStyle: string;
	    iconStyle: string;
	    elevation: number;
	    containerTouchableBackgroundColor: string;
	    innerTouchableBackgroundColor: string;
	    listItemHeight: number;
	    listItemBorderColor: string;
	    marginHorizontal: number;
	    marginLeft: number;
	    marginTop: number;
	    minHeight: number;
	    padding: number;
	    touchableTextColor: string;
	    androidRipple: boolean;
	    androidRippleColor: string;
	    androidRippleColorDark: string;
	    buttonUppercaseAndroidText: boolean;
	    badgeBg: string;
	    badgeColor: string;
	    badgePadding: number;
	    buttonFontFamily: string;
	    buttonDisabledBg: string;
	    buttonPadding: number;
	    buttonDefaultActiveOpacity: number;
	    buttonDefaultFlex: number;
	    buttonDefaultBorderRadius: number;
	    buttonDefaultBorderWidth: number;
	    readonly buttonPrimaryBg: string;
	    readonly buttonPrimaryColor: string;
	    readonly buttonInfoBg: string;
	    readonly buttonInfoColor: string;
	    readonly buttonSuccessBg: string;
	    readonly buttonSuccessColor: string;
	    readonly buttonDangerBg: string;
	    readonly buttonDangerColor: string;
	    readonly buttonWarningBg: string;
	    readonly buttonWarningColor: string;
	    readonly buttonTextSize: number;
	    readonly buttonTextSizeLarge: number;
	    readonly buttonTextSizeSmall: number;
	    readonly borderRadiusLarge: number;
	    readonly iconSizeLarge: number;
	    readonly iconSizeSmall: number;
	    cardDefaultBg: string;
	    cardBorderColor: string;
	    cardBorderRadius: number;
	    cardItemPadding: number;
	    CheckboxRadius: number;
	    CheckboxBorderWidth: number;
	    CheckboxPaddingLeft: number;
	    CheckboxPaddingBottom: number;
	    CheckboxIconSize: number;
	    CheckboxIconMarginTop: number | undefined;
	    CheckboxFontSize: number;
	    checkboxBgColor: string;
	    checkboxSize: number;
	    checkboxTickColor: string;
	    checkboxDefaultColor: string;
	    checkboxTextShadowRadius: number;
	    brandPrimary: string;
	    brandInfo: string;
	    brandSuccess: string;
	    brandDanger: string;
	    brandWarning: string;
	    brandDark: string;
	    brandLight: string;
	    containerBgColor: string;
	    datePickerFlex: number;
	    datePickerPadding: number;
	    datePickerTextColor: string;
	    datePickerBg: string;
	    fabBackgroundColor: string;
	    fabBorderRadius: number;
	    fabBottom: number;
	    fabButtonBorderRadius: number;
	    fabButtonHeight: number;
	    fabButtonLeft: number;
	    fabButtonMarginBottom: number;
	    fabContainerBottom: number;
	    fabDefaultPosition: number;
	    fabElevation: number;
	    fabIconColor: string;
	    fabIconSize: number;
	    fabShadowColor: string;
	    fabShadowOffsetHeight: number;
	    fabShadowOffsetWidth: number;
	    fabShadowOpacity: number;
	    fabShadowRadius: number;
	    fabWidth: number;
	    DefaultFontSize: number;
	    fontFamily: string;
	    fontSizeBase: number;
	    readonly fontSizeH1: number;
	    readonly fontSizeH2: number;
	    readonly fontSizeH3: number;
	    footerHeight: number;
	    footerDefaultBg: string;
	    footerPaddingBottom: number;
	    tabBarTextColor: string;
	    tabBarTextSize: number;
	    activeTab: string;
	    sTabBarActiveTextColor: string;
	    tabBarActiveTextColor: string;
	    tabActiveBgColor: string;
	    toolbarBtnColor: string;
	    toolbarDefaultBg: string;
	    toolbarHeight: number;
	    toolbarSearchIconSize: number;
	    toolbarInputColor: string;
	    searchBarHeight: number;
	    searchBarInputHeight: number;
	    toolbarBtnTextColor: string;
	    toolbarDefaultBorder: string;
	    iosStatusbar: string;
	    readonly statusBarColor: string;
	    readonly darkenHeader: string;
	    iconFamily: string;
	    iconFontSize: number;
	    iconHeaderSize: number;
	    inputFontSize: number;
	    inputBorderColor: string;
	    inputSuccessBorderColor: string;
	    inputErrorBorderColor: string;
	    inputHeightBase: number;
	    readonly inputColor: string;
	    readonly inputColorPlaceholder: string;
	    buttonLineHeight: number;
	    lineHeightH1: number;
	    lineHeightH2: number;
	    lineHeightH3: number;
	    lineHeight: number;
	    listItemSelected: string;
	    listBg: string;
	    listBorderColor: string;
	    listDividerBg: string;
	    listBtnUnderlayColor: string;
	    listItemPadding: number;
	    listNoteColor: string;
	    listNoteSize: number;
	    defaultProgressColor: string;
	    inverseProgressColor: string;
	    radioBtnSize: number;
	    radioSelectedColorAndroid: string;
	    radioBtnLineHeight: number;
	    readonly radioColor: string;
	    segmentBackgroundColor: string;
	    segmentActiveBackgroundColor: string;
	    segmentTextColor: string;
	    segmentActiveTextColor: string;
	    segmentBorderColor: string;
	    segmentBorderColorMain: string;
	    defaultSpinnerColor: string;
	    inverseSpinnerColor: string;
	    tabBarDisabledTextColor: string;
	    tabDefaultBg: string;
	    topTabBarTextColor: string;
	    topTabBarActiveTextColor: string;
	    topTabBarBorderColor: string;
	    topTabBarActiveBorderColor: string;
	    tabBgColor: string;
	    tabFontSize: number;
	    textColor: string;
	    inverseTextColor: string;
	    noteFontSize: number;
	    readonly defaultTextColor: string;
	    titleFontfamily: string;
	    titleFontSize: number;
	    subTitleFontSize: number;
	    subtitleColor: string;
	    titleFontColor: string;
	    borderRadiusBase: number;
	    borderWidth: number;
	    contentPadding: number;
	    dropdownLinkColor: string;
	    inputLineHeight: number;
	    deviceWidth: number;
	    deviceHeight: number;
	    isIphoneX: boolean;
	    inputGroupRoundedBorderRadius: number;
	    Inset: {
	        portrait: {
	            topInset: number;
	            leftInset: number;
	            rightInset: number;
	            bottomInset: number;
	        };
	        landscape: {
	            topInset: number;
	            leftInset: number;
	            rightInset: number;
	            bottomInset: number;
	        };
	    };
	}) => {
	    'NativeBase.Left': {
	        'NativeBase.Body': {
	            'NativeBase.Text': {
	                '.note': {
	                    color: string;
	                    fontWeight: string;
	                    marginRight: number;
	                };
	            };
	            flex: number;
	            marginLeft: number;
	            alignItems: null;
	        };
	        'NativeBase.Icon': {
	            fontSize: number;
	        };
	        'NativeBase.IconNB': {
	            fontSize: number;
	        };
	        'NativeBase.Text': {
	            marginLeft: number;
	            alignSelf: string;
	        };
	        'NativeBase.Button': {
	            '.transparent': {
	                paddingRight: number;
	                'NativeBase.Text': {
	                    fontSize: number;
	                    color: string;
	                };
	                'NativeBase.Icon': {
	                    fontSize: number;
	                    color: string;
	                    marginHorizontal: null;
	                };
	                'NativeBase.IconNB': {
	                    fontSize: number;
	                    color: string;
	                };
	                paddingVertical: null;
	                paddingHorizontal: null;
	            };
	        };
	        flex: number;
	        flexDirection: string;
	        alignItems: string;
	    };
	    '.content': {
	        'NativeBase.Text': {
	            color: string;
	            fontSize: number;
	        };
	    };
	    '.cardBody': {
	        padding: number;
	        'NativeBase.Text': {
	            marginTop: number;
	        };
	    };
	    'NativeBase.Body': {
	        'NativeBase.Text': {
	            '.note': {
	                color: string;
	                fontWeight: string;
	                marginRight: number;
	            };
	        };
	        'NativeBase.Button': {
	            '.transparent': {
	                paddingRight: number;
	                alignSelf: string;
	                'NativeBase.Text': {
	                    fontSize: number;
	                    color: string;
	                };
	                'NativeBase.Icon': {
	                    fontSize: number;
	                    color: string;
	                    marginHorizontal: null;
	                };
	                'NativeBase.IconNB': {
	                    fontSize: number;
	                    color: string;
	                };
	                paddingVertical: null;
	                paddingHorizontal: null;
	            };
	        };
	        flex: number;
	        alignSelf: string;
	        alignItems: string;
	    };
	    'NativeBase.Right': {
	        'NativeBase.Badge': {
	            alignSelf: null;
	        };
	        'NativeBase.Button': {
	            '.transparent': {
	                'NativeBase.Text': {
	                    fontSize: number;
	                    color: string;
	                };
	                'NativeBase.Icon': {
	                    fontSize: number;
	                    color: string;
	                    marginHorizontal: null;
	                };
	                'NativeBase.IconNB': {
	                    fontSize: number;
	                    color: string;
	                };
	                paddingVertical: null;
	                paddingHorizontal: null;
	            };
	            alignSelf: null;
	        };
	        'NativeBase.Icon': {
	            alignSelf: null;
	            fontSize: number;
	            color: string;
	        };
	        'NativeBase.IconNB': {
	            alignSelf: null;
	            fontSize: number;
	            color: string;
	        };
	        'NativeBase.Text': {
	            fontSize: number;
	            alignSelf: null;
	        };
	        'NativeBase.Thumbnail': {
	            alignSelf: null;
	        };
	        'NativeBase.Image': {
	            alignSelf: null;
	        };
	        'NativeBase.Radio': {
	            alignSelf: null;
	        };
	        'NativeBase.Checkbox': {
	            alignSelf: null;
	        };
	        'NativeBase.Switch': {
	            alignSelf: null;
	        };
	        flex: number;
	    };
	    '.header': {
	        'NativeBase.Text': {
	            fontSize: number;
	            fontWeight: string;
	        };
	        '.bordered': {
	            'NativeBase.Text': {
	                color: string;
	                fontWeight: string;
	            };
	            borderBottomWidth: number;
	        };
	        borderBottomWidth: null;
	        paddingVertical: number;
	    };
	    '.footer': {
	        'NativeBase.Text': {
	            fontSize: number;
	            fontWeight: string;
	        };
	        '.bordered': {
	            'NativeBase.Text': {
	                color: string;
	                fontWeight: string;
	            };
	            borderTopWidth: number;
	        };
	        borderBottomWidth: null;
	    };
	    'NativeBase.Text': {
	        '.note': {
	            color: string;
	            fontWeight: string;
	        };
	    };
	    'NativeBase.Icon': {
	        width: number;
	        fontSize: number;
	    };
	    'NativeBase.IconNB': {
	        width: number;
	        fontSize: number;
	    };
	    '.bordered': {
	        borderBottomWidth: number;
	        borderColor: string;
	    };
	    '.first': {
	        borderTopLeftRadius: number;
	        borderTopRightRadius: number;
	    };
	    '.last': {
	        borderBottomLeftRadius: number;
	        borderBottomRightRadius: number;
	    };
	    flexDirection: string;
	    alignItems: string;
	    borderRadius: number;
	    padding: number;
	    paddingVertical: number;
	    backgroundColor: string;
	};
	export default _default;

}
declare module 'native-base/theme/components/Picker' {
	 const _default: () => {
	    '.note': {
	        color: string;
	    };
	    marginRight: number;
	    flexGrow: number;
	};
	export default _default;

}
declare module 'native-base/theme/components/ListItem' {
	 const _default: (variables?: {
	    platformStyle: undefined;
	    platform: "android" | "ios" | "web" | "windows" | "macos";
	    accordionBorderColor: string;
	    accordionContentPadding: number;
	    accordionIconFontSize: number;
	    contentStyle: string;
	    expandedIconStyle: string;
	    headerStyle: string;
	    iconStyle: string;
	    elevation: number;
	    containerTouchableBackgroundColor: string;
	    innerTouchableBackgroundColor: string;
	    listItemHeight: number;
	    listItemBorderColor: string;
	    marginHorizontal: number;
	    marginLeft: number;
	    marginTop: number;
	    minHeight: number;
	    padding: number;
	    touchableTextColor: string;
	    androidRipple: boolean;
	    androidRippleColor: string;
	    androidRippleColorDark: string;
	    buttonUppercaseAndroidText: boolean;
	    badgeBg: string;
	    badgeColor: string;
	    badgePadding: number;
	    buttonFontFamily: string;
	    buttonDisabledBg: string;
	    buttonPadding: number;
	    buttonDefaultActiveOpacity: number;
	    buttonDefaultFlex: number;
	    buttonDefaultBorderRadius: number;
	    buttonDefaultBorderWidth: number;
	    readonly buttonPrimaryBg: string;
	    readonly buttonPrimaryColor: string;
	    readonly buttonInfoBg: string;
	    readonly buttonInfoColor: string;
	    readonly buttonSuccessBg: string;
	    readonly buttonSuccessColor: string;
	    readonly buttonDangerBg: string;
	    readonly buttonDangerColor: string;
	    readonly buttonWarningBg: string;
	    readonly buttonWarningColor: string;
	    readonly buttonTextSize: number;
	    readonly buttonTextSizeLarge: number;
	    readonly buttonTextSizeSmall: number;
	    readonly borderRadiusLarge: number;
	    readonly iconSizeLarge: number;
	    readonly iconSizeSmall: number;
	    cardDefaultBg: string;
	    cardBorderColor: string;
	    cardBorderRadius: number;
	    cardItemPadding: number;
	    CheckboxRadius: number;
	    CheckboxBorderWidth: number;
	    CheckboxPaddingLeft: number;
	    CheckboxPaddingBottom: number;
	    CheckboxIconSize: number;
	    CheckboxIconMarginTop: number | undefined;
	    CheckboxFontSize: number;
	    checkboxBgColor: string;
	    checkboxSize: number;
	    checkboxTickColor: string;
	    checkboxDefaultColor: string;
	    checkboxTextShadowRadius: number;
	    brandPrimary: string;
	    brandInfo: string;
	    brandSuccess: string;
	    brandDanger: string;
	    brandWarning: string;
	    brandDark: string;
	    brandLight: string;
	    containerBgColor: string;
	    datePickerFlex: number;
	    datePickerPadding: number;
	    datePickerTextColor: string;
	    datePickerBg: string;
	    fabBackgroundColor: string;
	    fabBorderRadius: number;
	    fabBottom: number;
	    fabButtonBorderRadius: number;
	    fabButtonHeight: number;
	    fabButtonLeft: number;
	    fabButtonMarginBottom: number;
	    fabContainerBottom: number;
	    fabDefaultPosition: number;
	    fabElevation: number;
	    fabIconColor: string;
	    fabIconSize: number;
	    fabShadowColor: string;
	    fabShadowOffsetHeight: number;
	    fabShadowOffsetWidth: number;
	    fabShadowOpacity: number;
	    fabShadowRadius: number;
	    fabWidth: number;
	    DefaultFontSize: number;
	    fontFamily: string;
	    fontSizeBase: number;
	    readonly fontSizeH1: number;
	    readonly fontSizeH2: number;
	    readonly fontSizeH3: number;
	    footerHeight: number;
	    footerDefaultBg: string;
	    footerPaddingBottom: number;
	    tabBarTextColor: string;
	    tabBarTextSize: number;
	    activeTab: string;
	    sTabBarActiveTextColor: string;
	    tabBarActiveTextColor: string;
	    tabActiveBgColor: string;
	    toolbarBtnColor: string;
	    toolbarDefaultBg: string;
	    toolbarHeight: number;
	    toolbarSearchIconSize: number;
	    toolbarInputColor: string;
	    searchBarHeight: number;
	    searchBarInputHeight: number;
	    toolbarBtnTextColor: string;
	    toolbarDefaultBorder: string;
	    iosStatusbar: string;
	    readonly statusBarColor: string;
	    readonly darkenHeader: string;
	    iconFamily: string;
	    iconFontSize: number;
	    iconHeaderSize: number;
	    inputFontSize: number;
	    inputBorderColor: string;
	    inputSuccessBorderColor: string;
	    inputErrorBorderColor: string;
	    inputHeightBase: number;
	    readonly inputColor: string;
	    readonly inputColorPlaceholder: string;
	    buttonLineHeight: number;
	    lineHeightH1: number;
	    lineHeightH2: number;
	    lineHeightH3: number;
	    lineHeight: number;
	    listItemSelected: string;
	    listBg: string;
	    listBorderColor: string;
	    listDividerBg: string;
	    listBtnUnderlayColor: string;
	    listItemPadding: number;
	    listNoteColor: string;
	    listNoteSize: number;
	    defaultProgressColor: string;
	    inverseProgressColor: string;
	    radioBtnSize: number;
	    radioSelectedColorAndroid: string;
	    radioBtnLineHeight: number;
	    readonly radioColor: string;
	    segmentBackgroundColor: string;
	    segmentActiveBackgroundColor: string;
	    segmentTextColor: string;
	    segmentActiveTextColor: string;
	    segmentBorderColor: string;
	    segmentBorderColorMain: string;
	    defaultSpinnerColor: string;
	    inverseSpinnerColor: string;
	    tabBarDisabledTextColor: string;
	    tabDefaultBg: string;
	    topTabBarTextColor: string;
	    topTabBarActiveTextColor: string;
	    topTabBarBorderColor: string;
	    topTabBarActiveBorderColor: string;
	    tabBgColor: string;
	    tabFontSize: number;
	    textColor: string;
	    inverseTextColor: string;
	    noteFontSize: number;
	    readonly defaultTextColor: string;
	    titleFontfamily: string;
	    titleFontSize: number;
	    subTitleFontSize: number;
	    subtitleColor: string;
	    titleFontColor: string;
	    borderRadiusBase: number;
	    borderWidth: number;
	    contentPadding: number;
	    dropdownLinkColor: string;
	    inputLineHeight: number;
	    deviceWidth: number;
	    deviceHeight: number;
	    isIphoneX: boolean;
	    inputGroupRoundedBorderRadius: number;
	    Inset: {
	        portrait: {
	            topInset: number;
	            leftInset: number;
	            rightInset: number;
	            bottomInset: number;
	        };
	        landscape: {
	            topInset: number;
	            leftInset: number;
	            rightInset: number;
	            bottomInset: number;
	        };
	    };
	}) => {
	    'NativeBase.InputGroup': {
	        'NativeBase.Icon': {
	            paddingRight: number;
	        };
	        'NativeBase.IconNB': {
	            paddingRight: number;
	        };
	        'NativeBase.Input': {
	            paddingHorizontal: number;
	        };
	        flex: number;
	        borderWidth: null;
	        margin: number;
	        borderBottomColor: string;
	    };
	    '.searchBar': {
	        'NativeBase.Item': {
	            'NativeBase.Icon': {
	                backgroundColor: string;
	                color: string;
	                fontSize: number;
	                alignItems: string;
	                marginTop: number;
	                paddingRight: number;
	            };
	            'NativeBase.IconNB': {
	                backgroundColor: string;
	                color: null;
	                alignSelf: string;
	            };
	            'NativeBase.Input': {
	                alignSelf: string;
	            };
	            alignSelf: string;
	            alignItems: string;
	            justifyContent: string;
	            flex: number;
	            height: number;
	            borderColor: string;
	            backgroundColor: string;
	            borderRadius: number;
	        };
	        'NativeBase.Button': {
	            '.transparent': {
	                'NativeBase.Text': {
	                    fontWeight: string;
	                };
	                paddingHorizontal: null;
	                paddingLeft: number | null;
	            };
	            paddingHorizontal: null | undefined;
	            width: number | undefined;
	            height: number | undefined;
	        };
	        backgroundColor: string;
	        padding: number;
	        marginLeft: null;
	    };
	    'NativeBase.CheckBox': {
	        marginLeft: number;
	        marginRight: number;
	    };
	    '.first': {
	        '.itemHeader': {
	            paddingTop: number;
	        };
	    };
	    '.itemHeader': {
	        '.first': {
	            paddingTop: number;
	        };
	        borderBottomWidth: number | null;
	        marginLeft: null;
	        padding: number;
	        paddingLeft: number;
	        paddingTop: number | undefined;
	        paddingBottom: number | undefined;
	        flexDirection: string;
	        borderColor: string;
	        'NativeBase.Text': {
	            fontSize: number;
	            color: string | undefined;
	        };
	    };
	    '.itemDivider': {
	        borderBottomWidth: null;
	        marginLeft: null;
	        padding: number;
	        paddingLeft: number;
	        backgroundColor: string;
	        flexDirection: string;
	        borderColor: string;
	    };
	    '.selected': {
	        'NativeBase.Text': {
	            color: string;
	        };
	        'NativeBase.Icon': {
	            color: string;
	        };
	        'NativeBase.Left': {
	            'NativeBase.Text': {
	                color: string;
	            };
	            'NativeBase.Icon': {
	                color: string;
	            };
	        };
	        'NativeBase.Body': {
	            'NativeBase.Text': {
	                color: string;
	            };
	            'NativeBase.Icon': {
	                color: string;
	            };
	        };
	        'NativeBase.Right': {
	            'NativeBase.Text': {
	                color: string;
	            };
	            'NativeBase.Icon': {
	                color: string;
	            };
	        };
	    };
	    'NativeBase.Left': {
	        'NativeBase.Body': {
	            'NativeBase.Text': {
	                '.note': {
	                    color: string;
	                    fontWeight: string;
	                };
	                fontWeight: string;
	            };
	            marginLeft: number;
	            alignItems: null;
	            alignSelf: null;
	        };
	        'NativeBase.Icon': {
	            width: number;
	            fontSize: number;
	        };
	        'NativeBase.IconNB': {
	            width: number;
	            fontSize: number;
	        };
	        'NativeBase.Text': {
	            alignSelf: string;
	        };
	        flexDirection: string;
	    };
	    'NativeBase.Body': {
	        'NativeBase.Text': {
	            marginHorizontal: number;
	            '.note': {
	                color: string;
	                fontWeight: string;
	            };
	        };
	        alignSelf: null;
	        alignItems: null;
	    };
	    'NativeBase.Right': {
	        'NativeBase.Badge': {
	            alignSelf: null;
	        };
	        'NativeBase.PickerNB': {
	            'NativeBase.Button': {
	                marginRight: number;
	                'NativeBase.Text': {
	                    color: string;
	                };
	            };
	        };
	        'NativeBase.Button': {
	            alignSelf: null;
	            '.transparent': {
	                'NativeBase.Text': {
	                    color: string;
	                };
	            };
	        };
	        'NativeBase.Icon': {
	            alignSelf: null;
	            fontSize: number;
	            color: string;
	        };
	        'NativeBase.IconNB': {
	            alignSelf: null;
	            fontSize: number;
	            color: string;
	        };
	        'NativeBase.Text': {
	            '.note': {
	                color: string;
	                fontWeight: string;
	            };
	            alignSelf: null;
	        };
	        'NativeBase.Thumbnail': {
	            alignSelf: null;
	        };
	        'NativeBase.Image': {
	            alignSelf: null;
	        };
	        'NativeBase.Radio': {
	            alignSelf: null;
	        };
	        'NativeBase.Checkbox': {
	            alignSelf: null;
	        };
	        'NativeBase.Switch': {
	            alignSelf: null;
	        };
	        padding: null;
	        flex: number;
	    };
	    'NativeBase.Text': {
	        '.note': {
	            color: string;
	            fontWeight: string;
	        };
	        alignSelf: string;
	    };
	    '.last': {
	        marginLeft: number;
	        paddingLeft: number;
	        top: number;
	    };
	    '.avatar': {
	        'NativeBase.Left': {
	            flex: number;
	            alignSelf: string;
	            paddingTop: number;
	        };
	        'NativeBase.Body': {
	            'NativeBase.Text': {
	                marginLeft: null;
	            };
	            flex: number;
	            paddingVertical: number;
	            borderBottomWidth: number;
	            borderColor: string;
	            marginLeft: number;
	        };
	        'NativeBase.Right': {
	            'NativeBase.Text': {
	                '.note': {
	                    fontSize: number;
	                };
	            };
	            flex: number;
	            paddingRight: number;
	            alignSelf: string;
	            paddingVertical: number;
	            borderBottomWidth: number;
	            borderColor: string;
	        };
	        '.noBorder': {
	            'NativeBase.Body': {
	                borderBottomWidth: null;
	            };
	            'NativeBase.Right': {
	                borderBottomWidth: null;
	            };
	        };
	        borderBottomWidth: null;
	        paddingVertical: null;
	        paddingRight: null;
	    };
	    '.thumbnail': {
	        'NativeBase.Left': {
	            flex: number;
	        };
	        'NativeBase.Body': {
	            'NativeBase.Text': {
	                marginLeft: null;
	            };
	            flex: number;
	            paddingVertical: number;
	            borderBottomWidth: number;
	            borderColor: string;
	            marginLeft: number;
	        };
	        'NativeBase.Right': {
	            'NativeBase.Button': {
	                '.transparent': {
	                    'NativeBase.Text': {
	                        fontSize: number;
	                        color: string;
	                    };
	                };
	                height: null;
	            };
	            flex: number;
	            justifyContent: string;
	            alignSelf: string;
	            paddingRight: number;
	            paddingVertical: number;
	            borderBottomWidth: number;
	            borderColor: string;
	        };
	        '.noBorder': {
	            'NativeBase.Body': {
	                borderBottomWidth: null;
	            };
	            'NativeBase.Right': {
	                borderBottomWidth: null;
	            };
	        };
	        borderBottomWidth: null;
	        paddingVertical: null;
	        paddingRight: null;
	    };
	    '.icon': {
	        '.last': {
	            'NativeBase.Body': {
	                borderBottomWidth: null;
	            };
	            'NativeBase.Right': {
	                borderBottomWidth: null;
	            };
	            borderBottomWidth: number;
	            borderColor: string;
	        };
	        'NativeBase.Left': {
	            'NativeBase.Button': {
	                'NativeBase.IconNB': {
	                    marginHorizontal: null;
	                    fontSize: number;
	                };
	                'NativeBase.Icon': {
	                    marginHorizontal: null;
	                    fontSize: number;
	                };
	                alignSelf: string;
	                height: number;
	                width: number;
	                borderRadius: number;
	                paddingVertical: null;
	                paddingHorizontal: null;
	                alignItems: string;
	                justifyContent: string;
	            };
	            'NativeBase.Icon': {
	                width: number;
	                fontSize: number;
	            };
	            'NativeBase.IconNB': {
	                width: number;
	                fontSize: number;
	            };
	            paddingRight: number;
	            flex: number;
	            height: number;
	            justifyContent: string;
	            alignItems: string;
	        };
	        'NativeBase.Body': {
	            'NativeBase.Text': {
	                marginLeft: null;
	                fontSize: number;
	            };
	            flex: number;
	            height: number;
	            justifyContent: string;
	            borderBottomWidth: number;
	            borderColor: string;
	        };
	        'NativeBase.Right': {
	            'NativeBase.Text': {
	                textAlign: string;
	                color: string;
	                fontSize: number;
	            };
	            'NativeBase.IconNB': {
	                color: string;
	                fontSize: number;
	                alignSelf: string;
	                paddingLeft: number;
	                paddingTop: number;
	            };
	            'NativeBase.Icon': {
	                color: string;
	                fontSize: number;
	                alignSelf: string;
	                paddingLeft: number;
	                paddingTop: number;
	            };
	            'NativeBase.Switch': {
	                marginRight: number | undefined;
	                alignSelf: null;
	            };
	            'NativeBase.PickerNB': {
	                '.note': {
	                    color: string;
	                };
	                marginRight: number;
	                flexGrow: number;
	            };
	            flexDirection: string;
	            alignItems: string;
	            flex: number;
	            alignSelf: string;
	            height: number;
	            justifyContent: string;
	            borderBottomWidth: number;
	            borderColor: string;
	            paddingRight: number;
	        };
	        '.noBorder': {
	            'NativeBase.Body': {
	                borderBottomWidth: null;
	            };
	            'NativeBase.Right': {
	                borderBottomWidth: null;
	            };
	        };
	        borderBottomWidth: null;
	        paddingVertical: null;
	        paddingRight: null;
	        height: number;
	        justifyContent: string;
	    };
	    '.noBorder': {
	        borderBottomWidth: null;
	    };
	    '.noIndent': {
	        marginLeft: null;
	        padding: number;
	        paddingLeft: number;
	    };
	    alignItems: string;
	    flexDirection: string;
	    paddingRight: number;
	    paddingVertical: number;
	    marginLeft: number;
	    borderBottomWidth: number;
	    backgroundColor: string;
	    borderColor: string;
	};
	export default _default;

}
declare module 'native-base/theme/components/Form' {
	 const _default: () => {
	    'NativeBase.Item': {
	        '.fixedLabel': {
	            'NativeBase.Label': {
	                paddingLeft: null;
	            };
	            marginLeft: number;
	        };
	        '.inlineLabel': {
	            'NativeBase.Label': {
	                paddingLeft: null;
	            };
	            marginLeft: number;
	        };
	        '.placeholderLabel': {
	            'NativeBase.Input': {};
	        };
	        '.stackedLabel': {
	            'NativeBase.Label': {
	                top: number;
	                paddingLeft: null;
	            };
	            'NativeBase.Input': {
	                paddingLeft: null;
	                marginLeft: null;
	            };
	            'NativeBase.Icon': {
	                marginTop: number;
	            };
	            marginLeft: number;
	        };
	        '.floatingLabel': {
	            'NativeBase.Input': {
	                paddingLeft: null;
	                top: number;
	                marginLeft: null;
	            };
	            'NativeBase.Label': {
	                left: number;
	                top: number;
	            };
	            'NativeBase.Icon': {
	                top: number;
	            };
	            marginTop: number;
	            marginLeft: number;
	        };
	        '.regular': {
	            'NativeBase.Label': {
	                left: number;
	            };
	            marginLeft: number;
	        };
	        '.rounded': {
	            'NativeBase.Label': {
	                left: number;
	            };
	            marginLeft: number;
	        };
	        '.underline': {
	            'NativeBase.Label': {
	                left: number;
	                top: number;
	                position: string;
	            };
	            'NativeBase.Input': {
	                left: number;
	            };
	            marginLeft: number;
	        };
	        '.last': {
	            marginLeft: number;
	            paddingLeft: number;
	        };
	        'NativeBase.Label': {
	            paddingRight: number;
	        };
	        marginLeft: number;
	    };
	};
	export default _default;

}
declare module 'native-base/theme/components/Separator' {
	 const _default: (variables?: {
	    platformStyle: undefined;
	    platform: "android" | "ios" | "web" | "windows" | "macos";
	    accordionBorderColor: string;
	    accordionContentPadding: number;
	    accordionIconFontSize: number;
	    contentStyle: string;
	    expandedIconStyle: string;
	    headerStyle: string;
	    iconStyle: string;
	    elevation: number;
	    containerTouchableBackgroundColor: string;
	    innerTouchableBackgroundColor: string;
	    listItemHeight: number;
	    listItemBorderColor: string;
	    marginHorizontal: number;
	    marginLeft: number;
	    marginTop: number;
	    minHeight: number;
	    padding: number;
	    touchableTextColor: string;
	    androidRipple: boolean;
	    androidRippleColor: string;
	    androidRippleColorDark: string;
	    buttonUppercaseAndroidText: boolean;
	    badgeBg: string;
	    badgeColor: string;
	    badgePadding: number;
	    buttonFontFamily: string;
	    buttonDisabledBg: string;
	    buttonPadding: number;
	    buttonDefaultActiveOpacity: number;
	    buttonDefaultFlex: number;
	    buttonDefaultBorderRadius: number;
	    buttonDefaultBorderWidth: number;
	    readonly buttonPrimaryBg: string;
	    readonly buttonPrimaryColor: string;
	    readonly buttonInfoBg: string;
	    readonly buttonInfoColor: string;
	    readonly buttonSuccessBg: string;
	    readonly buttonSuccessColor: string;
	    readonly buttonDangerBg: string;
	    readonly buttonDangerColor: string;
	    readonly buttonWarningBg: string;
	    readonly buttonWarningColor: string;
	    readonly buttonTextSize: number;
	    readonly buttonTextSizeLarge: number;
	    readonly buttonTextSizeSmall: number;
	    readonly borderRadiusLarge: number;
	    readonly iconSizeLarge: number;
	    readonly iconSizeSmall: number;
	    cardDefaultBg: string;
	    cardBorderColor: string;
	    cardBorderRadius: number;
	    cardItemPadding: number;
	    CheckboxRadius: number;
	    CheckboxBorderWidth: number;
	    CheckboxPaddingLeft: number;
	    CheckboxPaddingBottom: number;
	    CheckboxIconSize: number;
	    CheckboxIconMarginTop: number | undefined;
	    CheckboxFontSize: number;
	    checkboxBgColor: string;
	    checkboxSize: number;
	    checkboxTickColor: string;
	    checkboxDefaultColor: string;
	    checkboxTextShadowRadius: number;
	    brandPrimary: string;
	    brandInfo: string;
	    brandSuccess: string;
	    brandDanger: string;
	    brandWarning: string;
	    brandDark: string;
	    brandLight: string;
	    containerBgColor: string;
	    datePickerFlex: number;
	    datePickerPadding: number;
	    datePickerTextColor: string;
	    datePickerBg: string;
	    fabBackgroundColor: string;
	    fabBorderRadius: number;
	    fabBottom: number;
	    fabButtonBorderRadius: number;
	    fabButtonHeight: number;
	    fabButtonLeft: number;
	    fabButtonMarginBottom: number;
	    fabContainerBottom: number;
	    fabDefaultPosition: number;
	    fabElevation: number;
	    fabIconColor: string;
	    fabIconSize: number;
	    fabShadowColor: string;
	    fabShadowOffsetHeight: number;
	    fabShadowOffsetWidth: number;
	    fabShadowOpacity: number;
	    fabShadowRadius: number;
	    fabWidth: number;
	    DefaultFontSize: number;
	    fontFamily: string;
	    fontSizeBase: number;
	    readonly fontSizeH1: number;
	    readonly fontSizeH2: number;
	    readonly fontSizeH3: number;
	    footerHeight: number;
	    footerDefaultBg: string;
	    footerPaddingBottom: number;
	    tabBarTextColor: string;
	    tabBarTextSize: number;
	    activeTab: string;
	    sTabBarActiveTextColor: string;
	    tabBarActiveTextColor: string;
	    tabActiveBgColor: string;
	    toolbarBtnColor: string;
	    toolbarDefaultBg: string;
	    toolbarHeight: number;
	    toolbarSearchIconSize: number;
	    toolbarInputColor: string;
	    searchBarHeight: number;
	    searchBarInputHeight: number;
	    toolbarBtnTextColor: string;
	    toolbarDefaultBorder: string;
	    iosStatusbar: string;
	    readonly statusBarColor: string;
	    readonly darkenHeader: string;
	    iconFamily: string;
	    iconFontSize: number;
	    iconHeaderSize: number;
	    inputFontSize: number;
	    inputBorderColor: string;
	    inputSuccessBorderColor: string;
	    inputErrorBorderColor: string;
	    inputHeightBase: number;
	    readonly inputColor: string;
	    readonly inputColorPlaceholder: string;
	    buttonLineHeight: number;
	    lineHeightH1: number;
	    lineHeightH2: number;
	    lineHeightH3: number;
	    lineHeight: number;
	    listItemSelected: string;
	    listBg: string;
	    listBorderColor: string;
	    listDividerBg: string;
	    listBtnUnderlayColor: string;
	    listItemPadding: number;
	    listNoteColor: string;
	    listNoteSize: number;
	    defaultProgressColor: string;
	    inverseProgressColor: string;
	    radioBtnSize: number;
	    radioSelectedColorAndroid: string;
	    radioBtnLineHeight: number;
	    readonly radioColor: string;
	    segmentBackgroundColor: string;
	    segmentActiveBackgroundColor: string;
	    segmentTextColor: string;
	    segmentActiveTextColor: string;
	    segmentBorderColor: string;
	    segmentBorderColorMain: string;
	    defaultSpinnerColor: string;
	    inverseSpinnerColor: string;
	    tabBarDisabledTextColor: string;
	    tabDefaultBg: string;
	    topTabBarTextColor: string;
	    topTabBarActiveTextColor: string;
	    topTabBarBorderColor: string;
	    topTabBarActiveBorderColor: string;
	    tabBgColor: string;
	    tabFontSize: number;
	    textColor: string;
	    inverseTextColor: string;
	    noteFontSize: number;
	    readonly defaultTextColor: string;
	    titleFontfamily: string;
	    titleFontSize: number;
	    subTitleFontSize: number;
	    subtitleColor: string;
	    titleFontColor: string;
	    borderRadiusBase: number;
	    borderWidth: number;
	    contentPadding: number;
	    dropdownLinkColor: string;
	    inputLineHeight: number;
	    deviceWidth: number;
	    deviceHeight: number;
	    isIphoneX: boolean;
	    inputGroupRoundedBorderRadius: number;
	    Inset: {
	        portrait: {
	            topInset: number;
	            leftInset: number;
	            rightInset: number;
	            bottomInset: number;
	        };
	        landscape: {
	            topInset: number;
	            leftInset: number;
	            rightInset: number;
	            bottomInset: number;
	        };
	    };
	}) => {
	    '.group': {
	        height: number;
	        paddingVertical: number;
	        paddingTop: number;
	        '.bordered': {
	            height: number;
	            paddingVertical: number;
	            paddingTop: number;
	        };
	    };
	    '.bordered': {
	        '.noTopBorder': {
	            borderTopWidth: number;
	        };
	        '.noBottomBorder': {
	            borderBottomWidth: number;
	        };
	        height: number;
	        paddingTop: number;
	        paddingBottom: number;
	        borderBottomWidth: number;
	        borderTopWidth: number;
	        borderColor: string;
	    };
	    'NativeBase.Text': {
	        fontSize: number;
	        color: string;
	    };
	    '.noTopBorder': {
	        borderTopWidth: number;
	    };
	    '.noBottomBorder': {
	        borderBottomWidth: number;
	    };
	    height: number;
	    backgroundColor: string;
	    flex: number;
	    justifyContent: string;
	    paddingLeft: number;
	};
	export default _default;

}
declare module 'native-base/theme/components/index' {
	 const _default: (variables?: {
	    platformStyle: undefined;
	    platform: "android" | "ios" | "web" | "windows" | "macos";
	    accordionBorderColor: string;
	    accordionContentPadding: number;
	    accordionIconFontSize: number;
	    contentStyle: string;
	    expandedIconStyle: string;
	    headerStyle: string;
	    iconStyle: string;
	    elevation: number;
	    containerTouchableBackgroundColor: string;
	    innerTouchableBackgroundColor: string;
	    listItemHeight: number;
	    listItemBorderColor: string;
	    marginHorizontal: number;
	    marginLeft: number;
	    marginTop: number;
	    minHeight: number;
	    padding: number;
	    touchableTextColor: string;
	    androidRipple: boolean;
	    androidRippleColor: string;
	    androidRippleColorDark: string;
	    buttonUppercaseAndroidText: boolean;
	    badgeBg: string;
	    badgeColor: string;
	    badgePadding: number;
	    buttonFontFamily: string;
	    buttonDisabledBg: string;
	    buttonPadding: number;
	    buttonDefaultActiveOpacity: number;
	    buttonDefaultFlex: number;
	    buttonDefaultBorderRadius: number;
	    buttonDefaultBorderWidth: number;
	    readonly buttonPrimaryBg: string;
	    readonly buttonPrimaryColor: string;
	    readonly buttonInfoBg: string;
	    readonly buttonInfoColor: string;
	    readonly buttonSuccessBg: string;
	    readonly buttonSuccessColor: string;
	    readonly buttonDangerBg: string;
	    readonly buttonDangerColor: string;
	    readonly buttonWarningBg: string;
	    readonly buttonWarningColor: string;
	    readonly buttonTextSize: number;
	    readonly buttonTextSizeLarge: number;
	    readonly buttonTextSizeSmall: number;
	    readonly borderRadiusLarge: number;
	    readonly iconSizeLarge: number;
	    readonly iconSizeSmall: number;
	    cardDefaultBg: string;
	    cardBorderColor: string;
	    cardBorderRadius: number;
	    cardItemPadding: number;
	    CheckboxRadius: number;
	    CheckboxBorderWidth: number;
	    CheckboxPaddingLeft: number;
	    CheckboxPaddingBottom: number;
	    CheckboxIconSize: number;
	    CheckboxIconMarginTop: number | undefined;
	    CheckboxFontSize: number;
	    checkboxBgColor: string;
	    checkboxSize: number;
	    checkboxTickColor: string;
	    checkboxDefaultColor: string;
	    checkboxTextShadowRadius: number;
	    brandPrimary: string;
	    brandInfo: string;
	    brandSuccess: string;
	    brandDanger: string;
	    brandWarning: string;
	    brandDark: string;
	    brandLight: string;
	    containerBgColor: string;
	    datePickerFlex: number;
	    datePickerPadding: number;
	    datePickerTextColor: string;
	    datePickerBg: string;
	    fabBackgroundColor: string;
	    fabBorderRadius: number;
	    fabBottom: number;
	    fabButtonBorderRadius: number;
	    fabButtonHeight: number;
	    fabButtonLeft: number;
	    fabButtonMarginBottom: number;
	    fabContainerBottom: number;
	    fabDefaultPosition: number;
	    fabElevation: number;
	    fabIconColor: string;
	    fabIconSize: number;
	    fabShadowColor: string;
	    fabShadowOffsetHeight: number;
	    fabShadowOffsetWidth: number;
	    fabShadowOpacity: number;
	    fabShadowRadius: number;
	    fabWidth: number;
	    DefaultFontSize: number;
	    fontFamily: string;
	    fontSizeBase: number;
	    readonly fontSizeH1: number;
	    readonly fontSizeH2: number;
	    readonly fontSizeH3: number;
	    footerHeight: number;
	    footerDefaultBg: string;
	    footerPaddingBottom: number;
	    tabBarTextColor: string;
	    tabBarTextSize: number;
	    activeTab: string;
	    sTabBarActiveTextColor: string;
	    tabBarActiveTextColor: string;
	    tabActiveBgColor: string;
	    toolbarBtnColor: string;
	    toolbarDefaultBg: string;
	    toolbarHeight: number;
	    toolbarSearchIconSize: number;
	    toolbarInputColor: string;
	    searchBarHeight: number;
	    searchBarInputHeight: number;
	    toolbarBtnTextColor: string;
	    toolbarDefaultBorder: string;
	    iosStatusbar: string;
	    readonly statusBarColor: string;
	    readonly darkenHeader: string;
	    iconFamily: string;
	    iconFontSize: number;
	    iconHeaderSize: number;
	    inputFontSize: number;
	    inputBorderColor: string;
	    inputSuccessBorderColor: string;
	    inputErrorBorderColor: string;
	    inputHeightBase: number;
	    readonly inputColor: string;
	    readonly inputColorPlaceholder: string;
	    buttonLineHeight: number;
	    lineHeightH1: number;
	    lineHeightH2: number;
	    lineHeightH3: number;
	    lineHeight: number;
	    listItemSelected: string;
	    listBg: string;
	    listBorderColor: string;
	    listDividerBg: string;
	    listBtnUnderlayColor: string;
	    listItemPadding: number;
	    listNoteColor: string;
	    listNoteSize: number;
	    defaultProgressColor: string;
	    inverseProgressColor: string;
	    radioBtnSize: number;
	    radioSelectedColorAndroid: string;
	    radioBtnLineHeight: number;
	    readonly radioColor: string;
	    segmentBackgroundColor: string;
	    segmentActiveBackgroundColor: string;
	    segmentTextColor: string;
	    segmentActiveTextColor: string;
	    segmentBorderColor: string;
	    segmentBorderColorMain: string;
	    defaultSpinnerColor: string;
	    inverseSpinnerColor: string;
	    tabBarDisabledTextColor: string;
	    tabDefaultBg: string;
	    topTabBarTextColor: string;
	    topTabBarActiveTextColor: string;
	    topTabBarBorderColor: string;
	    topTabBarActiveBorderColor: string;
	    tabBgColor: string;
	    tabFontSize: number;
	    textColor: string;
	    inverseTextColor: string;
	    noteFontSize: number;
	    readonly defaultTextColor: string;
	    titleFontfamily: string;
	    titleFontSize: number;
	    subTitleFontSize: number;
	    subtitleColor: string;
	    titleFontColor: string;
	    borderRadiusBase: number;
	    borderWidth: number;
	    contentPadding: number;
	    dropdownLinkColor: string;
	    inputLineHeight: number;
	    deviceWidth: number;
	    deviceHeight: number;
	    isIphoneX: boolean;
	    inputGroupRoundedBorderRadius: number;
	    Inset: {
	        portrait: {
	            topInset: number;
	            leftInset: number;
	            rightInset: number;
	            bottomInset: number;
	        };
	        landscape: {
	            topInset: number;
	            leftInset: number;
	            rightInset: number;
	            bottomInset: number;
	        };
	    };
	}) => {
	    variables: {
	        platformStyle: undefined;
	        platform: "android" | "ios" | "web" | "windows" | "macos";
	        accordionBorderColor: string;
	        accordionContentPadding: number;
	        accordionIconFontSize: number;
	        contentStyle: string;
	        expandedIconStyle: string;
	        headerStyle: string;
	        iconStyle: string;
	        elevation: number;
	        containerTouchableBackgroundColor: string;
	        innerTouchableBackgroundColor: string;
	        listItemHeight: number;
	        listItemBorderColor: string;
	        marginHorizontal: number;
	        marginLeft: number;
	        marginTop: number;
	        minHeight: number;
	        padding: number;
	        touchableTextColor: string;
	        androidRipple: boolean;
	        androidRippleColor: string;
	        androidRippleColorDark: string;
	        buttonUppercaseAndroidText: boolean;
	        badgeBg: string;
	        badgeColor: string;
	        badgePadding: number;
	        buttonFontFamily: string;
	        buttonDisabledBg: string;
	        buttonPadding: number;
	        buttonDefaultActiveOpacity: number;
	        buttonDefaultFlex: number;
	        buttonDefaultBorderRadius: number;
	        buttonDefaultBorderWidth: number;
	        readonly buttonPrimaryBg: string;
	        readonly buttonPrimaryColor: string;
	        readonly buttonInfoBg: string;
	        readonly buttonInfoColor: string;
	        readonly buttonSuccessBg: string;
	        readonly buttonSuccessColor: string;
	        readonly buttonDangerBg: string;
	        readonly buttonDangerColor: string;
	        readonly buttonWarningBg: string;
	        readonly buttonWarningColor: string;
	        readonly buttonTextSize: number;
	        readonly buttonTextSizeLarge: number;
	        readonly buttonTextSizeSmall: number;
	        readonly borderRadiusLarge: number;
	        readonly iconSizeLarge: number;
	        readonly iconSizeSmall: number;
	        cardDefaultBg: string;
	        cardBorderColor: string;
	        cardBorderRadius: number;
	        cardItemPadding: number;
	        CheckboxRadius: number;
	        CheckboxBorderWidth: number;
	        CheckboxPaddingLeft: number;
	        CheckboxPaddingBottom: number;
	        CheckboxIconSize: number;
	        CheckboxIconMarginTop: number | undefined;
	        CheckboxFontSize: number;
	        checkboxBgColor: string;
	        checkboxSize: number;
	        checkboxTickColor: string;
	        checkboxDefaultColor: string;
	        checkboxTextShadowRadius: number;
	        brandPrimary: string;
	        brandInfo: string;
	        brandSuccess: string;
	        brandDanger: string;
	        brandWarning: string;
	        brandDark: string;
	        brandLight: string;
	        containerBgColor: string;
	        datePickerFlex: number;
	        datePickerPadding: number;
	        datePickerTextColor: string;
	        datePickerBg: string;
	        fabBackgroundColor: string;
	        fabBorderRadius: number;
	        fabBottom: number;
	        fabButtonBorderRadius: number;
	        fabButtonHeight: number;
	        fabButtonLeft: number;
	        fabButtonMarginBottom: number;
	        fabContainerBottom: number;
	        fabDefaultPosition: number;
	        fabElevation: number;
	        fabIconColor: string;
	        fabIconSize: number;
	        fabShadowColor: string;
	        fabShadowOffsetHeight: number;
	        fabShadowOffsetWidth: number;
	        fabShadowOpacity: number;
	        fabShadowRadius: number;
	        fabWidth: number;
	        DefaultFontSize: number;
	        fontFamily: string;
	        fontSizeBase: number;
	        readonly fontSizeH1: number;
	        readonly fontSizeH2: number;
	        readonly fontSizeH3: number;
	        footerHeight: number;
	        footerDefaultBg: string;
	        footerPaddingBottom: number;
	        tabBarTextColor: string;
	        tabBarTextSize: number;
	        activeTab: string;
	        sTabBarActiveTextColor: string;
	        tabBarActiveTextColor: string;
	        tabActiveBgColor: string;
	        toolbarBtnColor: string;
	        toolbarDefaultBg: string;
	        toolbarHeight: number;
	        toolbarSearchIconSize: number;
	        toolbarInputColor: string;
	        searchBarHeight: number;
	        searchBarInputHeight: number;
	        toolbarBtnTextColor: string;
	        toolbarDefaultBorder: string;
	        iosStatusbar: string;
	        readonly statusBarColor: string;
	        readonly darkenHeader: string;
	        iconFamily: string;
	        iconFontSize: number;
	        iconHeaderSize: number;
	        inputFontSize: number;
	        inputBorderColor: string;
	        inputSuccessBorderColor: string;
	        inputErrorBorderColor: string;
	        inputHeightBase: number;
	        readonly inputColor: string;
	        readonly inputColorPlaceholder: string;
	        buttonLineHeight: number;
	        lineHeightH1: number;
	        lineHeightH2: number;
	        lineHeightH3: number;
	        lineHeight: number;
	        listItemSelected: string;
	        listBg: string;
	        listBorderColor: string;
	        listDividerBg: string;
	        listBtnUnderlayColor: string;
	        listItemPadding: number;
	        listNoteColor: string;
	        listNoteSize: number;
	        defaultProgressColor: string;
	        inverseProgressColor: string;
	        radioBtnSize: number;
	        radioSelectedColorAndroid: string;
	        radioBtnLineHeight: number;
	        readonly radioColor: string;
	        segmentBackgroundColor: string;
	        segmentActiveBackgroundColor: string;
	        segmentTextColor: string;
	        segmentActiveTextColor: string;
	        segmentBorderColor: string;
	        segmentBorderColorMain: string;
	        defaultSpinnerColor: string;
	        inverseSpinnerColor: string;
	        tabBarDisabledTextColor: string;
	        tabDefaultBg: string;
	        topTabBarTextColor: string;
	        topTabBarActiveTextColor: string;
	        topTabBarBorderColor: string;
	        topTabBarActiveBorderColor: string;
	        tabBgColor: string;
	        tabFontSize: number;
	        textColor: string;
	        inverseTextColor: string;
	        noteFontSize: number;
	        readonly defaultTextColor: string;
	        titleFontfamily: string;
	        titleFontSize: number;
	        subTitleFontSize: number;
	        subtitleColor: string;
	        titleFontColor: string;
	        borderRadiusBase: number;
	        borderWidth: number;
	        contentPadding: number;
	        dropdownLinkColor: string;
	        inputLineHeight: number;
	        deviceWidth: number;
	        deviceHeight: number;
	        isIphoneX: boolean;
	        inputGroupRoundedBorderRadius: number;
	        Inset: {
	            portrait: {
	                topInset: number;
	                leftInset: number;
	                rightInset: number;
	                bottomInset: number;
	            };
	            landscape: {
	                topInset: number;
	                leftInset: number;
	                rightInset: number;
	                bottomInset: number;
	            };
	        };
	    };
	    'NativeBase.Left': {
	        flex: number;
	        alignSelf: string;
	        alignItems: string;
	    };
	    'NativeBase.Right': {
	        'NativeBase.Button': {
	            alignSelf: null;
	        };
	        flex: number;
	        alignSelf: string;
	        alignItems: string;
	    };
	    'NativeBase.Body': {
	        flex: number;
	        alignItems: string;
	        alignSelf: string;
	    };
	    'NativeBase.Header': {
	        '.span': {
	            height: number;
	            'NativeBase.Left': {
	                alignSelf: string;
	            };
	            'NativeBase.Body': {
	                alignSelf: string;
	                alignItems: string;
	                justifyContent: string;
	                paddingBottom: number;
	            };
	            'NativeBase.Right': {
	                alignSelf: string;
	            };
	        };
	        '.hasSubtitle': {
	            'NativeBase.Body': {
	                'NativeBase.Title': {
	                    fontSize: number;
	                    fontFamily: string;
	                    textAlign: string;
	                    fontWeight: string;
	                    paddingBottom: number;
	                };
	                'NativeBase.Subtitle': {
	                    fontSize: number;
	                    fontFamily: string;
	                    color: string;
	                    textAlign: string;
	                };
	            };
	        };
	        '.transparent': {
	            backgroundColor: string;
	            borderBottomColor: string;
	            elevation: number;
	            shadowColor: null;
	            shadowOffset: null;
	            shadowRadius: null;
	            shadowOpacity: null;
	            paddingTop: number | undefined;
	            height: number;
	        };
	        '.noShadow': {
	            elevation: number;
	            shadowColor: null;
	            shadowOffset: null;
	            shadowRadius: null;
	            shadowOpacity: null;
	        };
	        '.hasTabs': {
	            elevation: number;
	            shadowColor: null;
	            shadowOffset: null;
	            shadowRadius: null;
	            shadowOpacity: null;
	            borderBottomWidth: null;
	        };
	        '.hasSegment': {
	            elevation: number;
	            shadowColor: null;
	            shadowOffset: null;
	            shadowRadius: null;
	            shadowOpacity: null;
	            borderBottomWidth: null;
	            'NativeBase.Left': {
	                flex: number;
	            };
	            'NativeBase.Right': {
	                flex: number;
	            };
	            'NativeBase.Body': {
	                flex: number;
	                'NativeBase.Segment': {
	                    marginRight: number;
	                    alignSelf: string;
	                    'NativeBase.Button': {
	                        paddingLeft: number;
	                        paddingRight: number;
	                    };
	                };
	            };
	        };
	        '.noLeft': {
	            'NativeBase.Left': {
	                width: number | undefined;
	                flex: number;
	            };
	            'NativeBase.Body': {
	                'NativeBase.Title': {
	                    paddingLeft: number | undefined;
	                };
	                'NativeBase.Subtitle': {
	                    paddingLeft: number | undefined;
	                };
	            };
	        };
	        'NativeBase.Button': {
	            justifyContent: string;
	            alignSelf: string;
	            alignItems: string;
	            '.transparent': {
	                'NativeBase.Text': {
	                    color: string;
	                    fontWeight: string;
	                };
	                'NativeBase.Icon': {
	                    color: string;
	                };
	                'NativeBase.IconNB': {
	                    color: string;
	                };
	                paddingHorizontal: number;
	            };
	            paddingHorizontal: number;
	        };
	        '.searchBar': {
	            'NativeBase.Item': {
	                'NativeBase.Icon': {
	                    backgroundColor: string;
	                    color: string;
	                    fontSize: number;
	                    alignItems: string;
	                    marginTop: number;
	                    paddingRight: number;
	                    paddingLeft: number;
	                };
	                'NativeBase.IconNB': {
	                    backgroundColor: string;
	                    color: null;
	                    alignSelf: string;
	                };
	                'NativeBase.Input': {
	                    alignSelf: string;
	                    lineHeight: null;
	                    height: number;
	                };
	                alignSelf: string;
	                alignItems: string;
	                justifyContent: string;
	                flex: number;
	                height: number;
	                borderColor: string;
	                backgroundColor: string;
	            };
	            'NativeBase.Button': {
	                '.transparent': {
	                    'NativeBase.Text': {
	                        fontWeight: string;
	                    };
	                    paddingHorizontal: null;
	                    paddingLeft: number | null;
	                };
	                paddingHorizontal: null | undefined;
	                width: number | undefined;
	                height: number | undefined;
	            };
	        };
	        '.rounded': {
	            'NativeBase.Item': {
	                borderRadius: number;
	            };
	        };
	        'NativeBase.Left': {
	            'NativeBase.Button': {
	                '.hasText': {
	                    marginLeft: number;
	                    height: number;
	                    'NativeBase.Icon': {
	                        color: string;
	                        fontSize: number;
	                        marginTop: number;
	                        marginRight: number;
	                        marginLeft: number;
	                    };
	                    'NativeBase.Text': {
	                        color: string;
	                        fontSize: number;
	                        marginLeft: number;
	                        lineHeight: number;
	                    };
	                    'NativeBase.IconNB': {
	                        color: string;
	                        fontSize: number;
	                        marginTop: number;
	                        marginRight: number;
	                        marginLeft: number;
	                    };
	                };
	                '.transparent': {
	                    marginLeft: number;
	                    'NativeBase.Icon': {
	                        color: string;
	                        fontSize: number;
	                        marginTop: number;
	                        marginRight: number;
	                        marginLeft: number;
	                        paddingTop: number;
	                    };
	                    'NativeBase.IconNB': {
	                        color: string;
	                        fontSize: number;
	                        marginTop: number;
	                        marginRight: number;
	                        marginLeft: number;
	                        paddingTop: number;
	                    };
	                    'NativeBase.Text': {
	                        color: string;
	                        fontSize: number;
	                        top: number;
	                        paddingLeft: number;
	                        paddingRight: number | undefined;
	                    };
	                    backgroundColor: string;
	                    borderColor: null;
	                    elevation: number;
	                    shadowColor: null;
	                    shadowOffset: null;
	                    shadowRadius: null;
	                    shadowOpacity: null;
	                };
	                'NativeBase.Icon': {
	                    color: string;
	                };
	                'NativeBase.IconNB': {
	                    color: string;
	                };
	                alignSelf: null;
	                paddingRight: number;
	                paddingLeft: number;
	            };
	            flex: number;
	            alignSelf: string;
	            alignItems: string;
	        };
	        'NativeBase.Body': {
	            flex: number;
	            alignItems: string;
	            alignSelf: string;
	            'NativeBase.Segment': {
	                borderWidth: number;
	                alignSelf: string;
	                marginRight: number;
	            };
	            'NativeBase.Button': {
	                alignSelf: string;
	                '.transparent': {
	                    backgroundColor: string;
	                };
	                'NativeBase.Icon': {
	                    color: string;
	                };
	                'NativeBase.IconNB': {
	                    color: string;
	                };
	                'NativeBase.Text': {
	                    color: string;
	                    backgroundColor: string;
	                };
	            };
	        };
	        'NativeBase.Right': {
	            'NativeBase.Button': {
	                '.hasText': {
	                    height: number;
	                    'NativeBase.Icon': {
	                        color: string;
	                        fontSize: number;
	                        marginTop: number;
	                        marginRight: number;
	                        marginLeft: number;
	                    };
	                    'NativeBase.Text': {
	                        color: string;
	                        fontSize: number;
	                        lineHeight: number;
	                    };
	                    'NativeBase.IconNB': {
	                        color: string;
	                        fontSize: number;
	                        marginTop: number;
	                        marginRight: number;
	                        marginLeft: number;
	                    };
	                };
	                '.transparent': {
	                    marginRight: number;
	                    paddingLeft: number;
	                    paddingRight: number;
	                    paddingHorizontal: number;
	                    borderRadius: number;
	                    'NativeBase.Icon': {
	                        color: string;
	                        fontSize: number;
	                        marginTop: number;
	                        marginLeft: number;
	                        marginRight: number;
	                    };
	                    'NativeBase.IconNB': {
	                        color: string;
	                        fontSize: number;
	                        marginTop: number;
	                        marginLeft: number;
	                        marginRight: number;
	                    };
	                    'NativeBase.Text': {
	                        color: string;
	                        fontSize: number;
	                        top: number;
	                        paddingRight: number | undefined;
	                    };
	                    backgroundColor: string;
	                    borderColor: null;
	                    elevation: number;
	                    shadowColor: null;
	                    shadowOffset: null;
	                    shadowRadius: null;
	                    shadowOpacity: null;
	                };
	                'NativeBase.Icon': {
	                    color: string;
	                };
	                'NativeBase.IconNB': {
	                    color: string;
	                };
	                alignSelf: null;
	                paddingHorizontal: number;
	            };
	            flex: number;
	            alignSelf: string;
	            alignItems: string;
	            flexDirection: string;
	            justifyContent: string;
	        };
	        backgroundColor: string;
	        flexDirection: string;
	        paddingLeft: number;
	        paddingRight: number;
	        justifyContent: string;
	        paddingTop: number;
	        borderBottomWidth: number;
	        borderBottomColor: string;
	        height: number;
	        elevation: number;
	        shadowColor: string | undefined;
	        shadowOffset: {
	            width: number;
	            height: number;
	        } | undefined;
	        shadowOpacity: number | undefined;
	        shadowRadius: number | undefined;
	        top: number;
	        left: number;
	        right: number;
	    };
	    'NativeBase.Button': {
	        '.disabled': {
	            '.transparent': {
	                backgroundColor: string;
	                'NativeBase.Text': {
	                    color: string;
	                };
	                'NativeBase.Icon': {
	                    color: string;
	                };
	                'NativeBase.IconNB': {
	                    color: string;
	                };
	            };
	            'NativeBase.Icon': {
	                color: string;
	            };
	            'NativeBase.IconNB': {
	                color: string;
	            };
	            backgroundColor: string;
	        };
	        '.bordered': {
	            borderWidth: number;
	            elevation: null;
	            shadowColor: null;
	            shadowOffset: null;
	            shadowOpacity: null;
	            shadowRadius: null;
	            backgroundColor: string;
	            'NativeBase.Text': {
	                color: string;
	            };
	            'NativeBase.Icon': {
	                color: string;
	            };
	            'NativeBase.IconNB': {
	                color: string;
	            };
	            '.dark': {
	                backgroundColor: string;
	                borderColor: string;
	                borderWidth: number;
	                'NativeBase.Text': {
	                    color: string;
	                };
	                'NativeBase.Icon': {
	                    color: string;
	                };
	                'NativeBase.IconNB': {
	                    color: string;
	                };
	            };
	            '.light': {
	                backgroundColor: string;
	                borderColor: string;
	                borderWidth: number;
	                'NativeBase.Text': {
	                    color: string;
	                };
	                'NativeBase.Icon': {
	                    color: string;
	                };
	                'NativeBase.IconNB': {
	                    color: string;
	                };
	            };
	            '.primary': {
	                backgroundColor: string;
	                borderColor: string;
	                borderWidth: number;
	                'NativeBase.Text': {
	                    color: string;
	                };
	                'NativeBase.Icon': {
	                    color: string;
	                };
	                'NativeBase.IconNB': {
	                    color: string;
	                };
	            };
	            '.success': {
	                backgroundColor: string;
	                borderColor: string;
	                borderWidth: number;
	                'NativeBase.Text': {
	                    color: string;
	                };
	                'NativeBase.Icon': {
	                    color: string;
	                };
	                'NativeBase.IconNB': {
	                    color: string;
	                };
	            };
	            '.info': {
	                backgroundColor: string;
	                borderColor: string;
	                borderWidth: number;
	                'NativeBase.Text': {
	                    color: string;
	                };
	                'NativeBase.Icon': {
	                    color: string;
	                };
	                'NativeBase.IconNB': {
	                    color: string;
	                };
	            };
	            '.warning': {
	                backgroundColor: string;
	                borderColor: string;
	                borderWidth: number;
	                'NativeBase.Text': {
	                    color: string;
	                };
	                'NativeBase.Icon': {
	                    color: string;
	                };
	                'NativeBase.IconNB': {
	                    color: string;
	                };
	            };
	            '.danger': {
	                backgroundColor: string;
	                borderColor: string;
	                borderWidth: number;
	                'NativeBase.Text': {
	                    color: string;
	                };
	                'NativeBase.Icon': {
	                    color: string;
	                };
	                'NativeBase.IconNB': {
	                    color: string;
	                };
	            };
	            '.disabled': {
	                backgroundColor: string;
	                borderColor: string;
	                borderWidth: number;
	                'NativeBase.Text': {
	                    color: string;
	                };
	            };
	        };
	        '.dark': {
	            '.bordered': {
	                'NativeBase.Text': {
	                    color: string;
	                };
	                'NativeBase.Icon': {
	                    color: string;
	                };
	                'NativeBase.IconNB': {
	                    color: string;
	                };
	            };
	            backgroundColor: string;
	        };
	        '.light': {
	            backgroundColor: string;
	            'NativeBase.Text': {
	                color: string;
	            };
	            'NativeBase.Icon': {
	                color: string;
	            };
	            'NativeBase.IconNB': {
	                color: string;
	            };
	            '.transparent': {
	                backgroundColor: string;
	                'NativeBase.Text': {
	                    color: string;
	                };
	                'NativeBase.Icon': {
	                    color: string;
	                };
	                'NativeBase.IconNB': {
	                    color: string;
	                };
	            };
	            '.bordered': {
	                'NativeBase.Text': {
	                    color: string;
	                };
	                'NativeBase.Icon': {
	                    color: string;
	                };
	                'NativeBase.IconNB': {
	                    color: string;
	                };
	            };
	        };
	        '.primary': {
	            '.bordered': {
	                'NativeBase.Text': {
	                    color: string;
	                };
	                'NativeBase.Icon': {
	                    color: string;
	                };
	                'NativeBase.IconNB': {
	                    color: string;
	                };
	            };
	            backgroundColor: string;
	        };
	        '.success': {
	            '.bordered': {
	                'NativeBase.Text': {
	                    color: string;
	                };
	                'NativeBase.Icon': {
	                    color: string;
	                };
	                'NativeBase.IconNB': {
	                    color: string;
	                };
	            };
	            backgroundColor: string;
	        };
	        '.info': {
	            '.bordered': {
	                'NativeBase.Text': {
	                    color: string;
	                };
	                'NativeBase.Icon': {
	                    color: string;
	                };
	                'NativeBase.IconNB': {
	                    color: string;
	                };
	            };
	            backgroundColor: string;
	        };
	        '.warning': {
	            '.bordered': {
	                'NativeBase.Text': {
	                    color: string;
	                };
	                'NativeBase.Icon': {
	                    color: string;
	                };
	                'NativeBase.IconNB': {
	                    color: string;
	                };
	            };
	            backgroundColor: string;
	        };
	        '.danger': {
	            '.bordered': {
	                'NativeBase.Text': {
	                    color: string;
	                };
	                'NativeBase.Icon': {
	                    color: string;
	                };
	                'NativeBase.IconNB': {
	                    color: string;
	                };
	            };
	            backgroundColor: string;
	        };
	        '.block': {
	            justifyContent: string;
	            alignSelf: string;
	        };
	        '.full': {
	            justifyContent: string;
	            alignSelf: string;
	            borderRadius: number;
	        };
	        '.rounded': {
	            borderRadius: number;
	        };
	        '.transparent': {
	            '.dark': {
	                'NativeBase.Text': {
	                    color: string;
	                };
	                'NativeBase.Icon': {
	                    color: string;
	                };
	                'NativeBase.IconNB': {
	                    color: string;
	                };
	            };
	            '.danger': {
	                'NativeBase.Text': {
	                    color: string;
	                };
	                'NativeBase.Icon': {
	                    color: string;
	                };
	                'NativeBase.IconNB': {
	                    color: string;
	                };
	            };
	            '.warning': {
	                'NativeBase.Text': {
	                    color: string;
	                };
	                'NativeBase.Icon': {
	                    color: string;
	                };
	                'NativeBase.IconNB': {
	                    color: string;
	                };
	            };
	            '.info': {
	                'NativeBase.Text': {
	                    color: string;
	                };
	                'NativeBase.Icon': {
	                    color: string;
	                };
	                'NativeBase.IconNB': {
	                    color: string;
	                };
	            };
	            '.primary': {
	                'NativeBase.Text': {
	                    color: string;
	                };
	                'NativeBase.Icon': {
	                    color: string;
	                };
	                'NativeBase.IconNB': {
	                    color: string;
	                };
	            };
	            '.success': {
	                'NativeBase.Text': {
	                    color: string;
	                };
	                'NativeBase.Icon': {
	                    color: string;
	                };
	                'NativeBase.IconNB': {
	                    color: string;
	                };
	            };
	            '.light': {
	                'NativeBase.Text': {
	                    color: string;
	                };
	                'NativeBase.Icon': {
	                    color: string;
	                };
	                'NativeBase.IconNB': {
	                    color: string;
	                };
	            };
	            '.disabled': {
	                backgroundColor: string;
	                borderColor: string;
	                borderWidth: number;
	                'NativeBase.Text': {
	                    color: string;
	                };
	                'NativeBase.Icon': {
	                    color: string;
	                };
	                'NativeBase.IconNB': {
	                    color: string;
	                };
	            };
	            'NativeBase.Text': {
	                color: string;
	            };
	            'NativeBase.Icon': {
	                color: string;
	            };
	            'NativeBase.IconNB': {
	                color: string;
	            };
	            backgroundColor: string;
	            elevation: number;
	            shadowColor: null;
	            shadowOffset: null;
	            shadowRadius: null;
	            shadowOpacity: null;
	        };
	        '.small': {
	            height: number;
	            'NativeBase.Text': {
	                fontSize: number;
	            };
	            'NativeBase.Icon': {
	                fontSize: number;
	                paddingTop: number;
	            };
	            'NativeBase.IconNB': {
	                fontSize: number;
	                paddingTop: number;
	            };
	        };
	        '.large': {
	            height: number;
	            'NativeBase.Text': {
	                fontSize: number;
	            };
	        };
	        '.capitalize': {};
	        '.vertical': {
	            flexDirection: string;
	            height: null;
	        };
	        'NativeBase.Text': {
	            fontFamily: string;
	            marginLeft: number;
	            marginRight: number;
	            color: string;
	            fontSize: number;
	            paddingHorizontal: number;
	            backgroundColor: string;
	        };
	        'NativeBase.Icon': {
	            color: string;
	            fontSize: number;
	            marginHorizontal: number;
	            paddingTop: number | undefined;
	        };
	        'NativeBase.IconNB': {
	            color: string;
	            fontSize: number;
	            marginHorizontal: number;
	            paddingTop: number | undefined;
	        };
	        '.iconLeft': {
	            'NativeBase.Text': {
	                marginLeft: number;
	            };
	            'NativeBase.IconNB': {
	                marginRight: number;
	                marginLeft: number;
	            };
	            'NativeBase.Icon': {
	                marginRight: number;
	                marginLeft: number;
	            };
	        };
	        '.iconRight': {
	            'NativeBase.Text': {
	                marginRight: number;
	            };
	            'NativeBase.IconNB': {
	                marginLeft: number;
	                marginRight: number;
	            };
	            'NativeBase.Icon': {
	                marginLeft: number;
	                marginRight: number;
	            };
	        };
	        '.picker': {
	            'NativeBase.Text': {
	                '.note': {
	                    fontSize: number;
	                    lineHeight: null;
	                };
	            };
	        };
	        paddingVertical: number;
	        backgroundColor: string;
	        borderRadius: number;
	        borderColor: string;
	        borderWidth: null;
	        height: number;
	        flexDirection: string;
	        elevation: number;
	        shadowColor: string | undefined;
	        shadowOffset: {
	            width: number;
	            height: number;
	        } | undefined;
	        shadowOpacity: number | undefined;
	        shadowRadius: number | undefined;
	        alignItems: string;
	        justifyContent: string;
	    };
	    'NativeBase.Title': {
	        fontSize: number;
	        fontFamily: string;
	        color: string;
	        fontWeight: string | undefined;
	        textAlign: string;
	        paddingLeft: number;
	        marginLeft: number | undefined;
	        paddingTop: number;
	    };
	    'NativeBase.Subtitle': {
	        fontSize: number;
	        fontFamily: string;
	        color: string;
	        textAlign: string;
	        paddingLeft: number;
	        marginLeft: number | undefined;
	    };
	    'NativeBase.InputGroup': {
	        'NativeBase.Icon': {
	            fontSize: number;
	            color: string;
	            paddingHorizontal: number;
	        };
	        'NativeBase.IconNB': {
	            fontSize: number;
	            color: string;
	            paddingHorizontal: number;
	        };
	        'NativeBase.Input': {
	            height: number;
	            color: string;
	            paddingLeft: number;
	            paddingRight: number;
	            flex: number;
	            fontSize: number;
	            lineHeight: number;
	        };
	        '.underline': {
	            '.success': {
	                borderColor: string;
	            };
	            '.error': {
	                borderColor: string;
	            };
	            paddingLeft: number;
	            borderWidth: number;
	            borderTopWidth: number;
	            borderRightWidth: number;
	            borderLeftWidth: number;
	            borderColor: string;
	        };
	        '.regular': {
	            '.success': {
	                borderColor: string;
	            };
	            '.error': {
	                borderColor: string;
	            };
	            paddingLeft: number;
	            borderWidth: number;
	            borderColor: string;
	        };
	        '.rounded': {
	            '.success': {
	                borderColor: string;
	            };
	            '.error': {
	                borderColor: string;
	            };
	            paddingLeft: number;
	            borderWidth: number;
	            borderRadius: number;
	            borderColor: string;
	        };
	        '.success': {
	            'NativeBase.Icon': {
	                color: string;
	            };
	            'NativeBase.IconNB': {
	                color: string;
	            };
	            '.rounded': {
	                borderRadius: number;
	                borderColor: string;
	            };
	            '.regular': {
	                borderColor: string;
	            };
	            '.underline': {
	                borderWidth: number;
	                borderTopWidth: number;
	                borderRightWidth: number;
	                borderLeftWidth: number;
	                borderColor: string;
	            };
	            borderColor: string;
	        };
	        '.error': {
	            'NativeBase.Icon': {
	                color: string;
	            };
	            'NativeBase.IconNB': {
	                color: string;
	            };
	            '.rounded': {
	                borderRadius: number;
	                borderColor: string;
	            };
	            '.regular': {
	                borderColor: string;
	            };
	            '.underline': {
	                borderWidth: number;
	                borderTopWidth: number;
	                borderRightWidth: number;
	                borderLeftWidth: number;
	                borderColor: string;
	            };
	            borderColor: string;
	        };
	        '.disabled': {
	            'NativeBase.Icon': {
	                color: string;
	            };
	            'NativeBase.IconNB': {
	                color: string;
	            };
	        };
	        paddingLeft: number;
	        borderWidth: number;
	        borderTopWidth: number;
	        borderRightWidth: number;
	        borderLeftWidth: number;
	        borderColor: string;
	        backgroundColor: string;
	        flexDirection: string;
	        alignItems: string;
	    };
	    'NativeBase.Input': {
	        '.multiline': {
	            height: null;
	        };
	        height: number;
	        color: string;
	        paddingLeft: number;
	        paddingRight: number;
	        flex: number;
	        fontSize: number;
	    };
	    'NativeBase.Badge': {
	        '.primary': {
	            backgroundColor: string;
	        };
	        '.warning': {
	            backgroundColor: string;
	        };
	        '.info': {
	            backgroundColor: string;
	        };
	        '.success': {
	            backgroundColor: string;
	        };
	        '.danger': {
	            backgroundColor: string;
	        };
	        'NativeBase.Text': {
	            color: string;
	            fontSize: number;
	            lineHeight: number;
	            textAlign: string;
	            paddingHorizontal: number;
	        };
	        backgroundColor: string;
	        padding: number;
	        paddingHorizontal: number;
	        alignSelf: string;
	        justifyContent: string | undefined;
	        borderRadius: number;
	        height: number;
	    };
	    'NativeBase.CheckBox': {
	        '.checked': {
	            'NativeBase.Icon': {
	                color: string;
	            };
	            'NativeBase.IconNB': {
	                color: string;
	            };
	        };
	        'NativeBase.Icon': {
	            color: string;
	            lineHeight: number;
	            marginTop: number | undefined;
	            fontSize: number;
	        };
	        'NativeBase.IconNB': {
	            color: string;
	            lineHeight: number;
	            marginTop: number | undefined;
	            fontSize: number;
	        };
	        borderRadius: number;
	        overflow: string;
	        width: number;
	        height: number;
	        borderWidth: number;
	        paddingLeft: number;
	        paddingBottom: number;
	        left: number;
	    };
	    'NativeBase.Radio': {
	        '.selected': {
	            'NativeBase.IconNB': {
	                color: string;
	                lineHeight: number;
	                height: number | undefined;
	            };
	        };
	        'NativeBase.IconNB': {
	            color: string | undefined;
	            lineHeight: number | undefined;
	            fontSize: number | undefined;
	        };
	    };
	    'NativeBase.Card': {
	        '.transparent': {
	            shadowColor: null;
	            shadowOffset: null;
	            shadowOpacity: null;
	            shadowRadius: null;
	            elevation: null;
	            backgroundColor: string;
	            borderWidth: number;
	        };
	        '.noShadow': {
	            shadowColor: null;
	            shadowOffset: null;
	            shadowOpacity: null;
	            elevation: null;
	        };
	        marginVertical: number;
	        marginHorizontal: number;
	        borderWidth: number;
	        borderRadius: number;
	        borderColor: string;
	        flexWrap: string;
	        backgroundColor: string;
	        shadowColor: string;
	        shadowOffset: {
	            width: number;
	            height: number;
	        };
	        shadowOpacity: number;
	        shadowRadius: number;
	        elevation: number;
	    };
	    'NativeBase.CardItem': {
	        'NativeBase.Left': {
	            'NativeBase.Body': {
	                'NativeBase.Text': {
	                    '.note': {
	                        color: string;
	                        fontWeight: string;
	                        marginRight: number;
	                    };
	                };
	                flex: number;
	                marginLeft: number;
	                alignItems: null;
	            };
	            'NativeBase.Icon': {
	                fontSize: number;
	            };
	            'NativeBase.IconNB': {
	                fontSize: number;
	            };
	            'NativeBase.Text': {
	                marginLeft: number;
	                alignSelf: string;
	            };
	            'NativeBase.Button': {
	                '.transparent': {
	                    paddingRight: number;
	                    'NativeBase.Text': {
	                        fontSize: number;
	                        color: string;
	                    };
	                    'NativeBase.Icon': {
	                        fontSize: number;
	                        color: string;
	                        marginHorizontal: null;
	                    };
	                    'NativeBase.IconNB': {
	                        fontSize: number;
	                        color: string;
	                    };
	                    paddingVertical: null;
	                    paddingHorizontal: null;
	                };
	            };
	            flex: number;
	            flexDirection: string;
	            alignItems: string;
	        };
	        '.content': {
	            'NativeBase.Text': {
	                color: string;
	                fontSize: number;
	            };
	        };
	        '.cardBody': {
	            padding: number;
	            'NativeBase.Text': {
	                marginTop: number;
	            };
	        };
	        'NativeBase.Body': {
	            'NativeBase.Text': {
	                '.note': {
	                    color: string;
	                    fontWeight: string;
	                    marginRight: number;
	                };
	            };
	            'NativeBase.Button': {
	                '.transparent': {
	                    paddingRight: number;
	                    alignSelf: string;
	                    'NativeBase.Text': {
	                        fontSize: number;
	                        color: string;
	                    };
	                    'NativeBase.Icon': {
	                        fontSize: number;
	                        color: string;
	                        marginHorizontal: null;
	                    };
	                    'NativeBase.IconNB': {
	                        fontSize: number;
	                        color: string;
	                    };
	                    paddingVertical: null;
	                    paddingHorizontal: null;
	                };
	            };
	            flex: number;
	            alignSelf: string;
	            alignItems: string;
	        };
	        'NativeBase.Right': {
	            'NativeBase.Badge': {
	                alignSelf: null;
	            };
	            'NativeBase.Button': {
	                '.transparent': {
	                    'NativeBase.Text': {
	                        fontSize: number;
	                        color: string;
	                    };
	                    'NativeBase.Icon': {
	                        fontSize: number;
	                        color: string;
	                        marginHorizontal: null;
	                    };
	                    'NativeBase.IconNB': {
	                        fontSize: number;
	                        color: string;
	                    };
	                    paddingVertical: null;
	                    paddingHorizontal: null;
	                };
	                alignSelf: null;
	            };
	            'NativeBase.Icon': {
	                alignSelf: null;
	                fontSize: number;
	                color: string;
	            };
	            'NativeBase.IconNB': {
	                alignSelf: null;
	                fontSize: number;
	                color: string;
	            };
	            'NativeBase.Text': {
	                fontSize: number;
	                alignSelf: null;
	            };
	            'NativeBase.Thumbnail': {
	                alignSelf: null;
	            };
	            'NativeBase.Image': {
	                alignSelf: null;
	            };
	            'NativeBase.Radio': {
	                alignSelf: null;
	            };
	            'NativeBase.Checkbox': {
	                alignSelf: null;
	            };
	            'NativeBase.Switch': {
	                alignSelf: null;
	            };
	            flex: number;
	        };
	        '.header': {
	            'NativeBase.Text': {
	                fontSize: number;
	                fontWeight: string;
	            };
	            '.bordered': {
	                'NativeBase.Text': {
	                    color: string;
	                    fontWeight: string;
	                };
	                borderBottomWidth: number;
	            };
	            borderBottomWidth: null;
	            paddingVertical: number;
	        };
	        '.footer': {
	            'NativeBase.Text': {
	                fontSize: number;
	                fontWeight: string;
	            };
	            '.bordered': {
	                'NativeBase.Text': {
	                    color: string;
	                    fontWeight: string;
	                };
	                borderTopWidth: number;
	            };
	            borderBottomWidth: null;
	        };
	        'NativeBase.Text': {
	            '.note': {
	                color: string;
	                fontWeight: string;
	            };
	        };
	        'NativeBase.Icon': {
	            width: number;
	            fontSize: number;
	        };
	        'NativeBase.IconNB': {
	            width: number;
	            fontSize: number;
	        };
	        '.bordered': {
	            borderBottomWidth: number;
	            borderColor: string;
	        };
	        '.first': {
	            borderTopLeftRadius: number;
	            borderTopRightRadius: number;
	        };
	        '.last': {
	            borderBottomLeftRadius: number;
	            borderBottomRightRadius: number;
	        };
	        flexDirection: string;
	        alignItems: string;
	        borderRadius: number;
	        padding: number;
	        paddingVertical: number;
	        backgroundColor: string;
	    };
	    'NativeBase.Toast': {
	        '.danger': {
	            backgroundColor: string;
	        };
	        '.warning': {
	            backgroundColor: string;
	        };
	        '.success': {
	            backgroundColor: string;
	        };
	        backgroundColor: string;
	        borderRadius: number;
	        flexDirection: string;
	        justifyContent: string;
	        alignItems: string;
	        padding: number;
	        minHeight: number;
	        'NativeBase.Text': {
	            color: string;
	            flex: number;
	        };
	        'NativeBase.Button': {
	            backgroundColor: string;
	            height: number;
	            elevation: number;
	            'NativeBase.Text': {
	                fontSize: number;
	            };
	        };
	    };
	    'NativeBase.H1': {
	        color: string;
	        fontSize: number;
	        lineHeight: number;
	    };
	    'NativeBase.H2': {
	        color: string;
	        fontSize: number;
	        lineHeight: number;
	    };
	    'NativeBase.H3': {
	        color: string;
	        fontSize: number;
	        lineHeight: number;
	    };
	    'NativeBase.Form': {
	        'NativeBase.Item': {
	            '.fixedLabel': {
	                'NativeBase.Label': {
	                    paddingLeft: null;
	                };
	                marginLeft: number;
	            };
	            '.inlineLabel': {
	                'NativeBase.Label': {
	                    paddingLeft: null;
	                };
	                marginLeft: number;
	            };
	            '.placeholderLabel': {
	                'NativeBase.Input': {};
	            };
	            '.stackedLabel': {
	                'NativeBase.Label': {
	                    top: number;
	                    paddingLeft: null;
	                };
	                'NativeBase.Input': {
	                    paddingLeft: null;
	                    marginLeft: null;
	                };
	                'NativeBase.Icon': {
	                    marginTop: number;
	                };
	                marginLeft: number;
	            };
	            '.floatingLabel': {
	                'NativeBase.Input': {
	                    paddingLeft: null;
	                    top: number;
	                    marginLeft: null;
	                };
	                'NativeBase.Label': {
	                    left: number;
	                    top: number;
	                };
	                'NativeBase.Icon': {
	                    top: number;
	                };
	                marginTop: number;
	                marginLeft: number;
	            };
	            '.regular': {
	                'NativeBase.Label': {
	                    left: number;
	                };
	                marginLeft: number;
	            };
	            '.rounded': {
	                'NativeBase.Label': {
	                    left: number;
	                };
	                marginLeft: number;
	            };
	            '.underline': {
	                'NativeBase.Label': {
	                    left: number;
	                    top: number;
	                    position: string;
	                };
	                'NativeBase.Input': {
	                    left: number;
	                };
	                marginLeft: number;
	            };
	            '.last': {
	                marginLeft: number;
	                paddingLeft: number;
	            };
	            'NativeBase.Label': {
	                paddingRight: number;
	            };
	            marginLeft: number;
	        };
	    };
	    'NativeBase.Container': {
	        flex: number;
	        height: number;
	        backgroundColor: string;
	    };
	    'NativeBase.Content': {
	        flex: number;
	        backgroundColor: string;
	        'NativeBase.Segment': {
	            borderWidth: number;
	            backgroundColor: string;
	        };
	    };
	    'NativeBase.Footer': {
	        'NativeBase.Left': {
	            'NativeBase.Button': {
	                'NativeBase.IconNB': {
	                    color: string;
	                };
	                'NativeBase.Icon': {
	                    color: string;
	                };
	                '.transparent': {
	                    'NativeBase.Text': {
	                        color: string;
	                    };
	                    'NativeBase.IconNB': {
	                        color: string;
	                    };
	                    'NativeBase.Icon': {
	                        color: string;
	                    };
	                    backgroundColor: string;
	                    borderColor: null;
	                    elevation: number;
	                    shadowColor: null;
	                    shadowOffset: null;
	                    shadowRadius: null;
	                    shadowOpacity: null;
	                };
	                alignSelf: null;
	            };
	            flex: number;
	            alignSelf: string;
	            alignItems: string;
	        };
	        'NativeBase.Body': {
	            flex: number;
	            alignItems: string;
	            alignSelf: string;
	            flexDirection: string;
	            'NativeBase.Button': {
	                'NativeBase.IconNB': {
	                    color: string;
	                };
	                'NativeBase.Icon': {
	                    color: string;
	                };
	                alignSelf: string;
	                '.transparent': {
	                    'NativeBase.Text': {
	                        color: string;
	                    };
	                    'NativeBase.IconNB': {
	                        color: string;
	                    };
	                    'NativeBase.Icon': {
	                        color: string;
	                    };
	                    backgroundColor: string;
	                    borderColor: null;
	                    elevation: number;
	                    shadowColor: null;
	                    shadowOffset: null;
	                    shadowRadius: null;
	                    shadowOpacity: null;
	                };
	                '.full': {
	                    height: number;
	                    paddingBottom: number;
	                    flex: number;
	                };
	            };
	        };
	        'NativeBase.Right': {
	            'NativeBase.Button': {
	                'NativeBase.IconNB': {
	                    color: string;
	                };
	                'NativeBase.Icon': {
	                    color: string;
	                };
	                '.transparent': {
	                    'NativeBase.Text': {
	                        color: string;
	                    };
	                    'NativeBase.IconNB': {
	                        color: string;
	                    };
	                    'NativeBase.Icon': {
	                        color: string;
	                    };
	                    backgroundColor: string;
	                    borderColor: null;
	                    elevation: number;
	                    shadowColor: null;
	                    shadowOffset: null;
	                    shadowRadius: null;
	                    shadowOpacity: null;
	                };
	                alignSelf: null;
	            };
	            flex: number;
	            alignSelf: string;
	            alignItems: string;
	        };
	        backgroundColor: string;
	        flexDirection: string;
	        justifyContent: string;
	        borderTopWidth: number | undefined;
	        borderColor: string | undefined;
	        height: number;
	        paddingBottom: number;
	        elevation: number;
	        left: number;
	        right: number;
	    };
	    'NativeBase.Tabs': {
	        flex: number;
	    };
	    'NativeBase.FooterTab': {
	        'NativeBase.Button': {
	            '.active': {
	                'NativeBase.Text': {
	                    color: string;
	                    fontSize: number;
	                    lineHeight: number;
	                };
	                'NativeBase.Icon': {
	                    color: string;
	                };
	                'NativeBase.IconNB': {
	                    color: string;
	                };
	                backgroundColor: string;
	            };
	            flexDirection: null;
	            backgroundColor: string;
	            borderColor: null;
	            elevation: number;
	            shadowColor: null;
	            shadowOffset: null;
	            shadowRadius: null;
	            shadowOpacity: null;
	            alignSelf: string;
	            flex: number;
	            height: number;
	            justifyContent: string;
	            '.badge': {
	                'NativeBase.Badge': {
	                    'NativeBase.Text': {
	                        fontSize: number;
	                        fontWeight: string | undefined;
	                        lineHeight: number;
	                    };
	                    top: number;
	                    alignSelf: string;
	                    left: number;
	                    zIndex: number;
	                    height: number;
	                    padding: number;
	                    paddingHorizontal: number;
	                };
	                'NativeBase.Icon': {
	                    marginTop: number;
	                };
	            };
	            'NativeBase.Icon': {
	                color: string;
	            };
	            'NativeBase.IconNB': {
	                color: string;
	            };
	            'NativeBase.Text': {
	                color: string;
	                fontSize: number;
	                lineHeight: number;
	            };
	        };
	        backgroundColor: string | undefined;
	        flexDirection: string;
	        justifyContent: string;
	        flex: number;
	        alignSelf: string;
	    };
	    'NativeBase.ListItem': {
	        'NativeBase.InputGroup': {
	            'NativeBase.Icon': {
	                paddingRight: number;
	            };
	            'NativeBase.IconNB': {
	                paddingRight: number;
	            };
	            'NativeBase.Input': {
	                paddingHorizontal: number;
	            };
	            flex: number;
	            borderWidth: null;
	            margin: number;
	            borderBottomColor: string;
	        };
	        '.searchBar': {
	            'NativeBase.Item': {
	                'NativeBase.Icon': {
	                    backgroundColor: string;
	                    color: string;
	                    fontSize: number;
	                    alignItems: string;
	                    marginTop: number;
	                    paddingRight: number;
	                };
	                'NativeBase.IconNB': {
	                    backgroundColor: string;
	                    color: null;
	                    alignSelf: string;
	                };
	                'NativeBase.Input': {
	                    alignSelf: string;
	                };
	                alignSelf: string;
	                alignItems: string;
	                justifyContent: string;
	                flex: number;
	                height: number;
	                borderColor: string;
	                backgroundColor: string;
	                borderRadius: number;
	            };
	            'NativeBase.Button': {
	                '.transparent': {
	                    'NativeBase.Text': {
	                        fontWeight: string;
	                    };
	                    paddingHorizontal: null;
	                    paddingLeft: number | null;
	                };
	                paddingHorizontal: null | undefined;
	                width: number | undefined;
	                height: number | undefined;
	            };
	            backgroundColor: string;
	            padding: number;
	            marginLeft: null;
	        };
	        'NativeBase.CheckBox': {
	            marginLeft: number;
	            marginRight: number;
	        };
	        '.first': {
	            '.itemHeader': {
	                paddingTop: number;
	            };
	        };
	        '.itemHeader': {
	            '.first': {
	                paddingTop: number;
	            };
	            borderBottomWidth: number | null;
	            marginLeft: null;
	            padding: number;
	            paddingLeft: number;
	            paddingTop: number | undefined;
	            paddingBottom: number | undefined;
	            flexDirection: string;
	            borderColor: string;
	            'NativeBase.Text': {
	                fontSize: number;
	                color: string | undefined;
	            };
	        };
	        '.itemDivider': {
	            borderBottomWidth: null;
	            marginLeft: null;
	            padding: number;
	            paddingLeft: number;
	            backgroundColor: string;
	            flexDirection: string;
	            borderColor: string;
	        };
	        '.selected': {
	            'NativeBase.Text': {
	                color: string;
	            };
	            'NativeBase.Icon': {
	                color: string;
	            };
	            'NativeBase.Left': {
	                'NativeBase.Text': {
	                    color: string;
	                };
	                'NativeBase.Icon': {
	                    color: string;
	                };
	            };
	            'NativeBase.Body': {
	                'NativeBase.Text': {
	                    color: string;
	                };
	                'NativeBase.Icon': {
	                    color: string;
	                };
	            };
	            'NativeBase.Right': {
	                'NativeBase.Text': {
	                    color: string;
	                };
	                'NativeBase.Icon': {
	                    color: string;
	                };
	            };
	        };
	        'NativeBase.Left': {
	            'NativeBase.Body': {
	                'NativeBase.Text': {
	                    '.note': {
	                        color: string;
	                        fontWeight: string;
	                    };
	                    fontWeight: string;
	                };
	                marginLeft: number;
	                alignItems: null;
	                alignSelf: null;
	            };
	            'NativeBase.Icon': {
	                width: number;
	                fontSize: number;
	            };
	            'NativeBase.IconNB': {
	                width: number;
	                fontSize: number;
	            };
	            'NativeBase.Text': {
	                alignSelf: string;
	            };
	            flexDirection: string;
	        };
	        'NativeBase.Body': {
	            'NativeBase.Text': {
	                marginHorizontal: number;
	                '.note': {
	                    color: string;
	                    fontWeight: string;
	                };
	            };
	            alignSelf: null;
	            alignItems: null;
	        };
	        'NativeBase.Right': {
	            'NativeBase.Badge': {
	                alignSelf: null;
	            };
	            'NativeBase.PickerNB': {
	                'NativeBase.Button': {
	                    marginRight: number;
	                    'NativeBase.Text': {
	                        color: string;
	                    };
	                };
	            };
	            'NativeBase.Button': {
	                alignSelf: null;
	                '.transparent': {
	                    'NativeBase.Text': {
	                        color: string;
	                    };
	                };
	            };
	            'NativeBase.Icon': {
	                alignSelf: null;
	                fontSize: number;
	                color: string;
	            };
	            'NativeBase.IconNB': {
	                alignSelf: null;
	                fontSize: number;
	                color: string;
	            };
	            'NativeBase.Text': {
	                '.note': {
	                    color: string;
	                    fontWeight: string;
	                };
	                alignSelf: null;
	            };
	            'NativeBase.Thumbnail': {
	                alignSelf: null;
	            };
	            'NativeBase.Image': {
	                alignSelf: null;
	            };
	            'NativeBase.Radio': {
	                alignSelf: null;
	            };
	            'NativeBase.Checkbox': {
	                alignSelf: null;
	            };
	            'NativeBase.Switch': {
	                alignSelf: null;
	            };
	            padding: null;
	            flex: number;
	        };
	        'NativeBase.Text': {
	            '.note': {
	                color: string;
	                fontWeight: string;
	            };
	            alignSelf: string;
	        };
	        '.last': {
	            marginLeft: number;
	            paddingLeft: number;
	            top: number;
	        };
	        '.avatar': {
	            'NativeBase.Left': {
	                flex: number;
	                alignSelf: string;
	                paddingTop: number;
	            };
	            'NativeBase.Body': {
	                'NativeBase.Text': {
	                    marginLeft: null;
	                };
	                flex: number;
	                paddingVertical: number;
	                borderBottomWidth: number;
	                borderColor: string;
	                marginLeft: number;
	            };
	            'NativeBase.Right': {
	                'NativeBase.Text': {
	                    '.note': {
	                        fontSize: number;
	                    };
	                };
	                flex: number;
	                paddingRight: number;
	                alignSelf: string;
	                paddingVertical: number;
	                borderBottomWidth: number;
	                borderColor: string;
	            };
	            '.noBorder': {
	                'NativeBase.Body': {
	                    borderBottomWidth: null;
	                };
	                'NativeBase.Right': {
	                    borderBottomWidth: null;
	                };
	            };
	            borderBottomWidth: null;
	            paddingVertical: null;
	            paddingRight: null;
	        };
	        '.thumbnail': {
	            'NativeBase.Left': {
	                flex: number;
	            };
	            'NativeBase.Body': {
	                'NativeBase.Text': {
	                    marginLeft: null;
	                };
	                flex: number;
	                paddingVertical: number;
	                borderBottomWidth: number;
	                borderColor: string;
	                marginLeft: number;
	            };
	            'NativeBase.Right': {
	                'NativeBase.Button': {
	                    '.transparent': {
	                        'NativeBase.Text': {
	                            fontSize: number;
	                            color: string;
	                        };
	                    };
	                    height: null;
	                };
	                flex: number;
	                justifyContent: string;
	                alignSelf: string;
	                paddingRight: number;
	                paddingVertical: number;
	                borderBottomWidth: number;
	                borderColor: string;
	            };
	            '.noBorder': {
	                'NativeBase.Body': {
	                    borderBottomWidth: null;
	                };
	                'NativeBase.Right': {
	                    borderBottomWidth: null;
	                };
	            };
	            borderBottomWidth: null;
	            paddingVertical: null;
	            paddingRight: null;
	        };
	        '.icon': {
	            '.last': {
	                'NativeBase.Body': {
	                    borderBottomWidth: null;
	                };
	                'NativeBase.Right': {
	                    borderBottomWidth: null;
	                };
	                borderBottomWidth: number;
	                borderColor: string;
	            };
	            'NativeBase.Left': {
	                'NativeBase.Button': {
	                    'NativeBase.IconNB': {
	                        marginHorizontal: null;
	                        fontSize: number;
	                    };
	                    'NativeBase.Icon': {
	                        marginHorizontal: null;
	                        fontSize: number;
	                    };
	                    alignSelf: string;
	                    height: number;
	                    width: number;
	                    borderRadius: number;
	                    paddingVertical: null;
	                    paddingHorizontal: null;
	                    alignItems: string;
	                    justifyContent: string;
	                };
	                'NativeBase.Icon': {
	                    width: number;
	                    fontSize: number;
	                };
	                'NativeBase.IconNB': {
	                    width: number;
	                    fontSize: number;
	                };
	                paddingRight: number;
	                flex: number;
	                height: number;
	                justifyContent: string;
	                alignItems: string;
	            };
	            'NativeBase.Body': {
	                'NativeBase.Text': {
	                    marginLeft: null;
	                    fontSize: number;
	                };
	                flex: number;
	                height: number;
	                justifyContent: string;
	                borderBottomWidth: number;
	                borderColor: string;
	            };
	            'NativeBase.Right': {
	                'NativeBase.Text': {
	                    textAlign: string;
	                    color: string;
	                    fontSize: number;
	                };
	                'NativeBase.IconNB': {
	                    color: string;
	                    fontSize: number;
	                    alignSelf: string;
	                    paddingLeft: number;
	                    paddingTop: number;
	                };
	                'NativeBase.Icon': {
	                    color: string;
	                    fontSize: number;
	                    alignSelf: string;
	                    paddingLeft: number;
	                    paddingTop: number;
	                };
	                'NativeBase.Switch': {
	                    marginRight: number | undefined;
	                    alignSelf: null;
	                };
	                'NativeBase.PickerNB': {
	                    '.note': {
	                        color: string;
	                    };
	                    marginRight: number;
	                    flexGrow: number;
	                };
	                flexDirection: string;
	                alignItems: string;
	                flex: number;
	                alignSelf: string;
	                height: number;
	                justifyContent: string;
	                borderBottomWidth: number;
	                borderColor: string;
	                paddingRight: number;
	            };
	            '.noBorder': {
	                'NativeBase.Body': {
	                    borderBottomWidth: null;
	                };
	                'NativeBase.Right': {
	                    borderBottomWidth: null;
	                };
	            };
	            borderBottomWidth: null;
	            paddingVertical: null;
	            paddingRight: null;
	            height: number;
	            justifyContent: string;
	        };
	        '.noBorder': {
	            borderBottomWidth: null;
	        };
	        '.noIndent': {
	            marginLeft: null;
	            padding: number;
	            paddingLeft: number;
	        };
	        alignItems: string;
	        flexDirection: string;
	        paddingRight: number;
	        paddingVertical: number;
	        marginLeft: number;
	        borderBottomWidth: number;
	        backgroundColor: string;
	        borderColor: string;
	    };
	    'NativeBase.ListItem1': {
	        'NativeBase.InputGroup': {
	            'NativeBase.Icon': {
	                paddingRight: number;
	            };
	            'NativeBase.IconNB': {
	                paddingRight: number;
	            };
	            'NativeBase.Input': {
	                paddingHorizontal: number;
	            };
	            flex: number;
	            borderWidth: null;
	            margin: number;
	            borderBottomColor: string;
	        };
	        '.searchBar': {
	            'NativeBase.Item': {
	                'NativeBase.Icon': {
	                    backgroundColor: string;
	                    color: string;
	                    fontSize: number;
	                    alignItems: string;
	                    marginTop: number;
	                    paddingRight: number;
	                };
	                'NativeBase.IconNB': {
	                    backgroundColor: string;
	                    color: null;
	                    alignSelf: string;
	                };
	                'NativeBase.Input': {
	                    alignSelf: string;
	                };
	                alignSelf: string;
	                alignItems: string;
	                justifyContent: string;
	                flex: number;
	                height: number;
	                borderColor: string;
	                backgroundColor: string;
	                borderRadius: number;
	            };
	            'NativeBase.Button': {
	                '.transparent': {
	                    'NativeBase.Text': {
	                        fontWeight: string;
	                    };
	                    paddingHorizontal: null;
	                    paddingLeft: number | null;
	                };
	                paddingHorizontal: null | undefined;
	                width: number | undefined;
	                height: number | undefined;
	            };
	            backgroundColor: string;
	            padding: number;
	            marginLeft: null;
	        };
	        'NativeBase.CheckBox': {
	            marginLeft: number;
	            marginRight: number;
	        };
	        '.first': {
	            '.itemHeader': {
	                paddingTop: number;
	            };
	        };
	        '.itemHeader': {
	            '.first': {
	                paddingTop: number;
	            };
	            borderBottomWidth: number | null;
	            marginLeft: null;
	            padding: number;
	            paddingLeft: number;
	            paddingTop: number | undefined;
	            paddingBottom: number | undefined;
	            flexDirection: string;
	            borderColor: string;
	            'NativeBase.Text': {
	                fontSize: number;
	                color: string | undefined;
	            };
	        };
	        '.itemDivider': {
	            borderBottomWidth: null;
	            marginLeft: null;
	            padding: number;
	            paddingLeft: number;
	            backgroundColor: string;
	            flexDirection: string;
	            borderColor: string;
	        };
	        '.selected': {
	            'NativeBase.Text': {
	                color: string;
	            };
	            'NativeBase.Icon': {
	                color: string;
	            };
	            'NativeBase.Left': {
	                'NativeBase.Text': {
	                    color: string;
	                };
	                'NativeBase.Icon': {
	                    color: string;
	                };
	            };
	            'NativeBase.Body': {
	                'NativeBase.Text': {
	                    color: string;
	                };
	                'NativeBase.Icon': {
	                    color: string;
	                };
	            };
	            'NativeBase.Right': {
	                'NativeBase.Text': {
	                    color: string;
	                };
	                'NativeBase.Icon': {
	                    color: string;
	                };
	            };
	        };
	        'NativeBase.Left': {
	            'NativeBase.Body': {
	                'NativeBase.Text': {
	                    '.note': {
	                        color: string;
	                        fontWeight: string;
	                    };
	                    fontWeight: string;
	                };
	                marginLeft: number;
	                alignItems: null;
	                alignSelf: null;
	            };
	            'NativeBase.Icon': {
	                width: number;
	                fontSize: number;
	            };
	            'NativeBase.IconNB': {
	                width: number;
	                fontSize: number;
	            };
	            'NativeBase.Text': {
	                alignSelf: string;
	            };
	            flexDirection: string;
	        };
	        'NativeBase.Body': {
	            'NativeBase.Text': {
	                marginHorizontal: number;
	                '.note': {
	                    color: string;
	                    fontWeight: string;
	                };
	            };
	            alignSelf: null;
	            alignItems: null;
	        };
	        'NativeBase.Right': {
	            'NativeBase.Badge': {
	                alignSelf: null;
	            };
	            'NativeBase.PickerNB': {
	                'NativeBase.Button': {
	                    marginRight: number;
	                    'NativeBase.Text': {
	                        color: string;
	                    };
	                };
	            };
	            'NativeBase.Button': {
	                alignSelf: null;
	                '.transparent': {
	                    'NativeBase.Text': {
	                        color: string;
	                    };
	                };
	            };
	            'NativeBase.Icon': {
	                alignSelf: null;
	                fontSize: number;
	                color: string;
	            };
	            'NativeBase.IconNB': {
	                alignSelf: null;
	                fontSize: number;
	                color: string;
	            };
	            'NativeBase.Text': {
	                '.note': {
	                    color: string;
	                    fontWeight: string;
	                };
	                alignSelf: null;
	            };
	            'NativeBase.Thumbnail': {
	                alignSelf: null;
	            };
	            'NativeBase.Image': {
	                alignSelf: null;
	            };
	            'NativeBase.Radio': {
	                alignSelf: null;
	            };
	            'NativeBase.Checkbox': {
	                alignSelf: null;
	            };
	            'NativeBase.Switch': {
	                alignSelf: null;
	            };
	            padding: null;
	            flex: number;
	        };
	        'NativeBase.Text': {
	            '.note': {
	                color: string;
	                fontWeight: string;
	            };
	            alignSelf: string;
	        };
	        '.last': {
	            marginLeft: number;
	            paddingLeft: number;
	            top: number;
	        };
	        '.avatar': {
	            'NativeBase.Left': {
	                flex: number;
	                alignSelf: string;
	                paddingTop: number;
	            };
	            'NativeBase.Body': {
	                'NativeBase.Text': {
	                    marginLeft: null;
	                };
	                flex: number;
	                paddingVertical: number;
	                borderBottomWidth: number;
	                borderColor: string;
	                marginLeft: number;
	            };
	            'NativeBase.Right': {
	                'NativeBase.Text': {
	                    '.note': {
	                        fontSize: number;
	                    };
	                };
	                flex: number;
	                paddingRight: number;
	                alignSelf: string;
	                paddingVertical: number;
	                borderBottomWidth: number;
	                borderColor: string;
	            };
	            '.noBorder': {
	                'NativeBase.Body': {
	                    borderBottomWidth: null;
	                };
	                'NativeBase.Right': {
	                    borderBottomWidth: null;
	                };
	            };
	            borderBottomWidth: null;
	            paddingVertical: null;
	            paddingRight: null;
	        };
	        '.thumbnail': {
	            'NativeBase.Left': {
	                flex: number;
	            };
	            'NativeBase.Body': {
	                'NativeBase.Text': {
	                    marginLeft: null;
	                };
	                flex: number;
	                paddingVertical: number;
	                borderBottomWidth: number;
	                borderColor: string;
	                marginLeft: number;
	            };
	            'NativeBase.Right': {
	                'NativeBase.Button': {
	                    '.transparent': {
	                        'NativeBase.Text': {
	                            fontSize: number;
	                            color: string;
	                        };
	                    };
	                    height: null;
	                };
	                flex: number;
	                justifyContent: string;
	                alignSelf: string;
	                paddingRight: number;
	                paddingVertical: number;
	                borderBottomWidth: number;
	                borderColor: string;
	            };
	            '.noBorder': {
	                'NativeBase.Body': {
	                    borderBottomWidth: null;
	                };
	                'NativeBase.Right': {
	                    borderBottomWidth: null;
	                };
	            };
	            borderBottomWidth: null;
	            paddingVertical: null;
	            paddingRight: null;
	        };
	        '.icon': {
	            '.last': {
	                'NativeBase.Body': {
	                    borderBottomWidth: null;
	                };
	                'NativeBase.Right': {
	                    borderBottomWidth: null;
	                };
	                borderBottomWidth: number;
	                borderColor: string;
	            };
	            'NativeBase.Left': {
	                'NativeBase.Button': {
	                    'NativeBase.IconNB': {
	                        marginHorizontal: null;
	                        fontSize: number;
	                    };
	                    'NativeBase.Icon': {
	                        marginHorizontal: null;
	                        fontSize: number;
	                    };
	                    alignSelf: string;
	                    height: number;
	                    width: number;
	                    borderRadius: number;
	                    paddingVertical: null;
	                    paddingHorizontal: null;
	                    alignItems: string;
	                    justifyContent: string;
	                };
	                'NativeBase.Icon': {
	                    width: number;
	                    fontSize: number;
	                };
	                'NativeBase.IconNB': {
	                    width: number;
	                    fontSize: number;
	                };
	                paddingRight: number;
	                flex: number;
	                height: number;
	                justifyContent: string;
	                alignItems: string;
	            };
	            'NativeBase.Body': {
	                'NativeBase.Text': {
	                    marginLeft: null;
	                    fontSize: number;
	                };
	                flex: number;
	                height: number;
	                justifyContent: string;
	                borderBottomWidth: number;
	                borderColor: string;
	            };
	            'NativeBase.Right': {
	                'NativeBase.Text': {
	                    textAlign: string;
	                    color: string;
	                    fontSize: number;
	                };
	                'NativeBase.IconNB': {
	                    color: string;
	                    fontSize: number;
	                    alignSelf: string;
	                    paddingLeft: number;
	                    paddingTop: number;
	                };
	                'NativeBase.Icon': {
	                    color: string;
	                    fontSize: number;
	                    alignSelf: string;
	                    paddingLeft: number;
	                    paddingTop: number;
	                };
	                'NativeBase.Switch': {
	                    marginRight: number | undefined;
	                    alignSelf: null;
	                };
	                'NativeBase.PickerNB': {
	                    '.note': {
	                        color: string;
	                    };
	                    marginRight: number;
	                    flexGrow: number;
	                };
	                flexDirection: string;
	                alignItems: string;
	                flex: number;
	                alignSelf: string;
	                height: number;
	                justifyContent: string;
	                borderBottomWidth: number;
	                borderColor: string;
	                paddingRight: number;
	            };
	            '.noBorder': {
	                'NativeBase.Body': {
	                    borderBottomWidth: null;
	                };
	                'NativeBase.Right': {
	                    borderBottomWidth: null;
	                };
	            };
	            borderBottomWidth: null;
	            paddingVertical: null;
	            paddingRight: null;
	            height: number;
	            justifyContent: string;
	        };
	        '.noBorder': {
	            borderBottomWidth: null;
	        };
	        '.noIndent': {
	            marginLeft: null;
	            padding: number;
	            paddingLeft: number;
	        };
	        alignItems: string;
	        flexDirection: string;
	        paddingRight: number;
	        paddingVertical: number;
	        marginLeft: number;
	        borderBottomWidth: number;
	        backgroundColor: string;
	        borderColor: string;
	    };
	    'NativeBase.Icon': {
	        fontSize: number;
	        color: string;
	    };
	    'NativeBase.IconNB': {
	        fontSize: number;
	        color: string;
	    };
	    'NativeBase.Text': {
	        fontSize: number;
	        fontFamily: string;
	        color: string;
	        '.note': {
	            color: string;
	            fontSize: number;
	        };
	    };
	    'NativeBase.Spinner': {
	        height: number;
	    };
	    'NativeBase.Fab': {
	        'NativeBase.Button': {
	            alignItems: string;
	            padding: null;
	            justifyContent: string;
	            'NativeBase.Icon': {
	                alignSelf: string;
	                fontSize: number;
	                marginLeft: number;
	                marginRight: number;
	            };
	            'NativeBase.IconNB': {
	                alignSelf: string;
	                fontSize: number;
	                marginLeft: number;
	                marginRight: number;
	            };
	        };
	    };
	    'NativeBase.Item': {
	        '.floatingLabel': {
	            'NativeBase.Input': {
	                height: number;
	                top: number;
	                paddingTop: number;
	                paddingBottom: number;
	                '.multiline': {
	                    minHeight: number;
	                    paddingTop: number;
	                    paddingBottom: number;
	                };
	            };
	            'NativeBase.Label': {
	                paddingTop: number;
	            };
	            'NativeBase.Icon': {
	                top: number;
	                paddingTop: number;
	            };
	            'NativeBase.IconNB': {
	                top: number;
	                paddingTop: number;
	            };
	        };
	        '.fixedLabel': {
	            'NativeBase.Label': {
	                position: null;
	                top: null;
	                left: null;
	                right: null;
	                flex: number;
	                height: null;
	                width: null;
	                fontSize: number;
	            };
	            'NativeBase.Input': {
	                flex: number;
	                fontSize: number;
	            };
	        };
	        '.stackedLabel': {
	            'NativeBase.Label': {
	                position: null;
	                top: null;
	                left: null;
	                right: null;
	                paddingTop: number;
	                alignSelf: string;
	                fontSize: number;
	            };
	            'NativeBase.Icon': {
	                marginTop: number;
	            };
	            'NativeBase.Input': {
	                alignSelf: string;
	                flex: number;
	                width: number | null;
	                fontSize: number;
	                lineHeight: number;
	                '.secureTextEntry': {
	                    fontSize: number;
	                };
	                '.multiline': {
	                    paddingTop: number | undefined;
	                    paddingBottom: number | undefined;
	                };
	            };
	            flexDirection: null;
	            minHeight: number;
	        };
	        '.inlineLabel': {
	            'NativeBase.Label': {
	                position: null;
	                top: null;
	                left: null;
	                right: null;
	                paddingRight: number;
	                height: null;
	                width: null;
	                fontSize: number;
	            };
	            'NativeBase.Input': {
	                paddingLeft: number;
	                fontSize: number;
	            };
	            flexDirection: string;
	        };
	        'NativeBase.Label': {
	            fontSize: number;
	            color: string;
	            paddingRight: number;
	        };
	        'NativeBase.Icon': {
	            fontSize: number;
	            paddingRight: number;
	        };
	        'NativeBase.IconNB': {
	            fontSize: number;
	            paddingRight: number;
	        };
	        'NativeBase.Input': {
	            '.multiline': {
	                height: null;
	            };
	            height: number;
	            color: string;
	            flex: number;
	            top: number | undefined;
	            fontSize: number;
	        };
	        '.underline': {
	            'NativeBase.Input': {
	                paddingLeft: number;
	            };
	            '.success': {
	                borderColor: string;
	            };
	            '.error': {
	                borderColor: string;
	            };
	            borderWidth: number;
	            borderTopWidth: number;
	            borderRightWidth: number;
	            borderLeftWidth: number;
	            borderColor: string;
	        };
	        '.regular': {
	            'NativeBase.Input': {
	                paddingLeft: number;
	            };
	            'NativeBase.Icon': {
	                paddingLeft: number;
	            };
	            '.success': {
	                borderColor: string;
	            };
	            '.error': {
	                borderColor: string;
	            };
	            borderWidth: number;
	            borderColor: string;
	        };
	        '.rounded': {
	            'NativeBase.Input': {
	                paddingLeft: number;
	            };
	            'NativeBase.Icon': {
	                paddingLeft: number;
	            };
	            '.success': {
	                borderColor: string;
	            };
	            '.error': {
	                borderColor: string;
	            };
	            borderWidth: number;
	            borderRadius: number;
	            borderColor: string;
	        };
	        '.success': {
	            'NativeBase.Icon': {
	                color: string;
	            };
	            'NativeBase.IconNB': {
	                color: string;
	            };
	            '.rounded': {
	                borderRadius: number;
	                borderColor: string;
	            };
	            '.regular': {
	                borderColor: string;
	            };
	            '.underline': {
	                borderWidth: number;
	                borderTopWidth: number;
	                borderRightWidth: number;
	                borderLeftWidth: number;
	                borderColor: string;
	            };
	            borderColor: string;
	        };
	        '.error': {
	            'NativeBase.Icon': {
	                color: string;
	            };
	            'NativeBase.IconNB': {
	                color: string;
	            };
	            '.rounded': {
	                borderRadius: number;
	                borderColor: string;
	            };
	            '.regular': {
	                borderColor: string;
	            };
	            '.underline': {
	                borderWidth: number;
	                borderTopWidth: number;
	                borderRightWidth: number;
	                borderLeftWidth: number;
	                borderColor: string;
	            };
	            borderColor: string;
	        };
	        '.disabled': {
	            'NativeBase.Icon': {
	                color: string;
	            };
	            'NativeBase.IconNB': {
	                color: string;
	            };
	        };
	        '.picker': {
	            marginLeft: number;
	        };
	        borderWidth: number;
	        borderTopWidth: number;
	        borderRightWidth: number;
	        borderLeftWidth: number;
	        borderColor: string;
	        backgroundColor: string;
	        flexDirection: string;
	        alignItems: string;
	        marginLeft: number;
	    };
	    'NativeBase.Label': {
	        '.focused': {
	            width: number;
	        };
	        fontSize: number;
	    };
	    'NativeBase.Textarea': {
	        '.underline': {
	            borderBottomWidth: number;
	            marginTop: number;
	            borderColor: string;
	        };
	        '.bordered': {
	            borderWidth: number;
	            marginTop: number;
	            borderColor: string;
	        };
	        color: string;
	        paddingLeft: number;
	        paddingRight: number;
	        fontSize: number;
	        textAlignVertical: string;
	    };
	    'NativeBase.PickerNB': {
	        'NativeBase.Button': {
	            'NativeBase.Text': {};
	        };
	        '.note': {
	            color: string;
	        };
	        marginRight: number;
	        flexGrow: number;
	    };
	    'NativeBase.Tab': {
	        flex: number;
	        backgroundColor: string;
	    };
	    'NativeBase.Segment': {
	        height: number;
	        borderColor: string;
	        flexDirection: string;
	        justifyContent: string;
	        backgroundColor: string;
	        'NativeBase.Button': {
	            alignSelf: string;
	            borderRadius: number;
	            paddingTop: number;
	            paddingBottom: number;
	            height: number;
	            backgroundColor: string;
	            borderWidth: number;
	            borderLeftWidth: number;
	            borderColor: string;
	            elevation: number;
	            '.active': {
	                backgroundColor: string;
	                'NativeBase.Text': {
	                    color: string;
	                };
	                'NativeBase.Icon': {
	                    color: string;
	                };
	            };
	            '.first': {
	                borderTopLeftRadius: number | undefined;
	                borderBottomLeftRadius: number | undefined;
	                borderLeftWidth: number;
	            };
	            '.last': {
	                borderTopRightRadius: number | undefined;
	                borderBottomRightRadius: number | undefined;
	            };
	            'NativeBase.Text': {
	                color: string;
	                fontSize: number;
	            };
	            'NativeBase.Icon': {
	                fontSize: number;
	                paddingTop: number;
	                color: string;
	            };
	        };
	    };
	    'NativeBase.TabBar': {
	        '.tabIcon': {
	            height: undefined;
	        };
	        '.vertical': {
	            height: number;
	        };
	        'NativeBase.Button': {
	            '.transparent': {
	                'NativeBase.Text': {
	                    fontSize: number;
	                    color: string;
	                    fontWeight: string;
	                };
	                'NativeBase.IconNB': {
	                    color: string;
	                };
	            };
	            'NativeBase.IconNB': {
	                color: string;
	            };
	            'NativeBase.Text': {
	                fontSize: number;
	                color: string;
	                fontWeight: string;
	            };
	            '.isTabActive': {
	                'NativeBase.Text': {
	                    fontWeight: string;
	                };
	            };
	            flex: number;
	            alignSelf: string;
	            alignItems: string;
	            justifyContent: string;
	            borderRadius: null;
	            borderBottomColor: string;
	            backgroundColor: string;
	        };
	        height: number;
	        flexDirection: string;
	        justifyContent: string;
	        borderWidth: number;
	        borderTopWidth: number;
	        borderLeftWidth: number;
	        borderRightWidth: number;
	        borderBottomColor: string;
	        backgroundColor: string;
	    };
	    'NativeBase.ViewNB': {
	        '.padder': {
	            padding: number;
	        };
	    };
	    'NativeBase.TabHeading': {
	        flexDirection: string;
	        backgroundColor: string;
	        flex: number;
	        alignItems: string;
	        justifyContent: string;
	        '.scrollable': {
	            paddingHorizontal: number;
	            flex: number;
	            minWidth: number | undefined;
	        };
	        'NativeBase.Text': {
	            color: string;
	            marginHorizontal: number;
	        };
	        'NativeBase.Icon': {
	            color: string;
	            fontSize: number | undefined;
	        };
	        '.active': {
	            'NativeBase.Text': {
	                color: string;
	                fontWeight: string;
	            };
	            'NativeBase.Icon': {
	                color: string;
	            };
	        };
	    };
	    'NativeBase.TabContainer': {
	        elevation: number;
	        height: number;
	        flexDirection: string;
	        shadowColor: string | undefined;
	        shadowOffset: {
	            width: number;
	            height: number;
	        } | undefined;
	        shadowOpacity: number | undefined;
	        shadowRadius: number | undefined;
	        justifyContent: string;
	        borderBottomWidth: number;
	        borderColor: string;
	    };
	    'NativeBase.Switch': {
	        marginVertical: number;
	    };
	    'NativeBase.Separator': {
	        '.group': {
	            height: number;
	            paddingVertical: number;
	            paddingTop: number;
	            '.bordered': {
	                height: number;
	                paddingVertical: number;
	                paddingTop: number;
	            };
	        };
	        '.bordered': {
	            '.noTopBorder': {
	                borderTopWidth: number;
	            };
	            '.noBottomBorder': {
	                borderBottomWidth: number;
	            };
	            height: number;
	            paddingTop: number;
	            paddingBottom: number;
	            borderBottomWidth: number;
	            borderTopWidth: number;
	            borderColor: string;
	        };
	        'NativeBase.Text': {
	            fontSize: number;
	            color: string;
	        };
	        '.noTopBorder': {
	            borderTopWidth: number;
	        };
	        '.noBottomBorder': {
	            borderBottomWidth: number;
	        };
	        height: number;
	        backgroundColor: string;
	        flex: number;
	        justifyContent: string;
	        paddingLeft: number;
	    };
	    'NativeBase.SwipeRow': {
	        'NativeBase.ListItem': {
	            '.list': {
	                backgroundColor: string;
	            };
	            marginLeft: number;
	        };
	        'NativeBase.Left': {
	            flex: number;
	            alignSelf: null;
	            alignItems: null;
	            'NativeBase.Button': {
	                flex: number;
	                alignItems: string;
	                justifyContent: string;
	                alignSelf: string;
	                borderRadius: number;
	            };
	        };
	        'NativeBase.Right': {
	            flex: number;
	            alignSelf: null;
	            alignItems: null;
	            'NativeBase.Button': {
	                flex: number;
	                alignItems: string;
	                justifyContent: string;
	                alignSelf: string;
	                borderRadius: number;
	            };
	        };
	        'NativeBase.Button': {
	            flex: number;
	            height: null;
	            alignItems: string;
	            justifyContent: string;
	            alignSelf: string;
	            borderRadius: number;
	        };
	    };
	    'NativeBase.Thumbnail': {
	        '.square': {
	            borderRadius: number;
	            '.small': {
	                width: number;
	                height: number;
	                borderRadius: number;
	            };
	            '.large': {
	                width: number;
	                height: number;
	                borderRadius: number;
	            };
	        };
	        '.small': {
	            width: number;
	            height: number;
	            borderRadius: number;
	            '.square': {
	                borderRadius: number;
	            };
	        };
	        '.large': {
	            width: number;
	            height: number;
	            borderRadius: number;
	            '.square': {
	                borderRadius: number;
	            };
	        };
	        width: number;
	        height: number;
	        borderRadius: number;
	    };
	};
	export default _default;

}
declare module 'native-base/init' {
	export default function setDefaultThemeStyle(): void;

}
declare module 'native-base/basic/Drawer/index' {
	import React, { Component } from 'native-base/react';
	import RNDrawer from 'native-base/react-native-drawer';
	export default class Drawer extends Component<{}, {}> {
	    _root: React.RefObject<RNDrawer>;
	    static defaultProps: {
	        type: string;
	        tapToClose: boolean;
	        openDrawerOffset: number;
	        panCloseMask: number;
	        closedDrawerOffset: number;
	        styles: {
	            drawer: {
	                shadowColor: string;
	                shadowOpacity: number;
	                shadowRadius: number;
	                elevation: number;
	            };
	            mainOverlay: {
	                opacity: number;
	                backgroundColor: string;
	                elevation: number;
	            };
	        };
	        tweenHandler: (ratio: number) => {
	            mainOverlay: {
	                opacity: number;
	            };
	        };
	    };
	    render(): JSX.Element;
	}

}
declare module 'native-base/utils/mapPropsToStyleNames' {
	 const mapPropsToStyleNames: (styleNames: string[], props: object) => string[];
	export default mapPropsToStyleNames;

}
declare module 'native-base/basic/Left' {
	 const StyledLeft: any;
	export { StyledLeft as Left };

}
declare module 'native-base/basic/Right' {
	 const StyledRight: any;
	export { StyledRight as Right };

}
declare module 'native-base/basic/Body' {
	 const StyledBody: any;
	export { StyledBody as Body };

}
declare module 'native-base/basic/ListItem' {
	 const StyledListItem: any;
	export { StyledListItem as ListItem };

}
declare module 'native-base/basic/SwipeRow' {
	 const StyledSwipeRow: any;
	export { StyledSwipeRow as SwipeRow };

}
declare module 'native-base/basic/Text' {
	 const StyledText: any;
	export { StyledText as Text };

}
declare module 'native-base/basic/View' {
	 const StyledViewNB: any;
	export { StyledViewNB as ViewNB };

}
declare module 'native-base/utils/computeProps' {
	export default function (incomingProps: any, defaultProps: any): any;

}
declare module 'native-base/basic/Button' {
	 const StyledButton: any;
	export { StyledButton as Button };

}
declare module 'native-base/basic/DatePicker' {
	import React from 'native-base/react';
	import { DatePickerAndroidOpenOptions, ModalBaseProps, TextStyle, DatePickerIOSProps } from 'react-native'; type DatePickerProps = {
	    disabled?: any;
	    defaultDate?: Date;
	    placeHolderText?: string;
	    onDateChange: (date: Date) => void;
	    minimumDate?: Date;
	    maximumDate?: Date;
	    androidMode?: DatePickerAndroidOpenOptions['mode'];
	    formatChosenDate?: (date: Date) => void;
	    locale?: string;
	    animationType?: ModalBaseProps['animationType'];
	    modalTransparent?: ModalBaseProps['transparent'];
	    placeHolderTextStyle?: TextStyle;
	    textStyle?: TextStyle;
	    timeZoneOffsetInMinutes?: DatePickerIOSProps['timeZoneOffsetInMinutes'];
	}; type DatePickerState = {
	    chosenDate?: Date;
	    defaultDate: Date;
	    modalVisible: boolean;
	};
	export class DatePicker extends React.Component<DatePickerProps, DatePickerState> {
	    constructor(props: DatePickerProps);
	    setDate(date: Date): void;
	    showDatePicker: () => void;
	    openAndroidDatePicker(): Promise<void>;
	    formatChosenDate(date: Date): string | void;
	    render(): JSX.Element;
	}
	export {};

}
declare module 'native-base/basic/TabHeading' {
	 const StyledTabHeadingNB: any;
	export { StyledTabHeadingNB as TabHeading };

}
declare module 'native-base/basic/TabContainer' {
	 const StyledTabContainer: any;
	export { StyledTabContainer as TabContainer };

}
declare module 'native-base/basic/Icon/index' {
	import React, { Component } from 'native-base/react';
	import { StyleProp, ViewStyle } from 'react-native';
	import ic from 'native-base/basic/Icon/NBIcons.json';
	export type IconName = keyof typeof ic; type IconProps = {
	    style?: StyleProp<ViewStyle>;
	    name: IconName;
	    ios?: string;
	    android?: string;
	    active?: boolean;
	    type?: string;
	};
	export class IconComponent extends Component<IconProps, {}> {
	    _root: React.RefObject<any>;
	    static contextTypes: {
	        theme: import("prop-types").Requireable<object>;
	    };
	    getName(): string | null;
	    getIconName(): string;
	    render(): JSX.Element;
	} const StyledIcon: any;
	export { StyledIcon as Icon };

}
declare module 'native-base/basic/IconNB' {
	 const StyledIconNB: any;
	export { StyledIconNB as IconNB };

}
declare module 'native-base/utils/getStyle' {
	export default function (style: any): any;

}
declare module 'native-base/basic/Header' {
	 const StyledHeader: any;
	export { StyledHeader as Header };

}
declare module 'native-base/basic/InputGroup' {
	 const StyledInputGroup: any;
	export { StyledInputGroup as InputGroup };

}
declare module 'native-base/basic/Base/NativeBaseComponent' {
	import { Component } from 'native-base/react'; type NativeBaseComponentProps = {
	    theme?: object;
	};
	export default class NativeBaseComponent<P = {}, S = {}> extends Component<NativeBaseComponentProps & P, S> {
	    getChildContext(): {
	        theme: any;
	    };
	    getContextForegroundColor(): any;
	}
	export {};

}
declare module 'native-base/basic/Input' {
	 const StyledInput: any;
	export { StyledInput as Input };

}
declare module 'native-base/basic/Title' {
	 const StyledTitle: any;
	export { StyledTitle as Title };

}
declare module 'native-base/basic/Fab' {
	 const StyledFab: any;
	export { StyledFab as Fab };

}
declare module 'native-base/basic/Badge' {
	 const StyledBadge: any;
	export { StyledBadge as Badge };

}
declare module 'native-base/basic/Checkbox' {
	 const StyledCheckBox: any;
	export { StyledCheckBox as CheckBox };

}
declare module 'native-base/basic/Radio' {
	 const StyledRadio: any;
	export { StyledRadio as Radio };

}
declare module 'native-base/basic/Thumbnail' {
	 const StyledThumbnail: any;
	export { StyledThumbnail as Thumbnail };

}
declare module 'native-base/basic/Card' {
	 const StyledCard: any;
	export { StyledCard as Card };

}
declare module 'native-base/basic/CardItem' {
	 const StyledCardItem: any;
	export { StyledCardItem as CardItem };

}
declare module 'native-base/basic/H1' {
	 const StyledH1: any;
	export { StyledH1 as H1 };

}
declare module 'native-base/basic/H2' {
	 const StyledH2: any;
	export { StyledH2 as H2 };

}
declare module 'native-base/basic/H3' {
	 const StyledH3: any;
	export { StyledH3 as H3 };

}
declare module 'native-base/basic/Spinner' {
	 const StyledSpinner: any;
	export { StyledSpinner as Spinner };

}
declare module 'native-base/basic/Switch' {
	 const StyledSwitch: any;
	export { StyledSwitch as Switch };

}
declare module 'native-base/basic/Container' {
	export const Container: any;

}
declare module 'native-base/basic/Toast' {
	 const StyledToast: any;
	export { StyledToast as Toast };

}
declare module 'native-base/basic/ToastContainer' {
	 const StyledToastContainer: any;
	export { StyledToastContainer as ToastContainer };

}
declare module 'native-base/basic/Actionsheet' {
	 const StyledActionSheetContainer: any;
	export { StyledActionSheetContainer as ActionSheetContainer };

}
declare module 'native-base/basic/Root' {
	 const StyledRoot: any;
	export { StyledRoot as Root };

}
declare module 'native-base/basic/Content' {
	 const StyledContent: any;
	export { StyledContent as Content };

}
declare module 'native-base/basic/Footer' {
	 const StyledFooter: any;
	export { StyledFooter as Footer };

}
declare module 'native-base/basic/FooterTab' {
	 const StyledFooterTab: any;
	export { StyledFooterTab as FooterTab };

}
declare module 'native-base/basic/Form' {
	 const StyledForm: any;
	export { StyledForm as Form };

}
declare module 'native-base/basic/Picker' {
	import { Component } from 'native-base/react';
	import { PickerProps } from 'react-native';
	export default class PickerNB extends Component<PickerProps, {}> {
	    render(): JSX.Element;
	} const StyledPickerNB: any;
	export { StyledPickerNB as PickerNB };

}
declare module 'native-base/basic/List' {
	 const StyledList: any;
	export { StyledList as List };

}
declare module 'native-base/basic/Separator' {
	 const StyledSeparator: any;
	export { StyledSeparator as Separator };

}
declare module 'native-base/basic/DeckSwiper' {
	 const StyledDeckSwiper: any;
	export { StyledDeckSwiper as DeckSwiper };

}
declare module 'native-base/basic/Label' {
	 const StyledLabel: any;
	export { StyledLabel as Label };

}
declare module 'native-base/basic/Item' {
	 const StyledItem: any;
	export { StyledItem as Item };

}
declare module 'native-base/basic/Segment' {
	 const StyledSegment: any;
	export { StyledSegment as Segment };

}
declare module 'native-base/basic/Textarea' {
	 const StyledTextarea: any;
	export { StyledTextarea as Textarea };

}
declare module 'native-base/basic/Tab' {
	 const StyledTab: any;
	export { StyledTab as Tab };

}
declare module 'native-base/utils/interactionManager' {
	 const _default: {
	    runAfterInteractions: (f: () => void) => void;
	    Events: {
	        interactionStart: string;
	        interactionComplete: string;
	    };
	    createInteractionHandle(): number;
	    clearInteractionHandle(handle: number): void;
	    setDeadline(deadline: number): void;
	    addListener(eventType: string, listener: (...args: any[]) => any, context?: any): import("react-native").EmitterSubscription;
	};
	export default _default;

}
declare module 'native-base/utils/index' {
	import { ViewPropTypes } from 'react-native';
	import InteractionManager from 'native-base/utils/interactionManager';
	export { InteractionManager, ViewPropTypes };

}
declare module 'native-base/basic/Tabs/StaticContainer' {
	import * as React from 'native-base/react';
	interface StaticContainerProps {
	    shouldUpdate: boolean;
	} class StaticContainer extends React.Component<StaticContainerProps, {}> {
	    shouldComponentUpdate(nextProps: StaticContainerProps): boolean;
	    render(): {} | null | undefined;
	}
	export default StaticContainer;

}
declare module 'native-base/basic/Tabs/SceneComponent' {
	import React from 'native-base/react';
	import { View, ViewProps } from 'react-native';
	interface SceneComponentProps extends ViewProps {
	    shouldUpdated: boolean;
	}
	export const SceneComponent: React.SFC<SceneComponentProps & View>;
	export {};

}
declare module 'native-base/basic/Tabs/Button' {
	import React from 'native-base/react';
	import { TouchableOpacityProps } from 'react-native';
	export const Button: React.SFC<TouchableOpacityProps>;

}
declare module 'native-base/basic/Tabs/DefaultTabBar' {
	 const StyledTab: any;
	export { StyledTab as DefaultTabBar };

}
declare module 'native-base/basic/Tabs/index' {
	import * as React from 'native-base/react';
	import ReactNative, { StyleProp, ViewStyle } from 'react-native';
	interface ComponentProps {
	    tabBarPosition: 'top' | 'bottom' | 'overlayTop' | 'overlayBottom';
	    initialPage: number;
	    page: number;
	    onChangeTab: () => void;
	    onScroll: () => void;
	    renderTabBar: any;
	    style: StyleProp<ViewStyle>;
	    contentProps: object;
	    scrollWithoutAnimation: boolean;
	    locked: boolean;
	    prerenderingSiblingsNumber: number;
	}
	interface ComponentState {
	    currentPage: number;
	    sceneKeys: string[];
	    containerWidth: number;
	} class ScrollableTabView extends React.Component<ComponentProps, ComponentState> {
	    scrollView: ReactNative.ScrollView | null;
	    static defaultProps: {
	        tabBarPosition: string;
	        initialPage: number;
	        page: number;
	        onChangeTab: () => void;
	        onScroll: () => void;
	        contentProps: {};
	        scrollWithoutAnimation: boolean;
	        locked: boolean;
	        prerenderingSiblingsNumber: number;
	    };
	    state: {
	        currentPage: number;
	        scrollValue: ReactNative.Animated.Value;
	        containerWidth: number;
	        sceneKeys: any[];
	    };
	    componentDidMount(): void;
	    UNSAFE_componentWillReceiveProps(props: ComponentProps): void;
	    goToPage(pageNumber: number): void;
	    renderTabBar(props: any): JSX.Element | null;
	    updateSceneKeys({ page, children, callback }: {
	        page: any;
	        children?: React.ReactNode;
	        callback?: (() => void) | undefined;
	    }): void;
	    newSceneKeys({ previousKeys, currentPage, children }: {
	        previousKeys?: never[] | undefined;
	        currentPage?: number | undefined;
	        children?: React.ReactNode;
	    }): any[];
	    _shouldRenderSceneKey(idx: number, currentPageKey: number): boolean;
	    _keyExists(sceneKeys: any, key: any): any;
	    _makeSceneKey(child: any, idx: any): string;
	    renderScrollableContent(): JSX.Element;
	    _composeScenes(): JSX.Element[];
	    _onMomentumScrollBeginAndEnd(e: any): void;
	    _updateSelectedPage(nextPage: any): void;
	    _onChangeTab(prevPage: any, currentPage: any): void;
	    _updateScrollValue(value: any): void;
	    _handleLayout(e: any): void;
	    private children;
	    render(): JSX.Element;
	}
	export default ScrollableTabView;

}
declare module 'native-base/basic/Tabs/ScrollableTabBar' {
	import React from 'native-base/react';
	import { Animated, ViewStyle } from 'react-native';
	interface ScrollableTabBarProps {
	    goToPage: () => void;
	    activeTab: number;
	    tabs: any[];
	    backgroundColor: string;
	    activeTextColor: string;
	    inactiveTextColor: string;
	    scrollOffset: number;
	    style: ViewStyle;
	    tabStyle: ViewStyle;
	    tabsContainerStyle: ViewStyle;
	    renderTab: () => void;
	    underlineStyle: ViewStyle;
	    onScroll: () => void;
	    scrollValue: any;
	}
	interface ScrollableTabBarState {
	    _leftTabUnderline: Animated.Value;
	    _widthTabUnderline: Animated.Value;
	    _containerWidth?: number;
	}
	export class ScrollableTabBar extends React.Component<ScrollableTabBarProps, ScrollableTabBarState> {
	    _tabsMeasurements: never[];
	    static contextTypes: {
	        theme: any;
	    };
	    static defaultProps: {
	        scrollOffset: number;
	        activeTextColor: string;
	        inactiveTextColor: string;
	        backgroundColor: string;
	        style: {};
	        tabStyle: {};
	        tabsContainerStyle: {};
	        underlineStyle: {};
	        tabFontSize: number;
	    };
	    state: {
	        _leftTabUnderline: Animated.Value;
	        _widthTabUnderline: Animated.Value;
	        _containerWidth: undefined;
	    };
	    _tabContainerMeasurements: any;
	    _containerMeasurements: any;
	    _scrollView: any;
	    componentDidMount(): void;
	    updateView(offset: any): void;
	    necessarilyMeasurementsCompleted(position: any, isLastTab: any): any;
	    updateTabPanel(position: any, pageOffset: any): void;
	    updateTabUnderline(position: any, pageOffset: any, tabCount: any): void;
	    renderTab(name: any, page: any, isTabActive: any, onPressHandler: any, onLayoutHandler: any, tabStyle: any, activeTabStyle: any, textStyle: any, activeTextStyle: any, tabHeaderStyle: any, tabFontSize: any): JSX.Element;
	    measureTab(page: any, event: any): void;
	    render(): JSX.Element;
	    UNSAFE_componentWillReceiveProps(nextProps: any): void;
	    onTabContainerLayout(e: any): void;
	    onContainerLayout(e: any): void;
	}
	export const ScrollableTab: any;
	export {};

}
declare module 'native-base/basic/Subtitle' {
	 const StyledSubtitle: any;
	export { StyledSubtitle as Subtitle };

}
declare module 'native-base/basic/Accordion' {
	import React from 'native-base/react';
	import { IconName } from 'native-base/basic/Icon'; type AccordionState = {
	    selected: undefined | any;
	};
	interface AccordionProps {
	    expanded: boolean;
	    contentStyle: any;
	    dataArray: any;
	    expandedIcon: IconName;
	    expandedIconStyle: any;
	    headerStyle: any;
	    icon: IconName;
	    iconStyle: any;
	    onAccordionClose: any;
	    onAccordionOpen: any;
	    renderContent: any;
	    renderHeader: any;
	    style: any;
	}
	export class Accordion extends React.Component<AccordionProps, AccordionState> {
	    constructor(props: Readonly<AccordionProps>);
	    setSelected(index: number): void;
	    render(): JSX.Element;
	}
	export {};

}
declare module 'native-base/vue-native' {
	import { VueConstructor } from 'native-base/vue'; const VueNativeBasePlugin: {
	    install(Vue: VueConstructor<import("vue").default>): void;
	};
	export default VueNativeBasePlugin;

}
declare module 'native-base/index' {
	import { StyleProvider, connectStyle } from 'native-base/native-base-shoutem-theme';
	import { Col, Row, Grid } from 'react-native-easy-grid';
	import getTheme from 'native-base/theme/components';
	import variables from 'native-base/theme/variables/platform';
	import Drawer from 'native-base/basic/Drawer';
	import { SwipeRow } from 'native-base/basic/SwipeRow';
	import { Text } from 'native-base/basic/Text';
	import { ViewNB as View } from 'native-base/basic/View';
	import { Button } from 'native-base/basic/Button';
	import { DatePicker } from 'native-base/basic/DatePicker';
	import { TabHeading } from 'native-base/basic/TabHeading';
	import { TabContainer } from 'native-base/basic/TabContainer';
	import { IconNB } from 'native-base/basic/IconNB';
	import { Icon } from 'native-base/basic/Icon';
	import { Header } from 'native-base/basic/Header';
	import { InputGroup } from 'native-base/basic/InputGroup';
	import { Input } from 'native-base/basic/Input';
	import { Title } from 'native-base/basic/Title';
	import { Fab } from 'native-base/basic/Fab';
	import { Left } from 'native-base/basic/Left';
	import { Right } from 'native-base/basic/Right';
	import { Body } from 'native-base/basic/Body';
	import { Badge } from 'native-base/basic/Badge';
	import { CheckBox } from 'native-base/basic/Checkbox';
	import { Radio } from 'native-base/basic/Radio';
	import { Thumbnail } from 'native-base/basic/Thumbnail';
	import { Card } from 'native-base/basic/Card';
	import { CardItem } from 'native-base/basic/CardItem';
	import { H1 } from 'native-base/basic/H1';
	import { H2 } from 'native-base/basic/H2';
	import { H3 } from 'native-base/basic/H3';
	import { Spinner } from 'native-base/basic/Spinner';
	import { Switch } from 'native-base/basic/Switch';
	import { Container } from 'native-base/basic/Container';
	import { Root } from 'native-base/basic/Root';
	import { Content } from 'native-base/basic/Content';
	import { Footer } from 'native-base/basic/Footer';
	import { FooterTab } from 'native-base/basic/FooterTab';
	import { Form } from 'native-base/basic/Form';
	import { ToastContainer } from 'native-base/basic/ToastContainer';
	import { ActionSheetContainer } from 'native-base/basic/Actionsheet';
	import { PickerNB } from 'native-base/basic/Picker';
	import { List } from 'native-base/basic/List';
	import { ListItem } from 'native-base/basic/ListItem';
	import { Separator } from 'native-base/basic/Separator';
	import { DeckSwiper } from 'native-base/basic/DeckSwiper';
	import { Item } from 'native-base/basic/Item';
	import { Segment } from 'native-base/basic/Segment';
	import { Label } from 'native-base/basic/Label';
	import { Textarea } from 'native-base/basic/Textarea';
	import { Tab } from 'native-base/basic/Tab';
	import ScrollableTabView from 'native-base/basic/Tabs';
	import { DefaultTabBar } from 'native-base/basic/Tabs/DefaultTabBar';
	import { ScrollableTab } from 'native-base/basic/Tabs/ScrollableTabBar';
	import { Subtitle } from 'native-base/basic/Subtitle';
	import { Accordion } from 'native-base/basic/Accordion';
	import VueNativeBase from 'native-base/vue-native.js';
	export { getTheme, variables, StyleProvider, connectStyle, Drawer, Button, DatePicker, IconNB, Icon, Header, Form, InputGroup, Input, Title, Fab, Left, Right, Body, Badge, CheckBox, Radio, Thumbnail, Card, CardItem, H1, H2, H3, Spinner, Switch, Container, Content, Footer, Tab, ScrollableTabView as Tabs, FooterTab, PickerNB as Picker, List, ListItem, Separator, DeckSwiper, Item, Subtitle, Label, Textarea, Col, Row, Grid, Text, Content as TabContent, View, ToastContainer as Toast, ScrollableTab, ActionSheetContainer as ActionSheet, TabHeading, TabContainer, DefaultTabBar, Segment, Root, SwipeRow, VueNativeBase, Accordion }; const mapPropsToStyleNames: (_styleNames: any, props: any) => string[];
	export { mapPropsToStyleNames };

}
declare module 'native-base' {
	export * from 'native-base/index';
}
