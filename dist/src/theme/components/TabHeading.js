Object.defineProperty(exports,"__esModule",{value:true});var _reactNative=require('react-native');
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);

var _platform=require('./../variables/platform');var _platform2=_interopRequireDefault(_platform);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=

function(){var variables=arguments.length>0&&arguments[0]!==undefined?arguments[0]:_platform2.default;
var platformStyle=variables.platformStyle;
var platform=variables.platform;

var tabHeadingTheme={
flexDirection:'row',
backgroundColor:variables.tabDefaultBg,
flex:1,
alignItems:'center',
justifyContent:'center',
'.scrollable':{
paddingHorizontal:20,
flex:platform==='android'?0:1,
minWidth:platform==='android'?undefined:60},

'NativeBase.Text':{
color:variables.topTabBarTextColor,
marginHorizontal:7},

'NativeBase.Icon':{
color:variables.topTabBarTextColor,
fontSize:platform==='ios'?26:undefined},

'.active':{
'NativeBase.Text':{
color:variables.topTabBarActiveTextColor,
fontWeight:'600'},

'NativeBase.Icon':{
color:variables.topTabBarActiveTextColor}}};





return tabHeadingTheme;
};
//# sourceMappingURL=TabHeading.js.map