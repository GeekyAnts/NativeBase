
'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _NativeBaseComponent2=require('../../Base/NativeBaseComponent');var _NativeBaseComponent3=_interopRequireDefault(_NativeBaseComponent2);
var _computeProps=require('../../../Utils/computeProps');var _computeProps2=_interopRequireDefault(_computeProps);
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

ListNB=function(_NativeBaseComponent){_inherits(ListNB,_NativeBaseComponent);function ListNB(){_classCallCheck(this,ListNB);return _possibleConstructorReturn(this,(ListNB.__proto__||Object.getPrototypeOf(ListNB)).apply(this,arguments));}_createClass(ListNB,[{key:'getInitialStyle',value:function getInitialStyle()







{
return{
list:{},


insetList:{
borderWidth:1,
borderColor:this.getTheme().listBorderColor,
margin:15,
borderBottomWidth:0}};


}},{key:'prepareRootProps',value:function prepareRootProps()


{

var defaultProps={
style:this.props.inset?this.getInitialStyle().insetList:this.getInitialStyle().list};


return(0,_computeProps2.default)(this.props,defaultProps);
}},{key:'renderChildren',value:function renderChildren()

{

var childrenArray=_react2.default.Children.toArray(this.props.children);

var keyIndex=0;

childrenArray=childrenArray.map(function(child){
keyIndex++;
return _react2.default.cloneElement(child,_extends({},child.props,{key:keyIndex}));
});

var lastElement=_lodash2.default.last(childrenArray);



return _lodash2.default.concat(_lodash2.default.slice(childrenArray,0,childrenArray.length-1),lastElement);
}},{key:'render',value:function render()

{var _this2=this;
if(this.props.dataArray&&this.props.renderRow){
var ds=new _reactNative.ListView.DataSource({rowHasChanged:function rowHasChanged(r1,r2){return r1!==r2;}});
var dataSource=ds.cloneWithRows(this.props.dataArray);
return(
_react2.default.createElement(_reactNative.ListView,_extends({},this.prepareRootProps(),{
enableEmptySections:true,
dataSource:dataSource,
refreshing:this.props.refreshing,
onRefresh:this.props.onRefresh,
renderRow:this.props.renderRow})));

}else
{
return(
_react2.default.createElement(_reactNative.View,_extends({ref:function ref(c){return _this2._root=c;}},this.prepareRootProps()),
this.renderChildren()));


}
}}]);return ListNB;}(_NativeBaseComponent3.default);exports.default=ListNB;
//# sourceMappingURL=index.js.map