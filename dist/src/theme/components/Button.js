Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _platform=require('./../variables/platform');var _platform2=_interopRequireDefault(_platform);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=

function(){var variables=arguments.length>0&&arguments[0]!==undefined?arguments[0]:_platform2.default;
var platformStyle=variables.platformStyle;
var platform=variables.platform;
var darkCommon={
'NativeBase.Text':{
color:variables.brandDark},

'NativeBase.Icon':{
color:variables.brandDark},

'NativeBase.IconNB':{
color:variables.brandDark}};


var lightCommon={
'NativeBase.Text':{
color:variables.brandLight},

'NativeBase.Icon':{
color:variables.brandLight},

'NativeBase.IconNB':{
color:variables.brandLight}};


var primaryCommon={
'NativeBase.Text':{
color:variables.btnPrimaryBg},

'NativeBase.Icon':{
color:variables.btnPrimaryBg},

'NativeBase.IconNB':{
color:variables.btnPrimaryBg}};


var successCommon={
'NativeBase.Text':{
color:variables.btnSuccessBg},

'NativeBase.Icon':{
color:variables.btnSuccessBg},

'NativeBase.IconNB':{
color:variables.btnSuccessBg}};


var infoCommon={
'NativeBase.Text':{
color:variables.btnInfoBg},

'NativeBase.Icon':{
color:variables.btnInfoBg},

'NativeBase.IconNB':{
color:variables.btnInfoBg}};


var warningCommon={
'NativeBase.Text':{
color:variables.btnWarningBg},

'NativeBase.Icon':{
color:variables.btnWarningBg},

'NativeBase.IconNB':{
color:variables.btnWarningBg}};


var dangerCommon={
'NativeBase.Text':{
color:variables.btnDangerBg},

'NativeBase.Icon':{
color:variables.btnDangerBg},

'NativeBase.IconNB':{
color:variables.btnDangerBg}};


var buttonTheme={
'.disabled':{
backgroundColor:variables.btnDisabledBg},

'.bordered':_extends({
'.dark':_extends({},
darkCommon,{
backgroundColor:'transparent',
borderColor:variables.brandDark,
borderWidth:variables.borderWidth*2}),

'.light':_extends({},
lightCommon,{
backgroundColor:'transparent',
borderColor:variables.brandLight,
borderWidth:variables.borderWidth*2}),

'.primary':_extends({},
primaryCommon,{
backgroundColor:'transparent',
borderColor:variables.btnPrimaryBg,
borderWidth:variables.borderWidth*2}),

'.success':_extends({},
successCommon,{
backgroundColor:'transparent',
borderColor:variables.btnSuccessBg,
borderWidth:variables.borderWidth*2}),

'.info':_extends({},
infoCommon,{
backgroundColor:'transparent',
borderColor:variables.btnInfoBg,
borderWidth:variables.borderWidth*2}),

'.warning':_extends({},
warningCommon,{
backgroundColor:'transparent',
borderColor:variables.btnWarningBg,
borderWidth:variables.borderWidth*2}),

'.danger':_extends({},
dangerCommon,{
backgroundColor:'transparent',
borderColor:variables.btnDangerBg,
borderWidth:variables.borderWidth*2}),

'.disabled':{
backgroundColor:null,
borderColor:variables.btnDisabledBg,
borderWidth:variables.borderWidth*2,
'NativeBase.Text':{
color:variables.btnDisabledBg}}},


primaryCommon,{
borderWidth:variables.borderWidth*2,
elevation:null,
shadowColor:null,
shadowOffset:null,
shadowOpacity:null,
shadowRadius:null,
backgroundColor:'transparent'}),


'.dark':{
'.bordered':_extends({},
darkCommon),

backgroundColor:variables.brandDark},

'.light':_extends({
'.transparent':_extends({},
lightCommon,{
backgroundColor:null}),

'.bordered':_extends({},
lightCommon)},

darkCommon,{
backgroundColor:variables.brandLight}),


'.primary':{
'.bordered':_extends({},
primaryCommon),

backgroundColor:variables.btnPrimaryBg},


'.success':{
'.bordered':_extends({},
successCommon),

backgroundColor:variables.btnSuccessBg},


'.info':{
'.bordered':_extends({},
infoCommon),

backgroundColor:variables.btnInfoBg},


'.warning':{
'.bordered':_extends({},
warningCommon),

backgroundColor:variables.btnWarningBg},


'.danger':{
'.bordered':_extends({},
dangerCommon),

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


'.transparent':_extends({
backgroundColor:'transparent',
elevation:0,
shadowColor:null,
shadowOffset:null,
shadowRadius:null,
shadowOpacity:null},
primaryCommon,{
'.dark':_extends({},
darkCommon,{
backgroundColor:null}),

'.danger':_extends({},
dangerCommon,{
backgroundColor:null}),

'.warning':_extends({},
warningCommon,{
backgroundColor:null}),

'.info':_extends({},
infoCommon,{
backgroundColor:null}),

'.primary':_extends({},
primaryCommon,{
backgroundColor:null}),

'.success':_extends({},
successCommon,{
backgroundColor:null}),

'.light':_extends({},
lightCommon,{
backgroundColor:null})}),



'.small':{
height:30,
'NativeBase.Text':{
fontSize:14}},



'.large':{
height:60,
'NativeBase.Text':{
fontSize:22,
lineHeight:32}},



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
lineHeight:variables.btnLineHeight,
paddingHorizontal:16,
backgroundColor:'transparent'},



'NativeBase.Icon':{
color:variables.inverseTextColor,
fontSize:24,
marginHorizontal:16,
paddingTop:platform==='ios'?2:undefined},

'NativeBase.IconNB':{
color:variables.inverseTextColor,
fontSize:24,
marginHorizontal:16,
paddingTop:platform==='ios'?2:undefined},


'.iconLeft':{
'NativeBase.Text':{
marginLeft:0},

'NativeBase.IconNB':{
marginRight:0,
marginLeft:16},

'NativeBase.Icon':{
marginRight:0,
marginLeft:16}},


'.iconRight':{
'NativeBase.Text':{
marginRight:0},

'NativeBase.IconNB':{
marginLeft:0,
marginRight:16},

'NativeBase.Icon':{
marginLeft:0,
marginRight:16}},


'.picker':{
'NativeBase.Text':{
'.note':{
fontSize:16,
lineHeight:null}}},




paddingVertical:variables.buttonPadding,

backgroundColor:variables.btnPrimaryBg,
borderRadius:variables.borderRadiusBase,
borderColor:variables.btnPrimaryBg,
borderWidth:null,
height:45,
alignSelf:'flex-start',
flexDirection:'row',
elevation:2,
shadowColor:platformStyle==='material'?variables.brandDark:undefined,
shadowOffset:
platformStyle==='material'?{width:0,height:2}:undefined,
shadowOpacity:platformStyle==='material'?0.2:undefined,
shadowRadius:platformStyle==='material'?1.2:undefined,
alignItems:'center',
justifyContent:'space-between'};

return buttonTheme;
};
//# sourceMappingURL=Button.js.map