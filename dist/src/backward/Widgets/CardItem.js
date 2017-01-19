Object.defineProperty(exports,"__esModule",{value:true});exports.CardItem1=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _theme=require('@shoutem/theme');
var _mapPropsToStyleNames=require('../../Utils/mapPropsToStyleNames');var _mapPropsToStyleNames2=_interopRequireDefault(_mapPropsToStyleNames);
var _NativeBaseComponent2=require('../Base/NativeBaseComponent');var _NativeBaseComponent3=_interopRequireDefault(_NativeBaseComponent2);
var _computeProps=require('../../Utils/computeProps');var _computeProps2=_interopRequireDefault(_computeProps);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

CardItem1=function(_NativeBaseComponent){_inherits(CardItem1,_NativeBaseComponent);function CardItem1(){_classCallCheck(this,CardItem1);return _possibleConstructorReturn(this,(CardItem1.__proto__||Object.getPrototypeOf(CardItem1)).apply(this,arguments));}_createClass(CardItem1,[{key:'getInitialStyle',value:function getInitialStyle()

{
return{
listItem:{
flexDirection:this.thumbnailPresent()||this.gravatarPresent()||this.iconPresent()||this.notePresent()&&this.ifShowCase()?'row':'column'},

fullImage:{
alignSelf:'stretch',
height:this.ifShowCase()?120:300}};


}},{key:'getRightStyle',value:function getRightStyle()
{
return{
right:{
flex:1,
paddingLeft:10,
backgroundColor:'transparent'},

right2:{
flex:1,
flexDirection:'row',
paddingLeft:10,
alignItems:'center',
justifyContent:'space-between',
backgroundColor:'transparent'},

right3:{
flex:1,
flexDirection:'column',
paddingLeft:10,
justifyContent:'flex-start',
backgroundColor:'transparent'}};


}},{key:'thumbnailPresent',value:function thumbnailPresent()

{
var thumbnailComponentPresent=false;
_react2.default.Children.forEach(this.props.children,function(child){
if(child&&child.type.displayName==='Styled(Thumbnail)'){
thumbnailComponentPresent=true;
}
});
return thumbnailComponentPresent;
}},{key:'gravatarPresent',value:function gravatarPresent()

{
var gravatarComponentPresent=false;
_react2.default.Children.forEach(this.props.children,function(child){
if(child.type.displayName==='Styled(Gravatar)'){gravatarComponentPresent=true;}
});

return gravatarComponentPresent;
}},{key:'imagePresent',value:function imagePresent()

{
var imagePresent=false;
_react2.default.Children.forEach(this.props.children,function(child){
if(child&&child.type===_reactNative.Image){
imagePresent=true;
}
});

return imagePresent;
}},{key:'iconPresent',value:function iconPresent()

{
var iconComponentPresent=false;
_react2.default.Children.forEach(this.props.children,function(child){
if(child&&child.type.displayName==='Styled(Icon)'){
iconComponentPresent=true;
}
});

return iconComponentPresent;
}},{key:'buttonPresent',value:function buttonPresent()

{
var buttonComponentPresent=false;
_react2.default.Children.forEach(this.props.children,function(child){
if(child&&child.type.displayName==='Styled(Button)'){
buttonComponentPresent=true;
}
});

return buttonComponentPresent;
}},{key:'ifShowCase',value:function ifShowCase()

{
return!!this.props.cardBody;
}},{key:'notePresent',value:function notePresent()

{
var notePresent=false;

_react2.default.Children.forEach(this.props.children,function(child){
if(child&&child.type.displayName==='Styled(Text)'&&child.props.note){
notePresent=true;
}
});

return notePresent;
}},{key:'squareThumbs',value:function squareThumbs()

{
var squareThumbs=false;
if(this.thumbnailPresent()||this.gravatarPresent()){
_react2.default.Children.forEach(this.props.children,function(child){
if(child&&child.props.square){
squareThumbs=true;
}
});
}

return squareThumbs;
}},{key:'getChildProps',value:function getChildProps(

child){
var defaultProps={};
if(child.type===_reactNative.Image)
defaultProps={
style:this.getInitialStyle().fullImage};

return(0,_computeProps2.default)(child.props,defaultProps);
}},{key:'renderChildren',value:function renderChildren()


{var _this2=this;
var newChildren=[];
var childrenArray=_react2.default.Children.toArray(this.props.children);
childrenArray=childrenArray.filter(function(child){return!!child;});
if(!this.thumbnailPresent()&&!this.iconPresent()){
if(this.imagePresent()&&!Array.isArray(this.props.children)){
newChildren.push(_react2.default.createElement(_reactNative.View,{key:'img',style:{flex:1,margin:_reactNative.Platform.OS==='ios'?-10:-12}},
childrenArray.map(function(child,i){return(
_react2.default.cloneElement(child,_extends({},_this2.getChildProps(child),{key:i})));})));



}else{
newChildren.push(
childrenArray.map(function(child,i){return(
_react2.default.cloneElement(child,_extends({},_this2.getChildProps(child),{key:i})));}));


}
}else{
newChildren=[];
if(!Array.isArray(this.props.children)){
newChildren.push(
_react2.default.createElement(_reactNative.View,{key:'cardItem1',style:{justifyContent:'flex-start'}},
_react2.default.cloneElement(childrenArray)));


}else{
newChildren.push(
_react2.default.cloneElement(childrenArray[0],this.getChildProps(childrenArray[0])));
newChildren.push(
_react2.default.createElement(_reactNative.View,{key:'cardItem1',style:this.notePresent()?this.getRightStyle().right:this.squareThumbs()?this.getRightStyle().right3:this.getRightStyle().right2},
childrenArray.slice(1).map(function(child,i){return(
_react2.default.cloneElement(child,{key:i}));})));



}
}

return newChildren;
}},{key:'prepareRootProps',value:function prepareRootProps()
{
var defaultProps={};

defaultProps={
style:this.getInitialStyle().listItem};


return(0,_computeProps2.default)(this.props,defaultProps);
}},{key:'render',value:function render()


{var _this3=this;
return(
_react2.default.createElement(_reactNative.TouchableOpacity,_extends({
ref:function ref(c){_this3._root=c;}},this.prepareRootProps(),{
activeOpacity:this.props.button?0.2:1}),

this.renderChildren()));


}}]);return CardItem1;}(_NativeBaseComponent3.default);


CardItem1.propTypes=_extends({},
_reactNative.TouchableOpacity.propTypes,{
style:_react2.default.PropTypes.object,
header:_react2.default.PropTypes.bool,
cardBody:_react2.default.PropTypes.bool,
footer:_react2.default.PropTypes.bool,
button:_react2.default.PropTypes.bool});


var StyledCardItem1=(0,_theme.connectStyle)('NativeBase.CardItem1',{},_mapPropsToStyleNames2.default)(CardItem1);exports.


CardItem1=StyledCardItem1;
//# sourceMappingURL=CardItem.js.map