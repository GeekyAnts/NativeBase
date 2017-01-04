var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');





var _tweener=require('./tweener');var _tweener2=_interopRequireDefault(_tweener);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var deviceScreen=_reactNative.Dimensions.get('window');var

Drawer=function(_Component){_inherits(Drawer,_Component);














































































function Drawer(props){_classCallCheck(this,Drawer);var _this=_possibleConstructorReturn(this,(Drawer.__proto__||Object.getPrototypeOf(Drawer)).call(this,
props));_this._left=0;_this._prevLeft=0;_this._offsetOpen=0;_this._offsetClosed=0;_this._open=false;_this._panning=false;_this._tweenPending=false;_this._activeTween=null;_this._lastPress=0;_this._panStartTime=0;_this._syncAfterUpdate=false;_this.






































































































processShouldSet=function(e,gestureState){
var inMask=_this.testPanResponderMask(e,gestureState);
if(inMask){
var toggled=_this.processTapGestures();
if(toggled)return false;
if(_this.props.captureGestures&&_this.props.acceptPan)return true;
}
if(_this.props.negotiatePan)return false;
_this._panStartTime=Date.now();
if(!inMask)return false;
if(!_this.props.acceptPan)return false;
_this.terminateActiveTween();
return true;
};_this.
























processTapGestures=function(){
if(_this._activeTween)return false;
var minLastPressInterval=500;
if(_this.props.acceptTap){
_this._open?_this.close():_this.open();
return true;
}
if(_this.props.tapToClose&&_this._open){
_this.close();
return true;
}
if(_this.props.acceptDoubleTap){
var now=new Date().getTime();
var timeDelta=now-_this._lastPress;
_this._lastPress=now;
if(timeDelta<minLastPressInterval){
_this._open?_this.close():_this.open();
return true;
}
}
return false;
};_this.







































terminateActiveTween=function(){
if(_this._activeTween){
_this._activeTween.terminate();
_this._activeTween=null;
}
};_this.

open=function(){
_this.props.onOpenStart&&_this.props.onOpenStart();
if(_this._activeTween)return;
_this._activeTween=(0,_tweener2.default)({
start:_this._left,
end:_this.getOpenLeft(),
duration:_this.props.tweenDuration,
easingType:_this.props.tweenEasing,
onFrame:function onFrame(tweenValue){
_this._left=tweenValue;
_this.updatePosition();
},
onEnd:function onEnd(){
_this._activeTween=null;
_this._open=true;
_this._prevLeft=_this._left;
if(_this.props.type==='overlay'){
_this.mainOverlay.setNativeProps({style:{width:_this.getMainWidth()}});
}
_this.props.onOpen();
}});

};_this.

close=function(){
_this.props.onCloseStart&&_this.props.onCloseStart();
if(_this._activeTween)return;
_this._activeTween=(0,_tweener2.default)({
start:_this._left,
end:_this.getClosedLeft(),
easingType:_this.props.tweenEasing,
duration:_this.props.tweenDuration,
onFrame:function onFrame(tweenValue){
_this._left=tweenValue;
_this.updatePosition();
},
onEnd:function onEnd(){
_this._activeTween=null;
_this._open=false;
_this._prevLeft=_this._left;
if(_this.props.type==='overlay')_this.mainOverlay.setNativeProps({style:{width:0}});
_this.props.onClose();
}});

};_this.

toggle=function(){
_this._open?_this.close():_this.open();
};_this.handleStartShouldSetPanResponderCapture=_this.handleStartShouldSetPanResponderCapture.bind(_this);_this.handleStartShouldSetPanResponder=_this.handleStartShouldSetPanResponder.bind(_this);_this.handleMoveShouldSetPanResponderCapture=_this.handleMoveShouldSetPanResponderCapture.bind(_this);_this.handleMoveShouldSetPanResponder=_this.handleMoveShouldSetPanResponder.bind(_this);_this.handlePanResponderMove=_this.handlePanResponderMove.bind(_this);_this.handlePanResponderEnd=_this.handlePanResponderEnd.bind(_this);_this.componentWillMount=_this.componentWillMount.bind(_this);_this.componentWillReceiveProps=_this.componentWillReceiveProps.bind(_this);_this.componentDidUpdate=_this.componentDidUpdate.bind(_this);_this.updatePosition=_this.updatePosition.bind(_this);_this.shouldOpenDrawer=_this.shouldOpenDrawer.bind(_this);_this.testPanResponderMask=_this.testPanResponderMask.bind(_this);_this.getMainView=_this.getMainView.bind(_this);_this.getDrawerView=_this.getDrawerView.bind(_this);_this.getOpenLeft=_this.getOpenLeft.bind(_this);_this.getClosedLeft=_this.getClosedLeft.bind(_this);_this.getMainWidth=_this.getMainWidth.bind(_this);_this.getDrawerWidth=_this.getDrawerWidth.bind(_this);_this.initialize=_this.initialize.bind(_this);_this.handleSetViewport=_this.handleSetViewport.bind(_this);_this.resync=_this.resync.bind(_this);_this.requiresResync=_this.requiresResync.bind(_this);_this.propsWhomRequireUpdate=['closedDrawerOffset','openDrawerOffset','type'];_this.state={viewport:props.deviceScreen};return _this;}_createClass(Drawer,[{key:'getChildContext',value:function getChildContext(){return{drawer:this};}},{key:'componentWillMount',value:function componentWillMount(){this.initialize(this.props);}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(nextProps){if(this.requiresResync(nextProps)){this.resync(null,nextProps);}}},{key:'componentDidUpdate',value:function componentDidUpdate(){if(this._syncAfterUpdate){this._syncAfterUpdate=false;this._open?this.open():this.close();}}},{key:'updatePosition',value:function updatePosition(){var mainProps={};var drawerProps={};var ratio=(this._left-this._offsetClosed)/(this.getOpenLeft()-this._offsetClosed);switch(this.props.type){case'overlay':drawerProps[this.props.side]=-this.state.viewport.width+this._offsetOpen+this._left;mainProps[this.props.side]=this._offsetClosed;break;case'static':mainProps[this.props.side]=this._left;drawerProps[this.props.side]=0;break;case'displace':mainProps[this.props.side]=this._left;drawerProps[this.props.side]=-this.state.viewport.width+this._left+this._offsetOpen;break;}if(this.props.tweenHandler){var propsFrag=this.props.tweenHandler(ratio,this.props.side);mainProps=_extends(mainProps,propsFrag.main);drawerProps=_extends(drawerProps,propsFrag.drawer);}this.drawer.setNativeProps({style:drawerProps});this.main.setNativeProps({style:mainProps});}},{key:'shouldOpenDrawer',value:function shouldOpenDrawer(dx){if(this._open)return dx<this.state.viewport.width*this.props.openDrawerThreshold;return dx>this.state.viewport.width*this.props.openDrawerThreshold;}},{key:'handleStartShouldSetPanResponderCapture',value:function handleStartShouldSetPanResponderCapture(e,gestureState){if(this.props.captureGestures)return this.processShouldSet(e,gestureState);return false;}},{key:'handleStartShouldSetPanResponder',value:function handleStartShouldSetPanResponder(e,gestureState){if(!this.props.captureGestures)return this.processShouldSet(e,gestureState);return false;}},{key:'handleMoveShouldSetPanResponderCapture',value:function handleMoveShouldSetPanResponderCapture(e,gestureState){if(this.props.captureGestures&&this.props.negotiatePan)return this.handleMoveShouldSetPanResponder(e,gestureState);return false;}},{key:'handleMoveShouldSetPanResponder',value:function handleMoveShouldSetPanResponder(e,gestureState){var inMask=this.testPanResponderMask(e,gestureState);if(!inMask)return false;if(!this.props.acceptPan)return false;if(!this.props.negotiatePan||this.props.disabled||!this.props.acceptPan||this._panning)return false;var swipeToLeft=gestureState.dx<0?true:false;var swipeToRight=gestureState.dx>0?true:false;var swipeUpDown=Math.abs(gestureState.dy)>=Math.abs(gestureState.dx)?true:false;var swipeInCloseDirection=this.props.side==='left'?swipeToLeft:swipeToRight;if(swipeUpDown||this._open&&!swipeInCloseDirection||!this._open&&swipeInCloseDirection){return false;}this.terminateActiveTween();return true;}},{key:'testPanResponderMask',value:function testPanResponderMask(e,gestureState){if(this.props.disabled)return false;var x0=e.nativeEvent.pageX;var deltaOpen=this.props.side==='left'?deviceScreen.width-x0:x0;var deltaClose=this.props.side==='left'?x0:deviceScreen.width-x0;var whenClosedMask=this.props.panOpenMask%1===0&&this.props.panOpenMask>1?this.props.panOpenMask:deviceScreen.width*this.props.panOpenMask;var whenOpenMask=this.props.panCloseMask%1===0&&this.props.panCloseMask>1?this.props.panCloseMask:deviceScreen.width*this.props.panCloseMask;if(this._open&&deltaOpen>whenOpenMask)return false;if(!this._open&&deltaClose>whenClosedMask)return false;return true;}},{key:'handlePanResponderMove',value:function handlePanResponderMove(e,gestureState){if(!this.props.acceptPan)return false;var dx=gestureState.dx;if(this._open^dx<0^this.props.side==='right')return false;var absDx=Math.abs(dx);var moveX=gestureState.moveX;var relMoveX=this.props.side==='left'?this._open?-this.state.viewport.width+moveX:moveX:this._open?-moveX:this.state.viewport.width-moveX;var delta=relMoveX-dx;var factor=absDx/Math.abs(relMoveX);var adjustedDx=dx+delta*factor;var left=this.props.panStartCompensation?this._prevLeft+adjustedDx:this._prevLeft+dx;left=Math.min(left,this.getOpenLeft());left=Math.max(left,this.getClosedLeft());this._left=left;this.updatePosition();this._panning=true;}},{key:'handlePanResponderEnd',value:function handlePanResponderEnd(

e,gestureState){
if(Math.abs(gestureState.dx)<50&&this._activeTween)return;

var absRelMoveX=this.props.side==='left'?
this._open?this.state.viewport.width-gestureState.moveX:gestureState.moveX:
this._open?gestureState.moveX:this.state.viewport.width-gestureState.moveX;
var calcPos=this.props.relativeDrag?Math.abs(gestureState.dx):absRelMoveX;

this.shouldOpenDrawer(calcPos)?this.open():this.close();

this.updatePosition();
this._prevLeft=this._left;
this._panning=false;
}},{key:'getMainView',value:function getMainView()

{var _this2=this;
return(
_react2.default.createElement(_reactNative.View,_extends({},
this.responder.panHandlers,{
key:'main',
ref:function ref(c){return _this2.main=c;},
style:[this.stylesheet.main,{height:this.getHeight(),width:this.getMainWidth()}]}),

this.props.children,
this.props.type==='overlay'?
_react2.default.createElement(_reactNative.View,{
ref:function ref(c){return _this2.mainOverlay=c;},
style:styles.mainOverlay}):

null));


}},{key:'getDrawerView',value:function getDrawerView()

{var _this3=this;
return(
_react2.default.createElement(_reactNative.View,_extends({},
this.responder.panHandlers,{
key:'drawer',
ref:function ref(c){return _this3.drawer=c;},
style:[this.stylesheet.drawer,{height:this.getHeight(),width:this.getDrawerWidth()}]}),

this.props.content));


}},{key:'getOpenLeft',value:function getOpenLeft()

{
return this.state.viewport.width-this._offsetOpen;
}},{key:'getClosedLeft',value:function getClosedLeft()

{
return this._offsetClosed;
}},{key:'getHeight',value:function getHeight()

{
return this.state.viewport.height;
}},{key:'getMainWidth',value:function getMainWidth()

{
return this.state.viewport.width-this._offsetClosed;
}},{key:'getDrawerWidth',value:function getDrawerWidth()

{
return this.state.viewport.width-this._offsetOpen;
}},{key:'initialize',value:function initialize(

props){
var fullWidth=this.state.viewport.width;
this._offsetClosed=props.closedDrawerOffset%1===0?props.closedDrawerOffset:props.closedDrawerOffset*fullWidth;
this._offsetOpen=props.openDrawerOffset%1===0?props.openDrawerOffset:props.openDrawerOffset*fullWidth;
this._prevLeft=this._left;

var styles={
container:{
flex:1,
justifyContent:'center',
alignItems:'center'}};



styles.main=_extends({
position:'absolute',
top:0},
{borderWidth:0},this.props.styles.main);

styles.drawer=_extends({
position:'absolute',
top:0},
{borderWidth:0},this.props.styles.drawer);

if(props.initializeOpen===true){
this._open=true;
this._left=fullWidth-this._offsetOpen;
styles.main[this.props.side]=0;
styles.drawer[this.props.side]=0;
if(props.type==='static')styles.main[this.props.side]=fullWidth-this._offsetOpen;
if(props.type==='displace')styles.main[this.props.side]=fullWidth-this._offsetOpen;
}else{
this._open=false;
this._left=this._offsetClosed;
styles.main[this.props.side]=this._offsetClosed;
if(props.type==='static')styles.drawer[this.props.side]=0;
if(props.type==='overlay')styles.drawer[this.props.side]=this._offsetClosed+this._offsetOpen-fullWidth;
if(props.type==='displace')styles.drawer[this.props.side]=-fullWidth+this._offsetClosed+this._offsetOpen;
}

if(this.main){
this.drawer.setNativeProps({style:{left:styles.drawer.left}});
this.main.setNativeProps({style:{left:styles.main.left}});
}else{
this.stylesheet=_reactNative.StyleSheet.create(styles);
this.responder=_reactNative.PanResponder.create({
onStartShouldSetPanResponder:this.handleStartShouldSetPanResponder,
onStartShouldSetPanResponderCapture:this.handleStartShouldSetPanResponderCapture,
onMoveShouldSetPanResponder:this.handleMoveShouldSetPanResponder,
onMoveShouldSetPanResponderCapture:this.handleMoveShouldSetPanResponderCapture,
onPanResponderMove:this.handlePanResponderMove,
onPanResponderRelease:this.handlePanResponderEnd});

}

this.resync(null,props);
}},{key:'handleSetViewport',value:function handleSetViewport(

e){
var viewport=e.nativeEvent.layout;
var oldViewport=this.state.viewport;
if(viewport.width===oldViewport.width&&viewport.height===oldViewport.height)return;
var didRotationChange=viewport.width!==oldViewport.width;
this.resync(viewport,null,didRotationChange);
}},{key:'resync',value:function resync(

viewport,props,didRotationChange){
if(didRotationChange)this._syncAfterUpdate=true;
viewport=viewport||this.state.viewport;
props=props||this.props;
this._offsetClosed=props.closedDrawerOffset%1===0?props.closedDrawerOffset:props.closedDrawerOffset*viewport.width;
this._offsetOpen=props.openDrawerOffset%1===0?props.openDrawerOffset:props.openDrawerOffset*viewport.width;
this.setState({viewport:viewport});
}},{key:'requiresResync',value:function requiresResync(

nextProps){
for(var i=0;i<this.propsWhomRequireUpdate.length;i++){
var key=this.propsWhomRequireUpdate[i];
if(this.props[key]!==nextProps[key])return true;
}
}},{key:'render',value:function render()

{
var first=this.props.type==='overlay'?this.getMainView():this.getDrawerView();
var second=this.props.type==='overlay'?this.getDrawerView():this.getMainView();

return(
_react2.default.createElement(_reactNative.View,{
key:'drawerContainer',
onLayout:this.handleSetViewport,
style:this.stylesheet.container},

first,
second));


}}]);return Drawer;}(_react.Component);Drawer.tweenPresets={parallax:function parallax(ratio){var side=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'left';var drawer=_defineProperty({},side,-150*(1-ratio));return{drawer:drawer};}};Drawer.propTypes={acceptDoubleTap:_react2.default.PropTypes.bool,acceptPan:_react2.default.PropTypes.bool,acceptTap:_react2.default.PropTypes.bool,captureGestures:_react2.default.PropTypes.bool,children:_react2.default.PropTypes.node,closedDrawerOffset:_react2.default.PropTypes.number,content:_react2.default.PropTypes.node,deviceScreen:_react2.default.PropTypes.object,disabled:_react2.default.PropTypes.bool,initializeOpen:_react2.default.PropTypes.bool,negotiatePan:_react2.default.PropTypes.bool,onClose:_react2.default.PropTypes.func,onCloseStart:_react2.default.PropTypes.func,onOpen:_react2.default.PropTypes.func,onOpenStart:_react2.default.PropTypes.func,openDrawerOffset:_react2.default.PropTypes.number,openDrawerThreshold:_react2.default.PropTypes.number,panCloseMask:_react2.default.PropTypes.number,panOpenMask:_react2.default.PropTypes.number,panStartCompensation:_react2.default.PropTypes.bool,relativeDrag:_react2.default.PropTypes.bool,side:_react2.default.PropTypes.oneOf(['left','right']),styles:_react2.default.PropTypes.object,tapToClose:_react2.default.PropTypes.bool,tweenDuration:_react2.default.PropTypes.number,tweenEasing:_react2.default.PropTypes.string,tweenHandler:_react2.default.PropTypes.func,type:_react2.default.PropTypes.oneOf(['overlay','static','displace'])};Drawer.defaultProps={type:'displace',closedDrawerOffset:0,deviceScreen:deviceScreen,openDrawerOffset:0,openDrawerThreshold:0.25,relativeDrag:true,panStartCompensation:true,panOpenMask:0.25,panCloseMask:0.25,captureGestures:false,negotiatePan:false,initializeOpen:false,tweenHandler:null,tweenDuration:250,tweenEasing:'linear',disabled:false,acceptDoubleTap:false,acceptTap:false,acceptPan:true,tapToClose:false,styles:{},onOpen:function onOpen(){},onClose:function onClose(){},side:'left'};Drawer.childContextTypes={drawer:_react.PropTypes.any};



var styles=_reactNative.StyleSheet.create({
mainOverlay:{
width:0,
left:0,
top:0,
bottom:0,
position:'absolute',
backgroundColor:'transparent'}});



module.exports=Drawer;
//# sourceMappingURL=index.js.map