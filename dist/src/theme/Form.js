Object.defineProperty(exports,"__esModule",{value:true});var _reactNative=require('react-native');
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);

var _variables=require('./variables');var _variables2=_interopRequireDefault(_variables);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=

function(){var variables=arguments.length>0&&arguments[0]!==undefined?arguments[0]:_variables2.default;
var theme={
'NativeBase.Item':{
'.fixedLabel':{
'NativeBase.Label':{
paddingLeft:null},

marginLeft:15},

'.inlineLabel':{
'NativeBase.Label':{
paddingLeft:null},

marginLeft:15},

'.placeholderLabel':{
'NativeBase.Input':{}},


'.stackedLabel':{
'NativeBase.Label':{
paddingLeft:null},

'NativeBase.Input':{
paddingLeft:null,
marginLeft:_reactNative.Platform.OS==='ios'?undefined:-5},

marginLeft:15},

'.floatingLabel':{
'NativeBase.Input':{
paddingLeft:null,
top:8,
marginLeft:_reactNative.Platform.OS==='ios'?undefined:-5},

'NativeBase.Label':{
left:0,
top:8},

marginLeft:15},

'.regular':{
'NativeBase.Label':{
left:0},

marginLeft:0},

'.rounded':{
'NativeBase.Label':{
left:0},

marginLeft:0},

'.underline':{
'NativeBase.Label':{
left:0,
top:0,
position:'relative'},

'NativeBase.Input':{
left:-15},

marginLeft:15},

'.last':{
marginLeft:0,
paddingLeft:15},

'NativeBase.Label':{
paddingRight:5},

marginLeft:15}};



return theme;
};
//# sourceMappingURL=Form.js.map