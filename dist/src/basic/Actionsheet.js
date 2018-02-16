Object.defineProperty(exports,"__esModule",{value:true});exports.ActionSheetContainer=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName="src/basic/Actionsheet.js";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require("react");var _react2=_interopRequireDefault(_react);
var _propTypes=require("prop-types");var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require("react-native");








var _nativeBaseShoutemTheme=require("native-base-shoutem-theme");
var _Text=require("./Text");
var _Button=require("./Button");
var _View=require("./View");
var _Icon=require("./Icon");
var _Left=require("./Left");
var _Right=require("./Right");
var _Body=require("./Body");
var _ListItem=require("./ListItem");
var _mapPropsToStyleNames=require("../Utils/mapPropsToStyleNames");var _mapPropsToStyleNames2=_interopRequireDefault(_mapPropsToStyleNames);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

ActionSheetContainer=function(_Component){_inherits(ActionSheetContainer,_Component);
function ActionSheetContainer(props){_classCallCheck(this,ActionSheetContainer);var _this=_possibleConstructorReturn(this,(ActionSheetContainer.__proto__||Object.getPrototypeOf(ActionSheetContainer)).call(this,
props));
_this.state={
modalVisible:false,
items:[]};return _this;

}_createClass(ActionSheetContainer,[{key:"showActionSheet",value:function showActionSheet(




config,callback){
if(_reactNative.Platform.OS==="ios"){
if(typeof config.options[0]=="object"){
var options=config.options;
var filtered=options.map(function(item){
return item.text;
});
config.options=filtered;
_reactNative.ActionSheetIOS.showActionSheetWithOptions(config,callback);
}else{
_reactNative.ActionSheetIOS.showActionSheetWithOptions(config,callback);
}
}else{
this.setState({
items:config.options,
title:config.title,
message:config.message,
destructiveButtonIndex:config.destructiveButtonIndex,
cancelButtonIndex:config.cancelButtonIndex,
modalVisible:true,
callback:callback});

}
}},{key:"componentDidMount",value:function componentDidMount()
{
if(!this.props.autoHide&&this.props.duration){
console.warn("It's not recommended to set autoHide false with duration");
}
}},{key:"render",value:function render()
{var _this2=this;
return(
_react2.default.createElement(_reactNative.Modal,{
animationType:"fade",
transparent:true,
visible:this.state.modalVisible,
onRequestClose:function onRequestClose(){
_this2.state.callback(_this2.state.cancelButtonIndex);
_this2.setState({modalVisible:false});
},__source:{fileName:_jsxFileName,lineNumber:66}},

_react2.default.createElement(_reactNative.TouchableOpacity,{
activeOpacity:1,
onPress:function onPress(){
_this2.state.callback(_this2.state.cancelButtonIndex);
_this2.setState({modalVisible:false});
},
style:{
backgroundColor:"rgba(0,0,0,0.4)",
flex:1,
justifyContent:"flex-end"},__source:{fileName:_jsxFileName,lineNumber:75}},


_react2.default.createElement(_reactNative.TouchableOpacity,{
activeOpacity:1,
style:{
backgroundColor:"#fff",
height:this.state.length*80,
maxHeight:"100%",
padding:15,
elevation:4},__source:{fileName:_jsxFileName,lineNumber:87}},


_react2.default.createElement(_Text.Text,{style:{color:"#757575"},__source:{fileName:_jsxFileName,lineNumber:97}},this.state.title),
_react2.default.createElement(_reactNative.FlatList,{
style:{marginHorizontal:-15,marginTop:15},
data:this.state.items,
keyExtractor:function keyExtractor(item,index){return String(index);},
renderItem:function renderItem(_ref){var index=_ref.index,item=_ref.item;
return typeof _this2.state.items[0]==="string"?
_react2.default.createElement(_ListItem.ListItem,{
onPress:function onPress(){
_this2.state.callback(parseInt(index));
_this2.setState({modalVisible:false});
},
style:{borderColor:"transparent"},__source:{fileName:_jsxFileName,lineNumber:104}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:110}},item)):


_react2.default.createElement(_ListItem.ListItem,{
onPress:function onPress(){
_this2.state.callback(parseInt(index));
_this2.setState({modalVisible:false});
},
style:{borderColor:"transparent"},
icon:true,__source:{fileName:_jsxFileName,lineNumber:113}},

_react2.default.createElement(_Left.Left,{__source:{fileName:_jsxFileName,lineNumber:121}},
_react2.default.createElement(_Icon.Icon,{
name:item.icon,
style:{
color:item.iconColor?item.iconColor:undefined},__source:{fileName:_jsxFileName,lineNumber:122}})),



_react2.default.createElement(_Body.Body,{style:{borderColor:"transparent"},__source:{fileName:_jsxFileName,lineNumber:129}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:130}},item.text)),

_react2.default.createElement(_Right.Right,{__source:{fileName:_jsxFileName,lineNumber:132}}));


},__source:{fileName:_jsxFileName,lineNumber:98}})))));





}}],[{key:"show",value:function show(config,callback){this.actionsheetInstance._root.showActionSheet(config,callback);}}]);return ActionSheetContainer;}(_react.Component);


ActionSheetContainer.propTypes=_extends({},_reactNative.ViewPropTypes,{

style:_propTypes2.default.oneOfType([
_propTypes2.default.object,
_propTypes2.default.number,
_propTypes2.default.array])});



var StyledActionSheetContainer=(0,_nativeBaseShoutemTheme.connectStyle)(
"NativeBase.ActionSheetContainer",
{},_mapPropsToStyleNames2.default)(

ActionSheetContainer);exports.

ActionSheetContainer=StyledActionSheetContainer;
//# sourceMappingURL=Actionsheet.js.map