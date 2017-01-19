Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');

var _tweener=require('./tweener');var _tweener2=_interopRequireDefault(_tweener);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var deviceScreen=_reactNative.Dimensions.get('window');
var TAP_DURATION=250;var

Drawer=function(_Component){_inherits(Drawer,_Component);function Drawer(){var _ref;var _temp,_this,_ret;_classCallCheck(this,Drawer);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=Drawer.__proto__||Object.getPrototypeOf(Drawer)).call.apply(_ref,[this].concat(args))),_this),_this.























































state={
viewport:deviceScreen},_this.






onStartShouldSetPanResponderCapture=function(e,gestureState){
if(_this.shouldCaptureGestures())return _this.processShouldSet(e,gestureState);
return false;
},_this.

getOpenLeft=function(){return _this.state.viewport.width-_this._offsetOpen;},_this.
getClosedLeft=function(){return _this._offsetClosed;},_this.
getHeight=function(){return _this.state.viewport.height;},_this.
getMainWidth=function(){return _this.state.viewport.width-_this._offsetClosed;},_this.
getDrawerWidth=function(){return _this.state.viewport.width-_this._offsetOpen;},_this.
getOpenMask=function(){
if(_this.props.panCloseMask&&_this.props.panCloseMask%1===0){
return _this.props.panCloseMask;
}
if(_this.props.panCloseMask)return _this.state.viewport.width*_this.props.panCloseMask;
return Math.max(0.05,_this._offsetOpen);
},_this.
getClosedMask=function(){
if(_this.props.panOpenMask&&_this.props.panOpenMask%1===0)return _this.props.panOpenMask;
if(_this.props.panOpenMask)return _this.state.viewport.width*_this.props.panOpenMask;
return Math.max(0.05,_this._offsetClosed);
},_this.
getOpenOffset=function(props,viewport){
if(typeof props.openDrawerOffset==='function')return props.openDrawerOffset(viewport);
return props.openDrawerOffset%1===0?
props.openDrawerOffset:props.openDrawerOffset*viewport.width;
},_this.
getClosedOffset=function(props,viewport){
if(typeof props.closedDrawerOffset==='function')return props.closedDrawerOffset(viewport);
return props.closedDrawerOffset%1===0?
props.closedDrawerOffset:props.closedDrawerOffset*viewport.width;
},_this.

initialize=function(props){
var fullWidth=_this.state.viewport.width;
_this._offsetClosed=_this.getClosedOffset(props,_this.state.viewport);
_this._offsetOpen=_this.getOpenOffset(props,_this.state.viewport);
_this._prevLeft=_this._left;

var styles={
container:{
flex:1,
justifyContent:'center',
alignItems:'center'}};



styles.main=_extends({
position:'absolute',
top:0},
{borderWidth:0},_this.props.styles.main);

styles.drawer=_extends({
position:'absolute',
top:0},
{borderWidth:0},_this.props.styles.drawer);

if(props.initializeOpen||props.open){
_this._open=true;
_this._left=fullWidth-_this._offsetOpen;
styles.main[_this.props.side]=0;
styles.drawer[_this.props.side]=0;
if(props.type==='static')styles.main[_this.props.side]=fullWidth-_this._offsetOpen;
if(props.type==='displace')styles.main[_this.props.side]=fullWidth-_this._offsetOpen;
}else{
_this._open=false;
_this._left=_this._offsetClosed;
styles.main[_this.props.side]=_this._offsetClosed;
if(props.type==='static')styles.drawer[_this.props.side]=0;
if(props.type==='overlay')styles.drawer[_this.props.side]=_this._offsetClosed+_this._offsetOpen-fullWidth;
if(props.type==='displace')styles.drawer[_this.props.side]=-fullWidth+_this._offsetClosed+_this._offsetOpen;
}

if(_this.main){
_this.drawer.setNativeProps({style:{left:styles.drawer.left}});
_this.main.setNativeProps({style:{left:styles.main.left}});
}else{
_this.stylesheet=_reactNative.StyleSheet.create(styles);
_this.responder=_reactNative.PanResponder.create({
onStartShouldSetPanResponderCapture:_this.onStartShouldSetPanResponderCapture,
onPanResponderRelease:_this.onPanResponderRelease});

}
},_this.

updatePosition=function(){
var mainProps={};
var drawerProps={};
var ratio=(_this._left-_this._offsetClosed)/(_this.getOpenLeft()-_this._offsetClosed);

switch(_this.props.type){
case'overlay':
drawerProps[_this.props.side]=-_this.state.viewport.width+_this._offsetOpen+_this._left;
mainProps[_this.props.side]=_this._offsetClosed;
break;
case'static':
mainProps[_this.props.side]=_this._left;
drawerProps[_this.props.side]=0;
break;
case'displace':
mainProps[_this.props.side]=_this._left;
drawerProps[_this.props.side]=-_this.state.viewport.width+_this._left+_this._offsetOpen;
break;}


var mainOverlayProps=null;
var drawerOverlayProps=null;
if(_this.props.tweenHandler){
var propsFrag=_this.props.tweenHandler(ratio,_this.props.side);
mainProps=_extends(mainProps,propsFrag.main);
drawerProps=_extends(drawerProps,propsFrag.drawer);
}
_this.drawer.setNativeProps({style:drawerProps});
_this.main.setNativeProps({style:mainProps});
},_this.


onPanResponderRelease=function(e,gestureState){
_this._panning=false;
if(Date.now()-_this._panStartTime<TAP_DURATION)_this.processTapGestures();
if(Math.abs(gestureState.dx)<50&&_this._activeTween)return;

_this.updatePosition();
_this._prevLeft=_this._left;
},_this.

processShouldSet=function(e,gestureState){
var inMask=_this.testPanResponderMask(e,gestureState);
if(!inMask)return false;
_this._panStartTime=Date.now();
if(inMask&&_this.shouldCaptureGestures())return true;
},_this.


processTapGestures=function(){
if(_this._activeTween)return false;
if(_this.props.acceptTap||_this.props.tapToClose&&_this._open){
_this._open?_this.close():_this.open();
return true;
}
return false;
},_this.








testPanResponderMask=function(e,gestureState){
if(_this.context.drawer&&_this.context.drawer._open)return false;
if(_this._childDrawer&&_this._childDrawer._open)return false;

var x0=e.nativeEvent.pageX;
var deltaOpen=_this.props.side==='left'?_this.state.viewport.width-x0:x0;
var deltaClose=_this.props.side==='left'?x0:_this.state.viewport.width-x0;

if(_this._open&&deltaOpen>_this.getOpenMask())return false;
if(!_this._open&&deltaClose>_this.getClosedMask())return false;
return true;
},_this.


open=function(type){
var start=_this._left;
var end=_this.getOpenLeft();


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
_this.adjustForCaptureGestures();
_this.props.onOpen();
}});

},_this.

close=function(type){
var start=_this._left;
var end=_this.getClosedLeft();

_this._activeTween=(0,_tweener2.default)({
start:start,
end:end,
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
_this.adjustForCaptureGestures();
_this.props.onClose();
}});

},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(Drawer,[{key:'componentWillMount',value:function componentWillMount(){this.initialize(this.props);}},{key:'shouldCaptureGestures',value:function shouldCaptureGestures(){if(this.props.captureGestures===true)return true;if(this.props.captureGestures==='closed'&&this._open===false)return true;if(this.props.captureGestures==='open'&&this._open===true)return true;return false;}},{key:'adjustForCaptureGestures',value:function adjustForCaptureGestures()

{
if(!this.props.captureGestures)return;
var shouldCapture=this.shouldCaptureGestures();
if(this.mainOverlay&&this.drawerOverlay){
this.mainOverlay.setNativeProps({pointerEvents:shouldCapture&&this._open?'auto':'none'});
this.drawerOverlay.setNativeProps({pointerEvents:shouldCapture&&!this._open?'auto':'none'});
}
}},{key:'render',value:function render()


{
var first=this.props.type==='overlay'?this.renderMain():this.renderDrawer();
var second=this.props.type==='overlay'?this.renderDrawer():this.renderMain();

return(
_react2.default.createElement(_reactNative.View,{
key:'drawerContainer',
onLayout:this.handleSetViewport,
style:this.stylesheet.container},

first,
second));


}},{key:'renderMain',value:function renderMain()

{var _this2=this;
return(
_react2.default.createElement(_reactNative.View,_extends({},
this.responder.panHandlers,{
key:'main',
ref:function ref(c){return _this2.main=c;},
style:[this.stylesheet.main,{height:this.getHeight(),width:this.getMainWidth()}]}),

this.props.children,
_react2.default.createElement(_reactNative.View,{
pointerEvents:this._open&&this.shouldCaptureGestures()?'auto':'none',
ref:function ref(c){return _this2.mainOverlay=c;},
style:[styles.overlay,this.props.styles&&this.props.styles.mainOverlay]})));



}},{key:'renderDrawer',value:function renderDrawer()

{var _this3=this;
return(
_react2.default.createElement(_reactNative.View,_extends({},
this.responder.panHandlers,{
key:'drawer',
ref:function ref(c){return _this3.drawer=c;},
elevation:this.props.elevation,
style:[this.stylesheet.drawer,{height:this.getHeight(),width:this.getDrawerWidth()}]}),

this.props.content,
_react2.default.createElement(_reactNative.View,{
pointerEvents:!this._open&&this.shouldCaptureGestures()?'auto':'none',
ref:function ref(c){return _this3.drawerOverlay=c;},
style:[styles.overlay,this.props.styles&&this.props.styles.drawerOverlay]})));



}}]);return Drawer;}(_react.Component);Drawer.tweenPresets={parallax:function parallax(ratio){var side=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'left';var drawer=_defineProperty({},side,-150*(1-ratio));return{drawer:drawer};}};Drawer.propTypes={acceptTap:_react.PropTypes.bool,captureGestures:_react.PropTypes.oneOf([true,false,'open','closed']),children:_react.PropTypes.node,content:_react.PropTypes.node,elevation:_react.PropTypes.number,initializeOpen:_react.PropTypes.bool,open:_react.PropTypes.bool,onClose:_react.PropTypes.func,onOpen:_react.PropTypes.func,openDrawerOffset:_react.PropTypes.oneOfType([_react.PropTypes.number,_react.PropTypes.func]),panCloseMask:_react.PropTypes.number,panOpenMask:_react.PropTypes.number,side:_react.PropTypes.oneOf(['left','right']),styles:_react.PropTypes.object,tapToClose:_react.PropTypes.bool,tweenDuration:_react.PropTypes.number,tweenEasing:_react.PropTypes.string,tweenHandler:_react.PropTypes.func,type:_react.PropTypes.oneOf(['overlay','static','displace'])};Drawer.defaultProps={open:null,initializeOpen:false,type:'displace',closedDrawerOffset:0,openDrawerOffset:0,panOpenMask:null,panCloseMask:null,tweenHandler:null,tweenDuration:250,tweenEasing:'linear',captureGestures:'open',acceptTap:false,tapToClose:false,styles:{},elevation:0,onOpen:function onOpen(){},onClose:function onClose(){},side:'left'};exports.default=Drawer;


var styles=_reactNative.StyleSheet.create({
overlay:{
right:0,
left:0,
top:0,
bottom:0,
position:'absolute',
backgroundColor:'transparent'}});
//# sourceMappingURL=index.js.map