var Color = require("color")

var multiply = require('multiplier');

var fontSizeBase = 15;
var borderRadiusBase = 4;
var borderRadiusBase = 4;
var contentPadding = 10;

module.exports = {
	brandPrimary : "#428bca",
	brandInfo: "#5bc0de",
	brandSuccess: "#5cb85c",
	brandDanger: "#d9534f",
	brandWarning: "#f0ad4e",
	brandSidebar: "#252932",

	inverseTextColor: "#fff",
	textColor: "#000",

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
     get btnTextSizeLarge () {
        return multiply(fontSizeBase, 1.5);
    },
     get btnTextSizeSmall () {
        return multiply(fontSizeBase, .8);
    },

	borderRadiusBase: borderRadiusBase,

	get borderRadiusLarge () {
        return multiply(fontSizeBase, 3.8);
    },	

    footerHeight: 55,
	toolbarHeight: 70,
	toolbarDefaultBg: "#505052",
	toolbarInverseBg: "#222",

	get btnPrimaryBg () {
        return this.brandPrimary;
    },	
    get btnPrimaryColor () {
        return this.inverseTextColor;
    },	
    get btnSuccessBg () {
        return this.brandSuccess;
    },	
    get btnSuccessColor () {
        return this.inverseTextColor;
    },	
    get btnDangerBg () {
        return this.brandDanger;
    },	
    get btnDangerColor () {
        return this.inverseTextColor;
    },	
    get btnInfoBg () {
        return this.brandInfo;
    },	
    get btnInfoColor () {
        return this.inverseTextColor;
    },	
    get btnWarningBg () {
        return this. brandWarning;
    },	
    get btnWarningColor () {
        return this.inverseTextColor;
    },	

    borderWidth: 1,
	
	inputColor: "#000",
	inputBorderColor: "#000",
	inputHeightBase: 40,	
	inputGroupMarginBottom: 10,
	inputColorPlaceholder: "rgba(0,0,0,0.8)",
    inputPaddingLeft: 5,
    get inputPaddingLeftIcon () {
        return multiply(inputPaddingLeft, 8);;
    },

	dropdownBg: "#000",
	dropdownLinkColor: "#414142",

	jumbotronPadding: 30,
	jumbotronBg: "#C9C9CE",

    contentPadding: contentPadding,

    listBorderColor: "#ddd",
    listDividerBg: "#F5F5F5",
    listItemPadding: 15,
    listNoteColor: "#58575C",

    iconFontSize: 27,

    badgeColor: "#fff",
    badgeBg: "#ED1727"
}