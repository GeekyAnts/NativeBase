Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _reactNative=require('react-native');
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);
var _Header=require('./Header');var _Header2=_interopRequireDefault(_Header);
var _Container=require('./Container');var _Container2=_interopRequireDefault(_Container);
var _Content=require('./Content');var _Content2=_interopRequireDefault(_Content);
var _Button=require('./Button');var _Button2=_interopRequireDefault(_Button);
var _Title=require('./Title');var _Title2=_interopRequireDefault(_Title);
var _InputGroup=require('./InputGroup');var _InputGroup2=_interopRequireDefault(_InputGroup);
var _Badge=require('./Badge');var _Badge2=_interopRequireDefault(_Badge);
var _CheckBox=require('./CheckBox');var _CheckBox2=_interopRequireDefault(_CheckBox);
var _Card=require('./Card');var _Card2=_interopRequireDefault(_Card);
var _Radio=require('./Radio');var _Radio2=_interopRequireDefault(_Radio);
var _H=require('./H3');var _H2=_interopRequireDefault(_H);
var _H3=require('./H2');var _H4=_interopRequireDefault(_H3);
var _H5=require('./H1');var _H6=_interopRequireDefault(_H5);
var _Footer=require('./Footer');var _Footer2=_interopRequireDefault(_Footer);
var _FooterTab=require('./FooterTab');var _FooterTab2=_interopRequireDefault(_FooterTab);
var _Fab=require('./Fab');var _Fab2=_interopRequireDefault(_Fab);
var _Item=require('./Item');var _Item2=_interopRequireDefault(_Item);
var _Label=require('./Label');var _Label2=_interopRequireDefault(_Label);
var _Textarea=require('./Textarea');var _Textarea2=_interopRequireDefault(_Textarea);
var _Text=require('./Text');var _Text2=_interopRequireDefault(_Text);
var _Toast=require('./Toast');var _Toast2=_interopRequireDefault(_Toast);
var _Tab=require('./Tab');var _Tab2=_interopRequireDefault(_Tab);
var _TabBar=require('./TabBar');var _TabBar2=_interopRequireDefault(_TabBar);
var _TabContainer=require('./TabContainer');var _TabContainer2=_interopRequireDefault(_TabContainer);
var _View=require('./View');var _View2=_interopRequireDefault(_View);
var _TabHeading=require('./TabHeading');var _TabHeading2=_interopRequireDefault(_TabHeading);
var _Icon=require('./Icon');var _Icon2=_interopRequireDefault(_Icon);
var _Input=require('./Input');var _Input2=_interopRequireDefault(_Input);
var _Segment=require('./Segment');var _Segment2=_interopRequireDefault(_Segment);
var _Spinner=require('./Spinner');var _Spinner2=_interopRequireDefault(_Spinner);
var _CardItem=require('./CardItem');var _CardItem2=_interopRequireDefault(_CardItem);
var _ListItem=require('./ListItem');var _ListItem2=_interopRequireDefault(_ListItem);
var _Form=require('./Form');var _Form2=_interopRequireDefault(_Form);
var _Separator=require('./Separator');var _Separator2=_interopRequireDefault(_Separator);
var _platform=require('./../variables/platform');var _platform2=_interopRequireDefault(_platform);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=

function(){var variables=arguments.length>0&&arguments[0]!==undefined?arguments[0]:_platform2.default;
var theme={
variables:variables,
'NativeBase.Left':{
flex:1,
alignSelf:'center',
alignItems:'flex-start'},

'NativeBase.Right':{
'NativeBase.Button':{
alignSelf:null},

flex:1,
alignSelf:'center',
alignItems:'flex-end'},

'NativeBase.Body':{
flex:1,
alignItems:'center',
alignSelf:'center'},


'NativeBase.Header':_extends({},
(0,_Header2.default)(variables)),


'NativeBase.Button':_extends({},
(0,_Button2.default)(variables)),


'NativeBase.Title':_extends({},
(0,_Title2.default)(variables)),


'NativeBase.InputGroup':_extends({},
(0,_InputGroup2.default)(variables)),


'NativeBase.Input':_extends({},
(0,_Input2.default)(variables)),


'NativeBase.Badge':_extends({},
(0,_Badge2.default)(variables)),


'NativeBase.CheckBox':_extends({},
(0,_CheckBox2.default)(variables)),


'NativeBase.Radio':_extends({},
(0,_Radio2.default)(variables)),


'NativeBase.Card':_extends({},
(0,_Card2.default)()),


'NativeBase.CardItem':_extends({},
(0,_CardItem2.default)(variables),{
'.cardBody':{
padding:-5,
'NativeBase.Text':{
marginTop:5}},


flexDirection:'row',
alignItems:'center'}),


'NativeBase.CardItem1':_extends({},
(0,_CardItem2.default)(variables)),


'NativeBase.Toast':_extends({},
(0,_Toast2.default)(variables)),


'NativeBase.H1':_extends({},
(0,_H6.default)(variables)),

'NativeBase.H2':_extends({},
(0,_H4.default)(variables)),

'NativeBase.H3':_extends({},
(0,_H2.default)(variables)),

'NativeBase.Form':_extends({},
(0,_Form2.default)(variables)),


'NativeBase.Container':_extends({},
(0,_Container2.default)(variables)),

'NativeBase.Content':_extends({},
(0,_Content2.default)(variables)),



'NativeBase.Footer':_extends({},
(0,_Footer2.default)(variables)),


'NativeBase.Tabs':{
flex:1},


'NativeBase.FooterTab':_extends({},
(0,_FooterTab2.default)(variables)),


'NativeBase.ListItem':_extends({},
(0,_ListItem2.default)(variables),{
'NativeBase.CheckBox':{
marginLeft:-10,
marginRight:10},

'NativeBase.Text':{
'.note':{
color:variables.listNoteColor,
fontWeight:'200'},

alignSelf:'center'}}),



'NativeBase.ListItem1':_extends({},
(0,_ListItem2.default)(variables)),


'NativeBase.Icon':_extends({},
(0,_Icon2.default)(variables)),

'NativeBase.IconNB':_extends({},
(0,_Icon2.default)(variables)),

'NativeBase.Text':_extends({},
(0,_Text2.default)(variables)),

'NativeBase.Spinner':_extends({},
(0,_Spinner2.default)(variables)),


'NativeBase.Fab':_extends({},
(0,_Fab2.default)(variables)),


'NativeBase.Item':_extends({},
(0,_Item2.default)(variables)),


'NativeBase.Label':_extends({},
(0,_Label2.default)(variables)),


'NativeBase.Textarea':_extends({},
(0,_Textarea2.default)(variables)),


'NativeBase.PickerNB':{
'NativeBase.Button':{
'NativeBase.Text':{}}},




'NativeBase.Tab':_extends({},
(0,_Tab2.default)(variables)),


'NativeBase.Segment':_extends({},
(0,_Segment2.default)(variables)),


'NativeBase.STabs':{
flex:1},


'NativeBase.TabBar':_extends({},
(0,_TabBar2.default)(variables)),

'NativeBase.ViewNB':_extends({},
(0,_View2.default)(variables)),

'NativeBase.TabHeading':_extends({},
(0,_TabHeading2.default)(variables)),

'NativeBase.TabContainer':_extends({},
(0,_TabContainer2.default)(variables)),

'NativeBase.Switch':{
marginVertical:-5},

'NativeBase.Separator':_extends({},
(0,_Separator2.default)(variables)),

'NativeBase.Tabs':{},

'NativeBase.Thumbnail':{
'.square':{
borderRadius:0},

'.small':{
width:36,
height:36,
borderRadius:18},

'.large':{
width:80,
height:80,
borderRadius:40},

width:56,
height:56,
borderRadius:28}};




var cssifyTheme=function cssifyTheme(grandparent,parent,parentKey){
_lodash2.default.forEach(parent,function(style,styleName){


if(styleName.indexOf('.')===0&&parentKey&&parentKey.indexOf('.')===0){
if(grandparent){
if(!grandparent[styleName]){
grandparent[styleName]={};
}else{
grandparent[styleName][parentKey]=style;
}
}
}
if(style&&typeof style==='object'){
cssifyTheme(parent,style,styleName);
}
});
};

cssifyTheme(null,theme,null);

return theme;
};
//# sourceMappingURL=index.js.map