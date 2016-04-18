var Color = require("color")
var multiply = require('multiplier');

var primary = Color("#428bca");
var success = Color("#5cb85c");
var danger = Color("#d9534f");
var info = Color("#5bc0de");
var warning = Color("#f0ad4e");

var sidebar = Color("#252932");
var dark = Color("rgba(0,0,0,0.9)");
var light = Color("rgba(255,255,255,0.9)");

var darken = primary.darken(0.2).hexString().toString();
var fontSizeBase = 15;

var borderRadiusBase = 4;

var toolbarHeight = 65;
var toolbarDefaultBg = Color("#f8f8f8");
var toolbarInverseBg = Color("#222");

var btnPrimaryBg = Color("#428bca");
var btnPrimaryColor = Color("#fff");

var btnSuccessBg = Color("#5cb85c");
var btnSuccessColor = Color("#fff");

var btnDangerBg = Color("#d9534f");
var btnDangerColor = Color("#fff");

var btnInfoBg = Color("#5bc0de");
var btnInfoColor = Color("#fff");

var btnWarningBg = Color("#f0ad4e");
var btnWarningColor = Color("#fff");

var inputBg = Color("#fff");
var inputColor = Color("gray");
var inputBorder = Color("#fff")
var inputHeightBase = 40;
var inputGroupMarginBottom = 15;

var paddingBaseVertical = 6;
var paddingBaseHorizontal = 12;




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

	borderRadiusBase: borderRadiusBase,

	get borderRadiusLarge () {
        return multiply(borderRadiusBase, 5.8);
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

	dropdownBg: "#fff",
	dropdownLinkColor: "#414142",

	jumbotronPadding: 30,
	jumbotronBg: "#C9C9CE"

}