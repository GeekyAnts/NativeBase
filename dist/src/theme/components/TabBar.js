Object.defineProperty(exports,"__esModule",{value:true});var _reactNative=require('react-native');
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);

var _platform=require('./../variables/platform');var _platform2=_interopRequireDefault(_platform);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=

function(){var variables=arguments.length>0&&arguments[0]!==undefined?arguments[0]:_platform2.default;
var tabBarTheme={
'.tabIcon':{
height:undefined},

'.vertical':{
height:60},

'NativeBase.Button':{
'.transparent':{
'NativeBase.Text':{
fontSize:variables.tabFontSize,
color:variables.sTabBarActiveTextColor,
fontWeight:'400'},

'NativeBase.IconNB':{
color:variables.sTabBarActiveTextColor}},


'NativeBase.IconNB':{
color:variables.sTabBarActiveTextColor},

'NativeBase.Text':{
fontSize:variables.tabFontSize,
color:variables.sTabBarActiveTextColor,
fontWeight:'400'},

'.isTabActive':{
'NativeBase.Text':{
fontWeight:'900'}},


flex:1,
alignSelf:'stretch',
alignItems:'center',
justifyContent:'center',
borderRadius:null,
borderBottomColor:'transparent',
backgroundColor:variables.tabBgColor},

height:45,
flexDirection:'row',
justifyContent:'space-around',
borderWidth:1,
borderTopWidth:0,
borderLeftWidth:0,
borderRightWidth:0,
borderBottomColor:'#ccc',
backgroundColor:variables.tabBgColor};



return tabBarTheme;
};
//# sourceMappingURL=TabBar.js.map