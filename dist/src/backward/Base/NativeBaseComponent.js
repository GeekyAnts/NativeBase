Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _light=require('../Themes/light');var _light2=_interopRequireDefault(_light);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

NativeBaseComponent=function(_Component){_inherits(NativeBaseComponent,_Component);function NativeBaseComponent(){_classCallCheck(this,NativeBaseComponent);return _possibleConstructorReturn(this,(NativeBaseComponent.__proto__||Object.getPrototypeOf(NativeBaseComponent)).apply(this,arguments));}_createClass(NativeBaseComponent,[{key:'getChildContext',value:function getChildContext()















{
return{
NBtheme:this.props.NBtheme?this.props.NBtheme:this.getTheme(),
foregroundColor:this.props.foregroundColor?
this.props.foregroundColor:this.getTheme().textColor};

}},{key:'getContextForegroundColor',value:function getContextForegroundColor()

{
return this.context.foregroundColor;
}},{key:'getTheme',value:function getTheme()

{
return this.props.NBtheme?this.props.NBtheme:
this.context.NBtheme||_light2.default;
}}]);return NativeBaseComponent;}(_react.Component);NativeBaseComponent.contextTypes={NBtheme:_react2.default.PropTypes.object,foregroundColor:_react2.default.PropTypes.string};NativeBaseComponent.propTypes={NBtheme:_react2.default.PropTypes.object,foregroundColor:_react2.default.PropTypes.string};NativeBaseComponent.childContextTypes={NBtheme:_react2.default.PropTypes.object,foregroundColor:_react2.default.PropTypes.string};exports.default=NativeBaseComponent;
//# sourceMappingURL=NativeBaseComponent.js.map