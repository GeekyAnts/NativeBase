Object.defineProperty(exports,"__esModule",{value:true});exports.STabs=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _theme=require('@shoutem/theme');
var _mapPropsToStyleNames=require('../../Utils/mapPropsToStyleNames');var _mapPropsToStyleNames2=_interopRequireDefault(_mapPropsToStyleNames);

var _TabBar=require('./TabBar');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var
STabs=function(_Component){_inherits(STabs,_Component);_createClass(STabs,null,[{key:'defaultProps',get:function get()

{
return{
tabBarPosition:'top',
initialPage:0,
page:-1,
locked:true,
onChangeTab:function onChangeTab(){},
onScroll:function onScroll(){},
scrollWithoutAnimation:false};

}}]);

function STabs(props){_classCallCheck(this,STabs);var _this=_possibleConstructorReturn(this,(STabs.__proto__||Object.getPrototypeOf(STabs)).call(this,
props));
var currentPage=_this.props.initialPage?_this.props.initialPage:0;
_this.state={
scrollValue:new _reactNative.Animated.Value(_this.props.initialPage),
containerWidth:_reactNative.Dimensions.get('window').width,
currentPage:currentPage};return _this;

}_createClass(STabs,[{key:'componentWillReceiveProps',value:function componentWillReceiveProps(
props){
if(props.page>=0&&props.page!==this.state.currentPage){
this.goToPage(props.page);
}
}},{key:'goToPage',value:function goToPage(

pageNumber){
if(_reactNative.Platform.OS==='ios'){
var offset=pageNumber*this.state.containerWidth;
if(this.scrollView){
this.scrollView.scrollTo({x:offset,y:0,animated:!this.props.scrollWithoutAnimation});
}
}else if(this.scrollView){
if(this.props.scrollWithoutAnimation){
this.scrollView.setPageWithoutAnimation(pageNumber);
}else{
this.scrollView.setPage(pageNumber);
}
}

var currentPage=this.state.currentPage;
this.contentKey({
page:pageNumber,
callback:this.tabChange.bind(this,currentPage,pageNumber)});

}},{key:'contentKey',value:function contentKey(_ref)


{var page=_ref.page,_ref$children=_ref.children,children=_ref$children===undefined?this.props.children:_ref$children,_ref$callback=_ref.callback,callback=_ref$callback===undefined?function(){}:_ref$callback;
var newKeys=page;
this.setState({currentPage:page,sceneKeys:newKeys},callback);
}},{key:'tabChange',value:function tabChange(

prevPage,currentPage){
this.props.onChangeTab({
i:currentPage,
ref:this.tabContent()[currentPage],
from:prevPage});

}},{key:'getScrollValue',value:function getScrollValue(

value){
this.state.scrollValue.setValue(value);
this.props.onScroll(value);
}},{key:'renderContent',value:function renderContent()

{var _this2=this;
var content=this.getContent();
if(_reactNative.Platform.OS==='ios'){
return _react2.default.createElement(_reactNative.ScrollView,{
horizontal:true,
pagingEnabled:true,
automaticallyAdjustContentInsets:false,
contentOffset:{x:this.props.initialPage*this.state.containerWidth},
ref:function ref(scrollView){_this2.scrollView=scrollView;},
onScroll:function onScroll(e){
var offsetX=e.nativeEvent.contentOffset.x;
_this2.getScrollValue(offsetX/_this2.state.containerWidth);
},
scrollEventThrottle:16,
scrollsToTop:false,
showsHorizontalScrollIndicator:false,
scrollEnabled:!this.props.locked,
directionalLockEnabled:true,
alwaysBounceVertical:false},

content);

}else{
return _react2.default.createElement(_reactNative.ViewPagerAndroid,{
style:{flex:1},
initialPage:this.props.initialPage,
scrollEnabled:!this.props.locked,
onPageScroll:function onPageScroll(e){var _e$nativeEvent=
e.nativeEvent,offset=_e$nativeEvent.offset,position=_e$nativeEvent.position;
_this2.getScrollValue(position+offset);
},
ref:function ref(scrollView){_this2.scrollView=scrollView;}},

content);

}
}},{key:'getContent',value:function getContent()

{var _this3=this;
return this.tabContent().map(function(child,idx){return _react2.default.createElement(_reactNative.View,{
key:idx,
style:{width:_this3.state.containerWidth}},

child);});

}},{key:'tabContent',value:function tabContent()

{
return _react2.default.Children.map(this.props.children,function(child){return child;});
}},{key:'renderTab',value:function renderTab(

props){
if(this.props.renderTabBar===false){
return null;
}else if(this.props.renderTabBar){
return _react2.default.cloneElement(this.props.renderTabBar(props),props);
}else{
return _react2.default.createElement(_TabBar.TabBar,_extends({},props,{vertical:this.props.vertical}));
}
}},{key:'render',value:function render()

{var _this4=this;
var tabBarProps={
goToPage:this.goToPage.bind(this),
tabs:this.props.children.map(function(child){return child.props.tabLabel;}),
tabIcon:this.props.children.map(function(child){return child.props.tabIcon;}),
activeTab:this.state.currentPage,
iconPresent:this.props.children[0].props.tabIcon?true:false,
tabBarTextStyle:this.props.tabBarTextStyle,
tabBarIconStyle:this.props.tabBarIconStyle,
tabBarUnderlineColor:this.props.tabBarUnderlineColor,
underlineStyle:this.props.underlineStyle,
tabBarStyle:this.props.tabBarStyle,
scrollValue:this.state.scrollValue};


return(
_react2.default.createElement(_reactNative.View,_extends({ref:function ref(c){return _this4._root=c;}},this.props),
this.props.tabBarPosition==='top'&&this.renderTab(tabBarProps),
this.renderContent(),
_react2.default.createElement(_reactNative.View,{style:this.props.tabBarPosition==='bottom'?{bottom:_reactNative.Platform.OS==='ios'?0:23}:{}},
this.props.tabBarPosition==='bottom'&&this.renderTab(tabBarProps))));



}}]);return STabs;}(_react.Component);


STabs.propTypes=_extends({},
_reactNative.View.propTypes,{
style:_react2.default.PropTypes.object,
initialPage:_react2.default.PropTypes.number,
tabBarPosition:_react2.default.PropTypes.string,
tabBarTextStyle:_react2.default.PropTypes.object,
tabBarIconStyle:_react2.default.PropTypes.object,
tabBarStyle:_react2.default.PropTypes.object,
underlineStyle:_react2.default.PropTypes.object,
vertical:_react2.default.PropTypes.bool});


var StyledSTabs=(0,_theme.connectStyle)('NativeBase.STabs',{},_mapPropsToStyleNames2.default)(STabs);exports.


STabs=StyledSTabs;
//# sourceMappingURL=index.js.map