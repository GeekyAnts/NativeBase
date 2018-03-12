Object.defineProperty(exports,"__esModule",{value:true});exports.Icon=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName="src/basic/Icon/index.js";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require("react");var _react2=_interopRequireDefault(_react);
var _propTypes=require("prop-types");var _propTypes2=_interopRequireDefault(_propTypes);

var _reactNative=require("react-native");
var _nativeBaseShoutemTheme=require("native-base-shoutem-theme");

var _IconNB=require("../IconNB");
var _NBIcons=require("./NBIcons.json");var _NBIcons2=_interopRequireDefault(_NBIcons);
var _platform=require("./../../theme/variables/platform");var _platform2=_interopRequireDefault(_platform);
var _lodash=require("lodash");var _lodash2=_interopRequireDefault(_lodash);

var _mapPropsToStyleNames=require("../../Utils/mapPropsToStyleNames");var _mapPropsToStyleNames2=_interopRequireDefault(_mapPropsToStyleNames);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Icon=function(_Component){_inherits(Icon,_Component);function Icon(){_classCallCheck(this,Icon);return _possibleConstructorReturn(this,(Icon.__proto__||Object.getPrototypeOf(Icon)).apply(this,arguments));}_createClass(Icon,[{key:"getName",value:function getName()




{
var variables=this.context.theme?this.context.theme["@@shoutem.theme/themeStyle"].variables:_platform2.default;
var platformStyle=variables.platformStyle;
var platform=variables.platform;

if((this.props.type||variables.iconFamily)==="Ionicons"){
if(typeof _NBIcons2.default[this.props.name]!=="object"){
return this.props.name;
}else if(typeof _NBIcons2.default[this.props.name]==="object"){
var name=void 0;
if(platform==="ios"&&platformStyle!=="material"){
name=this.props.active?_NBIcons2.default[this.props.name].ios.active:_NBIcons2.default[this.props.name].ios.default;
}else{
name=this.props.active?_NBIcons2.default[this.props.name].android.active:_NBIcons2.default[this.props.name].android.default;
}
return name;
}
}else{
return this.props.name;
}
}},{key:"getIconName",value:function getIconName()

{
if(_reactNative.Platform.OS==="ios"){
if(this.props.ios){
return this.props.ios;
}else{
return this.props.active?_NBIcons2.default[this.props.name].ios.active:_NBIcons2.default[this.props.name].ios.default;
}
}else if(this.props.android){
return this.props.android;
}else{
return this.props.active?_NBIcons2.default[this.props.name].android.active:_NBIcons2.default[this.props.name].android.default;
}
}},{key:"render",value:function render()

{var _this2=this;
if(this.props.ios&&this.props.android){
return(
_react2.default.createElement(_IconNB.IconNB,_extends({
ref:function ref(c){return _this2._root=c;}},
this.props,{
name:_reactNative.Platform.OS==="ios"?this.props.ios:this.props.android,__source:{fileName:_jsxFileName,lineNumber:58}})));


}else if(this.props.name&&(this.props.android||this.props.ios)){
return _react2.default.createElement(_IconNB.IconNB,_extends({ref:function ref(c){return _this2._root=c;}},this.props,{name:this.getIconName(),__source:{fileName:_jsxFileName,lineNumber:65}}));
}else{
return _react2.default.createElement(_IconNB.IconNB,_extends({ref:function ref(c){return _this2._root=c;}},this.props,{name:this.getName(),__source:{fileName:_jsxFileName,lineNumber:67}}));
}
}}]);return Icon;}(_react.Component);Icon.contextTypes={theme:_propTypes2.default.object};


Icon.propTypes=_extends({},
_IconNB.IconNB.propTypes,{
style:_propTypes2.default.oneOfType([_propTypes2.default.object,_propTypes2.default.number,_propTypes2.default.array]),
name:_propTypes2.default.string,
ios:_propTypes2.default.string,
android:_propTypes2.default.string,
active:_propTypes2.default.bool});


var StyledIcon=(0,_nativeBaseShoutemTheme.connectStyle)("NativeBase.Icon",{},_mapPropsToStyleNames2.default)(Icon);exports.

Icon=StyledIcon;
//# sourceMappingURL=index.js.map