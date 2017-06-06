var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var React=require('react');
var ReactNative=require('react-native');var

TouchableNativeFeedback=

ReactNative.TouchableNativeFeedback,View=ReactNative.View;

var Button=function Button(props){
return React.createElement(TouchableNativeFeedback,_extends({
delayPressIn:0,
background:TouchableNativeFeedback.SelectableBackground()},
props),

props.children);

};

module.exports=Button;
//# sourceMappingURL=Button.android.js.map