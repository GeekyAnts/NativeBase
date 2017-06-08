Object.defineProperty(exports,"__esModule",{value:true});var _platform=require("./../variables/platform");var _platform2=_interopRequireDefault(_platform);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=

function(){var variables=arguments.length>0&&arguments[0]!==undefined?arguments[0]:_platform2.default;
var platform=variables.platform;

var fabTheme={
"NativeBase.Button":{
alignItems:"center",
padding:null,
justifyContent:"center",
"NativeBase.Icon":{
alignSelf:"center"},

"NativeBase.IconNB":{
alignSelf:"center",
fontSize:20,
lineHeight:platform==="ios"?24:undefined}}};




return fabTheme;
};
//# sourceMappingURL=Fab.js.map