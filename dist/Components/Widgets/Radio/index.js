
'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _NativeBaseComponent2=require('../../Base/NativeBaseComponent');var _NativeBaseComponent3=_interopRequireDefault(_NativeBaseComponent2);
var _Ionicons=require('react-native-vector-icons/Ionicons');var _Ionicons2=_interopRequireDefault(_Ionicons);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Radio=function(_NativeBaseComponent){_inherits(Radio,_NativeBaseComponent);function Radio(){_classCallCheck(this,Radio);return _possibleConstructorReturn(this,(Radio.__proto__||Object.getPrototypeOf(Radio)).apply(this,arguments));}_createClass(Radio,[{key:'getInitialStyle',value:function getInitialStyle()

{
return{
radio:{}};

}},{key:'render',value:function render()

{var _this2=this;
return(
_react2.default.createElement(_reactNative.TouchableOpacity,_extends({ref:function ref(c){return _this2._root=c;}},this.props),
_reactNative.Platform.OS==='ios'?
_react2.default.createElement(_Ionicons2.default,{name:this.props.selected?'ios-radio-button-on':'ios-radio-button-off-outline',style:{color:this.props.selected?this.getTheme().radioSelectedColor:this.getTheme().radioColor,lineHeight:this.getTheme().radioBtnSize+4,fontSize:this.getTheme().radioBtnSize}}):

_react2.default.createElement(_Ionicons2.default,{name:this.props.selected?'md-radio-button-on':'md-radio-button-off',style:{color:this.props.selected?this.getTheme().radioSelectedColor:this.getTheme().radioColor,lineHeight:this.getTheme().radioBtnSize+1,fontSize:this.getTheme().radioBtnSize}})));



}}]);return Radio;}(_NativeBaseComponent3.default);exports.default=Radio;
//# sourceMappingURL=index.js.map