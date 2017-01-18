Object.defineProperty(exports,"__esModule",{value:true});var _reactNative=require('react-native');
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);

var _variables=require('./variables');var _variables2=_interopRequireDefault(_variables);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=

function(){var variables=arguments.length>0&&arguments[0]!==undefined?arguments[0]:_variables2.default;
var cardItemTheme={
'NativeBase.Left':{
'NativeBase.Body':{
'NativeBase.Text':{
'.note':{
color:variables.listNoteColor,
fontWeight:'200',
marginRight:20},

fontWeight:'600'},

flex:1,
marginLeft:10,
alignItems:null},

'NativeBase.Icon':{
fontSize:variables.iconFontSize},

'NativeBase.IconNB':{
fontSize:variables.iconFontSize},

'NativeBase.Text':{
marginLeft:10,
alignSelf:'center'},

flex:1,
flexDirection:'row',
alignItems:'center'},

'.cardBody':{
'NativeBase.Text':{
marginTop:5}},


'NativeBase.Body':{
'NativeBase.Text':{
'.note':{
color:variables.listNoteColor,
fontWeight:'200',
marginRight:20},

lineHeight:20},

flex:1,
alignItems:'flex-start'},

'NativeBase.Right':{
'NativeBase.Badge':{
alignSelf:null},

'NativeBase.Button':{
alignSelf:null},

'NativeBase.Icon':{
alignSelf:null},

'NativeBase.IconNB':{
alignSelf:null},

'NativeBase.Text':{
alignSelf:null},

'NativeBase.Thumbnail':{
alignSelf:null},

'NativeBase.Image':{
alignSelf:null},

'NativeBase.Radio':{
alignSelf:null},

'NativeBase.Checkbox':{
alignSelf:null},

'NativeBase.Switch':{
alignSelf:null}},


'.header':{
'NativeBase.Text':{
fontSize:17,
fontWeight:'600'},

borderBottomWidth:null},

'.footer':{
'NativeBase.Text':{
fontSize:17,
fontWeight:'600'}},


'NativeBase.Text':{
'.note':{
color:variables.listNoteColor,
fontWeight:'200'},

fontWeight:'500'},

padding:variables.listItemPadding,
borderBottomWidth:variables.borderWidth,
backgroundColor:variables.listBg,
borderColor:variables.listBorderColor};


return cardItemTheme;
};
//# sourceMappingURL=CardItem.js.map