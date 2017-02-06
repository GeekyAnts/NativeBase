Object.defineProperty(exports,"__esModule",{value:true});exports.CheckBox=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _IconNB=require('./IconNB');
var _theme=require('@shoutem/theme');
var _mapPropsToStyleNames=require('../Utils/mapPropsToStyleNames');var _mapPropsToStyleNames2=_interopRequireDefault(_mapPropsToStyleNames);
var _variables=require('../theme/variables');var _variables2=_interopRequireDefault(_variables);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var


CheckBox=function(_Component){_inherits(CheckBox,_Component);function CheckBox(){_classCallCheck(this,CheckBox);return _possibleConstructorReturn(this,(CheckBox.__proto__||Object.getPrototypeOf(CheckBox)).apply(this,arguments));}_createClass(CheckBox,[{key:'getBackgroundColor',value:function getBackgroundColor()
{
var backgroundColor=['transparent'];
if(this.props.checked){
backgroundColor.push(this.props.color?this.props.color:_variables2.default.checkboxBgColor);
}else{
backgroundColor.push('transparent');
}
return backgroundColor[1];
}},{key:'render',value:function render()
{var _this2=this;
return(
_react2.default.createElement(_reactNative.TouchableOpacity,_extends({
ref:function ref(c){return _this2._root=c;}},
this.props,{
style:{
borderRadius:_variables2.default.CheckboxRadius,
overflow:'hidden',
width:_variables2.default.checkboxSize,
height:_variables2.default.checkboxSize,
borderWidth:_variables2.default.CheckboxBorderWidth,
paddingLeft:_variables2.default.CheckboxPaddingLeft-1,
paddingBottom:_variables2.default.CheckboxPaddingBottom,
borderColor:this.props.color?this.props.color:_variables2.default.checkboxBgColor,
backgroundColor:this.getBackgroundColor()}}),


_react2.default.createElement(_IconNB.IconNB,{name:_reactNative.Platform.OS==='ios'?'ios-checkmark-outline':'md-checkmark'})));


}}]);return CheckBox;}(_react.Component);


CheckBox.propTypes=_extends({},
_reactNative.TouchableOpacity.propTypes,{
style:_react2.default.PropTypes.object,
checked:_react2.default.PropTypes.bool});


var StyledCheckBox=(0,_theme.connectStyle)('NativeBase.CheckBox',{},_mapPropsToStyleNames2.default)(CheckBox);exports.


CheckBox=StyledCheckBox;
//# sourceMappingURL=Checkbox.js.map