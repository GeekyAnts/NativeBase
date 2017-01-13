
'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _NativeBaseComponent2=require('../../Base/NativeBaseComponent');var _NativeBaseComponent3=_interopRequireDefault(_NativeBaseComponent2);
var _computeProps=require('../../../Utils/computeProps');var _computeProps2=_interopRequireDefault(_computeProps);
var _View=require('./../View');var _View2=_interopRequireDefault(_View);
var _Text=require('./../Text');var _Text2=_interopRequireDefault(_Text);
var _List=require('./../List');var _List2=_interopRequireDefault(_List);
var _Icon=require('./../Icon');var _Icon2=_interopRequireDefault(_Icon);
var _Container=require('./../Container');var _Container2=_interopRequireDefault(_Container);
var _Content=require('./../Content');var _Content2=_interopRequireDefault(_Content);
var _ListItem=require('./../ListItem');var _ListItem2=_interopRequireDefault(_ListItem);
var _Button=require('./../Button');var _Button2=_interopRequireDefault(_Button);
var _Header=require('./../Header');var _Header2=_interopRequireDefault(_Header);
var _Title=require('./../Title');var _Title2=_interopRequireDefault(_Title);
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

PickerNB=function(_NativeBaseComponent){_inherits(PickerNB,_NativeBaseComponent);

function PickerNB(props){_classCallCheck(this,PickerNB);var _this=_possibleConstructorReturn(this,(PickerNB.__proto__||Object.getPrototypeOf(PickerNB)).call(this,
props));

_this.state={
modalVisible:false,
currentLabel:_this.getLabel(props)};return _this;

}_createClass(PickerNB,[{key:'componentWillReceiveProps',value:function componentWillReceiveProps(

nextProps){
var currentLabel=this.state.currentLabel;
var nextLabel=this.getLabel(nextProps);

if(currentLabel!==nextLabel){
this.setState({
currentLabel:nextLabel});

}
}},{key:'getInitialStyle',value:function getInitialStyle()

{
return{
picker:{},


pickerItem:{},


itemTextStyle:{
color:this.props.itemTextColor}};


}},{key:'_setModalVisible',value:function _setModalVisible(
visible){
this.setState({modalVisible:visible});
}},{key:'prepareRootProps',value:function prepareRootProps()

{
var defaultProps={
style:this.getInitialStyle().picker,
itemStyle:this.getInitialStyle().pickerItem};


return(0,_computeProps2.default)(this.props,defaultProps);
}},{key:'getLabel',value:function getLabel(

props){
var item=_lodash2.default.find(props.children,function(child){
return child.props.value==props.selectedValue;
});

return _lodash2.default.get(item,'props.label');
}},{key:'modifyHeader',value:function modifyHeader()

{var _this2=this;
var childrenArray=_react2.default.Children.toArray(this.props.headerComponent.props.children);
var newChildren=[];
childrenArray.forEach(function(child){
if(_lodash2.default.get(child,'type',null)==_Button2.default){
newChildren.push(_react2.default.cloneElement(child,{onPress:function onPress(){_this2._setModalVisible(false);}}));
}else{
newChildren.push(child);
}
});
return _react2.default.createElement(_Header2.default,this.props.headerComponent.props,' ',newChildren);
}},{key:'renderIcon',value:function renderIcon()

{
return _react2.default.cloneElement(this.props.iosIcon,{style:{fontSize:22,lineHeight:26,color:'#7a7a7a'}});
}},{key:'renderHeader',value:function renderHeader()

{var _this3=this;
return this.props.headerComponent?this.modifyHeader():_react2.default.createElement(_Header2.default,null,
_react2.default.createElement(_Button2.default,{transparent:true,onPress:function onPress(){_this3._setModalVisible(false);}},'Back'),
_react2.default.createElement(_Title2.default,null,'Select One'));

}},{key:'render',value:function render()

{var _this4=this;
var additionalProps={};
if(this.props.inlineLabel){
additionalProps={paddingHorizontal:4,justifyContent:'flex-start',alignSelf:'stretch'};
}
return(
_react2.default.createElement(_View2.default,{ref:function ref(c){return _this4._root=c;}},
_react2.default.createElement(_Button2.default,{
iconRight:this.props.iosIcon==undefined?false:true,
transparent:true,
textStyle:this.props.textStyle,
style:[this.props.style,additionalProps],
onPress:function onPress(){_this4._setModalVisible(true);}},
this.state.currentLabel,
this.props.iosIcon==undefined?_react2.default.createElement(_View2.default,{style:{width:0,height:0}}):this.renderIcon()),

_react2.default.createElement(_reactNative.Modal,{animationType:'slide',
transparent:false,
visible:this.state.modalVisible,
onRequestClose:function onRequestClose(){_this4._setModalVisible(false);}},

_react2.default.createElement(_Container2.default,{style:this.props.modalStyle},
this.renderHeader(),
_react2.default.createElement(_Content2.default,null,
_react2.default.createElement(_List2.default,{dataArray:this.props.children,
renderRow:function renderRow(child){return(
_react2.default.createElement(_ListItem2.default,{style:{paddingVertical:5},iconRight:true,button:true,onPress:function onPress(){_this4._setModalVisible(false);_this4.props.onValueChange(child.props.value);_this4.setState({current:child.props.label});}},
_react2.default.createElement(_Text2.default,{style:[_this4.getInitialStyle().itemTextStyle,child.props.textStyle]},child.props.label),
child.props.value===_this4.props.selectedValue?
_react2.default.createElement(_Icon2.default,{name:'ios-checkmark-outline',style:{color:_this4.props.iconColor}}):

_react2.default.createElement(_Icon2.default,{name:'ios-checkmark-outline',style:{color:'transparent'}})));}}))))));









}}]);return PickerNB;}(_NativeBaseComponent3.default);exports.default=PickerNB;



PickerNB.Item=_react2.default.createClass({displayName:'Item',

render:function render(){
return(
_react2.default.createElement(_reactNative.Picker.Item,this.props()));

}});
//# sourceMappingURL=index.ios.js.map