Object.defineProperty(exports,"__esModule",{value:true});var _platform=require("./../variables/platform");var _platform2=_interopRequireDefault(_platform);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=

function(){var variables=arguments.length>0&&arguments[0]!==undefined?arguments[0]:_platform2.default;
var platform=variables.platform;

var segmentTheme={
height:45,
borderColor:variables.segmentBorderColorMain,
flexDirection:"row",
justifyContent:"center",
backgroundColor:variables.segmentBackgroundColor,
"NativeBase.Button":{
alignSelf:"center",
borderRadius:0,
paddingHorizontal:20,
height:30,
backgroundColor:"transparent",
borderWidth:1,
borderLeftWidth:0,
borderColor:variables.segmentBorderColor,
elevation:0,
".active":{
backgroundColor:variables.segmentActiveBackgroundColor,
"NativeBase.Text":{
color:variables.segmentActiveTextColor}},


".first":{
borderTopLeftRadius:platform==="ios"?5:undefined,
borderBottomLeftRadius:platform==="ios"?5:undefined,
borderLeftWidth:1},

".last":{
borderTopRightRadius:platform==="ios"?5:undefined,
borderBottomRightRadius:platform==="ios"?5:undefined},

"NativeBase.Text":{
color:variables.segmentTextColor,
fontSize:14}}};




return segmentTheme;
};
//# sourceMappingURL=Segment.js.map