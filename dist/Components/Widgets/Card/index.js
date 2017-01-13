
'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _NativeBaseComponent2=require('../../Base/NativeBaseComponent');var _NativeBaseComponent3=_interopRequireDefault(_NativeBaseComponent2);
var _computeProps=require('../../../Utils/computeProps');var _computeProps2=_interopRequireDefault(_computeProps);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

CardNB=function(_NativeBaseComponent){_inherits(CardNB,_NativeBaseComponent);function CardNB(){_classCallCheck(this,CardNB);return _possibleConstructorReturn(this,(CardNB.__proto__||Object.getPrototypeOf(CardNB)).apply(this,arguments));}_createClass(CardNB,[{key:'getInitialStyle',value:function getInitialStyle()





{
return{
card:{
marginVertical:5,
flex:1,
borderWidth:this.getTheme().borderWidth,
borderRadius:2,
borderColor:this.getTheme().listBorderColor,
flexWrap:'wrap',
borderBottomWidth:1,
backgroundColor:this.props.transparent?'transparent':this.getTheme().cardDefaultBg,
shadowColor:this.props.transparent?undefined:'#000',
shadowOffset:this.props.transparent?undefined:{width:0,height:2},
shadowOpacity:this.props.transparent?undefined:0.1,
shadowRadius:this.props.transparent?undefined:1.5,
elevation:this.props.transparent?undefined:2}};


}},{key:'prepareRootProps',value:function prepareRootProps()

{

var defaultProps={
style:this.getInitialStyle().card};


return(0,_computeProps2.default)(this.props,defaultProps);

}},{key:'renderChildren',value:function renderChildren()

{
var childrenArray=_react2.default.Children.map(this.props.children,function(child){
return child;
});

return childrenArray;
}},{key:'render',value:function render()

{var _this2=this;
if(this.props.dataArray&&this.props.renderRow){
var ds=new _reactNative.ListView.DataSource({rowHasChanged:function rowHasChanged(r1,r2){return r1!==r2;}});
var dataSource=ds.cloneWithRows(this.props.dataArray);
return(
_react2.default.createElement(_reactNative.ListView,_extends({},this.prepareRootProps(),{
enableEmptySections:true,
dataSource:dataSource,
renderRow:this.props.renderRow})));

}
return(
_react2.default.createElement(_reactNative.View,_extends({ref:function ref(c){return _this2._root=c;}},this.prepareRootProps()),
this.renderChildren()));


}}]);return CardNB;}(_NativeBaseComponent3.default);exports.default=CardNB;
//# sourceMappingURL=index.js.map