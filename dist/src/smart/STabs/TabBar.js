Object.defineProperty(exports,"__esModule",{value:true});exports.TabBar=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _IconNB=require('../../basic/IconNB');
var _Button=require('../../basic/Button');
var _Text=require('../../basic/Text');
var _platform=require('../../theme/variables/platform');var _platform2=_interopRequireDefault(_platform);
var _theme=require('@shoutem/theme');
var _mapPropsToStyleNames=require('../../Utils/mapPropsToStyleNames');var _mapPropsToStyleNames2=_interopRequireDefault(_mapPropsToStyleNames);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var
TabBar=function(_Component){_inherits(TabBar,_Component);function TabBar(){_classCallCheck(this,TabBar);return _possibleConstructorReturn(this,(TabBar.__proto__||Object.getPrototypeOf(TabBar)).apply(this,arguments));}_createClass(TabBar,[{key:'renderLabelOption',value:function renderLabelOption(

name,page){var _this2=this;
var isTabActive=this.props.activeTab===page;

return(
_react2.default.createElement(_reactNative.View,{style:[{flex:1},this.props.tabBarStyle],key:name},
_react2.default.createElement(_Button.Button,{
transparent:true,onPress:function onPress(){return _this2.props.goToPage(page);},
isTabActive:this.props.activeTab===page},

_react2.default.createElement(_Text.Text,{style:this.props.tabBarTextStyle},name))));



}},{key:'renderTab',value:function renderTab(

props){
var newTab=[];
props.tabs.forEach(function(tabLabel,index){
newTab.push({label:tabLabel,icon:props.tabIcon[index]});
});
return this.renderNewTab(newTab);
}},{key:'renderNewTab',value:function renderNewTab(

newTab){var _this3=this;
return newTab.map(function(tab,i){return _this3.renderButtonTab(tab.label,tab.icon,i);});
}},{key:'renderButtonTab',value:function renderButtonTab(

label,icon,page){var _this4=this;
var isTabActive=this.props.activeTab===page;

return(
_react2.default.createElement(_reactNative.View,{key:page,style:[{flex:1},this.props.tabBarStyle]},
_react2.default.createElement(_Button.Button,{transparent:true,onPress:function onPress(){return _this4.props.goToPage(page);},isTabActive:this.props.activeTab===page,style:{flexDirection:this.props.vertical?'column':'row'}},
_react2.default.createElement(_IconNB.IconNB,{name:icon,style:this.props.tabBarIconStyle}),
_react2.default.createElement(_Text.Text,{style:this.props.tabBarTextStyle},label))));



}},{key:'render',value:function render()

{var _this5=this;
var containerWidth=_reactNative.Dimensions.get('window').width;
var numberOfTabs=this.props.tabs.length;
var tabUnderlineStyle={
position:'absolute',
width:containerWidth/numberOfTabs,
height:4,
backgroundColor:_platform2.default.sTabBarActiveTextColor,
bottom:0};

var left=this.props.scrollValue.interpolate({
inputRange:[0,1],outputRange:[0,containerWidth/numberOfTabs]});

return(
_react2.default.createElement(_reactNative.View,_extends({ref:function ref(c){return _this5._root=c;}},this.props),
this.props.iconPresent?this.renderTab(this.props):
this.props.tabs.map(function(tab,i){return _this5.renderLabelOption(tab,i);}),
_react2.default.createElement(_reactNative.Animated.View,{style:[tabUnderlineStyle,{left:left},this.props.underlineStyle]})));


}}]);return TabBar;}(_react.Component);


TabBar.propTypes=_extends({},
_reactNative.View.propTypes);


var StyledTabBar=(0,_theme.connectStyle)('NativeBase.TabBar',{},_mapPropsToStyleNames2.default)(TabBar);exports.


TabBar=StyledTabBar;
//# sourceMappingURL=TabBar.js.map