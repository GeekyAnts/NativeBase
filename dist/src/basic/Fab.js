Object.defineProperty(exports,"__esModule",{value:true});exports.Fab=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();


var _react=require('react');var _react2=_interopRequireDefault(_react);
var _Button=require('./Button');
var _reactNative=require('react-native');

var _Icon=require('./Icon');

var _IconNB=require('./IconNB');

var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);
var _theme=require('@shoutem/theme');
var _mapPropsToStyleNames=require('../Utils/mapPropsToStyleNames');var _mapPropsToStyleNames2=_interopRequireDefault(_mapPropsToStyleNames);
var _computeProps=require('../Utils/computeProps');var _computeProps2=_interopRequireDefault(_computeProps);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}


var AnimatedFab=_reactNative.Animated.createAnimatedComponent(_Button.Button);var

Fab=function(_Component){_inherits(Fab,_Component);


function Fab(props){_classCallCheck(this,Fab);var _this=_possibleConstructorReturn(this,(Fab.__proto__||Object.getPrototypeOf(Fab)).call(this,
props));
_this.state={
buttons:undefined,
active:false};return _this;

}_createClass(Fab,[{key:'fabTopValue',value:function fabTopValue(

pos){
if(pos==='topLeft'){
return{
top:20,
bottom:undefined,
left:20,
right:undefined};

}else if(pos==='bottomRight'){
return{
top:undefined,
bottom:_reactNative.Platform.OS==='ios'?20:40,
left:undefined,
right:20};

}else if(pos==='bottomLeft'){
return{
top:undefined,
bottom:_reactNative.Platform.OS==='ios'?20:40,
left:20,
right:undefined};

}else if(pos==='topRight'){
return{
top:20,
bottom:undefined,
left:undefined,
right:20};

}
}},{key:'fabOtherBtns',value:function fabOtherBtns(

direction,i){
if(direction==='up'){
return{
top:undefined,
bottom:this.props.active===false?_reactNative.Platform.OS==='ios'?8:8:i*50+65,
left:8,
right:0};

}else if(direction==='left'){
return{
top:8,
bottom:0,
left:this.props.active===false?_reactNative.Platform.OS==='ios'?8:8:-(i*50+50),
right:0};

}else if(direction==='down'){
return{
top:this.props.active===false?_reactNative.Platform.OS==='ios'?8:8:i*50+65,
bottom:0,
left:8,
right:0};

}else if(direction==='right'){
return{
top:10,
bottom:0,
left:this.props.active===false?_reactNative.Platform.OS==='ios'?8:8:i*50+65,
right:0};

}
}},{key:'getInitialStyle',value:function getInitialStyle()

{
return{
fab:{
height:56,
width:56,
borderRadius:28,
elevation:4,
justifyContent:'center',
alignItems:'center',
position:'absolute',
bottom:0,
backgroundColor:'blue'},

container:{
position:'absolute',
top:this.props.position?this.fabTopValue(this.props.position).top:undefined,
bottom:this.props.position?this.fabTopValue(this.props.position).bottom:20,
right:this.props.position?this.fabTopValue(this.props.position).right:20,
left:this.props.position?this.fabTopValue(this.props.position).left:undefined,
width:56,
height:this.containerHeight,
flexDirection:this.props.direction?this.props.direction=='left || right'?'row':'column':'column',
alignItems:'center'},

iconStyle:{
color:'#fff',
fontSize:24,
lineHeight:_reactNative.Platform.OS==='ios'?27:undefined},

buttonStyle:{
position:'absolute',
height:40,
width:40,
left:7,
borderRadius:20,
marginBottom:10,
backgroundColor:'blue'}};


}},{key:'getContainerStyle',value:function getContainerStyle()

{
return _lodash2.default.merge(this.getInitialStyle().container,this.props.containerStyle);
}},{key:'prepareFabProps',value:function prepareFabProps()

{
var defaultProps={
style:this.getInitialStyle().fab};

var incomingProps=_lodash2.default.clone(this.props);
delete incomingProps.onPress;

return(0,_computeProps2.default)(incomingProps,defaultProps);
}},{key:'getOtherButtonStyle',value:function getOtherButtonStyle(

child,i){
var type={
top:this.props.direction?this.fabOtherBtns(this.props.direction,i).top:undefined,
left:this.props.direction?this.fabOtherBtns(this.props.direction,i).left:8,
right:this.props.direction?this.fabOtherBtns(this.props.direction,i).right:0,
bottom:this.props.direction?this.fabOtherBtns(this.props.direction,i).bottom:this.props.active===false?_reactNative.Platform.OS==='ios'?8:8:i*50+65};


return _lodash2.default.merge(this.getInitialStyle().buttonStyle,child.props.style,type);
}},{key:'prepareButtonProps',value:function prepareButtonProps(
child){
var inp=_lodash2.default.clone(child.props);
delete inp.style;


var defaultProps={};

return(0,_computeProps2.default)(inp,defaultProps);
}},{key:'componentDidMount',value:function componentDidMount()

{var _this2=this;
var childrenArray=_react2.default.Children.toArray(this.props.children);
var icon=_lodash2.default.remove(childrenArray,function(item){
if(item.type.displayName==='Styled(Button)'){
return true;
}
});
this.setState({
buttons:icon.length});

setTimeout(function(){
_this2.setState({
active:_this2.props.active});

},0);
}},{key:'renderFab',value:function renderFab()

{
var childrenArray=_react2.default.Children.toArray(this.props.children);
var icon=_lodash2.default.remove(childrenArray,function(item){
if(item.type===_Button.Button){
return true;
}
});



return _react2.default.cloneElement(childrenArray[0],{style:this.getInitialStyle().iconStyle});
}},{key:'renderButtons',value:function renderButtons()

{var _this3=this;
var childrenArray=_react2.default.Children.toArray(this.props.children);
var icon=_lodash2.default.remove(childrenArray,function(item){
if(item.type.displayName==="Styled(Icon)"||item.type.displayName==="Styled(IconNB)"){
return true;
}
});

var newChildren=[];

{childrenArray.map(function(child,i){
newChildren.push(_react2.default.createElement(AnimatedFab,_extends({
style:_this3.getOtherButtonStyle(child,i)},
_this3.prepareButtonProps(child,i),{
fabButton:true,
key:i}),
child.props.children));

});
}
return newChildren;
}},{key:'upAnimate',value:function upAnimate()
{
if(!this.props.active){
_reactNative.Animated.spring(this.containerHeight,{
toValue:this.state.buttons*51.3+56}).
start();
_reactNative.Animated.spring(this.buttonScale,{
toValue:1}).
start();
}else{
_reactNative.Animated.spring(this.containerHeight,{
toValue:56}).
start();
_reactNative.Animated.spring(this.buttonScale,{
toValue:0}).
start();
}
}},{key:'leftAnimate',value:function leftAnimate()

{
if(!this.state.active){
_reactNative.Animated.spring(this.containerWidth,{
toValue:this.state.buttons*51.3+56}).
start();
_reactNative.Animated.spring(this.buttonScale,{
toValue:1}).
start();
}else{
this.setState({
active:false});

_reactNative.Animated.spring(this.containerHeight,{
toValue:56}).
start();
_reactNative.Animated.spring(this.buttonScale,{
toValue:0}).
start();
}
}},{key:'rightAnimate',value:function rightAnimate()

{
if(!this.state.active){
_reactNative.Animated.spring(this.containerWidth,{
toValue:this.state.buttons*51.3+56}).
start();
_reactNative.Animated.spring(this.buttonScale,{
toValue:1}).
start();
}else{
this.setState({
active:false});

_reactNative.Animated.spring(this.containerHeight,{
toValue:56}).
start();
_reactNative.Animated.spring(this.buttonScale,{
toValue:0}).
start();
}
}},{key:'downAnimate',value:function downAnimate()

{
if(!this.state.active){
_reactNative.Animated.spring(this.containerHeight,{
toValue:56}).
start();
_reactNative.Animated.spring(this.buttonScale,{
toValue:1}).
start();
}else{
this.setState({
active:false});

_reactNative.Animated.spring(this.containerHeight,{
toValue:56}).
start();
_reactNative.Animated.spring(this.buttonScale,{
toValue:0}).
start();
}
}},{key:'_animate',value:function _animate()

{var _props=
this.props,direction=_props.direction,position=_props.position;
if(this.props.direction){
if(this.props.direction==='up'){
this.upAnimate();
}else if(this.props.direction==='left'){
this.leftAnimate();
}else if(this.props.direction==='right'){
this.rightAnimate();
}else if(this.props.direction==='down'){
this.downAnimate();
}
}else{
this.upAnimate();
}
}},{key:'fabOnPress',value:function fabOnPress()

{
if(this.props.onPress){
this.props.onPress();
this._animate();
}
}},{key:'render',value:function render()

{var _this4=this;var
active=this.props.active;
if(!this.props.active){
this.containerHeight=new _reactNative.Animated.Value(56);
this.containerWidth=new _reactNative.Animated.Value(56);
this.buttonScale=new _reactNative.Animated.Value(1);
}else{
this.containerHeight=this.containerHeight||new _reactNative.Animated.Value(0);
this.containerWidth=this.containerWidth||new _reactNative.Animated.Value(0);
this.buttonScale=this.buttonScale||new _reactNative.Animated.Value(0);
}
return(
_react2.default.createElement(_reactNative.Animated.View,{style:this.getContainerStyle()},
this.renderButtons(),
_react2.default.createElement(_reactNative.TouchableOpacity,_extends({
onPress:function onPress(){return _this4.fabOnPress();}},
this.prepareFabProps(),{activeOpacity:1}),

this.renderFab())));



}}]);return Fab;}(_react.Component);


Fab.propTypes=_extends({},
_reactNative.Animated.propTypes,{
style:_react2.default.PropTypes.object,
active:_react2.default.PropTypes.bool,
direction:_react2.default.PropTypes.string,
containerStyle:_react2.default.PropTypes.object,
position:_react2.default.PropTypes.string});

var StyledFab=(0,_theme.connectStyle)('NativeBase.Fab',{},_mapPropsToStyleNames2.default)(Fab);exports.

Fab=StyledFab;
//# sourceMappingURL=Fab.js.map