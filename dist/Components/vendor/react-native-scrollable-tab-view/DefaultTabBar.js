'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _NativeBaseComponent2=require('../../Base/NativeBaseComponent');var _NativeBaseComponent3=_interopRequireDefault(_NativeBaseComponent2);
var _Text=require('../../Widgets/Text');var _Text2=_interopRequireDefault(_Text);

var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}







var deviceWidth=_reactNative.Dimensions.get('window').width;var

DefaultTabBar=function(_NativeBaseComponent){_inherits(DefaultTabBar,_NativeBaseComponent);function DefaultTabBar(){_classCallCheck(this,DefaultTabBar);return _possibleConstructorReturn(this,(DefaultTabBar.__proto__||Object.getPrototypeOf(DefaultTabBar)).apply(this,arguments));}_createClass(DefaultTabBar,[{key:'getInitialStyle',value:function getInitialStyle()
{
return{
tab:{
flex:1,
alignItems:'center',
justifyContent:'center',
backgroundColor:this.getTheme().tabBgColor},

tabs:{
height:45,
flexDirection:'row',
justifyContent:'space-around',
borderWidth:1,
borderTopWidth:0,
borderLeftWidth:0,
borderRightWidth:0,
borderBottomColor:'#ccc'}};


}},{key:'renderTabOption',value:function renderTabOption(






name,page){var _this2=this;
var isTabActive=this.props.activeTab===page;

return(
_react2.default.createElement(_reactNative.TouchableHighlight,{underlayColor:this.getTheme().darkenHeader,style:[this.getInitialStyle().tab],key:name,onPress:function onPress(){return _this2.props.goToPage(page);}},
_react2.default.createElement(_reactNative.View,null,
_react2.default.createElement(_Text2.default,{style:{color:isTabActive?this.getTheme().tabTextColor:this.getTheme().tabTextColor,fontWeight:isTabActive?'bold':'normal',fontSize:this.getTheme().tabFontSize}},name))));



}},{key:'render',value:function render()

{var _this3=this;
var numberOfTabs=this.props.tabs.length;
var tabUnderlineStyle={
position:'absolute',
width:deviceWidth/numberOfTabs,
height:4,
backgroundColor:this.getTheme().tabTextColor,
bottom:0};


var left=this.props.scrollValue.interpolate({
inputRange:[0,1],outputRange:[0,deviceWidth/numberOfTabs]});


return(
_react2.default.createElement(_reactNative.View,{style:this.getInitialStyle().tabs},
this.props.tabs.map(function(tab,i){return _this3.renderTabOption(tab,i);}),
_react2.default.createElement(_reactNative.Animated.View,{style:[tabUnderlineStyle,{left:left}]})));


}}]);return DefaultTabBar;}(_NativeBaseComponent3.default);DefaultTabBar.propTypes={goToPage:_react2.default.PropTypes.func,activeTab:_react2.default.PropTypes.number,tabs:_react2.default.PropTypes.array};exports.default=DefaultTabBar;
//# sourceMappingURL=DefaultTabBar.js.map