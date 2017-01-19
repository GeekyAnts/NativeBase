Object.defineProperty(exports,"__esModule",{value:true});exports.FooterTab=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();


var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _theme=require('@shoutem/theme');

var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);
var _Icon=require('./Icon');
var _Button=require('../../basic/Button');
var _Badge=require('../../basic/Badge');
var _IconNB=require('../../basic/IconNB');
var _mapPropsToStyleNames=require('../../Utils/mapPropsToStyleNames');var _mapPropsToStyleNames2=_interopRequireDefault(_mapPropsToStyleNames);
var _NativeBaseComponent2=require('../Base/NativeBaseComponent');var _NativeBaseComponent3=_interopRequireDefault(_NativeBaseComponent2);
var _Text=require('./Text');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

FooterTab=function(_NativeBaseComponent){_inherits(FooterTab,_NativeBaseComponent);function FooterTab(){_classCallCheck(this,FooterTab);return _possibleConstructorReturn(this,(FooterTab.__proto__||Object.getPrototypeOf(FooterTab)).apply(this,arguments));}_createClass(FooterTab,[{key:'renderFooter',value:function renderFooter()


{var _this2=this;
var childrenArray=_react2.default.Children.toArray(this.props.children);
var newChildren=[];

{childrenArray.map(function(child,i){
var children=_lodash2.default.clone(child.props.children);
if(typeof children==='string'){
newChildren.push(_react2.default.cloneElement(child,{
active:_this2.props.active?true:false,
vertical:true,
capitalize:false,
transparent:true,
key:i}));
}else{
var iconElement=[];
iconElement=_lodash2.default.remove(children,function(item){
if(item.type.displayName===_Icon.Icon){
return true;
}
});
console.log(iconElement);
var badgeElement=[];
badgeElement=_lodash2.default.remove(children,function(item){
if(item.type.displayName===_Badge.Badge){
return true;
}
});
if(iconElement.length>0){
if(badgeElement.length>0){
newChildren.push(
_react2.default.createElement(_Button.Button,{
style:child.props.style,transparent:true,vertical:true,
key:i,
active:child.props.active?true:false,
onPress:child.props.onPress},

_react2.default.createElement(_reactNative.View,{style:_reactNative.Platform.OS==='ios'?{alignSelf:'center',zIndex:999}:{alignSelf:'center'}},
_react2.default.createElement(_Badge.Badge,badgeElement[0].props,
_react2.default.createElement(_Text.Text,{style:badgeElement[0].props.textStyle},
badgeElement[0].props.children))),


_react2.default.createElement(_Icon.Icon,_extends({},
iconElement[0].props,{active:child.props.active?true:false,
name:iconElement[0].props.name})),


_react2.default.createElement(_Text.Text,{style:child.props.textStyle},children)));


}else{
newChildren.push(
_react2.default.cloneElement(child));

}
}else{
newChildren.push(
_react2.default.cloneElement(child));

}
}
});}
return newChildren;
}},{key:'render',value:function render()

{var _this3=this;
return(
_react2.default.createElement(_reactNative.View,_extends({ref:function ref(c){return _this3._root=c;}},this.props),
this.renderFooter()));


}}]);return FooterTab;}(_NativeBaseComponent3.default);


FooterTab.propTypes=_extends({},
_reactNative.View.propTypes,{
style:_react2.default.PropTypes.object});


var StyledFooterTab=(0,_theme.connectStyle)('NativeBase.FooterTab',{},_mapPropsToStyleNames2.default)(FooterTab);exports.


FooterTab=StyledFooterTab;
//# sourceMappingURL=FooterTab.js.map