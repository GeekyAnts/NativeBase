
'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _View=require('./../View');var _View2=_interopRequireDefault(_View);
var _NativeBaseComponent2=require('../../Base/NativeBaseComponent');var _NativeBaseComponent3=_interopRequireDefault(_NativeBaseComponent2);
var _computeProps=require('../../../Utils/computeProps');var _computeProps2=_interopRequireDefault(_computeProps);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Footer=function(_NativeBaseComponent){_inherits(Footer,_NativeBaseComponent);function Footer(){_classCallCheck(this,Footer);return _possibleConstructorReturn(this,(Footer.__proto__||Object.getPrototypeOf(Footer)).apply(this,arguments));}_createClass(Footer,[{key:'getInitialStyle',value:function getInitialStyle()





{
return{
navbar:{
flexDirection:'row',
alignItems:'center',
justifyContent:!Array.isArray(this.props.children)?'center':'space-between',
height:this.getTheme().footerHeight,
backgroundColor:this.getTheme().footerDefaultBg,
borderTopWidth:_reactNative.Platform.OS=='ios'?1:undefined,
borderColor:_reactNative.Platform.OS=='ios'?'#cbcbcb':undefined}};


}},{key:'prepareRootProps',value:function prepareRootProps()

{

var defaultProps={
style:this.getInitialStyle().navbar};


return(0,_computeProps2.default)(this.props,defaultProps);

}},{key:'render',value:function render()

{var _this2=this;

return(
_react2.default.createElement(_View2.default,_extends({ref:function ref(c){return _this2._root=c;}},this.prepareRootProps()),
!Array.isArray(this.props.children)&&
_react2.default.createElement(_View2.default,{style:{flex:1,alignItems:'center'}},
this.props.children),


Array.isArray(this.props.children)&&
_react2.default.createElement(_View2.default,{style:{flex:1,alignItems:'center',justifyContent:'flex-start',flexDirection:'row'}},
this.props.children[0]),


Array.isArray(this.props.children)&&
_react2.default.createElement(_View2.default,{style:{flex:3,alignSelf:'center'}},
this.props.children[1]),


Array.isArray(this.props.children)&&
_react2.default.createElement(_View2.default,{style:{flex:1,alignItems:'center',justifyContent:'flex-end',flexDirection:'row'}},
this.props.children[2])));



}}]);return Footer;}(_NativeBaseComponent3.default);exports.default=Footer;
//# sourceMappingURL=index.js.map