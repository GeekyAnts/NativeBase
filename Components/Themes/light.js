var Color = require("color");

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




//
// Variables
// --------------------------------------------------


//== Colors
//
//## Gray and brand colors for use across Bootstrap.

grayBase:              #000,
grayDarker:            lighten(grayBase, 13.5%), // #222
grayDark:              lighten(grayBase, 20%),   // #333
gray:                   lighten(grayBase, 33.5%), // #555
grayLight:             lighten(grayBase, 46.7%), // #777
grayLighter:           lighten(grayBase, 93.5%), // #eee

brandPrimary:         darken(#428bca, 6.5%), // #337ab7
brandSuccess:         #5cb85c,
brandInfo:            #5bc0de,
brandWarning:         #f0ad4e,
brandDanger:          #d9534f,


//== Scaffolding
//
//## Settings for some of the most global styles.

//** Background color for `<body>`.
bodyBg:               #fff,
//** Global text color on `<body>`.
textColor:            grayDark,

//** Global textual link color.
linkColor:            brandPrimary,
//** Link hover color set via `darken()` function.
linkHoverColor:      darken(linkColor, 15%),
//** Link hover decoration.
linkHoverDecoration: underline,


//== Typography
//
//## Font, line-height, and color for body text, headings, and more.

fontFamilySansSerif:  "Helvetica Neue", Helvetica, Arial, sans-serif,
fontFamilySerif:       Georgia, "Times New Roman", Times, serif,
//** Default monospace fonts for `<code>`, `<kbd>`, and `<pre>`.
fontFamilyMonospace:   Menlo, Monaco, Consolas, "Courier New", monospace,
fontFamilyBase:        fontFamilySansSerif,

fontSizeBase:          14px,
fontSizeLarge:         ceil((fontSizeBase * 1.25)), // ~18px
fontSizeSmall:         ceil((fontSizeBase * 0.85)), // ~12px

fontSizeH1:            floor((fontSizeBase * 2.6)), // ~36px
fontSizeH2:            floor((fontSizeBase * 2.15)), // ~30px
fontSizeH3:            ceil((fontSizeBase * 1.7)), // ~24px
fontSizeH4:            ceil((fontSizeBase * 1.25)), // ~18px
fontSizeH5:            fontSizeBase,
fontSizeH6:            ceil((fontSizeBase * 0.85)), // ~12px

//** Unit-less `line-height` for use in components like buttons.
lineHeightBase:        1.428571429, // 20/14
//** Computed "line-height" (`font-size` * `line-height`) for use with `margin`, `padding`, etc.
lineHeightComputed:    floor((fontSizeBase * lineHeightBase)), // ~20px

//** By default, this inherits from the `<body>`.
headingsFontFamily:    inherit,
headingsFontWeight:    500,
headingsLineHeight:    1.1,
headingsColor:          inherit,


//== Iconography
//
//## Specify custom location and filename of the included Glyphicons icon font. Useful for those including Bootstrap via Bower.

//** Load fonts from this directory.

// [converter] If bootstrap-sass-asset-helper if used, provide path relative to the assets load path.
// [converter] This is because some asset helpers, such as Sprockets, do not work with file-relative paths.
/*icon-font-path: if(bootstrap-sass-asset-helper, "bootstrap/", "../fonts/bootstrap/"),

//** File name for all font files.
icon-font-name:          "glyphicons-halflings-regular",
//** Element ID within SVG icon file.
icon-font-svg-id:        "glyphicons_halflingsregular",
*/









//== Components
//
//## Define common padding and border radius sizes and more. Values based on 14px text and 1.428 line-height (~20px to start).

paddingBaseVertical:     6px,
paddingBaseHorizontal:   12px,

paddingLargeVertical:    10px,
paddingLargeHorizontal:  16px,

paddingSmallVertical:    5px,
paddingSmallHorizontal:  10px,

paddingXsVertical:       1px,
paddingXsHorizontal:     5px,

lineHeightLarge:         1.3333333, // extra decimals for Win 8.1 Chrome
lineHeightSmall:         1.5,

borderRadiusBase:        4px,
borderRadiusLarge:       6px,
borderRadiusSmall:       3px,

//** Global color for active items (e.g., navs or dropdowns).
componentActiveColor:    #fff,
//** Global background color for active items (e.g., navs or dropdowns).
componentActiveBg:       brandPrimary,






/*
//** Width of the `border` for generating carets that indicator dropdowns.
caret-width-base:          4px,
//** Carets increase slightly in size for larger components.
caret-width-large:         5px,
*/





//== Tables
//
//## Customizes the `.table` component with basic values, each used across all table variations.


/*
//** Padding for `<th>`s and `<td>`s.
table-cell-padding:            8px,
//** Padding for cells in `.table-condensed`.
table-condensed-cell-padding:  5px,

//** Default background color used for all tables.
table-bg:                      transparent,
//** Background color used for `.table-striped`.
table-bg-accent:               #f9f9f9,
//** Background color used for `.table-hover`.
table-bg-hover:                #f5f5f5,
table-bg-active:               table-bg-hover,

//** Border color for table and cell borders.
table-border-color:            #ddd,
*/

//== Buttons
//
//## For each of Bootstrap's buttons, define text, background and border color.

btnFontWeight:                normal,

btnDefaultColor:              #333,
btnDefaultBg:                 #fff,
btnDefaultBorder:             #ccc,

btnPrimaryColor:              #fff,
btnPrimaryBg:                 brandPrimary,
btnPrimaryBorder:             darken(btnPrimaryBg, 5%),

btnSuccessColor:              #fff,
btnSuccessBg:                 brandSuccess,
btnSuccessBorder:             darken(btnSuccessBg, 5%),

btnInfoColor:                 #fff,
btnInfoBg:                    brandInfo,
btnInfoBorder:                darken(btnInfoBg, 5%),

btnWarningColor:              #fff,
btnWarningBg:                 brandWarning,
btnWarningBorder:             darken(btnWarningBg, 5%),

btnDangerColor:               #fff,
btnDangerBg:                  brandDanger,
btnDangerBorder:              darken(btnDangerBg, 5%),

btnLinkDisabledColor:        grayLight,

// Allows for customizing button radius independently from global border radius
btnBorderRadiusBase:         borderRadiusBase,
btnBorderRadiusLarge:        borderRadiusLarge,
btnBorderRadiusSmall:        borderRadiusSmall,


//== Forms
//
//##

//** `<input>` background color
inputBg:                       #fff,
//** `<input disabled>` background color
inputBgDisabled:              grayLighter,

//** Text color for `<input>`s
inputColor:                    gray,
//** `<input>` border color
inputBorder:                   #ccc,

// TODO: Rename `inputBorderRadius` to `inputBorderRadiusBase` in v4
//** Default `.form-control` border radius
// This has no effect on `<select>`s in some browsers, due to the limited stylability of `<select>`s in CSS.
inputBorderRadius:            borderRadiusBase,
//** Large `.form-control` border radius
inputBorderRadiusLarge:      borderRadiusLarge,
//** Small `.form-control` border radius
inputBorderRadiusSmall:      borderRadiusSmall,

//** Border color for inputs on focus
inputBorderFocus:             #66afe9,

//** Placeholder text color
inputColorPlaceholder:        #999,

//** Default `.form-control` height
inputHeightBase:              (lineHeightComputed + (paddingBaseVertical * 2) + 2),
//** Large `.form-control` height
inputHeightLarge:             (ceil(fontSizeLarge * lineHeightLarge) + (paddingLargeVertical * 2) + 2),
//** Small `.form-control` height
inputHeightSmall:             (floor(fontSizeSmall * lineHeightSmall) + (paddingSmallVertical * 2) + 2),

//** `.form-group` margin
formGroupMarginBottom:       15px,

legendColor:                   grayDark,
legendBorderColor:            #e5e5e5,

//** Background color for textual input addons
inputGroupAddonBg:           grayLighter,
//** Border color for textual input addons
inputGroupAddonBorderColor: inputBorder,

//** Disabled cursor for form controls and buttons.


//== Dropdowns
//
//## Dropdown menu container and contents.

//** Background for the dropdown menu.
dropdownBg:                    #fff,
//** Dropdown menu `border-color`.
dropdownBorder:                rgba(0,0,0,.15),
//** Dropdown menu `border-color` **for IE8**.
dropdownFallbackBorder:       #ccc,
//** Divider color for between dropdown items.
dropdownDividerBg:            #e5e5e5,

//** Dropdown link text color.
dropdownLinkColor:            grayDark,
//** Hover color for dropdown links.
dropdownLinkHoverColor:      darken(grayDark, 5%),
//** Hover background for dropdown links.
dropdownLinkHoverBg:         #f5f5f5,

//** Active dropdown menu item text color.
dropdownLinkActiveColor:     componentActiveColor,
//** Active dropdown menu item background color.
dropdownLinkActiveBg:        componentActiveBg,

//** Disabled dropdown menu item background color.
dropdownLinkDisabledColor:   grayLight,

//** Text color for headers within dropdown menus.
dropdownHeaderColor:          grayLight,

//** Deprecated `dropdownCaretColor` as of v3.1.0
dropdownCaretColor:           #000,


//-- Z-index master list
//
// Warning: Avoid customizing these values. They're used for a bird's eye view
// of components dependent on the z-axis and are designed to all work together.
//
// Note: These variables are not generated into the Customizer.

/*
zindex-toolbar:            1000,
zindex-dropdown:          1000,
zindex-popover:           1060,
zindex-tooltip:           1070,
zindex-toolbar-fixed:      1030,
zindex-modal-background:  1040,
zindex-modal:             1050,
*/


//== Media queries breakpoints
//
//## Define the breakpoints at which your layout will change, adapting to different screen sizes.

// Extra small screen / phone
//** Deprecated `screenXs` as of v3.0.1
screenXs:                  480px,
//** Deprecated `screenXsMin` as of v3.2.0
screenXsMin:              screenXs,
//** Deprecated `screenPhone` as of v3.0.1
screenPhone:               screenXsMin,

// Small screen / tablet
//** Deprecated `screenSm` as of v3.0.1
screenSm:                  768px,
screenSmMin:              screenSm,
//** Deprecated `screenTablet` as of v3.0.1
screenTablet:              screenSmMin,

// Medium screen / desktop
//** Deprecated `screenMd` as of v3.0.1
screenMd:                  992px,
screenMdMin:              screenMd,
//** Deprecated `screenDesktop` as of v3.0.1
screenDesktop:             screenMdMin,

// Large screen / wide desktop
//** Deprecated `screenLg` as of v3.0.1
screenLg:                  1200px,
screenLgMin:              screenLg,
//** Deprecated `screenLgDesktop` as of v3.0.1
screenLgDesktop:          screenLgMin,

// So media queries don't overlap when required, provide a maximum
screenXsMax:              (screenSmMin - 1),
screenSmMax:              (screenMdMin - 1),
screenMdMax:              (screenLgMin - 1),


//== Grid system
//
//## Define your custom responsive grid.

//** Number of columns in the grid.
gridColumns:              12,
//** Padding between columns. Gets divided in half for the left and right.
gridGutterWidth:         30px,
// toolbar collapse
//** Point at which the toolbar becomes uncollapsed.
gridFloatBreakpoint:     screenSmMin,
//** Point at which the toolbar begins collapsing.
gridFloatBreakpointMax: (gridFloatBreakpoint - 1),


//== Container sizes
//
//## Define the maximum width of `.container` for different screen sizes.

// Small screen / tablet
containerTablet:             (720px + gridGutterWidth),
//** For `screenSmMin` and up.
containerSm:                 containerTablet,

// Medium screen / desktop
containerDesktop:            (940px + gridGutterWidth),
//** For `screenMdMin` and up.
containerMd:                 containerDesktop,

// Large screen / wide desktop
containerLargeDesktop:      (1140px + gridGutterWidth),
//** For `screenLgMin` and up.
containerLg:                 containerLargeDesktop,


//== toolbar
//
//##

// Basics of a toolbar
toolbarHeight:                    50px,
toolbarMarginBottom:             lineHeightComputed,
toolbarBorderRadius:             borderRadiusBase,
toolbarPaddingHorizontal:        floor((gridGutterWidth / 2)),
toolbarPaddingVertical:          ((toolbarHeight - lineHeightComputed) / 2),
toolbarCollapseMaxHeight:       340px,

toolbarDefaultColor:             #777,
toolbarDefaultBg:                #f8f8f8,
toolbarDefaultBorder:            darken(toolbarDefaultBg, 6.5%),

// toolbar links
toolbarDefaultLinkColor:                #777,
toolbarDefaultLinkHoverColor:          #333,
toolbarDefaultLinkHoverBg:             transparent,
toolbarDefaultLinkActiveColor:         #555,
toolbarDefaultLinkActiveBg:            darken(toolbarDefaultBg, 6.5%),
toolbarDefaultLinkDisabledColor:       #ccc,
toolbarDefaultLinkDisabledBg:          transparent,

// toolbar brand label
toolbarDefaultBrandColor:               toolbarDefaultLinkColor,
toolbarDefaultBrandHoverColor:         darken(toolbarDefaultBrandColor, 10%),
toolbarDefaultBrandHoverBg:            transparent,

// toolbar toggle
toolbarDefaultToggleHoverBg:           #ddd,
toolbarDefaultToggleIconBarBg:        #888,
toolbarDefaultToggleBorderColor:       #ddd,


//=== Inverted toolbar
// Reset inverted toolbar basics
toolbarInverseColor:                      lighten(grayLight, 15%),
toolbarInverseBg:                         #222,
toolbarInverseBorder:                     darken(toolbarInverseBg, 10%),

// Inverted toolbar links
toolbarInverseLinkColor:                 lighten(grayLight, 15%),
toolbarInverseLinkHoverColor:           #fff,
toolbarInverseLinkHoverBg:              transparent,
toolbarInverseLinkActiveColor:          toolbarInverseLinkHoverColor,
toolbarInverseLinkActiveBg:             darken(toolbarInverseBg, 10%),
toolbarInverseLinkDisabledColor:        #444,
toolbarInverseLinkDisabledBg:           transparent,

// Inverted toolbar brand label
toolbarInverseBrandColor:                toolbarInverseLinkColor,
toolbarInverseBrandHoverColor:          #fff,
toolbarInverseBrandHoverBg:             transparent,

// Inverted toolbar toggle
toolbarInverseToggleHoverBg:            #333,
toolbarInverseToggleIconBarBg:         #fff,
toolbarInverseToggleBorderColor:        #333,


//== Navs
//
//##

//=== Shared nav styles
navLinkPadding:                          10px 15px,
navLinkHoverBg:                         grayLighter,

navDisabledLinkColor:                   grayLight,
navDisabledLinkHoverColor:             grayLight,




//== Tabs
navTabsBorderColor:                     #ddd,

navTabsLinkHoverBorderColor:          grayLighter,

navTabsActiveLinkHoverBg:             bodyBg,
navTabsActiveLinkHoverColor:          gray,
navTabsActiveLinkHoverBorderColor:   #ddd,

navTabsJustifiedLinkBorderColor:            #ddd,
navTabsJustifiedActiveLinkBorderColor:     bodyBg,


/*
//== Pills
nav-pills-border-radius:                   borderRadiusBase,
nav-pills-active-link-hover-bg:            componentActiveBg,
nav-pills-active-linkHoverColor:         componentActiveColor,
*/




//== Pagination
//
//##

/*
pagination-color:                     linkColor,
pagination-bg:                        #fff,
pagination-border:                    #ddd,

pagination-hover-color:               linkHoverColor,
pagination-hover-bg:                  grayLighter,
pagination-hover-border:              #ddd,

pagination-active-color:              #fff,
pagination-active-bg:                 brandPrimary,
pagination-active-border:             brandPrimary,

pagination-disabled-color:            grayLight,
pagination-disabled-bg:               #fff,
pagination-disabled-border:           #ddd,
*/



//== Pager
//
//##


/*
pager-bg:                             pagination-bg,
pager-border:                         pagination-border,
pager-border-radius:                  15px,

pager-hover-bg:                       pagination-hover-bg,

pager-active-bg:                      pagination-active-bg,
pager-active-color:                   pagination-active-color,

pager-disabled-color:                 pagination-disabled-color,

*/

//== Jumbotron
//
//##

jumbotronPadding:              30px,
jumbotronColor:                inherit,
jumbotronBg:                   grayLighter,
jumbotronHeadingColor:        inherit,
jumbotronFontSize:            ceil((fontSizeBase * 1.5)),
jumbotronHeadingFontSize:    ceil((fontSizeBase * 4.5)),


//== Form states and alerts
//
//## Define colors for form feedback states and, by default, alerts.


stateSuccessText:             #3c763d,
stateSuccessBg:               #dff0d8,
stateSuccessBorder:           darken(adjust-hue(stateSuccessBg, -10), 5%),

stateInfoText:                #31708f,
stateInfoBg:                  #d9edf7,
stateInfoBorder:              darken(adjust-hue(stateInfoBg, -10), 7%),

stateWarningText:             #8a6d3b,
stateWarningBg:               #fcf8e3,
stateWarningBorder:           darken(adjust-hue(stateWarningBg, -10), 5%),

stateDangerText:              #a94442,
stateDangerBg:                #f2dede,
stateDangerBorder:            darken(adjust-hue(stateDangerBg, -10), 5%),


//== Tooltips
//
//##

/*
//** Tooltip max width
tooltip-max-width:           200px,
//** Tooltip text color
tooltip-color:               #fff,
//** Tooltip background color
tooltip-bg:                  #000,
tooltip-opacity:             .9,

//** Tooltip arrow width
tooltip-arrow-width:         5px,
//** Tooltip arrow color
tooltip-arrow-color:         tooltip-bg,
*/


//== Popovers
//
//##
/*
//** Popover body background color
popover-bg:                          #fff,
//** Popover maximum width
popover-max-width:                   276px,
//** Popover border color
popover-border-color:                rgba(0,0,0,.2),
//** Popover fallback border color
popover-fallback-border-color:       #ccc,

//** Popover title background color
popover-title-bg:                    darken(popover-bg, 3%),

//** Popover arrow width
popover-arrow-width:                 10px,
//** Popover arrow color
popover-arrow-color:                 popover-bg,

//** Popover outer arrow width
popover-arrow-outer-width:           (popover-arrow-width + 1),
//** Popover outer arrow color
popover-arrow-outer-color:           fade_in(popover-border-color, 0.05),
//** Popover outer arrow fallback color
popover-arrow-outer-fallback-color:  darken(popover-fallback-border-color, 20%),
*/

//== Labels
//
//##
/*
//** Default label background color
label-default-bg:            grayLight,
//** Primary label background color
label-primary-bg:            brandPrimary,
//** Success label background color
label-success-bg:            brandSuccess,
//** Info label background color
label-info-bg:               brandInfo,
//** Warning label background color
label-warning-bg:            brandWarning,
//** Danger label background color
label-danger-bg:             brandDanger,

//** Default label text color
label-color:                 #fff,
//** Default text color of a linked label
label-linkHoverColor:      #fff,
*/

//== Modals
//
//##

//** Padding applied to the modal body
modalInnerPadding:         15px,

//** Padding applied to the modal title
modalTitlePadding:         15px,
//** Modal title line-height
modalTitleLineHeight:     lineHeightBase,

//** Background color of modal content area
modalContentBg:                             #fff,
//** Modal content border color
modalContentBorderColor:                   rgba(0,0,0,.2),
//** Modal content border color **for IE8**
modalContentFallbackBorderColor:          #999,

//** Modal backdrop background color
modalBackdropBg:           #000,
//** Modal backdrop opacity
modalBackdropOpacity:      .5,
//** Modal header border color
modalHeaderBorderColor:   #e5e5e5,
//** Modal footer border color
modalFooterBorderColor:   modalHeaderBorderColor,

modalLg:                    900px,
modalMd:                    600px,
modalSm:                    300px,


//== Alerts
//
//## Define alert colors, border radius, and padding.

alertPadding:               15px,
alertBorderRadius:         borderRadiusBase,
alertLinkFontWeight:      bold,

alertSuccessBg:            stateSuccessBg,
alertSuccessText:          stateSuccessText,
alertSuccessBorder:        stateSuccessBorder,

alertInfoBg:               stateInfoBg,
alertInfoText:             stateInfoText,
alertInfoBorder:           stateInfoBorder,

alertWarningBg:            stateWarningBg,
alertWarningText:          stateWarningText,
alertWarningBorder:        stateWarningBorder,

alertDangerBg:             stateDangerBg,
alertDangerText:           stateDangerText,
alertDangerBorder:         stateDangerBorder,


//== Progress bars
//
//##

//** Background color of the whole progress component
progressBg:                 #f5f5f5,
//** Progress bar text color
progressBarColor:          #fff,
//** Variable for setting rounded corners on progress bar.
progressBorderRadius:      borderRadiusBase,

//** Default progress bar color
progressBarBg:             brandPrimary,
//** Success progress bar color
progressBarSuccessBg:     brandSuccess,
//** Warning progress bar color
progressBarWarningBg:     brandWarning,
//** Danger progress bar color
progressBarDangerBg:      brandDanger,
//** Info progress bar color
progressBarInfoBg:        brandInfo,


//== List group
//
//##

//** Background color on `.list-group-item`
listGroupBg:                 #fff,
//** `.list-group-item` border color
listGroupBorder:             #ddd,
//** List group border radius
listGroupBorderRadius:      borderRadiusBase,

//** Background color of single list items on hover
listGroupHoverBg:           #f5f5f5,
//** Text color of active list items
listGroupActiveColor:       componentActiveColor,
//** Background color of active list items
listGroupActiveBg:          componentActiveBg,
//** Border color of active list elements
listGroupActiveBorder:      listGroupActiveBg,
//** Text color for content within active list items
listGroupActiveTextColor:  lighten(listGroupActiveBg, 40%),

//** Text color of disabled list items
listGroupDisabledColor:      grayLight,
//** Background color of disabled list items
listGroupDisabledBg:         grayLighter,
//** Text color for content within disabled list items
listGroupDisabledTextColor: listGroupDisabledColor,

listGroupLinkColor:         #555,
listGroupLinkHoverColor:   listGroupLinkColor,
listGroupLinkHeadingColor: #333,


//== Cards
//
//##

cardBg:                    #fff,
cardBodyPadding:          15px,
cardHeadingPadding:       10px 15px,
cardFooterPadding:        cardHeadingPadding,
cardBorderRadius:         borderRadiusBase,

//** Border color for elements within panels
cardInnerBorder:          #ddd,
cardFooterBg:             #f5f5f5,

cardDefaultText:          grayDark,
cardDefaultBorder:        #ddd,
cardDefaultHeadingBg:    #f5f5f5,

cardPrimaryText:          #fff,
cardPrimaryBorder:        brandPrimary,
cardPrimaryHeadingBg:    brandPrimary,

cardSuccessText:          stateSuccessText,
cardSuccessBorder:        stateSuccessBorder,
cardSuccessHeadingBg:    stateSuccessBg,

cardInfoText:             stateInfoText,
cardInfoBorder:           stateInfoBorder,
cardInfoHeadingBg:       stateInfoBg,

cardWarningText:          stateWarningText,
cardWarningBorder:        stateWarningBorder,
cardWarningHeadingBg:    stateWarningBg,

cardDangerText:           stateDangerText,
cardDangerBorder:         stateDangerBorder,
cardDangerHeadingBg:     stateDangerBg,


//== Thumbnails
//
//##

//** Padding around the thumbnail image
thumbnailPadding:           4px,
//** Thumbnail background color
thumbnailBg:                bodyBg,
//** Thumbnail border color
thumbnailBorder:            #ddd,
//** Thumbnail border radius
thumbnailBorderRadius:     borderRadiusBase,

//** Custom text color for thumbnail captions
thumbnailCaptionColor:     textColor,
//** Padding around the thumbnail caption
thumbnailCaptionPadding:   9px,


//== Wells
//
//##

wellBg:                     #f5f5f5,
wellBorder:                 darken(wellBg, 7%),


//== Badges
//
//##

badgeColor:                 #fff,
//** Linked badge text color on hover
badgeLinkHoverColor:      #fff,
badgeBg:                    grayLight,

//** Badge text color in active nav link
badgeActiveColor:          linkColor,
//** Badge background color in active nav link
badgeActiveBg:             #fff,

badgeFontWeight:           bold,
badgeLineHeight:           1,
badgeBorderRadius:         10px,


//== Breadcrumbs
//
//##
/*
breadcrumbPaddingVertical:   8px,
breadcrumbPaddingHorizontal: 15px,
//** Breadcrumb background color
breadcrumbBg:                 #f5f5f5,
//** Breadcrumb text color
breadcrumbColor:              #ccc,
//** Text color of current page in the breadcrumb
breadcrumbActiveColor:       grayLight,
//** Textual separator for between breadcrumb elements
breadcrumbSeparator:          "/",
*/

//== Carousel
//
//##

/*
carouselTextShadow:                        0 1px 2px rgba(0,0,0,.6),

carouselControlColor:                      #fff,
carouselControlWidth:                      15%,
carouselControlOpacity:                    .5,
carouselControlFontSize:                  20px,

carouselIndicatorActiveBg:                #fff,
carouselIndicatorBorderColor:             #fff,

carouselCaptionColor:                      #fff,

*/
//== Close
//
//##

/*
closeFontWeight:           bold,
closeColor:                 #000,
closeTextShadow:           0 1px 0 #fff,
*/




//== Code
//
//##
/*
codeColor:                  #c7254e,
codeBg:                     #f9f2f4,

kbdColor:                   #fff,
kbdBg:                      #333,

preBg:                      #f5f5f5,
preColor:                   grayDark,
preBorderColor:            #ccc,
preScrollableMaxHeight:   340px,
*/

//== Type
//
//##

//** Horizontal offset for forms and lists.
componentOffsetHorizontal: 180px,
//** Text muted color
textMuted:                  grayLight,
//** Abbreviations and acronyms border color
abbrBorderColor:           grayLight,
//** Headings small color
headingsSmallColor:        grayLight,
//** Blockquote small color
blockquoteSmallColor:      grayLight,
//** Blockquote font size
blockquoteFontSize:        (fontSizeBase * 1.25),
//** Blockquote border color
blockquoteBorderColor:     grayLighter,
//** Page header border color
pageHeaderBorderColor:    grayLighter,
//** Width of horizontal description list titles
dlHorizontalOffset:        componentOffsetHorizontal,
//** Point at which .dl-horizontal becomes horizontal
dlHorizontalBreakpoint:    gridFloatBreakpoint,
//** Horizontal line color.
hrBorder:                   grayLighter,