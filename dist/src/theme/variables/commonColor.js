Object.defineProperty(exports,"__esModule",{value:true});var _color=require('color');var _color2=_interopRequireDefault(_color);

var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var deviceHeight=_reactNative.Dimensions.get('window').height;
var deviceWidth=_reactNative.Dimensions.get('window').width;
var platform=_reactNative.Platform.OS;
var platformStyle=undefined;exports.default=

{
platformStyle:platformStyle,
platform:platform,

androidRipple:true,
androidRippleColor:'rgba(256, 256, 256, 0.3)',
androidRippleColorDark:'rgba(0, 0, 0, 0.15)',


badgeBg:'#ED1727',
badgeColor:'#fff',

badgePadding:platform==='ios'?3:0,


btnFontFamily:platform==='ios'?'System':'Roboto_medium',
btnDisabledBg:'#b5b5b5',
btnDisabledClr:'#f1f1f1',


CheckboxRadius:platform==='ios'?13:0,
CheckboxBorderWidth:platform==='ios'?1:2,
CheckboxPaddingLeft:platform==='ios'?4:2,
CheckboxPaddingBottom:platform==='ios'?0:5,
CheckboxIconSize:platform==='ios'?21:14,
CheckboxIconMarginTop:platform==='ios'?undefined:1,
CheckboxFontSize:platform==='ios'?23/0.9:18,
DefaultFontSize:17,
checkboxBgColor:'#039BE5',
checkboxSize:20,
checkboxTickColor:'#fff',


segmentBackgroundColor:'#3F51B5',
segmentActiveBackgroundColor:'#fff',
segmentTextColor:'#fff',
segmentActiveTextColor:'#3F51B5',
segmentBorderColor:'#fff',
segmentBorderColorMain:'#3F51B5',


get defaultTextColor(){
return this.textColor;
},


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
return platform==='ios'?this.fontSizeBase*1.1:
this.fontSizeBase-1;
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

buttonPadding:6,

get iconSizeLarge(){
return this.iconFontSize*1.5;
},
get iconSizeSmall(){
return this.iconFontSize*0.6;
},



cardDefaultBg:'#fff',



brandPrimary:'#2874F0',
brandInfo:'#62B1F6',
brandSuccess:'#5cb85c',
brandDanger:'#d9534f',
brandWarning:'#f0ad4e',
brandSidebar:'#252932',



fontFamily:platform==='ios'?'System':'Roboto',
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



footerHeight:55,
footerDefaultBg:'#2874F0',



tabBarTextColor:'#8bb3f4',
tabBarTextSize:platform==='ios'?14:11,
activeTab:platform==='ios'?'#007aff':'#fff',
sTabBarActiveTextColor:'#007aff',
tabBarActiveTextColor:'#fff',
tabActiveBgColor:platform==='ios'?'#1569f4':undefined,


tabDefaultBg:'#2874F0',
topTabBarTextColor:'#b3c7f9',
topTabBarActiveTextColor:'#fff',
topTabActiveBgColor:platform==='ios'?'#1569f4':undefined,
topTabBarBorderColor:'#fff',
topTabBarActiveBorderColor:'#fff',



toolbarBtnColor:'#fff',
toolbarDefaultBg:'#2874F0',
toolbarHeight:platform==='ios'?64:56,
toolbarIconSize:platform==='ios'?20:22,
toolbarSearchIconSize:platform==='ios'?20:23,
toolbarInputColor:platform==='ios'?'#CECDD2':'#fff',
searchBarHeight:platform==='ios'?30:40,
toolbarInverseBg:'#222',
toolbarTextColor:'#fff',
iosStatusbar:'light-content',
toolbarDefaultBorder:'#2874F0',
get statusBarColor(){
return(0,_color2.default)(this.toolbarDefaultBg).darken(0.2).hexString();
},



iconFamily:'Ionicons',
iconFontSize:platform==='ios'?30:28,
iconMargin:7,
iconHeaderSize:platform==='ios'?33:24,



inputFontSize:17,
inputBorderColor:'#D9D5DC',
inputSuccessBorderColor:'#2b8339',
inputErrorBorderColor:'#ed2f2f',

get inputColor(){
return this.textColor;
},
get inputColorPlaceholder(){
return'#575757';
},

inputGroupMarginBottom:10,
inputHeightBase:50,
inputPaddingLeft:5,

get inputPaddingLeftIcon(){
return this.inputPaddingLeft*8;
},



btnLineHeight:19,
lineHeightH1:32,
lineHeightH2:27,
lineHeightH3:22,
iconLineHeight:platform==='ios'?37:30,
lineHeight:platform==='ios'?20:24,



listBorderColor:'#c9c9c9',
listDividerBg:'#f4f4f4',
listItemHeight:45,
listBtnUnderlayColor:'#DDD',


cardBorderColor:'#ccc',


listItemPadding:platform==='ios'?10:12,

listNoteColor:'#808080',
listNoteSize:13,



defaultProgressColor:'#E4202D',
inverseProgressColor:'#1A191B',



radioBtnSize:platform==='ios'?25:23,
radioSelectedColorAndroid:'#5067FF',


radioBtnLineHeight:platform==='ios'?29:24,

radioColor:'#7e7e7e',

get radioSelectedColor(){
return(0,_color2.default)(this.radioColor).darken(0.2).hexString();
},



defaultSpinnerColor:'#45D56E',
inverseSpinnerColor:'#1A191B',



tabBgColor:'#F8F8F8',
tabFontSize:15,
tabTextColor:'#222222',



textColor:'#000',
inverseTextColor:'#fff',
noteFontSize:14,



titleFontfamily:platform==='ios'?'System':'Roboto_medium',
titleFontSize:platform==='ios'?17:19,
subTitleFontSize:platform==='ios'?12:14,
subtitleColor:'#FFF',


titleFontColor:'#FFF',



borderRadiusBase:platform==='ios'?5:2,
borderWidth:1/_reactNative.PixelRatio.getPixelSizeForLayoutSize(1),
contentPadding:10,

get darkenHeader(){
return(0,_color2.default)(this.tabBgColor).darken(0.03).hexString();
},

dropdownBg:'#000',
dropdownLinkColor:'#414142',
inputLineHeight:24,
jumbotronBg:'#C9C9CE',
jumbotronPadding:30,
deviceWidth:deviceWidth,
deviceHeight:deviceHeight,


inputGroupRoundedBorderRadius:30};
//# sourceMappingURL=commonColor.js.map