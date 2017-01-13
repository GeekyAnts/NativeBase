
'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _NativeBaseComponent2=require('../../Base/NativeBaseComponent');var _NativeBaseComponent3=_interopRequireDefault(_NativeBaseComponent2);
var _computeProps=require('../../../Utils/computeProps');var _computeProps2=_interopRequireDefault(_computeProps);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Textarea=function(_NativeBaseComponent){_inherits(Textarea,_NativeBaseComponent);function Textarea(){_classCallCheck(this,Textarea);return _possibleConstructorReturn(this,(Textarea.__proto__||Object.getPrototypeOf(Textarea)).apply(this,arguments));}_createClass(Textarea,[{key:'getInitialStyle',value:function getInitialStyle()





{
return{
input:{
height:this.props.rowSpan*25,
color:this.getTheme().textColor,
paddingLeft:5,
paddingRight:5,
fontSize:18}};


}},{key:'getBorderStyle',value:function getBorderStyle()
{
return{
underline:{
borderTopWidth:0,
borderRightWidth:0,
borderLeftWidth:0,
marginTop:5},


bordered:{
marginTop:5},


rounded:{
borderRadius:30,
marginTop:5}};


}},{key:'prepareRootProps',value:function prepareRootProps()

{

var defaultProps={
style:this.getInitialStyle().input};


return(0,_computeProps2.default)(this.props,defaultProps);

}},{key:'render',value:function render()

{var _this2=this;

return(
_react2.default.createElement(_reactNative.View,{style:{flex:1}},
_react2.default.createElement(_reactNative.TextInput,_extends({ref:function ref(c){return _this2._root=c;}},this.prepareRootProps(),{multiline:true,placeholderTextColor:this.getTheme().inputColorPlaceholder,underlineColorAndroid:'rgba(0,0,0,0)'}))));


}}]);return Textarea;}(_NativeBaseComponent3.default);exports.default=Textarea;
//# sourceMappingURL=index.js.map