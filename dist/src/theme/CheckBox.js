Object.defineProperty(exports,"__esModule",{value:true});var _reactNative=require('react-native');
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);

var _variables=require('./variables');var _variables2=_interopRequireDefault(_variables);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=


function(){var variables=arguments.length>0&&arguments[0]!==undefined?arguments[0]:_variables2.default;
var checkBoxTheme={
'.checked':{
'NativeBase.Icon':{
color:variables.checkboxTickColor},

'NativeBase.IconNB':{
color:variables.checkboxTickColor},

backgroundColor:variables.checkboxBgColor},

'NativeBase.Icon':{
color:'transparent',
lineHeight:variables.CheckboxIconSize,
marginTop:variables.CheckboxIconMarginTop,
fontSize:variables.CheckboxFontSize},

'NativeBase.IconNB':{
color:'transparent',
lineHeight:variables.CheckboxIconSize,
marginTop:variables.CheckboxIconMarginTop,
fontSize:variables.CheckboxFontSize},

borderRadius:variables.CheckboxRadius,
overflow:'hidden',
width:variables.checkboxSize,
height:variables.checkboxSize,
borderWidth:variables.CheckboxBorderWidth,
paddingLeft:variables.CheckboxPaddingLeft-1,
paddingBottom:variables.CheckboxPaddingBottom,
borderColor:variables.checkboxBgColor,
backgroundColor:'transparent'};



return checkBoxTheme;
};
//# sourceMappingURL=CheckBox.js.map