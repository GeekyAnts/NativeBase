var _jsxFileName="__tests__\\basic\\List.android.js";require("react-native");
var _react=require("react");var _react2=_interopRequireDefault(_react);
var _reactTestRenderer=require("react-test-renderer");var _reactTestRenderer2=_interopRequireDefault(_reactTestRenderer);
var _List=require("./../../src/basic/List");
var _ListItem=require("./../../src/basic/ListItem");
var _Left=require("./../../src/basic/Left");
var _Body=require("./../../src/basic/Body");
var _Right=require("./../../src/basic/Right");
var _Icon=require("./../../src/basic/Icon");
var _Text=require("./../../src/basic/Text");
var _Button=require("./../../src/basic/Button");
var _Switch=require("./../../src/basic/Switch");
var _Radio=require("./../../src/basic/Radio");
var _Badge=require("./../../src/basic/Badge");
var _Thumbnail=require("./../../src/basic/Thumbnail");
var _Separator=require("./../../src/basic/Separator");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}



var pratik=require("../assets/pratik.png");
var sanket=require("../assets/sanket.png");

jest.mock("Platform",function(){
var Platform=require.requireActual("Platform");
Platform.OS="android";
return Platform;
});

it("renders Basic List",function(){
var datas=[
"Simon Mignolet",
"Nathaniel Clyne",
"Dejan Lovren",
"Mama Sakho",
"Alberto Moreno",
"Emre Can",
"Joe Allen",
"Phil Coutinho"];

var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_List.List,{
dataArray:datas,
renderRow:function renderRow(data){return(
_react2.default.createElement(_ListItem.ListItem,{__source:{fileName:_jsxFileName,lineNumber:45}},
_react2.default.createElement(_Left.Left,{__source:{fileName:_jsxFileName,lineNumber:46}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:47}},data)),

_react2.default.createElement(_Right.Right,{__source:{fileName:_jsxFileName,lineNumber:49}},
_react2.default.createElement(_Icon.Icon,{name:"arrow-forward",__source:{fileName:_jsxFileName,lineNumber:50}}))));},__source:{fileName:_jsxFileName,lineNumber:42}})).





toJSON();
expect(tree).toMatchSnapshot();
});

it("renders ListItem selected",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_List.List,{__source:{fileName:_jsxFileName,lineNumber:63}},
_react2.default.createElement(_ListItem.ListItem,{selected:true,__source:{fileName:_jsxFileName,lineNumber:64}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:65}},"Caroline Aaron")),

_react2.default.createElement(_ListItem.ListItem,{__source:{fileName:_jsxFileName,lineNumber:67}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:68}},"Urbino Cendre")),

_react2.default.createElement(_ListItem.ListItem,{__source:{fileName:_jsxFileName,lineNumber:70}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:71}},"Lee Allen")))).



toJSON();
expect(tree).toMatchSnapshot();
});

it("renders ListItem itemDivider",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_List.List,{__source:{fileName:_jsxFileName,lineNumber:82}},
_react2.default.createElement(_ListItem.ListItem,{itemDivider:true,__source:{fileName:_jsxFileName,lineNumber:83}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:84}},"A")),

_react2.default.createElement(_ListItem.ListItem,{__source:{fileName:_jsxFileName,lineNumber:86}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:87}},"Aaron Bennet")),

_react2.default.createElement(_ListItem.ListItem,{__source:{fileName:_jsxFileName,lineNumber:89}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:90}},"Ali Connors")),

_react2.default.createElement(_ListItem.ListItem,{last:true,__source:{fileName:_jsxFileName,lineNumber:92}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:93}},"Angana Ghosh")),


_react2.default.createElement(_ListItem.ListItem,{itemDivider:true,__source:{fileName:_jsxFileName,lineNumber:96}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:97}},"B")),

_react2.default.createElement(_ListItem.ListItem,{__source:{fileName:_jsxFileName,lineNumber:99}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:100}},"Bradley Horowitz")),

_react2.default.createElement(_ListItem.ListItem,{__source:{fileName:_jsxFileName,lineNumber:102}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:103}},"Brian Swetland")),

_react2.default.createElement(_ListItem.ListItem,{last:true,__source:{fileName:_jsxFileName,lineNumber:105}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:106}},"Brittany Kelso")))).



toJSON();
expect(tree).toMatchSnapshot();
});

it("renders ListItem itemHeader",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_List.List,{__source:{fileName:_jsxFileName,lineNumber:117}},
_react2.default.createElement(_ListItem.ListItem,{itemHeader:true,first:true,__source:{fileName:_jsxFileName,lineNumber:118}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:119}},"COMEDY")),

_react2.default.createElement(_ListItem.ListItem,{__source:{fileName:_jsxFileName,lineNumber:121}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:122}},"Hangover")),

_react2.default.createElement(_ListItem.ListItem,{__source:{fileName:_jsxFileName,lineNumber:124}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:125}},"Horrible Bosses")),

_react2.default.createElement(_ListItem.ListItem,{last:true,__source:{fileName:_jsxFileName,lineNumber:127}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:128}},"Cop Out")),


_react2.default.createElement(_ListItem.ListItem,{itemHeader:true,__source:{fileName:_jsxFileName,lineNumber:131}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:132}},"HORROR")),

_react2.default.createElement(_ListItem.ListItem,{__source:{fileName:_jsxFileName,lineNumber:134}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:135}},"The Evil Dead")),

_react2.default.createElement(_ListItem.ListItem,{__source:{fileName:_jsxFileName,lineNumber:137}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:138}},"Residential Evil")),

_react2.default.createElement(_ListItem.ListItem,{last:true,__source:{fileName:_jsxFileName,lineNumber:140}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:141}},"Conjuring")))).



toJSON();
expect(tree).toMatchSnapshot();
});

it("renders ListItem icon",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_List.List,{__source:{fileName:_jsxFileName,lineNumber:152}},
_react2.default.createElement(_ListItem.ListItem,{icon:true,__source:{fileName:_jsxFileName,lineNumber:153}},
_react2.default.createElement(_Left.Left,{__source:{fileName:_jsxFileName,lineNumber:154}},
_react2.default.createElement(_Button.Button,{style:{backgroundColor:"#FF9501"},__source:{fileName:_jsxFileName,lineNumber:155}},
_react2.default.createElement(_Icon.Icon,{active:true,name:"plane",__source:{fileName:_jsxFileName,lineNumber:156}}))),


_react2.default.createElement(_Body.Body,{__source:{fileName:_jsxFileName,lineNumber:159}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:160}},"Airplane Mode")),

_react2.default.createElement(_Right.Right,{__source:{fileName:_jsxFileName,lineNumber:162}},
_react2.default.createElement(_Switch.Switch,{value:false,onTintColor:"#50B948",__source:{fileName:_jsxFileName,lineNumber:163}}))),


_react2.default.createElement(_ListItem.ListItem,{icon:true,__source:{fileName:_jsxFileName,lineNumber:166}},
_react2.default.createElement(_Left.Left,{__source:{fileName:_jsxFileName,lineNumber:167}},
_react2.default.createElement(_Button.Button,{style:{backgroundColor:"#007AFF"},__source:{fileName:_jsxFileName,lineNumber:168}},
_react2.default.createElement(_Icon.Icon,{active:true,name:"bluetooth",__source:{fileName:_jsxFileName,lineNumber:169}}))),


_react2.default.createElement(_Body.Body,{__source:{fileName:_jsxFileName,lineNumber:172}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:173}},"Bluetooth")),

_react2.default.createElement(_Right.Right,{__source:{fileName:_jsxFileName,lineNumber:175}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:176}},"On"),
_react2.default.createElement(_Icon.Icon,{active:true,name:"arrow-forward",__source:{fileName:_jsxFileName,lineNumber:177}}))),


_react2.default.createElement(_ListItem.ListItem,{icon:true,__source:{fileName:_jsxFileName,lineNumber:180}},
_react2.default.createElement(_Left.Left,{__source:{fileName:_jsxFileName,lineNumber:181}},
_react2.default.createElement(_Button.Button,{style:{backgroundColor:"#4CDA64"},__source:{fileName:_jsxFileName,lineNumber:182}},
_react2.default.createElement(_Icon.Icon,{active:true,name:"phone-portrait",__source:{fileName:_jsxFileName,lineNumber:183}}))),


_react2.default.createElement(_Body.Body,{__source:{fileName:_jsxFileName,lineNumber:186}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:187}},"Mobile Data")),

_react2.default.createElement(_Right.Right,{__source:{fileName:_jsxFileName,lineNumber:189}},
_react2.default.createElement(_Radio.Radio,{selected:true,__source:{fileName:_jsxFileName,lineNumber:190}}))),


_react2.default.createElement(_ListItem.ListItem,{icon:true,__source:{fileName:_jsxFileName,lineNumber:193}},
_react2.default.createElement(_Left.Left,{__source:{fileName:_jsxFileName,lineNumber:194}},
_react2.default.createElement(_Button.Button,{style:{backgroundColor:"#FD3C2D"},__source:{fileName:_jsxFileName,lineNumber:195}},
_react2.default.createElement(_Icon.Icon,{active:true,name:"notifications",__source:{fileName:_jsxFileName,lineNumber:196}}))),


_react2.default.createElement(_Body.Body,{__source:{fileName:_jsxFileName,lineNumber:199}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:200}},"Notifications")),

_react2.default.createElement(_Right.Right,{__source:{fileName:_jsxFileName,lineNumber:202}},
_react2.default.createElement(_Icon.Icon,{active:true,name:"arrow-forward",__source:{fileName:_jsxFileName,lineNumber:203}}))),


_react2.default.createElement(_ListItem.ListItem,{icon:true,last:true,__source:{fileName:_jsxFileName,lineNumber:206}},
_react2.default.createElement(_Left.Left,{__source:{fileName:_jsxFileName,lineNumber:207}},
_react2.default.createElement(_Button.Button,{style:{backgroundColor:"#5855D6"},__source:{fileName:_jsxFileName,lineNumber:208}},
_react2.default.createElement(_Icon.Icon,{active:true,name:"moon",__source:{fileName:_jsxFileName,lineNumber:209}}))),


_react2.default.createElement(_Body.Body,{__source:{fileName:_jsxFileName,lineNumber:212}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:213}},"Do Not Disturb")),

_react2.default.createElement(_Right.Right,{__source:{fileName:_jsxFileName,lineNumber:215}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:216}},"Yes"))),


_react2.default.createElement(_ListItem.ListItem,{last:true,icon:true,__source:{fileName:_jsxFileName,lineNumber:219}},
_react2.default.createElement(_Left.Left,{__source:{fileName:_jsxFileName,lineNumber:220}},
_react2.default.createElement(_Button.Button,{style:{backgroundColor:"#8F8E93"},__source:{fileName:_jsxFileName,lineNumber:221}},
_react2.default.createElement(_Icon.Icon,{active:true,name:"cog",__source:{fileName:_jsxFileName,lineNumber:222}}))),


_react2.default.createElement(_Body.Body,{__source:{fileName:_jsxFileName,lineNumber:225}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:226}},"Software Update")),

_react2.default.createElement(_Right.Right,{__source:{fileName:_jsxFileName,lineNumber:228}},
_react2.default.createElement(_Badge.Badge,{style:{backgroundColor:"#FD3C2D"},__source:{fileName:_jsxFileName,lineNumber:229}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:230}},"2")))))).





toJSON();
expect(tree).toMatchSnapshot();
});

it("renders ListItem avatar",function(){
var datas=[
{
img:pratik,
text:"Kumar Pratik",
note:"Its time to build a difference . ."},

{
img:sanket,
text:"Kumar Sanket",
note:"One needs courage to be happy and smiling all time . . "}];


var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_List.List,{
dataArray:datas,
renderRow:function renderRow(data){return(
_react2.default.createElement(_ListItem.ListItem,{thumbnail:true,__source:{fileName:_jsxFileName,lineNumber:258}},
_react2.default.createElement(_Left.Left,{__source:{fileName:_jsxFileName,lineNumber:259}},
_react2.default.createElement(_Thumbnail.Thumbnail,{square:true,size:55,source:data.img,__source:{fileName:_jsxFileName,lineNumber:260}})),

_react2.default.createElement(_Body.Body,{__source:{fileName:_jsxFileName,lineNumber:262}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:263}},data.text),
_react2.default.createElement(_Text.Text,{numberOfLines:1,note:true,__source:{fileName:_jsxFileName,lineNumber:264}},
data.note)),


_react2.default.createElement(_Right.Right,{__source:{fileName:_jsxFileName,lineNumber:268}},
_react2.default.createElement(_Button.Button,{transparent:true,__source:{fileName:_jsxFileName,lineNumber:269}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:270}},"View")))));},__source:{fileName:_jsxFileName,lineNumber:255}})).






toJSON();
expect(tree).toMatchSnapshot();
});

it("renders ListItem thumbnail",function(){
var datas=[
{
img:pratik,
text:"Kumar Pratik",
note:"Its time to build a difference . ."},

{
img:sanket,
text:"Kumar Sanket",
note:"One needs courage to be happy and smiling all time . . "}];


var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_List.List,{
dataArray:datas,
renderRow:function renderRow(data){return(
_react2.default.createElement(_ListItem.ListItem,{thumbnail:true,__source:{fileName:_jsxFileName,lineNumber:299}},
_react2.default.createElement(_Left.Left,{__source:{fileName:_jsxFileName,lineNumber:300}},
_react2.default.createElement(_Thumbnail.Thumbnail,{square:true,size:55,source:data.img,__source:{fileName:_jsxFileName,lineNumber:301}})),

_react2.default.createElement(_Body.Body,{__source:{fileName:_jsxFileName,lineNumber:303}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:304}},data.text),
_react2.default.createElement(_Text.Text,{numberOfLines:1,note:true,__source:{fileName:_jsxFileName,lineNumber:305}},
data.note)),


_react2.default.createElement(_Right.Right,{__source:{fileName:_jsxFileName,lineNumber:309}},
_react2.default.createElement(_Button.Button,{transparent:true,__source:{fileName:_jsxFileName,lineNumber:310}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:311}},"View")))));},__source:{fileName:_jsxFileName,lineNumber:296}})).






toJSON();
expect(tree).toMatchSnapshot();
});

it("renders ListItem separator",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_List.List,{__source:{fileName:_jsxFileName,lineNumber:325}},
_react2.default.createElement(_Separator.Separator,{bordered:true,__source:{fileName:_jsxFileName,lineNumber:326}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:327}},"MIDFIELD")),

_react2.default.createElement(_ListItem.ListItem,{__source:{fileName:_jsxFileName,lineNumber:329}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:330}},"Caroline Aaron")),

_react2.default.createElement(_ListItem.ListItem,{__source:{fileName:_jsxFileName,lineNumber:332}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:333}},"Urbino Cendre")),

_react2.default.createElement(_ListItem.ListItem,{last:true,__source:{fileName:_jsxFileName,lineNumber:335}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:336}},"Lee Allen")),


_react2.default.createElement(_Separator.Separator,{bordered:true,__source:{fileName:_jsxFileName,lineNumber:339}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:340}},"MIDFIELD")),

_react2.default.createElement(_ListItem.ListItem,{__source:{fileName:_jsxFileName,lineNumber:342}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:343}},"Caroline Aaron")),

_react2.default.createElement(_ListItem.ListItem,{__source:{fileName:_jsxFileName,lineNumber:345}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:346}},"Urbino Cendre")),

_react2.default.createElement(_ListItem.ListItem,{last:true,__source:{fileName:_jsxFileName,lineNumber:348}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:349}},"Lee Allen")))).



toJSON();
expect(tree).toMatchSnapshot();
});

it("renders ListItem noIndent",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_List.List,{__source:{fileName:_jsxFileName,lineNumber:360}},
_react2.default.createElement(_ListItem.ListItem,{
noIndent:true,
style:{
backgroundColor:"#cde1f9"},__source:{fileName:_jsxFileName,lineNumber:361}},


_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:367}},"Caroline Aaron")),

_react2.default.createElement(_ListItem.ListItem,{__source:{fileName:_jsxFileName,lineNumber:369}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:370}},"Urbino Cendre")),

_react2.default.createElement(_ListItem.ListItem,{__source:{fileName:_jsxFileName,lineNumber:372}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:373}},"Lee Allen")))).



toJSON();
expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=List.android.js.map