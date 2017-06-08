Object.defineProperty(exports,"__esModule",{value:true});var _platform=require("./../variables/platform");var _platform2=_interopRequireDefault(_platform);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=

function(){var variables=arguments.length>0&&arguments[0]!==undefined?arguments[0]:_platform2.default;
var platformStyle=variables.platformStyle;
var platform=variables.platform;

var footerTheme={
"NativeBase.Left":{
"NativeBase.Button":{
".transparent":{
backgroundColor:"transparent",
borderColor:null,
elevation:0,
shadowColor:null,
shadowOffset:null,
shadowRadius:null,
shadowOpacity:null},

"NativeBase.Icon":{
color:variables.topTabBarActiveTextColor},

"NativeBase.IconNB":{
color:variables.topTabBarActiveTextColor},

alignSelf:null},

flex:1,
alignSelf:"center",
alignItems:"flex-start"},

"NativeBase.Body":{
flex:1,
alignItems:"center",
alignSelf:"center",
flexDirection:"row",
"NativeBase.Button":{
alignSelf:"center",
".transparent":{
backgroundColor:"transparent",
borderColor:null,
elevation:0,
shadowColor:null,
shadowOffset:null,
shadowRadius:null,
shadowOpacity:null},

".full":{
height:variables.footerHeight,
flex:1},

"NativeBase.Icon":{
color:variables.topTabBarActiveTextColor},

"NativeBase.IconNB":{
color:variables.topTabBarActiveTextColor}}},



"NativeBase.Right":{
"NativeBase.Button":{
".transparent":{
backgroundColor:"transparent",
borderColor:null,
elevation:0,
shadowColor:null,
shadowOffset:null,
shadowRadius:null,
shadowOpacity:null},

"NativeBase.Icon":{
color:variables.topTabBarActiveTextColor},

"NativeBase.IconNB":{
color:variables.topTabBarActiveTextColor},

alignSelf:null},

flex:1,
alignSelf:"center",
alignItems:"flex-end"},

backgroundColor:variables.footerDefaultBg,
flexDirection:"row",
justifyContent:"center",
borderTopWidth:platform==="ios"&&platformStyle!=="material"?
variables.borderWidth:
undefined,
borderColor:platform==="ios"&&platformStyle!=="material"?
"#cbcbcb":
undefined,
height:variables.footerHeight,
elevation:3,
left:0,
right:0};


return footerTheme;
};
//# sourceMappingURL=Footer.js.map