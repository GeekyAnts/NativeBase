Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _clamp=require('clamp');var _clamp2=_interopRequireDefault(_clamp);
var _reactNative=require('react-native');
var _NativeBaseComponent2=require('../Base/NativeBaseComponent');var _NativeBaseComponent3=_interopRequireDefault(_NativeBaseComponent2);
var _View=require('./View');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}


var SWIPE_THRESHOLD=120;var

CardSwiper=function(_NativeBaseComponent){_inherits(CardSwiper,_NativeBaseComponent);

function CardSwiper(props){_classCallCheck(this,CardSwiper);var _this=_possibleConstructorReturn(this,(CardSwiper.__proto__||Object.getPrototypeOf(CardSwiper)).call(this,
props));
_this.state={
pan:new _reactNative.Animated.ValueXY(),
enter:new _reactNative.Animated.Value(0.5)};return _this;

}_createClass(CardSwiper,[{key:'componentDidMount',value:function componentDidMount()

{
this._animateEntrance();
}},{key:'_animateEntrance',value:function _animateEntrance()

{
_reactNative.Animated.spring(
this.state.enter,
{toValue:1,friction:8}).
start();
}},{key:'componentWillMount',value:function componentWillMount()

{var _this2=this;
this._panResponder=_reactNative.PanResponder.create({
onMoveShouldSetResponderCapture:function onMoveShouldSetResponderCapture(){return true;},
onMoveShouldSetPanResponderCapture:function onMoveShouldSetPanResponderCapture(){return true;},

onPanResponderGrant:function onPanResponderGrant(e,gestureState){
_this2.state.pan.setOffset({x:_this2.state.pan.x._value,y:_this2.state.pan.y._value});
_this2.state.pan.setValue({x:0,y:0});
},

onPanResponderMove:_reactNative.Animated.event([
null,{dx:this.state.pan.x,dy:this.state.pan.y}]),


onPanResponderRelease:function onPanResponderRelease(e,_ref){var vx=_ref.vx,vy=_ref.vy;
_this2.state.pan.flattenOffset();
var velocity=void 0;

if(vx>=0){
velocity=(0,_clamp2.default)(vx,3,5);
}else if(vx<0){
velocity=(0,_clamp2.default)(vx*-1,3,5)*-1;
}

if(Math.abs(_this2.state.pan.x._value)>SWIPE_THRESHOLD){
if(velocity>0){
_this2.props.onSwipeRight();
}else{
_this2.props.onSwipeLeft();
}
_reactNative.Animated.decay(_this2.state.pan,{
velocity:{x:velocity,y:vy},
deceleration:0.98}).
start(_this2._resetState.bind(_this2));
}else{
_reactNative.Animated.spring(_this2.state.pan,{
toValue:{x:0,y:0},
friction:4}).
start();
}
}});

}},{key:'_resetState',value:function _resetState()

{
this.state.pan.setValue({x:0,y:0});
this.state.enter.setValue(0);
this._animateEntrance();
}},{key:'render',value:function render()

{var _this3=this;var _state=
this.state,pan=_state.pan,enter=_state.enter;var _ref2=

[pan.x,pan.y],translateX=_ref2[0],translateY=_ref2[1];

var rotate=pan.x.interpolate({inputRange:[-300,0,300],outputRange:['-30deg','0deg','30deg']});
var opacity=pan.x.interpolate({inputRange:[-150,0,150],outputRange:[0.5,1,0.5]});
var scale=enter;

var animatedCardStyles={transform:[{translateX:translateX},{translateY:translateY},{rotate:rotate},{scale:scale}],opacity:opacity};


return(
_react2.default.createElement(_View.View,{ref:function ref(c){return _this3._root=c;}},
_react2.default.createElement(_reactNative.Animated.View,_extends({style:animatedCardStyles},this._panResponder.panHandlers),
this.props.children)));



}}]);return CardSwiper;}(_NativeBaseComponent3.default);exports.default=CardSwiper;
//# sourceMappingURL=CardSwiper.js.map