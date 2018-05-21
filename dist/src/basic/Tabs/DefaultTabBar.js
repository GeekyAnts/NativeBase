Object.defineProperty(exports,"__esModule",{value:true});exports.DefaultTabBar=undefined;var _jsxFileName="src/basic/Tabs/DefaultTabBar.js";var _react=require("react");var _react2=_interopRequireDefault(_react);
var _propTypes=require("prop-types");var _propTypes2=_interopRequireDefault(_propTypes);
var _createReactClass=require("create-react-class");var _createReactClass2=_interopRequireDefault(_createReactClass);
var _lodash=require("lodash");var _lodash2=_interopRequireDefault(_lodash);
var _nativeBaseShoutemTheme=require("native-base-shoutem-theme");
var _mapPropsToStyleNames=require("../../utils/mapPropsToStyleNames");var _mapPropsToStyleNames2=_interopRequireDefault(_mapPropsToStyleNames);
var _platform=require("./../../theme/variables/platform");var _platform2=_interopRequireDefault(_platform);
var _index=require("./../../index");
var _utils=require("../../utils");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
var ReactNative=require("react-native");var

StyleSheet=ReactNative.StyleSheet,View=ReactNative.View,Animated=ReactNative.Animated,Platform=ReactNative.Platform;
var Button=require("./Button");

var DefaultTabBar=(0,_createReactClass2.default)({displayName:"DefaultTabBar",
propTypes:{
goToPage:_propTypes2.default.func,
activeTab:_propTypes2.default.number,
tabs:_propTypes2.default.array,
backgroundColor:_propTypes2.default.string,
activeTextColor:_propTypes2.default.string,
inactiveTextColor:_propTypes2.default.string,
tabStyle:_utils.ViewPropTypes.style,
renderTab:_propTypes2.default.func,
underlineStyle:_utils.ViewPropTypes.style,
tabContainerStyle:_utils.ViewPropTypes.style},

contextTypes:{
theme:_propTypes2.default.object},


getDefaultProps:function getDefaultProps(){
return{
activeTextColor:_platform2.default.topTabBarActiveTextColor,
inactiveTextColor:_platform2.default.topTabBarTextColor,
backgroundColor:null};

},

renderTabOption:function renderTabOption(name,page){},

renderTab:function renderTab(
name,
page,
isTabActive,
onPressHandler,
tabStyle,
activeTabStyle,
textStyle,
activeTextStyle,
tabHeaderStyle)
{
var headerContent=
typeof name!=="string"?name.props.children:undefined;var _props=
this.props,activeTextColor=_props.activeTextColor,inactiveTextColor=_props.inactiveTextColor;
var textColor=isTabActive?activeTextColor:inactiveTextColor;
var fontWeight=isTabActive?"bold":"normal";
if(typeof name==="string"){
return(
_react2.default.createElement(Button,{
style:{flex:1},
key:name,
onPress:function onPress(){return onPressHandler(page);},__source:{fileName:_jsxFileName,lineNumber:60}},

_react2.default.createElement(_index.TabHeading,{
style:isTabActive?activeTabStyle:tabStyle,
active:isTabActive,__source:{fileName:_jsxFileName,lineNumber:65}},

_react2.default.createElement(_index.Text,{style:isTabActive?activeTextStyle:textStyle,__source:{fileName:_jsxFileName,lineNumber:69}},
name))));




}else{
return(
_react2.default.createElement(Button,{
style:{flex:1},
key:_lodash2.default.random(1.2,5.2),
onPress:function onPress(){return onPressHandler(page);},__source:{fileName:_jsxFileName,lineNumber:77}},

_react2.default.createElement(_index.TabHeading,{style:tabHeaderStyle,active:isTabActive,__source:{fileName:_jsxFileName,lineNumber:82}},
headerContent)));



}
},

render:function render(){var _this=this;
var variables=this.context.theme?
this.context.theme["@@shoutem.theme/themeStyle"].variables:
_platform2.default;
var platformStyle=variables.platformStyle;
var containerWidth=this.props.containerWidth;
var numberOfTabs=this.props.tabs.length;
var tabUnderlineStyle={
position:"absolute",
width:containerWidth/numberOfTabs,
height:4,
backgroundColor:variables.topTabBarActiveBorderColor,
bottom:0};


var left=this.props.scrollValue.interpolate({
inputRange:[0,1],
outputRange:[0,containerWidth/numberOfTabs]});

return(
_react2.default.createElement(_index.TabContainer,{
style:[
{backgroundColor:variables.tabDefaultBg},
this.props.tabContainerStyle?this.props.tabContainerStyle:{}],__source:{fileName:_jsxFileName,lineNumber:110}},


this.props.tabs.map(function(name,page){
var isTabActive=_this.props.activeTab===page;
var renderTab=_this.props.renderTab||_this.renderTab;
return renderTab(
name,
page,
isTabActive,
_this.props.goToPage,
_this.props.tabStyle[page],
_this.props.activeTabStyle[page],
_this.props.textStyle[page],
_this.props.activeTextStyle[page],
_this.props.tabHeaderStyle[page]);

}),
_react2.default.createElement(Animated.View,{
style:[tabUnderlineStyle,{left:left},this.props.underlineStyle],__source:{fileName:_jsxFileName,lineNumber:131}})));



}});



var StyledTab=(0,_nativeBaseShoutemTheme.connectStyle)(
"NativeBase.DefaultTabBar",
{},
_mapPropsToStyleNames2.default)(
DefaultTabBar);exports.
DefaultTabBar=StyledTab;
//# sourceMappingURL=DefaultTabBar.js.map