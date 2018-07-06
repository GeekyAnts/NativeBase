Object.defineProperty(exports,"__esModule",{value:true});exports.Header=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName="src\\basic\\Header.js";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require("react");var _react2=_interopRequireDefault(_react);
var _propTypes=require("prop-types");var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require("react-native");
var _nativeBaseShoutemTheme=require("native-base-shoutem-theme");
var _mapPropsToStyleNames=require("../utils/mapPropsToStyleNames");var _mapPropsToStyleNames2=_interopRequireDefault(_mapPropsToStyleNames);
var _platform=require("../theme/variables/platform");var _platform2=_interopRequireDefault(_platform);
var _lodash=require("lodash");var _lodash2=_interopRequireDefault(_lodash);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var
Header=function(_Component){_inherits(Header,_Component);



function Header(props){_classCallCheck(this,Header);var _this=_possibleConstructorReturn(this,(Header.__proto__||Object.getPrototypeOf(Header)).call(this,
props));
_this.state={
orientation:"portrait"};return _this;

}_createClass(Header,[{key:"layoutChange",value:function layoutChange(
val){
var maxComp=Math.max(_platform2.default.deviceWidth,_platform2.default.deviceHeight);
if(val.width>=maxComp)this.setState({orientation:"landscape"});else
{
this.setState({orientation:"portrait"});
}
}},{key:"calculateHeight",value:function calculateHeight(
mode,inSet){
var inset=null;
if(inSet!=undefined){
inset=inSet;
}else{
inset=_platform2.default.Inset;
}
var InsetValues=mode==="portrait"?inset.portrait:inset.landscape;
var oldHeight=null;
if(this.props.style.height!=undefined){
oldHeight=this.props.style.height;
}else if(this.props.style[1].height){
oldHeight=this.props.style[1].height;
}else{
oldHeight=this.props.style[0].height;
}
var height=oldHeight+InsetValues.topInset;
return height;
}},{key:"calculatePadder",value:function calculatePadder(
mode,inSet){
var inset=null;
if(inSet!=undefined){
inset=inSet;
}else{
inset=_platform2.default.Inset;
}
var InsetValues=mode==="portrait"?inset.portrait:inset.landscape;
var topPadder=null;
var style=_reactNative.StyleSheet.flatten(this.props.style);
if(style.padding!==undefined&&style.paddingTop!==undefined){
topPadder=(style.paddingTop?style.paddingTop:style.padding)+InsetValues.topInset;
}else{
topPadder=InsetValues.topInset;
}
return topPadder;
}},{key:"render",value:function render()
{var _this2=this;
var variables=this.context.theme?
this.context.theme["@@shoutem.theme/themeStyle"].variables:
_platform2.default;
var platformStyle=variables.platformStyle;
return(
_react2.default.createElement(_reactNative.View,{onLayout:function onLayout(e){return _this2.layoutChange(e.nativeEvent.layout);},__source:{fileName:_jsxFileName,lineNumber:67}},
_react2.default.createElement(_reactNative.StatusBar,{
backgroundColor:
this.props.androidStatusBarColor?
this.props.androidStatusBarColor:
variables.statusBarColor,

barStyle:
this.props.iosBarStyle?
this.props.iosBarStyle:
platformStyle==="material"?
"light-content":
variables.iosStatusbar,

translucent:this.props.transparent?true:this.props.translucent,__source:{fileName:_jsxFileName,lineNumber:68}}),

_platform2.default.isIphoneX?
_react2.default.createElement(_reactNative.View,_extends({
ref:function ref(c){return _this2._root=c;}},
this.props,{
style:[
this.props.style,
{
height:this.calculateHeight(
this.state.orientation,
variables.Inset),

paddingTop:this.calculatePadder(
this.state.orientation,
variables.Inset)}],__source:{fileName:_jsxFileName,lineNumber:84}})):





_react2.default.createElement(_reactNative.View,_extends({ref:function ref(c){return _this2._root=c;}},this.props,{__source:{fileName:_jsxFileName,lineNumber:102}}))));



}}]);return Header;}(_react.Component);Header.contextTypes={theme:_propTypes2.default.object};


Header.propTypes=_extends({},
_reactNative.ViewPropTypes,{
style:_propTypes2.default.oneOfType([
_propTypes2.default.object,
_propTypes2.default.number,
_propTypes2.default.array]),

searchBar:_propTypes2.default.bool,
rounded:_propTypes2.default.bool});


var StyledHeader=(0,_nativeBaseShoutemTheme.connectStyle)(
"NativeBase.Header",
{},
_mapPropsToStyleNames2.default)(
Header);exports.
Header=StyledHeader;
//# sourceMappingURL=Header.js.map