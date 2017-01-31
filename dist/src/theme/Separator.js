Object.defineProperty(exports,"__esModule",{value:true});var _reactNative=require('react-native');
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);

var _variables=require('./variables');var _variables2=_interopRequireDefault(_variables);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=

function(){var variables=arguments.length>0&&arguments[0]!==undefined?arguments[0]:_variables2.default;
var theme={
'.bordered':{
height:null,
paddingVertical:variables.listItemPadding+1,
borderBottomWidth:1,
borderTopWidth:1,
borderColor:variables.listBorderColor},

'NativeBase.Text':{
fontSize:variables.tabBarTextSize},

height:38,
backgroundColor:'#f4f4f4',
flex:1,
justifyContent:'center',
paddingLeft:variables.listItemPadding+5};


return theme;
};
//# sourceMappingURL=Separator.js.map