Object.defineProperty(exports,"__esModule",{value:true});var _reactNative=require('react-native');
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);

var _variables=require('./variables');var _variables2=_interopRequireDefault(_variables);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=

function(){var variables=arguments.length>0&&arguments[0]!==undefined?arguments[0]:_variables2.default;
var itemTheme={
'.floatingLabel':{
'NativeBase.Input':{
height:55,
top:10}},


'.fixedLabel':{
'NativeBase.Label':{
position:null,
top:null,
left:null,
right:null,
paddingLeft:10,
flex:1,
height:null,
width:null,
fontSize:variables.inputFontSize},

'NativeBase.Input':{
flex:2,
fontSize:variables.inputFontSize}},


'.stackedLabel':{
'NativeBase.Label':{
position:null,
top:null,
left:null,
right:null,
paddingTop:5,
paddingLeft:10,
alignSelf:'flex-start',
fontSize:variables.inputFontSize},

'NativeBase.Input':{
alignSelf:_reactNative.Platform.OS==='ios'?'stretch':'flex-start',
flex:1,
width:_reactNative.Platform.OS==='ios'?null:variables.deviceWidth-25,
paddingTop:10,
paddingLeft:10,
fontSize:variables.inputFontSize},

flexDirection:null},

'.inlineLabel':{
'NativeBase.Label':{
position:null,
top:null,
left:null,
right:null,
paddingLeft:10,
paddingRight:20,
height:null,
width:null,
fontSize:variables.inputFontSize},

'NativeBase.Input':{
paddingLeft:5,
fontSize:variables.inputFontSize},

flexDirection:'row'},

'NativeBase.Label':{
position:'absolute',
top:10,
left:15,
right:0,
fontSize:variables.inputFontSize,
color:variables.inputColorPlaceholder},

'NativeBase.Icon':{
fontSize:24,
color:variables.topTabBarActiveTextColor,
paddingHorizontal:5},

'NativeBase.IconNB':{
fontSize:24,
color:variables.topTabBarActiveTextColor,
paddingHorizontal:5},

'NativeBase.Input':{
height:variables.inputHeightBase,
color:variables.inputColor,
paddingRight:5,
paddingLeft:10,
flex:1,
fontSize:variables.inputFontSize,
lineHeight:variables.inputLineHeight},

'.underline':{
'.success':{
borderColor:variables.inputSuccessBorderColor},

'.error':{
borderColor:variables.inputErrorBorderColor},

paddingLeft:5,
borderWidth:variables.borderWidth,
borderTopWidth:0,
borderRightWidth:0,
borderLeftWidth:0,
borderColor:variables.inputBorderColor},

'.regular':{
'.success':{
borderColor:variables.inputSuccessBorderColor},

'.error':{
borderColor:variables.inputErrorBorderColor},

paddingLeft:5,
borderWidth:variables.borderWidth,
borderColor:variables.inputBorderColor},

'.rounded':{
'.success':{
borderColor:variables.inputSuccessBorderColor},

'.error':{
borderColor:variables.inputErrorBorderColor},

paddingLeft:5,
borderWidth:variables.borderWidth,
borderRadius:30,
borderColor:variables.inputBorderColor},


'.success':{
'.rounded':{
borderRadius:30,
borderColor:variables.inputSuccessBorderColor},

'.regular':{
borderColor:variables.inputSuccessBorderColor},

'.underline':{
borderWidth:variables.borderWidth,
borderTopWidth:0,
borderRightWidth:0,
borderLeftWidth:0,
borderColor:variables.inputSuccessBorderColor},

borderColor:variables.inputSuccessBorderColor},


'.error':{
'.rounded':{
borderRadius:30,
borderColor:variables.inputErrorBorderColor},

'.regular':{
borderColor:variables.inputErrorBorderColor},

'.underline':{
borderWidth:variables.borderWidth,
borderTopWidth:0,
borderRightWidth:0,
borderLeftWidth:0,
borderColor:variables.inputErrorBorderColor},

borderColor:variables.inputErrorBorderColor},


paddingLeft:5,
borderWidth:variables.borderWidth,
borderTopWidth:0,
borderRightWidth:0,
borderLeftWidth:0,
borderColor:variables.inputBorderColor,
backgroundColor:'transparent',
flexDirection:'row',
alignItems:'center'};



return itemTheme;
};
//# sourceMappingURL=Item.js.map