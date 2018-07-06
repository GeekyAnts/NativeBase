var _jsxFileName="__tests__\\basic\\Radio.android.js";require("react-native");
var _react=require("react");var _react2=_interopRequireDefault(_react);
var _reactTestRenderer=require("react-test-renderer");var _reactTestRenderer2=_interopRequireDefault(_reactTestRenderer);
var _Content=require("./../../src/basic/Content");
var _ListItem=require("./../../src/basic/ListItem");
var _Left=require("./../../src/basic/Left");
var _Right=require("./../../src/basic/Right");
var _Text=require("./../../src/basic/Text");
var _Radio=require("./../../src/basic/Radio");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}



jest.mock("Platform",function(){
var Platform=require.requireActual("Platform");
Platform.OS="android";
return Platform;
});

it("renders default radio",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Content.Content,{__source:{fileName:_jsxFileName,lineNumber:22}},
_react2.default.createElement(_ListItem.ListItem,{selected:true,__source:{fileName:_jsxFileName,lineNumber:23}},
_react2.default.createElement(_Left.Left,{__source:{fileName:_jsxFileName,lineNumber:24}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:25}},"Lunch Break")),

_react2.default.createElement(_Right.Right,{__source:{fileName:_jsxFileName,lineNumber:27}},
_react2.default.createElement(_Radio.Radio,{selected:true,__source:{fileName:_jsxFileName,lineNumber:28}}))),


_react2.default.createElement(_ListItem.ListItem,{selected:false,__source:{fileName:_jsxFileName,lineNumber:31}},
_react2.default.createElement(_Left.Left,{__source:{fileName:_jsxFileName,lineNumber:32}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:33}},"Daily Stand Up")),

_react2.default.createElement(_Right.Right,{__source:{fileName:_jsxFileName,lineNumber:35}},
_react2.default.createElement(_Radio.Radio,{selected:false,__source:{fileName:_jsxFileName,lineNumber:36}}))))).




toJSON();
expect(tree).toMatchSnapshot();
});

it("renders custom radio",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Content.Content,{__source:{fileName:_jsxFileName,lineNumber:48}},
_react2.default.createElement(_ListItem.ListItem,{selected:true,__source:{fileName:_jsxFileName,lineNumber:49}},
_react2.default.createElement(_Left.Left,{__source:{fileName:_jsxFileName,lineNumber:50}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:51}},"Lunch Break")),

_react2.default.createElement(_Right.Right,{__source:{fileName:_jsxFileName,lineNumber:53}},
_react2.default.createElement(_Radio.Radio,{
selected:true,
color:"#f0ad4e",
selectedColor:"#5cb85c",__source:{fileName:_jsxFileName,lineNumber:54}}))),



_react2.default.createElement(_ListItem.ListItem,{selected:false,__source:{fileName:_jsxFileName,lineNumber:61}},
_react2.default.createElement(_Left.Left,{__source:{fileName:_jsxFileName,lineNumber:62}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:63}},"Daily Stand Up")),

_react2.default.createElement(_Right.Right,{__source:{fileName:_jsxFileName,lineNumber:65}},
_react2.default.createElement(_Radio.Radio,{
selected:false,
color:"#f0ad4e",
selectedColor:"#5cb85c",__source:{fileName:_jsxFileName,lineNumber:66}}))))).





toJSON();
expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=Radio.android.js.map