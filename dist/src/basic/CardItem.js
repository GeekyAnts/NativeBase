Object.defineProperty(exports,"__esModule",{value:true});exports.CardItem=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName="src/basic/CardItem.js";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require("react");var _react2=_interopRequireDefault(_react);
var _propTypes=require("prop-types");var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require("react-native");

var _nativeBaseShoutemTheme=require("native-base-shoutem-theme");
var _mapPropsToStyleNames=require("../utils/mapPropsToStyleNames");var _mapPropsToStyleNames2=_interopRequireDefault(_mapPropsToStyleNames);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

CardItem=function(_Component){_inherits(CardItem,_Component);function CardItem(){_classCallCheck(this,CardItem);return _possibleConstructorReturn(this,(CardItem.__proto__||Object.getPrototypeOf(CardItem)).apply(this,arguments));}_createClass(CardItem,[{key:"render",value:function render()
{var _this2=this;
if(this.props.button){
return(
_react2.default.createElement(_reactNative.TouchableOpacity,_extends({
ref:function ref(c){return _this2._root=c;},
activeOpacity:0.2},
this.props,{__source:{fileName:_jsxFileName,lineNumber:12}}),

this.props.children));


}else{
return(
_react2.default.createElement(_reactNative.View,_extends({ref:function ref(c){return _this2._root=c;}},this.props,{__source:{fileName:_jsxFileName,lineNumber:22}}),
this.props.children));


}
}}]);return CardItem;}(_react.Component);


CardItem.propTypes=_extends({},
_reactNative.TouchableOpacity.propTypes,{
style:_propTypes2.default.oneOfType([_propTypes2.default.object,_propTypes2.default.number,_propTypes2.default.array]),
header:_propTypes2.default.bool,
cardBody:_propTypes2.default.bool,
footer:_propTypes2.default.bool,
button:_propTypes2.default.bool});


var StyledCardItem=(0,_nativeBaseShoutemTheme.connectStyle)("NativeBase.CardItem",{},_mapPropsToStyleNames2.default)(CardItem);exports.

CardItem=StyledCardItem;
//# sourceMappingURL=CardItem.js.map