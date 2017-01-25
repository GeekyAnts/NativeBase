Object.defineProperty(exports,"__esModule",{value:true});var _reactNative=require('react-native');
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);

var _variables=require('./variables');var _variables2=_interopRequireDefault(_variables);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=

function(){var variables=arguments.length>0&&arguments[0]!==undefined?arguments[0]:_variables2.default;
var tabTheme={
'NativeBase.Button':{
'.active':{
'NativeBase.Text':{
color:variables.activeTab,
fontSize:variables.tabBarTextSize,
lineHeight:16,
fontWeight:'700',
paddingVertical:3},

'NativeBase.Icon':{
color:variables.tabBarActiveTextColor},

'NativeBase.IconNB':{
color:variables.tabBarActiveTextColor},

borderBottomWidth:3,
borderRadius:null,
borderColor:variables.activeTab},

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
color:variables.tabBarActiveTextColor},

'NativeBase.IconNB':{
color:variables.tabBarActiveTextColor},

'NativeBase.Text':{
color:variables.activeTab,
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
borderColor:variables.btnDisabledBg};



return tabTheme;
};
//# sourceMappingURL=Tab.js.map