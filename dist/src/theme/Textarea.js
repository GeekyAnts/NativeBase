Object.defineProperty(exports,"__esModule",{value:true});var _reactNative=require('react-native');
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);

var _variables=require('./variables');var _variables2=_interopRequireDefault(_variables);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=

function(){var variables=arguments.length>0&&arguments[0]!==undefined?arguments[0]:_variables2.default;
var textAreaTheme={
'.underline':{
borderBottomWidth:1,
marginTop:5,
borderColor:variables.inputBorderColor},

'.bordered':{
borderWidth:1,
marginTop:5,
borderColor:variables.inputBorderColor},

color:variables.textColor,
paddingLeft:10,
paddingRight:5,
fontSize:15,
textAlignVertical:'top'};



return textAreaTheme;
};
//# sourceMappingURL=Textarea.js.map