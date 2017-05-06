Object.defineProperty(exports,"__esModule",{value:true});var _reactNative=require('react-native');

var _platform=require('./../variables/platform');var _platform2=_interopRequireDefault(_platform);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=

function(){var variables=arguments.length>0&&arguments[0]!==undefined?arguments[0]:_platform2.default;
var platformStyle=variables.platformStyle;
var platform=variables.platform;

var tabContainerTheme={
elevation:3,
height:50,
flexDirection:'row',
shadowColor:platformStyle==='material'?'#000':undefined,
shadowOffset:platformStyle==='material'?{width:0,height:2}:undefined,
shadowOpacity:platformStyle==='material'?0.2:undefined,
shadowRadius:platformStyle==='material'?1.2:undefined,
justifyContent:'space-around',
borderBottomWidth:_reactNative.Platform.OS=='ios'?variables.borderWidth:0,
borderColor:variables.topTabBarBorderColor};



return tabContainerTheme;
};
//# sourceMappingURL=TabContainer.js.map