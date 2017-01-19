Object.defineProperty(exports,"__esModule",{value:true});exports.InputGroup=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _theme=require('@shoutem/theme');
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);
var _NativeBaseComponent2=require('../Base/NativeBaseComponent');var _NativeBaseComponent3=_interopRequireDefault(_NativeBaseComponent2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

InputGroup=function(_NativeBaseComponent){_inherits(InputGroup,_NativeBaseComponent);function InputGroup(){_classCallCheck(this,InputGroup);return _possibleConstructorReturn(this,(InputGroup.__proto__||Object.getPrototypeOf(InputGroup)).apply(this,arguments));}_createClass(InputGroup,[{key:'renderChildren',value:function renderChildren()













{
var newChildren=[];
var childrenArray=_react2.default.Children.toArray(this.props.children);

var iconElement=[];
iconElement=_lodash2.default.remove(childrenArray,function(item){
if(item.type.displayName==='Styled(Icon)'){
return true;
}
});

var buttonElement=[];

buttonElement=_lodash2.default.remove(childrenArray,function(item){
if(item.type.displayName==='Styled(Button)'){
return true;
}
});

var inp=_lodash2.default.find(childrenArray,function(item){
if(item&&(item.type.displayName==='Styled(Input)'||item.type.displayName==='Styled(Picker)')){
return true;
}
});

if(inp){
var inputProps={};
inputProps=inp.props;
var clonedInp=_react2.default.cloneElement(
inp,_extends({},

this.inputProps,{
key:'inp',
toolbar:this.props.toolbar&&_reactNative.Platform.OS==='ios'?true:undefined,
editable:this.props.disabled?false:undefined}));


}

if(Array.isArray(this.props.children)){
if(this.props.iconRight&&iconElement.length>0){
if(clonedInp){
newChildren.push(clonedInp);
}
newChildren.push(_react2.default.cloneElement(iconElement[0]));
}else if(buttonElement.length>0){
if(iconElement.length>0){
newChildren.push(_react2.default.cloneElement(
iconElement[0],
{
key:'icon0'}));


}

if(clonedInp){
newChildren.push(clonedInp);
}
newChildren.push(_react2.default.cloneElement(
buttonElement[0],
{
key:'button1'}));


}else if(iconElement.length>1){
newChildren.push(_react2.default.cloneElement(
iconElement[0],
{
key:'icon0'}));


if(clonedInp){
newChildren.push(clonedInp);
}
newChildren.push(_react2.default.cloneElement(
iconElement[1],
{
key:'icon1'}));


}else{
if(iconElement.length>0){
newChildren.push(_react2.default.cloneElement(iconElement[0]));
}
if(clonedInp){
newChildren.push(clonedInp);
}
}
}else if(clonedInp){
newChildren.push(clonedInp);
}

return newChildren;
}},{key:'render',value:function render()

{var _this2=this;
return(
_react2.default.createElement(_reactNative.View,_extends({ref:function ref(c){return _this2._root=c;}},this.props),
this.renderChildren()));


}}]);return InputGroup;}(_NativeBaseComponent3.default);


InputGroup.propTypes=_extends({},
_reactNative.View.propTypes);



mapPropsToStyleNames=function mapPropsToStyleNames(styleNames,props){
var keys=_lodash2.default.keys(props);
var values=_lodash2.default.values(props);

_lodash2.default.forEach(keys,function(key,index){
if(values[index]){styleNames.push(key);}
});
var border=props.borderType?props.borderType:'underline';
styleNames.push(border);

return styleNames;
};


var StyledInputGroup=(0,_theme.connectStyle)('NativeBase.InputGroup',{},mapPropsToStyleNames)(InputGroup);exports.


InputGroup=StyledInputGroup;
//# sourceMappingURL=InputGroup.js.map