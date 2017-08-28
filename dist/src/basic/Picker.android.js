Object.defineProperty(exports,"__esModule",{value:true});exports.PickerNB=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName="src/basic/Picker.android.js";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require("react");var _react2=_interopRequireDefault(_react);
var _propTypes=require("prop-types");var _propTypes2=_interopRequireDefault(_propTypes);
var _createReactClass=require("create-react-class");var _createReactClass2=_interopRequireDefault(_createReactClass);
var _reactNative=require("react-native");
var _nativeBaseShoutemTheme=require("native-base-shoutem-theme");
var _mapPropsToStyleNames=require("../Utils/mapPropsToStyleNames");var _mapPropsToStyleNames2=_interopRequireDefault(_mapPropsToStyleNames);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

PickerNB=function(_Component){_inherits(PickerNB,_Component);function PickerNB(){_classCallCheck(this,PickerNB);return _possibleConstructorReturn(this,(PickerNB.__proto__||Object.getPrototypeOf(PickerNB)).apply(this,arguments));}_createClass(PickerNB,[{key:"render",value:function render()
{var _this2=this;
return(
_react2.default.createElement(_reactNative.Picker,_extends({ref:function ref(c){return _this2._root=c;}},this.props,{__source:{fileName:_jsxFileName,lineNumber:11}}),
this.props.children));


}}]);return PickerNB;}(_react.Component);exports.default=PickerNB;


PickerNB.Item=(0,_createReactClass2.default)({displayName:"Item",
render:function render(){
return _react2.default.createElement(_reactNative.Picker.Item,_extends({},this.props(),{__source:{fileName:_jsxFileName,lineNumber:20}}));
}});


PickerNB.propTypes=_extends({},
_reactNative.Picker.propTypes);


var StyledPickerNB=(0,_nativeBaseShoutemTheme.connectStyle)("NativeBase.PickerNB",{},_mapPropsToStyleNames2.default)(PickerNB);exports.

PickerNB=StyledPickerNB;
//# sourceMappingURL=Picker.android.js.map