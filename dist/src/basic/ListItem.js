Object.defineProperty(exports,"__esModule",{value:true});exports.ListItem=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName="src/basic/ListItem.js";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require("react");var _react2=_interopRequireDefault(_react);
var _propTypes=require("prop-types");var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require("react-native");






var _nativeBaseShoutemTheme=require("native-base-shoutem-theme");
var _mapPropsToStyleNames=require("../utils/mapPropsToStyleNames");var _mapPropsToStyleNames2=_interopRequireDefault(_mapPropsToStyleNames);
var _platform=require("../theme/variables/platform");var _platform2=_interopRequireDefault(_platform);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

ListItem=function(_Component){_inherits(ListItem,_Component);function ListItem(){_classCallCheck(this,ListItem);return _possibleConstructorReturn(this,(ListItem.__proto__||Object.getPrototypeOf(ListItem)).apply(this,arguments));}_createClass(ListItem,[{key:"render",value:function render()



{var _this2=this;
var variables=this.context.theme?
this.context.theme["@@shoutem.theme/themeStyle"].variables:
_platform2.default;

if(
_reactNative.Platform.OS==="ios"||
_reactNative.Platform.OS==="web"||
variables.androidRipple===false||
!this.props.onPress&&!this.props.onLongPress||
_reactNative.Platform.Version<=21)
{
return(
_react2.default.createElement(_reactNative.TouchableHighlight,_extends({
onPress:this.props.onPress,
onLongPress:this.props.onLongPress,
ref:function ref(c){return _this2._root=c;},
underlayColor:variables.listBtnUnderlayColor},
this.props,{
style:undefined,__source:{fileName:_jsxFileName,lineNumber:31}}),

_react2.default.createElement(_reactNative.View,_extends({},this.props,{__source:{fileName:_jsxFileName,lineNumber:39}}),this.props.children)));


}else{
return(
_react2.default.createElement(_reactNative.TouchableNativeFeedback,{
ref:function ref(c){return _this2._root=c;},
onPress:this.props.onPress,
onLongPress:this.props.onLongPress,__source:{fileName:_jsxFileName,lineNumber:44}},

_react2.default.createElement(_reactNative.View,{style:{marginLeft:-17,paddingLeft:17},__source:{fileName:_jsxFileName,lineNumber:49}},
_react2.default.createElement(_reactNative.View,_extends({},this.props,{__source:{fileName:_jsxFileName,lineNumber:50}}),this.props.children))));



}
}}]);return ListItem;}(_react.Component);ListItem.contextTypes={theme:_propTypes2.default.object};


ListItem.propTypes=_extends({},
_reactNative.TouchableHighlight.propTypes,{
style:_propTypes2.default.oneOfType([
_propTypes2.default.object,
_propTypes2.default.number,
_propTypes2.default.array]),

itemDivider:_propTypes2.default.bool,
button:_propTypes2.default.bool});


var StyledListItem=(0,_nativeBaseShoutemTheme.connectStyle)(
"NativeBase.ListItem",
{},
_mapPropsToStyleNames2.default)(
ListItem);exports.

ListItem=StyledListItem;
//# sourceMappingURL=ListItem.js.map