Object.defineProperty(exports,"__esModule",{value:true});exports.Accordion=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName="src\\basic\\Accordion.js";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require("react");var _react2=_interopRequireDefault(_react);
var _reactNative=require("react-native");






var _Text=require("./Text");
var _Icon=require("./Icon");
var _platform=require("../theme/variables/platform");var _platform2=_interopRequireDefault(_platform);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

DefaultHeader=function(_React$Component){_inherits(DefaultHeader,_React$Component);function DefaultHeader(){_classCallCheck(this,DefaultHeader);return _possibleConstructorReturn(this,(DefaultHeader.__proto__||Object.getPrototypeOf(DefaultHeader)).apply(this,arguments));}_createClass(DefaultHeader,[{key:"render",value:function render()
{
var variables=this.context.theme?
this.context.theme["@@shoutem.theme/themeStyle"].variables:
_platform2.default;
return(
_react2.default.createElement(_reactNative.View,{
style:[
styles.defaultHeader,
this.props.headerStyle?
this.props.headerStyle:
{backgroundColor:variables.headerStyle}],__source:{fileName:_jsxFileName,lineNumber:19}},


_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:27}}," ",this.props.title),
_react2.default.createElement(_Icon.Icon,{
style:[
{fontSize:18},
this.props.expanded?
this.props.expandedIcon&&this.props.expandedIconStyle?
this.props.expandedIconStyle:
{color:variables.expandedIconStyle}:
this.props.icon&&this.props.iconStyle?
this.props.iconStyle:
{color:variables.iconStyle}],

name:
this.props.expanded?
this.props.expandedIcon?
this.props.expandedIcon:
"ios-arrow-up":
this.props.icon?
this.props.icon:
"ios-arrow-down",__source:{fileName:_jsxFileName,lineNumber:28}})));




}}]);return DefaultHeader;}(_react2.default.Component);var


DefaultContent=function(_React$Component2){_inherits(DefaultContent,_React$Component2);function DefaultContent(){_classCallCheck(this,DefaultContent);return _possibleConstructorReturn(this,(DefaultContent.__proto__||Object.getPrototypeOf(DefaultContent)).apply(this,arguments));}_createClass(DefaultContent,[{key:"render",value:function render()
{
var variables=this.context.theme?
this.context.theme["@@shoutem.theme/themeStyle"].variables:
_platform2.default;
return(
_react2.default.createElement(_Text.Text,{
style:[
{padding:10},
this.props.contentStyle?
this.props.contentStyle:
{backgroundColor:variables.contentStyle}],__source:{fileName:_jsxFileName,lineNumber:60}},


this.props.content));


}}]);return DefaultContent;}(_react2.default.Component);var


AccordionSubItem=function(_React$Component3){_inherits(AccordionSubItem,_React$Component3);function AccordionSubItem(){var _ref;var _temp,_this3,_ret;_classCallCheck(this,AccordionSubItem);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this3=_possibleConstructorReturn(this,(_ref=AccordionSubItem.__proto__||Object.getPrototypeOf(AccordionSubItem)).call.apply(_ref,[this].concat(args))),_this3),_this3.
state={
fadeAnim:new _reactNative.Animated.Value(0.3)},_temp),_possibleConstructorReturn(_this3,_ret);}_createClass(AccordionSubItem,[{key:"componentDidMount",value:function componentDidMount()

{
_reactNative.Animated.timing(this.state.fadeAnim,{
toValue:1,
duration:500}).
start();
}},{key:"render",value:function render()
{var
fadeAnim=this.state.fadeAnim;
return(
_react2.default.createElement(_reactNative.Animated.View,{style:_extends({},this.props.style,{opacity:fadeAnim}),__source:{fileName:_jsxFileName,lineNumber:87}},
this.props.children));


}}]);return AccordionSubItem;}(_react2.default.Component);var


AccordionItem=function(_React$Component4){_inherits(AccordionItem,_React$Component4);function AccordionItem(){_classCallCheck(this,AccordionItem);return _possibleConstructorReturn(this,(AccordionItem.__proto__||Object.getPrototypeOf(AccordionItem)).apply(this,arguments));}_createClass(AccordionItem,[{key:"render",value:function render()
{var _this5=this;
return(
_react2.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:97}},
_react2.default.createElement(_reactNative.TouchableWithoutFeedback,{
onPress:function onPress(){return _this5.props.setSelected(_this5.props.index);},__source:{fileName:_jsxFileName,lineNumber:98}},

_react2.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:101}},
this.props.renderHeader?
this.props.renderHeader(this.props.item.title,this.props.expanded):

_react2.default.createElement(DefaultHeader,{
title:this.props.item.title,
expanded:this.props.expanded,
headerStyle:this.props.headerStyle,
icon:this.props.icon,
iconStyle:this.props.iconStyle,
expandedIcon:this.props.expandedIcon,
expandedIconStyle:this.props.expandedIconStyle,__source:{fileName:_jsxFileName,lineNumber:105}}))),




this.props.expanded?
_react2.default.createElement(AccordionSubItem,{__source:{fileName:_jsxFileName,lineNumber:118}},
this.props.renderContent?
this.props.renderContent(this.props.item.content):

_react2.default.createElement(DefaultContent,{
content:this.props.item.content,
contentStyle:this.props.contentStyle,__source:{fileName:_jsxFileName,lineNumber:122}})):



null));


}}]);return AccordionItem;}(_react2.default.Component);var


Accordion=exports.Accordion=function(_React$Component5){_inherits(Accordion,_React$Component5);function Accordion(){var _ref2;var _temp2,_this6,_ret2;_classCallCheck(this,Accordion);for(var _len2=arguments.length,args=Array(_len2),_key2=0;_key2<_len2;_key2++){args[_key2]=arguments[_key2];}return _ret2=(_temp2=(_this6=_possibleConstructorReturn(this,(_ref2=Accordion.__proto__||Object.getPrototypeOf(Accordion)).call.apply(_ref2,[this].concat(args))),_this6),_this6.
state={selected:undefined},_temp2),_possibleConstructorReturn(_this6,_ret2);}_createClass(Accordion,[{key:"setSelected",value:function setSelected(
index){
if(this.state.selected===index){
this.setState({selected:undefined});
}else{
this.setState({selected:index});
}
}},{key:"componentDidMount",value:function componentDidMount()

{
this.setState({selected:this.props.expanded});
}},{key:"render",value:function render()

{var _this7=this;
var variables=this.context.theme?
this.context.theme["@@shoutem.theme/themeStyle"].variables:
_platform2.default;
return(
_react2.default.createElement(_reactNative.FlatList,_extends({
data:this.props.dataArray,
extraData:this.state,
style:[
{
borderColor:variables.accordionBorderColor,
borderWidth:variables.borderWidth},

this.props.style],

keyExtractor:function keyExtractor(item,index){return String(index);},
renderItem:function renderItem(_ref3){var item=_ref3.item,index=_ref3.index;return(
_react2.default.createElement(AccordionItem,{
key:String(index),
item:item,
expanded:_this7.state.selected===index,
index:index,
setSelected:_this7.setSelected.bind(_this7),
headerStyle:_this7.props.headerStyle,
contentStyle:_this7.props.contentStyle,
renderHeader:_this7.props.renderHeader,
renderContent:_this7.props.renderContent,
icon:_this7.props.icon,
iconStyle:_this7.props.iconStyle,
expandedIcon:_this7.props.expandedIcon,
expandedIconStyle:_this7.props.expandedIconStyle,__source:{fileName:_jsxFileName,lineNumber:165}}));}},


this.props,{__source:{fileName:_jsxFileName,lineNumber:153}})));


}}]);return Accordion;}(_react2.default.Component);


var styles=_reactNative.StyleSheet.create({
defaultHeader:{
flexDirection:"row",
padding:10,
justifyContent:"space-between",
alignItems:"center"}});
//# sourceMappingURL=Accordion.js.map