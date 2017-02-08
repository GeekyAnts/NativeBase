Object.defineProperty(exports,"__esModule",{value:true});var _reactNative=require('react-native');
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);

var _variables=require('./variables');var _variables2=_interopRequireDefault(_variables);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=

function(){var variables=arguments.length>0&&arguments[0]!==undefined?arguments[0]:_variables2.default;
var platformStyle=variables.platformStyle;
var platform=variables.platform;

var tabTheme={
'NativeBase.Button':{
'.active':{
'NativeBase.Text':{
color:variables.topTabBarActiveTextColor,
fontSize:variables.tabBarTextSize,
lineHeight:16,
fontWeight:'700',
paddingVertical:3},

'NativeBase.Icon':{
color:variables.topTabBarActiveTextColor},

'NativeBase.IconNB':{
color:variables.topTabBarActiveTextColor},

borderBottomWidth:3,
borderRadius:null,
borderColor:variables.topTabBarBorderColor},

'NativeBase.Badge':{
'NativeBase.Text':{
fontSize:11,
lineHeight:14},

position:'absolute',
zIndex:99,
top:-4,
marginLeft:12,
height:18,
padding:1.7,
paddingHorizontal:3},

'NativeBase.Icon':{
color:variables.topTabBarTextColor},

'NativeBase.IconNB':{
color:variables.topTabBarTextColor},

'NativeBase.Text':{
color:variables.topTabBarTextColor,
fontSize:variables.tabBarTextSize,
lineHeight:16,
paddingVertical:3},

'.vertical':{
flexDirection:null},

flexDirection:'row',
backgroundColor:'transparent',
borderColor:null,
elevation:0,
shadowColor:null,
shadowOffset:null,
shadowRadius:null,
shadowOpacity:null,
alignSelf:'center',
flex:1,
height:null,
justifyContent:'center',
borderBottomWidth:3,
borderRadius:null,
borderColor:'transparent'},

flexDirection:'row',
justifyContent:'space-between',
alignSelf:'stretch',
borderBottomWidth:0.5,
elevation:3,
shadowColor:platformStyle==='material'?'#000':undefined,
shadowOffset:platformStyle==='material'?{width:0,height:2}:undefined,
shadowOpacity:platformStyle==='material'?0.2:undefined,
shadowRadius:platformStyle==='material'?1.2:undefined,
backgroundColor:variables.tabDefaultBg,
borderColor:variables.btnDisabledBg};



return tabTheme;
};
//# sourceMappingURL=Tab.js.map