Object.defineProperty(exports,"__esModule",{value:true});exports.ScrollableTab=undefined;var _jsxFileName="src/basic/Tabs/ScrollableTabBar.js";var _react=require("react");var _react2=_interopRequireDefault(_react);
var _propTypes=require("prop-types");var _propTypes2=_interopRequireDefault(_propTypes);
var _createReactClass=require("create-react-class");var _createReactClass2=_interopRequireDefault(_createReactClass);
var _lodash=require("lodash");var _lodash2=_interopRequireDefault(_lodash);
var _nativeBaseShoutemTheme=require("native-base-shoutem-theme");
var _mapPropsToStyleNames=require("../../Utils/mapPropsToStyleNames");var _mapPropsToStyleNames2=_interopRequireDefault(_mapPropsToStyleNames);
var _platform=require("./../../theme/variables/platform");var _platform2=_interopRequireDefault(_platform);
var _index=require("./../../index");
var _Utils=require("../../Utils");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
var Button=require("./Button");
var ReactNative=require("react-native");var

View=





ReactNative.View,Animated=ReactNative.Animated,StyleSheet=ReactNative.StyleSheet,ScrollView=ReactNative.ScrollView,Platform=ReactNative.Platform,Dimensions=ReactNative.Dimensions;

var WINDOW_WIDTH=Dimensions.get("window").width;

var ScrollableTabBar=(0,_createReactClass2.default)({displayName:"ScrollableTabBar",
propTypes:{
goToPage:_propTypes2.default.func,
activeTab:_propTypes2.default.number,
tabs:_propTypes2.default.array,
backgroundColor:_propTypes2.default.string,
activeTextColor:_propTypes2.default.string,
inactiveTextColor:_propTypes2.default.string,
scrollOffset:_propTypes2.default.number,
style:_Utils.ViewPropTypes.style,
tabStyle:_Utils.ViewPropTypes.style,
tabsContainerStyle:_Utils.ViewPropTypes.style,
renderTab:_propTypes2.default.func,
underlineStyle:_Utils.ViewPropTypes.style,
onScroll:_propTypes2.default.func},

contextTypes:{
theme:_propTypes2.default.object},


getDefaultProps:function getDefaultProps(){
return{
scrollOffset:52,
activeTextColor:"navy",
inactiveTextColor:"black",
backgroundColor:null,
style:{},
tabStyle:{},
tabsContainerStyle:{},
underlineStyle:{}};

},

getInitialState:function getInitialState(){
this._tabsMeasurements=[];
return{
_leftTabUnderline:new Animated.Value(0),
_widthTabUnderline:new Animated.Value(0),
_containerWidth:null};

},

componentDidMount:function componentDidMount(){
this.props.scrollValue.addListener(this.updateView);
},

updateView:function updateView(offset){
var position=Math.floor(offset.value);
var pageOffset=offset.value%1;
var tabCount=this.props.tabs.length;
var lastTabPosition=tabCount-1;

if(tabCount===0||offset.value<0||offset.value>lastTabPosition){
return;
}

if(
this.necessarilyMeasurementsCompleted(
position,
position===lastTabPosition))

{
this.updateTabPanel(position,pageOffset);
this.updateTabUnderline(position,pageOffset,tabCount);
}
},

necessarilyMeasurementsCompleted:function necessarilyMeasurementsCompleted(position,isLastTab){
return(
this._tabsMeasurements[position]&&(
isLastTab||this._tabsMeasurements[position+1])&&
this._tabContainerMeasurements&&
this._containerMeasurements);

},

updateTabPanel:function updateTabPanel(position,pageOffset){
var containerWidth=this._containerMeasurements.width;
var tabWidth=this._tabsMeasurements[position].width;
var nextTabMeasurements=this._tabsMeasurements[position+1];
var nextTabWidth=
nextTabMeasurements&&nextTabMeasurements.width||0;
var tabOffset=this._tabsMeasurements[position].left;
var absolutePageOffset=pageOffset*tabWidth;
var newScrollX=tabOffset+absolutePageOffset;


newScrollX-=
(containerWidth-
(1-pageOffset)*tabWidth-
pageOffset*nextTabWidth)/
2;
newScrollX=newScrollX>=0?newScrollX:0;

if(Platform.OS==="android"){
this._scrollView.scrollTo({x:newScrollX,y:0,animated:false});
}else{
var rightBoundScroll=
this._tabContainerMeasurements.width-
this._containerMeasurements.width;
newScrollX=
newScrollX>rightBoundScroll?rightBoundScroll:newScrollX;
this._scrollView.scrollTo({x:newScrollX,y:0,animated:false});
}
},

updateTabUnderline:function updateTabUnderline(position,pageOffset,tabCount){
var lineLeft=this._tabsMeasurements[position].left;
var lineRight=this._tabsMeasurements[position].right;

if(position<tabCount-1){
var nextTabLeft=this._tabsMeasurements[position+1].left;
var nextTabRight=this._tabsMeasurements[position+1].right;

var newLineLeft=
pageOffset*nextTabLeft+(1-pageOffset)*lineLeft;
var newLineRight=
pageOffset*nextTabRight+(1-pageOffset)*lineRight;

this.state._leftTabUnderline.setValue(newLineLeft);
this.state._widthTabUnderline.setValue(newLineRight-newLineLeft);
}else{
this.state._leftTabUnderline.setValue(lineLeft);
this.state._widthTabUnderline.setValue(lineRight-lineLeft);
}
},

renderTab:function renderTab(
name,
page,
isTabActive,
onPressHandler,
onLayoutHandler,
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
key:name+"_"+page,
onPress:function onPress(){return onPressHandler(page);},
onLayout:onLayoutHandler,__source:{fileName:_jsxFileName,lineNumber:170}},

_react2.default.createElement(_index.TabHeading,{
scrollable:true,
style:isTabActive?activeTabStyle:tabStyle,
active:isTabActive,__source:{fileName:_jsxFileName,lineNumber:175}},

_react2.default.createElement(_index.Text,{style:isTabActive?activeTextStyle:textStyle,__source:{fileName:_jsxFileName,lineNumber:180}},
name))));




}else{
return(
_react2.default.createElement(Button,{
key:_lodash2.default.random(1.2,5.2),
onPress:function onPress(){return onPressHandler(page);},
onLayout:onLayoutHandler,__source:{fileName:_jsxFileName,lineNumber:188}},

_react2.default.createElement(_index.TabHeading,{scrollable:true,style:tabHeaderStyle,active:isTabActive,__source:{fileName:_jsxFileName,lineNumber:193}},
headerContent)));



}
},

measureTab:function measureTab(page,event){var _event$nativeEvent$la=
event.nativeEvent.layout,x=_event$nativeEvent$la.x,width=_event$nativeEvent$la.width,height=_event$nativeEvent$la.height;
this._tabsMeasurements[page]={left:x,right:x+width,width:width,height:height};
this.updateView({value:this.props.scrollValue._value});
},

render:function render(){var _this=this;
var variables=this.context.theme?
this.context.theme["@@shoutem.theme/themeStyle"].variables:_platform2.default;

var tabUnderlineStyle={
position:"absolute",
height:4,
backgroundColor:variables.topTabBarActiveBorderColor,
bottom:0};


var dynamicTabUnderline={
left:this.state._leftTabUnderline,
width:this.state._widthTabUnderline};


return(
_react2.default.createElement(View,{
style:[
styles.container,
{backgroundColor:this.props.backgroundColor},
this.props.style],

onLayout:this.onContainerLayout,__source:{fileName:_jsxFileName,lineNumber:224}},

_react2.default.createElement(ScrollView,{
automaticallyAdjustContentInsets:false,
ref:function ref(scrollView){
_this._scrollView=scrollView;
},
horizontal:true,
showsHorizontalScrollIndicator:false,
showsVerticalScrollIndicator:false,
directionalLockEnabled:true,
onScroll:this.props.onScroll,
bounces:false,
scrollsToTop:false,__source:{fileName:_jsxFileName,lineNumber:232}},

_react2.default.createElement(View,{
style:[
styles.tabs,
{width:this.state._containerWidth},
this.props.tabsContainerStyle],

ref:"tabContainer",
onLayout:this.onTabContainerLayout,__source:{fileName:_jsxFileName,lineNumber:245}},

this.props.tabs.map(function(name,page){
var isTabActive=_this.props.activeTab===page;
var renderTab=_this.props.renderTab||_this.renderTab;
return renderTab(
name,
page,
isTabActive,
_this.props.goToPage,
_this.measureTab.bind(_this,page),
_this.props.tabStyle[page],
_this.props.activeTabStyle[page],
_this.props.textStyle[page],
_this.props.activeTextStyle[page],
_this.props.tabHeaderStyle[page]);

}),
_react2.default.createElement(Animated.View,{
style:[
tabUnderlineStyle,
dynamicTabUnderline,
this.props.underlineStyle],__source:{fileName:_jsxFileName,lineNumber:270}})))));






},

componentWillReceiveProps:function componentWillReceiveProps(nextProps){

if(
!_lodash2.default.isEqual(this.props.tabs,nextProps.tabs)&&
this.state._containerWidth)
{
this.setState({_containerWidth:null});
}
},

onTabContainerLayout:function onTabContainerLayout(e){
this._tabContainerMeasurements=e.nativeEvent.layout;
var width=this._tabContainerMeasurements.width;
if(width<WINDOW_WIDTH){
width=WINDOW_WIDTH;
}
this.setState({_containerWidth:width});
this.updateView({value:this.props.scrollValue._value});
},

onContainerLayout:function onContainerLayout(e){
this._containerMeasurements=e.nativeEvent.layout;
this.updateView({value:this.props.scrollValue._value});
}});



var StyledTab=(0,_nativeBaseShoutemTheme.connectStyle)(
"NativeBase.ScrollableTab",
{},_mapPropsToStyleNames2.default)(

ScrollableTabBar);exports.
ScrollableTab=StyledTab;
var styles=StyleSheet.create({
tab:{
height:49,
alignItems:"center",
justifyContent:"center",
paddingLeft:20,
paddingRight:20},

container:{
height:50,
borderWidth:1,
borderTopWidth:0,
borderLeftWidth:0,
borderRightWidth:0,
borderColor:"#ccc"},

tabs:{
flexDirection:"row",
justifyContent:"space-around"}});
//# sourceMappingURL=ScrollableTabBar.js.map