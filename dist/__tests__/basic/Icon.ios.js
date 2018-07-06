var _jsxFileName="__tests__\\basic\\Icon.ios.js";require("react-native");
var _react=require("react");var _react2=_interopRequireDefault(_react);
var _reactTestRenderer=require("react-test-renderer");var _reactTestRenderer2=_interopRequireDefault(_reactTestRenderer);
var _Content=require("./../../src/basic/Content");
var _ListItem=require("./../../src/basic/ListItem");
var _Icon=require("./../../src/basic/Icon");
var _Text=require("./../../src/basic/Text");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}



jest.mock("Platform",function(){
var Platform=require.requireActual("Platform");
Platform.OS="ios";
return Platform;
});

it("renders Icon and Icons with icon family",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Content.Content,{padder:true,__source:{fileName:_jsxFileName,lineNumber:20}},
_react2.default.createElement(_ListItem.ListItem,{__source:{fileName:_jsxFileName,lineNumber:21}},
_react2.default.createElement(_Icon.Icon,{name:"logo-apple",style:{width:45,height:45},__source:{fileName:_jsxFileName,lineNumber:22}})),

_react2.default.createElement(_ListItem.ListItem,{__source:{fileName:_jsxFileName,lineNumber:24}},
_react2.default.createElement(_Text.Text,{style:{width:220},__source:{fileName:_jsxFileName,lineNumber:25}},"Ionicons"),
_react2.default.createElement(_Icon.Icon,{type:"Ionicons",name:"home",style:{color:"#999"},__source:{fileName:_jsxFileName,lineNumber:26}})),

_react2.default.createElement(_ListItem.ListItem,{__source:{fileName:_jsxFileName,lineNumber:28}},
_react2.default.createElement(_Text.Text,{style:{width:220},__source:{fileName:_jsxFileName,lineNumber:29}},"Entypo"),
_react2.default.createElement(_Icon.Icon,{type:"Entypo",name:"home",style:{color:"#999"},__source:{fileName:_jsxFileName,lineNumber:30}})),

_react2.default.createElement(_ListItem.ListItem,{__source:{fileName:_jsxFileName,lineNumber:32}},
_react2.default.createElement(_Text.Text,{style:{width:220},__source:{fileName:_jsxFileName,lineNumber:33}},"Feather"),
_react2.default.createElement(_Icon.Icon,{type:"Feather",name:"home",style:{color:"#999"},__source:{fileName:_jsxFileName,lineNumber:34}})),

_react2.default.createElement(_ListItem.ListItem,{__source:{fileName:_jsxFileName,lineNumber:36}},
_react2.default.createElement(_Text.Text,{style:{width:220},__source:{fileName:_jsxFileName,lineNumber:37}},"FontAwesome"),
_react2.default.createElement(_Icon.Icon,{type:"FontAwesome",name:"home",style:{color:"#999"},__source:{fileName:_jsxFileName,lineNumber:38}})),

_react2.default.createElement(_ListItem.ListItem,{__source:{fileName:_jsxFileName,lineNumber:40}},
_react2.default.createElement(_Text.Text,{style:{width:220},__source:{fileName:_jsxFileName,lineNumber:41}},"Foundation"),
_react2.default.createElement(_Icon.Icon,{type:"Foundation",name:"home",style:{color:"#999"},__source:{fileName:_jsxFileName,lineNumber:42}})),

_react2.default.createElement(_ListItem.ListItem,{__source:{fileName:_jsxFileName,lineNumber:44}},
_react2.default.createElement(_Text.Text,{style:{width:220},__source:{fileName:_jsxFileName,lineNumber:45}},"Material Icons"),
_react2.default.createElement(_Icon.Icon,{type:"MaterialIcons",name:"home",style:{color:"#999"},__source:{fileName:_jsxFileName,lineNumber:46}})),

_react2.default.createElement(_ListItem.ListItem,{__source:{fileName:_jsxFileName,lineNumber:48}},
_react2.default.createElement(_Text.Text,{style:{width:220},__source:{fileName:_jsxFileName,lineNumber:49}},"Material Community Icons"),
_react2.default.createElement(_Icon.Icon,{
type:"MaterialCommunityIcons",
name:"home",
style:{color:"#999"},__source:{fileName:_jsxFileName,lineNumber:50}})),


_react2.default.createElement(_ListItem.ListItem,{__source:{fileName:_jsxFileName,lineNumber:56}},
_react2.default.createElement(_Text.Text,{style:{width:220},__source:{fileName:_jsxFileName,lineNumber:57}},"Octicons"),
_react2.default.createElement(_Icon.Icon,{type:"Octicons",name:"home",style:{color:"#999"},__source:{fileName:_jsxFileName,lineNumber:58}})),

_react2.default.createElement(_ListItem.ListItem,{__source:{fileName:_jsxFileName,lineNumber:60}},
_react2.default.createElement(_Text.Text,{style:{width:220},__source:{fileName:_jsxFileName,lineNumber:61}},"Zocial"),
_react2.default.createElement(_Icon.Icon,{type:"Zocial",name:"dropbox",style:{color:"#999"},__source:{fileName:_jsxFileName,lineNumber:62}})),

_react2.default.createElement(_ListItem.ListItem,{__source:{fileName:_jsxFileName,lineNumber:64}},
_react2.default.createElement(_Text.Text,{style:{width:220},__source:{fileName:_jsxFileName,lineNumber:65}},"Simple Line Icons"),
_react2.default.createElement(_Icon.Icon,{type:"SimpleLineIcons",name:"home",style:{color:"#999"},__source:{fileName:_jsxFileName,lineNumber:66}})),

_react2.default.createElement(_ListItem.ListItem,{__source:{fileName:_jsxFileName,lineNumber:68}},
_react2.default.createElement(_Text.Text,{style:{width:220},__source:{fileName:_jsxFileName,lineNumber:69}},"Evil Icons"),
_react2.default.createElement(_Icon.Icon,{type:"EvilIcons",name:"trophy",style:{color:"#999"},__source:{fileName:_jsxFileName,lineNumber:70}})))).



toJSON();
expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=Icon.ios.js.map