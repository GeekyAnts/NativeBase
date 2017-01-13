
'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _NativeBaseComponent2=require('../../Base/NativeBaseComponent');var _NativeBaseComponent3=_interopRequireDefault(_NativeBaseComponent2);
var _computeProps=require('../../../Utils/computeProps');var _computeProps2=_interopRequireDefault(_computeProps);
var _Button=require('./../Button');var _Button2=_interopRequireDefault(_Button);
var _reactNative=require('react-native');
var _View=require('./../View');var _View2=_interopRequireDefault(_View);
var _Icon=require('./../Icon');var _Icon2=_interopRequireDefault(_Icon);
var _Badge=require('./../Badge');var _Badge2=_interopRequireDefault(_Badge);
var _Text=require('./../Text');var _Text2=_interopRequireDefault(_Text);
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var
Footer=function(_NativeBaseComponent){_inherits(Footer,_NativeBaseComponent);function Footer(){_classCallCheck(this,Footer);return _possibleConstructorReturn(this,(Footer.__proto__||Object.getPrototypeOf(Footer)).apply(this,arguments));}_createClass(Footer,[{key:'getInitialStyle',value:function getInitialStyle()





{
return{
footerTab:{
flexDirection:'row',
justifyContent:'space-between',
flex:1,
alignSelf:'stretch'},

btnTextStyle:{
color:this.getTheme().tabBarTextColor,
fontSize:this.getTheme().tabBarTextSize,
lineHeight:13},

btnActiveTextStyle:{
color:this.getTheme().tabBarActiveTextColor,
fontSize:this.getTheme().tabBarActiveTextSize,
lineHeight:13},

btnStringTextStyle:{
color:this.getTheme().tabBarTextColor,
fontSize:_reactNative.Platform.OS=='ios'?14:11,
lineHeight:16},

btnStringActiveTextStyle:{
color:this.getTheme().tabBarActiveTextColor,
fontSize:_reactNative.Platform.OS=='ios'?14:12,
lineHeight:16},

btnStyle:{
alignSelf:'center',
flex:1,
justifyContent:'center',
margin:this.getTheme().footerBtnMargin!==undefined?this.getTheme().footerBtnMargin:1,
height:this.getTheme().footerHeight-4*(this.getTheme().footerBtnMargin!==undefined?this.getTheme().footerBtnMargin:1),
borderRadius:this.getTheme().tabActiveBorderRadius!==undefined?this.getTheme().tabActiveBorderRadius:0}};


}},{key:'prepareRootProps',value:function prepareRootProps()

{

var defaultProps={
style:this.getInitialStyle().footerTab};


return(0,_computeProps2.default)(this.props,defaultProps);

}},{key:'renderFooter',value:function renderFooter()

{var _this2=this;
var childrenArray=_react2.default.Children.toArray(this.props.children);
var length=childrenArray.length;
var newChildren=[];

{childrenArray.map(function(child,i){
var children=_lodash2.default.clone(child.props.children);
if(typeof children==='string'){
newChildren.push(_react2.default.cloneElement(child,{
style:[_this2.getInitialStyle().btnStyle,{backgroundColor:child.props.active?_this2.getTheme().tabActiveBgColor:undefined}],
vertical:true,
capitalize:false,
transparent:true,
textStyle:child.props.active?_this2.getInitialStyle().btnStringActiveTextStyle:_this2.getInitialStyle().btnStringTextStyle,
key:i}));
}else
{
var iconElement=[];
iconElement=_lodash2.default.remove(children,function(item){
if(_lodash2.default.get(item,'type',null)==_Icon2.default){
return true;
}
});
var badgeElement=[];
badgeElement=_lodash2.default.remove(children,function(item){
if(_lodash2.default.get(item,'type',null)==_Badge2.default){
return true;
}
});
if(iconElement.length>0){
if(badgeElement.length>0){
if(children.length>0){
newChildren.push(
_react2.default.createElement(_View2.default,{key:i,style:{position:'relative',flex:1}},
_react2.default.createElement(_Button2.default,{transparent:true,vertical:true,
capitalize:false,
style:[_this2.getInitialStyle().btnStyle,{backgroundColor:child.props.active?_this2.getTheme().tabActiveBgColor:undefined,alignSelf:'stretch'}],
textStyle:child.props.active?_this2.getInitialStyle().btnActiveTextStyle:_this2.getInitialStyle().btnTextStyle,
onPress:child.props.onPress},
children,
_react2.default.createElement(_Icon2.default,{
style:{color:child.props.active?_this2.getTheme().tabBarActiveTextColor:_this2.getTheme().tabBarTextColor},
name:iconElement[0].props.name})),

_react2.default.createElement(_Badge2.default,{style:{position:'absolute',top:4,right:length==2?68:length==3?36:length==4?20:undefined,height:18,paddingHorizontal:6,padding:1.5,backgroundColor:badgeElement[0].props.badgeColor?badgeElement[0].props.badgeColor:undefined},textStyle:{fontSize:11,lineHeight:14,color:badgeElement[0].props.textColor?badgeElement[0].props.textColor:undefined}},
badgeElement[0].props.children)));



}else
{
newChildren.push(
_react2.default.createElement(_View2.default,{key:i,style:{position:'relative',flex:1}},
_react2.default.createElement(_Button2.default,{transparent:true,vertical:true,
capitalize:false,
style:[_this2.getInitialStyle().btnStyle,{backgroundColor:child.props.active?_this2.getTheme().tabActiveBgColor:undefined,alignSelf:'stretch'}],
textStyle:child.props.active?_this2.getInitialStyle().btnActiveTextStyle:_this2.getInitialStyle().btnTextStyle,
onPress:child.props.onPress},
_react2.default.createElement(_Icon2.default,{
style:{color:child.props.active?_this2.getTheme().tabBarActiveTextColor:_this2.getTheme().tabBarTextColor},
name:iconElement[0].props.name})),

_react2.default.createElement(_Badge2.default,{style:{position:'absolute',top:4,right:length==2?68:length==3?36:length==4?20:undefined,height:18,paddingHorizontal:6,padding:1.5,backgroundColor:badgeElement[0].props.badgeColor?badgeElement[0].props.badgeColor:undefined},textStyle:{fontSize:11,lineHeight:14,color:badgeElement[0].props.textColor?badgeElement[0].props.textColor:undefined}},
badgeElement[0].props.children)));



}
}else
{
newChildren.push(
_react2.default.createElement(_Button2.default,{transparent:true,vertical:true,
capitalize:false,
style:[_this2.getInitialStyle().btnStyle,{backgroundColor:child.props.active?_this2.getTheme().tabActiveBgColor:undefined}],
textStyle:child.props.active?_this2.getInitialStyle().btnActiveTextStyle:_this2.getInitialStyle().btnTextStyle,
key:i,onPress:child.props.onPress},
children,
_react2.default.createElement(_Icon2.default,{
style:{color:child.props.active?_this2.getTheme().tabBarActiveTextColor:_this2.getTheme().tabBarTextColor},
name:iconElement[0].props.name})));


}
}else
{
newChildren.push(
_react2.default.createElement(_Button2.default,{transparent:true,vertical:true,
capitalize:false,
style:[_this2.getInitialStyle().btnStyle,{backgroundColor:child.props.active?_this2.getTheme().tabActiveBgColor:undefined}],
key:i,onPress:child.props.onPress},
_react2.default.createElement(_Icon2.default,{
style:{color:child.props.active?_this2.getTheme().tabBarActiveTextColor:_this2.getTheme().tabBarTextColor,
fontSize:28,height:30,lineHeight:28},
name:children.props.name})));


}
};
});}
return newChildren;
}},{key:'render',value:function render()

{var _this3=this;

return(
_react2.default.createElement(_View2.default,_extends({ref:function ref(c){return _this3._root=c;}},this.prepareRootProps()),
this.renderFooter()));


}}]);return Footer;}(_NativeBaseComponent3.default);exports.default=Footer;
//# sourceMappingURL=index.js.map