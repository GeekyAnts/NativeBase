
'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _NativeBaseComponent2=require('../../Base/NativeBaseComponent');var _NativeBaseComponent3=_interopRequireDefault(_NativeBaseComponent2);
var _computeProps=require('../../../Utils/computeProps');var _computeProps2=_interopRequireDefault(_computeProps);
var _Text=require('./../Text');var _Text2=_interopRequireDefault(_Text);
var _Icon=require('./../Icon');var _Icon2=_interopRequireDefault(_Icon);
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);
var _ReactNativePropRegistry=require('react-native/Libraries/Renderer/src/renderers/native/ReactNativePropRegistry');var _ReactNativePropRegistry2=_interopRequireDefault(_ReactNativePropRegistry);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var


Button=function(_NativeBaseComponent){_inherits(Button,_NativeBaseComponent);function Button(){_classCallCheck(this,Button);return _possibleConstructorReturn(this,(Button.__proto__||Object.getPrototypeOf(Button)).apply(this,arguments));}_createClass(Button,[{key:'getInitialStyle',value:function getInitialStyle()




















{
return{
button:{
paddingVertical:this.props.vertical?0:this.getTheme().buttonPadding,
paddingHorizontal:this.props.vertical?5:this.getTheme().buttonPadding+2,
justifyContent:this.props.block?'center':'space-around',
flexDirection:this.props.vertical?'column':'row',
alignSelf:'center',
alignItems:'center',
backgroundColor:this.getTheme().btnPrimaryBg,
elevation:this.props.transparent||this.props.bordered||this.props.disabled?0:2,
shadowColor:this.props.transparent||this.props.bordered||this.props.disabled?undefined:'#000',
shadowOffset:this.props.transparent||this.props.bordered||this.props.disabled?undefined:{width:0,height:2},
shadowOpacity:this.props.transparent||this.props.bordered||this.props.disabled?undefined:0.2,
shadowRadius:this.props.transparent||this.props.bordered||this.props.disabled?undefined:2}};


}},{key:'prepareRootProps',value:function prepareRootProps()

{

var type={
backgroundColor:this.props.primary?this.getTheme().btnPrimaryBg:
this.props.transparent||this.props.bordered?'rgba(0,0,0,0)':
this.props.success?this.getTheme().btnSuccessBg:
this.props.danger?this.getTheme().btnDangerBg:
this.props.warning?this.getTheme().btnWarningBg:
this.props.info?this.getTheme().btnInfoBg:
this.props.backgroundColor?this.props.backgroundColor:
this.props.disabled?this.getTheme().btnDisabledBg:
this.getInitialStyle().button.backgroundColor,
borderRadius:this.props.rounded?this.getTheme().borderRadiusLarge:this.getTheme().borderRadiusBase,
borderWidth:this.props.bordered?1:0,
borderColor:this.props.primary?this.getTheme().primary:
this.props.success?this.getTheme().btnSuccessBg:
this.props.danger?this.getTheme().btnDangerBg:
this.props.warning?this.getTheme().btnWarningBg:
this.props.info?this.getTheme().btnInfoBg:
this.props.disabled?this.getTheme().btnDisabledBg:
this.getInitialStyle().button.backgroundColor,
height:this.props.large?60:this.props.small?35:38,
alignSelf:this.props.block?'stretch':'flex-start'};


var addedProps=_lodash2.default.merge(this.getInitialStyle().button,type);

var defaultProps={
style:addedProps,
capitalize:true};


return(0,_computeProps2.default)(this.props,defaultProps);
}},{key:'getTextStyle',value:function getTextStyle()

{
var mergedStyle={};
var btnType={
fontFamily:this.getTheme().btnFontFamily,
marginLeft:this.props.vertical?0:this.iconPresent()&&!this.props.iconRight?this.getTheme().iconMargin:0,
marginRight:this.iconPresent()&&this.props.iconRight?this.getTheme().iconMargin:0,
color:
this.props.bordered&&this.props.primary?this.getTheme().btnPrimaryBg:
this.props.bordered&&this.props.success?this.getTheme().btnSuccessBg:
this.props.bordered&&this.props.danger?this.getTheme().btnDangerBg:
this.props.bordered&&this.props.warning?this.getTheme().btnWarningBg:
this.props.bordered&&this.props.info?this.getTheme().btnInfoBg:
this.props.bordered&&this.props.disabled?this.getTheme().btnDisabledBg:
this.props.bordered?this.getTheme().btnPrimaryBg:
this.props.color?this.props.color:
this.props.transparent?this.getContextForegroundColor():
this.getTheme().inverseTextColor,

fontSize:this.props.large?this.getTheme().btnTextSizeLarge:this.props.small?this.getTheme().btnTextSizeSmall:this.getTheme().btnTextSize,

lineHeight:this.props.large?29:this.props.small?16:this.getTheme().btnLineHeight};

if(typeof this.props.textStyle=='number'){
return _lodash2.default.merge(mergedStyle,btnType,_ReactNativePropRegistry2.default.getByID(this.props.textStyle));
}else{
return _lodash2.default.merge(mergedStyle,btnType,this.props.textStyle);
}
}},{key:'getIconProps',value:function getIconProps(

icon){

var defaultStyle={
color:
this.props.bordered&&this.props.primary?this.getTheme().btnPrimaryBg:
this.props.bordered&&this.props.success?this.getTheme().btnSuccessBg:
this.props.bordered&&this.props.danger?this.getTheme().btnDangerBg:
this.props.bordered&&this.props.warning?this.getTheme().btnWarningBg:
this.props.bordered&&this.props.info?this.getTheme().btnInfoBg:
this.props.bordered?this.getTheme().btnPrimaryBg:
this.props.color?this.props.color:
this.props.header?this.getTheme().toolbarTextColor:
this.props.activeTabButton?this.getTheme().topTabBarActiveTextColor:
this.props.tabButton?this.getTheme().topTabBarTextColor:
this.props.transparent?this.getContextForegroundColor():
this.getTheme().inverseTextColor,
marginBottom:this.props.vertical&&_reactNative.Platform.OS=='android'?2:undefined,
fontSize:this.props.large?this.getTheme().iconSizeLarge:
this.props.small?this.getTheme().iconSizeSmall:
this.props.inputButton?this.getTheme().toolbarIconSize:
this.props.fabButton?22:
this.props.header?this.getTheme().iconFontSize+4:this.getTheme().iconFontSize-5,
lineHeight:this.props.large?52:this.props.small||this.props.inputButton?22:this.props.header?36:this.getTheme().iconLineHeight-9};


var defaultProps={
style:defaultStyle};


return(0,_computeProps2.default)(icon.props,defaultProps);
}},{key:'iconPresent',value:function iconPresent()
{
var iconComponentPresent=false;
_react2.default.Children.forEach(this.props.children,function(child){
if(_lodash2.default.get(child,'type',null)==_Icon2.default)
iconComponentPresent=true;
});
return iconComponentPresent;
}},{key:'renderChildren',value:function renderChildren()
{
if(typeof this.props.children=='string'){
return _react2.default.createElement(_Text2.default,{style:this.getTextStyle()},_reactNative.Platform.OS==='ios'||!this.props.capitalize?this.props.children:this.props.children.toUpperCase());
}else

if(_lodash2.default.get(this.props.children,'type',null)==_Icon2.default){
return _react2.default.cloneElement(this.props.children,this.getIconProps(this.props.children));
}else

if(Array.isArray(this.props.children)){
var newChildren=[];

var childrenArray=_react2.default.Children.toArray(this.props.children);

var iconElement=[];
iconElement=_lodash2.default.remove(childrenArray,function(item){
if(_lodash2.default.get(item,'type',null)==_Icon2.default){
return true;
}
});

if(this.props.iconRight){
if(_lodash2.default.get(childrenArray[0],'type',null)==undefined){
newChildren.push(_react2.default.createElement(_Text2.default,{key:'label',style:this.getTextStyle()},_reactNative.Platform.OS==='ios'||!this.props.capitalize?childrenArray[0]:childrenArray[0].toUpperCase()));
}else{
newChildren.push(_react2.default.createElement(_Text2.default,{key:'label',style:this.getTextStyle()},_reactNative.Platform.OS==='ios'||!this.props.capitalize?childrenArray[0].props.children:childrenArray[0].props.children.toUpperCase()));
}

newChildren.push(_react2.default.cloneElement(iconElement[0],this.getIconProps(iconElement[0])));
}else

if(this.props.iconLeft||iconElement.length>0){
newChildren.push(_react2.default.cloneElement(iconElement[0],this.getIconProps(iconElement[0])));

if(_lodash2.default.get(childrenArray[0],'type',null)==undefined){
newChildren.push(_react2.default.createElement(_Text2.default,{key:'label',style:this.getTextStyle()},_reactNative.Platform.OS==='ios'||!this.props.capitalize?childrenArray[0]:childrenArray[0].toUpperCase()));
}else{
newChildren.push(_react2.default.createElement(_Text2.default,{key:'label',style:this.getTextStyle()},_reactNative.Platform.OS==='ios'||!this.props.capitalize?childrenArray[0].props.children:childrenArray[0].props.children.toUpperCase()));
}
}else
{
return _react2.default.createElement(_Text2.default,{style:this.getTextStyle()},this.props.children);
}

return newChildren;

}else


return _react2.default.cloneElement(this.props.children);

}},{key:'render',value:function render()

{var _this2=this;
return(
_react2.default.createElement(_reactNative.TouchableOpacity,_extends({ref:function ref(c){return _this2._root=c;}},this.prepareRootProps(),{activeOpacity:0.5}),
this.renderChildren()));


}}]);return Button;}(_NativeBaseComponent3.default);exports.default=Button;
//# sourceMappingURL=index.js.map