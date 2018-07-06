Object.defineProperty(exports,"__esModule",{value:true});exports.InputGroup=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName="src\\basic\\InputGroup.js";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require("react");var _react2=_interopRequireDefault(_react);
var _propTypes=require("prop-types");var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require("react-native");

var _platform=require("../theme/variables/platform");var _platform2=_interopRequireDefault(_platform);
var _nativeBaseShoutemTheme=require("native-base-shoutem-theme");
var _computeProps=require("../utils/computeProps");var _computeProps2=_interopRequireDefault(_computeProps);
var _mapPropsToStyleNames=require("../utils/mapPropsToStyleNames");var _mapPropsToStyleNames2=_interopRequireDefault(_mapPropsToStyleNames);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

InputGroup=function(_Component){_inherits(InputGroup,_Component);function InputGroup(){_classCallCheck(this,InputGroup);return _possibleConstructorReturn(this,(InputGroup.__proto__||Object.getPrototypeOf(InputGroup)).apply(this,arguments));}_createClass(InputGroup,[{key:"getInitialStyle",value:function getInitialStyle()
{
return{
roundedInputGroup:{
borderWidth:this.props.rounded?1:undefined,
borderRadius:this.props.rounded?
_platform2.default.inputGroupRoundedBorderRadius:
undefined}};


}},{key:"prepareRootProps",value:function prepareRootProps()

{
var defaultProps={
style:this.getInitialStyle().roundedInputGroup};


return(0,_computeProps2.default)(this.props,defaultProps);
}},{key:"render",value:function render()
{var _this2=this;
return(
_react2.default.createElement(_reactNative.View,_extends({ref:function ref(c){return _this2._root=c;}},this.prepareRootProps(),{__source:{fileName:_jsxFileName,lineNumber:31}}),
this.props.children));


}}]);return InputGroup;}(_react.Component);


InputGroup.propTypes=_extends({},
_reactNative.ViewPropTypes,{
regular:_propTypes2.default.bool,
underline:_propTypes2.default.bool,
rounded:_propTypes2.default.bool,
success:_propTypes2.default.bool,
error:_propTypes2.default.bool,
disabled:_propTypes2.default.bool});


var StyledInputGroup=(0,_nativeBaseShoutemTheme.connectStyle)(
"NativeBase.InputGroup",
{},
_mapPropsToStyleNames2.default)(
InputGroup);exports.

InputGroup=StyledInputGroup;
//# sourceMappingURL=InputGroup.js.map