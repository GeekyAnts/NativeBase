var Color = require("color")

var primary = Color("#384850");
var secondary = Color("#F82C56");
var success = Color("#428F26");
var danger = Color("#B74D4A");
var warning = Color("#CBAC3E");
var sidebar = Color("#252932");
var dark = Color("rgba(0,0,0,0.9)");
var light = Color("rgba(255,255,255,0.9)");

var darken = primary.darken(0.2).hexString().toString();

module.exports = {
	brandPrimary : primary.hexString().toString(),
	brandSecondary: secondary.hexString().toString(),
	brandSuccess: success.hexString().toString(),
	brandDanger: danger.hexString().toString(),
	brandWarning: warning.hexString().toString(),
	brandSidebar: sidebar.hexString().toString(),
	darker: darken,
	inverseTextColor: dark.hexString().toString(),
	textColor: light.hexString().toString()
}