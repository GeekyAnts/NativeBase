Object.defineProperty(exports,"__esModule",{value:true});exports.default=mapPropsToStyleNames=function mapPropsToStyleNames(styleNames,props){
var keys=_.keys(props);
var values=_.values(props);

_.forEach(keys,function(key,index){
if(values[index]){styleNames.push(key);}
});

return styleNames;
};
//# sourceMappingURL=mapPropsToStyleNames.js.map