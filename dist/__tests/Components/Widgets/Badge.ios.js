require('react-native');
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _Badge=require('../../../Components/Widgets/Badge');var _Badge2=_interopRequireDefault(_Badge);



var _reactTestRenderer=require('react-test-renderer');var _reactTestRenderer2=_interopRequireDefault(_reactTestRenderer);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

jest.mock('Platform',function(){
var Platform=require.requireActual('Platform');
Platform.OS='ios';
return Platform;
});


it('renders regular badge',function(){
var tree=_reactTestRenderer2.default.create(
_react2.default.createElement(_Badge2.default,null,'2')).


toJSON();
expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=Badge.ios.js.map