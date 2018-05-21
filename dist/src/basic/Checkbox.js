Object.defineProperty(exports,"__esModule",{value:true});exports.CheckBox=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName="src/basic/Checkbox.js";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require("react");var _react2=_interopRequireDefault(_react);
var _propTypes=require("prop-types");var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require("react-native");
var _Ionicons=require("react-native-vector-icons/Ionicons");var _Ionicons2=_interopRequireDefault(_Ionicons);
var _nativeBaseShoutemTheme=require("native-base-shoutem-theme");
var _mapPropsToStyleNames=require("../utils/mapPropsToStyleNames");var _mapPropsToStyleNames2=_interopRequireDefault(_mapPropsToStyleNames);
var _platform=require("../theme/variables/platform");var _platform2=_interopRequireDefault(_platform);
var _lodash=require("lodash");var _lodash2=_interopRequireDefault(_lodash);
var _computeProps=require("../utils/computeProps");var _computeProps2=_interopRequireDefault(_computeProps);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

CheckBox=function(_Component){_inherits(CheckBox,_Component);function CheckBox(){_classCallCheck(this,CheckBox);return _possibleConstructorReturn(this,(CheckBox.__proto__||Object.getPrototypeOf(CheckBox)).apply(this,arguments));}_createClass(CheckBox,[{key:"getInitialStyle",value:function getInitialStyle(




variables){
return{
checkStyle:{
borderColor:this.props.color?this.props.color:variables.checkboxBgColor,
backgroundColor:
this.props.checked===true?
this.props.color?this.props.color:variables.checkboxBgColor:
"transparent"}};


}},{key:"prepareRootProps",value:function prepareRootProps(

variables){
var defaultProps={
style:this.getInitialStyle(variables).checkStyle};


return(0,_computeProps2.default)(this.props,defaultProps);
}},{key:"render",value:function render()
{var _this2=this;
var variables=this.context.theme?this.context.theme["@@shoutem.theme/themeStyle"].variables:_platform2.default;
var platformStyle=variables.platformStyle;
var platform=variables.platform;
return(
_react2.default.createElement(_reactNative.TouchableOpacity,_extends({ref:function ref(c){return _this2._root=c;}},this.prepareRootProps(variables),{__source:{fileName:_jsxFileName,lineNumber:40}}),
_react2.default.createElement(_Ionicons2.default,{
style:{
color:this.props.checked===true?variables.checkboxTickColor:"transparent",
fontSize:variables.CheckboxFontSize,
lineHeight:variables.CheckboxIconSize},

name:platform==="ios"&&platformStyle!=="material"?"ios-checkmark-outline":"md-checkmark",__source:{fileName:_jsxFileName,lineNumber:41}})));



}}]);return CheckBox;}(_react.Component);CheckBox.contextTypes={theme:_propTypes2.default.object};


CheckBox.propTypes=_extends({},
_reactNative.TouchableOpacity.propTypes,{
style:_propTypes2.default.oneOfType([_propTypes2.default.object,_propTypes2.default.number,_propTypes2.default.array]),
checked:_propTypes2.default.bool,
onPress:_propTypes2.default.func});


var StyledCheckBox=(0,_nativeBaseShoutemTheme.connectStyle)("NativeBase.CheckBox",{},_mapPropsToStyleNames2.default)(CheckBox);exports.

CheckBox=StyledCheckBox;
//# sourceMappingURL=Checkbox.js.map