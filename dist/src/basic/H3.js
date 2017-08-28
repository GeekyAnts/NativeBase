Object.defineProperty(exports,"__esModule",{value:true});exports.H3=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName="src/basic/H3.js";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require("react");var _react2=_interopRequireDefault(_react);
var _propTypes=require("prop-types");var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require("react-native");

var _nativeBaseShoutemTheme=require("native-base-shoutem-theme");
var _mapPropsToStyleNames=require("../Utils/mapPropsToStyleNames");var _mapPropsToStyleNames2=_interopRequireDefault(_mapPropsToStyleNames);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

H3=function(_Component){_inherits(H3,_Component);function H3(){_classCallCheck(this,H3);return _possibleConstructorReturn(this,(H3.__proto__||Object.getPrototypeOf(H3)).apply(this,arguments));}_createClass(H3,[{key:"render",value:function render()
{var _this2=this;
return _react2.default.createElement(_reactNative.Text,_extends({ref:function ref(c){return _this2._root=c;}},this.props,{__source:{fileName:_jsxFileName,lineNumber:10}}));
}}]);return H3;}(_react.Component);


var childrenType=function childrenType(props,propName,component){
var error=void 0;
var prop=props[propName];
_react2.default.Children.forEach(prop,function(child){
if(typeof child!=="string"){
error=new Error(component+" should have only string");
}
});
return error;
};

H3.propTypes=_extends({},
_reactNative.Text.propTypes,{
children:childrenType,
style:_propTypes2.default.oneOfType([_propTypes2.default.object,_propTypes2.default.number,_propTypes2.default.array])});


var StyledH3=(0,_nativeBaseShoutemTheme.connectStyle)("NativeBase.H3",{},_mapPropsToStyleNames2.default)(H3);exports.

H3=StyledH3;
//# sourceMappingURL=H3.js.map