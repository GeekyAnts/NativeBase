Object.defineProperty(exports,"__esModule",{value:true});exports.Button=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();


var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _theme=require('@shoutem/theme');
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);
var _platform=require('../../theme/variables/platform');var _platform2=_interopRequireDefault(_platform);
var _Icon=require('./Icon');
var _mapPropsToStyleNames=require('../../Utils/mapPropsToStyleNames');var _mapPropsToStyleNames2=_interopRequireDefault(_mapPropsToStyleNames);
var _computeProps=require('../../Utils/computeProps');var _computeProps2=_interopRequireDefault(_computeProps);
var _Text=require('./Text');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var


Button=function(_Component){_inherits(Button,_Component);function Button(){_classCallCheck(this,Button);return _possibleConstructorReturn(this,(Button.__proto__||Object.getPrototypeOf(Button)).apply(this,arguments));}_createClass(Button,[{key:'getInitialStyle',value:function getInitialStyle()


{
return{
borderedBtn:{
borderWidth:this.props.bordered?1:undefined,
borderRadius:this.props.rounded&&this.props.bordered?_platform2.default.borderRadiusLarge:2}};


}},{key:'iconPresent',value:function iconPresent()

{
var iconComponentPresent=false;
_react2.default.Children.forEach(this.props.children,function(child){
if(child.type===_Icon.Icon){iconComponentPresent=true;}
});
return iconComponentPresent;
}},{key:'prepareRootProps',value:function prepareRootProps()

{
var defaultProps={
style:this.getInitialStyle().borderedBtn};


return(0,_computeProps2.default)(this.props,defaultProps);
}},{key:'renderChildren',value:function renderChildren()

{
if(typeof this.props.children==='string'){
return _react2.default.createElement(_Text.Text,{style:this.props.textStyle},_reactNative.Platform.OS==='ios'||!this.props.capitalize?this.props.children:this.props.children.toUpperCase());
}else if(this.props.children.type===_Icon.Icon){
return _react2.default.cloneElement(this.props.children);
}else if(Array.isArray(this.props.children)){
var newChildren=[];

var childrenArray=_react2.default.Children.toArray(this.props.children);

var iconElement=[];
iconElement=_lodash2.default.remove(childrenArray,function(item){
if(item.type===_Icon.Icon){
return true;
}
return null;
});

if(this.props.iconRight){
if(childrenArray[0].type===undefined){
newChildren.push(_react2.default.createElement(_Text.Text,{key:'label'},_reactNative.Platform.OS==='ios'||!this.props.capitalize?childrenArray[0]:childrenArray[0].toUpperCase()));
}else{
newChildren.push(_react2.default.createElement(_Text.Text,{key:'label'},_reactNative.Platform.OS==='ios'||!this.props.capitalize?childrenArray[0].props.children:childrenArray[0].props.children.toUpperCase()));
}

newChildren.push(_react2.default.cloneElement(iconElement[0]));
}else if(this.props.iconLeft||iconElement.length>0){
newChildren.push(_react2.default.cloneElement(iconElement[0]));

if(childrenArray[0].type===undefined){
newChildren.push(_react2.default.createElement(_Text.Text,{key:'label'},_reactNative.Platform.OS==='ios'||!this.props.capitalize?childrenArray[0]:childrenArray[0].toUpperCase()));
}else{
newChildren.push(_react2.default.createElement(_Text.Text,{key:'label'},_reactNative.Platform.OS==='ios'||!this.props.capitalize?childrenArray[0].props.children:childrenArray[0].props.children.toUpperCase()));
}
}else{
return _react2.default.createElement(_Text.Text,null,this.props.children);
}

return newChildren;
}
return _react2.default.cloneElement(this.props.children);
}},{key:'render',value:function render()

{var _this2=this;
return(
_react2.default.createElement(_reactNative.TouchableOpacity,_extends({
ref:function ref(c){_this2._root=c;}},
this.prepareRootProps(),{activeOpacity:0.5}),

this.renderChildren()));


}}]);return Button;}(_react.Component);



Button.propTypes=_extends({},
_reactNative.TouchableOpacity.propTypes,{
style:_react2.default.PropTypes.object,
textStyle:_react2.default.PropTypes.object,
block:_react2.default.PropTypes.bool,
primary:_react2.default.PropTypes.bool,
transparent:_react2.default.PropTypes.bool,
success:_react2.default.PropTypes.bool,
danger:_react2.default.PropTypes.bool,
warning:_react2.default.PropTypes.bool,
info:_react2.default.PropTypes.bool,
bordered:_react2.default.PropTypes.bool,
disabled:_react2.default.PropTypes.bool,
rounded:_react2.default.PropTypes.bool,
large:_react2.default.PropTypes.bool,
small:_react2.default.PropTypes.bool,
inputButton:_react2.default.PropTypes.bool,
tabButton:_react2.default.PropTypes.bool});



var StyledButton=(0,_theme.connectStyle)('NativeBase.Button',{},_mapPropsToStyleNames2.default)(Button);exports.

Button=StyledButton;
//# sourceMappingURL=Button.js.map