Object.defineProperty(exports,"__esModule",{value:true});var _reactNative=require("react-native");

var _platform=require("./../variables/platform");var _platform2=_interopRequireDefault(_platform);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var deviceHeight=_reactNative.Dimensions.get("window").height;exports.default=
function(){var variables=arguments.length>0&&arguments[0]!==undefined?arguments[0]:_platform2.default;
var theme={
flex:1,
height:_reactNative.Platform.OS==="ios"?deviceHeight:deviceHeight-20};


return theme;
};
//# sourceMappingURL=Container.js.map