Object.defineProperty(exports,"__esModule",{value:true});var _reactNative=require("react-native");

var _platform=require("./../variables/platform");var _platform2=_interopRequireDefault(_platform);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=

function(){var variables=arguments.length>0&&arguments[0]!==undefined?arguments[0]:_platform2.default;
var radioTheme={
".selected":{
"NativeBase.IconNB":{
color:_reactNative.Platform.OS==="ios"?
variables.radioColor:
variables.radioSelectedColorAndroid,
lineHeight:_reactNative.Platform.OS==="ios"?25:variables.radioBtnLineHeight,
height:_reactNative.Platform.OS==="ios"?20:undefined}},


"NativeBase.IconNB":{
color:_reactNative.Platform.OS==="ios"?"transparent":undefined,
lineHeight:_reactNative.Platform.OS==="ios"?
undefined:
variables.radioBtnLineHeight,
fontSize:_reactNative.Platform.OS==="ios"?undefined:variables.radioBtnSize}};



return radioTheme;
};
//# sourceMappingURL=Radio.js.map