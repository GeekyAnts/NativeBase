var Color = require("color")

var primary = Color("#384850");
var secondary = Color("#00c497");
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
	inverseTextColor: light.hexString().toString(),
	textColor: dark.hexString().toString()
}



bootstrap-sass-asset-helper: false !default;
//
// Variables
// --------------------------------------------------


//== Colors
//
//## Gray and brand colors for use across Bootstrap.

grayBase:              #000 !default;
grayDarker:            lighten(grayBase, 13.5%) !default; // #222
grayDark:              lighten(grayBase, 20%) !default;   // #333
gray:                   lighten(grayBase, 33.5%) !default; // #555
grayLight:             lighten(grayBase, 46.7%) !default; // #777
grayLighter:           lighten(grayBase, 93.5%) !default; // #eee

brandPrimary:         darken(#428bca, 6.5%) !default; // #337ab7
brandSuccess:         #5cb85c !default;
brandInfo:            #5bc0de !default;
brandWarning:         #f0ad4e !default;
brandDanger:          #d9534f !default;


//== Scaffolding
//
//## Settings for some of the most global styles.

//** Background color for `<body>`.
bodyBg:               #fff !default;
//** Global text color on `<body>`.
textColor:            grayDark !default;

//** Global textual link color.
linkColor:            brandPrimary !default;
//** Link hover color set via `darken()` function.
linkHoverColor:      darken(linkColor, 15%) !default;
//** Link hover decoration.
linkHoverDecoration: underline !default;


//== Typography
//
//## Font, line-height, and color for body text, headings, and more.

fontFamilySansSerif:  "Helvetica Neue", Helvetica, Arial, sans-serif !default;
fontFamilySerif:       Georgia, "Times New Roman", Times, serif !default;
//** Default monospace fonts for `<code>`, `<kbd>`, and `<pre>`.
fontFamilyMonospace:   Menlo, Monaco, Consolas, "Courier New", monospace !default;
fontFamilyBase:        fontFamilySansSerif !default;

fontSizeBase:          14px !default;
fontSizeLarge:         ceil((fontSizeBase * 1.25)) !default; // ~18px
fontSizeSmall:         ceil((fontSizeBase * 0.85)) !default; // ~12px

fontSizeH1:            floor((fontSizeBase * 2.6)) !default; // ~36px
fontSizeH2:            floor((fontSizeBase * 2.15)) !default; // ~30px
fontSizeH3:            ceil((fontSizeBase * 1.7)) !default; // ~24px
fontSizeH4:            ceil((fontSizeBase * 1.25)) !default; // ~18px
fontSizeH5:            fontSizeBase !default;
fontSizeH6:            ceil((fontSizeBase * 0.85)) !default; // ~12px

//** Unit-less `line-height` for use in components like buttons.
lineHeightBase:        1.428571429 !default; // 20/14
//** Computed "line-height" (`font-size` * `line-height`) for use with `margin`, `padding`, etc.
lineHeightComputed:    floor((fontSizeBase * lineHeightBase)) !default; // ~20px

//** By default, this inherits from the `<body>`.
headingsFontFamily:    inherit !default;
headingsFontWeight:    500 !default;
headingsLineHeight:    1.1 !default;
headingsColor:          inherit !default;


//== Iconography
//
//## Specify custom location and filename of the included Glyphicons icon font. Useful for those including Bootstrap via Bower.

//** Load fonts from this directory.

// [converter] If bootstrap-sass-asset-helper if used, provide path relative to the assets load path.
// [converter] This is because some asset helpers, such as Sprockets, do not work with file-relative paths.
/*icon-font-path: if(bootstrap-sass-asset-helper, "bootstrap/", "../fonts/bootstrap/") !default;

//** File name for all font files.
icon-font-name:          "glyphicons-halflings-regular" !default;
//** Element ID within SVG icon file.
icon-font-svg-id:        "glyphicons_halflingsregular" !default;
*/









//== Components
//
//## Define common padding and border radius sizes and more. Values based on 14px text and 1.428 line-height (~20px to start).

paddingBaseVertical:     6px !default;
paddingBaseHorizontal:   12px !default;

paddingLargeVertical:    10px !default;
paddingLargeHorizontal:  16px !default;

paddingSmallVertical:    5px !default;
paddingSmallHorizontal:  10px !default;

paddingXsVertical:       1px !default;
paddingXsHorizontal:     5px !default;

lineHeightLarge:         1.3333333 !default; // extra decimals for Win 8.1 Chrome
lineHeightSmall:         1.5 !default;

borderRadiusBase:        4px !default;
borderRadiusLarge:       6px !default;
borderRadiusSmall:       3px !default;

//** Global color for active items (e.g., navs or dropdowns).
componentActiveColor:    #fff !default;
//** Global background color for active items (e.g., navs or dropdowns).
componentActiveBg:       brandPrimary !default;






/*
//** Width of the `border` for generating carets that indicator dropdowns.
caret-width-base:          4px !default;
//** Carets increase slightly in size for larger components.
caret-width-large:         5px !default;
*/





//== Tables
//
//## Customizes the `.table` component with basic values, each used across all table variations.


/*
//** Padding for `<th>`s and `<td>`s.
table-cell-padding:            8px !default;
//** Padding for cells in `.table-condensed`.
table-condensed-cell-padding:  5px !default;

//** Default background color used for all tables.
table-bg:                      transparent !default;
//** Background color used for `.table-striped`.
table-bg-accent:               #f9f9f9 !default;
//** Background color used for `.table-hover`.
table-bg-hover:                #f5f5f5 !default;
table-bg-active:               table-bg-hover !default;

//** Border color for table and cell borders.
table-border-color:            #ddd !default;
*/

//== Buttons
//
//## For each of Bootstrap's buttons, define text, background and border color.

btnFontWeight:                normal !default;

btnDefaultColor:              #333 !default;
btnDefaultBg:                 #fff !default;
btnDefaultBorder:             #ccc !default;

btnPrimaryColor:              #fff !default;
btnPrimaryBg:                 brandPrimary !default;
btnPrimaryBorder:             darken(btnPrimaryBg, 5%) !default;

btnSuccessColor:              #fff !default;
btnSuccessBg:                 brandSuccess !default;
btnSuccessBorder:             darken(btnSuccessBg, 5%) !default;

btnInfoColor:                 #fff !default;
btnInfoBg:                    brandInfo !default;
btnInfoBorder:                darken(btnInfoBg, 5%) !default;

btnWarningColor:              #fff !default;
btnWarningBg:                 brandWarning !default;
btnWarningBorder:             darken(btnWarningBg, 5%) !default;

btnDangerColor:               #fff !default;
btnDangerBg:                  brandDanger !default;
btnDangerBorder:              darken(btnDangerBg, 5%) !default;

btnLinkDisabledColor:        grayLight !default;

// Allows for customizing button radius independently from global border radius
btnBorderRadiusBase:         borderRadiusBase !default;
btnBorderRadiusLarge:        borderRadiusLarge !default;
btnBorderRadiusSmall:        borderRadiusSmall !default;


//== Forms
//
//##

//** `<input>` background color
inputBg:                       #fff !default;
//** `<input disabled>` background color
inputBgDisabled:              grayLighter !default;

//** Text color for `<input>`s
inputColor:                    gray !default;
//** `<input>` border color
inputBorder:                   #ccc !default;

// TODO: Rename `inputBorderRadius` to `inputBorderRadiusBase` in v4
//** Default `.form-control` border radius
// This has no effect on `<select>`s in some browsers, due to the limited stylability of `<select>`s in CSS.
inputBorderRadius:            borderRadiusBase !default;
//** Large `.form-control` border radius
inputBorderRadiusLarge:      borderRadiusLarge !default;
//** Small `.form-control` border radius
inputBorderRadiusSmall:      borderRadiusSmall !default;

//** Border color for inputs on focus
inputBorderFocus:             #66afe9 !default;

//** Placeholder text color
inputColorPlaceholder:        #999 !default;

//** Default `.form-control` height
inputHeightBase:              (lineHeightComputed + (paddingBaseVertical * 2) + 2) !default;
//** Large `.form-control` height
inputHeightLarge:             (ceil(fontSizeLarge * lineHeightLarge) + (paddingLargeVertical * 2) + 2) !default;
//** Small `.form-control` height
inputHeightSmall:             (floor(fontSizeSmall * lineHeightSmall) + (paddingSmallVertical * 2) + 2) !default;

//** `.form-group` margin
formGroupMarginBottom:       15px !default;

legendColor:                   grayDark !default;
legendBorderColor:            #e5e5e5 !default;

//** Background color for textual input addons
inputGroupAddonBg:           grayLighter !default;
//** Border color for textual input addons
inputGroupAddonBorderColor: inputBorder !default;

//** Disabled cursor for form controls and buttons.
cursorDisabled:                not-allowed !default;


//== Dropdowns
//
//## Dropdown menu container and contents.

//** Background for the dropdown menu.
dropdownBg:                    #fff !default;
//** Dropdown menu `border-color`.
dropdownBorder:                rgba(0,0,0,.15) !default;
//** Dropdown menu `border-color` **for IE8**.
dropdownFallbackBorder:       #ccc !default;
//** Divider color for between dropdown items.
dropdownDividerBg:            #e5e5e5 !default;

//** Dropdown link text color.
dropdownLinkColor:            grayDark !default;
//** Hover color for dropdown links.
dropdownLinkHoverColor:      darken(grayDark, 5%) !default;
//** Hover background for dropdown links.
dropdownLinkHoverBg:         #f5f5f5 !default;

//** Active dropdown menu item text color.
dropdownLinkActiveColor:     componentActiveColor !default;
//** Active dropdown menu item background color.
dropdownLinkActiveBg:        component-active-bg !default;

//** Disabled dropdown menu item background color.
dropdownLinkDisabledColor:   grayLight !default;

//** Text color for headers within dropdown menus.
dropdownHeaderColor:          grayLight !default;

//** Deprecated `dropdownCaretColor` as of v3.1.0
dropdownCaretColor:           #000 !default;


//-- Z-index master list
//
// Warning: Avoid customizing these values. They're used for a bird's eye view
// of components dependent on the z-axis and are designed to all work together.
//
// Note: These variables are not generated into the Customizer.

/*
zindex-toolbar:            1000 !default;
zindex-dropdown:          1000 !default;
zindex-popover:           1060 !default;
zindex-tooltip:           1070 !default;
zindex-toolbar-fixed:      1030 !default;
zindex-modal-background:  1040 !default;
zindex-modal:             1050 !default;
*/


//== Media queries breakpoints
//
//## Define the breakpoints at which your layout will change, adapting to different screen sizes.

// Extra small screen / phone
//** Deprecated `screenXs` as of v3.0.1
screenXs:                  480px !default;
//** Deprecated `screenXsMin` as of v3.2.0
screenXsMin:              screenXs !default;
//** Deprecated `screenPhone` as of v3.0.1
screenPhone:               screenXsMin !default;

// Small screen / tablet
//** Deprecated `screenSm` as of v3.0.1
screenSm:                  768px !default;
screenSmMin:              screenSm !default;
//** Deprecated `screenTablet` as of v3.0.1
screenTablet:              screenSm-min !default;

// Medium screen / desktop
//** Deprecated `screenMd` as of v3.0.1
screenMd:                  992px !default;
screenMdMin:              screenMd !default;
//** Deprecated `screenDesktop` as of v3.0.1
screenDesktop:             screenMdMin !default;

// Large screen / wide desktop
//** Deprecated `screenLg` as of v3.0.1
screenLg:                  1200px !default;
screenLgMin:              screenLg !default;
//** Deprecated `screenLgDesktop` as of v3.0.1
screenLgDesktop:          screenLgMin !default;

// So media queries don't overlap when required, provide a maximum
screenXsMax:              (screenSm-min - 1) !default;
screenSmMax:              (screenMdMin - 1) !default;
screenMdMax:              (screenLgMin - 1) !default;


//== Grid system
//
//## Define your custom responsive grid.

//** Number of columns in the grid.
gridColumns:              12 !default;
//** Padding between columns. Gets divided in half for the left and right.
gridGutterWidth:         30px !default;
// toolbar collapse
//** Point at which the toolbar becomes uncollapsed.
gridFloatBreakpoint:     screenSm-min !default;
//** Point at which the toolbar begins collapsing.
gridFloatBreakpointMax: (gridFloatBreakpoint - 1) !default;


//== Container sizes
//
//## Define the maximum width of `.container` for different screen sizes.

// Small screen / tablet
containerTablet:             (720px + gridGutterWidth) !default;
//** For `screenSm-min` and up.
containerSm:                 containerTablet !default;

// Medium screen / desktop
containerDesktop:            (940px + gridGutterWidth) !default;
//** For `screenMdMin` and up.
containerMd:                 containerDesktop !default;

// Large screen / wide desktop
containerLargeDesktop:      (1140px + gridGutterWidth) !default;
//** For `screenLgMin` and up.
containerLg:                 containerLargeDesktop !default;


//== toolbar
//
//##

// Basics of a toolbar
toolbarHeight:                    50px !default;
toolbarMarginBottom:             lineHeightComputed !default;
toolbarBorderRadius:             borderRadiusBase !default;
toolbarPaddingHorizontal:        floor((gridGutterWidth / 2)) !default;
toolbarPaddingVertical:          ((toolbarHeight - lineHeightComputed) / 2) !default;
toolbarCollapseMaxHeight:       340px !default;

toolbarDefaultColor:             #777 !default;
toolbarDefaultBg:                #f8f8f8 !default;
toolbarDefaultBorder:            darken(toolbarDefaultBg, 6.5%) !default;

// toolbar links
toolbarDefaultLinkColor:                #777 !default;
toolbarDefaultLinkHoverColor:          #333 !default;
toolbarDefaultLinkHoverBg:             transparent !default;
toolbarDefaultLinkActiveColor:         #555 !default;
toolbarDefaultLinkActiveBg:            darken(toolbarDefaultBg, 6.5%) !default;
toolbarDefaultLinkDisabledColor:       #ccc !default;
toolbarDefaultLinkDisabledBg:          transparent !default;

// toolbar brand label
toolbarDefaultBrandColor:               toolbarDefaultLinkColor !default;
toolbarDefaultBrandHoverColor:         darken(toolbarDefaultBrandColor, 10%) !default;
toolbarDefaultBrandHoverBg:            transparent !default;

// toolbar toggle
toolbarDefaultToggleHoverBg:           #ddd !default;
toolbarDefaultToggleIconBarBg:        #888 !default;
toolbarDefaultToggleBorderColor:       #ddd !default;


//=== Inverted toolbar
// Reset inverted toolbar basics
toolbarInverseColor:                      lighten(grayLight, 15%) !default;
toolbarInverseBg:                         #222 !default;
toolbarInverseBorder:                     darken(toolbarInverseBg, 10%) !default;

// Inverted toolbar links
toolbarInverseLinkColor:                 lighten(grayLight, 15%) !default;
toolbarInverseLinkHoverColor:           #fff !default;
toolbarInverseLinkHoverBg:              transparent !default;
toolbarInverseLinkActiveColor:          toolbarInverseLinkHoverColor !default;
toolbarInverseLinkActiveBg:             darken(toolbarInverseBg, 10%) !default;
toolbarInverseLinkDisabledColor:        #444 !default;
toolbarInverseLinkDisabledBg:           transparent !default;

// Inverted toolbar brand label
toolbarInverseBrandColor:                toolbarInverseLinkColor !default;
toolbarInverseBrandHoverColor:          #fff !default;
toolbarInverseBrandHoverBg:             transparent !default;

// Inverted toolbar toggle
toolbarInverseToggleHoverBg:            #333 !default;
toolbarInverseToggleIconBarBg:         #fff !default;
toolbarInverseToggleBorderColor:        #333 !default;


//== Navs
//
//##

//=== Shared nav styles
navLinkPadding:                          10px 15px !default;
navLinkHoverBg:                         grayLighter !default;

navDisabledLinkColor:                   grayLight !default;
navDisabledLinkHoverColor:             grayLight !default;




//== Tabs
navTabsBorderColor:                     #ddd !default;

navTabsLinkHoverBorderColor:          grayLighter !default;

navTabsActiveLinkHoverBg:             bodyBg !default;
navTabsActiveLinkHoverColor:          gray !default;
navTabsActiveLinkHoverBorderColor:   #ddd !default;

navTabsJustifiedLinkBorderColor:            #ddd !default;
navTabsJustifiedActiveLinkBorderColor:     bodyBg !default;


/*
//== Pills
nav-pills-border-radius:                   borderRadiusBase !default;
nav-pills-active-link-hover-bg:            component-active-bg !default;
nav-pills-active-linkHoverColor:         componentActiveColor !default;
*/




//== Pagination
//
//##

/*
pagination-color:                     linkColor !default;
pagination-bg:                        #fff !default;
pagination-border:                    #ddd !default;

pagination-hover-color:               linkHoverColor !default;
pagination-hover-bg:                  grayLighter !default;
pagination-hover-border:              #ddd !default;

pagination-active-color:              #fff !default;
pagination-active-bg:                 brandPrimary !default;
pagination-active-border:             brandPrimary !default;

pagination-disabled-color:            grayLight !default;
pagination-disabled-bg:               #fff !default;
pagination-disabled-border:           #ddd !default;
*/



//== Pager
//
//##


/*
pager-bg:                             pagination-bg !default;
pager-border:                         pagination-border !default;
pager-border-radius:                  15px !default;

pager-hover-bg:                       pagination-hover-bg !default;

pager-active-bg:                      pagination-active-bg !default;
pager-active-color:                   pagination-active-color !default;

pager-disabled-color:                 pagination-disabled-color !default;

*/

//== Jumbotron
//
//##

jumbotronPadding:              30px !default;
jumbotronColor:                inherit !default;
jumbotronBg:                   grayLighter !default;
jumbotronHeadingColor:        inherit !default;
jumbotronFontSize:            ceil((fontSizeBase * 1.5)) !default;
jumbotronHeadingFontSize:    ceil((fontSizeBase * 4.5)) !default;


//== Form states and alerts
//
//## Define colors for form feedback states and, by default, alerts.


stateSuccessText:             #3c763d !default;
stateSuccessBg:               #dff0d8 !default;
stateSuccessBorder:           darken(adjust-hue(stateSuccessBg, -10), 5%) !default;

stateInfoText:                #31708f !default;
stateInfoBg:                  #d9edf7 !default;
stateInfoBorder:              darken(adjust-hue(stateInfoBg, -10), 7%) !default;

stateWarningText:             #8a6d3b !default;
stateWarningBg:               #fcf8e3 !default;
stateWarningBorder:           darken(adjust-hue(stateWarningBg, -10), 5%) !default;

stateDangerText:              #a94442 !default;
stateDangerBg:                #f2dede !default;
stateDangerBorder:            darken(adjust-hue(stateDangerBg, -10), 5%) !default;


//== Tooltips
//
//##

/*
//** Tooltip max width
tooltip-max-width:           200px !default;
//** Tooltip text color
tooltip-color:               #fff !default;
//** Tooltip background color
tooltip-bg:                  #000 !default;
tooltip-opacity:             .9 !default;

//** Tooltip arrow width
tooltip-arrow-width:         5px !default;
//** Tooltip arrow color
tooltip-arrow-color:         tooltip-bg !default;
*/


//== Popovers
//
//##
/*
//** Popover body background color
popover-bg:                          #fff !default;
//** Popover maximum width
popover-max-width:                   276px !default;
//** Popover border color
popover-border-color:                rgba(0,0,0,.2) !default;
//** Popover fallback border color
popover-fallback-border-color:       #ccc !default;

//** Popover title background color
popover-title-bg:                    darken(popover-bg, 3%) !default;

//** Popover arrow width
popover-arrow-width:                 10px !default;
//** Popover arrow color
popover-arrow-color:                 popover-bg !default;

//** Popover outer arrow width
popover-arrow-outer-width:           (popover-arrow-width + 1) !default;
//** Popover outer arrow color
popover-arrow-outer-color:           fade_in(popover-border-color, 0.05) !default;
//** Popover outer arrow fallback color
popover-arrow-outer-fallback-color:  darken(popover-fallback-border-color, 20%) !default;
*/

//== Labels
//
//##
/*
//** Default label background color
label-default-bg:            grayLight !default;
//** Primary label background color
label-primary-bg:            brandPrimary !default;
//** Success label background color
label-success-bg:            brandSuccess !default;
//** Info label background color
label-info-bg:               brandInfo !default;
//** Warning label background color
label-warning-bg:            brandWarning !default;
//** Danger label background color
label-danger-bg:             brandDanger !default;

//** Default label text color
label-color:                 #fff !default;
//** Default text color of a linked label
label-linkHoverColor:      #fff !default;
*/

//== Modals
//
//##

//** Padding applied to the modal body
modalInnerPadding:         15px !default;

//** Padding applied to the modal title
modalTitlePadding:         15px !default;
//** Modal title line-height
modalTitleLineHeight:     lineHeightBase !default;

//** Background color of modal content area
modalContentBg:                             #fff !default;
//** Modal content border color
modalContentBorderColor:                   rgba(0,0,0,.2) !default;
//** Modal content border color **for IE8**
modalContentFallbackBorderColor:          #999 !default;

//** Modal backdrop background color
modalBackdropBg:           #000 !default;
//** Modal backdrop opacity
modalBackdropOpacity:      .5 !default;
//** Modal header border color
modalHeaderBorderColor:   #e5e5e5 !default;
//** Modal footer border color
modalFooterBorderColor:   modalHeaderBorderColor !default;

modalLg:                    900px !default;
modalMd:                    600px !default;
modalSm:                    300px !default;


//== Alerts
//
//## Define alert colors, border radius, and padding.

alertPadding:               15px !default;
alertBorderRadius:         borderRadiusBase !default;
alertLinkFontWeight:      bold !default;

alertSuccessBg:            stateSuccessBg !default;
alertSuccessText:          stateSuccessText !default;
alertSuccessBorder:        stateSuccessBorder !default;

alertInfoBg:               stateInfoBg !default;
alertInfoText:             stateInfoText !default;
alertInfoBorder:           stateInfoBorder !default;

alertWarningBg:            stateWarningBg !default;
alertWarningText:          stateWarningText !default;
alertWarningBorder:        stateWarningBorder !default;

alertDangerBg:             stateDangerBg !default;
alertDangerText:           stateDangerText !default;
alertDangerBorder:         stateDangerBorder !default;


//== Progress bars
//
//##

//** Background color of the whole progress component
progressBg:                 #f5f5f5 !default;
//** Progress bar text color
progressBarColor:          #fff !default;
//** Variable for setting rounded corners on progress bar.
progressBorderRadius:      borderRadiusBase !default;

//** Default progress bar color
progressBarBg:             brandPrimary !default;
//** Success progress bar color
progressBarSuccessBg:     brandSuccess !default;
//** Warning progress bar color
progressBarWarningBg:     brandWarning !default;
//** Danger progress bar color
progressBarDangerBg:      brandDanger !default;
//** Info progress bar color
progressBarInfoBg:        brandInfo !default;


//== List group
//
//##

//** Background color on `.list-group-item`
listGroupBg:                 #fff !default;
//** `.list-group-item` border color
listGroupBorder:             #ddd !default;
//** List group border radius
listGroupBorderRadius:      borderRadiusBase !default;

//** Background color of single list items on hover
listGroupHoverBg:           #f5f5f5 !default;
//** Text color of active list items
listGroupActiveColor:       componentActiveColor !default;
//** Background color of active list items
listGroupActiveBg:          component-active-bg !default;
//** Border color of active list elements
listGroupActiveBorder:      listGroupActiveBg !default;
//** Text color for content within active list items
listGroupActiveTextColor:  lighten(listGroupActiveBg, 40%) !default;

//** Text color of disabled list items
listGroupDisabledColor:      grayLight !default;
//** Background color of disabled list items
listGroupDisabledBg:         grayLighter !default;
//** Text color for content within disabled list items
listGroupDisabledTextColor: listGroupDisabledColor !default;

listGroupLinkColor:         #555 !default;
listGroupLinkHoverColor:   listGroupLinkColor !default;
listGroupLinkHeadingColor: #333 !default;


//== Cards
//
//##

cardBg:                    #fff !default;
cardBodyPadding:          15px !default;
cardHeadingPadding:       10px 15px !default;
card-footer-padding:        cardHeadingPadding !default;
card-border-radius:         borderRadiusBase !default;

//** Border color for elements within panels
card-inner-border:          #ddd !default;
card-footer-bg:             #f5f5f5 !default;

card-default-text:          grayDark !default;
card-default-border:        #ddd !default;
card-default-heading-bg:    #f5f5f5 !default;

card-primary-text:          #fff !default;
card-primary-border:        brandPrimary !default;
card-primary-heading-bg:    brandPrimary !default;

card-success-text:          stateSuccessText !default;
card-success-border:        stateSuccessBorder !default;
card-success-heading-bg:    stateSuccessBg !default;

card-info-text:             stateInfoText !default;
card-info-border:           stateInfoBorder !default;
card-info-heading-bg:       stateInfoBg !default;

card-warning-text:          stateWarningText !default;
card-warning-border:        stateWarningBorder !default;
card-warning-heading-bg:    stateWarningBg !default;

card-danger-text:           stateDangerText !default;
card-danger-border:         stateDangerBorder !default;
card-danger-heading-bg:     stateDangerBg !default;


//== Thumbnails
//
//##

//** Padding around the thumbnail image
thumbnail-padding:           4px !default;
//** Thumbnail background color
thumbnail-bg:                bodyBg !default;
//** Thumbnail border color
thumbnail-border:            #ddd !default;
//** Thumbnail border radius
thumbnail-border-radius:     borderRadiusBase !default;

//** Custom text color for thumbnail captions
thumbnail-caption-color:     textColor !default;
//** Padding around the thumbnail caption
thumbnail-caption-padding:   9px !default;


//== Wells
//
//##

well-bg:                     #f5f5f5 !default;
well-border:                 darken(well-bg, 7%) !default;


//== Badges
//
//##

badge-color:                 #fff !default;
//** Linked badge text color on hover
badge-linkHoverColor:      #fff !default;
badge-bg:                    grayLight !default;

//** Badge text color in active nav link
badge-active-color:          linkColor !default;
//** Badge background color in active nav link
badge-active-bg:             #fff !default;

badge-font-weight:           bold !default;
badge-line-height:           1 !default;
badge-border-radius:         10px !default;


//== Breadcrumbs
//
//##
/*
breadcrumb-padding-vertical:   8px !default;
breadcrumb-padding-horizontal: 15px !default;
//** Breadcrumb background color
breadcrumb-bg:                 #f5f5f5 !default;
//** Breadcrumb text color
breadcrumb-color:              #ccc !default;
//** Text color of current page in the breadcrumb
breadcrumb-active-color:       grayLight !default;
//** Textual separator for between breadcrumb elements
breadcrumb-separator:          "/" !default;
*/

//== Carousel
//
//##

/*
carousel-text-shadow:                        0 1px 2px rgba(0,0,0,.6) !default;

carousel-control-color:                      #fff !default;
carousel-control-width:                      15% !default;
carousel-control-opacity:                    .5 !default;
carousel-control-font-size:                  20px !default;

carousel-indicator-active-bg:                #fff !default;
carousel-indicator-border-color:             #fff !default;

carousel-caption-color:                      #fff !default;

*/
//== Close
//
//##

/*
close-font-weight:           bold !default;
close-color:                 #000 !default;
close-text-shadow:           0 1px 0 #fff !default;
*/




//== Code
//
//##
/*
code-color:                  #c7254e !default;
code-bg:                     #f9f2f4 !default;

kbd-color:                   #fff !default;
kbd-bg:                      #333 !default;

pre-bg:                      #f5f5f5 !default;
pre-color:                   grayDark !default;
pre-border-color:            #ccc !default;
pre-scrollable-max-height:   340px !default;
*/

//== Type
//
//##

//** Horizontal offset for forms and lists.
component-offset-horizontal: 180px !default;
//** Text muted color
text-muted:                  grayLight !default;
//** Abbreviations and acronyms border color
abbr-border-color:           grayLight !default;
//** Headings small color
headings-small-color:        grayLight !default;
//** Blockquote small color
blockquote-small-color:      grayLight !default;
//** Blockquote font size
blockquote-font-size:        (fontSizeBase * 1.25) !default;
//** Blockquote border color
blockquote-border-color:     grayLighter !default;
//** Page header border color
page-header-border-color:    grayLighter !default;
//** Width of horizontal description list titles
dl-horizontal-offset:        component-offset-horizontal !default;
//** Point at which .dl-horizontal becomes horizontal
dl-horizontal-breakpoint:    gridFloatBreakpoint !default;
//** Horizontal line color.
hr-border:                   grayLighter !default;