Object.defineProperty(exports,"__esModule",{value:true});exports.DeckSwiper=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _clamp=require('clamp');var _clamp2=_interopRequireDefault(_clamp);
var _theme=require('@shoutem/theme');
var _mapPropsToStyleNames=require('../Utils/mapPropsToStyleNames');var _mapPropsToStyleNames2=_interopRequireDefault(_mapPropsToStyleNames);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var SWIPE_THRESHOLD=120;var

DeckSwiper=function(_Component){_inherits(DeckSwiper,_Component);
function DeckSwiper(props){_classCallCheck(this,DeckSwiper);var _this=_possibleConstructorReturn(this,(DeckSwiper.__proto__||Object.getPrototypeOf(DeckSwiper)).call(this,
props));
_this.state={
pan:new _reactNative.Animated.ValueXY(),
pan2:new _reactNative.Animated.ValueXY(),
enter:new _reactNative.Animated.Value(0.8),
selectedItem:_this.props.dataSource[0],
selectedItem2:_this.props.dataSource[1],
card1Top:true,
card2Top:false,
fadeAnim:new _reactNative.Animated.Value(0.8)};return _this;

}_createClass(DeckSwiper,[{key:'getInitialStyle',value:function getInitialStyle()

{
return{
topCard:{
position:'absolute',
top:0,
right:0,
left:0}};


}},{key:'findNextIndexes',value:function findNextIndexes()


{
var currentIndex=this.props.dataSource.indexOf(this.state.selectedItem);
var newIdx=currentIndex+1;
var newIdx2=currentIndex+2;

if(newIdx2>this.props.dataSource.length-1&&newIdx===this.props.dataSource.length-1){
return[newIdx,0];
}else if(newIdx>this.props.dataSource.length-1){
return[0,1];
}else{
return[newIdx,newIdx2];
}
}},{key:'selectNext',value:function selectNext()

{var _this2=this;
var nextIndexes=this.findNextIndexes();
setTimeout(function(){
_this2.setState({
selectedItem:_this2.props.dataSource[nextIndexes[0]]});

setTimeout(function(){
_this2.setState({
selectedItem2:_this2.props.dataSource[nextIndexes[1]]});

},350);
},50);
}},{key:'swipeRight',value:function swipeRight()


{var _this3=this;
if(this.props.onSwiping)
this.props.onSwiping('right');
setTimeout(function(){
_reactNative.Animated.timing(
_this3.state.fadeAnim,
{toValue:1}).
start();
_reactNative.Animated.spring(
_this3.state.enter,
{toValue:1,friction:7}).
start();
_this3.selectNext();
_reactNative.Animated.decay(_this3.state.pan,{
velocity:{x:8,y:1},
deceleration:0.98}).
start(_this3._resetState.bind(_this3));
},300);
}},{key:'swipeLeft',value:function swipeLeft()

{var _this4=this;
if(this.props.onSwiping)
this.props.onSwiping('left');
setTimeout(function(){
_reactNative.Animated.timing(
_this4.state.fadeAnim,
{toValue:1}).
start();
_reactNative.Animated.spring(
_this4.state.enter,
{toValue:1,friction:7}).
start();
_this4.selectNext();
_reactNative.Animated.decay(_this4.state.pan,{
velocity:{x:-8,y:1},
deceleration:0.98}).
start(_this4._resetState.bind(_this4));
},300);
}},{key:'componentWillMount',value:function componentWillMount()

{var _this5=this;
this._panResponder=_reactNative.PanResponder.create({
onMoveShouldSetResponderCapture:function onMoveShouldSetResponderCapture(){return true;},
onMoveShouldSetPanResponderCapture:function onMoveShouldSetPanResponderCapture(evt,gestureState){
return Math.abs(gestureState.dx)>5;
},

onPanResponderGrant:function onPanResponderGrant(e,gestureState){
_this5.state.pan.setOffset({x:_this5.state.pan.x._value,y:_this5.state.pan.y._value});
_this5.state.pan.setValue({x:0,y:0});
},


onPanResponderMove:function onPanResponderMove(e,gestureState){
if(gestureState.dx>20){
if(_this5.props.onSwiping)
_this5.props.onSwiping('right',gestureState.dx);
}else
if(gestureState.dx<-20){
if(_this5.props.onSwiping)
_this5.props.onSwiping('left',gestureState.dx);
}
var val=Math.abs(gestureState.dx*.0013);
var opa=Math.abs(gestureState.dx*.0022);
if(val>0.2){
val=0.2;
}
_reactNative.Animated.timing(
_this5.state.fadeAnim,
{toValue:0.8+val}).
start();
_reactNative.Animated.spring(
_this5.state.enter,
{toValue:0.8+val,friction:7}).
start();
_reactNative.Animated.event([
null,{dx:_this5.state.pan.x}])(
e,gestureState);
},

onPanResponderRelease:function onPanResponderRelease(e,_ref){var vx=_ref.vx,vy=_ref.vy;
if(_this5.props.onSwiping)
_this5.props.onSwiping(null);
var velocity;

if(vx>=0){
velocity=(0,_clamp2.default)(vx,4.5,10);
}else if(vx<0){
velocity=(0,_clamp2.default)(vx*-1,4.5,10)*-1;
}

if(Math.abs(_this5.state.pan.x._value)>SWIPE_THRESHOLD){

if(velocity>0){
_this5.props.onSwipeRight?_this5.props.onSwipeRight():undefined;
_this5.selectNext();
}else{
_this5.props.onSwipeLeft?_this5.props.onSwipeLeft():undefined;
_this5.selectNext();
}

_reactNative.Animated.decay(_this5.state.pan,{
velocity:{x:velocity,y:vy},
deceleration:0.98}).
start(_this5._resetState.bind(_this5));
}else{
_reactNative.Animated.spring(_this5.state.pan,{
toValue:{x:0,y:0},
friction:4}).
start();
}
}});

}},{key:'_resetState',value:function _resetState()

{
this.state.pan.setValue({x:0,y:0});
this.state.enter.setValue(0.8);
this.state.fadeAnim.setValue(0.8);
this.setState({
card1Top:!this.state.card1Top,
card2Top:!this.state.card2Top});

if(this.props.onSwiping)
this.props.onSwiping(null);

}},{key:'getCardStyles',value:function getCardStyles()

{var _state=

this.state,pan=_state.pan,pan2=_state.pan2,enter=_state.enter;var _ref2=

[pan.x,pan.y],translateX=_ref2[0],translateY=_ref2[1];


var rotate=pan.x.interpolate({inputRange:[-700,0,700],outputRange:['-10deg','0deg','10deg']});

var opacity=pan.x.interpolate({inputRange:[-320,0,320],outputRange:[0.9,1,0.9]});
var scale=enter;

var animatedCardStyles={transform:[{translateX:translateX},{translateY:translateY},{rotate:rotate}],opacity:opacity};
var animatedCardStyles2={transform:[{scale:scale}]};

return[animatedCardStyles,animatedCardStyles2];
}},{key:'render',value:function render()

{


return(
_react2.default.createElement(_reactNative.View,{style:{position:'relative',flexDirection:'column'}},this.state.selectedItem===undefined?_react2.default.createElement(_reactNative.View,null):
_react2.default.createElement(_reactNative.View,null,
this.state.selectedItem2&&_react2.default.createElement(_reactNative.Animated.View,_extends({style:[this.getCardStyles()[1],this.getInitialStyle().topCard,{opacity:this.state.fadeAnim}]},this._panResponder.panHandlers),
this.props.renderBottom?
this.props.renderBottom(this.state.selectedItem2):

this.props.renderItem(this.state.selectedItem2)),


_react2.default.createElement(_reactNative.Animated.View,_extends({style:[this.getCardStyles()[0],this.getInitialStyle().topCard]},this._panResponder.panHandlers),
this.props.renderTop?
this.props.renderTop(this.state.selectedItem):

this.props.renderItem(this.state.selectedItem)))));







}}]);return DeckSwiper;}(_react.Component);



DeckSwiper.propTypes=_extends({},
_reactNative.View.propTypes,{
style:_react2.default.PropTypes.object,
dataSource:_react2.default.PropTypes.array});


var StyledDeckSwiper=(0,_theme.connectStyle)('NativeBase.DeckSwiper',{},_mapPropsToStyleNames2.default)(DeckSwiper);exports.


DeckSwiper=StyledDeckSwiper;
//# sourceMappingURL=DeckSwiper.js.map