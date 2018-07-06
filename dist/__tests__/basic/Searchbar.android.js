var _jsxFileName="__tests__\\basic\\Searchbar.android.js";require("react-native");
var _react=require("react");var _react2=_interopRequireDefault(_react);
var _reactTestRenderer=require("react-test-renderer");var _reactTestRenderer2=_interopRequireDefault(_reactTestRenderer);
var _Container=require("./../../src/basic/Container");
var _Header=require("./../../src/basic/Header");
var _Item=require("./../../src/basic/Item");
var _Icon=require("./../../src/basic/Icon");
var _Input=require("./../../src/basic/Input");
var _Button=require("./../../src/basic/Button");
var _Text=require("./../../src/basic/Text");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}



jest.mock("Platform",function(){
var Platform=require.requireActual("Platform");
Platform.OS="android";
return Platform;
});

it("renders searchbar",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Container.Container,{__source:{fileName:_jsxFileName,lineNumber:23}},
_react2.default.createElement(_Header.Header,{searchBar:true,rounded:true,__source:{fileName:_jsxFileName,lineNumber:24}},
_react2.default.createElement(_Item.Item,{__source:{fileName:_jsxFileName,lineNumber:25}},
_react2.default.createElement(_Icon.Icon,{active:true,name:"search",__source:{fileName:_jsxFileName,lineNumber:26}}),
_react2.default.createElement(_Input.Input,{placeholder:"Search",__source:{fileName:_jsxFileName,lineNumber:27}}),
_react2.default.createElement(_Icon.Icon,{active:true,name:"people",__source:{fileName:_jsxFileName,lineNumber:28}})),

_react2.default.createElement(_Button.Button,{transparent:true,__source:{fileName:_jsxFileName,lineNumber:30}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:31}},"Search"))))).




toJSON();
expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=Searchbar.android.js.map