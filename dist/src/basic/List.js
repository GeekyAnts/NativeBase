Object.defineProperty(exports,"__esModule",{value:true});exports.List=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/basic/List.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _nativeBaseShoutemTheme=require('native-base-shoutem-theme');

var _SwipeRow=require('./SwipeRow');
var _mapPropsToStyleNames=require('../Utils/mapPropsToStyleNames');var _mapPropsToStyleNames2=_interopRequireDefault(_mapPropsToStyleNames);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

List=function(_Component){_inherits(List,_Component);













function List(props){_classCallCheck(this,List);var _this=_possibleConstructorReturn(this,(List.__proto__||Object.getPrototypeOf(List)).call(this,
props));
_this._rows={};
_this.openCellId=null;
if(props.dataArray&&props.renderRow){
var rowHasChanged=props.rowHasChanged||function(r1,r2){return r1!==r2;};
var ds=new _reactNative.ListView.DataSource({rowHasChanged:rowHasChanged});
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
}},{key:'setScrollEnabled',value:function setScrollEnabled(
enable){
this._listView.setNativeProps({scrollEnabled:enable});
}},{key:'safeCloseOpenRow',value:function safeCloseOpenRow()

{

if(this._rows[this.openCellId]._root){
this._rows[this.openCellId]._root.closeRow();
}
}},{key:'rowSwipeGestureBegan',value:function rowSwipeGestureBegan(

id){
if(this.props.closeOnRowBeginSwipe&&this.openCellId&&this.openCellId!==id){
this.safeCloseOpenRow();
}
}},{key:'onRowOpen',value:function onRowOpen(

secId,rowId,rowMap){
var cellIdentifier=''+secId+rowId;
if(this.openCellId&&this.openCellId!==cellIdentifier){
this.safeCloseOpenRow();
}
this.openCellId=cellIdentifier;
this.props.onRowOpen&&this.props.onRowOpen(secId,rowId,rowMap);
}},{key:'onRowPress',value:function onRowPress(

id){
if(this.openCellId){
if(this.props.closeOnRowPress){
this.safeCloseOpenRow();
this.openCellId=null;
}
}
}},{key:'closeRow',value:function closeRow(
id){
if(this.openCellId){
if(this.props.closeOnRowPress){
this.safeCloseOpenRow();
this.openCellId=null;
}
}
}},{key:'onScroll',value:function onScroll(

e){
if(this.openCellId){
if(this.props.closeOnScroll){
this.safeCloseOpenRow();
this.openCellId=null;
}
}
this.props.onScroll&&this.props.onScroll(e);
}},{key:'setRefs',value:function setRefs(

ref){
this._listView=ref;
this.props.listViewRef&&this.props.listViewRef(ref);
}},{key:'renderRow',value:function renderRow(

rowData,secId,rowId,rowMap){var _this2=this;
var previewRowId=
this.props.dataSource&&this.props.dataSource.getRowIDForFlatIndex(this.props.previewRowIndex||0);
return(
_react2.default.createElement(_SwipeRow.SwipeRow,{
list:true,
ref:function ref(row){return _this2._rows[''+secId+rowId]=row;},
swipeGestureBegan:function swipeGestureBegan(_){return _this2.rowSwipeGestureBegan(''+secId+rowId);},
onRowOpen:function onRowOpen(_){return _this2.onRowOpen(secId,rowId,_this2._rows);},
onRowDidOpen:function onRowDidOpen(_){return _this2.props.onRowDidOpen&&_this2.props.onRowDidOpen(secId,rowId,_this2._rows);},
onRowClose:function onRowClose(_){return _this2.props.onRowClose&&_this2.props.onRowClose(secId,rowId,_this2._rows);},
onRowDidClose:function onRowDidClose(_){return _this2.props.onRowDidClose&&_this2.props.onRowDidClose(secId,rowId,_this2._rows);},
onRowPress:function onRowPress(_){return _this2.onRowPress(''+secId+rowId);},
closeRow:function closeRow(_){return _this2.closeRow(''+secId+rowId);},
setScrollEnabled:function setScrollEnabled(enable){return _this2.setScrollEnabled(enable);},
leftOpenValue:this.props.leftOpenValue,
rightOpenValue:this.props.rightOpenValue,
closeOnRowPress:this.props.closeOnRowPress,
disableLeftSwipe:this.props.disableLeftSwipe,
disableRightSwipe:this.props.disableRightSwipe,
stopLeftSwipe:this.props.stopLeftSwipe,
stopRightSwipe:this.props.stopRightSwipe,
recalculateHiddenLayout:this.props.recalculateHiddenLayout,
style:this.props.swipeRowStyle,
preview:(this.props.previewFirstRow||this.props.previewRowIndex)&&rowId===previewRowId,
previewDuration:this.props.previewDuration,
previewOpenValue:this.props.previewOpenValue,
tension:this.props.tension,
friction:this.props.friction,
directionalDistanceChangeThreshold:this.props.directionalDistanceChangeThreshold,
swipeToOpenPercent:this.props.swipeToOpenPercent,
left:this.props.renderLeftHiddenRow(rowData,secId,rowId,this._rows),
right:this.props.renderRightHiddenRow(rowData,secId,rowId,this._rows),
body:this.props.renderRow(rowData,secId,rowId,this._rows),__source:{fileName:_jsxFileName,lineNumber:110}}));


}},{key:'render',value:function render()
{var _this3=this;
if(this.props.renderLeftHiddenRow||this.props.renderRightHiddenRow){
return(
_react2.default.createElement(_reactNative.ListView,_extends({},
this.props,{
ref:function ref(_ref){
_this3.setRefs(_ref);
_this3._root=_ref;
},
onScroll:function onScroll(e){return _this3.onScroll(e);},
renderRow:function renderRow(rowData,secId,rowId){return _this3.renderRow(rowData,secId,rowId,_this3._rows);},__source:{fileName:_jsxFileName,lineNumber:146}})));


}else if(this.state.dataSource){
return(
_react2.default.createElement(_reactNative.ListView,_extends({},
this.props,{
ref:function ref(_ref2){return _this3._root=_ref2;},
enableEmptySections:true,
dataSource:this.state.dataSource,
renderRow:this.props.renderRow,__source:{fileName:_jsxFileName,lineNumber:158}})));


}
return(
_react2.default.createElement(_reactNative.View,_extends({ref:function ref(c){return _this3._root=c;}},this.props,{__source:{fileName:_jsxFileName,lineNumber:168}}),
this.renderChildren()));


}}]);return List;}(_react.Component);List.defaultProps={leftOpenValue:0,rightOpenValue:0,closeOnRowBeginSwipe:false,closeOnScroll:true,closeOnRowPress:true,disableLeftSwipe:false,disableRightSwipe:false,recalculateHiddenLayout:false,previewFirstRow:false,directionalDistanceChangeThreshold:2,swipeToOpenPercent:50};

var StyledList=(0,_nativeBaseShoutemTheme.connectStyle)('NativeBase.List',{},_mapPropsToStyleNames2.default)(List);exports.

List=StyledList;
//# sourceMappingURL=List.js.map