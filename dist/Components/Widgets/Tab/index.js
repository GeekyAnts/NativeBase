
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
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var _Dimensions$get=

_reactNative.Dimensions.get('window'),height=_Dimensions$get.height,width=_Dimensions$get.width;var

Footer=function(_NativeBaseComponent){_inherits(Footer,_NativeBaseComponent);function Footer(){var _ref;var _temp,_this,_ret;_classCallCheck(this,Footer);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=Footer.__proto__||Object.getPrototypeOf(Footer)).call.apply(_ref,[this].concat(args))),_this),_this.





state={
length:undefined,
activeIndex:undefined},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(Footer,[{key:'getInitialStyle',value:function getInitialStyle()


{
return{
tab:{
flexDirection:'row',
elevation:2,
shadowColor:'#000',
shadowOffset:{width:0,height:2},
shadowOpacity:0.1,
backgroundColor:this.getTheme().tabDefaultBg,
shadowRadius:1.5,
position:'relative'},

button:{
flex:1,
borderRadius:0,
height:this.checkIconPresent()?63:45,
justifyContent:'center',
shadowColor:'transparent',
shadowOffset:undefined,
shadowOpacity:0,
shadowRadius:0,
borderColor:this.getTheme().topTabBarBorderColor},

textStyle:{
color:this.getTheme().topTabBarTextColor,
lineHeight:_reactNative.Platform.OS=='ios'?17:undefined},

activeTextStyle:{
fontWeight:'600',
color:this.getTheme().topTabBarActiveTextColor,
lineHeight:_reactNative.Platform.OS=='ios'?16:undefined}};


}},{key:'prepareRootProps',value:function prepareRootProps()

{

var defaultProps={
style:this.getInitialStyle().tab};


return(0,_computeProps2.default)(this.props,defaultProps);

}},{key:'componentDidMount',value:function componentDidMount()

{
var childrenArray=_react2.default.Children.toArray(this.props.children);
var length=childrenArray.length;
this.setState({
length:length});

this.getWidth();
}},{key:'checkIconPresent',value:function checkIconPresent()

{
var icon=false;
_react2.default.Children.forEach(this.props.children,function(child){
if(typeof _lodash2.default.get(child.props,'children',null)=='object')
icon=true;
});
return icon;
}},{key:'getWidth',value:function getWidth()

{
var childrenArray=_react2.default.Children.toArray(this.props.children);
var activeIndex=_lodash2.default.findIndex(childrenArray,function(child){return child.props.active;});
this.setState({
activeIndex:activeIndex});



}},{key:'renderTab',value:function renderTab()

{var _this2=this;
var childrenArray=_react2.default.Children.toArray(this.props.children);
var length=childrenArray.length;
var newChildren=[];

{childrenArray.map(function(child,i){
newChildren.push(_react2.default.cloneElement(child,{
style:[_this2.getInitialStyle().button,{borderBottomWidth:child.props.active?3:0}],
capitalize:true,
transparent:true,
tabButton:true,
activeTabButton:child.props.active?true:false,
vertical:true,
textStyle:child.props.active?_this2.getInitialStyle().activeTextStyle:_this2.getInitialStyle().textStyle,
key:i}));
});
}
return newChildren;
}},{key:'render',value:function render()

{var _this3=this;
return(
_react2.default.createElement(_View2.default,_extends({ref:function ref(c){return _this3._root=c;}},this.prepareRootProps()),
this.renderTab()));


}}]);return Footer;}(_NativeBaseComponent3.default);exports.default=Footer;
//# sourceMappingURL=index.js.map