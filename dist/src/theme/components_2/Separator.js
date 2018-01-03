Object.defineProperty(exports,"__esModule",{value:true});var _platform=require('./../variables/platform');var _platform2=_interopRequireDefault(_platform);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=

function(){var variables=arguments.length>0&&arguments[0]!==undefined?arguments[0]:_platform2.default;
var theme={
'.group':{
height:50,
paddingVertical:variables.listItemPadding-8,
paddingTop:variables.listItemPadding+12,
'.bordered':{
height:50,
paddingVertical:variables.listItemPadding-8,
paddingTop:variables.listItemPadding+12}},


'.bordered':{
'.noTopBorder':{
borderTopWidth:0},

'.noBottomBorder':{
borderBottomWidth:0},

height:35,
paddingTop:variables.listItemPadding+2,
paddingBottom:variables.listItemPadding,
borderBottomWidth:variables.borderWidth,
borderTopWidth:variables.borderWidth,
borderColor:variables.listBorderColor},

'NativeBase.Text':{
fontSize:variables.tabBarTextSize-2,
color:'#777'},

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