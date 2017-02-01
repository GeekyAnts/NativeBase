Object.defineProperty(exports,"__esModule",{value:true});var _reactNative=require('react-native');
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);

var _variables=require('./variables');var _variables2=_interopRequireDefault(_variables);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=


function(){var variables=arguments.length>0&&arguments[0]!==undefined?arguments[0]:_variables2.default;
var buttonTheme={
'.disabled':{
backgroundColor:variables.btnDisabledBg},

'.bordered':{
'.primary':{
'NativeBase.Text':{
color:variables.btnPrimaryBg},

'NativeBase.Icon':{
color:variables.btnPrimaryBg},

'NativeBase.IconNB':{
color:variables.btnPrimaryBg},

backgroundColor:'transparent',
borderColor:variables.btnPrimaryBg,
borderWidth:1},

'.success':{
'NativeBase.Text':{
color:variables.btnSuccessBg},

'NativeBase.Icon':{
color:variables.btnSuccessBg},

'NativeBase.IconNB':{
color:variables.btnSuccessBg},

backgroundColor:'transparent',
borderColor:variables.btnSuccessBg,
borderWidth:1},

'.info':{
'NativeBase.Text':{
color:variables.btnInfoBg},

'NativeBase.Icon':{
color:variables.btnInfoBg},

'NativeBase.IconNB':{
color:variables.btnInfoBg},

backgroundColor:'transparent',
borderColor:variables.btnInfoBg,
borderWidth:1},

'.warning':{
'NativeBase.Text':{
color:variables.btnWarningBg},

'NativeBase.Icon':{
color:variables.btnWarningBg},

'NativeBase.IconNB':{
color:variables.btnWarningBg},

backgroundColor:'transparent',
borderColor:variables.btnWarningBg,
borderWidth:1},

'.danger':{
'NativeBase.Text':{
color:variables.btnDangerBg},

'NativeBase.Icon':{
color:variables.btnDangerBg},

'NativeBase.IconNB':{
color:variables.btnDangerBg},

backgroundColor:'transparent',
borderColor:variables.btnDangerBg,
borderWidth:1},

'.disabled':{
backgroundColor:null,
borderColor:variables.btnDisabledBg,
borderWidth:1,
'NativeBase.Text':{
color:variables.btnDisabledBg}},


'NativeBase.Text':{
color:variables.btnPrimaryBg},

'NativeBase.Icon':{
color:variables.btnPrimaryBg},

'NativeBase.IconNB':{
color:variables.btnPrimaryBg},

borderWidth:1,
elevation:null,
shadowColor:null,
shadowOffset:null,
shadowOpacity:null,
shadowRadius:null,
backgroundColor:'transparent'},



'.primary':{
'.bordered':{
'NativeBase.Text':{
color:variables.btnPrimaryBg},

'NativeBase.Icon':{
color:variables.btnPrimaryBg},

'NativeBase.IconNB':{
color:variables.btnPrimaryBg}},


backgroundColor:variables.btnPrimaryBg},


'.success':{
'.bordered':{
'NativeBase.Text':{
color:variables.btnSuccessBg},

'NativeBase.Icon':{
color:variables.btnSuccessBg},

'NativeBase.IconNB':{
color:variables.btnSuccessBg}},


backgroundColor:variables.btnSuccessBg},


'.info':{
'.bordered':{
'NativeBase.Text':{
color:variables.btnInfoBg},

'NativeBase.Icon':{
color:variables.btnInfoBg},

'NativeBase.IconNB':{
color:variables.btnInfoBg}},


backgroundColor:variables.btnInfoBg},


'.warning':{
'.bordered':{
'NativeBase.Text':{
color:variables.btnWarningBg},

'NativeBase.Icon':{
color:variables.btnWarningBg},

'NativeBase.IconNB':{
color:variables.btnWarningBg}},


backgroundColor:variables.btnWarningBg},


'.danger':{
'.bordered':{
'NativeBase.Text':{
color:variables.btnDangerBg},

'NativeBase.Icon':{
color:variables.btnDangerBg},

'NativeBase.IconNB':{
color:variables.btnDangerBg}},


backgroundColor:variables.btnDangerBg},


'.block':{
justifyContent:'center',
alignSelf:'stretch'},


'.full':{
justifyContent:'center',
alignSelf:'stretch',
borderRadius:0},


'.rounded':{
borderRadius:variables.borderRadiusLarge},



'.transparent':{
backgroundColor:'transparent',
elevation:0,
shadowColor:null,
shadowOffset:null,
shadowRadius:null,
shadowOpacity:null,

'NativeBase.Text':{
color:variables.defaultTextColor},

'NativeBase.Icon':{
color:variables.defaultTextColor},

'NativeBase.IconNB':{
color:variables.defaultTextColor}},





'.small':{
height:35},


'.large':{
height:60},


'.iconRight':{
'NativeBase.Text':{
marginRight:variables.buttonPadding}},


'.iconLeft':{
'NativeBase.Text':{
marginLeft:variables.buttonPadding}},




'.capitalize':{},



'.vertical':{
flexDirection:'column',
height:null},



'NativeBase.Text':{
fontFamily:variables.btnFontFamily,
marginLeft:0,
marginRight:0,
color:variables.inverseTextColor,
fontSize:variables.btnTextSize,
lineHeight:variables.btnLineHeight},



'NativeBase.Icon':{
color:variables.inverseTextColor,
fontSize:24,
marginHorizontal:5,
paddingTop:_reactNative.Platform.OS==='ios'?2:undefined},

'NativeBase.IconNB':{
color:variables.inverseTextColor,
fontSize:24,
marginHorizontal:5,
paddingTop:_reactNative.Platform.OS==='ios'?2:undefined},


paddingVertical:variables.buttonPadding,
paddingHorizontal:variables.buttonPadding+2,
backgroundColor:variables.btnPrimaryBg,
borderRadius:variables.borderRadiusBase,
borderColor:variables.btnPrimaryBg,
borderWidth:null,
height:38,
alignSelf:'flex-start',
flexDirection:'row',
elevation:2,
alignItems:'center',
justifyContent:'space-between'};

return buttonTheme;
};
//# sourceMappingURL=Button.js.map