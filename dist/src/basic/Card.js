Object.defineProperty(exports,"__esModule",{value:true});exports.Card=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName="src/basic/Card.js";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require("react");var _react2=_interopRequireDefault(_react);
var _propTypes=require("prop-types");var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require("react-native");

var _nativeBaseShoutemTheme=require("native-base-shoutem-theme");
var _mapPropsToStyleNames=require("../Utils/mapPropsToStyleNames");var _mapPropsToStyleNames2=_interopRequireDefault(_mapPropsToStyleNames);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Card=function(_Component){_inherits(Card,_Component);function Card(){_classCallCheck(this,Card);return _possibleConstructorReturn(this,(Card.__proto__||Object.getPrototypeOf(Card)).apply(this,arguments));}_createClass(Card,[{key:"render",value:function render()
{var _this2=this;
if(this.props.dataArray&&this.props.renderRow){
var ds=new _reactNative.ListView.DataSource({
rowHasChanged:function rowHasChanged(r1,r2){return r1!==r2;}});

var dataSource=ds.cloneWithRows(this.props.dataArray);
return(
_react2.default.createElement(_reactNative.ListView,_extends({},
this.props,{
enableEmptySections:true,
dataSource:dataSource,
renderRow:this.props.renderRow,__source:{fileName:_jsxFileName,lineNumber:16}})));


}
return(
_react2.default.createElement(_reactNative.View,_extends({ref:function ref(c){return _this2._root=c;}},this.props,{__source:{fileName:_jsxFileName,lineNumber:25}}),
this.props.children));


}}]);return Card;}(_react.Component);


Card.propTypes=_extends({},_reactNative.ViewPropTypes,{

style:_propTypes2.default.oneOfType([
_propTypes2.default.object,
_propTypes2.default.number,
_propTypes2.default.array]),

dataArray:_propTypes2.default.array,
renderRow:_propTypes2.default.func});


var StyledCard=(0,_nativeBaseShoutemTheme.connectStyle)("NativeBase.Card",{},_mapPropsToStyleNames2.default)(
Card);exports.


Card=StyledCard;
//# sourceMappingURL=Card.js.map