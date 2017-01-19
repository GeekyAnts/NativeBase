Object.defineProperty(exports,"__esModule",{value:true});exports.ListItem=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _theme=require('@shoutem/theme');
var _IconNB=require('../../basic/IconNB');
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);
var _mapPropsToStyleNames=require('../../Utils/mapPropsToStyleNames');var _mapPropsToStyleNames2=_interopRequireDefault(_mapPropsToStyleNames);
var _NativeBaseComponent2=require('../Base/NativeBaseComponent');var _NativeBaseComponent3=_interopRequireDefault(_NativeBaseComponent2);
var _computeProps=require('../../Utils/computeProps');var _computeProps2=_interopRequireDefault(_computeProps);
var _Text=require('./Text');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

ListItem=function(_NativeBaseComponent){_inherits(ListItem,_NativeBaseComponent);function ListItem(){_classCallCheck(this,ListItem);return _possibleConstructorReturn(this,(ListItem.__proto__||Object.getPrototypeOf(ListItem)).apply(this,arguments));}_createClass(ListItem,[{key:'getInitialStyle',value:function getInitialStyle()


{
return{
listItem:{},

listItemDivider:{},

itemText:{},

dividerItemText:{},

itemIcon:{},

itemNote:{},

itemSubNote:{},

thumbnail:{},

Gravatar:{},

fullImage:{},

itemButton:{}};


}},{key:'getRightStyle',value:function getRightStyle()

{
return{
right:{
flex:1,
paddingLeft:10},


right2:{
flex:1,
flexDirection:'row',
paddingLeft:10,
alignItems:'center',
justifyContent:'space-between'},


right3:{
flex:1,
flexDirection:'column',
paddingLeft:10,
alignSelf:'flex-start'}};



}},{key:'thumbnailPresent',value:function thumbnailPresent()

{
var thumbnailComponentPresent=false;
_react2.default.Children.forEach(this.props.children,function(child){
if(child&&child.type.displayName==='Styled(Thumbnail)'){thumbnailComponentPresent=true;}
});

return thumbnailComponentPresent;
}},{key:'gravatarPresent',value:function gravatarPresent()

{
var gravatarComponentPresent=false;
_react2.default.Children.forEach(this.props.children,function(child){
if(child&&child.type.displayName==='Styled(Gravatar)'){gravatarComponentPresent=true;}
});

return gravatarComponentPresent;
}},{key:'checkBoxPresent',value:function checkBoxPresent()

{
var checkBoxComponentPresent=false;
_react2.default.Children.forEach(this.props.children,function(child){
if(child&&child.type.displayName==='Styled(CheckBox)'){checkBoxComponentPresent=true;}
});

return checkBoxComponentPresent;
}},{key:'radioPresent',value:function radioPresent()

{
var radioComponentPresent=false;
_react2.default.Children.forEach(this.props.children,function(child){
if(child&&child.type.displayName==='Styled(Radio)'){radioComponentPresent=true;}
});

return radioComponentPresent;
}},{key:'iconPresent',value:function iconPresent()

{
var iconComponentPresent=false;
_react2.default.Children.forEach(this.props.children,function(child){
if(child&&child.type.displayName==='Styled(Icon)'){iconComponentPresent=true;}
});
return iconComponentPresent;
}},{key:'pickerPresent',value:function pickerPresent()

{
var pickerComponentPresent=false;
_react2.default.Children.forEach(this.props.children,function(child){
if(child&&child.type.displayName==='Styled(PickerNB)'){pickerComponentPresent=true;}
});
return pickerComponentPresent;
}},{key:'badgePresent',value:function badgePresent()

{
var badgeComponentPresent=false;
_react2.default.Children.forEach(this.props.children,function(child){
if(child&&child.type.displayName==='Styled(Badge)'){badgeComponentPresent=true;}
});

return badgeComponentPresent;
}},{key:'inputPresent',value:function inputPresent()

{
var inputComponentPresent=false;
_react2.default.Children.forEach(this.props.children,function(child){
if(child&&child.type.displayName==='Styled(InputGroup)'){inputComponentPresent=true;}
});
return inputComponentPresent;
}},{key:'buttonPresent',value:function buttonPresent()

{
var buttonComponentPresent=false;
_react2.default.Children.forEach(this.props.children,function(child){
if(child&&child.type.displayName==='Styled(Button)'){buttonComponentPresent=true;}
});

return buttonComponentPresent;
}},{key:'getChildProps',value:function getChildProps(

child){
var defaultProps={};

if(child&&child.type.displayName==='Image'&&!Array.isArray(this.props.children)){
defaultProps={
resizeMode:'stretch',
style:this.getInitialStyle().fullImage};

}else if(child&&child.type.displayName==='Styled(Button)'){
defaultProps={
small:true,
style:this.getInitialStyle().itemButton};

}else if(child&&child.type.displayName==='Styled(InputGroup)'){
defaultProps={
style:{
borderColor:this.props.children.props.success?
this.getTheme().inputSuccessBorderColor:
this.props.children.props.error?
this.getTheme().inputErrorBorderColor:
this.getTheme().listBorderColor},

foregroundColor:this.getContextForegroundColor()};

}else if(child&&child.type.displayName==='Styled(Text)'){
if(this.props.itemDivider){
defaultProps={
style:this.getInitialStyle().dividerItemText};

}else if(child.props.note&&(this.thumbnailPresent()||this.gravatarPresent())){
defaultProps={
style:this.getInitialStyle().itemSubNote};

}else if(child.props.note){
defaultProps={
style:this.getInitialStyle().itemNote};

}else{
defaultProps={
style:this.getInitialStyle().itemText};

}
}else if(child&&child.type.displayName==='Styled(Icon)'){
defaultProps={
style:this.getInitialStyle().itemIcon};

}else if(child&&child.type.displayName==='Styled(Picker)'){
defaultProps={
style:{
flex:0.45,
alignSelf:'flex-end',
paddingVertical:5,
height:30},

textStyle:{
color:'#7a7a7a'}};


}else if(child&&child.type.displayName==='Styled(Thumbnail)'){
defaultProps={
style:this.getInitialStyle().thumbnail};

}else if(child&&child.type.displayName==='Styled(Gravatar)'){
defaultProps={
style:this.getInitialStyle().gravatar};

}else{
defaultProps={
foregroundColor:this.getContextForegroundColor()};

}
return(0,_computeProps2.default)(child.props,defaultProps);
}},{key:'notePresent',value:function notePresent()

{
var notePresent=false;
_react2.default.Children.forEach(this.props.children,function(child){
if(child&&child.type.displayName==='Styled(Text)'&&child.props.note){notePresent=true;}
});
return notePresent;
}},{key:'insetPresent',value:function insetPresent()

{
var insetPresent=false;
_react2.default.Children.forEach(this.props.children,function(child){
if(child&&child.type.displayName==='Styled(InputGroup)'&&child.props.inset){insetPresent=true;}
});

return insetPresent;
}},{key:'inlinePresent',value:function inlinePresent()


{
var inlineComponentPresent=false;
if(this.inputPresent()){
if(this.props.children.props.children.props&&
this.props.children.props.children.props.inlineLabel){
inlineComponentPresent=true;
}else{inlineComponentPresent=false;}
}
return inlineComponentPresent;
}},{key:'stackedPresent',value:function stackedPresent()

{
var stackedComponentPresent=false;
if(this.inputPresent()){
if(this.props.children.props.children.props&&
this.props.children.props.children.props.stackedLabel){
stackedComponentPresent=true;
}else{stackedComponentPresent=false;}
}

return stackedComponentPresent;
}},{key:'squareThumbs',value:function squareThumbs()


{
var squareThumbs=false;
if(this.thumbnailPresent()||this.gravatarPresent()){
_react2.default.Children.forEach(this.props.children,function(child){
if(child.props.square){squareThumbs=true;}
});
}

return squareThumbs;
}},{key:'renderChildren',value:function renderChildren()

{var _this2=this;
this.iconPresent();

var newChildren=[];
if(!Array.isArray(this.props.children)&&
!this.inlinePresent()&&!this.stackedPresent()&&!this.insetPresent()){
newChildren.push(
_react2.default.createElement(_reactNative.View,{key:'listItem',style:{flex:1}},
_react2.default.cloneElement(this.props.children,this.getChildProps(this.props.children))));


}else{
var childrenArray=_react2.default.Children.toArray(this.props.children);
var iconElement=[];

if(this.props.iconLeft&&!this.props.iconRight&&!this.pickerPresent()){
iconElement=_lodash2.default.remove(childrenArray,function(item){
if(item.type.displayName==='Styled(Icon)'){
return true;
}
});
newChildren.push(_react2.default.cloneElement(iconElement[0],_extends({},this.getChildProps(iconElement[0]),{key:'listItem0'})));
newChildren.push(
_react2.default.createElement(_reactNative.View,{key:'listItem1',style:{flexDirection:'row',alignItems:'center',justifyContent:'space-between',flex:1}},
childrenArray.map(function(child,i){return(
_react2.default.cloneElement(child,_extends({},_this2.getChildProps(child),{key:i})));})));

}else if(this.props.iconLeft&&this.pickerPresent()){
var pickerElement=_lodash2.default.remove(childrenArray,function(item){
if(item.type.displayName==='Styled(PickerNB)'){
return true;
}
});
newChildren.push(_react2.default.createElement(_reactNative.View,{key:'listItem0',style:{flexDirection:'row',alignItems:'center',flex:1.8}},
childrenArray.map(function(child,i){return(
_react2.default.cloneElement(child,_extends({},_this2.getChildProps(child),{key:i})));})));

newChildren.push(_react2.default.cloneElement(pickerElement[0],_extends({},this.getChildProps(pickerElement[0]),{key:'listItem1',style:{flex:1,alignSelf:'flex-end'}})));
}else if(this.props.iconRight&&!this.props.iconLeft){
iconElement=_lodash2.default.remove(childrenArray,function(item){
if(item.type.displayName==='Styled(Icon)'){
return true;
}
});

newChildren.push(_react2.default.createElement(_reactNative.View,{key:'listItem0'},
childrenArray.map(function(child,i){return(
_react2.default.cloneElement(child,_extends({},_this2.getChildProps(child),{key:i})));})));

newChildren.push(_react2.default.cloneElement(iconElement[0],_extends({},this.getChildProps(iconElement[0]),{key:'listItem1'})));
}else if(this.badgePresent()){
var badgeElement=_lodash2.default.remove(childrenArray,function(item){
if(item.type.displayName==='Styled(Badge)'){
return true;
}
});

newChildren.push(_react2.default.createElement(_reactNative.View,{key:'listItem0'},
childrenArray.map(function(child,i){return(
_react2.default.cloneElement(child,_extends({},_this2.getChildProps(child),{key:i})));})));

newChildren.push(_react2.default.cloneElement(badgeElement[0],_extends({},this.getChildProps(badgeElement[0]),{key:'listItem1'})));
}else if(this.props.iconLeft&&this.props.iconRight){
iconElement=_lodash2.default.filter(childrenArray,function(item){
if(item.type.displayName==='Styled(Icon)'){
return true;
}
});

newChildren.push(_react2.default.createElement(_reactNative.View,{key:'listItem0',style:{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}},
childrenArray.slice(0,2).map(function(child,i){return(
_react2.default.cloneElement(child,_extends({},_this2.getChildProps(child),{key:i})));})));

newChildren.push(_react2.default.cloneElement(iconElement[1],_extends({},this.getChildProps(iconElement[1]),{key:'listItem1'})));
}else if(this.thumbnailPresent()){
iconElement=_lodash2.default.remove(childrenArray,function(item){
if(item.type.displayName==='Styled(Thumbnail)'){
return true;
}
});
newChildren.push(_react2.default.cloneElement(iconElement[0],_extends({},this.getChildProps(iconElement[0]),{key:'listItem0'})));
newChildren.push(_react2.default.createElement(_reactNative.View,{key:'listItem1',style:{flexDirection:'column',paddingLeft:15,alignSelf:this.squareThumbs()?'flex-start':'flex-start',flex:1}},
childrenArray.map(function(child,i){return(
_react2.default.cloneElement(child,_extends({},_this2.getChildProps(child),{key:i})));})));

}else if(this.gravatarPresent()){
iconElement=_lodash2.default.remove(childrenArray,function(item){
if(item.type.displayName==='Styled(Gravatar)'){
return true;
}
});
newChildren.push(_react2.default.cloneElement(iconElement[0],_extends({},this.getChildProps(iconElement[0]),{key:'listItem0'})));
newChildren.push(_react2.default.createElement(_reactNative.View,{key:'listItem1',style:{flexDirection:'column',paddingLeft:15,alignSelf:this.squareThumbs()?'flex-start':'center',flex:1}},
childrenArray.map(function(child,i){return(
_react2.default.cloneElement(child,_extends({},_this2.getChildProps(child),{key:i})));})));

}else if(this.checkBoxPresent()){
iconElement=_lodash2.default.remove(childrenArray,function(item){
if(item.type.displayName==='Styled(CheckBox)'){
return true;
}
});
newChildren.push(_react2.default.cloneElement(iconElement[0],this.getChildProps(iconElement[0])));
newChildren.push(_react2.default.createElement(_reactNative.View,{key:'listItem1',style:{flexDirection:'row',paddingLeft:15,justifyContent:'space-between',alignSelf:this.squareThumbs()?'flex-start':'center',flex:1}},
childrenArray.map(function(child){return _react2.default.cloneElement(child,_this2.getChildProps(child));})));

}else if(this.radioPresent()){
iconElement=_lodash2.default.remove(childrenArray,function(item){
if(item.type.displayName==='Styled(Radio)'){
return true;
}
});
newChildren.push(_react2.default.createElement(_reactNative.View,{key:'listItem1',style:{flexDirection:'column',alignSelf:this.squareThumbs()?'flex-start':'center',flex:1}},
childrenArray.map(function(child){return _react2.default.cloneElement(child,_this2.getChildProps(child));})));

newChildren.push(_react2.default.cloneElement(iconElement[0],this.getChildProps(iconElement[0])));
}else if(this.inputPresent()&&!this.inlinePresent()&&
!this.stackedPresent()&&!this.insetPresent()){
newChildren.push(_react2.default.createElement(_reactNative.View,{key:'listItem0',style:{flexDirection:'column',alignSelf:'center',flex:1}},
childrenArray.map(function(child,i){return(
_react2.default.cloneElement(child,_extends({},_this2.getChildProps(child),{key:i})));})));

}else if(this.inlinePresent()){
newChildren.push(_react2.default.createElement(_reactNative.View,{key:'listItem0',style:{flexDirection:'row',justifyContent:'center',flex:1,borderColor:this.getTheme().listBorderColor,alignItems:'center',marginLeft:-10}},
_react2.default.createElement(_Text.Text,{style:{color:this.getTheme().inputColorPlaceholder}},
this.props.children.props.children.props.label)));

newChildren.push(_react2.default.createElement(_reactNative.View,{key:'listItem1',style:{flexDirection:'column',alignSelf:'center',flex:2.2}},
childrenArray.map(function(child,i){return(
_react2.default.cloneElement(child,_extends({},
_this2.getChildProps(child),{key:i,style:{borderWidth:0}})));})));

}else if(this.stackedPresent()){
newChildren.push(_react2.default.createElement(_reactNative.View,{key:'listItem1',style:{alignSelf:'stretch',flex:1}},
_react2.default.createElement(_Text.Text,{style:{color:this.getTheme().inputColorPlaceholder,textAlign:'left',fontSize:15}},this.props.children.props.children.props.label),

childrenArray.map(function(child,i){return(
_react2.default.cloneElement(child,_extends({},
_this2.getChildProps(child),{key:i,style:{flex:1,marginTop:5}})));})));

}else if(this.insetPresent()){
newChildren.push(_react2.default.createElement(_reactNative.View,{key:'listItem0',style:{flexDirection:'row',alignSelf:'stretch',flex:1,padding:0}},
childrenArray.map(function(child,i){return(
_react2.default.cloneElement(child,_extends({},
_this2.getChildProps(child),{key:i})));})));

newChildren.push(_react2.default.createElement(_reactNative.View,{key:'listItem1',style:{flexDirection:'row',alignSelf:'stretch',flex:1,padding:0}},
childrenArray.map(function(child,i){return(
_react2.default.cloneElement(child,_extends({},
_this2.getChildProps(child),{key:i})));})));

}else{
newChildren.push(_react2.default.createElement(_reactNative.View,{key:'listItem0',style:{flexDirection:'row',alignSelf:'stretch',flex:1,padding:0}},
childrenArray.map(function(child,i){return(
_react2.default.cloneElement(child,_extends({},
_this2.getChildProps(child),{key:i})));})));

}
}

return newChildren;
}},{key:'render',value:function render()

{var _this3=this;
return(
_react2.default.createElement(_reactNative.TouchableOpacity,_extends({
ref:function ref(c){return _this3._root=c;}},
this.props,{activeOpacity:this.props.button?0.2:1}),

this.renderChildren()));


}}]);return ListItem;}(_NativeBaseComponent3.default);



ListItem.propTypes=_extends({},
_reactNative.TouchableOpacity.propTypes,{
style:_react2.default.PropTypes.object,
header:_react2.default.PropTypes.bool,
iconRight:_react2.default.PropTypes.bool,
iconLeft:_react2.default.PropTypes.bool,
button:_react2.default.PropTypes.bool,
itemDivider:_react2.default.PropTypes.bool});


var StyledListItem=(0,_theme.connectStyle)('NativeBase.ListItem1',{},_mapPropsToStyleNames2.default)(ListItem);exports.


ListItem=StyledListItem;
//# sourceMappingURL=ListItem.js.map