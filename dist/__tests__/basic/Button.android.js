var _jsxFileName='__tests__/basic/Button.android.js';require('react-native');
var _reactTestRenderer=require('react-test-renderer');var _reactTestRenderer2=_interopRequireDefault(_reactTestRenderer);

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _Button=require('./../../src/basic/Button');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}




jest.mock('Platform',function(){
var Platform=require.requireActual('Platform');
Platform.OS='android';
return Platform;
});


it('renders regular button',function(){
var tree=_reactTestRenderer2.default.create(
_react2.default.createElement(_Button.Button,{__source:{fileName:_jsxFileName,lineNumber:19}},'Test')).


toJSON();
expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=Button.android.js.map