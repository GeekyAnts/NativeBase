Object.defineProperty(exports,"__esModule",{value:true});exports.DefaultTabBar=undefined;var _jsxFileName='src/basic/Tabs/DefaultTabBar.js';

var _nativeBaseShoutemTheme=require('native-base-shoutem-theme');
var _platform=require('./../../theme/variables/platform');var _platform2=_interopRequireDefault(_platform);
var _index=require('./../../index');
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var React=require('react');var ReactNative=require('react-native');var


StyleSheet=




ReactNative.StyleSheet,View=ReactNative.View,Animated=ReactNative.Animated,Platform=ReactNative.Platform,ViewPropTypes=ReactNative.ViewPropTypes;
var Button=require('./Button');

var DefaultTabBar=React.createClass({displayName:'DefaultTabBar',
propTypes:{
goToPage:React.PropTypes.func,
activeTab:React.PropTypes.number,
tabs:React.PropTypes.array,
backgroundColor:React.PropTypes.string,
activeTextColor:React.PropTypes.string,
inactiveTextColor:React.PropTypes.string,
tabStyle:ViewPropTypes.style,
renderTab:React.PropTypes.func,
underlineStyle:ViewPropTypes.style},

contextTypes:{
theme:React.PropTypes.object},


getDefaultProps:function getDefaultProps(){
return{
activeTextColor:_platform2.default.topTabBarActiveTextColor,
inactiveTextColor:_platform2.default.topTabBarTextColor,
backgroundColor:null};

},

renderTabOption:function renderTabOption(name,page){
},

renderTab:function renderTab(name,page,isTabActive,onPressHandler,tabStyle,activeTabStyle,textStyle,activeTextStyle,tabHeaderStyle){
var headerContent=typeof name!=='string'?name.props.children:undefined;var _props=
this.props,activeTextColor=_props.activeTextColor,inactiveTextColor=_props.inactiveTextColor;
var textColor=isTabActive?activeTextColor:inactiveTextColor;
var fontWeight=isTabActive?'bold':'normal';
if(typeof name==='string'){
return React.createElement(Button,{
style:{flex:1},
key:name,
onPress:function onPress(){return onPressHandler(page);},__source:{fileName:_jsxFileName,lineNumber:50}},

React.createElement(_index.TabHeading,{style:isTabActive?activeTabStyle:tabStyle,active:isTabActive,__source:{fileName:_jsxFileName,lineNumber:55}},
React.createElement(_index.Text,{style:isTabActive?activeTextStyle:textStyle,__source:{fileName:_jsxFileName,lineNumber:56}},
name)));



}else
{
return React.createElement(Button,{
style:{flex:1},
key:_lodash2.default.random(1.2,5.2),
onPress:function onPress(){return onPressHandler(page);},__source:{fileName:_jsxFileName,lineNumber:63}},

React.createElement(_index.TabHeading,{style:tabHeaderStyle,active:isTabActive,__source:{fileName:_jsxFileName,lineNumber:68}},
headerContent));


}
},

render:function render(){var _this=this;
var variables=this.context.theme?this.context.theme['@@shoutem.theme/themeStyle'].variables:_platform2.default;
var platformStyle=variables.platformStyle;
var containerWidth=this.props.containerWidth;
var numberOfTabs=this.props.tabs.length;
var tabUnderlineStyle={
position:'absolute',
width:containerWidth/numberOfTabs,
height:4,
backgroundColor:variables.topTabBarActiveBorderColor,
bottom:0};



var left=this.props.scrollValue.interpolate({
inputRange:[0,1],outputRange:[0,containerWidth/numberOfTabs]});

return(
React.createElement(_index.TabContainer,{__source:{fileName:_jsxFileName,lineNumber:93}},
this.props.tabs.map(function(name,page){
var isTabActive=_this.props.activeTab===page;
var renderTab=_this.props.renderTab||_this.renderTab;
return renderTab(name,page,isTabActive,_this.props.goToPage,_this.props.tabStyle[page],_this.props.activeTabStyle[page],_this.props.textStyle[page],_this.props.activeTextStyle[page],_this.props.tabHeaderStyle[page]);
}),
React.createElement(Animated.View,{style:[tabUnderlineStyle,{left:left},this.props.underlineStyle],__source:{fileName:_jsxFileName,lineNumber:99}})));


}});



var StyledTab=(0,_nativeBaseShoutemTheme.connectStyle)('NativeBase.DefaultTabBar',{},mapPropsToStyleNames)(DefaultTabBar);exports.

DefaultTabBar=StyledTab;
//# sourceMappingURL=DefaultTabBar.js.map