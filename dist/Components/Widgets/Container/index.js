
'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _View=require('./View');var _View2=_interopRequireDefault(_View);
var _Header=require('./Header');var _Header2=_interopRequireDefault(_Header);
var _Content=require('./Content');var _Content2=_interopRequireDefault(_Content);
var _Footer=require('./Footer');var _Footer2=_interopRequireDefault(_Footer);
var _NativeBaseComponent2=require('../Base/NativeBaseComponent');var _NativeBaseComponent3=_interopRequireDefault(_NativeBaseComponent2);
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);
var _computeProps=require('../../Utils/computeProps');var _computeProps2=_interopRequireDefault(_computeProps);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Container=function(_NativeBaseComponent){_inherits(Container,_NativeBaseComponent);function Container(){_classCallCheck(this,Container);return _possibleConstructorReturn(this,(Container.__proto__||Object.getPrototypeOf(Container)).apply(this,arguments));}_createClass(Container,[{key:'renderOther',value:function renderOther()





{
if(Array.isArray(this.props.children)){

return _lodash2.default.filter(this.props.children,function(item){
if(item&&item.type!=_Header2.default&&item.type!=_View2.default&&item.type!=_Content2.default&&item.type!=_reactNative.Image&&item.type!=_reactNative.View&&item.type!=_reactNative.ScrollView&&item.type!=_Footer2.default){
return true;
}
});
}else

{
if(this.props.children&&this.props.children.type!=_Header2.default&&this.props.children.type!=_Content2.default&&this.props.children.type!=_View2.default&&this.props.children.type!=_reactNative.View&&this.props.children.type!=_reactNative.Image&&this.props.children.type!=_reactNative.ScrollView&&this.props.children.type!=_Footer2.default){
return this.props.children;
}
}
}},{key:'renderHeader',value:function renderHeader()

{
if(Array.isArray(this.props.children)){
return _lodash2.default.find(this.props.children,function(item){
if(item&&item.type==_Header2.default){
return true;
}
});
}else

{
if(this.props.children&&this.props.children.type==_Header2.default){
return this.props.children;
}
}
}},{key:'renderContent',value:function renderContent()
{
if(Array.isArray(this.props.children)){

return _lodash2.default.filter(this.props.children,function(item){
if(item&&(item.type==_View2.default||item.type==_Content2.default||item.type==_reactNative.Image||item.type==_reactNative.View||item.type==_reactNative.ScrollView)){

return true;
}
});
}else

{
if(this.props.children&&(this.props.children.type==_Content2.default||this.props.children.type==_View2.default||this.props.children.type==_reactNative.View||this.props.children.type==_reactNative.Image||this.props.children.type==_reactNative.ScrollView)){
return this.props.children;
}
}
}},{key:'renderFooter',value:function renderFooter()
{
if(Array.isArray(this.props.children)){
return _lodash2.default.find(this.props.children,function(item){
if(item&&item.type==_Footer2.default){
return true;
}
});
}else

{
if(this.props.children&&this.props.children.type==_Footer2.default){
return this.props.children;
}
}
}},{key:'prepareRootProps',value:function prepareRootProps()
{

var type={
flex:1};


var defaultProps={
style:type};


return(0,_computeProps2.default)(this.props,defaultProps);
}},{key:'render',value:function render()
{
return(
_react2.default.createElement(_reactNative.View,this.prepareRootProps(),

this.renderHeader(),

this.renderContent(),

this.renderFooter(),

this.props.allowExtraContent==true?this.renderOther():null));



}}]);return Container;}(_NativeBaseComponent3.default);exports.default=Container;
//# sourceMappingURL=index.js.map