Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _platform=require("./../variables/platform");var _platform2=_interopRequireDefault(_platform);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=

function(){var variables=arguments.length>0&&arguments[0]!==undefined?arguments[0]:_platform2.default;
var platform=variables.platform;
var transparentBtnCommon={
"NativeBase.Text":{
fontSize:variables.DefaultFontSize-4,
color:variables.sTabBarActiveTextColor},

"NativeBase.Icon":{
fontSize:variables.iconFontSize-10,
color:variables.sTabBarActiveTextColor,
marginHorizontal:null},

"NativeBase.IconNB":{
fontSize:variables.iconFontSize-10,
color:variables.sTabBarActiveTextColor},

paddingVertical:null,
paddingHorizontal:null};


var cardItemTheme={
"NativeBase.Left":{
"NativeBase.Body":{
"NativeBase.Text":{
".note":{
color:variables.listNoteColor,
fontWeight:"400",
marginRight:20}},


flex:1,
marginLeft:10,
alignItems:null},

"NativeBase.Icon":{
fontSize:variables.iconFontSize},

"NativeBase.IconNB":{
fontSize:variables.iconFontSize},

"NativeBase.Text":{
marginLeft:10,
alignSelf:"center"},

"NativeBase.Button":{
".transparent":_extends({},
transparentBtnCommon,{
paddingRight:variables.listItemPadding+5})},


flex:1,
flexDirection:"row",
alignItems:"center"},


".content":{
"NativeBase.Text":{
color:platform==="ios"?"#555":"#222",
fontSize:variables.DefaultFontSize-3}},


".cardBody":{
padding:-5,
"NativeBase.Text":{
marginTop:5}},


"NativeBase.Body":{
"NativeBase.Text":{
".note":{
color:variables.listNoteColor,
fontWeight:"200",
marginRight:20}},


"NativeBase.Button":{
".transparent":_extends({},
transparentBtnCommon,{
paddingRight:variables.listItemPadding+5,
alignSelf:"stretch"})},


flex:1,
alignSelf:"stretch",
alignItems:"flex-start"},

"NativeBase.Right":{
"NativeBase.Badge":{
alignSelf:null},

"NativeBase.Button":{
".transparent":_extends({},
transparentBtnCommon),

alignSelf:null},

"NativeBase.Icon":{
alignSelf:null,
fontSize:variables.iconFontSize-8,
color:variables.cardBorderColor},

"NativeBase.IconNB":{
alignSelf:null,
fontSize:variables.iconFontSize-8,
color:variables.cardBorderColor},

"NativeBase.Text":{
fontSize:variables.DefaultFontSize-2,
alignSelf:null},

"NativeBase.Thumbnail":{
alignSelf:null},

"NativeBase.Image":{
alignSelf:null},

"NativeBase.Radio":{
alignSelf:null},

"NativeBase.Checkbox":{
alignSelf:null},

"NativeBase.Switch":{
alignSelf:null},

flex:0.8},

".header":{
"NativeBase.Text":{
fontSize:16,
fontWeight:platform==="ios"?"600":"500"},

".bordered":{
"NativeBase.Text":{
color:variables.brandPrimary,
fontWeight:platform==="ios"?"600":"500"},

borderBottomWidth:platform==="ios"?variables.borderWidth:null},

borderBottomWidth:null,
paddingVertical:variables.listItemPadding+5},

".footer":{
"NativeBase.Text":{
fontSize:16,
fontWeight:platform==="ios"?"600":"500"},

".bordered":{
"NativeBase.Text":{
color:variables.brandPrimary,
fontWeight:platform==="ios"?"600":"500"},

borderTopWidth:platform==="ios"?variables.borderWidth:null},

borderBottomWidth:null},

"NativeBase.Text":{
".note":{
color:variables.listNoteColor,
fontWeight:"200"}},



"NativeBase.Icon":{
width:variables.iconFontSize+5,
fontSize:variables.iconFontSize-2},

"NativeBase.IconNB":{
width:variables.iconFontSize+5,
fontSize:variables.iconFontSize-2},


".bordered":{
borderBottomWidth:variables.borderWidth,
borderColor:variables.cardBorderColor},

flexDirection:"row",
alignItems:"center",
borderRadius:2,
padding:variables.listItemPadding+5,
paddingVertical:variables.listItemPadding,
backgroundColor:variables.cardDefaultBg};


return cardItemTheme;
};
//# sourceMappingURL=CardItem.js.map