Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _reactNative=require("react-native");exports.default=_extends({},

_reactNative.InteractionManager,{
runAfterInteractions:function runAfterInteractions(f){


var called=false;
var timeout=setTimeout(function(){
called=true;
f();
},10);
_reactNative.InteractionManager.runAfterInteractions(function(){
if(called)return;
clearTimeout(timeout);
f();
});
}});
//# sourceMappingURL=interactionManager.js.map