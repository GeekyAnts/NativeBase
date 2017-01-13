
'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _NativeBaseComponent2=require('../../Base/NativeBaseComponent');var _NativeBaseComponent3=_interopRequireDefault(_NativeBaseComponent2);
var _computeProps=require('../../../Utils/computeProps');var _computeProps2=_interopRequireDefault(_computeProps);

var _Ionicons=require('react-native-vector-icons/Ionicons');var _Ionicons2=_interopRequireDefault(_Ionicons);
var _Entypo=require('react-native-vector-icons/Entypo');var _Entypo2=_interopRequireDefault(_Entypo);
var _FontAwesome=require('react-native-vector-icons/FontAwesome');var _FontAwesome2=_interopRequireDefault(_FontAwesome);
var _Foundation=require('react-native-vector-icons/Foundation');var _Foundation2=_interopRequireDefault(_Foundation);
var _MaterialIcons=require('react-native-vector-icons/MaterialIcons');var _MaterialIcons2=_interopRequireDefault(_MaterialIcons);
var _Octicons=require('react-native-vector-icons/Octicons');var _Octicons2=_interopRequireDefault(_Octicons);
var _Zocial=require('react-native-vector-icons/Zocial');var _Zocial2=_interopRequireDefault(_Zocial);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Icon=function(_NativeBaseComponent){_inherits(Icon,_NativeBaseComponent);function Icon(){_classCallCheck(this,Icon);return _possibleConstructorReturn(this,(Icon.__proto__||Object.getPrototypeOf(Icon)).apply(this,arguments));}_createClass(Icon,[{key:'componentWillMount',value:function componentWillMount()









{
switch(this.getTheme().iconFamily){
case'Ionicons':
this.Icon=_Ionicons2.default;
break;
case'Entypo':
this.Icon=_Entypo2.default;
break;
case'FontAwesome':
this.Icon=_FontAwesome2.default;
break;
case'Foundation':
this.Icon=_Foundation2.default;
break;
case'MaterialIcons':
this.Icon=_MaterialIcons2.default;
break;
case'Octicons':
this.Icon=_Octicons2.default;
break;
case'Zocial':
this.Icon=_Zocial2.default;
break;
default:
this.Icon=_Ionicons2.default;}

}},{key:'getInitialStyle',value:function getInitialStyle()



{
return{
icon:{
fontSize:this.getTheme().iconFontSize,
color:this.getContextForegroundColor()}};


}},{key:'prepareRootProps',value:function prepareRootProps()
{
var defaultProps={
style:this.getInitialStyle().icon};


return(0,_computeProps2.default)(this.props,defaultProps);

}},{key:'render',value:function render()

{var _this2=this;
return(
_react2.default.createElement(this.Icon,_extends({ref:function ref(c){return _this2._root=c;}},this.prepareRootProps())));

}}]);return Icon;}(_NativeBaseComponent3.default);Icon.getImageSource=_FontAwesome2.default.getImageSource;exports.default=Icon;
//# sourceMappingURL=index.js.map