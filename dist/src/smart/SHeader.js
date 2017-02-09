Object.defineProperty(exports,"__esModule",{value:true});exports.SHeader=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _Left=require('../basic/Left');
var _Body=require('../basic/Body');
var _Right=require('../basic/Right');
var _Header=require('../basic/Header');
var _Button=require('../basic/Button');
var _Title=require('../basic/Title');
var _theme=require('@shoutem/theme');
var _mapPropsToStyleNames=require('../Utils/mapPropsToStyleNames');var _mapPropsToStyleNames2=_interopRequireDefault(_mapPropsToStyleNames);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

SHeader=function(_Component){_inherits(SHeader,_Component);function SHeader(){_classCallCheck(this,SHeader);return _possibleConstructorReturn(this,(SHeader.__proto__||Object.getPrototypeOf(SHeader)).apply(this,arguments));}_createClass(SHeader,[{key:'render',value:function render()

{var _this2=this;
return(
_react2.default.createElement(_Header.Header,_extends({ref:function ref(c){return _this2._root=c;}},this.props),
_react2.default.createElement(_Left.Left,null,
this.props.leftButton?_react2.default.createElement(_Button.Button,{
transparent:true,onPress:this.props.leftButtonPress,
style:this.props.leftButtonStyle},
this.props.leftButton):_react2.default.createElement(_reactNative.View,null)),

_react2.default.createElement(_Body.Body,null,
this.props.title?_react2.default.createElement(_Title.Title,{style:this.props.titleStyle},
this.props.title):_react2.default.createElement(_reactNative.View,null)),

_react2.default.createElement(_Right.Right,null,
this.props.rightButton?_react2.default.createElement(_Button.Button,{
transparent:true,
onPress:this.props.rightButtonPress,style:this.props.rightButtonStyle},
this.props.rightButton):_react2.default.createElement(_reactNative.View,null))));



}}]);return SHeader;}(_react.Component);


SHeader.propTypes=_extends({},
_reactNative.View.propTypes,{
style:_react2.default.PropTypes.object,
leftButton:_react2.default.PropTypes.object,
title:_react2.default.PropTypes.string,
rightButton:_react2.default.PropTypes.object,
leftButtonStyle:_react2.default.PropTypes.object,
titleStyle:_react2.default.PropTypes.object,
rightButtonStyle:_react2.default.PropTypes.object});


var StyledSHeader=(0,_theme.connectStyle)('NativeBase.SHeader',{},_mapPropsToStyleNames2.default)(SHeader);exports.

SHeader=StyledSHeader;
//# sourceMappingURL=SHeader.js.map