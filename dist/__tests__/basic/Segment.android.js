var _jsxFileName="__tests__\\basic\\Segment.android.js";require("react-native");
var _react=require("react");var _react2=_interopRequireDefault(_react);
var _reactTestRenderer=require("react-test-renderer");var _reactTestRenderer2=_interopRequireDefault(_reactTestRenderer);
var _Container=require("./../../src/basic/Container");
var _Header=require("./../../src/basic/Header");
var _Left=require("./../../src/basic/Left");
var _Button=require("./../../src/basic/Button");
var _Icon=require("./../../src/basic/Icon");
var _Body=require("./../../src/basic/Body");
var _Right=require("./../../src/basic/Right");
var _Text=require("./../../src/basic/Text");
var _Segment=require("./../../src/basic/Segment");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}



jest.mock("Platform",function(){
var Platform=require.requireActual("Platform");
Platform.OS="android";
return Platform;
});

it("renders Segments inside Header",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Container.Container,{__source:{fileName:_jsxFileName,lineNumber:25}},
_react2.default.createElement(_Header.Header,{hasSegment:true,__source:{fileName:_jsxFileName,lineNumber:26}},
_react2.default.createElement(_Left.Left,{__source:{fileName:_jsxFileName,lineNumber:27}},
_react2.default.createElement(_Button.Button,{transparent:true,__source:{fileName:_jsxFileName,lineNumber:28}},
_react2.default.createElement(_Icon.Icon,{name:"arrow-back",__source:{fileName:_jsxFileName,lineNumber:29}}))),


_react2.default.createElement(_Body.Body,{__source:{fileName:_jsxFileName,lineNumber:32}},
_react2.default.createElement(_Segment.Segment,{__source:{fileName:_jsxFileName,lineNumber:33}},
_react2.default.createElement(_Button.Button,{active:true,first:true,__source:{fileName:_jsxFileName,lineNumber:34}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:35}},"Puppies")),

_react2.default.createElement(_Button.Button,{last:true,active:false,__source:{fileName:_jsxFileName,lineNumber:37}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:38}},"Cubs")))),



_react2.default.createElement(_Right.Right,{__source:{fileName:_jsxFileName,lineNumber:42}},
_react2.default.createElement(_Button.Button,{transparent:true,__source:{fileName:_jsxFileName,lineNumber:43}},
_react2.default.createElement(_Icon.Icon,{name:"search",__source:{fileName:_jsxFileName,lineNumber:44}})))))).





toJSON();
expect(tree).toMatchSnapshot();
});

it("renders Segments outside Header",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Container.Container,{__source:{fileName:_jsxFileName,lineNumber:57}},
_react2.default.createElement(_Header.Header,{hasSegment:true,__source:{fileName:_jsxFileName,lineNumber:58}}),
_react2.default.createElement(_Segment.Segment,{__source:{fileName:_jsxFileName,lineNumber:59}},
_react2.default.createElement(_Button.Button,{first:true,active:true,__source:{fileName:_jsxFileName,lineNumber:60}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:61}},"Puppies")),

_react2.default.createElement(_Button.Button,{active:false,__source:{fileName:_jsxFileName,lineNumber:63}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:64}},"Kittens")),

_react2.default.createElement(_Button.Button,{last:true,active:false,__source:{fileName:_jsxFileName,lineNumber:66}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:67}},"Cubs"))))).




toJSON();
expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=Segment.android.js.map