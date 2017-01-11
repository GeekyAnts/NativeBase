
'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNativeKeyboardAwareScrollView=require('react-native-keyboard-aware-scroll-view');
var _NativeBaseComponent2=require('../../Base/NativeBaseComponent');var _NativeBaseComponent3=_interopRequireDefault(_NativeBaseComponent2);
var _computeProps=require('../../../Utils/computeProps');var _computeProps2=_interopRequireDefault(_computeProps);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var


Content=function(_NativeBaseComponent){_inherits(Content,_NativeBaseComponent);function Content(){_classCallCheck(this,Content);return _possibleConstructorReturn(this,(Content.__proto__||Object.getPrototypeOf(Content)).apply(this,arguments));}_createClass(Content,[{key:'prepareRootProps',value:function prepareRootProps()







{

var type={
backgroundColor:'transparent',
flex:1};


var defaultProps={
style:type,
resetScrollToCoords:this.props.disableKBDismissScroll?null:{
x:0,
y:0}};



return(0,_computeProps2.default)(this.props,defaultProps);
}},{key:'render',value:function render()

{var _this2=this;
var contentContainerStyle=this.props.contentContainerStyle||{};
contentContainerStyle.padding=this.props.padder?this.getTheme().contentPadding:0;
return(
_react2.default.createElement(_reactNativeKeyboardAwareScrollView.KeyboardAwareScrollView,_extends({automaticallyAdjustContentInsets:false,ref:function ref(c){_this2._scrollview=c;_this2._root=c;}},this.prepareRootProps(),{contentContainerStyle:contentContainerStyle}),this.props.children));

}}]);return Content;}(_NativeBaseComponent3.default);exports.default=Content;
//# sourceMappingURL=index.js.map