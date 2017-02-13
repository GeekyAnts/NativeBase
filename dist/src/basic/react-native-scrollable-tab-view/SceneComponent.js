function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}var React=require('react');
var ReactNative=require('react-native');var
Component=React.Component;var
View=ReactNative.View,StyleSheet=ReactNative.StyleSheet;

var StaticContainer=require('react-native/Libraries/Components/StaticContainer');

var SceneComponent=function SceneComponent(Props){var
shouldUpdated=Props.shouldUpdated,props=_objectWithoutProperties(Props,['shouldUpdated']);
return React.createElement(View,props,
React.createElement(StaticContainer,{shouldUpdate:shouldUpdated},
props.children));


};

module.exports=SceneComponent;
//# sourceMappingURL=SceneComponent.js.map