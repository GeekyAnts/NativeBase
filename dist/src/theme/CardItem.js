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
fontWeight:'400',
marginRight:20}},


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

'NativeBase.Button':{
'.transparent':{
'NativeBase.Text':{
fontSize:variables.DefaultFontSize-4,
color:variables.sTabBarActiveTextColor},

'NativeBase.Icon':{
fontSize:variables.iconFontSize-10,
color:variables.sTabBarActiveTextColor,
marginHorizontal:null,
paddingRight:variables.listItemPadding-5},

'NativeBase.IconNB':{
fontSize:variables.iconFontSize-10,
color:variables.sTabBarActiveTextColor},

paddingVertical:null,
paddingHorizontal:null,
paddingRight:variables.listItemPadding+5}},


flex:1,
flexDirection:'row',
alignItems:'center'},


'.content':{
'NativeBase.Text':{
color:_reactNative.Platform.OS==='ios'?'#555':'#222',
fontSize:variables.DefaultFontSize-3}},


'.cardBody':{
'NativeBase.Text':{
marginTop:5}},


'NativeBase.Body':{
'NativeBase.Text':{
'.note':{
color:variables.listNoteColor,
fontWeight:'200',
marginRight:20},

lineHeight:20,
fontSize:variables.DefaultFontSize-2},

'NativeBase.Button':{
'.transparent':{
'NativeBase.Text':{
fontSize:variables.DefaultFontSize-4,
color:variables.sTabBarActiveTextColor},

'NativeBase.Icon':{
fontSize:variables.iconFontSize-10,
color:variables.sTabBarActiveTextColor,
marginHorizontal:null,
paddingRight:variables.listItemPadding-5},

'NativeBase.IconNB':{
fontSize:variables.iconFontSize-10,
color:variables.sTabBarActiveTextColor},

paddingVertical:null,
paddingHorizontal:null,
paddingRight:variables.listItemPadding+5,
alignSelf:'stretch'}},


flex:1,
alignSelf:'stretch',
alignItems:'flex-start'},

'NativeBase.Right':{
'NativeBase.Badge':{
alignSelf:null},

'NativeBase.Button':{
'.transparent':{
'NativeBase.Text':{
fontSize:variables.DefaultFontSize-4,
color:variables.sTabBarActiveTextColor},

'NativeBase.Icon':{
fontSize:variables.iconFontSize-10,
color:variables.sTabBarActiveTextColor,
marginHorizontal:null,
paddingRight:variables.listItemPadding-5},

'NativeBase.IconNB':{
fontSize:variables.iconFontSize-10,
color:variables.sTabBarActiveTextColor},

paddingVertical:null,
paddingHorizontal:null},

alignSelf:null},

'NativeBase.Icon':{
alignSelf:null,
fontSize:variables.iconFontSize-8,
color:variables.cardBorderColor},

'NativeBase.IconNB':{
alignSelf:null,
fontSize:variables.iconFontSize-8,
color:variables.cardBorderColor},

'NativeBase.Text':{
fontSize:variables.DefaultFontSize-2,
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
alignSelf:null},

flex:0.8},

'.header':{
'NativeBase.Text':{
fontSize:16,
fontWeight:_reactNative.Platform.OS==='ios'?'500':undefined},

'.bordered':{
'NativeBase.Text':{
color:variables.activeTab,
fontWeight:_reactNative.Platform.OS==='ios'?'500':undefined},

borderBottomWidth:_reactNative.Platform.OS==='ios'?variables.borderWidth:null},

borderBottomWidth:null,
paddingVertical:variables.listItemPadding+5},

'.footer':{
'NativeBase.Text':{
fontSize:16,
fontWeight:_reactNative.Platform.OS==='ios'?'500':undefined},

'.bordered':{
'NativeBase.Text':{
color:variables.activeTab,
fontWeight:'500'},

borderTopWidth:_reactNative.Platform.OS==='ios'?variables.borderWidth:null},

borderBottomWidth:null},

'NativeBase.Text':{
'.note':{
color:variables.listNoteColor,
fontWeight:'200'}},



'NativeBase.Icon':{
width:variables.iconFontSize+5,
fontSize:variables.iconFontSize-2},

'NativeBase.IconNB':{
width:variables.iconFontSize+5,
fontSize:variables.iconFontSize-2},


'.bordered':{
borderBottomWidth:variables.borderWidth,
borderColor:variables.cardBorderColor},

padding:variables.listItemPadding+5,
paddingVertical:variables.listItemPadding,
backgroundColor:variables.cardDefaultBg};


return cardItemTheme;
};
//# sourceMappingURL=CardItem.js.map