
'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _NativeBaseComponent2=require('../../Base/NativeBaseComponent');var _NativeBaseComponent3=_interopRequireDefault(_NativeBaseComponent2);
var _computeProps=require('../../../Utils/computeProps');var _computeProps2=_interopRequireDefault(_computeProps);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

PickerNB=function(_NativeBaseComponent){_inherits(PickerNB,_NativeBaseComponent);function PickerNB(){_classCallCheck(this,PickerNB);return _possibleConstructorReturn(this,(PickerNB.__proto__||Object.getPrototypeOf(PickerNB)).apply(this,arguments));}_createClass(PickerNB,[{key:'getInitialStyle',value:function getInitialStyle()

{
return{
picker:{},


pickerItem:{}};



}},{key:'prepareRootProps',value:function prepareRootProps()
{

var defaultProps={
style:this.getInitialStyle().picker,
itemStyle:this.getInitialStyle().pickerItem};


return(0,_computeProps2.default)(this.props,defaultProps);

}},{key:'render',value:function render()

{var _this2=this;var _prepareRootProps=
this.prepareRootProps(),style=_prepareRootProps.style,itemStyle=_prepareRootProps.itemStyle,inlineLabel=_prepareRootProps.inlineLabel,iosHeader=_prepareRootProps.iosHeader,children=_prepareRootProps.children,otherProps=_objectWithoutProperties(_prepareRootProps,['style','itemStyle','inlineLabel','iosHeader','children']);
var additionalProps={};
if(inlineLabel){
additionalProps={flex:1};
}
return(
_react2.default.createElement(_reactNative.Picker,_extends({ref:function ref(c){return _this2._root=c;},style:[style,additionalProps],itemStyle:[itemStyle]},otherProps),
this.props.children));


}}]);return PickerNB;}(_NativeBaseComponent3.default);exports.default=PickerNB;



PickerNB.Item=_react2.default.createClass({displayName:'Item',

render:function render(){
return(
_react2.default.createElement(_reactNative.Picker.Item,this.props()));

}});
//# sourceMappingURL=index.js.map