
'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _NativeBaseComponent2=require('../../Base/NativeBaseComponent');var _NativeBaseComponent3=_interopRequireDefault(_NativeBaseComponent2);
var _computeProps=require('../../../Utils/computeProps');var _computeProps2=_interopRequireDefault(_computeProps);
var _reactNativeScrollableTabView=require('./../../vendor/react-native-scrollable-tab-view');var _reactNativeScrollableTabView2=_interopRequireDefault(_reactNativeScrollableTabView);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

TabNB=function(_NativeBaseComponent){_inherits(TabNB,_NativeBaseComponent);




function TabNB(props){_classCallCheck(this,TabNB);var _this=_possibleConstructorReturn(this,(TabNB.__proto__||Object.getPrototypeOf(TabNB)).call(this,
props));

_this.goToPage=_this.goToPage.bind(_this);return _this;
}_createClass(TabNB,[{key:'goToPage',value:function goToPage(

page){
this._scrollableTabView.goToPage(page);
}},{key:'getInitialStyle',value:function getInitialStyle()

{
return{
tab:{
flex:1}};


}},{key:'prepareRootProps',value:function prepareRootProps()

{

var defaultProps={
style:this.getInitialStyle().tab};


return(0,_computeProps2.default)(this.props,defaultProps);

}},{key:'render',value:function render()

{var _this2=this;
var children=Array.isArray(this.props.children)?this.props.children:[this.props.children];
return(
_react2.default.createElement(_reactNativeScrollableTabView2.default,_extends({edgeHitWidth:this.props.edgeHitWidth,ref:function ref(c){_this2._scrollableTabView=c;_this2._root=c;}},this.prepareRootProps()),
children.filter(function(child){return child;})));


}}]);return TabNB;}(_NativeBaseComponent3.default);exports.default=TabNB;
//# sourceMappingURL=index.js.map