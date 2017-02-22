Object.defineProperty(exports,"__esModule",{value:true});var _reactNative=require('react-native');

var _platform=require('./../variables/platform');var _platform2=_interopRequireDefault(_platform);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=

function(){var variables=arguments.length>0&&arguments[0]!==undefined?arguments[0]:_platform2.default;
var platformStyle=variables.platformStyle;
var platform=variables.platform;

var segmentTheme={
height:45,
borderBottomWidth:variables.borderWidth,
borderColor:variables.segmentBorderColorMain,
flexDirection:'row',
justifyContent:'center',
backgroundColor:variables.segmentBackgroundColor,
'NativeBase.Button':{
alignSelf:'center',
borderRadius:0,
paddingHorizontal:25,
height:30,
backgroundColor:'transparent',
borderWidth:1,
borderColor:variables.segmentBorderColor,
elevation:0,
'.active':{
backgroundColor:variables.segmentActiveBackgroundColor,
'NativeBase.Text':{
color:variables.segmentActiveTextColor}},


'.first':{
borderTopLeftRadius:platform=='ios'?5:undefined,
borderBottomLeftRadius:platform=='ios'?5:undefined,
borderRightWidth:0},

'.last':{
borderTopRightRadius:platform=='ios'?5:undefined,
borderBottomRightRadius:platform=='ios'?5:undefined,
borderLeftWidth:0},

'NativeBase.Text':{
color:variables.segmentTextColor,
fontSize:14}}};





return segmentTheme;
};
//# sourceMappingURL=Segment.js.map