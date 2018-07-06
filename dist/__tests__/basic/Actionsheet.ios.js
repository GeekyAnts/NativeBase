var _jsxFileName="__tests__\\basic\\Actionsheet.ios.js",_this=this;require("react-native");
var _react=require("react");var _react2=_interopRequireDefault(_react);
var _reactTestRenderer=require("react-test-renderer");var _reactTestRenderer2=_interopRequireDefault(_reactTestRenderer);
var _Button=require("./../../src/basic/Button");
var _Actionsheet=require("./../../src/basic/Actionsheet");
var _Text=require("./../../src/basic/Text");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var BUTTONS=["Option 0","Option 1","Option 2","Delete","Cancel"];
var DESTRUCTIVE_INDEX=3;
var CANCEL_INDEX=4;



jest.mock("Platform",function(){
var Platform=require.requireActual("Platform");
Platform.OS="ios";
return Platform;
});

it("renders ActionSheet",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Button.Button,{
onPress:function onPress(){return(
_Actionsheet.ActionSheet.show(
{
options:BUTTONS,
cancelButtonIndex:CANCEL_INDEX,
destructiveButtonIndex:DESTRUCTIVE_INDEX,
title:"Select an option"},

function(buttonIndex){
_this.setState({clicked:BUTTONS[buttonIndex]});
}));},__source:{fileName:_jsxFileName,lineNumber:23}},



_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:38}},"Actionsheet"))).


toJSON();
expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=Actionsheet.ios.js.map