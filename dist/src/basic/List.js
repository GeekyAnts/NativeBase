Object.defineProperty(exports,"__esModule",{value:true});exports.List=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');

var _theme=require('@shoutem/theme');
var _mapPropsToStyleNames=require('../Utils/mapPropsToStyleNames');var _mapPropsToStyleNames2=_interopRequireDefault(_mapPropsToStyleNames);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

List=function(_Component){_inherits(List,_Component);

function List(props){_classCallCheck(this,List);var _this=_possibleConstructorReturn(this,(List.__proto__||Object.getPrototypeOf(List)).call(this,
props));
if(props.dataArray&&props.renderRow){
var ds=new _reactNative.ListView.DataSource({rowHasChanged:function rowHasChanged(r1,r2){return r1!==r2;}});
_this.state={
dataSource:ds.cloneWithRows(props.dataArray)};

}else{
_this.state={};
}return _this;
}_createClass(List,[{key:'componentWillReceiveProps',value:function componentWillReceiveProps(
nextProps){
if(this.state.dataSource){
this.setState({
dataSource:this.state.dataSource.cloneWithRows(nextProps.dataArray)});

}
}},{key:'renderChildren',value:function renderChildren()
{
var childrenArray=_react2.default.Children.map(this.props.children,function(child){return child;});

return childrenArray;
}},{key:'render',value:function render()

{var _this2=this;
if(this.state.dataSource){
return(
_react2.default.createElement(_reactNative.ListView,_extends({},
this.props,{
ref:function ref(_ref){return _this2.root=_ref;},
enableEmptySections:true,
dataSource:this.state.dataSource,
renderRow:this.props.renderRow})));


}
return(
_react2.default.createElement(_reactNative.View,_extends({ref:function ref(c){return _this2._root=c;}},this.props),
this.renderChildren()));


}}]);return List;}(_react.Component);


var StyledList=(0,_theme.connectStyle)('NativeBase.List',{},_mapPropsToStyleNames2.default)(List);exports.


List=StyledList;
//# sourceMappingURL=List.js.map