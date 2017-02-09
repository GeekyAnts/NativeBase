
var _multiplier=require('multiplier');var _multiplier2=_interopRequireDefault(_multiplier);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var fontSizeBase=15;
var borderRadiusBase=4;
var contentPadding=10;

module.exports={
brandPrimary:'#428bca',
brandInfo:'#5bc0de',
brandSuccess:'#5cb85c',
brandDanger:'#d9534f',
brandWarning:'#f0ad4e',
brandSidebar:'#252932',

inverseTextColor:'#000',
textColor:'#fff',

fontSizeBase:15,

get fontSizeH1(){
return(0,_multiplier2.default)(fontSizeBase,1.8);
},
get fontSizeH2(){
return(0,_multiplier2.default)(fontSizeBase,1.6);
},
get fontSizeH3(){
return(0,_multiplier2.default)(fontSizeBase,1.4);
},
get btnTextSize(){
return(0,_multiplier2.default)(fontSizeBase,1.2);
},

borderRadiusBase:borderRadiusBase,

get borderRadiusLarge(){
return(0,_multiplier2.default)(fontSizeBase,5.8);
},

toolbarHeight:70,
toolbarDefaultBg:'#505052',
toolbarInverseBg:'#222',

get btnPrimaryBg(){
return this.brandPrimary;
},
get btnPrimaryColor(){
return this.textColor;
},
get btnSuccessBg(){
return this.brandSuccess;
},
get btnSuccessColor(){
return this.textColor;
},
get btnDangerBg(){
return this.brandDanger;
},
get btnDangerColor(){
return this.textColor;
},
get btnInfoBg(){
return this.brandInfo;
},
get btnInfoColor(){
return this.textColor;
},
get btnWarningBg(){
return this.brandWarning;
},
get btnWarningColor(){
return this.textColor;
},


inputColor:'#fff',
inputBorderColor:'#fff',
inputHeightBase:40,
inputGroupMarginBottom:10,
inputColorPlaceholder:'rgba(256,256,256,0.8)',
inputPaddingLeft:5,
get inputPaddingLeftIcon(){
return(0,_multiplier2.default)(this.inputPaddingLeft,8);
},

dropdownBg:'#fff',
dropdownLinkColor:'#414142',

jumbotronPadding:30,
jumbotronBg:'#C9C9CE',

contentPadding:contentPadding};
//# sourceMappingURL=dark.js.map