var _jsxFileName="__tests__/basic/ListItem.ios.js";var _react=require("react");var _react2=_interopRequireDefault(_react);
require("react-native");
var _reactTestRenderer=require("react-test-renderer");var _reactTestRenderer2=_interopRequireDefault(_reactTestRenderer);
var _ListItem=require("../../src/basic/ListItem");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}



jest.mock("Platform",function(){
var Platform=require.requireActual("Platform");
Platform.OS="ios";
return Platform;
});

it("renders regular listItem",function(){
var tree=_reactTestRenderer2.default.create(_react2.default.createElement(_ListItem.ListItem,{__source:{fileName:_jsxFileName,lineNumber:15}},"This is ListItem")).toJSON();
expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=ListItem.ios.js.map