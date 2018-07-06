var _jsxFileName="__tests__\\basic\\Spinner.android.js";require("react-native");
var _react=require("react");var _react2=_interopRequireDefault(_react);
var _reactTestRenderer=require("react-test-renderer");var _reactTestRenderer2=_interopRequireDefault(_reactTestRenderer);
var _Container=require("./../../src/basic/Container");
var _Spinner=require("./../../src/basic/Spinner");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}



jest.mock("Platform",function(){
var Platform=require.requireActual("Platform");
Platform.OS="android";
return Platform;
});

it("renders Spinner",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Container.Container,{__source:{fileName:_jsxFileName,lineNumber:18}},
_react2.default.createElement(_Spinner.Spinner,{__source:{fileName:_jsxFileName,lineNumber:19}}),
_react2.default.createElement(_Spinner.Spinner,{color:"red",__source:{fileName:_jsxFileName,lineNumber:20}}),
_react2.default.createElement(_Spinner.Spinner,{color:"green",__source:{fileName:_jsxFileName,lineNumber:21}}),
_react2.default.createElement(_Spinner.Spinner,{color:"blue",__source:{fileName:_jsxFileName,lineNumber:22}}))).


toJSON();
expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=Spinner.android.js.map