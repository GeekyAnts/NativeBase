Object.defineProperty(exports,"__esModule",{value:true});var _lodash=require("lodash");var _lodash2=_interopRequireDefault(_lodash);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var mapPropsToStyleNames=function mapPropsToStyleNames(styleNames,props){
var keys=_lodash2.default.keys(props);
var values=_lodash2.default.values(props);

_lodash2.default.forEach(keys,function(key,index){
if(values[index]){
styleNames.push(key);
}
});

return styleNames;
};exports.default=

mapPropsToStyleNames;
//# sourceMappingURL=mapPropsToStyleNames.js.map