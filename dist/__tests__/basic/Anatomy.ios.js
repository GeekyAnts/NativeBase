var _jsxFileName="__tests__\\basic\\Anatomy.ios.js";require("react-native");
var _react=require("react");var _react2=_interopRequireDefault(_react);
var _reactTestRenderer=require("react-test-renderer");var _reactTestRenderer2=_interopRequireDefault(_reactTestRenderer);
var _Container=require("./../../src/basic/Container");
var _Header=require("./../../src/basic/Header");
var _Left=require("./../../src/basic/Left");
var _Button=require("./../../src/basic/Button");
var _Icon=require("./../../src/basic/Icon");
var _Body=require("./../../src/basic/Body");
var _Title=require("./../../src/basic/Title");
var _Right=require("./../../src/basic/Right");
var _Content=require("./../../src/basic/Content");
var _Text=require("./../../src/basic/Text");
var _Footer=require("./../../src/basic/Footer");
var _FooterTab=require("./../../src/basic/FooterTab");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}



jest.mock("Platform",function(){
var Platform=require.requireActual("Platform");
Platform.OS="ios";
return Platform;
});

it("renders anatomy",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Container.Container,{__source:{fileName:_jsxFileName,lineNumber:28}},
_react2.default.createElement(_Header.Header,{__source:{fileName:_jsxFileName,lineNumber:29}},
_react2.default.createElement(_Left.Left,{__source:{fileName:_jsxFileName,lineNumber:30}},
_react2.default.createElement(_Button.Button,{transparent:true,__source:{fileName:_jsxFileName,lineNumber:31}},
_react2.default.createElement(_Icon.Icon,{name:"ios-menu",__source:{fileName:_jsxFileName,lineNumber:32}}))),


_react2.default.createElement(_Body.Body,{__source:{fileName:_jsxFileName,lineNumber:35}},
_react2.default.createElement(_Title.Title,{__source:{fileName:_jsxFileName,lineNumber:36}},"Header")),

_react2.default.createElement(_Right.Right,{__source:{fileName:_jsxFileName,lineNumber:38}})),


_react2.default.createElement(_Content.Content,{padder:true,__source:{fileName:_jsxFileName,lineNumber:41}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:42}},"Content goes here")),


_react2.default.createElement(_Footer.Footer,{__source:{fileName:_jsxFileName,lineNumber:45}},
_react2.default.createElement(_FooterTab.FooterTab,{__source:{fileName:_jsxFileName,lineNumber:46}},
_react2.default.createElement(_Button.Button,{active:true,full:true,__source:{fileName:_jsxFileName,lineNumber:47}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:48}},"Footer")))))).





toJSON();
expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=Anatomy.ios.js.map