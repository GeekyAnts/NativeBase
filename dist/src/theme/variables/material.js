Object.defineProperty(exports,"__esModule",{value:true});var _color=require("color");var _color2=_interopRequireDefault(_color);

var _reactNative=require("react-native");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var deviceHeight=_reactNative.Dimensions.get("window").height;
var deviceWidth=_reactNative.Dimensions.get("window").width;
var platform=_reactNative.Platform.OS;
var platformStyle="material";
var isIphoneX=
platform==="ios"&&deviceHeight===812&&deviceWidth===375;exports.default=

{
platformStyle:platformStyle,
platform:platform,


androidRipple:true,
androidRippleColor:"rgba(256, 256, 256, 0.3)",
androidRippleColorDark:"rgba(0, 0, 0, 0.15)",
btnUppercaseAndroidText:true,


badgeBg:"#ED1727",
badgeColor:"#fff",
badgePadding:platform==="ios"?3:0,


btnFontFamily:platform==="ios"?"Roboto":"Roboto_medium",
btnDisabledBg:"#b5b5b5",
buttonPadding:6,
get btnPrimaryBg(){
return this.brandPrimary;
},
get btnPrimaryColor(){
return this.inverseTextColor;
},
get btnInfoBg(){
return this.brandInfo;
},
get btnInfoColor(){
return this.inverseTextColor;
},
get btnSuccessBg(){
return this.brandSuccess;
},
get btnSuccessColor(){
return this.inverseTextColor;
},
get btnDangerBg(){
return this.brandDanger;
},
get btnDangerColor(){
return this.inverseTextColor;
},
get btnWarningBg(){
return this.brandWarning;
},
get btnWarningColor(){
return this.inverseTextColor;
},
get btnTextSize(){
return platform==="ios"?this.fontSizeBase*1.1:this.fontSizeBase-1;
},
get btnTextSizeLarge(){
return this.fontSizeBase*1.5;
},
get btnTextSizeSmall(){
return this.fontSizeBase*0.8;
},
get borderRadiusLarge(){
return this.fontSizeBase*3.8;
},
get iconSizeLarge(){
return this.iconFontSize*1.5;
},
get iconSizeSmall(){
return this.iconFontSize*0.6;
},


cardDefaultBg:"#fff",
cardBorderColor:"#ccc",


CheckboxRadius:0,
CheckboxBorderWidth:2,
CheckboxPaddingLeft:2,
CheckboxPaddingBottom:platform==="ios"?0:5,
CheckboxIconSize:platform==="ios"?18:14,
CheckboxIconMarginTop:platform==="ios"?undefined:1,
CheckboxFontSize:platform==="ios"?21:18,
DefaultFontSize:17,
checkboxBgColor:"#039BE5",
checkboxSize:20,
checkboxTickColor:"#fff",


brandPrimary:"#3F51B5",
brandInfo:"#3F57D3",
brandSuccess:"#5cb85c",
brandDanger:"#d9534f",
brandWarning:"#f0ad4e",
brandDark:"#000",
brandLight:"#f4f4f4",


fontFamily:"Roboto",
fontSizeBase:15,
get fontSizeH1(){
return this.fontSizeBase*1.8;
},
get fontSizeH2(){
return this.fontSizeBase*1.6;
},
get fontSizeH3(){
return this.fontSizeBase*1.4;
},


footerHeight:isIphoneX?89:55,
footerDefaultBg:"#3F51B5",
footerPaddingBottom:isIphoneX?34:0,


tabBarTextColor:"#fff",
tabBarTextSize:platform==="ios"?14:11,
activeTab:"#fff",
sTabBarActiveTextColor:"#007aff",
tabBarActiveTextColor:"#fff",
tabActiveBgColor:"#3F51B5",


toolbarBtnColor:"#fff",
toolbarDefaultBg:platform==="ios"?"#F8F8F8":"#3F51B5",
toolbarHeight:platform==="ios"?isIphoneX?88:64:56,
toolbarSearchIconSize:platform==="ios"?20:23,
toolbarInputColor:"#fff",
searchBarHeight:platform==="ios"?30:40,
searchBarInputHeight:platform==="ios"?30:50,
toolbarBtnTextColor:"#fff",
toolbarDefaultBorder:"#3F51B5",
iosStatusbar:"light-content",
get statusBarColor(){
return(0,_color2.default)(this.toolbarDefaultBg).
darken(0.2).
hex();
},
get darkenHeader(){
return(0,_color2.default)(this.tabBgColor).
darken(0.03).
hex();
},


iconFamily:"Ionicons",
iconFontSize:platform==="ios"?30:28,
iconHeaderSize:platform==="ios"?29:24,


inputFontSize:17,
inputBorderColor:"#D9D5DC",
inputSuccessBorderColor:"#2b8339",
inputErrorBorderColor:"#ed2f2f",
inputHeightBase:50,
get inputColor(){
return this.textColor;
},
get inputColorPlaceholder(){
return"#575757";
},


btnLineHeight:19,
lineHeightH1:32,
lineHeightH2:27,
lineHeightH3:22,
lineHeight:platform==="ios"?20:24,


listBg:"#fff",
listBorderColor:"#c9c9c9",
listDividerBg:"#f4f4f4",
listBtnUnderlayColor:"#DDD",
listItemPadding:platform==="ios"?10:12,
listNoteColor:"#808080",
listNoteSize:13,


defaultProgressColor:"#E4202D",
inverseProgressColor:"#1A191B",


radioBtnSize:platform==="ios"?25:23,
radioSelectedColorAndroid:"#5067FF",
radioBtnLineHeight:platform==="ios"?29:24,
radioColor:this.brandPrimary,


segmentBackgroundColor:"#3F51B5",
segmentActiveBackgroundColor:"#fff",
segmentTextColor:"#fff",
segmentActiveTextColor:"#3F51B5",
segmentBorderColor:"#fff",
segmentBorderColorMain:"#3F51B5",


defaultSpinnerColor:"#45D56E",
inverseSpinnerColor:"#1A191B",


tabDefaultBg:"#3F51B5",
topTabBarTextColor:"#b3c7f9",
topTabBarActiveTextColor:"#fff",
topTabBarBorderColor:"#fff",
topTabBarActiveBorderColor:"#fff",


tabBgColor:"#F8F8F8",
tabFontSize:15,


textColor:"#000",
inverseTextColor:"#fff",
noteFontSize:14,
get defaultTextColor(){
return this.textColor;
},


titleFontfamily:platform==="ios"?"Roboto":"Roboto_medium",
titleFontSize:19,
subTitleFontSize:14,
subtitleColor:"#FFF",
titleFontColor:"#FFF",


borderRadiusBase:2,
borderWidth:1/_reactNative.PixelRatio.getPixelSizeForLayoutSize(1),
contentPadding:10,
dropdownLinkColor:"#414142",
inputLineHeight:24,
deviceWidth:deviceWidth,
deviceHeight:deviceHeight,
isIphoneX:isIphoneX,
inputGroupRoundedBorderRadius:30};
//# sourceMappingURL=material.js.map