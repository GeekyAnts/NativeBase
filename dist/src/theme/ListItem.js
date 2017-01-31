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

'.itemHeader':{
borderBottomWidth:variables.borderWidth,
marginLeft:null,
padding:variables.listItemPadding,
paddingLeft:variables.listItemPadding+5,
paddingTop:_reactNative.Platform.OS==='ios'?variables.listItemPadding+20:undefined,
paddingBottom:_reactNative.Platform.OS==='android'?variables.listItemPadding+20:undefined,
flexDirection:'row',
borderColor:variables.listBorderColor,
'NativeBase.Text':{
fontSize:14,
color:_reactNative.Platform.OS==='ios'?undefined:variables.listNoteColor}},


'.itemDivider':{
borderBottomWidth:null,
marginLeft:null,
padding:variables.listItemPadding,
paddingLeft:variables.listItemPadding+5,
backgroundColor:variables.listDividerBg,
flexDirection:'row',
borderColor:variables.listBorderColor},

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
width:variables.iconFontSize-10,
fontSize:variables.iconFontSize-10},

'NativeBase.IconNB':{
width:variables.iconFontSize-10,
fontSize:variables.iconFontSize-10},

'NativeBase.Text':{
marginLeft:10,
alignSelf:'center'},

flexDirection:'row'},

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
alignSelf:null,
height:24,
borderRadius:12,
paddingHorizontal:4,
'NativeBase.Text':{
backgroundColor:'transparent',
fontSize:variables.fontSizeBase-1}},


'NativeBase.Button':{
alignSelf:null,
'.transparent':{
'NativeBase.Text':{
color:variables.topTabBarActiveTextColor}}},



'NativeBase.Icon':{
alignSelf:null,
fontSize:variables.iconFontSize-8,
color:variables.listBorderColor},

'NativeBase.IconNB':{
alignSelf:null,
fontSize:variables.iconFontSize-8,
color:variables.listBorderColor},

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

padding:null,
flex:0.28},

'NativeBase.Text':{
'.note':{
color:variables.listNoteColor,
fontWeight:'200'},

alignSelf:null},

'.last':{
marginLeft:-(variables.listItemPadding+5),
paddingLeft:(variables.listItemPadding+5)*2,
top:1},


'.avatar':{
'NativeBase.Left':{
flex:0},

'NativeBase.Body':{
'NativeBase.Text':{
marginLeft:null},

flex:1,
paddingVertical:variables.listItemPadding,
borderBottomWidth:1,
borderColor:variables.listBorderColor,
marginLeft:variables.listItemPadding+5},

'NativeBase.Right':{
flex:0,
paddingVertical:variables.listItemPadding,
borderBottomWidth:1,
borderColor:variables.listBorderColor},

borderBottomWidth:null,
paddingVertical:null,
paddingRight:null},



'.thumbnail':{
'NativeBase.Left':{
flex:0},

'NativeBase.Body':{
'NativeBase.Text':{
marginLeft:null},

flex:1,
paddingVertical:variables.listItemPadding+5,
borderBottomWidth:1,
borderColor:variables.listBorderColor,
marginLeft:variables.listItemPadding+5},

'NativeBase.Right':{
'NativeBase.Button':{
'.transparent':{
'NativeBase.Text':{
fontSize:variables.listNoteSize}}},



flex:0,
paddingRight:variables.listItemPadding+5,
paddingVertical:variables.listItemPadding+5,
borderBottomWidth:1,
borderColor:variables.listBorderColor},

borderBottomWidth:null,
paddingVertical:null,
paddingRight:null},

'.icon':{
'.last':{
'NativeBase.Body':{
borderBottomWidth:null},

'NativeBase.Right':{
borderBottomWidth:null},

borderBottomWidth:1,
borderColor:variables.listBorderColor},

'NativeBase.Left':{
'NativeBase.Button':{
'NativeBase.IconNB':{
marginHorizontal:null,
fontSize:variables.iconFontSize-5},

alignSelf:'center',
height:32,
width:32,
borderRadius:8,
paddingVertical:null,
paddingHorizontal:null,
alignItems:'center',
justifyContent:'center'},

'NativeBase.Icon':{
width:variables.iconFontSize-5,
fontSize:variables.iconFontSize-2},

'NativeBase.IconNB':{
width:variables.iconFontSize-5,
fontSize:variables.iconFontSize-2},

paddingRight:variables.listItemPadding+5,
flex:0,
height:44,
justifyContent:'center',
alignItems:'center'},

'NativeBase.Body':{
'NativeBase.Text':{
marginLeft:null},

flex:1,
height:44,
justifyContent:'center',
borderBottomWidth:1,
borderColor:variables.listBorderColor},

'NativeBase.Right':{
'NativeBase.Text':{
textAlign:'center',
color:'#aaa'},

'NativeBase.IconNB':{
color:variables.listBorderColor,
fontSize:variables.iconFontSize-2,
alignSelf:'center',
paddingLeft:5,
paddingTop:3},

'NativeBase.Icon':{
color:variables.listBorderColor,
fontSize:variables.iconFontSize-2,
alignSelf:'center',
paddingLeft:5,
paddingTop:3},

flexDirection:'row',
alignItems:'center',
flex:1,
alignSelf:'center',
height:44,
justifyContent:'flex-end',
borderBottomWidth:1,
borderColor:variables.listBorderColor,
paddingRight:variables.listItemPadding+5},

borderBottomWidth:null,
paddingVertical:null,
paddingRight:null,
height:44,
justifyContent:'center'},

alignItems:'center',
flexDirection:'row',
paddingRight:variables.listItemPadding+5,
paddingVertical:variables.listItemPadding,
marginLeft:variables.listItemPadding+5,
borderBottomWidth:1,
backgroundColor:variables.listBg,
borderColor:variables.listBorderColor};



return listItemTheme;
};
//# sourceMappingURL=ListItem.js.map