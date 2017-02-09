Object.defineProperty(exports,"__esModule",{value:true});exports.Input=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _theme=require('@shoutem/theme');
var _platform=require('../theme/variables/platform');var _platform2=_interopRequireDefault(_platform);
var _mapPropsToStyleNames=require('../Utils/mapPropsToStyleNames');var _mapPropsToStyleNames2=_interopRequireDefault(_mapPropsToStyleNames);
var _NativeBaseComponent2=require('./Base/NativeBaseComponent');var _NativeBaseComponent3=_interopRequireDefault(_NativeBaseComponent2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Input=function(_NativeBaseComponent){_inherits(Input,_NativeBaseComponent);function Input(){_classCallCheck(this,Input);return _possibleConstructorReturn(this,(Input.__proto__||Object.getPrototypeOf(Input)).apply(this,arguments));}_createClass(Input,[{key:'render',value:function render()
{var _this2=this;
return(
_react2.default.createElement(_reactNative.TextInput,_extends({ref:function ref(c){_this2._textInput=c;_this2._root=c;},editable:this.props.disabled?false:true},this.props,{placeholderTextColor:this.props.placeholderTextColor?this.props.placeholderTextColor:_platform2.default.inputColorPlaceholder,underlineColorAndroid:'rgba(0,0,0,0)'})));

}}]);return Input;}(_NativeBaseComponent3.default);


Input.propTypes=_extends({},
_reactNative.TextInput.propTypes,{
style:_react2.default.PropTypes.object});


var StyledInput=(0,_theme.connectStyle)('NativeBase.Input',{},_mapPropsToStyleNames2.default)(Input);exports.


Input=StyledInput;
//# sourceMappingURL=Input.js.map