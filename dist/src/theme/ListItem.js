Object.defineProperty(exports,"__esModule",{value:true});var _reactNative=require('react-native');
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);

var _variables=require('./variables');var _variables2=_interopRequireDefault(_variables);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=

function(){var variables=arguments.length>0&&arguments[0]!==undefined?arguments[0]:_variables2.default;
var listItemTheme={
'NativeBase.InputGroup':{
'NativeBase.Icon':{
paddingRight:5},

'NativeBase.IconNB':{
paddingRight:5},

'NativeBase.Input':{
paddingHorizontal:5},

flex:1,
borderWidth:null,
margin:-10,
borderBottomColor:'transparent'},

'NativeBase.CheckBox':{
marginLeft:-10},

'.itemDivider':{
borderBottomWidth:variables.borderWidth,
height:variables.listItemHeight,
marginLeft:null,
padding:variables.listItemPadding,
backgroundColor:variables.listDividerBg,
flexDirection:'row',
borderColor:variables.listBorderColor,
'NativeBase.Text':{
fontSize:16,
fontWeight:'600'}},


'.selected':{
'NativeBase.Left':{
'NativeBase.Text':{
color:variables.brandPrimary}}},



'NativeBase.Left':{
'NativeBase.Body':{
'NativeBase.Text':{
'.note':{
color:variables.listNoteColor,
fontWeight:'200'},

fontWeight:'600'},

marginLeft:10,
alignItems:null,
alignSelf:null},

'NativeBase.Icon':{
width:variables.iconFontSize,
fontSize:variables.iconFontSize,
lineHeight:_reactNative.Platform.OS==='ios'?34:undefined},

'NativeBase.IconNB':{
width:variables.iconFontSize,
fontSize:variables.iconFontSize,
lineHeight:_reactNative.Platform.OS==='ios'?34:undefined},

'NativeBase.Text':{
marginLeft:10,
alignSelf:'center'},

flexDirection:'row',
marginLeft:-variables.listItemPadding},

'NativeBase.Body':{
'NativeBase.Text':{
marginHorizontal:variables.listItemPadding,
'.note':{
color:variables.listNoteColor,
fontWeight:'200'}},


alignSelf:null,
alignItems:null},

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
'.note':{
color:variables.listNoteColor,
fontWeight:'200'},

alignSelf:null},

'NativeBase.Thumbnail':{
alignSelf:null},

'NativeBase.Image':{
alignSelf:null},

'NativeBase.Radio':{
alignSelf:null,
marginRight:10},

'NativeBase.Checkbox':{
alignSelf:null},

'NativeBase.Switch':{
alignSelf:null},

padding:null},

'NativeBase.Text':{
'.note':{
color:variables.listNoteColor,
fontWeight:'200'},

alignSelf:null},

flexDirection:'row',
padding:variables.listItemPadding,
marginLeft:variables.listItemPadding,
borderBottomWidth:variables.borderWidth,
backgroundColor:variables.listBg,
borderColor:variables.listBorderColor};



return listItemTheme;
};
//# sourceMappingURL=ListItem.js.map