Object.defineProperty(exports,"__esModule",{value:true});exports.ToastContainer=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();


var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _theme=require('@shoutem/theme');
var _Text=require('./Text');
var _Button=require('./Button');
var _View=require('./View');
var _Toast=require('./Toast');
var _mapPropsToStyleNames=require('../Utils/mapPropsToStyleNames');var _mapPropsToStyleNames2=_interopRequireDefault(_mapPropsToStyleNames);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var


ToastContainer=function(_Component){_inherits(ToastContainer,_Component);
function ToastContainer(props){_classCallCheck(this,ToastContainer);var _this=_possibleConstructorReturn(this,(ToastContainer.__proto__||Object.getPrototypeOf(ToastContainer)).call(this,
props));
_this.state={
modalVisible:false};return _this;

}_createClass(ToastContainer,[{key:'showToast',value:function showToast(_ref)




{var _this2=this;var config=_ref.config;
this.setState({
modalVisible:true,
text:config.text,
buttonText:config.buttonText,
type:config.type,
position:config.position});

if(config.duration>0){
setTimeout(function(){
_this2.setState({
modalVisible:false});

},config.duration);
}
}},{key:'componentDidMount',value:function componentDidMount()
{
if(!this.props.autoHide&&this.props.duration){
console.warn('It\'s not recommended to set autoHide false with duration');
}
}},{key:'render',value:function render()
{var _this3=this;
return(
_react2.default.createElement(_reactNative.Modal,{
animationType:this.state.position=='bottom'?"slide":"fade",
transparent:true,
visible:this.state.modalVisible,
onRequestClose:function onRequestClose(){alert("Modal has been closed.");}},

_react2.default.createElement(_reactNative.View,{style:{
margin:_reactNative.Platform.OS==='ios'?20:0,
flex:1,
justifyContent:this.state.position==='top'?'flex-start':this.state.position==='bottom'?'flex-end':this.state.position==='center'?'center':'flex-start'}},
_react2.default.createElement(_Toast.Toast,{
danger:this.state.type=='danger'?true:false,
success:this.state.type=='success'?true:false,
warning:this.state.type=='warning'?true:false},
_react2.default.createElement(_Text.Text,null,this.state.text),
this.state.buttonText&&_react2.default.createElement(_Button.Button,{onPress:function onPress(){
_this3.setState({
modalVisible:false});

}},
_react2.default.createElement(_Text.Text,null,this.state.buttonText))))));






}}],[{key:'show',value:function show(_ref2){var config=_objectWithoutProperties(_ref2,[]);this.toastInstance._root.showToast({config:config});}}]);return ToastContainer;}(_react.Component);


ToastContainer.propTypes=_extends({},
_reactNative.View.propTypes,{
style:_react2.default.PropTypes.object});


var StyledToastContainer=(0,_theme.connectStyle)('NativeBase.ToastContainer',{},_mapPropsToStyleNames2.default)(ToastContainer);exports.


ToastContainer=StyledToastContainer;
//# sourceMappingURL=ToastContainer.js.map