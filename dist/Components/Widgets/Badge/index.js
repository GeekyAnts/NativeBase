
'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _NativeBaseComponent2=require('../../Base/NativeBaseComponent');var _NativeBaseComponent3=_interopRequireDefault(_NativeBaseComponent2);
var _computeProps=require('../../../Utils/computeProps');var _computeProps2=_interopRequireDefault(_computeProps);
var _Text=require('./../Text');var _Text2=_interopRequireDefault(_Text);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var


BadgeNB=function(_NativeBaseComponent){_inherits(BadgeNB,_NativeBaseComponent);function BadgeNB(){_classCallCheck(this,BadgeNB);return _possibleConstructorReturn(this,(BadgeNB.__proto__||Object.getPrototypeOf(BadgeNB)).apply(this,arguments));}_createClass(BadgeNB,[{key:'prepareRootProps',value:function prepareRootProps()





{

var type={

backgroundColor:this.props.primary?
this.getTheme().brandPrimary:
this.props.success?
this.getTheme().brandSuccess:
this.props.info?
this.getTheme().brandInfo:
this.props.warning?
this.getTheme().brandWarning:
this.props.danger?
this.getTheme().brandDanger:
this.getTheme().badgeBg,
padding:_reactNative.Platform.OS==='ios'?3:0,
paddingHorizontal:10,
alignSelf:'flex-start',
borderRadius:13.5,
height:27};



var defaultProps={
style:type};


return(0,_computeProps2.default)(this.props,defaultProps);

}},{key:'render',value:function render()
{var _this2=this;
return(
_react2.default.createElement(_reactNative.View,_extends({ref:function ref(c){return _this2._root=c;}},this.prepareRootProps()),
_react2.default.createElement(_Text2.default,{style:[this.props.textStyle,{
color:this.props.textStyle&&this.props.textStyle.color?this.props.textStyle.color:this.getTheme().badgeColor,
fontSize:this.props.textStyle&&this.props.textStyle.fontSize?this.props.textStyle.fontSize:this.getTheme().fontSizeBase,
lineHeight:this.props.textStyle&&this.props.textStyle.lineHeight?this.props.textStyle.lineHeight:this.getTheme().lineHeight-1,
textAlign:'center'}]},
this.props.children)));



}}]);return BadgeNB;}(_NativeBaseComponent3.default);BadgeNB.propTypes={style:_react2.default.PropTypes.object};exports.default=BadgeNB;
//# sourceMappingURL=index.js.map