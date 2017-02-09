Object.defineProperty(exports,"__esModule",{value:true});var _reactNative=require('react-native');
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);

var _platform=require('./../variables/platform');var _platform2=_interopRequireDefault(_platform);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=

function(){var variables=arguments.length>0&&arguments[0]!==undefined?arguments[0]:_platform2.default;
var platformStyle=variables.platformStyle;
var platform=variables.platform;

var footerTabTheme={
'NativeBase.Button':{
'.active':{
'NativeBase.Text':{
color:variables.tabBarActiveTextColor,
fontSize:variables.tabBarTextSize,
lineHeight:16},

'NativeBase.Icon':{
color:variables.tabBarActiveTextColor},

'NativeBase.IconNB':{
color:variables.tabBarActiveTextColor},

backgroundColor:variables.tabActiveBgColor},

flexDirection:null,
backgroundColor:'transparent',
borderColor:null,
elevation:0,
shadowColor:null,
shadowOffset:null,
shadowRadius:null,
shadowOpacity:null,
alignSelf:'center',
flex:1,
height:variables.footerHeight,
justifyContent:'center',
'NativeBase.Badge':{
'NativeBase.Text':{
fontSize:11,
fontWeight:platform==='ios'?'600':undefined,
lineHeight:14},

position:'absolute',
zIndex:99,
top:-4,
height:18,
padding:1.7,
paddingHorizontal:3},

'NativeBase.Icon':{
color:variables.tabBarTextColor},

'NativeBase.IconNB':{
color:variables.tabBarTextColor},

'NativeBase.Text':{
color:variables.tabBarTextColor,
fontSize:variables.tabBarTextSize,
lineHeight:16}},


flexDirection:'row',
justifyContent:'space-between',
flex:1,
alignSelf:'stretch'};



return footerTabTheme;
};
//# sourceMappingURL=FooterTab.js.map