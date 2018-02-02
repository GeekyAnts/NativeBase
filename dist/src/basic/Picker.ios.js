Object.defineProperty(exports,"__esModule",{value:true});exports.PickerNB=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName="src/basic/Picker.ios.js";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require("react");var _react2=_interopRequireDefault(_react);
var _propTypes=require("prop-types");var _propTypes2=_interopRequireDefault(_propTypes);
var _createReactClass=require("create-react-class");var _createReactClass2=_interopRequireDefault(_createReactClass);
var _reactNative=require("react-native");
var _lodash=require("lodash");var _lodash2=_interopRequireDefault(_lodash);
var _Text=require("./Text");
var _List=require("./List");
var _IconNB=require("./IconNB");
var _Radio=require("./Radio");
var _Container=require("./Container");
var _Content=require("./Content");
var _ListItem=require("./ListItem");
var _Button=require("./Button");
var _Header=require("./Header");
var _Title=require("./Title");
var _Left=require("./Left");
var _Right=require("./Right");
var _Body=require("./Body");
var _nativeBaseShoutemTheme=require("native-base-shoutem-theme");
var _computeProps=require("../Utils/computeProps");var _computeProps2=_interopRequireDefault(_computeProps);

var _mapPropsToStyleNames=require("../Utils/mapPropsToStyleNames");var _mapPropsToStyleNames2=_interopRequireDefault(_mapPropsToStyleNames);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

PickerNB=function(_Component){_inherits(PickerNB,_Component);
function PickerNB(props){_classCallCheck(this,PickerNB);var _this=_possibleConstructorReturn(this,(PickerNB.__proto__||Object.getPrototypeOf(PickerNB)).call(this,
props));
_this.state={
modalVisible:false,
currentLabel:_this.getLabel(props),
dataSource:props.children};return _this;

}_createClass(PickerNB,[{key:"componentWillReceiveProps",value:function componentWillReceiveProps(

nextProps){
var currentLabel=this.state.currentLabel;
var nextLabel=this.getLabel(nextProps);
var currentDS=this.state.dataSource;
var nextDS=nextProps.children;

if(currentLabel!==nextLabel){
this.setState({
currentLabel:nextLabel});

}
if(currentDS!==nextDS){
this.setState({
dataSource:nextDS});

}
}},{key:"getInitialStyle",value:function getInitialStyle()

{
return{
picker:{},


pickerItem:{}};

}},{key:"_setModalVisible",value:function _setModalVisible(
visible){
this.setState({modalVisible:visible});
}},{key:"prepareRootProps",value:function prepareRootProps()

{
var defaultProps={
style:this.getInitialStyle().picker,
itemStyle:this.getInitialStyle().pickerItem};


return(0,_computeProps2.default)(this.props,defaultProps);
}},{key:"getLabel",value:function getLabel(

props){
var item=_lodash2.default.find(
props.children,
function(child){return child.props.value===props.selectedValue;});

return _lodash2.default.get(item,"props.label");
}},{key:"getSelectedItem",value:function getSelectedItem()

{var _this2=this;
return _lodash2.default.find(
this.props.children,
function(child){return child.props.value===_this2.props.selectedValue;});

}},{key:"renderIcon",value:function renderIcon()

{
return _react2.default.cloneElement(this.props.iosIcon,{
style:{
fontSize:22,
lineHeight:26,
color:this.props.placeholderIconColor}});


}},{key:"renderButton",value:function renderButton()

{var _this3=this;
var onPress=function onPress(){
_this3._setModalVisible(true);
};
var text=this.state.currentLabel?
this.state.currentLabel:
this.props.placeholder;
if(this.props.renderButton){
return this.props.renderButton({
onPress:onPress,
text:text,
picker:this,
selectedItem:this.getSelectedItem()});

}
return(
_react2.default.createElement(_Button.Button,{
style:this.props.style,
dark:true,
picker:true,
transparent:true,
onPress:onPress,__source:{fileName:_jsxFileName,lineNumber:114}},

this.state.currentLabel?
_react2.default.createElement(_Text.Text,{style:this.props.textStyle,note:this.props.note,__source:{fileName:_jsxFileName,lineNumber:122}},
this.state.currentLabel):


_react2.default.createElement(_Text.Text,{
style:[this.props.textStyle,this.props.placeholderStyle],
note:this.props.note===false?false:true,__source:{fileName:_jsxFileName,lineNumber:126}},

this.props.placeholder),


this.props.iosIcon===undefined?null:this.renderIcon()));


}},{key:"renderHeader",value:function renderHeader()

{var _this4=this;
return this.props.renderHeader?
this.props.renderHeader(function(){return _this4._setModalVisible(false);}):

_react2.default.createElement(_Header.Header,{style:this.props.headerStyle,__source:{fileName:_jsxFileName,lineNumber:142}},
_react2.default.createElement(_Left.Left,{__source:{fileName:_jsxFileName,lineNumber:143}},
_react2.default.createElement(_Button.Button,{
style:_extends({
shadowOffset:null,
shadowColor:null,
shadowRadius:null,
shadowOpacity:null},
this.props.headerBackButtonStyle),

transparent:true,
onPress:function onPress(){
_this4._setModalVisible(false);
},__source:{fileName:_jsxFileName,lineNumber:144}},

_react2.default.createElement(_Text.Text,{style:this.props.headerBackButtonTextStyle,__source:{fileName:_jsxFileName,lineNumber:157}},
this.props.headerBackButtonText||"Back"))),



_react2.default.createElement(_Body.Body,{__source:{fileName:_jsxFileName,lineNumber:162}},
_react2.default.createElement(_Title.Title,{style:this.props.headerTitleStyle,__source:{fileName:_jsxFileName,lineNumber:163}},
this.props.iosHeader||"Select One")),


_react2.default.createElement(_Right.Right,{__source:{fileName:_jsxFileName,lineNumber:167}}));


}},{key:"render",value:function render()

{var _this5=this;
return(
_react2.default.createElement(_reactNative.View,{ref:function ref(c){return _this5._root=c;},__source:{fileName:_jsxFileName,lineNumber:174}},
this.renderButton(),
_react2.default.createElement(_reactNative.Modal,{
supportedOrientations:this.props.supportedOrientations||null,
animationType:"slide",
transparent:false,
visible:this.state.modalVisible,
onRequestClose:function onRequestClose(){
_this5._setModalVisible(false);
},__source:{fileName:_jsxFileName,lineNumber:176}},

_react2.default.createElement(_Container.Container,{__source:{fileName:_jsxFileName,lineNumber:185}},
this.renderHeader(),
_react2.default.createElement(_Content.Content,{__source:{fileName:_jsxFileName,lineNumber:187}},
_react2.default.createElement(_reactNative.FlatList,{
data:this.state.dataSource,
keyExtractor:function keyExtractor(item,index){return index;},
renderItem:function renderItem(_ref){var item=_ref.item;return _react2.default.createElement(_ListItem.ListItem,{
selected:item.props.value===_this5.props.selectedValue,
button:true,
style:_this5.props.itemStyle,
onPress:function onPress(){
_this5._setModalVisible(false);
_this5.props.onValueChange(item.props.value);
_this5.setState({current:item.props.label});
},__source:{fileName:_jsxFileName,lineNumber:191}},

_react2.default.createElement(_Text.Text,{style:_this5.props.itemTextStyle,__source:{fileName:_jsxFileName,lineNumber:201}},
item.props.label),

_react2.default.createElement(_Right.Right,{__source:{fileName:_jsxFileName,lineNumber:204}},
item.props.value===_this5.props.selectedValue?
_react2.default.createElement(_Radio.Radio,{selected:true,__source:{fileName:_jsxFileName,lineNumber:206}}):

_react2.default.createElement(_Radio.Radio,{selected:false,__source:{fileName:_jsxFileName,lineNumber:208}})));},__source:{fileName:_jsxFileName,lineNumber:188}}))))));









}}]);return PickerNB;}(_react.Component);


PickerNB.Item=(0,_createReactClass2.default)({displayName:"Item",
render:function render(){
return _react2.default.createElement(_reactNative.Picker.Item,_extends({},this.props(),{__source:{fileName:_jsxFileName,lineNumber:223}}));
}});


PickerNB.propTypes=_extends({},_reactNative.ViewPropTypes,{

renderButton:_propTypes2.default.func});


var StyledPickerNB=(0,_nativeBaseShoutemTheme.connectStyle)(
"NativeBase.PickerNB",
{},_mapPropsToStyleNames2.default)(

PickerNB);exports.

PickerNB=StyledPickerNB;
//# sourceMappingURL=Picker.ios.js.map