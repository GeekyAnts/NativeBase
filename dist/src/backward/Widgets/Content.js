Object.defineProperty(exports,"__esModule",{value:true});exports.Content=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNativeKeyboardAwareScrollView=require('react-native-keyboard-aware-scroll-view');
var _theme=require('@shoutem/theme');
var _mapPropsToStyleNames=require('../../Utils/mapPropsToStyleNames');var _mapPropsToStyleNames2=_interopRequireDefault(_mapPropsToStyleNames);
var _NativeBaseComponent2=require('../Base/NativeBaseComponent');var _NativeBaseComponent3=_interopRequireDefault(_NativeBaseComponent2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Content=function(_NativeBaseComponent){_inherits(Content,_NativeBaseComponent);function Content(){_classCallCheck(this,Content);return _possibleConstructorReturn(this,(Content.__proto__||Object.getPrototypeOf(Content)).apply(this,arguments));}_createClass(Content,[{key:'render',value:function render()
{var _this2=this;
return(
_react2.default.createElement(_reactNativeKeyboardAwareScrollView.KeyboardAwareScrollView,_extends({
automaticallyAdjustContentInsets:false,
contentContainerStyle:this.props.contentContainerStyle,
resetScrollToCoords:this.props.disableKBDismissScroll?null:{x:0,y:0},
ref:function ref(c){_this2._scrollview=c;_this2._root=c;}},
this.props),

this.props.children));


}}]);return Content;}(_NativeBaseComponent3.default);


Content.propTypes=_extends({},
_reactNativeKeyboardAwareScrollView.KeyboardAwareScrollView.propTypes,{
style:_react2.default.PropTypes.object,
padder:_react2.default.PropTypes.bool,
disableKBDismissScroll:_react2.default.PropTypes.bool});


var StyledContent=(0,_theme.connectStyle)('NativeBase.Content',{},_mapPropsToStyleNames2.default)(Content);exports.


Content=StyledContent;
//# sourceMappingURL=Content.js.map