Object.defineProperty(exports,"__esModule",{value:true});var _reactNative=require('react-native');
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);

var _platform=require('./../variables/platform');var _platform2=_interopRequireDefault(_platform);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=

function(){var variables=arguments.length>0&&arguments[0]!==undefined?arguments[0]:_platform2.default;
var textTheme={
fontSize:variables.DefaultFontSize-1,
fontFamily:variables.fontFamily,
color:variables.textColor,
'.note':{
color:'#a7a7a7',
fontSize:variables.noteFontSize}};



return textTheme;
};
//# sourceMappingURL=Text.js.map