Object.defineProperty(exports,"__esModule",{value:true});exports.DefaultTabBar=undefined;

var _theme=require('@shoutem/theme');
var _platform=require('./../../theme/variables/platform');var _platform2=_interopRequireDefault(_platform);
var _index=require('./../../index');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var React=require('react');var ReactNative=require('react-native');var




StyleSheet=



ReactNative.StyleSheet,View=ReactNative.View,Animated=ReactNative.Animated,Platform=ReactNative.Platform;
var Button=require('./Button');

var DefaultTabBar=React.createClass({displayName:'DefaultTabBar',
propTypes:{
goToPage:React.PropTypes.func,
activeTab:React.PropTypes.number,
tabs:React.PropTypes.array,
backgroundColor:React.PropTypes.string,
activeTextColor:React.PropTypes.string,
inactiveTextColor:React.PropTypes.string,
tabStyle:View.propTypes.style,
renderTab:React.PropTypes.func,
underlineStyle:View.propTypes.style},

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

renderTab:function renderTab(name,page,isTabActive,onPressHandler){
var headerContent=typeof name!=='string'?name.props.children:undefined;var _props=
this.props,activeTextColor=_props.activeTextColor,inactiveTextColor=_props.inactiveTextColor,textStyle=_props.textStyle;
var textColor=isTabActive?activeTextColor:inactiveTextColor;
var fontWeight=isTabActive?'bold':'normal';
if(typeof name==='string'){
return React.createElement(Button,{
style:{flex:1},
key:name,
onPress:function onPress(){return onPressHandler(page);}},

React.createElement(_index.TabHeading,{style:this.props.style,active:isTabActive},
React.createElement(_index.Text,null,
name)));



}else
{
return React.createElement(Button,{
style:{flex:1},
key:name,
onPress:function onPress(){return onPressHandler(page);}},

React.createElement(_index.TabHeading,{style:this.props.style,active:isTabActive},
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

var tabs={
elevation:3,
height:50,
flexDirection:'row',
shadowColor:platformStyle==='material'?'#000':undefined,
shadowOffset:platformStyle==='material'?{width:0,height:2}:undefined,
shadowOpacity:platformStyle==='material'?0.2:undefined,
shadowRadius:platformStyle==='material'?1.2:undefined,
justifyContent:'space-around',
borderBottomWidth:Platform.OS=='ios'?variables.borderWidth:0,
borderColor:variables.topTabBarBorderColor};



var left=this.props.scrollValue.interpolate({
inputRange:[0,1],outputRange:[0,containerWidth/numberOfTabs]});

return(
React.createElement(View,{style:[tabs,{backgroundColor:this.props.backgroundColor},this.props.style]},
this.props.tabs.map(function(name,page){
var isTabActive=_this.props.activeTab===page;
var renderTab=_this.props.renderTab||_this.renderTab;
return renderTab(name,page,isTabActive,_this.props.goToPage);
}),
React.createElement(Animated.View,{style:[tabUnderlineStyle,{left:left},this.props.underlineStyle]})));


}});



var StyledTab=(0,_theme.connectStyle)('NativeBase.DefaultTabBar',{},mapPropsToStyleNames)(DefaultTabBar);exports.

DefaultTabBar=StyledTab;
//# sourceMappingURL=DefaultTabBar.js.map