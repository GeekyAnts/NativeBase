Object.defineProperty(exports,"__esModule",{value:true});exports.SwipeoutBtn=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');

var _NativeButton=require('./NativeButton');var _NativeButton2=_interopRequireDefault(_NativeButton);
var _theme=require('@shoutem/theme');
var _mapPropsToStyleNames=require('../../Utils/mapPropsToStyleNames');var _mapPropsToStyleNames2=_interopRequireDefault(_mapPropsToStyleNames);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

SwipeoutBtn=function(_Component){_inherits(SwipeoutBtn,_Component);function SwipeoutBtn(){_classCallCheck(this,SwipeoutBtn);return _possibleConstructorReturn(this,(SwipeoutBtn.__proto__||Object.getPrototypeOf(SwipeoutBtn)).apply(this,arguments));}_createClass(SwipeoutBtn,[{key:'render',value:function render()















{
var btn=this.props;

var styleSwipeoutBtn=[styles.swipeoutBtn];


if(btn.type==='delete')styleSwipeoutBtn.push(styles.colorDelete);else
if(btn.type==='primary')styleSwipeoutBtn.push(styles.colorPrimary);else
if(btn.type==='secondary')styleSwipeoutBtn.push(styles.colorSecondary);


if(btn.backgroundColor)styleSwipeoutBtn.push([{backgroundColor:btn.backgroundColor}]);

styleSwipeoutBtn.push([{
height:btn.height,
width:btn.width}]);


var styleSwipeoutBtnComponent=[];


styleSwipeoutBtnComponent.push([{
height:btn.height,
width:btn.width}]);


var styleSwipeoutBtnText=[styles.swipeoutBtnText];


if(btn.color)styleSwipeoutBtnText.push([{color:btn.color}]);


if(btn.color)styleSwipeoutBtnText.push([{color:btn.color}]);
return(
_react2.default.createElement(_NativeButton2.default,{
onPress:this.props.onPress,
style:styles.swipeoutBtnTouchable,
underlayColor:this.props.underlayColor,
disabled:this.props.disabled,
style:styleSwipeoutBtn,
textStyle:styleSwipeoutBtnText},

btn.component?
_react2.default.createElement(_reactNative.View,{style:styleSwipeoutBtnComponent},btn.component):

btn.text));




}}],[{key:'defaultProps',get:function get(){return{backgroundColor:null,color:null,component:null,underlayColor:null,height:0,key:null,onPress:null,disabled:false,text:'Click me',type:'',width:0};}}]);return SwipeoutBtn;}(_react.Component);



SwipeoutBtn.propTypes=_extends({},
_reactNative.Text.propTypes,{
style:_react2.default.PropTypes.object});


var StyledSwipeoutBtn=(0,_theme.connectStyle)('NativeBase.SwipeoutBtn',{},_mapPropsToStyleNames2.default)(SwipeoutBtn);exports.


SwipeoutBtn=StyledSwipeoutBtn;
//# sourceMappingURL=SwipeoutBtn.js.map