var Color = require("color")

var multiply = require('multiplier');

var fontSizeBase = 15;
var borderRadiusBase = 4;

module.exports = {
	brandPrimary : "#428bca",
	brandInfo: "#5bc0de",
	brandSuccess: "#5cb85c",
	brandDanger: "#d9534f",
	brandWarning: "#f0ad4e",
	brandSidebar: "#252932",

	inverseTextColor: "#000",
	textColor: "#fff",

	fontSizeBase: 15,

	get fontSizeH1 () {
        return multiply(fontSizeBase, 1.8);
    },
    get fontSizeH2 () {
        return multiply(fontSizeBase, 1.6);
    },
    get fontSizeH3 () {
        return multiply(fontSizeBase, 1.4);
    },
    get btnTextSize () {
        return multiply(fontSizeBase, 1.2);
    },

	borderRadiusBase: 4,

	get borderRadiusLarge () {
        return multiply(fontSizeBase, 5.8);
    },	

	toolbarHeight: 65,
	toolbarDefaultBg: "#f8f8f8",
	toolbarInverseBg: "#222",

	get btnPrimaryBg () {
        return brandPrimary;
    },	
    get btnPrimaryColor () {
        return textColor;
    },	
    get btnSuccessBg () {
        return brandSuccess;
    },	
    get btnSuccessColor () {
        return textColor;
    },	
    get btnDangerBg () {
        return brandDanger;
    },	
    get btnDangerColor () {
        return textColor;
    },	
    get btnInfoBg () {
        return brandInfo;
    },	
    get btnInfoColor () {
        return textColor;
    },	
    get btnWarningBg () {
        return  brandWarning;
    },	
    get btnWarningColor () {
        return textColor;
    },	

	
	inputColor: "gray",
	inputBorderColor: "fff",
	inputHeightBase: 40,	
	inputGroupMarginBottom: 10,
	inputColorPlaceholder: "#999",
    inputPaddingLeft: 5,
    get inputPaddingLeftIcon () {
        return multiply(inputPaddingLeft, 8);;
    },

	dropdownBg: "#fff",
	dropdownLinkColor: "#414142",

	jumbotronPadding: 30,
	jumbotronBg: "#C9C9CE"


}