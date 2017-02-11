Object.defineProperty(exports,"__esModule",{value:true});var _reactNative=require('react-native');
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);

var _platform=require('./../variables/platform');var _platform2=_interopRequireDefault(_platform);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=

function(){var variables=arguments.length>0&&arguments[0]!==undefined?arguments[0]:_platform2.default;
var theme={
'.bordered':{
'.noTopBorder':{
borderTopWidth:0},

'.noBottomBorder':{
borderBottomWidth:0},

height:35,
paddingVertical:variables.listItemPadding+1,
borderBottomWidth:variables.borderWidth,
borderTopWidth:variables.borderWidth,
borderColor:variables.listBorderColor},

'NativeBase.Text':{
fontSize:variables.tabBarTextSize},

'.noTopBorder':{
borderTopWidth:0},

'.noBottomBorder':{
borderBottomWidth:0},

height:38,
backgroundColor:'#F0EFF5',
flex:1,
justifyContent:'center',
paddingLeft:variables.listItemPadding+5};


return theme;
};
//# sourceMappingURL=Separator.js.map