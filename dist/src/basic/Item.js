Object.defineProperty(exports,"__esModule",{value:true});exports.Item=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _Input=require('./Input');
var _Label=require('./Label');
var _Icon=require('./Icon');

var _theme=require('@shoutem/theme');
var _platform=require('../theme/variables/platform');var _platform2=_interopRequireDefault(_platform);
var _computeProps=require('../Utils/computeProps');var _computeProps2=_interopRequireDefault(_computeProps);
var _mapPropsToStyleNames=require('../Utils/mapPropsToStyleNames');var _mapPropsToStyleNames2=_interopRequireDefault(_mapPropsToStyleNames);
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Item=function(_Component){_inherits(Item,_Component);
function Item(props){_classCallCheck(this,Item);var _this=_possibleConstructorReturn(this,(Item.__proto__||Object.getPrototypeOf(Item)).call(this,
props));
_this.state={
text:'',
topAnim:new _reactNative.Animated.Value(18),
opacAnim:new _reactNative.Animated.Value(1)};return _this;

}_createClass(Item,[{key:'floatBack',value:function floatBack()

{
_reactNative.Animated.timing(this.state.topAnim,{
toValue:18,
duration:150}).
start();
_reactNative.Animated.timing(this.state.opacAnim,{
toValue:1,
duration:150}).
start();
}},{key:'floatUp',value:function floatUp()

{
_reactNative.Animated.timing(this.state.topAnim,{
toValue:-5,
duration:150}).
start();
_reactNative.Animated.timing(this.state.opacAnim,{
toValue:0.7,
duration:150}).
start();
}},{key:'renderLabel',value:function renderLabel(

label,labelProps){
var newLabel=[];
if(this.props.floatingLabel){
if(this.state.text){
newLabel.push(_react2.default.createElement(_Label.Label,_extends({},


labelProps,{
key:'newFLabel',
float:true})));


this.floatUp();
}else{
newLabel.push(label);
this.floatBack();
}
}else if(this.state.text){
newLabel.push(_react2.default.createElement(_Label.Label,_extends({},


labelProps,{
key:'newLabel',
focused:true})));


}else{
newLabel.push(_react2.default.createElement(_Label.Label,_extends({},


labelProps,{
key:'newLabel'})));


}
return newLabel;
}},{key:'renderChildren',value:function renderChildren()

{var _this2=this;
var newChildren=[];
var childrenArray=_react2.default.Children.toArray(this.props.children);

var label=[];
var labelProps={};
label=_lodash2.default.remove(childrenArray,function(item){
if(item.type===_Label.Label){
labelProps=item.props;
return item;
}
});

var input=[];
var inputProps={};
input=_lodash2.default.remove(childrenArray,function(item){
if(item.type===_Input.Input){
inputProps=item.props;
return item;
}
});

var icon=[];
var iconProps={};
icon=_lodash2.default.remove(childrenArray,function(item){
if(item.type===_Icon.Icon){
iconProps=item.props;
return item;
}
});
if(this.props.floatingLabel&&icon.length){
newChildren.push(_react2.default.createElement(_Icon.Icon,_extends({key:'i1'},iconProps,{style:{top:6}})));
newChildren.push(_react2.default.createElement(_reactNative.Animated.View,{key:'float',style:{position:'absolute',left:this.props.last?22:22,right:0,top:this.state.topAnim,opacity:this.state.opacAnim,paddingTop:_reactNative.Platform.OS==='ios'?undefined:undefined,paddingBottom:_reactNative.Platform.OS==='ios'?undefined:12}},_react2.default.createElement(_Label.Label,{style:{fontSize:this.state.text?13:undefined}},this.renderLabel(label,labelProps))));
newChildren.push(_react2.default.createElement(_Input.Input,_extends({key:'l2'},inputProps,{onChangeText:function onChangeText(text){return _this2.setState({text:text});}})));
}else
if(this.props.floatingLabel){
newChildren.push(this.props.floatingLabel?_react2.default.createElement(_reactNative.Animated.View,{key:'float',style:{position:'absolute',left:this.props.last?15:0,right:0,top:this.state.topAnim,opacity:this.state.opacAnim,paddingTop:_reactNative.Platform.OS==='ios'?undefined:undefined,paddingBottom:_reactNative.Platform.OS==='ios'?undefined:12}},_react2.default.createElement(_Label.Label,{style:{fontSize:this.state.text?13:undefined}},this.renderLabel(label,labelProps))):_react2.default.createElement(_Label.Label,{style:{width:this.state.text?0:undefined,marginLeft:this.props.last?null:15}},this.renderLabel(label,labelProps)));
newChildren.push(_react2.default.createElement(_Input.Input,_extends({key:'l2'},inputProps,{onChangeText:function onChangeText(text){return _this2.setState({text:text});}})));
}else
if(this.props.stackedLabel&&icon.length){
newChildren.push(_react2.default.createElement(_reactNative.View,{key:'s',style:{flexDirection:'row',flex:1,width:_platform2.default.deviceWidth-15}},_react2.default.createElement(_Icon.Icon,_extends({key:'s1'},iconProps,{style:{marginTop:36}})),_react2.default.createElement(_reactNative.View,{style:{flexDirection:'column'}},_react2.default.createElement(_Label.Label,_extends({key:'s2'},labelProps)),_react2.default.createElement(_Input.Input,_extends({key:'s3'},inputProps,{onChangeText:function onChangeText(text){return _this2.setState({text:text});},style:{width:_platform2.default.deviceWidth-40}})))));

}else
{
return this.props.children;
}
return newChildren;
}},{key:'getInitialStyle',value:function getInitialStyle()
{
return{
roundedInputGroup:{
borderWidth:this.props.rounded?_platform2.default.borderWidth*2:undefined,
borderRadius:this.props.rounded?_platform2.default.inputGroupRoundedBorderRadius:undefined}};


}},{key:'prepareRootProps',value:function prepareRootProps()

{
var defaultProps={
style:this.getInitialStyle().roundedInputGroup};


return(0,_computeProps2.default)(this.props,defaultProps);
}},{key:'render',value:function render()
{var _this3=this;
return(
_react2.default.createElement(_reactNative.TouchableOpacity,_extends({ref:function ref(c){return _this3._root=c;}},this.prepareRootProps(),{activeOpacity:1}),
this.renderChildren()));


}}]);return Item;}(_react.Component);


var childrenType=function childrenType(props,propName,component){
var error=void 0;
var prop=props[propName];
if(!props.children.length){
error=new Error(component+' should have both Label and Input components');
}else if(props.children[0].type.displayName!=='Styled(Label)'||props.children[1].type.displayName!=='Styled(Input)'){
error=new Error(component+' should have Label and Input components only');
}
return error;
};

Item.propTypes=_extends({},
_reactNative.TouchableOpacity.propTypes,{
style:_react2.default.PropTypes.object,
inlineLabel:_react2.default.PropTypes.bool,
floatingLabel:_react2.default.PropTypes.bool,
stackedLabel:_react2.default.PropTypes.bool,
fixedLabel:_react2.default.PropTypes.bool,
success:_react2.default.PropTypes.bool,
error:_react2.default.PropTypes.bool});


var StyledItem=(0,_theme.connectStyle)('NativeBase.Item',{},_mapPropsToStyleNames2.default)(Item);exports.


Item=StyledItem;
//# sourceMappingURL=Item.js.map