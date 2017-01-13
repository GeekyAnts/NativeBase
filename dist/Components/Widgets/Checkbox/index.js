
'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _NativeBaseComponent2=require('../../Base/NativeBaseComponent');var _NativeBaseComponent3=_interopRequireDefault(_NativeBaseComponent2);
var _Ionicons=require('react-native-vector-icons/Ionicons');var _Ionicons2=_interopRequireDefault(_Ionicons);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

CheckBox=function(_NativeBaseComponent){_inherits(CheckBox,_NativeBaseComponent);function CheckBox(){_classCallCheck(this,CheckBox);return _possibleConstructorReturn(this,(CheckBox.__proto__||Object.getPrototypeOf(CheckBox)).apply(this,arguments));}_createClass(CheckBox,[{key:'getInitialStyle',value:function getInitialStyle()

{
return{
checkbox:{
borderRadius:_reactNative.Platform.OS==='ios'?13:2,
overflow:'hidden',
width:this.getTheme().checkboxSize,
height:this.getTheme().checkboxSize,
borderWidth:_reactNative.Platform.OS==='ios'?1:2,
paddingLeft:_reactNative.Platform.OS==='ios'?5:2,
paddingBottom:_reactNative.Platform.OS==='ios'?0:5,
borderColor:this.getTheme().checkboxBgColor,
backgroundColor:this.props.checked?this.getTheme().checkboxBgColor:'transparent'}};


}},{key:'render',value:function render()

{var _this2=this;
return(
_react2.default.createElement(_reactNative.TouchableOpacity,_extends({ref:function ref(c){return _this2._root=c;},style:this.getInitialStyle().checkbox},this.props),
_react2.default.createElement(_Ionicons2.default,{name:_reactNative.Platform.OS==='ios'?'ios-checkmark-outline':'md-checkmark',style:{color:this.props.checked?this.getTheme().checkboxTickColor:'transparent',lineHeight:_reactNative.Platform.OS==='ios'?this.getTheme().checkboxSize/0.93:this.getTheme().checkboxSize-5,marginTop:_reactNative.Platform.OS==='ios'?undefined:1,fontSize:_reactNative.Platform.OS==='ios'?this.getTheme().checkboxSize/0.8:this.getTheme().checkboxSize/1.2}})));


}}]);return CheckBox;}(_NativeBaseComponent3.default);exports.default=CheckBox;
//# sourceMappingURL=index.js.map