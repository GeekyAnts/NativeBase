var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var React=require("react");var

StaticContainer=function(_React$Component){_inherits(StaticContainer,_React$Component);function StaticContainer(){_classCallCheck(this,StaticContainer);return _possibleConstructorReturn(this,(StaticContainer.__proto__||Object.getPrototypeOf(StaticContainer)).apply(this,arguments));}_createClass(StaticContainer,[{key:"shouldComponentUpdate",value:function shouldComponentUpdate(
nextProps){
return!!nextProps.shouldUpdate;
}},{key:"render",value:function render()

{
var child=this.props.children;
if(child===null||child===false){
return null;
}
return React.Children.only(child);
}}]);return StaticContainer;}(React.Component);


module.exports=StaticContainer;
//# sourceMappingURL=StaticContainer.js.map