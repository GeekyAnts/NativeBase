require('react-native');
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _Header=require('../../../Components/Widgets/Header');var _Header2=_interopRequireDefault(_Header);
var _Button=require('../../../Components/Widgets/Button');var _Button2=_interopRequireDefault(_Button);
var _Icon=require('../../../Components/Widgets/Icon');var _Icon2=_interopRequireDefault(_Icon);
var _Title=require('../../../Components/Widgets/Title');var _Title2=_interopRequireDefault(_Title);
var _InputGroup=require('../../../Components/Widgets/InputGroup');var _InputGroup2=_interopRequireDefault(_InputGroup);
var _Input=require('../../../Components/Widgets/Input');var _Input2=_interopRequireDefault(_Input);
var _Subtitle=require('../../../Components/Widgets/Subtitle');var _Subtitle2=_interopRequireDefault(_Subtitle);


var _reactTestRenderer=require('react-test-renderer');var _reactTestRenderer2=_interopRequireDefault(_reactTestRenderer);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

jest.mock('Platform',function(){
var Platform=require.requireActual('Platform');
Platform.OS='ios';
return Platform;
});

it('renders correctly',function(){
var tree=_reactTestRenderer2.default.create(
_react2.default.createElement(_Header2.default,null)).
toJSON();
expect(tree).toMatchSnapshot();
});

it('renders header with buttons',function(){
var tree=_reactTestRenderer2.default.create(
_react2.default.createElement(_Header2.default,null,
_react2.default.createElement(_Button2.default,{transparent:true},
_react2.default.createElement(_Icon2.default,{name:'ios-arrow-back'})),


_react2.default.createElement(_Title2.default,null,'Header'),

_react2.default.createElement(_Button2.default,{transparent:true},
_react2.default.createElement(_Icon2.default,{name:'ios-menu'})))).


toJSON();
expect(tree).toMatchSnapshot();
});

it('renders header with a null button',function(){
var tree=_reactTestRenderer2.default.create(
_react2.default.createElement(_Header2.default,null,
null,
_react2.default.createElement(_Title2.default,null,'Header'))).

toJSON();
expect(tree).toMatchSnapshot();
});

it('renders header with buttons and subtitle',function(){
var tree=_reactTestRenderer2.default.create(
_react2.default.createElement(_Header2.default,null,
_react2.default.createElement(_Button2.default,{transparent:true},
_react2.default.createElement(_Icon2.default,{name:'ios-arrow-back'})),


_react2.default.createElement(_Title2.default,null,'Header'),
_react2.default.createElement(_Subtitle2.default,null,'Subtitle'),

_react2.default.createElement(_Button2.default,{transparent:true},
_react2.default.createElement(_Icon2.default,{name:'ios-menu'})))).


toJSON();
expect(tree).toMatchSnapshot();
});

it('renders header with just one button',function(){
var tree=_reactTestRenderer2.default.create(
_react2.default.createElement(_Header2.default,null,
_react2.default.createElement(_Button2.default,{transparent:true},
_react2.default.createElement(_Icon2.default,{name:'ios-arrow-back'})),


_react2.default.createElement(_Title2.default,null,'Header'))).

toJSON();
expect(tree).toMatchSnapshot();
});

it('renders header with just one button and subtitle',function(){
var tree=_reactTestRenderer2.default.create(
_react2.default.createElement(_Header2.default,null,
_react2.default.createElement(_Button2.default,{transparent:true},
_react2.default.createElement(_Icon2.default,{name:'ios-arrow-back'})),


_react2.default.createElement(_Title2.default,null,'Header'),
_react2.default.createElement(_Subtitle2.default,null,'Subtitle'))).

toJSON();
expect(tree).toMatchSnapshot();
});

it('renders header with just one button and iconRight',function(){
var tree=_reactTestRenderer2.default.create(
_react2.default.createElement(_Header2.default,{iconRight:true},
_react2.default.createElement(_Button2.default,{transparent:true},
_react2.default.createElement(_Icon2.default,{name:'ios-arrow-back'})),


_react2.default.createElement(_Title2.default,null,'Header'))).

toJSON();
expect(tree).toMatchSnapshot();
});

it('renders header with just one button, iconRight and a subtitle',function(){
var tree=_reactTestRenderer2.default.create(
_react2.default.createElement(_Header2.default,{iconRight:true},
_react2.default.createElement(_Button2.default,{transparent:true},
_react2.default.createElement(_Icon2.default,{name:'ios-arrow-back'})),


_react2.default.createElement(_Title2.default,null,'Header'),
_react2.default.createElement(_Subtitle2.default,null,'SubTitle'))).

toJSON();
expect(tree).toMatchSnapshot();
});

it('renders header with searchbar',function(){
var tree=_reactTestRenderer2.default.create(
_react2.default.createElement(_Header2.default,{searchBar:true,rounded:true},
_react2.default.createElement(_InputGroup2.default,null,
_react2.default.createElement(_Icon2.default,{name:'ios-search'}),
_react2.default.createElement(_Input2.default,{placeholder:'Search'}),
_react2.default.createElement(_Icon2.default,{name:'ios-people'})),

_react2.default.createElement(_Button2.default,{transparent:true},'Search'))).



toJSON();
expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=Header.ios.js.map