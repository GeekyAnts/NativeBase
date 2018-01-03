Object.defineProperty(exports,"__esModule",{value:true});var _platform=require("./../variables/platform");var _platform2=_interopRequireDefault(_platform);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=

function(){var variables=arguments.length>0&&arguments[0]!==undefined?arguments[0]:_platform2.default;
var cardTheme={
".transparent":{
shadowColor:null,
shadowOffset:null,
shadowOpacity:null,
shadowRadius:null,
elevation:null},

marginVertical:5,
marginHorizontal:2,
flex:1,
borderWidth:variables.borderWidth,
borderRadius:2,
borderColor:variables.cardBorderColor,
flexWrap:"nowrap",
backgroundColor:variables.cardDefaultBg,
shadowColor:"#000",
shadowOffset:{width:0,height:2},
shadowOpacity:0.1,
shadowRadius:1.5,
elevation:3};


return cardTheme;
};
//# sourceMappingURL=Card.js.map