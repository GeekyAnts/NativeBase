Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _react=require('react');var _react2=_interopRequireDefault(_react);



var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}









var styles=_reactNative.StyleSheet.create({
button:{
flexDirection:'row',
alignSelf:'stretch',
justifyContent:'center'},

textButton:{
fontSize:14,
alignSelf:'center'},

opacity:{
opacity:0.8}});



var NativeButton=_react2.default.createClass({displayName:'NativeButton',

propTypes:_extends({},

_reactNative.TouchableWithoutFeedback.propTypes,{
textStyle:_reactNative.Text.propTypes.style,
disabledStyle:_reactNative.Text.propTypes.style,
children:_react.PropTypes.node.isRequired,
underlayColor:_react.PropTypes.string,
background:_reactNative.TouchableNativeFeedback.propTypes?_reactNative.TouchableNativeFeedback.propTypes.background:_react.PropTypes.any}),


statics:{
isAndroid:_reactNative.Platform.OS==='android'},


getDefaultProps:function getDefaultProps(){
return{
textStyle:null,
disabledStyle:null,
underlayColor:null};

},

_renderText:function _renderText(){

if(typeof this.props.children!=='string'){
return this.props.children;
}

return(
_react2.default.createElement(_reactNative.Text,{style:[styles.textButton,this.props.textStyle]},
this.props.children));


},

render:function render(){
var disabledStyle=this.props.disabled?this.props.disabledStyle||styles.opacity:{};


var buttonProps={
accessibilityComponentType:this.props.accessibilityComponentType,
accessibilityTraits:this.props.accessibilityTraits,
accessible:this.props.accessible,
delayLongPress:this.props.delayLongPress,
delayPressIn:this.props.delayPressIn,
delayPressOut:this.props.delayPressOut,
disabled:this.props.disabled,
hitSlop:this.props.hitSlop,
onLayout:this.props.onLayout,
onPress:this.props.onPress,
onPressIn:this.props.onPressIn,
onPressOut:this.props.onPressOut,
onLongPress:this.props.onLongPress,
pressRetentionOffset:this.props.pressRetentionOffset};



if(NativeButton.isAndroid){
buttonProps=_extends(buttonProps,{
background:this.props.background||_reactNative.TouchableNativeFeedback.SelectableBackground()});


return(
_react2.default.createElement(_reactNative.TouchableNativeFeedback,
buttonProps,
_react2.default.createElement(_reactNative.View,{style:[styles.button,this.props.style,disabledStyle]},
this._renderText())));



}


return(
_react2.default.createElement(_reactNative.TouchableHighlight,_extends({},
buttonProps,{
style:[styles.button,this.props.style,disabledStyle],
underlayColor:this.props.underlayColor}),
this._renderText()));


}});exports.default=


NativeButton;
//# sourceMappingURL=NativeButton.js.map