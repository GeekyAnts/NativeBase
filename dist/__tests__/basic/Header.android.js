var _jsxFileName='__tests__/basic/Header.android.js';require('react-native');
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactTestRenderer=require('react-test-renderer');var _reactTestRenderer2=_interopRequireDefault(_reactTestRenderer);
var _Header=require('./../../src/basic/Header');
var _Button=require('./../../src/basic/Button');
var _Icon=require('./../../src/basic/Icon');
var _Title=require('./../../src/basic/Title');
var _Subtitle=require('./../../src/backward/Widgets/Subtitle');var _Subtitle2=_interopRequireDefault(_Subtitle);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}



jest.mock('Platform',function(){
var Platform=require.requireActual('Platform');
Platform.OS='android';
return Platform;
});
jest.mock('ScrollView',function(){return'ScrollView';});

it('renders correctly',function(){
var tree=_reactTestRenderer2.default.create(
_react2.default.createElement(_Header.Header,{__source:{fileName:_jsxFileName,lineNumber:21}})).
toJSON();
expect(tree).toMatchSnapshot();
});

it('renders header with buttons',function(){
var tree=_reactTestRenderer2.default.create(
_react2.default.createElement(_Header.Header,{__source:{fileName:_jsxFileName,lineNumber:28}},
_react2.default.createElement(_Button.Button,{transparent:true,__source:{fileName:_jsxFileName,lineNumber:29}},
_react2.default.createElement(_Icon.Icon,{name:'ios-arrow-back',__source:{fileName:_jsxFileName,lineNumber:30}})),


_react2.default.createElement(_Title.Title,{__source:{fileName:_jsxFileName,lineNumber:33}},'Header'),

_react2.default.createElement(_Button.Button,{transparent:true,__source:{fileName:_jsxFileName,lineNumber:35}},
_react2.default.createElement(_Icon.Icon,{name:'ios-menu',__source:{fileName:_jsxFileName,lineNumber:36}})))).


toJSON();
expect(tree).toMatchSnapshot();
});

it('renders header with a null button',function(){
var tree=_reactTestRenderer2.default.create(
_react2.default.createElement(_Header.Header,{__source:{fileName:_jsxFileName,lineNumber:45}},
null,
_react2.default.createElement(_Title.Title,{__source:{fileName:_jsxFileName,lineNumber:47}},'Header'))).

toJSON();
expect(tree).toMatchSnapshot();
});

it('renders header with buttons and subtitle',function(){
var tree=_reactTestRenderer2.default.create(
_react2.default.createElement(_Header.Header,{__source:{fileName:_jsxFileName,lineNumber:55}},
_react2.default.createElement(_Button.Button,{transparent:true,__source:{fileName:_jsxFileName,lineNumber:56}},
_react2.default.createElement(_Icon.Icon,{name:'ios-arrow-back',__source:{fileName:_jsxFileName,lineNumber:57}})),


_react2.default.createElement(_Title.Title,{__source:{fileName:_jsxFileName,lineNumber:60}},'Header'),
_react2.default.createElement(_Subtitle2.default,{__source:{fileName:_jsxFileName,lineNumber:61}},'Subtitle'),

_react2.default.createElement(_Button.Button,{transparent:true,__source:{fileName:_jsxFileName,lineNumber:63}},
_react2.default.createElement(_Icon.Icon,{name:'ios-menu',__source:{fileName:_jsxFileName,lineNumber:64}})))).


toJSON();
expect(tree).toMatchSnapshot();
});

it('renders header with just one button',function(){
var tree=_reactTestRenderer2.default.create(
_react2.default.createElement(_Header.Header,{__source:{fileName:_jsxFileName,lineNumber:73}},
_react2.default.createElement(_Button.Button,{transparent:true,__source:{fileName:_jsxFileName,lineNumber:74}},
_react2.default.createElement(_Icon.Icon,{name:'ios-arrow-back',__source:{fileName:_jsxFileName,lineNumber:75}})),


_react2.default.createElement(_Title.Title,{__source:{fileName:_jsxFileName,lineNumber:78}},'Header'))).

toJSON();
expect(tree).toMatchSnapshot();
});

it('renders header with just one button and subtitle',function(){
var tree=_reactTestRenderer2.default.create(
_react2.default.createElement(_Header.Header,{__source:{fileName:_jsxFileName,lineNumber:86}},
_react2.default.createElement(_Button.Button,{transparent:true,__source:{fileName:_jsxFileName,lineNumber:87}},
_react2.default.createElement(_Icon.Icon,{name:'ios-arrow-back',__source:{fileName:_jsxFileName,lineNumber:88}})),


_react2.default.createElement(_Title.Title,{__source:{fileName:_jsxFileName,lineNumber:91}},'Header'),
_react2.default.createElement(_Subtitle2.default,{__source:{fileName:_jsxFileName,lineNumber:92}},'Subtitle'))).

toJSON();
expect(tree).toMatchSnapshot();
});

it('renders header with just one button and iconRight',function(){
var tree=_reactTestRenderer2.default.create(
_react2.default.createElement(_Header.Header,{iconRight:true,__source:{fileName:_jsxFileName,lineNumber:100}},
_react2.default.createElement(_Button.Button,{transparent:true,__source:{fileName:_jsxFileName,lineNumber:101}},
_react2.default.createElement(_Icon.Icon,{name:'ios-arrow-back',__source:{fileName:_jsxFileName,lineNumber:102}})),


_react2.default.createElement(_Title.Title,{__source:{fileName:_jsxFileName,lineNumber:105}},'Header'))).

toJSON();
expect(tree).toMatchSnapshot();
});

it('renders header with just one button, iconRight and a subtitle',function(){
var tree=_reactTestRenderer2.default.create(
_react2.default.createElement(_Header.Header,{iconRight:true,__source:{fileName:_jsxFileName,lineNumber:113}},
_react2.default.createElement(_Button.Button,{transparent:true,__source:{fileName:_jsxFileName,lineNumber:114}},
_react2.default.createElement(_Icon.Icon,{name:'ios-arrow-back',__source:{fileName:_jsxFileName,lineNumber:115}})),


_react2.default.createElement(_Title.Title,{__source:{fileName:_jsxFileName,lineNumber:118}},'Header'),
_react2.default.createElement(_Subtitle2.default,{__source:{fileName:_jsxFileName,lineNumber:119}},'SubTitle'))).

toJSON();
expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=Header.android.js.map