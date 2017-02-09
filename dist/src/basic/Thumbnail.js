Object.defineProperty(exports,"__esModule",{value:true});exports.Thumbnail=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _theme=require('@shoutem/theme');
var _computeProps=require('../Utils/computeProps');var _computeProps2=_interopRequireDefault(_computeProps);
var _mapPropsToStyleNames=require('../Utils/mapPropsToStyleNames');var _mapPropsToStyleNames2=_interopRequireDefault(_mapPropsToStyleNames);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Thumbnail=function(_Component){_inherits(Thumbnail,_Component);function Thumbnail(){_classCallCheck(this,Thumbnail);return _possibleConstructorReturn(this,(Thumbnail.__proto__||Object.getPrototypeOf(Thumbnail)).apply(this,arguments));}_createClass(Thumbnail,[{key:'prepareRootProps',value:function prepareRootProps()




{
var type={
width:this.props.size?this.props.size:36,
height:this.props.size?this.props.size:36,
borderRadius:this.props.size?this.props.square?0:
this.props.size/2:this.props.square?0:18};

var defaultProps={
style:type};

return(0,_computeProps2.default)(this.props,defaultProps);
}},{key:'render',value:function render()
{var _this2=this;
return(
_react2.default.createElement(_reactNative.Image,_extends({ref:function ref(c){return _this2._root=c;}},this.prepareRootProps())));

}}]);return Thumbnail;}(_react.Component);


Thumbnail.propTypes=_extends({},
_reactNative.Image.propTypes,{
style:_react2.default.PropTypes.object,
square:_react2.default.PropTypes.bool,
circular:_react2.default.PropTypes.bool,
size:_react2.default.PropTypes.number});


var StyledThumbnail=(0,_theme.connectStyle)('NativeBase.Thumbnail',{},_mapPropsToStyleNames2.default)(Thumbnail);exports.


Thumbnail=StyledThumbnail;
//# sourceMappingURL=Thumbnail.js.map