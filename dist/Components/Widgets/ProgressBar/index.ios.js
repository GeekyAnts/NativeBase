
'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _NativeBaseComponent2=require('../../Base/NativeBaseComponent');var _NativeBaseComponent3=_interopRequireDefault(_NativeBaseComponent2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var



ProgressBarNB=function(_NativeBaseComponent){_inherits(ProgressBarNB,_NativeBaseComponent);function ProgressBarNB(){_classCallCheck(this,ProgressBarNB);return _possibleConstructorReturn(this,(ProgressBarNB.__proto__||Object.getPrototypeOf(ProgressBarNB)).apply(this,arguments));}_createClass(ProgressBarNB,[{key:'render',value:function render()



{var _this2=this;
return(
_react2.default.createElement(_reactNative.ProgressViewIOS,{ref:function ref(c){return _this2._root=c;},progress:this.props.progress?this.props.progress/100:0.5,
progressTintColor:this.props.color?this.props.color:
this.props.inverse?this.getTheme().inverseProgressColor:
this.getTheme().defaultProgressColor}));

}}]);return ProgressBarNB;}(_NativeBaseComponent3.default);exports.default=ProgressBarNB;
//# sourceMappingURL=index.ios.js.map