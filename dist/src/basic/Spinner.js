Object.defineProperty(exports,"__esModule",{value:true});exports.Spinner=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');

var _theme=require('@shoutem/theme');
var _platform=require('../theme/variables/platform');var _platform2=_interopRequireDefault(_platform);
var _mapPropsToStyleNames=require('../Utils/mapPropsToStyleNames');var _mapPropsToStyleNames2=_interopRequireDefault(_mapPropsToStyleNames);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Spinner=function(_Component){_inherits(Spinner,_Component);function Spinner(){_classCallCheck(this,Spinner);return _possibleConstructorReturn(this,(Spinner.__proto__||Object.getPrototypeOf(Spinner)).apply(this,arguments));}_createClass(Spinner,[{key:'render',value:function render()
{var _this2=this;
return(
_react2.default.createElement(_reactNative.ActivityIndicator,_extends({
ref:function ref(c){return _this2._root=c;}},this.props,{
color:this.props.color?this.props.color:this.props.inverse?_platform2.default.inverseSpinnerColor:_platform2.default.defaultSpinnerColor,size:this.props.size?this.props.size:'large'})));


}}]);return Spinner;}(_react.Component);


Spinner.propTypes=_extends({},
_reactNative.ActivityIndicator.propTypes,{
color:_react2.default.PropTypes.string,
inverse:_react2.default.PropTypes.bool});


var StyledSpinner=(0,_theme.connectStyle)('NativeBase.Spinner',{},_mapPropsToStyleNames2.default)(Spinner);exports.


Spinner=StyledSpinner;
//# sourceMappingURL=Spinner.js.map