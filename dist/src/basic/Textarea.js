Object.defineProperty(exports,"__esModule",{value:true});exports.Textarea=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName="src\\basic\\Textarea.js";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require("react");var _react2=_interopRequireDefault(_react);
var _propTypes=require("prop-types");var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require("react-native");
var _nativeBaseShoutemTheme=require("native-base-shoutem-theme");
var _platform=require("../theme/variables/platform");var _platform2=_interopRequireDefault(_platform);
var _computeProps=require("../utils/computeProps");var _computeProps2=_interopRequireDefault(_computeProps);
var _mapPropsToStyleNames=require("../utils/mapPropsToStyleNames");var _mapPropsToStyleNames2=_interopRequireDefault(_mapPropsToStyleNames);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Textarea=function(_Component){_inherits(Textarea,_Component);function Textarea(){_classCallCheck(this,Textarea);return _possibleConstructorReturn(this,(Textarea.__proto__||Object.getPrototypeOf(Textarea)).apply(this,arguments));}_createClass(Textarea,[{key:"getStyle",value:function getStyle()
{
return{
textarea:{
height:this.props.rowSpan?this.props.rowSpan*25:60}};


}},{key:"prepareRootProps",value:function prepareRootProps()

{
var defaultProps={
style:this.getStyle().textarea};

return(0,_computeProps2.default)(this.props,defaultProps);
}},{key:"render",value:function render()
{var _this2=this;
return(
_react2.default.createElement(_reactNative.TextInput,_extends({
ref:function ref(c){
_this2._textInput=c;
_this2._root=c;
}},
this.prepareRootProps(),{
multiline:true,
placeholderTextColor:
this.props.placeholderTextColor?this.props.placeholderTextColor:_platform2.default.inputColorPlaceholder,

underlineColorAndroid:"rgba(0,0,0,0)",__source:{fileName:_jsxFileName,lineNumber:26}})));


}}]);return Textarea;}(_react.Component);


Textarea.propTypes=_extends({},
_reactNative.TextInput.propTypes,{
style:_propTypes2.default.oneOfType([_propTypes2.default.object,_propTypes2.default.number,_propTypes2.default.array]),
rowSpan:_propTypes2.default.number,
bordered:_propTypes2.default.bool,
underline:_propTypes2.default.bool});


var StyledTextarea=(0,_nativeBaseShoutemTheme.connectStyle)("NativeBase.Textarea",{},_mapPropsToStyleNames2.default)(Textarea);exports.

Textarea=StyledTextarea;
//# sourceMappingURL=Textarea.js.map