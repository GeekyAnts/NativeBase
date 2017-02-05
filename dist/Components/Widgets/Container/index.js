
'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _View=require('./../View');var _View2=_interopRequireDefault(_View);
var _Header=require('./../Header');var _Header2=_interopRequireDefault(_Header);
var _Content=require('./../Content');var _Content2=_interopRequireDefault(_Content);
var _Footer=require('./../Footer');var _Footer2=_interopRequireDefault(_Footer);
var _Fab=require('./../Fab');var _Fab2=_interopRequireDefault(_Fab);
var _NativeBaseComponent2=require('../../Base/NativeBaseComponent');var _NativeBaseComponent3=_interopRequireDefault(_NativeBaseComponent2);
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);
var _computeProps=require('../../../Utils/computeProps');var _computeProps2=_interopRequireDefault(_computeProps);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Container=function(_NativeBaseComponent){_inherits(Container,_NativeBaseComponent);function Container(){_classCallCheck(this,Container);return _possibleConstructorReturn(this,(Container.__proto__||Object.getPrototypeOf(Container)).apply(this,arguments));}_createClass(Container,[{key:'renderHeader',value:function renderHeader()





{
if(Array.isArray(this.props.children)){
return _lodash2.default.find(this.props.children,function(item){
if(item&&_lodash2.default.get(item,'type',null)==_Header2.default){
return true;
}
});
}else

{
if(this.props.children&&_lodash2.default.get(this.props.children,'type',null)==_Header2.default){
return this.props.children;
}
}
}},{key:'renderContent',value:function renderContent()
{
if(Array.isArray(this.props.children)){

return _lodash2.default.filter(this.props.children,function(item){
if(item&&(_lodash2.default.get(item,'type',null)==_View2.default||_lodash2.default.get(item,'type',null)==_Content2.default||_lodash2.default.get(item,'type',null)==_reactNative.Image||_lodash2.default.get(item,'type',null)==_reactNative.View||_lodash2.default.get(item,'type',null)==_reactNative.ScrollView||_lodash2.default.get(item,'type',null)==_Fab2.default)){

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
if(item&&_lodash2.default.get(item,'type',null)==_Footer2.default){
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
{var _this2=this;
return(
_react2.default.createElement(_reactNative.View,_extends({ref:function ref(c){return _this2._root=c;}},this.prepareRootProps()),

this.renderHeader(),

this.renderContent(),

this.renderFooter()));




}}]);return Container;}(_NativeBaseComponent3.default);exports.default=Container;
//# sourceMappingURL=index.js.map