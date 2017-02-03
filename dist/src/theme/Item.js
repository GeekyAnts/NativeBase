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
fontSize:variables.inputFontSize-2},

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
paddingHorizontal:5},

'NativeBase.IconNB':{
fontSize:24,
paddingHorizontal:5},

'NativeBase.Input':{
height:variables.inputHeightBase,
color:variables.inputColor,
paddingRight:5,
paddingLeft:5,
flex:1,
fontSize:variables.inputFontSize,
lineHeight:variables.inputLineHeight},

'.underline':{
'.success':{
borderColor:variables.inputSuccessBorderColor},

'.error':{
borderColor:variables.inputErrorBorderColor},

borderWidth:variables.borderWidth*2,
borderTopWidth:0,
borderRightWidth:0,
borderLeftWidth:0,
borderColor:variables.inputBorderColor},

'.regular':{
'.success':{
borderColor:variables.inputSuccessBorderColor},

'.error':{
borderColor:variables.inputErrorBorderColor},

borderWidth:variables.borderWidth*2,
borderColor:variables.inputBorderColor},

'.rounded':{
'.success':{
borderColor:variables.inputSuccessBorderColor},

'.error':{
borderColor:variables.inputErrorBorderColor},

borderWidth:variables.borderWidth*2,
borderRadius:30,
borderColor:variables.inputBorderColor},


'.success':{
'NativeBase.Icon':{
color:variables.inputSuccessBorderColor},

'NativeBase.IconNB':{
color:variables.inputSuccessBorderColor},

'.rounded':{
borderRadius:30,
borderColor:variables.inputSuccessBorderColor},

'.regular':{
borderColor:variables.inputSuccessBorderColor},

'.underline':{
borderWidth:variables.borderWidth*2,
borderTopWidth:0,
borderRightWidth:0,
borderLeftWidth:0,
borderColor:variables.inputSuccessBorderColor},

borderColor:variables.inputSuccessBorderColor},


'.error':{
'NativeBase.Icon':{
color:variables.inputErrorBorderColor},

'NativeBase.IconNB':{
color:variables.inputErrorBorderColor},

'.rounded':{
borderRadius:30,
borderColor:variables.inputErrorBorderColor},

'.regular':{
borderColor:variables.inputErrorBorderColor},

'.underline':{
borderWidth:variables.borderWidth*2,
borderTopWidth:0,
borderRightWidth:0,
borderLeftWidth:0,
borderColor:variables.inputErrorBorderColor},

borderColor:variables.inputErrorBorderColor},

'.disabled':{
'NativeBase.Icon':{
color:'#384850'},

'NativeBase.IconNB':{
color:'#384850'}},



borderWidth:variables.borderWidth*2,
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