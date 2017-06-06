var React=require('react');
var ReactNative=require('react-native');var

TouchableOpacity=

ReactNative.TouchableOpacity,View=ReactNative.View;

var Button=function Button(props){
return React.createElement(TouchableOpacity,props,
props.children);

};

module.exports=Button;
//# sourceMappingURL=Button.windows.js.map