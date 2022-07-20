'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var lodash = require('lodash');
var merge = require('lodash.merge');
var get = require('lodash.get');
var isEmpty = require('lodash.isempty');
var Color = require('tinycolor2');
require('lodash.omitby');
var isNil = require('lodash.isnil');
require('lodash.pick');
require('lodash.omit');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var merge__default = /*#__PURE__*/_interopDefaultLegacy(merge);
var get__default = /*#__PURE__*/_interopDefaultLegacy(get);
var isEmpty__default = /*#__PURE__*/_interopDefaultLegacy(isEmpty);
var Color__default = /*#__PURE__*/_interopDefaultLegacy(Color);
var isNil__default = /*#__PURE__*/_interopDefaultLegacy(isNil);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function mode(light, dark) {
    return function (props) { return (props.colorMode === 'dark' ? dark : light); };
}
var transparentize = function (color, opacity) { return function (theme) {
    var raw = getColor$1(theme, color);
    return Color__default["default"](raw).setAlpha(opacity).toRgbString();
}; };
var getColor$1 = function (theme, color, fallback) {
    var hex = get__default["default"](theme, "colors.".concat(color), color);
    var isValid = Color__default["default"](hex).isValid();
    return isValid ? hex : fallback;
};
function randomColor(opts) {
    var fallback = Color__default["default"].random().toHexString();
    if (!opts || isEmpty__default["default"](opts)) {
        return fallback;
    }
    if (opts.string && opts.colors) {
        return randomColorFromList(opts.string, opts.colors);
    }
    if (opts.string && !opts.colors) {
        return randomColorFromString(opts.string);
    }
    if (opts.colors && !opts.string) {
        return randomFromList(opts.colors);
    }
    return fallback;
}
function randomFromList(list) {
    return list[Math.floor(Math.random() * list.length)];
}
function randomColorFromList(str, list) {
    var index = 0;
    if (str.length === 0)
        return list[0];
    for (var i = 0; i < str.length; i++) {
        index = str.charCodeAt(i) + ((index << 5) - index);
        index = index & index;
    }
    index = ((index % list.length) + list.length) % list.length;
    return list[index];
}
function randomColorFromString(str) {
    var hash = 0;
    if (str.length === 0)
        return hash.toString();
    for (var i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
        hash = hash & hash;
    }
    var color = '#';
    for (var j = 0; j < 3; j++) {
        var value = (hash >> (j * 8)) & 255;
        color += ('00' + value.toString(16)).substr(-2);
    }
    return color;
}

function getRandomString(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
function getColorFormColorScheme(props) {
    var theme = props.theme, colorScheme = props.colorScheme, isDisabled = props.isDisabled;
    var simpleColorScheme = colorScheme.split('.')[0];
    if (isDisabled)
        return 'gray.300';
    else if (simpleColorScheme in theme.colors) {
        return theme.colors[simpleColorScheme][0] === '#'
            ? simpleColorScheme
            : theme.colors[simpleColorScheme][400] ||
                theme.colors[simpleColorScheme][200];
    }
    else
        return 'primary.200';
}
// TODO: This function can be removed.
function getColorScheme(props, customColorScheme) {
    var theme = props.theme, colorScheme = props.colorScheme;
    colorScheme = customColorScheme || colorScheme;
    if (!(colorScheme in theme.colors))
        return 'primary';
    else {
        if (typeof theme.colors[colorScheme] === 'object')
            return colorScheme;
    }
}
var inValidBreakpointProps = ['style', 'children', 'shadowOffset'];
function hasValidBreakpointFormat(breaks, themeBreakpoints, property) {
    if (property && inValidBreakpointProps.indexOf(property) !== -1) {
        return false;
    }
    else if (Array.isArray(breaks)) {
        return breaks.length ? true : false;
    }
    else if (typeof breaks === 'object' && breaks !== null) {
        var keys = Object.keys(breaks);
        var themeBreakPointKeys = Object.keys(themeBreakpoints);
        for (var i = 0; i < keys.length; i++) {
            if (themeBreakPointKeys.indexOf(keys[i]) === -1) {
                return false;
            }
        }
        return true;
    }
    else {
        return false;
    }
}
function findLastValidBreakpoint(values, themeBreakpoints, currentBreakpoint) {
    var _a;
    var valArray = Array.isArray(values)
        ? values
        : Object.keys(themeBreakpoints).map(function (bPoint) { return values[bPoint]; });
    return ((_a = valArray[currentBreakpoint]) !== null && _a !== void 0 ? _a : valArray
        .slice(0, currentBreakpoint + 1)
        .filter(function (v) { return !isNil__default["default"](v); })
        .pop());
}

var resolveValueWithBreakpoint = function (values, breakpointTheme, currentBreakpoint, property) {
    if (hasValidBreakpointFormat(values, breakpointTheme, property)) {
        // Check the last valid breakpoint value from all values
        // If current breakpoint is `md` and we have `base` then `lg`, then last value will be taken(`base` in this case)
        return findLastValidBreakpoint(values, breakpointTheme, currentBreakpoint);
    }
    else {
        return values;
    }
};

function isEmptyObj(obj) {
    for (var _x in obj) {
        return false;
    }
    return true;
}

var isNumber = function (n) { return typeof n === 'number' && !isNaN(n); };
var getColor = function (rawValue, scale, theme) {
    var alphaMatched = typeof rawValue === 'string' ? rawValue === null || rawValue === void 0 ? void 0 : rawValue.match(/:alpha\.\d\d?\d?/) : false;
    if (alphaMatched) {
        var colorMatched = rawValue === null || rawValue === void 0 ? void 0 : rawValue.match(/^.*?(?=:alpha)/);
        var color_1 = colorMatched ? colorMatched[0] : colorMatched;
        var alphaValue = alphaMatched[0].split('.')[1];
        var alphaFromToken = get__default["default"](theme.opacity, alphaValue, alphaValue);
        var alpha = alphaFromToken ? parseFloat(alphaFromToken) : 1;
        var newColor = transparentize(color_1, alpha)(theme);
        return newColor;
    }
    else {
        return get__default["default"](scale, rawValue, rawValue);
    }
};
// To handle negative margins
var getMargin = function (n, scale) {
    n = convertStringNumberToNumber('margin', n);
    if (!isNumber(n)) {
        return get__default["default"](scale, n, n);
    }
    var isNegative = n < 0;
    var absolute = Math.abs(n);
    var value = get__default["default"](scale, absolute, absolute);
    if (!isNumber(value)) {
        return isNegative ? '-' + value : value;
    }
    return value * (isNegative ? -1 : 1);
};
var layout = {
    width: {
        property: 'width',
        scale: 'sizes'
    },
    w: {
        property: 'width',
        scale: 'sizes'
    },
    height: {
        property: 'height',
        scale: 'sizes'
    },
    h: {
        property: 'height',
        scale: 'sizes'
    },
    minWidth: {
        property: 'minWidth',
        scale: 'sizes'
    },
    minW: {
        property: 'minWidth',
        scale: 'sizes'
    },
    minHeight: {
        property: 'minHeight',
        scale: 'sizes'
    },
    minH: {
        property: 'minHeight',
        scale: 'sizes'
    },
    maxWidth: {
        property: 'maxWidth',
        scale: 'sizes'
    },
    maxW: {
        property: 'maxWidth',
        scale: 'sizes'
    },
    maxHeight: {
        property: 'maxHeight',
        scale: 'sizes'
    },
    maxH: {
        property: 'maxHeight',
        scale: 'sizes'
    },
    size: {
        properties: ['width', 'height'],
        scale: 'sizes'
    },
    boxSize: {
        properties: ['width', 'height'],
        scale: 'sizes'
    },
    overflow: true,
    overflowX: true,
    overflowY: true,
    display: true,
    verticalAlign: true,
    textAlign: true
};
var flexbox = {
    alignItems: true,
    alignContent: true,
    justifyItems: true,
    justifyContent: true,
    flexWrap: true,
    flexDirection: true,
    flexDir: {
        property: 'flexDirection'
    },
    // item
    flex: true,
    flexGrow: true,
    flexShrink: true,
    flexBasis: true,
    justifySelf: true,
    alignSelf: true,
    order: true
};
var position = {
    position: true,
    zIndex: {
        property: 'zIndex'
    },
    top: {
        property: 'top',
        scale: 'space'
    },
    right: {
        property: 'right',
        scale: 'space'
    },
    bottom: {
        property: 'bottom',
        scale: 'space'
    },
    left: {
        property: 'left',
        scale: 'space'
    }
};
var color = {
    color: {
        property: 'color',
        scale: 'colors',
        transformer: getColor
    },
    tintColor: {
        property: 'tintColor',
        scale: 'colors',
        transformer: getColor
    },
    backgroundColor: {
        property: 'backgroundColor',
        scale: 'colors',
        transformer: getColor
    },
    opacity: {
        property: 'opacity',
        scale: 'opacity'
    },
    bg: {
        property: 'backgroundColor',
        scale: 'colors',
        transformer: getColor
    },
    bgColor: {
        property: 'backgroundColor',
        scale: 'colors',
        transformer: getColor
    },
    background: {
        property: 'backgroundColor',
        scale: 'colors',
        transformer: getColor
    },
    textDecorationColor: {
        property: 'textDecorationColor',
        scale: 'colors',
        transformer: getColor
    }
};
var border = {
    borderWidth: {
        property: 'borderWidth',
        scale: 'borderWidths'
    },
    borderStyle: {
        property: 'borderStyle',
        scale: 'borderStyles'
    },
    borderColor: {
        property: 'borderColor',
        scale: 'colors',
        transformer: getColor
    },
    borderRadius: {
        property: 'borderRadius',
        scale: 'radii'
    },
    borderTop: {
        property: 'borderTop',
        scale: 'borders'
    },
    borderTopRadius: {
        properties: ['borderTopLeftRadius', 'borderTopRightRadius'],
        scale: 'radii'
    },
    borderLeftRadius: {
        properties: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
        scale: 'radii'
    },
    borderRightRadius: {
        properties: ['borderTopRightRadius', 'borderBottomRightRadius'],
        scale: 'radii'
    },
    borderTopLeftRadius: {
        property: 'borderTopLeftRadius',
        scale: 'radii'
    },
    borderTopRightRadius: {
        property: 'borderTopRightRadius',
        scale: 'radii'
    },
    borderRight: {
        property: 'borderRight',
        scale: 'borders'
    },
    borderBottom: {
        property: 'borderBottom',
        scale: 'borders'
    },
    borderBottomLeftRadius: {
        property: 'borderBottomLeftRadius',
        scale: 'radii'
    },
    borderBottomRightRadius: {
        property: 'borderBottomRightRadius',
        scale: 'radii'
    },
    borderLeft: {
        property: 'borderLeft',
        scale: 'borders'
    },
    borderX: {
        properties: ['borderLeft', 'borderRight'],
        scale: 'borders'
    },
    borderY: {
        properties: ['borderTop', 'borderBottom'],
        scale: 'borders'
    },
    borderTopWidth: {
        property: 'borderTopWidth',
        scale: 'borderWidths'
    },
    borderTopColor: {
        property: 'borderTopColor',
        scale: 'colors',
        transformer: getColor
    },
    borderTopStyle: {
        property: 'borderTopStyle',
        scale: 'borderStyles'
    },
    borderBottomWidth: {
        property: 'borderBottomWidth',
        scale: 'borderWidths'
    },
    borderBottomColor: {
        property: 'borderBottomColor',
        scale: 'colors',
        transformer: getColor
    },
    borderBottomStyle: {
        property: 'borderBottomStyle',
        scale: 'borderStyles'
    },
    borderLeftWidth: {
        property: 'borderLeftWidth',
        scale: 'borderWidths'
    },
    borderLeftColor: {
        property: 'borderLeftColor',
        scale: 'colors',
        transformer: getColor
    },
    borderLeftStyle: {
        property: 'borderLeftStyle',
        scale: 'borderStyles'
    },
    borderRightWidth: {
        property: 'borderRightWidth',
        scale: 'borderWidths'
    },
    borderRightColor: {
        property: 'borderRightColor',
        scale: 'colors',
        transformer: getColor
    },
    borderRightStyle: {
        property: 'borderRightStyle',
        scale: 'borderStyles'
    },
    rounded: {
        property: 'borderRadius',
        scale: 'radii'
    },
    roundedTopLeft: {
        property: 'borderTopLeftRadius',
        scale: 'radii'
    },
    roundedTopRight: {
        property: 'borderTopRightRadius',
        scale: 'radii'
    },
    roundedBottomLeft: {
        property: 'borderBottomLeftRadius',
        scale: 'radii'
    },
    roundedBottomRight: {
        property: 'borderBottomRightRadius',
        scale: 'radii'
    },
    roundedTop: {
        properties: ['borderTopLeftRadius', 'borderTopRightRadius'],
        scale: 'radii'
    },
    borderBottomRadius: {
        properties: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
        scale: 'radii'
    },
    roundedBottom: {
        properties: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
        scale: 'radii'
    },
    roundedLeft: {
        properties: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
        scale: 'radii'
    },
    roundedRight: {
        properties: ['borderTopRightRadius', 'borderBottomRightRadius'],
        scale: 'radii'
    }
};
var background = {
    backgroundSize: true,
    backgroundPosition: true,
    backgroundRepeat: true,
    backgroundAttachment: true,
    backgroundBlendMode: true,
    bgImage: {
        property: 'backgroundImage'
    },
    bgImg: {
        property: 'backgroundImage'
    },
    bgBlendMode: {
        property: 'backgroundBlendMode'
    },
    bgSize: {
        property: 'backgroundSize'
    },
    bgPosition: {
        property: 'backgroundPosition'
    },
    bgPos: {
        property: 'backgroundPosition'
    },
    bgRepeat: {
        property: 'backgroundRepeat'
    },
    bgAttachment: {
        property: 'backgroundAttachment'
    }
};
var space = {
    margin: {
        property: 'margin',
        scale: 'space',
        transformer: getMargin
    },
    m: {
        property: 'margin',
        scale: 'space',
        transformer: getMargin
    },
    marginTop: {
        property: 'marginTop',
        scale: 'space',
        transformer: getMargin
    },
    mt: {
        property: 'marginTop',
        scale: 'space',
        transformer: getMargin
    },
    marginRight: {
        property: 'marginRight',
        scale: 'space',
        transformer: getMargin
    },
    mr: {
        property: 'marginRight',
        scale: 'space',
        transformer: getMargin
    },
    marginBottom: {
        property: 'marginBottom',
        scale: 'space',
        transformer: getMargin
    },
    mb: {
        property: 'marginBottom',
        scale: 'space',
        transformer: getMargin
    },
    marginLeft: {
        property: 'marginLeft',
        scale: 'space',
        transformer: getMargin
    },
    ml: {
        property: 'marginLeft',
        scale: 'space',
        transformer: getMargin
    },
    marginX: {
        properties: ['marginLeft', 'marginRight'],
        scale: 'space',
        transformer: getMargin
    },
    mx: {
        properties: ['marginLeft', 'marginRight'],
        scale: 'space',
        transformer: getMargin
    },
    marginY: {
        properties: ['marginTop', 'marginBottom'],
        scale: 'space',
        transformer: getMargin
    },
    my: {
        properties: ['marginTop', 'marginBottom'],
        scale: 'space',
        transformer: getMargin
    },
    padding: {
        property: 'padding',
        scale: 'space'
    },
    p: {
        property: 'padding',
        scale: 'space'
    },
    paddingTop: {
        property: 'paddingTop',
        scale: 'space'
    },
    pt: {
        property: 'paddingTop',
        scale: 'space'
    },
    paddingRight: {
        property: 'paddingRight',
        scale: 'space'
    },
    pr: {
        property: 'paddingRight',
        scale: 'space'
    },
    paddingBottom: {
        property: 'paddingBottom',
        scale: 'space'
    },
    pb: {
        property: 'paddingBottom',
        scale: 'space'
    },
    paddingLeft: {
        property: 'paddingLeft',
        scale: 'space'
    },
    pl: {
        property: 'paddingLeft',
        scale: 'space'
    },
    paddingX: {
        properties: ['paddingLeft', 'paddingRight'],
        scale: 'space'
    },
    px: {
        properties: ['paddingLeft', 'paddingRight'],
        scale: 'space'
    },
    paddingY: {
        properties: ['paddingTop', 'paddingBottom'],
        scale: 'space'
    },
    py: {
        properties: ['paddingTop', 'paddingBottom'],
        scale: 'space'
    },
    gap: {
        property: 'gap',
        scale: 'space'
    }
};
var typography$1 = {
    fontFamily: {
        property: 'fontFamily',
        scale: 'fonts',
        transformer: function (val, scale) {
            var value;
            if (scale.hasOwnProperty(val)) {
                value = get__default["default"](scale, val);
            }
            else {
                value = get__default["default"](scale, val, val);
            }
            return value ? value.toString() : undefined;
        }
    },
    fontSize: {
        property: 'fontSize',
        scale: 'fontSizes'
    },
    fontWeight: {
        property: 'fontWeight',
        scale: 'fontWeights',
        transformer: function (val, scale) {
            return val ? get__default["default"](scale, val, val).toString() : val;
        }
    },
    lineHeight: {
        property: 'lineHeight',
        scale: 'lineHeights'
    },
    letterSpacing: {
        property: 'letterSpacing',
        scale: 'letterSpacings'
    },
    textAlign: true,
    fontStyle: true,
    wordBreak: true,
    overflowWrap: true,
    textOverflow: true,
    textTransform: true,
    whiteSpace: true,
    textDecoration: { property: 'textDecorationLine' },
    txtDecor: { property: 'textDecorationLine' },
    textDecorationLine: true
};
var extraProps = {
    outline: true,
    outlineWidth: true,
    outlineColor: true,
    outlineStyle: true,
    shadow: {
        scale: 'shadows'
    },
    cursor: true,
    overflow: true,
    userSelect: { property: 'userSelect' }
};
var propConfig = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, color), space), layout), flexbox), border), position), typography$1), background), extraProps);
// For backward compatibility with 3.0 of props like non token string numbers `<Box mt={"39"} />` => used to get applied as 39px. RN expects fontWeight to be string and crashes with numbers
// https://reactnative.dev/docs/text-style-props#fontweight
var convertStringNumberToNumber = function (key, value) {
    if (typeof value === 'string' &&
        key !== 'fontWeight' &&
        value &&
        !isNaN(Number(value))) {
        return parseFloat(value);
    }
    return value;
};
var getRNKeyAndStyleValue = function (_a) {
    var _b, _c;
    var config = _a.config, value = _a.value, key = _a.key, theme = _a.theme, styledSystemProps = _a.styledSystemProps, currentBreakpoint = _a.currentBreakpoint, platform = _a.platform;
    var style = {};
    if (config === true) {
        style = __assign(__assign({}, style), (_b = {}, _b[key] = convertStringNumberToNumber(key, value), _b));
    }
    else if (config) {
        //@ts-ignore
        var property = config.property, scale = config.scale, properties = config.properties, transformer = config.transformer;
        var val_1 = value;
        // console.log('zzzz style system props', theme, scale, value, transformer);
        if (transformer) {
            val_1 = transformer(val_1, theme[scale], theme, styledSystemProps.fontSize);
        }
        else {
            // If a token is not found in the theme
            val_1 = get__default["default"](theme[scale], value, value);
        }
        if (typeof val_1 === 'string') {
            if (val_1.endsWith('px')) {
                val_1 = parseFloat(val_1);
                //TODO: build-time
                // } else if (val.endsWith('em') && Platform.OS !== 'web') {
            }
            else if (val_1.endsWith('em') && platform !== 'web') {
                var fontSize = resolveValueWithBreakpoint(styledSystemProps.fontSize, theme.breakpoints, currentBreakpoint, key);
                val_1 =
                    parseFloat(val_1) *
                        parseFloat(get__default["default"](theme.fontSizes, fontSize, fontSize));
            }
        }
        val_1 = convertStringNumberToNumber(key, val_1);
        if (properties) {
            //@ts-ignore
            properties.forEach(function (property) {
                var _a;
                style = __assign(__assign({}, style), (_a = {}, _a[property] = val_1, _a));
            });
        }
        else if (property) {
            style = __assign(__assign({}, style), (_c = {}, _c[property] = val_1, _c));
        }
        else {
            style = __assign(__assign({}, style), val_1);
        }
    }
    return style;
};
var getStyleAndFilteredProps = function (_a) {
    var _b;
    var theme = _a.theme, currentBreakpoint = _a.currentBreakpoint, getResponsiveStyles = _a.getResponsiveStyles, styledSystemProps = _a.styledSystemProps, platform = _a.platform;
    var styleFromProps = {};
    var restDefaultProps = {};
    var unResolvedProps = {};
    var dataSet = {};
    var responsiveStyles = null;
    // console.log(styledSystemProps, '&&&&&');
    var orderedBreakPoints = Object.entries(
    //@ts-ignore
    theme.breakpoints
    //@ts-ignore
    ).sort(function (a, b) { return a[1] - b[1]; });
    var _loop_1 = function (key) {
        var _d, _e;
        var rawValue = styledSystemProps[key];
        var config = propConfig[key];
        // TODO: refactor
        // Start: For edge cases
        if (!getResponsiveStyles &&
            hasValidBreakpointFormat(rawValue, theme.breakpoints)) {
            unResolvedProps[key] = rawValue;
        }
        // TODO: refactor space prop for Stack Component
        // if (key === 'space') {
        //   unResolvedProps[key] = rawValue;
        // }
        // End: For edge cases
        if (hasValidBreakpointFormat(rawValue, theme.breakpoints)) {
            if (!responsiveStyles)
                responsiveStyles = {};
            var value = rawValue;
            if (Array.isArray(value)) {
                value.forEach(function (v, i) {
                    //@ts-ignore
                    if (!responsiveStyles[orderedBreakPoints[i][0]]) {
                        //@ts-ignore
                        responsiveStyles[orderedBreakPoints[i][0]] = [];
                    }
                    var newStyle = getRNKeyAndStyleValue({
                        config: config,
                        value: v,
                        key: key,
                        styledSystemProps: styledSystemProps,
                        theme: theme,
                        currentBreakpoint: currentBreakpoint,
                        platform: platform
                    });
                    //@ts-ignore
                    responsiveStyles[orderedBreakPoints[i][0]].push(newStyle);
                });
            }
            else {
                // console.log('hello 111222', key, value);
                for (var k in value) {
                    var newStyle = getRNKeyAndStyleValue({
                        config: config,
                        value: value[k],
                        key: key,
                        styledSystemProps: styledSystemProps,
                        theme: theme,
                        currentBreakpoint: currentBreakpoint,
                        platform: platform
                    });
                    if (!responsiveStyles[k]) {
                        responsiveStyles[k] = [];
                    }
                    responsiveStyles[k].push(newStyle);
                }
                // console.log('hello 111222', key, value, responsiveStyles);
            }
        }
        else {
            var value = rawValue;
            // if (styledSystemProps?.extraProp?.endsWith('Icon')) {
            //   console.log(styledSystemProps?.extraProp, 'hello flatten here22');
            // }
            //TODO: refactor
            if (key === 'size' ||
                (((_b = styledSystemProps === null || styledSystemProps === void 0 ? void 0 : styledSystemProps.extraProp) === null || _b === void 0 ? void 0 : _b.endsWith('.Icon')) && key === 'color')) {
                restDefaultProps = __assign(__assign({}, restDefaultProps), (_d = {}, _d[key] = value, _d));
            }
            else {
                var newStyle = getRNKeyAndStyleValue({
                    config: config,
                    value: value,
                    key: key,
                    styledSystemProps: styledSystemProps,
                    theme: theme,
                    currentBreakpoint: currentBreakpoint,
                    platform: platform
                });
                // TODO: refactor
                if (isEmptyObj(newStyle) &&
                    !key.startsWith('_') &&
                    key !== 'extraProp' &&
                    key !== 'colorScheme' &&
                    // key !== 'style' &&
                    key !== 'variants' &&
                    key !== 'sizes' &&
                    key !== 'variant') {
                    restDefaultProps = __assign(__assign({}, restDefaultProps), (_e = {}, _e[key] = value, _e));
                }
                styleFromProps = __assign(__assign({}, styleFromProps), newStyle);
            }
        }
    };
    for (var key in styledSystemProps) {
        _loop_1(key);
    }
    if (responsiveStyles) {
        if (getResponsiveStyles) {
            var query_1 = { query: [] };
            orderedBreakPoints.forEach(function (o) {
                var _a;
                var key = o[0];
                if (key === 'base') {
                    if (responsiveStyles)
                        query_1.initial = responsiveStyles.base;
                }
                else {
                    if (responsiveStyles)
                        if (key in responsiveStyles) {
                            (_a = query_1 === null || query_1 === void 0 ? void 0 : query_1.query) === null || _a === void 0 ? void 0 : _a.push({
                                //@ts-ignore
                                minWidth: o[1],
                                style: responsiveStyles[key]
                            });
                        }
                }
            });
            // console.log('hello responsive', orderedBreakPoints, responsiveStyles);
            var _c = getResponsiveStyles(query_1), newDataSet = _c.dataSet, styles = _c.styles;
            dataSet = __assign(__assign({}, dataSet), newDataSet);
            styleFromProps = __assign(__assign({}, styleFromProps), styles);
            //TODO: build-time
            // styleFromProps = { ...styleFromProps };
        }
    }
    // if (process.env.NODE_ENV === 'development' && debug) {
    //   /* eslint-disable-next-line */
    //   console.log('style ', debug + ' :: ', {
    //     styleFromProps,
    //     style,
    //     styledSystemProps,
    //   });
    // }
    // if (styleFromProps.backgroundColor === 'white.600') {
    //   console.log(
    //     styleFromProps,
    //     styledSystemProps.extraProp,
    //     'style from props *****'
    //   );
    // }
    return {
        //TODO: build-time
        styleSheet: {},
        styleFromProps: styleFromProps,
        restDefaultProps: restDefaultProps,
        dataSet: dataSet,
        unResolvedProps: unResolvedProps
    };
};

var _a;
// import {
//   findLastValidBreakpoint,
//   hasValidBreakpointFormat,
// } from './../../theme/tools';
var SPECIFICITY_1000 = 1000;
var SPECIFICITY_110 = 110;
var SPECIFICITY_100 = 100;
var SPECIFICITY_70 = 70;
var SPECIFICITY_60 = 60;
var SPECIFICITY_55 = 55;
var SPECIFICITY_50 = 50;
var SPECIFICITY_40 = 40;
var SPECIFICITY_30 = 30;
// SPECIFICITY_20 is being user for defferentiating between User Props and Theme Props. So any specificity less than SPECIFICITY_20 will be ovridable by user props.
var SPECIFICITY_20 = 20;
var SPECIFICITY_10 = 10;
var specificityPrecedence = [
    SPECIFICITY_1000,
    SPECIFICITY_110,
    SPECIFICITY_100,
    SPECIFICITY_70,
    SPECIFICITY_60,
    SPECIFICITY_55,
    SPECIFICITY_50,
    SPECIFICITY_40,
    SPECIFICITY_30,
    SPECIFICITY_20,
    SPECIFICITY_10,
];
var INITIAL_PROP_SPECIFICITY = (_a = {},
    _a[SPECIFICITY_1000] = 0,
    _a[SPECIFICITY_110] = 0,
    _a[SPECIFICITY_100] = 0,
    _a[SPECIFICITY_70] = 0,
    _a[SPECIFICITY_60] = 0,
    _a[SPECIFICITY_50] = 0,
    _a[SPECIFICITY_55] = 0,
    _a[SPECIFICITY_40] = 0,
    _a[SPECIFICITY_30] = 0,
    _a[SPECIFICITY_20] = 0,
    _a[SPECIFICITY_10] = 0,
    _a);
var pseudoPropsMap = {
    _web: { dependentOn: 'platform', priority: SPECIFICITY_10 },
    _ios: { dependentOn: 'platform', priority: SPECIFICITY_10 },
    _android: { dependentOn: 'platform', priority: SPECIFICITY_10 },
    _light: { dependentOn: 'colormode', priority: SPECIFICITY_10 },
    _dark: { dependentOn: 'colormode', priority: SPECIFICITY_10 },
    // TODO: have to add more interactionProps and stateProps
    _indeterminate: {
        dependentOn: 'state',
        respondTo: 'isIndeterminate',
        priority: SPECIFICITY_30
    },
    _checked: {
        dependentOn: 'state',
        respondTo: 'isChecked',
        priority: SPECIFICITY_30
    },
    // Add new pseudeo props in between -------
    _readOnly: {
        dependentOn: 'state',
        respondTo: 'isReadOnly',
        priority: SPECIFICITY_30
    },
    // Add new pseudeo props in between -------
    _invalid: {
        dependentOn: 'state',
        respondTo: 'isInvalid',
        priority: SPECIFICITY_40
    },
    _focus: {
        dependentOn: 'state',
        respondTo: 'isFocused',
        priority: SPECIFICITY_50
    },
    _focusVisible: {
        dependentOn: 'state',
        respondTo: 'isFocusVisible',
        priority: SPECIFICITY_55
    },
    _hover: {
        dependentOn: 'state',
        respondTo: 'isHovered',
        priority: SPECIFICITY_60
    },
    _pressed: {
        dependentOn: 'state',
        respondTo: 'isPressed',
        priority: SPECIFICITY_70
    },
    _disabled: {
        dependentOn: 'state',
        respondTo: 'isDisabled',
        priority: SPECIFICITY_100
    },
    _reversed: {
        dependentOn: 'state',
        respondTo: 'isReversed',
        priority: SPECIFICITY_100
    },
    _loading: {
        dependentOn: 'state',
        respondTo: 'isLoading',
        priority: SPECIFICITY_110
    },
    _important: {
        dependentOn: null,
        priority: SPECIFICITY_1000
    }
};
var SPREAD_PROP_SPECIFICITY_ORDER = [
    'p',
    'padding',
    'px',
    'py',
    'pt',
    'pb',
    'pl',
    'pr',
    'paddingTop',
    'paddingBottom',
    'paddingLeft',
    'paddingRight',
    'm',
    'margin',
    'mx',
    'my',
    'mt',
    'mb',
    'ml',
    'mr',
    'marginTop',
    'marginBottom',
    'marginLeft',
    'marginRight',
];
var FINAL_SPREAD_PROPS = [
    'paddingTop',
    'paddingBottom',
    'paddingLeft',
    'paddingRight',
    'marginTop',
    'marginBottom',
    'marginLeft',
    'marginRight',
];
var MARGIN_MAP = {
    mx: ['marginRight', 'marginLeft'],
    my: ['marginTop', 'marginBottom'],
    mt: ['marginTop'],
    mb: ['marginBottom'],
    mr: ['marginRight'],
    ml: ['marginLeft']
};
MARGIN_MAP.margin = __spreadArray(__spreadArray([], MARGIN_MAP.mx, true), MARGIN_MAP.my, true);
MARGIN_MAP.m = MARGIN_MAP.margin;
MARGIN_MAP.marginTop = MARGIN_MAP.mt;
MARGIN_MAP.marginBottom = MARGIN_MAP.mb;
MARGIN_MAP.marginLeft = MARGIN_MAP.ml;
MARGIN_MAP.marginRight = MARGIN_MAP.mr;
var PADDING_MAP = {
    px: ['paddingRight', 'paddingLeft'],
    py: ['paddingTop', 'paddingBottom'],
    pt: ['paddingTop'],
    pb: ['paddingBottom'],
    pr: ['paddingRight'],
    pl: ['paddingLeft']
};
PADDING_MAP.padding = __spreadArray(__spreadArray([], PADDING_MAP.px, true), PADDING_MAP.py, true);
PADDING_MAP.p = PADDING_MAP.padding;
PADDING_MAP.paddingTop = PADDING_MAP.pt;
PADDING_MAP.paddingBottom = PADDING_MAP.pb;
PADDING_MAP.paddingLeft = PADDING_MAP.pl;
PADDING_MAP.paddingRight = PADDING_MAP.pr;
var SPREAD_PROP_SPECIFICITY_MAP = __assign(__assign({}, PADDING_MAP), MARGIN_MAP);
function propsSpreader(incomingProps, incomingSpecifity) {
    var flattenedDefaultProps = __assign({}, incomingProps);
    var specificity = {};
    SPREAD_PROP_SPECIFICITY_ORDER.forEach(function (prop) {
        if (prop in flattenedDefaultProps) {
            var val_1 = incomingProps[prop] || flattenedDefaultProps[prop];
            if (!FINAL_SPREAD_PROPS.includes(prop)) {
                delete flattenedDefaultProps[prop];
                specificity[prop] = incomingSpecifity[prop];
            }
            SPREAD_PROP_SPECIFICITY_MAP[prop].forEach(function (newProp) {
                if (compareSpecificity(specificity[newProp], specificity[prop])) {
                    specificity[newProp] = incomingSpecifity[prop];
                    flattenedDefaultProps[newProp] = val_1;
                }
            });
        }
    });
    return merge__default["default"]({}, flattenedDefaultProps);
}
var compareSpecificity = function (exisiting, upcoming, ignorebaseTheme
// property?: any
) {
    if (!exisiting)
        return true;
    if (!upcoming)
        return false;
    var condition = ignorebaseTheme
        ? specificityPrecedence.length - 1
        : specificityPrecedence.length;
    for (var index = 0; index < condition; index++) {
        if (exisiting[specificityPrecedence[index]] >
            upcoming[specificityPrecedence[index]]) {
            return false;
        }
        else if (exisiting[specificityPrecedence[index]] <
            upcoming[specificityPrecedence[index]]) {
            return true;
        }
    }
    return true;
};
var shouldResolvePseudoProp = function (_a) {
    var property = _a.property, state = _a.state, platform = _a.platform, colormode = _a.colormode;
    if (pseudoPropsMap[property].dependentOn === 'platform') {
        return property === "_".concat(platform);
    }
    else if (pseudoPropsMap[property].dependentOn === 'colormode') {
        return property === "_".concat(colormode);
    }
    else if (pseudoPropsMap[property].dependentOn === 'state') {
        // @ts-ignore
        return state[pseudoPropsMap[property].respondTo];
    }
    else if (pseudoPropsMap[property].dependentOn === null) {
        return true;
    }
    else {
        return false;
    }
};
var simplifyProps = function (_a, flattenProps, specificityMap, priority) {
    var _b;
    var _c;
    var props = _a.props, colormode = _a.colormode, platform = _a.platform, state = _a.state, currentSpecificity = _a.currentSpecificity, previouslyFlattenProps = _a.previouslyFlattenProps, cascadePseudoProps = _a.cascadePseudoProps;
    if (flattenProps === void 0) { flattenProps = {}; }
    if (specificityMap === void 0) { specificityMap = {}; }
    var mergePsuedoProps = function (property, propertySpecity) {
        if (compareSpecificity(specificityMap[property], propertySpecity, false)) {
            if (process.env.NODE_ENV === 'development' && props.debug) {
                /* eslint-disable-next-line */
                console.log("%c ".concat(property), 'color: #818cf8;', 'updated as internal prop with higher specificity');
            }
            specificityMap[property] = propertySpecity;
            // merging internal props (like, _text, _stack ...)
            flattenProps[property] = merge__default["default"]({}, flattenProps[property], props[property]);
        }
        else {
            if (process.env.NODE_ENV === 'development' && props.debug) {
                /* eslint-disable-next-line */
                console.log("%c ".concat(property), 'color: #818cf8;', 'updated as internal prop with lower specificity');
            }
            flattenProps[property] = merge__default["default"]({}, props[property], flattenProps[property]);
        }
    };
    for (var property in props) {
        // NOTE: the order is important here. Keep in mind while specificity breakpoints.
        var propertySpecity = currentSpecificity
            ? __assign({}, currentSpecificity) : __assign(__assign({}, INITIAL_PROP_SPECIFICITY), (_b = {}, _b[SPECIFICITY_20] = priority, _b));
        if (
        // @ts-ignore
        state[(_c = pseudoPropsMap[property]) === null || _c === void 0 ? void 0 : _c.respondTo] ||
            ['_dark', '_light', '_web', '_ios', '_android', '_important'].includes(property)) {
            // @ts-ignore
            if (shouldResolvePseudoProp({ property: property, state: state, platform: platform, colormode: colormode })) {
                // NOTE: Handling (state driven) props like _important, _web, _ios, _android, _dark, _light, _disabled, _focus, _focusVisible, _hover, _pressed, _readOnly, _invalid, .... Only when they are true.
                if (process.env.NODE_ENV === 'development' && props.debug) {
                    /* eslint-disable-next-line */
                    console.log("%c ".concat(property), 'color: #818cf8;', 'recursively resolving');
                }
                // @ts-ignore
                propertySpecity[pseudoPropsMap[property].priority]++;
                simplifyProps({
                    props: props[property],
                    colormode: colormode,
                    platform: platform,
                    state: state,
                    currentSpecificity: propertySpecity,
                    previouslyFlattenProps: previouslyFlattenProps,
                    cascadePseudoProps: cascadePseudoProps
                }, flattenProps, specificityMap, priority);
            }
            // @ts-ignore
        }
        else if (pseudoPropsMap[property] === undefined) {
            if (property.startsWith('_')) {
                // NOTE: Handling (internal) props like _text, _stack, ....
                mergePsuedoProps(property, propertySpecity);
            }
            else {
                if (compareSpecificity(specificityMap[property], propertySpecity, false)) {
                    if (process.env.NODE_ENV === 'development' && props.debug) {
                        /* eslint-disable-next-line */
                        console.log("%c ".concat(property), 'color: #818cf8;', 'updated as simple prop');
                    }
                    specificityMap[property] = propertySpecity;
                    // replacing simple props (like, p, m, bg, color, ...)
                    flattenProps[property] = props[property];
                }
                else {
                    if (process.env.NODE_ENV === 'development' && props.debug) {
                        /* eslint-disable-next-line */
                        console.log("%c ".concat(property), 'color: #818cf8;', 'ignored');
                    }
                }
            }
        }
        else {
            // Can delete unused props
            if (!cascadePseudoProps) {
                delete flattenProps[property];
                if (process.env.NODE_ENV === 'development' && props.debug) {
                    /* eslint-disable-next-line */
                    console.log("%c ".concat(property), 'color: #818cf8;', 'deleted');
                }
            }
            else {
                if (process.env.NODE_ENV === 'development' && props.debug) {
                    /* eslint-disable-next-line */
                    console.log("%c ".concat(property), 'color: #818cf8;', 'cascaded');
                }
                mergePsuedoProps(property, propertySpecity);
            }
        }
    }
};
var propsFlattener = function (_a, priority) {
    var _b;
    var props = _a.props, colormode = _a.colormode, platform = _a.platform, state = _a.state, currentSpecificityMap = _a.currentSpecificityMap, previouslyFlattenProps = _a.previouslyFlattenProps, cascadePseudoProps = _a.cascadePseudoProps;
    var flattenProps = {};
    for (var property in props) {
        if (
        // @ts-ignore
        state[(_b = pseudoPropsMap[property]) === null || _b === void 0 ? void 0 : _b.respondTo] === undefined &&
            property.startsWith('_')) {
            flattenProps[property] = previouslyFlattenProps[property];
        }
    }
    var specificityMap = currentSpecificityMap || {};
    simplifyProps({
        props: props,
        colormode: colormode,
        platform: platform,
        state: state,
        currentSpecificityMap: currentSpecificityMap,
        previouslyFlattenProps: previouslyFlattenProps,
        cascadePseudoProps: cascadePseudoProps
    }, flattenProps, specificityMap, priority);
    return [flattenProps, specificityMap];
};
var callPropsFlattener = function (targetProps, latestSpecifictyMap, specificity, cleanIncomingProps, colorModeProps, state, flattenProps, config) {
    if (targetProps === void 0) { targetProps = {}; }
    if (latestSpecifictyMap === void 0) { latestSpecifictyMap = {}; }
    if (specificity === void 0) { specificity = 1; }
    return propsFlattener({
        props: process.env.NODE_ENV === 'development' && cleanIncomingProps.debug
            ? __assign(__assign({}, targetProps), { debug: true }) : targetProps,
        //TODO: build-time
        platform: config.platform,
        // platform: Platform.OS,
        colormode: colorModeProps.colorMode,
        state: state || {},
        currentSpecificityMap: latestSpecifictyMap,
        previouslyFlattenProps: flattenProps || {},
        cascadePseudoProps: config === null || config === void 0 ? void 0 : config.cascadePseudoProps,
        name: config === null || config === void 0 ? void 0 : config.name
    }, specificity);
};
var resolvePropsToStyle = function (styledSystemProps, propStyle, theme, platform, debug, currentBreakpoint, strictMode, getResponsiveStyles, INTERNAL_themeStyle) {
    var _a = getStyleAndFilteredProps({
        styledSystemProps: styledSystemProps,
        theme: theme,
        debug: debug,
        currentBreakpoint: currentBreakpoint,
        strictMode: strictMode,
        getResponsiveStyles: getResponsiveStyles,
        platform: platform
    }), unResolvedProps = _a.unResolvedProps, styleFromProps = _a.styleFromProps, restDefaultProps = _a.restDefaultProps, dataSet = _a.dataSet;
    // console.log(
    //   StyleSheet.flatten([INTERNAL_themeStyle, styleSheet.box, propStyle]),
    //   '3333 style system props'
    // );
    if (propStyle) {
        return {
            style: [INTERNAL_themeStyle, styleFromProps, propStyle],
            styleFromProps: styleFromProps,
            unResolvedProps: unResolvedProps,
            restDefaultProps: restDefaultProps,
            dataSet: dataSet
        };
    }
    else {
        return {
            style: [INTERNAL_themeStyle, styleFromProps],
            styleFromProps: styleFromProps,
            unResolvedProps: unResolvedProps,
            restDefaultProps: restDefaultProps,
            dataSet: dataSet
        };
    }
};

var getStyledObject = function (theme, 
//@ts-ignore
name, componentTheme, config, inputProps, mergeDefaultProps) {
    var _a;
    var _b;
    if (mergeDefaultProps === void 0) { mergeDefaultProps = true; }
    var componentStyle = (_b = componentTheme === null || componentTheme === void 0 ? void 0 : componentTheme.defaultProps) === null || _b === void 0 ? void 0 : _b.style;
    // console.log(config, 'config here');
    var inputWithDefaultProps = __assign(__assign({}, componentTheme.defaultProps), inputProps);
    if (!mergeDefaultProps) {
        inputWithDefaultProps = inputProps;
    }
    var flattenProps, specificityMap;
    _a = propsFlattener({
        props: inputWithDefaultProps,
        //TODO: build-time
        platform: config.platform,
        colormode: config.colorMode,
        state: {},
        currentSpecificityMap: {},
        previouslyFlattenProps: flattenProps || {},
        cascadePseudoProps: true
    }, 1), flattenProps = _a[0], specificityMap = _a[1];
    // console.log(inputProps, 'hello flatten here');
    flattenProps = mergeStylesWithSpecificity(theme, componentTheme, flattenProps, specificityMap, config.colorMode, mergeDefaultProps, config)[0];
    // console.log(flattenProps, 'hello flatten props');
    var internalPseudoProps = {};
    for (var property in flattenProps) {
        if (property.startsWith('_') &&
            !['_dark', '_light', '_web', '_ios', '_android', '_important'].includes(property)) {
            internalPseudoProps[property] = flattenProps[property];
        }
    }
    var styleObj = resolvePropsToStyle(flattenProps, componentStyle, theme, config.platform, false, 4, false, undefined);
    // if (inputProps?.extraProp === 'Actionsheet') {
    //   console.log(flattenProps, 'hello flatten here');
    // }
    styleObj.internalPseudoProps = internalPseudoProps;
    return styleObj;
};
//@ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// const resolveComponentThemeStyle = (
//   incomingProps: any,
//   themeType: Array<string>,
//   providedTheme?: any
// ): any => {
//   try {
//     if (themeType[1]) {
//       return typeof providedTheme[themeType[0]][themeType[1]] !== 'function'
//         ? providedTheme[themeType[0]][themeType[1]]
//         : providedTheme[themeType[0]][themeType[1]]({
//             theme,
//             ...incomingProps,
//             colorMode: 'light',
//           });
//     } else {
//       return typeof providedTheme[themeType[0]] !== 'function'
//         ? providedTheme[themeType[0]]
//         : providedTheme[themeType[0]]({
//             theme,
//             ...incomingProps,
//             colorMode: 'light',
//           });
//     }
//   } catch {
//     return {};
//   }
// };
var resolveComponentTheme = function (theme, incomingProps, themeType, providedTheme) {
    // if (typeof providedTheme[themeType[0]][themeType[1]] === 'function')
    //   // console.log(
    //   //   themeType,
    //   //   // providedTheme,
    //   //   providedTheme[themeType[0]][themeType[1]]({
    //   //     theme,
    //   //     ...incomingProps,
    //   //     colorMode: 'light',
    //   //   }),
    //   //   'flatten Props 111 ****'
    //   // );
    try {
        if (themeType[1]) {
            return typeof providedTheme[themeType[0]][themeType[1]] !== 'function'
                ? providedTheme[themeType[0]][themeType[1]]
                : providedTheme[themeType[0]][themeType[1]](__assign(__assign({ theme: theme }, incomingProps), { colorMode: 'light' }));
        }
        else {
            return typeof providedTheme[themeType[0]] !== 'function'
                ? providedTheme[themeType[0]]
                : providedTheme[themeType[0]](__assign(__assign({ theme: theme }, incomingProps), { colorMode: 'light' }));
        }
    }
    catch (_a) {
        return {};
    }
};
var mergeStylesWithSpecificity = function (theme, componentTheme, flattenProps, specificityMap, colorMode, mergeDefaultProps, config) {
    var _a, _b, _c;
    if (mergeDefaultProps === void 0) { mergeDefaultProps = true; }
    var combinedBaseStyle = {};
    var combinedVariantStyle = {};
    var combinedSizeStyle = {};
    var flattenBaseStyle, baseSpecificityMap;
    var extendedTheme = [];
    if (!isEmpty__default["default"](componentTheme))
        extendedTheme.push(componentTheme);
    // if (flattenProps.extraProp === 'IconButton.Icon') {
    //   console.log(flattenProps, 'lflflflflf', componentTheme);
    // }
    extendedTheme.map(function (extededComponentTheme) {
        if (extededComponentTheme.baseStyle && mergeDefaultProps) {
            combinedBaseStyle = __assign(__assign({}, combinedBaseStyle), resolveComponentTheme(theme, flattenProps, ['baseStyle'], extededComponentTheme));
        }
        if (flattenProps.variant && mergeDefaultProps) {
            if (extededComponentTheme.variants) {
                combinedVariantStyle = __assign(__assign({}, combinedVariantStyle), resolveComponentTheme(theme, flattenProps, ['variants', flattenProps.variant], extededComponentTheme));
                // console.log(
                //   // combinedBaseStyle,
                //   resolveComponentTheme(
                //     flattenProps,
                //     ['variants', flattenProps.variant],
                //     extededComponentTheme
                //   ),
                //   flattenProps,
                //   'flatten props 111 $$$'
                // );
            }
        }
        if (flattenProps.size &&
            (extededComponentTheme === null || extededComponentTheme === void 0 ? void 0 : extededComponentTheme.sizes) &&
            (extededComponentTheme === null || extededComponentTheme === void 0 ? void 0 : extededComponentTheme.sizes[flattenProps.size])) {
            if (typeof extededComponentTheme.sizes[flattenProps.size] === 'string' ||
                typeof extededComponentTheme.sizes[flattenProps.size] === 'number') {
                flattenProps.size = extededComponentTheme.sizes[flattenProps.size];
            }
            else {
                combinedSizeStyle = __assign(__assign({}, combinedSizeStyle), resolveComponentTheme(theme, flattenProps, ['sizes', flattenProps.size], extededComponentTheme));
                delete flattenProps.size;
            }
        }
    });
    if (flattenProps.extraProp === 'Spinner') ;
    // console.log('****>>>>> 2', flattenProps);
    // console.log(combinedBaseStyle, " ******* ");
    if (!isEmptyObj(combinedBaseStyle)) {
        _a = callPropsFlattener(combinedBaseStyle, specificityMap, 1, {}, { colorMode: colorMode }, {}, flattenProps, __assign(__assign({}, config), { cascadePseudoProps: true })), flattenBaseStyle = _a[0], baseSpecificityMap = _a[1];
    }
    // NOTE: Resolving variants
    var flattenVariantStyle, variantSpecificityMap;
    // Extracting props from variant
    // console.log(combinedVariantStyle, "999999");
    if (!isEmptyObj(combinedVariantStyle)) {
        _b = callPropsFlattener(combinedVariantStyle, baseSpecificityMap || specificityMap, 1, {}, { colorMode: colorMode }, {}, flattenProps, __assign(__assign({}, config), { cascadePseudoProps: true })), flattenVariantStyle = _b[0], variantSpecificityMap = _b[1];
        // We remove variant from original props if we found it in the componentTheme
        //@ts-ignore
        flattenProps.variant = undefined;
    }
    // NOTE: Resolving size
    var flattenSizeStyle, sizeSpecificityMap;
    // Extracting props from size
    // console.log(combinedSizeStyle, "&&&&&&&");
    if (!isEmptyObj(combinedSizeStyle)) {
        _c = callPropsFlattener(combinedSizeStyle, variantSpecificityMap || baseSpecificityMap || specificityMap, 1, {}, { colorMode: colorMode }, {}, flattenProps, __assign(__assign({}, config), { cascadePseudoProps: true })), flattenSizeStyle = _c[0], sizeSpecificityMap = _c[1];
    }
    //////
    var defaultStyles = merge__default["default"]({}, flattenBaseStyle, flattenVariantStyle, flattenSizeStyle);
    var defaultSpecificity = merge__default["default"]({}, specificityMap, baseSpecificityMap, variantSpecificityMap, sizeSpecificityMap);
    // console.log(flattenProps.size, flattenProps, componentTheme, 'h3h3h3');
    flattenProps = propsSpreader(merge__default["default"](defaultStyles, flattenProps), defaultSpecificity);
    // console.log(flattenProps, 'h3h3h3 >>>>>');
    return [flattenProps];
};

var borderWidths = {
    '0': 0,
    '1': '1px',
    '2': '2px',
    '4': '4px',
    '8': '8px'
};

var breakpoints = {
    'base': 0,
    'sm': 480,
    'md': 768,
    'lg': 992,
    'xl': 1280,
    '2xl': 1536
};

var colors = {
    contrastThreshold: 7,
    // Singleton colors
    white: '#FFFFFF',
    black: '#000000',
    lightText: '#FFFFFF',
    darkText: '#000000',
    // Primary colors
    rose: {
        50: '#fff1f2',
        100: '#ffe4e6',
        200: '#fecdd3',
        300: '#fda4af',
        400: '#fb7185',
        500: '#f43f5e',
        600: '#e11d48',
        700: '#be123c',
        800: '#9f1239',
        900: '#881337'
    },
    pink: {
        50: '#fdf2f8',
        100: '#fce7f3',
        200: '#fbcfe8',
        300: '#f9a8d4',
        400: '#f472b6',
        500: '#ec4899',
        600: '#db2777',
        700: '#be185d',
        800: '#9d174d',
        900: '#831843'
    },
    fuchsia: {
        50: '#fdf4ff',
        100: '#fae8ff',
        200: '#f5d0fe',
        300: '#f0abfc',
        400: '#e879f9',
        500: '#d946ef',
        600: '#c026d3',
        700: '#a21caf',
        800: '#86198f',
        900: '#701a75'
    },
    purple: {
        50: '#faf5ff',
        100: '#f3e8ff',
        200: '#e9d5ff',
        300: '#d8b4fe',
        400: '#c084fc',
        500: '#a855f7',
        600: '#9333ea',
        700: '#7e22ce',
        800: '#6b21a8',
        900: '#581c87'
    },
    violet: {
        50: '#f5f3ff',
        100: '#ede9fe',
        200: '#ddd6fe',
        300: '#c4b5fd',
        400: '#a78bfa',
        500: '#8b5cf6',
        600: '#7c3aed',
        700: '#6d28d9',
        800: '#5b21b6',
        900: '#4c1d95'
    },
    indigo: {
        50: '#eef2ff',
        100: '#e0e7ff',
        200: '#c7d2fe',
        300: '#a5b4fc',
        400: '#818cf8',
        500: '#6366f1',
        600: '#4f46e5',
        700: '#4338ca',
        800: '#3730a3',
        900: '#312e81'
    },
    blue: {
        50: '#eff6ff',
        100: '#dbeafe',
        200: '#bfdbfe',
        300: '#93c5fd',
        400: '#60a5fa',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
        800: '#1e40af',
        900: '#1e3a8a'
    },
    lightBlue: {
        50: '#f0f9ff',
        100: '#e0f2fe',
        200: '#bae6fd',
        300: '#7dd3fc',
        400: '#38bdf8',
        500: '#0ea5e9',
        600: '#0284c7',
        700: '#0369a1',
        800: '#075985',
        900: '#0c4a6e'
    },
    darkBlue: {
        50: '#dbf4ff',
        100: '#addbff',
        200: '#7cc2ff',
        300: '#4aa9ff',
        400: '#1a91ff',
        500: '#0077e6',
        600: '#005db4',
        700: '#004282',
        800: '#002851',
        900: '#000e21'
    },
    cyan: {
        50: '#ecfeff',
        100: '#cffafe',
        200: '#a5f3fc',
        300: '#67e8f9',
        400: '#22d3ee',
        500: '#06b6d4',
        600: '#0891b2',
        700: '#0e7490',
        800: '#155e75',
        900: '#164e63'
    },
    teal: {
        50: '#f0fdfa',
        100: '#ccfbf1',
        200: '#99f6e4',
        300: '#5eead4',
        400: '#2dd4bf',
        500: '#14b8a6',
        600: '#0d9488',
        700: '#0f766e',
        800: '#115e59',
        900: '#134e4a'
    },
    emerald: {
        50: '#ecfdf5',
        100: '#d1fae5',
        200: '#a7f3d0',
        300: '#6ee7b7',
        400: '#34d399',
        500: '#10b981',
        600: '#059669',
        700: '#047857',
        800: '#065f46',
        900: '#064e3b'
    },
    green: {
        50: '#f0fdf4',
        100: '#dcfce7',
        200: '#bbf7d0',
        300: '#86efac',
        400: '#4ade80',
        500: '#22c55e',
        600: '#16a34a',
        700: '#15803d',
        800: '#166534',
        900: '#14532d'
    },
    lime: {
        50: '#f7fee7',
        100: '#ecfccb',
        200: '#d9f99d',
        300: '#bef264',
        400: '#a3e635',
        500: '#84cc16',
        600: '#65a30d',
        700: '#4d7c0f',
        800: '#3f6212',
        900: '#365314'
    },
    yellow: {
        50: '#fefce8',
        100: '#fef9c3',
        200: '#fef08a',
        300: '#fde047',
        400: '#facc15',
        500: '#eab308',
        600: '#ca8a04',
        700: '#a16207',
        800: '#854d0e',
        900: '#713f12'
    },
    amber: {
        50: '#fffbeb',
        100: '#fef3c7',
        200: '#fde68a',
        300: '#fcd34d',
        400: '#fbbf24',
        500: '#f59e0b',
        600: '#d97706',
        700: '#b45309',
        800: '#92400e',
        900: '#78350f'
    },
    orange: {
        50: '#fff7ed',
        100: '#ffedd5',
        200: '#fed7aa',
        300: '#fdba74',
        400: '#fb923c',
        500: '#f97316',
        600: '#ea580c',
        700: '#c2410c',
        800: '#9a3412',
        900: '#7c2d12'
    },
    red: {
        50: '#fef2f2',
        100: '#fee2e2',
        200: '#fecaca',
        300: '#fca5a5',
        400: '#f87171',
        500: '#ef4444',
        600: '#dc2626',
        700: '#b91c1c',
        800: '#991b1b',
        900: '#7f1d1d'
    },
    warmGray: {
        50: '#fafaf9',
        100: '#f5f5f4',
        200: '#e7e5e4',
        300: '#d6d3d1',
        400: '#a8a29e',
        500: '#78716c',
        600: '#57534e',
        700: '#44403c',
        800: '#292524',
        900: '#1c1917'
    },
    trueGray: {
        50: '#fafafa',
        100: '#f5f5f5',
        200: '#e5e5e5',
        300: '#d4d4d4',
        400: '#a3a3a3',
        500: '#737373',
        600: '#525252',
        700: '#404040',
        800: '#262626',
        900: '#171717'
    },
    gray: {
        50: '#fafafa',
        100: '#f4f4f5',
        200: '#e4e4e7',
        300: '#d4d4d8',
        400: '#a1a1aa',
        500: '#71717a',
        600: '#52525b',
        700: '#3f3f46',
        800: '#27272a',
        900: '#18181b'
    },
    coolGray: {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827'
    },
    blueGray: {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a'
    },
    dark: {
        50: '#18181b',
        100: '#27272a',
        200: '#3f3f46',
        300: '#52525b',
        400: '#71717a',
        500: '#a1a1aa',
        600: '#d4d4d8',
        700: '#e4e4e7',
        800: '#f4f4f5',
        900: '#fafafa'
    },
    text: {
        50: '#fafafa',
        100: '#f5f5f5',
        200: '#e5e5e5',
        300: '#d4d4d4',
        400: '#a3a3a3',
        500: '#737373',
        600: '#525252',
        700: '#404040',
        800: '#262626',
        900: '#171717'
    },
    // Derived colors
    danger: {},
    error: {},
    success: {},
    warning: {},
    muted: {},
    primary: {},
    info: {},
    secondary: {},
    light: {},
    tertiary: {}
};
colors.danger = colors.rose;
colors.error = colors.red;
colors.success = colors.green;
colors.warning = colors.orange;
colors.muted = colors.trueGray;
colors.primary = colors.cyan;
colors.secondary = colors.pink;
colors.tertiary = colors.emerald;
colors.info = colors.lightBlue;
colors.light = colors.warmGray;

var radii = {
    'none': 0,
    'xs': 2,
    'sm': 4,
    'md': 6,
    'lg': 8,
    'xl': 12,
    '2xl': 16,
    '3xl': 24,
    'full': 9999
};

var shadow = {
    'none': {
        shadowColor: 'transparent',
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0
    },
    '0': {
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,
        elevation: 1
    },
    '1': {
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2
    },
    '2': {
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3
    },
    '3': {
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4
    },
    '4': {
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    '5': {
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6
    },
    '6': {
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7
    },
    '7': {
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8
    },
    '8': {
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9
    },
    '9': {
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10
    }
};

var spacing = {
    'px': '1px',
    '0': 0,
    '0.5': 2,
    '1': 4,
    '1.5': 6,
    '2': 8,
    '2.5': 10,
    '3': 12,
    '3.5': 14,
    '4': 16,
    '5': 20,
    '6': 24,
    '7': 28,
    '8': 32,
    '9': 36,
    '10': 40,
    '12': 48,
    '16': 64,
    '20': 80,
    '24': 96,
    '32': 128,
    '40': 160,
    '48': 192,
    '56': 224,
    '64': 256,
    '72': 288,
    '80': 320,
    '96': 384,
    '1/2': '50%',
    '1/3': '33.333%',
    '2/3': '66.666%',
    '1/4': '25%',
    '2/4': '50%',
    '3/4': '75%',
    '1/5': '20%',
    '2/5': '40%',
    '3/5': '60%',
    '4/5': '80%',
    '1/6': '16.666%',
    '2/6': '33.333%',
    '3/6': '50%',
    '4/6': '66.666%',
    '5/6': '83.333%',
    'full': '100%'
};

var container = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280
};
var sizes$l = __assign(__assign(__assign({}, spacing), {
    '3xs': 224,
    '2xs': 256,
    'xs': 320,
    'sm': 384,
    'md': 448,
    'lg': 512,
    'xl': 576,
    '2xl': 672
}), { container: container });

var typography = {
    letterSpacings: {
        'xs': '-0.05em',
        'sm': '-0.025em',
        'md': 0,
        'lg': '0.025em',
        'xl': '0.05em',
        '2xl': '0.1em'
    },
    lineHeights: {
        '2xs': '1em',
        'xs': '1.125em',
        'sm': '1.25em',
        'md': '1.375em',
        'lg': '1.5em',
        'xl': '1.75em',
        '2xl': '2em',
        '3xl': '2.5em',
        '4xl': '3em',
        '5xl': '4em'
    },
    fontConfig: {
    //   Roboto: {
    //     100: {
    //       normal: 'Roboto-Light',
    //       italic: 'Roboto-LightItalic',
    //     },
    //     200: {
    //       normal: 'Roboto-Light',
    //       italic: 'Roboto-LightItalic',
    //     },
    //     300: {
    //       normal: 'Roboto-Light',
    //       italic: 'Roboto-LightItalic',
    //     },
    //     400: {
    //       normal: 'Roboto-Regular',
    //       italic: 'Roboto-Italic',
    //     },
    //     500: {
    //       normal: 'Roboto-Medium',
    //       italic: 'Roboto-MediumItalic',
    //     },
    //     600: {
    //       normal: 'Roboto-Medium',
    //       italic: 'Roboto-MediumItalic',
    //     },
    //     700: {
    //       normal: 'Roboto-Bold',
    //       italic: 'Roboto-BoldItalic',
    //     },
    //     800: {
    //       normal: 'Roboto-Bold',
    //       italic: 'Roboto-BoldItalic',
    //     },
    //     900: {
    //       normal: 'Roboto-Bold',
    //       italic: 'Roboto-BoldItalic',
    //     },
    //   },
    //   Montserrat: {
    //     100: {
    //       normal: 'Montserrat-Light',
    //       italic: 'Montserrat-LightItalic',
    //     },
    //     200: {
    //       normal: 'Montserrat-Light',
    //       italic: 'Montserrat-LightItalic',
    //     },
    //     300: {
    //       normal: 'Montserrat-Light',
    //       italic: 'Montserrat-LightItalic',
    //     },
    //     400: {
    //       normal: 'Montserrat-Regular',
    //       italic: 'Montserrat-Italic',
    //     },
    //     500: {
    //       normal: 'Montserrat-Medium',
    //       italic: 'Montserrat-MediumItalic',
    //     },
    //     600: {
    //       normal: 'Montserrat-SemiBold',
    //       italic: 'Montserrat-SemiBoldItalic',
    //     },
    //     700: {
    //       normal: 'Montserrat-Bold',
    //       italic: 'Montserrat-BoldItalic',
    //     },
    //     800: {
    //       normal: 'Montserrat-ExtraBold',
    //       italic: 'Montserrat-ExtraBoldItalic',
    //     },
    //     900: {
    //       normal: 'Montserrat-Black',
    //       italic: 'Montserrat-BlackItalic',
    //     },
    //   },
    },
    fontWeights: {
        hairline: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
        extraBlack: 950
    },
    fonts: {
        heading: undefined,
        body: undefined,
        mono: undefined
    },
    fontSizes: {
        '2xs': 10,
        'xs': 12,
        'sm': 14,
        'md': 16,
        'lg': 18,
        'xl': 20,
        '2xl': 24,
        '3xl': 30,
        '4xl': 36,
        '5xl': 48,
        '6xl': 60,
        '7xl': 72,
        '8xl': 96,
        '9xl': 128
    }
};

var opacity = {
    0: 0,
    5: 0.05,
    10: 0.1,
    20: 0.2,
    25: 0.25,
    30: 0.3,
    40: 0.4,
    50: 0.5,
    60: 0.6,
    70: 0.7,
    75: 0.75,
    80: 0.8,
    90: 0.9,
    95: 0.95,
    100: 1
};

var theme$1 = __assign(__assign({ borderWidths: borderWidths, breakpoints: breakpoints, colors: colors, radii: radii }, typography), { sizes: sizes$l, space: spacing, shadows: shadow, opacity: opacity });

// Accordion
var accordionBaseStyle = function (props) {
    return {
        borderWidth: 1,
        borderColor: mode('gray.300', 'gray.600')(props),
        borderRadius: 'lg'
    };
};
var Accordion = {
    baseStyle: accordionBaseStyle
};
// AccordionItem
var AccordionItem = {};
// AccordionIcon
var AccordionIcon = {};
// AccordionSummary
var accordionSummaryBaseStyle = function (props) {
    return {
        borderTopWidth: 1,
        borderTopColor: mode('gray.300', 'gray.600')(props),
        p: 3,
        _hover: {
            bg: mode('primary.200', 'primary.300')(props)
        },
        _expanded: {
            bg: 'primary.600',
            borderBottomColor: mode('gray.300', 'gray.600')(props),
            _text: { color: 'white' }
        },
        _disabled: {
            bg: mode('gray.200', 'gray.700')(props)
        }
    };
};
var AccordionSummary = {
    baseStyle: accordionSummaryBaseStyle
};
// AccordionDetails
var accordionPanelBaseStyle = {
    p: 3
};
var AccordionDetails = {
    baseStyle: accordionPanelBaseStyle
};

// Actionsheet
var Actionsheet = {
    defaultProps: {
        size: 'full',
        justifyContent: 'flex-end',
        animationPreset: 'slide'
    }
};
// ActionsheetContent
var ActionsheetContent = {
    baseStyle: {
        alignItems: 'center',
        px: 2,
        py: 2,
        borderRadius: 'none',
        roundedTop: 20,
        _light: {
            _dragIndicator: {
                bg: 'muted.500'
            }
        },
        _dark: {
            _dragIndicator: {
                bg: 'muted.400'
            }
        },
        _dragIndicator: {
            height: 1,
            width: 10,
            borderRadius: 2
        },
        _dragIndicatorWrapper: {
            pt: 3,
            pb: 3,
            mt: -2,
            width: '100%',
            alignItems: 'center',
            collapsable: false
        },
        _dragIndicatorWrapperOffSet: {
            py: 2,
            collapsable: false
        }
    }
};
// ActionsheetItem
var ActionsheetItem = {
    baseStyle: {
        width: '100%',
        justifyContent: 'flex-start',
        _stack: {
            space: 4
        },
        p: 4,
        _text: {
            fontSize: 'md',
            fontWeight: 'normal'
        },
        _disabled: {
            opacity: 40
        },
        _light: {
            bg: 'muted.50',
            _icon: {
                color: 'muted.500'
            },
            _text: {
                color: 'text.900'
            },
            _hover: {
                bg: 'muted.200'
            },
            _pressed: {
                bg: 'muted.400'
            },
            _focusVisible: {
                _web: {
                    outlineWidth: '0',
                    style: { boxShadow: "none" },
                    bg: 'muted.300'
                },
                bg: 'muted.300'
            }
        },
        _dark: {
            bg: 'muted.800',
            _icon: {
                color: 'muted.400'
            },
            _text: {
                color: 'muted.50'
            },
            _hover: {
                bg: 'muted.700'
            },
            _pressed: {
                bg: 'muted.500'
            },
            _focusVisible: {
                _web: {
                    outlineWidth: '0',
                    style: { boxShadow: "none" },
                    bg: 'muted.600'
                }
            }
        }
    }
};

var Select = {
    baseStyle: function () {
        return {
            selection: {
                start: 0
            },
            _light: {
                customDropdownIconProps: { color: 'muted.500', mr: '3' },
                _hover: {
                    borderColor: 'primary.600'
                },
                _focus: {
                    borderColor: 'primary.600'
                },
                _disabled: {
                    bg: 'muted.100',
                    placeholderTextColor: 'muted.700'
                },
                _invalid: {
                    borderColor: 'error.600'
                }
            },
            _dark: {
                customDropdownIconProps: { color: 'muted.400', mr: '3' },
                _hover: {
                    borderColor: 'primary.500'
                },
                _focus: {
                    borderColor: 'primary.500'
                },
                _disabled: {
                    bg: 'muted.800',
                    placeholderTextColor: 'text.50'
                },
                _invalid: {
                    borderColor: 'error.500'
                }
            },
            customDropdownIconProps: {
                size: '6',
                p: '1'
            },
            _webSelect: {
                style: {
                    appearance: 'none',
                    WebkitAppearance: 'none',
                    MozAppearance: 'none',
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    opacity: 0,
                    zIndex: 1
                }
            },
            _web: {
                pointerEvents: 'none'
            },
            _disabled: {
                opacity: '80'
            },
            _actionSheetBody: {
                w: '100%'
            },
            _actionSheetContent: {}
        };
    },
    defaultProps: {
        optimized: true
    }
};
// SelectIcon - only for custom variant
var SelectItem = {
    baseStyle: {
        p: '1',
        px: '2',
        borderRadius: '0',
        minH: '0'
    }
};

function getBg(props) {
    var theme = props.theme, colorScheme = props.colorScheme, status = props.status, variant = props.variant;
    colorScheme = getColorScheme(props, !status ? colorScheme : status);
    var lightBg = variant === 'solid'
        ? getColor$1(theme, "".concat(colorScheme, ".700"), colorScheme)
        : getColor$1(theme, "".concat(colorScheme, ".200"), colorScheme);
    var darkBg = variant === 'solid'
        ? getColor$1(theme, "".concat(colorScheme, ".600"), colorScheme)
        : getColor$1(theme, "".concat(colorScheme, ".200"), colorScheme);
    return { lightBg: lightBg, darkBg: darkBg };
}
var variantSubtle$3 = function (props) {
    var colorScheme = props.colorScheme, status = props.status;
    var _a = getBg(props), lightBg = _a.lightBg, darkBg = _a.darkBg;
    colorScheme = getColorScheme(props, !status ? colorScheme : status);
    return {
        _light: {
            bg: lightBg,
            _icon: { color: "".concat(colorScheme, ".700") }
        },
        _dark: {
            bg: darkBg,
            _icon: { color: "".concat(colorScheme, ".600") }
        }
    };
};
var variantOutline$4 = function (props) {
    var colorScheme = props.colorScheme, status = props.status;
    colorScheme = getColorScheme(props, !status ? colorScheme : status);
    return {
        borderWidth: 1,
        _light: {
            _icon: { color: "".concat(colorScheme, ".700") },
            borderColor: "".concat(colorScheme, ".700")
        },
        _dark: {
            _icon: { color: "".concat(colorScheme, ".600") },
            borderColor: "".concat(colorScheme, ".600")
        }
    };
};
var variantOutlineLight = function (props) {
    var colorScheme = props.colorScheme, status = props.status, theme = props.theme;
    colorScheme = getColorScheme(props, !status ? colorScheme : status);
    return {
        borderWidth: 1,
        _light: {
            _icon: { color: "".concat(colorScheme, ".700") },
            borderColor: transparentize("".concat(colorScheme, ".700"), 0.4)(theme)
        },
        _dark: {
            _icon: { color: "".concat(colorScheme, ".600") },
            borderColor: transparentize("".concat(colorScheme, ".600"), 0.4)(theme)
        }
    };
};
var variantSolid$3 = function (props) {
    var _a = getBg(props), lightBg = _a.lightBg, darkBg = _a.darkBg;
    return {
        _light: {
            bg: lightBg
        },
        _dark: {
            bg: darkBg
        },
        _icon: { color: "muted.50" }
    };
};
var variantLeftAccent = function (props) {
    var colorScheme = props.colorScheme, status = props.status;
    var _a = getBg(props), lightBg = _a.lightBg, darkBg = _a.darkBg;
    colorScheme = getColorScheme(props, !status ? colorScheme : status);
    return {
        borderLeftWidth: 4,
        _light: {
            bg: lightBg,
            _icon: { color: "".concat(colorScheme, ".700") },
            borderLeftColor: "".concat(colorScheme, ".700")
        },
        _dark: {
            bg: darkBg,
            _icon: { color: "".concat(colorScheme, ".600") },
            borderLeftColor: "".concat(colorScheme, ".600")
        }
    };
};
var variantTopAccent = function (props) {
    var colorScheme = props.colorScheme, status = props.status;
    var _a = getBg(props), lightBg = _a.lightBg, darkBg = _a.darkBg;
    colorScheme = getColorScheme(props, !status ? colorScheme : status);
    return {
        borderTopWidth: 4,
        _light: {
            bg: lightBg,
            _icon: { color: "".concat(colorScheme, ".700") },
            borderTopColor: "".concat(colorScheme, ".700")
        },
        _dark: {
            bg: darkBg,
            _icon: { color: "".concat(colorScheme, ".600") },
            borderTopColor: "".concat(colorScheme, ".600")
        }
    };
};
var variants$8 = {
    'subtle': variantSubtle$3,
    'solid': variantSolid$3,
    'left-accent': variantLeftAccent,
    'top-accent': variantTopAccent,
    'outline': variantOutline$4,
    'outline-light': variantOutlineLight
};
var Alert = {
    baseStyle: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        p: 3,
        space: 3,
        borderRadius: 'sm'
    },
    variants: variants$8,
    defaultProps: {
        colorScheme: 'info',
        variant: 'subtle'
    }
};
// AlertIcon
var AlertIcon = {
    baseStyle: {
        size: 4
    }
};

var baseStyle$O = {};
var defaultProps$A = {
    ratio: 4 / 3
};
var AspectRatio = {
    baseStyle: baseStyle$O,
    defaultProps: defaultProps$A
};

var baseStyle$N = function (props) {
    var name = props.name;
    var bg = name
        ? randomColor({ string: getRandomString(5) + name })
        : 'gray.400';
    return {
        bg: bg,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 'full',
        _text: {
            fontWeight: 600,
            color: 'text.50'
        },
        _image: {
            borderRadius: 'full',
            alt: '--',
            _alt: {
                fontWeight: 600
            },
            style: {
                height: '100%',
                width: '100%'
            }
        },
        _light: {
            borderColor: 'gray.800'
        },
        _dark: {
            borderColor: 'white'
        }
    };
};
function getSize(size, fontSize, badgeSize) {
    return {
        width: size,
        height: size,
        _text: {
            fontSize: fontSize
        },
        _badgeSize: badgeSize
    };
}
var sizes$k = {
    'xs': getSize('6', '2xs', '2'),
    'sm': getSize('8', 'xs', '3'),
    'md': getSize('12', 'md', '4'),
    'lg': getSize('16', 'xl', '5'),
    'xl': getSize('24', '3xl', '6'),
    '2xl': getSize('32', '5xl', '7')
};
var defaultProps$z = {
    size: 'md'
};
var Avatar = {
    baseStyle: baseStyle$N,
    sizes: sizes$k,
    defaultProps: defaultProps$z
};

function baseStyle$M() {
    return {
        borderRadius: 'full',
        borderWidth: 2,
        bg: 'success.600',
        size: 3,
        position: 'absolute',
        right: 0,
        bottom: 0,
        _light: {
            borderColor: 'muted.50'
        },
        _dark: {
            borderColor: 'muted.900'
        }
    };
}
var AvatarBadge = { baseStyle: baseStyle$M };

function baseStyle$L(_a) {
    var isVertical = _a.isVertical;
    return {
        flexDirection: isVertical ? 'column-reverse' : 'row-reverse',
        space: -4,
        _avatar: {
            borderWidth: 2
        },
        _hiddenAvatarPlaceholder: {
            _text: {
                color: 'text.50'
            }
        },
        _light: {
            _avatar: {
                borderColor: 'muted.50'
            },
            _hiddenAvatarPlaceholder: {
                bg: 'gray.600'
            }
        },
        _dark: {
            _avatar: {
                borderColor: 'muted.900'
            },
            _hiddenAvatarPlaceholder: {
                bg: 'gray.600'
            }
        }
    };
}
var AvatarGroup = {
    baseStyle: baseStyle$L,
    defaultProps: {
        isVertical: false
    }
};

var baseStyle$K = {
    flexDirection: 'row',
    justifyContent: 'center',
    space: 1,
    px: '2',
    py: '0.5',
    alignItems: 'center',
    _text: { fontSize: 'xs', fontWeight: 'medium' }
};
function variantSolid$2(props) {
    var colorScheme = getColorScheme(props);
    return {
        _text: {
            color: 'text.50'
        },
        _icon: {
            color: 'text.50'
        },
        bg: "".concat(colorScheme, ".600"),
        borderWidth: '1',
        borderColor: 'transparent',
        borderRadius: '2'
    };
}
function variantSubtle$2(props) {
    var colorScheme = getColorScheme(props);
    return {
        _text: { color: "".concat(colorScheme, ".900") },
        _icon: { color: "".concat(colorScheme, ".900") },
        _light: { bg: "".concat(colorScheme, ".100") },
        _dark: { bg: "".concat(colorScheme, ".300") },
        borderWidth: '1',
        borderRadius: '2',
        borderColor: 'transparent'
    };
}
function variantOutline$3(props) {
    var colorScheme = getColorScheme(props);
    return {
        _light: {
            _text: { color: "".concat(colorScheme, ".600") },
            _icon: { color: "".concat(colorScheme, ".600") },
            borderColor: "".concat(colorScheme, ".600")
        },
        _dark: {
            _text: {
                color: "".concat(colorScheme, ".300")
            },
            _icon: {
                color: "".concat(colorScheme, ".300")
            },
            borderColor: "".concat(colorScheme, ".300")
        },
        borderRadius: '2',
        borderWidth: '1'
    };
}
var variants$7 = {
    solid: variantSolid$2,
    subtle: variantSubtle$2,
    outline: variantOutline$3
};
var defaultProps$y = {
    variant: 'subtle',
    colorScheme: 'muted'
};
var Badge = {
    baseStyle: baseStyle$K,
    variants: variants$7,
    defaultProps: defaultProps$y
};

var baseStyle$J = {
    width: 'auto',
    height: 'auto',
    display: 'flex',
    flexDirection: 'row',
    spacing: '2'
};
var defaultProps$x = {
    direction: 'row',
    wrap: 'wrap'
};
var Breadcrumb = {
    baseStyle: baseStyle$J,
    defaultProps: defaultProps$x
};
var BreadcrumbText = {
    baseStyle: __assign(__assign({}, baseStyle$J), { _current: { fontWeight: 'bold' } }),
    defaultProps: defaultProps$x
};
var BreadcrumbIcon = {
    baseStyle: __assign({}, baseStyle$J),
    defaultProps: defaultProps$x
};

var baseStyle$I = function (props) {
    var primary = props.theme.colors.primary;
    var focusRing = mode({
        boxShadow: "".concat(primary[400], " 0px 0px 0px 2px")
    }, {
        boxShadow: "".concat(primary[500], " 0px 0px 0px 2px")
    })(props);
    return {
        borderRadius: 'sm',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        _web: {
            _disabled: {
                cursor: 'not-allowed'
            },
            _loading: {
                cursor: 'not-allowed'
            },
            cursor: 'pointer',
            userSelect: 'none'
        },
        _focusVisible: {
            _web: {
                outlineWidth: '0',
                style: __assign({}, focusRing)
            }
        },
        _stack: {
            space: '1.5',
            alignItems: 'center'
        },
        _loading: {
            opacity: '40'
        },
        _disabled: {
            opacity: '40'
        },
        _spinner: {
            size: 'sm'
        }
    };
};
function variantGhost$1(_a) {
    var colorScheme = _a.colorScheme;
    return {
        _light: {
            _text: {
                color: "".concat(colorScheme, ".600")
            },
            _icon: {
                color: "".concat(colorScheme, ".600")
            },
            _spinner: {
                color: "".concat(colorScheme, ".600")
            },
            _hover: {
                bg: "".concat(colorScheme, ".600:alpha.10")
            },
            _pressed: {
                bg: "".concat(colorScheme, ".600:alpha.20")
            }
        },
        _dark: {
            _text: {
                color: "".concat(colorScheme, ".500")
            },
            _icon: {
                color: "".concat(colorScheme, ".500")
            },
            _spinner: {
                color: "".concat(colorScheme, ".500")
            },
            _hover: {
                bg: "".concat(colorScheme, ".500:alpha.10")
            },
            _pressed: {
                bg: "".concat(colorScheme, ".500:alpha.20")
            }
        }
    };
}
function variantOutline$2(_a) {
    var colorScheme = _a.colorScheme;
    return {
        borderWidth: '1px',
        _light: {
            borderColor: 'muted.300',
            _text: {
                color: "".concat(colorScheme, ".600")
            },
            _icon: {
                color: "".concat(colorScheme, ".600")
            },
            _spinner: {
                color: "".concat(colorScheme, ".600")
            },
            _hover: {
                bg: "".concat(colorScheme, ".600:alpha.10")
            },
            _pressed: {
                bg: "".concat(colorScheme, ".600:alpha.20")
            }
        },
        _dark: {
            borderColor: 'muted.700',
            _text: {
                color: "".concat(colorScheme, ".500")
            },
            _icon: {
                color: "".concat(colorScheme, ".500")
            },
            _spinner: {
                color: "".concat(colorScheme, ".500")
            },
            _hover: {
                bg: "".concat(colorScheme, ".500:alpha.10")
            },
            _pressed: {
                bg: "".concat(colorScheme, ".500:alpha.20")
            }
        }
    };
}
function variantSolid$1(_a) {
    var colorScheme = _a.colorScheme;
    return {
        _text: {
            color: 'text.50'
        },
        _icon: {
            color: 'text.50'
        },
        _spinner: {
            color: 'text.50'
        },
        _light: {
            bg: "".concat(colorScheme, ".600"),
            _hover: {
                bg: "".concat(colorScheme, ".700")
            },
            _pressed: {
                bg: "".concat(colorScheme, ".800")
            }
        },
        _dark: {
            bg: "".concat(colorScheme, ".600"),
            _hover: {
                bg: "".concat(colorScheme, ".700")
            },
            _pressed: {
                bg: "".concat(colorScheme, ".800")
            }
        }
    };
}
function variantSubtle$1(_a) {
    var colorScheme = _a.colorScheme;
    return {
        _text: {
            color: "".concat(colorScheme, ".900")
        },
        _icon: {
            color: "".concat(colorScheme, ".900")
        },
        _spinner: {
            color: "".concat(colorScheme, ".900")
        },
        _light: {
            bg: "".concat(colorScheme, ".100"),
            _hover: {
                bg: "".concat(colorScheme, ".200")
            },
            _pressed: {
                bg: "".concat(colorScheme, ".300")
            }
        },
        _dark: {
            bg: "".concat(colorScheme, ".300"),
            _hover: {
                bg: "".concat(colorScheme, ".200")
            },
            _pressed: {
                bg: "".concat(colorScheme, ".100")
            }
        }
    };
}
function variantLink$1(_a) {
    var colorScheme = _a.colorScheme;
    return {
        _icon: {
            color: "".concat(colorScheme, ".600")
        },
        _spinner: {
            color: "".concat(colorScheme, ".600")
        },
        _hover: {
            _text: {
                textDecorationLine: 'underline'
            }
        },
        _pressed: {
            _text: {
                textDecorationLine: 'underline'
            }
        },
        _light: {
            _text: {
                color: "".concat(colorScheme, ".600")
            },
            _pressed: {
                _text: {
                    color: "".concat(colorScheme, ".800")
                }
            }
        },
        _dark: {
            _text: {
                color: "".concat(colorScheme, ".500")
            },
            _pressed: {
                _text: {
                    color: "".concat(colorScheme, ".300")
                }
            }
        }
    };
}
var variants$6 = {
    ghost: variantGhost$1,
    outline: variantOutline$2,
    solid: variantSolid$1,
    subtle: variantSubtle$1,
    link: variantLink$1,
    unstyled: {}
};
var sizes$j = {
    lg: {
        px: '3',
        py: '3',
        _text: {
            fontSize: 'md'
        },
        _icon: {
            size: 'md'
        }
    },
    md: {
        px: '3',
        py: '2.5',
        _text: {
            fontSize: 'sm'
        },
        _icon: {
            size: 'sm'
        }
    },
    sm: {
        px: '3',
        py: '2',
        _text: {
            fontSize: 'xs'
        },
        _icon: {
            size: 'sm'
        }
    },
    xs: {
        px: '3',
        py: '2',
        _text: {
            fontSize: '2xs'
        },
        _icon: {
            size: 'xs'
        }
    }
};
var defaultProps$w = {
    variant: 'solid',
    size: 'md',
    colorScheme: 'primary'
};
var ButtonGroup = {
    baseStyle: { direction: 'row' },
    defaultProps: { space: 2, borderRadius: 4 }
};
var Button = {
    baseStyle: baseStyle$I,
    variants: variants$6,
    sizes: sizes$j,
    defaultProps: defaultProps$w
};

var baseStyle$H = {
    shadow: 4,
    borderRadius: 'md',
    padding: 4,
    overflow: 'hidden'
};
var defaultProps$v = {};
var Card = {
    baseStyle: baseStyle$H,
    defaultProps: defaultProps$v
};

// For Square and circle variation
var sizes$i = {
    'xs': {
        height: 10,
        width: 10
    },
    'sm': {
        height: 12,
        width: 12
    },
    'md': {
        height: 16,
        width: 16
    },
    'lg': {
        height: 24,
        width: 24
    },
    'xl': {
        height: 32,
        width: 32
    },
    '2xl': {
        height: 40,
        width: 40
    }
};
var Center = {
    baseStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    sizes: sizes$i
};

var baseStyle$G = function (props) {
    var c = props.colorScheme, theme = props.theme;
    var colors = theme.colors;
    return {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderWidth: 2,
        borderRadius: 'sm',
        opacity: 1,
        p: 0.5,
        _light: {
            bg: 'muted.50',
            borderColor: 'muted.400',
            _text: {
                color: 'darkText'
            },
            _icon: {
                color: "muted.50"
            },
            _checked: {
                borderColor: "".concat(c, ".600"),
                bg: "".concat(c, ".600"),
                _hover: {
                    borderColor: "".concat(c, ".700"),
                    bg: "".concat(c, ".700"),
                    _disabled: {
                        borderColor: "".concat(c, ".600"),
                        bg: "".concat(c, ".600")
                    }
                },
                _pressed: {
                    borderColor: "".concat(c, ".800"),
                    bg: "".concat(c, ".800")
                }
            },
            _hover: {
                borderColor: 'muted.500',
                _disabled: {
                    borderColor: 'muted.400'
                }
            },
            _pressed: {
                borderColor: 'muted.600'
            },
            _invalid: {
                borderColor: 'error.600'
            }
        },
        _dark: {
            bg: 'muted.900',
            borderColor: 'muted.500',
            _text: {
                color: 'lightText'
            },
            _icon: {
                color: "muted.900"
            },
            _checked: {
                borderColor: "".concat(c, ".500"),
                bg: "".concat(c, ".500"),
                _hover: {
                    borderColor: "".concat(c, ".400"),
                    bg: "".concat(c, ".400"),
                    _disabled: {
                        borderColor: "".concat(c, ".500"),
                        bg: "".concat(c, ".500")
                    }
                },
                _pressed: {
                    borderColor: "".concat(c, ".300"),
                    bg: "".concat(c, ".300")
                }
            },
            _hover: {
                borderColor: 'muted.400',
                _disabled: {
                    borderColor: 'muted.500'
                }
            },
            _pressed: {
                borderColor: 'muted.300'
            },
            _invalid: {
                borderColor: 'error.500'
            }
        },
        _stack: {
            direction: 'row',
            alignItems: 'center',
            space: 2,
            _web: {
                _disabled: {
                    cursor: 'not-allowed'
                },
                cursor: 'pointer'
            }
        },
        _text: {
            ml: 2
        },
        _focusVisible: {
            _web: {
                style: {
                    outlineWidth: '2px',
                    outlineColor: colors[c][400],
                    outlineStyle: 'solid'
                }
            }
        },
        _disabled: {
            _web: {
                cursor: 'not-allowed'
            },
            opacity: 0.4
        }
    };
};
var sizes$h = {
    lg: { _icon: { size: 5 }, _text: { fontSize: 'xl' } },
    md: { _icon: { size: 4 }, _text: { fontSize: 'lg' } },
    sm: { _icon: { size: 3 }, _text: { fontSize: 'md' } }
};
var defaultProps$u = {
    defaultIsChecked: false,
    size: 'sm',
    colorScheme: 'primary'
};
var Checkbox = {
    baseStyle: baseStyle$G,
    sizes: sizes$h,
    defaultProps: defaultProps$u
};

var baseStyle$F = function () {
    return {
        alignItems: 'flex-start'
    };
};
var CheckboxGroup = {
    baseStyle: baseStyle$F
};

var baseStyle$E = {};
var defaultProps$t = {};
var Box = {
    baseStyle: baseStyle$E,
    defaultProps: defaultProps$t
};

var baseStyle$D = {};
var defaultProps$s = {};
var FlatList = {
    baseStyle: baseStyle$D,
    defaultProps: defaultProps$s
};

var baseStyle$C = {};
var defaultProps$r = {};
var KeyboardAvoidingView = {
    baseStyle: baseStyle$C,
    defaultProps: defaultProps$r
};

var baseStyle$B = {};
var defaultProps$q = {};
var ScrollView = {
    baseStyle: baseStyle$B,
    defaultProps: defaultProps$q
};

var baseStyle$A = {};
var defaultProps$p = {};
var SectionList = {
    baseStyle: baseStyle$A,
    defaultProps: defaultProps$p
};

var baseStyle$z = {};
var defaultProps$o = {};
var StatusBar = {
    baseStyle: baseStyle$z,
    defaultProps: defaultProps$o
};

var sizes$g = {
    'xs': {
        height: 6,
        width: 6
    },
    'sm': {
        height: 8,
        width: 8
    },
    'md': {
        height: 16,
        width: 16
    },
    'lg': {
        height: 20,
        width: 20
    },
    'xl': {
        height: 24,
        width: 24
    },
    '2xl': {
        height: 32,
        width: 32
    }
};
var defaultProps$n = {
    thickness: 8,
    colorScheme: 'primary',
    size: 'lg'
};
function baseStyle$y(props) {
    var colorScheme = getColorScheme(props);
    return {
        color: mode("".concat(colorScheme, ".600"), "".concat(colorScheme, ".500"))(props),
        trackColor: mode("".concat(colorScheme, ".200"), "".concat(colorScheme, ".800"))(props)
    };
}
var CircularProgress = { baseStyle: baseStyle$y, sizes: sizes$g, defaultProps: defaultProps$n };

var variants$5 = Badge.variants, defaultProps$m = Badge.defaultProps;
var baseStyle$x = {
    _text: {
        fontFamily: 'monospace',
        fontSize: 'sm'
    },
    borderRadius: 'sm',
    px: 2,
    py: 1
};
var Code = {
    baseStyle: baseStyle$x,
    variants: variants$5,
    defaultProps: defaultProps$m
};

var baseStyle$w = function (props) {
    var centerContent = props.centerContent;
    return {
        maxWidth: '80%',
        alignItems: centerContent ? 'center' : 'flex-start',
        _text: { textAlign: centerContent ? 'center' : 'left' }
    };
};
var Container = {
    baseStyle: baseStyle$w
};

var baseStyle$v = {};
var defaultProps$l = {};
var HStack = {
    baseStyle: baseStyle$v,
    defaultProps: defaultProps$l
};

var baseStyle$u = {};
var defaultProps$k = {};
var VStack = {
    baseStyle: baseStyle$u,
    defaultProps: defaultProps$k
};

function baseStyle$t() {
    return {
        _light: {
            bg: 'muted.300'
        },
        _dark: {
            bg: 'muted.600'
        }
    };
}
var Divider = {
    baseStyle: baseStyle$t,
    defaultProps: {
        orientation: 'horizontal',
        thickness: '1'
    }
};

var sizes$f = {
    'xs': {
        height: 10,
        width: 10
    },
    'sm': {
        height: 12,
        width: 12
    },
    'md': {
        height: 16,
        width: 16
    },
    'lg': {
        height: 24,
        width: 24
    },
    'xl': {
        height: 32,
        width: 32
    },
    '2xl': {
        height: 40,
        width: 40
    }
};
var baseStyle$s = {
    rounded: 'full',
    alignItems: 'center',
    justifyContent: 'center'
};
var Circle = {
    baseStyle: baseStyle$s,
    sizes: sizes$f
};

var baseStyle$r = {};
var defaultProps$j = {};
var SimpleGrid = {
    baseStyle: baseStyle$r,
    defaultProps: defaultProps$j
};

// FormControl
var FormControl = {
    baseStyle: {
        width: '100%'
    }
};
// FormControlErrorMessage
var FormControlErrorMessage = {
    baseStyle: function () {
        return {
            mt: '2',
            _text: {
                fontSize: 'xs'
            },
            _stack: { space: 1, alignItems: 'center' },
            _light: {
                _text: {
                    color: 'error.600'
                }
            },
            _dark: {
                _text: {
                    color: 'error.500'
                }
            }
        };
    }
};
// FormControlLabel
var FormControlLabel = {
    baseStyle: function () {
        return {
            flexDirection: 'row',
            justifyContent: 'flex-start',
            _text: {
                fontSize: 'sm',
                fontWeight: 'medium'
            },
            my: '1',
            _light: {
                _text: {
                    color: 'text.500'
                },
                _astrick: {
                    color: 'error.600'
                }
            },
            _dark: {
                _text: {
                    color: 'text.400'
                },
                _astrick: {
                    color: 'error.500'
                }
            }
        };
    }
};
// FormControlHelperText
var FormControlHelperText = {
    baseStyle: function () {
        return {
            mt: '2',
            _text: {
                fontSize: 'xs'
            },
            _light: {
                _text: {
                    color: 'text.500'
                }
            },
            _dark: {
                _text: {
                    color: 'text.400'
                }
            }
        };
    }
};

var baseStyle$q = function () {
    return {
        _light: {
            color: 'text.900'
        },
        _dark: {
            color: 'text.50'
        },
        fontWeight: 'bold',
        lineHeight: 'sm'
    };
};
var sizes$e = {
    '4xl': {
        fontSize: ['6xl', null, '7xl'],
        letterSpacing: 'xl'
    },
    '3xl': {
        fontSize: ['5xl', null, '6xl'],
        letterSpacing: 'xl'
    },
    '2xl': {
        fontSize: ['4xl', null, '5xl']
    },
    'xl': {
        fontSize: ['3xl', null, '4xl']
    },
    'lg': {
        fontSize: ['2xl', null, '3xl']
    },
    'md': { fontSize: 'xl' },
    'sm': { fontSize: 'md' },
    'xs': { fontSize: 'sm' }
};
var defaultProps$i = {
    size: 'lg'
};
var Heading = {
    baseStyle: baseStyle$q,
    sizes: sizes$e,
    defaultProps: defaultProps$i
};

var baseStyle$p = function () {
    return {
        _light: {
            color: 'muted.500'
        },
        _dark: {
            color: 'muted.400'
        }
    };
};
var sizes$d = {
    '2xs': 2,
    'xs': 3,
    'sm': 4,
    'md': 5,
    'lg': 6,
    'xl': 7,
    '2xl': 8,
    '3xl': 9,
    '4xl': 10,
    '5xl': 12,
    '6xl': 16
};
var defaultProps$h = { size: 'sm' };
var Icon = { baseStyle: baseStyle$p, sizes: sizes$d, defaultProps: defaultProps$h };

var baseStyle$o = function (props) {
    var colorScheme = props.colorScheme;
    var colors = props.theme.colors;
    var focusRing = mode({
        outlineWidth: '2px',
        outlineColor: "".concat(colors[colorScheme][600]),
        outlineStyle: 'solid'
    }, {
        outlineWidth: '2px',
        outlineColor: "".concat(colors[colorScheme][500]),
        outlineStyle: 'solid'
    })(props);
    return {
        borderRadius: 'sm',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        _web: {
            _disabled: {
                cursor: 'not-allowed'
            },
            _loading: {
                cursor: 'not-allowed'
            },
            cursor: 'pointer',
            userSelect: 'none'
        },
        _focus: {
            borderColor: "".concat(colorScheme, ".400")
        },
        _focusVisible: {
            _web: {
                style: __assign({}, focusRing)
            }
        },
        _loading: {
            opacity: '40'
        },
        _disabled: {
            opacity: '40'
        }
    };
};
function variantGhost(_a) {
    var colorScheme = _a.colorScheme;
    return {
        _light: {
            _icon: {
                color: "".concat(colorScheme, ".600")
            },
            _hover: {
                bg: "".concat(colorScheme, ".600:alpha.10")
            },
            _pressed: {
                bg: "".concat(colorScheme, ".600:alpha.20")
            }
        },
        _dark: {
            _icon: {
                color: "".concat(colorScheme, ".500")
            },
            _hover: {
                bg: "".concat(colorScheme, ".500:alpha.10")
            },
            _pressed: {
                bg: "".concat(colorScheme, ".500:alpha.20")
            }
        }
    };
}
function variantOutline$1(_a) {
    var colorScheme = _a.colorScheme;
    return {
        borderWidth: '1px',
        _light: {
            borderColor: "".concat(colorScheme, ".600"),
            _icon: {
                color: "".concat(colorScheme, ".600")
            },
            _hover: {
                bg: "".concat(colorScheme, ".700"),
                _icon: {
                    color: 'muted.50'
                }
            },
            _pressed: {
                bg: "".concat(colorScheme, ".800"),
                _icon: {
                    color: 'muted.50'
                }
            },
            _focus: {
                bg: "".concat(colorScheme, ".600"),
                _icon: {
                    color: 'muted.50'
                }
            }
        },
        _dark: {
            borderColor: "".concat(colorScheme, ".500"),
            _icon: {
                color: "".concat(colorScheme, ".500")
            },
            _hover: {
                bg: "".concat(colorScheme, ".400"),
                _icon: {
                    color: 'muted.900'
                }
            },
            _pressed: {
                bg: "".concat(colorScheme, ".300"),
                _icon: {
                    color: 'muted.900'
                }
            },
            _focus: {
                bg: "".concat(colorScheme, ".500"),
                _icon: {
                    color: 'muted.900'
                }
            }
        }
    };
}
function variantSolid(_a) {
    var colorScheme = _a.colorScheme;
    return {
        _light: {
            bg: "".concat(colorScheme, ".600"),
            _hover: {
                bg: "".concat(colorScheme, ".700")
            },
            _pressed: {
                bg: "".concat(colorScheme, ".800")
            },
            _icon: {
                color: 'muted.50'
            }
        },
        _dark: {
            bg: "".concat(colorScheme, ".500"),
            _hover: {
                bg: "".concat(colorScheme, ".400")
            },
            _pressed: {
                bg: "".concat(colorScheme, ".300"),
                _icon: {
                    color: 'muted.900'
                }
            },
            _icon: {
                color: 'muted.900'
            }
        }
    };
}
function variantSubtle(_a) {
    var colorScheme = _a.colorScheme;
    return {
        _text: {
            color: "".concat(colorScheme, ".900")
        },
        _icon: {
            color: "".concat(colorScheme, ".900")
        },
        _light: {
            bg: "".concat(colorScheme, ".100"),
            _hover: {
                bg: "".concat(colorScheme, ".200")
            },
            _pressed: {
                bg: "".concat(colorScheme, ".300")
            }
        },
        _dark: {
            bg: "".concat(colorScheme, ".300"),
            _hover: {
                bg: "".concat(colorScheme, ".200")
            },
            _pressed: {
                bg: "".concat(colorScheme, ".100")
            }
        }
    };
}
function variantLink(_a) {
    var colorScheme = _a.colorScheme;
    return {
        _spinner: {
            color: "".concat(colorScheme, ".600")
        },
        _light: {
            _icon: {
                color: "".concat(colorScheme, ".600")
            },
            _hover: {
                _icon: {
                    color: "".concat(colorScheme, ".700")
                }
            },
            _pressed: {
                _icon: {
                    color: "".concat(colorScheme, ".800")
                }
            }
        },
        _dark: {
            _icon: {
                color: "".concat(colorScheme, ".500")
            },
            _hover: {
                _icon: {
                    color: "".concat(colorScheme, ".400")
                }
            },
            _pressed: {
                _icon: {
                    color: "".concat(colorScheme, ".300")
                }
            }
        }
    };
}
function variantUnstyled() {
    return {
        _light: {
            _icon: {
                color: 'muted.900'
            }
        },
        _dark: {
            _icon: {
                color: 'muted.50'
            }
        }
    };
}
var variants$4 = {
    ghost: variantGhost,
    outline: variantOutline$1,
    solid: variantSolid,
    subtle: variantSubtle,
    link: variantLink,
    unstyled: variantUnstyled
};
var sizes$c = {
    lg: {
        p: '3',
        _icon: {
            size: 'lg'
        }
    },
    md: {
        p: '2.5',
        _icon: {
            size: 'md'
        }
    },
    sm: {
        p: '2',
        _icon: {
            size: 'sm'
        }
    },
    xs: {
        p: '1.5',
        _icon: {
            size: 'xs'
        }
    }
};
var defaultProps$g = {
    variant: 'ghost',
    size: 'md',
    colorScheme: 'primary'
};
var IconButton = {
    baseStyle: baseStyle$o,
    variants: variants$4,
    sizes: sizes$c,
    defaultProps: defaultProps$g
};

// Image
var sizes$b = {
    '2xs': '6',
    'xs': '10',
    'sm': '16',
    'md': '20',
    'lg': '24',
    'xl': '32',
    '2xl': '64',
    'full': '100%'
};
var Image = {
    baseStyle: {
        maxWidth: '100%'
    },
    sizes: sizes$b,
    defaultProps: {}
};

var baseStyle$n = function (props) {
    var _a = props.theme.colors, primary = _a.primary, error = _a.error;
    return {
        // fontFamily: 'body',
        py: '2',
        px: '3',
        borderRadius: 'sm',
        overflow: 'hidden',
        _disabled: {
            opacity: '0.4',
            _web: {
                disabled: true,
                cursor: 'not-allowed'
            }
        },
        _web: {
            outlineWidth: '0',
            overflow: 'auto',
            lineHeight: 'lg',
            style: { outline: 'none' },
            cursor: 'auto'
        },
        _input: {
            flex: 1,
            w: '100%',
            h: '100%'
        },
        _light: {
            placeholderTextColor: 'text.400',
            color: 'text.900',
            borderColor: 'muted.300',
            _hover: {
                borderColor: 'primary.600'
            },
            _focus: {
                borderColor: 'primary.600',
                _hover: { borderColor: 'primary.600' },
                _stack: {
                    style: {
                        outlineWidth: '1px',
                        outlineColor: "".concat(props.focusOutlineColor || primary[600]),
                        outlineStyle: 'solid'
                    }
                }
            },
            _invalid: {
                borderColor: 'error.600',
                _hover: { borderColor: 'error.600' },
                _stack: {
                    style: {
                        outlineWidth: '1px',
                        outlineColor: "".concat(props.invalidOutlineColor || error[600]),
                        outlineStyle: 'solid'
                    }
                }
            },
            _ios: {
                selectionColor: 'coolGray.800'
            },
            _android: {
                selectionColor: 'coolGray.800'
            },
            _disabled: {
                placeholderTextColor: 'muted.700',
                _hover: {
                    borderColor: 'muted.300'
                }
            },
            _stack: {
                flexDirection: 'row',
                alignItems: 'center',
                // justifyContent: 'space-between',
                overflow: 'hidden'
            }
        },
        _dark: {
            placeholderTextColor: 'text.600',
            color: 'text.50',
            borderColor: 'muted.700',
            _hover: {
                borderColor: 'primary.500'
            },
            _focus: {
                borderColor: 'primary.500',
                _hover: { borderColor: 'primary.500' },
                _stack: {
                    style: {
                        outlineWidth: '1px',
                        outlineColor: "".concat(props.focusOutlineColor || primary[500]),
                        outlineStyle: 'solid'
                    }
                }
            },
            _invalid: {
                borderColor: 'error.500',
                _stack: {
                    style: {
                        outlineWidth: '1px',
                        outlineColor: "".concat(props.invalidOutlineColor || error[500]),
                        outlineStyle: 'solid'
                    }
                },
                _hover: { borderColor: 'error.500' }
            },
            _ios: {
                selectionColor: 'warmGray.50'
            },
            _android: {
                selectionColor: 'warmGray.50'
            },
            _disabled: {
                placeholderTextColor: 'text.50',
                _hover: {
                    borderColor: 'muted.700'
                }
            },
            _stack: {
                flexDirection: 'row',
                alignItems: 'center',
                // justifyContent: 'space-between',
                overflow: 'hidden'
            }
        }
    };
};
function roundedStyle(props) {
    var theme = props.theme;
    return {
        borderRadius: 'full',
        borderWidth: '1',
        _focus: {
            bg: transparentize('primary.600', 0.1)(theme)
        }
    };
}
function outlineStyle(props) {
    var theme = props.theme;
    return {
        borderWidth: '1',
        // bg: 'red.400',
        _focus: {
            bg: transparentize('primary.600', 0.1)(theme)
        }
    };
}
function filledStyle(props) {
    var theme = props.theme;
    return {
        borderWidth: '1',
        _focus: {
            bg: transparentize('primary.600', 0.1)(theme)
        },
        _hover: {
            borderWidth: '1',
            _disabled: {
                borderWidth: 0
            }
        },
        _light: {
            bg: 'muted.100',
            borderColor: 'muted.100'
        },
        _dark: {
            bg: 'muted.800',
            borderColor: 'muted.800'
        }
    };
}
function unstyledStyle() {
    return {
        borderWidth: '0',
        _focus: {
            bg: 'transparent'
        },
        _invalid: {
            _stack: {
                style: {
                    outlineWidth: 0
                }
            }
        },
        _stack: {
            _focus: {
                style: {
                    outlineWidth: '0'
                }
            }
        }
    };
}
function underlinedStyle(props) {
    var _a = props.theme.colors, primary = _a.primary, error = _a.error;
    return {
        borderWidth: '0',
        pl: '0',
        borderBottomWidth: '1',
        _light: {
            _focus: {
                _stack: {
                    style: {
                        outlineWidth: '0',
                        boxShadow: "0 1px 0 0 ".concat(props.focusOutlineColor || primary[600])
                    }
                }
            },
            _invalid: {
                _stack: {
                    style: {
                        outlineWidth: 0,
                        boxShadow: "0 1px 0 0 ".concat(props.invalidOutlineColor || error[600])
                    }
                }
            }
        },
        _dark: {
            _focus: {
                _stack: {
                    style: {
                        outlineWidth: '0',
                        boxShadow: "0 1px 0 0 ".concat(props.focusOutlineColor || primary[500])
                    }
                }
            },
            _invalid: {
                _stack: {
                    style: {
                        outlineWidth: 0,
                        boxShadow: "0 1px 0 0 ".concat(props.focusOutlineColor || error[500])
                    }
                }
            }
        },
        borderRadius: 0
    };
}
var variants$3 = {
    outline: outlineStyle,
    underlined: underlinedStyle,
    rounded: roundedStyle,
    filled: filledStyle,
    unstyled: unstyledStyle
};
var sizes$a = {
    '2xl': { fontSize: 'xl' },
    'xl': { fontSize: 'lg' },
    'lg': { fontSize: 'md' },
    'md': { fontSize: 'sm' },
    'sm': { fontSize: 'xs' },
    'xs': { fontSize: '2xs' }
};
var defaultProps$f = {
    size: 'sm',
    variant: 'outline'
};
// Input
var Input = {
    baseStyle: baseStyle$n,
    defaultProps: defaultProps$f,
    variants: variants$3,
    sizes: sizes$a
};

var baseStyle$m = function () {
    return {
        py: 1,
        px: 2,
        shadow: 6,
        rounded: 'sm',
        _text: {
            fontSize: 'sm'
        },
        _light: {
            bg: "muted.800",
            _text: {
                color: "text.50"
            }
        },
        _dark: {
            bg: "muted.50",
            _text: {
                color: "text.900"
            }
        }
    };
};
var Tooltip = {
    baseStyle: baseStyle$m
};

function baseStyle$l(props) {
    return {
        bg: mode('muted.200', 'muted.700')(props),
        borderColor: mode('muted.300', 'muted.600')(props),
        borderWidth: 2,
        borderBottomWidth: 4,
        shadow: 1,
        borderRadius: 'md',
        px: 2,
        _text: {
            fontSize: 'sm',
            fontWeight: 'bold',
            fontFamily: 'monospace'
        }
    };
}
var defaultProps$e = {};
var Kbd = {
    baseStyle: baseStyle$l,
    defaultProps: defaultProps$e
};

var baseStyle$k = function (props) {
    var isUnderlined = props.isUnderlined;
    return {
        _text: {
            textDecorationLine: isUnderlined ? 'underline' : 'none'
        },
        width: 'auto',
        height: 'auto'
    };
};
var Link = {
    baseStyle: baseStyle$k,
    defaultProps: {
        isUnderlined: true
    }
};

var baseStyle$j = {
    py: 2,
    borderRadius: 'sm',
    shadow: 6,
    _light: {
        bg: 'muted.50'
    },
    _dark: {
        bg: 'muted.800'
    },
    _presenceTransition: {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            translateY: 0,
            transition: { duration: 200 }
        },
        exit: { opacity: 0, transition: { duration: 150 } }
    },
    _overlay: {},
    _backdrop: {
        bg: 'transparent'
    }
};
var Menu = {
    baseStyle: baseStyle$j
};
var MenuGroup = {
    baseStyle: {
        _title: {
            fontSize: 'xs',
            textTransform: 'uppercase',
            _light: {
                color: 'text.500'
            },
            _dark: {
                color: 'text.400'
            }
        },
        p: 3
    }
};
var MenuItem = {
    baseStyle: {
        px: 3,
        py: 2,
        _web: {
            outlineWidth: 0
        },
        _stack: {
            alignItems: 'center',
            px: 3,
            space: 3
        },
        _icon: {
            size: 4,
            opacity: 0
        },
        _light: {
            _text: {
                color: 'text.900'
            },
            _disabled: {
                _text: {
                    color: 'text.400'
                }
            },
            _hover: {
                bg: 'muted.200'
            },
            _focus: {
                bg: 'muted.300'
            },
            _pressed: {
                bg: 'muted.400'
            },
            _icon: {
                color: 'muted.500'
            },
            _focusVisible: {
                _web: {
                    outlineWidth: '0',
                    style: { boxShadow: "none" },
                    bg: 'muted.300'
                }
            }
        },
        _dark: {
            _text: {
                color: 'text.50'
            },
            _disabled: {
                _text: {
                    color: 'text.600'
                }
            },
            _hover: {
                bg: 'muted.700'
            },
            _focus: {
                bg: 'muted.600'
            },
            _pressed: {
                bg: 'muted.500'
            },
            _icon: {
                color: 'muted.400'
            }
        },
        _focusVisible: {
            _web: {
                outlineWidth: '0',
                style: { boxShadow: "none" },
                bg: 'muted.600'
            }
        },
        _checked: {
            _icon: {
                opacity: 1
            }
        }
    },
    defaultProps: {}
};

var sizes$9 = {
    xs: {
        contentSize: {
            width: '60%',
            maxWidth: '280'
        }
    },
    sm: {
        contentSize: {
            width: '65%',
            maxWidth: '320'
        }
    },
    md: {
        contentSize: {
            width: '75%',
            maxWidth: '380'
        }
    },
    lg: {
        contentSize: {
            width: '80%',
            maxWidth: '520'
        }
    },
    xl: {
        contentSize: {
            width: '90%',
            maxWidth: '580'
        }
    },
    full: {
        contentSize: {
            width: '100%'
        }
    }
};
var Modal = {
    baseStyle: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        _web: { pointerEvents: 'box-none' },
        _backdropFade: { exitDuration: 150, entryDuration: 200 },
        _slide: { overlay: false, duration: 200 },
        _fade: { exitDuration: 100, entryDuration: 200 }
    },
    sizes: sizes$9,
    defaultProps: {
        size: 'md',
        closeOnOverlayClick: true
    }
};
var ModalContent = {
    baseStyle: {
        shadow: 1,
        rounded: 'lg',
        //TODO: build-time
        // maxHeight: `${Dimensions.get('window').height - 150}px`,
        overflow: 'hidden',
        _light: {
            bg: 'muted.50',
            _text: {
                color: 'text.900'
            }
        },
        _dark: {
            bg: 'muted.800',
            _text: {
                color: 'text.50'
            }
        }
    }
};
var ModalCloseButton = {
    baseStyle: {
        position: 'absolute',
        right: '3',
        top: '3',
        zIndex: '1',
        colorScheme: 'coolGray',
        p: '2',
        bg: 'transparent',
        borderRadius: 'sm',
        _web: {
            outlineWidth: 0,
            cursor: 'pointer'
        },
        _icon: {
            size: '4'
        },
        _light: {
            _icon: {
                color: 'muted.500'
            },
            _hover: {
                bg: 'muted.200'
            },
            _pressed: {
                bg: 'muted.300'
            }
        },
        _dark: {
            _icon: {
                color: 'muted.400'
            },
            _hover: {
                bg: 'muted.700'
            },
            _pressed: {
                bg: 'muted.600'
            }
        }
    }
};
var ModalHeader = {
    baseStyle: {
        p: '4',
        borderBottomWidth: '1',
        _text: {
            fontSize: 'md',
            fontWeight: 'semibold',
            lineHeight: 'sm'
        },
        _light: {
            bg: 'muted.50',
            borderColor: 'muted.300',
            _text: {
                color: 'text.900'
            }
        },
        _dark: {
            bg: 'muted.800',
            borderColor: 'muted.700',
            _text: {
                color: 'text.50'
            }
        }
    }
};
var ModalBody = {
    baseStyle: {
        p: '4',
        _light: {
            _text: {
                color: 'text.900'
            }
        },
        _dark: {
            _text: {
                color: 'text.50'
            }
        }
    }
};
var ModalFooter = {
    baseStyle: {
        p: '4',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        flexWrap: 'wrap',
        borderTopWidth: 1,
        _light: {
            bg: 'muted.50',
            borderColor: 'muted.300'
        },
        _dark: {
            bg: 'muted.800',
            borderColor: 'muted.700'
        }
    }
};
var ModalOverlay = {
    baseStyle: {
        position: 'absolute',
        left: '0',
        top: '0',
        opacity: '50',
        right: '0',
        bottom: '0'
    }
};

var sizes$8 = {
    xs: {
        contentSize: {
            width: '60%',
            maxWidth: '280'
        }
    },
    sm: {
        contentSize: {
            width: '65%',
            maxWidth: '320'
        }
    },
    md: {
        contentSize: {
            width: '75%',
            maxWidth: '380'
        }
    },
    lg: {
        contentSize: {
            width: '80%',
            maxWidth: '520'
        }
    },
    xl: {
        contentSize: {
            width: '90%',
            maxWidth: '580'
        }
    },
    full: {
        contentSize: {
            width: '100%'
        }
    }
};
var AlertDialog = {
    baseStyle: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        _web: { pointerEvents: 'box-none' },
        _backdropFade: { exitDuration: 150, entryDuration: 200 },
        _fade: { exitDuration: 100, entryDuration: 200 },
        _slide: { duration: 200, overlay: false }
    },
    sizes: sizes$8,
    defaultProps: {
        size: 'md',
        closeOnOverlayClick: true
    }
};
var AlertDialogContent = {
    baseStyle: function () {
        return {
            shadow: 1,
            rounded: 'lg',
            //TODO: build-time
            // maxHeight: `${Dimensions.get('window').height - 150}px`,
            overflow: 'hidden',
            _light: {
                bg: 'muted.50',
                _text: {
                    color: 'text.900'
                }
            },
            _dark: {
                bg: 'muted.800',
                color: 'text.50'
            }
        };
    }
};
var AlertDialogCloseButton = {
    baseStyle: function () {
        return {
            position: 'absolute',
            right: '3',
            top: '3',
            zIndex: '1',
            p: '2',
            bg: 'transparent',
            borderRadius: 'sm',
            _web: {
                outlineWidth: 0,
                cursor: 'pointer'
            },
            _icon: {
                size: '4'
            },
            _light: {
                _icon: {
                    color: 'muted.500'
                },
                _hover: {
                    bg: 'muted.200'
                },
                _pressed: {
                    bg: 'muted.300'
                }
            },
            _dark: {
                _icon: {
                    color: 'muted.400'
                },
                _hover: {
                    bg: 'muted.700'
                },
                _pressed: {
                    bg: 'muted.600'
                }
            }
        };
    }
};
var AlertDialogHeader = {
    baseStyle: function () {
        return {
            p: '4',
            borderBottomWidth: '1',
            _text: {
                fontSize: 'md',
                fontWeight: 'semibold',
                lineHeight: 'sm'
            },
            _light: {
                bg: 'muted.50',
                borderColor: 'muted.300',
                _text: {
                    color: 'text.900'
                }
            },
            _dark: {
                bg: 'muted.800',
                borderColor: 'muted.700',
                _text: {
                    color: 'text.50'
                }
            }
        };
    }
};
var AlertDialogBody = {
    baseStyle: function () {
        return {
            p: '4',
            _light: {
                bg: 'muted.50',
                _text: {
                    color: 'text.900'
                }
            },
            _dark: {
                bg: 'muted.800',
                _text: {
                    color: 'text.50'
                }
            }
        };
    }
};
var AlertDialogFooter = {
    baseStyle: function () {
        return {
            p: '4',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            flexWrap: 'wrap',
            borderTopWidth: '1',
            _light: {
                bg: 'muted.50',
                borderColor: 'muted.300'
            },
            _dark: {
                bg: 'muted.800',
                borderColor: 'muted.700'
            }
        };
    }
};
var AlertDialogOverlay = {
    baseStyle: {
        position: 'absolute',
        left: '0',
        top: '0',
        opacity: '50',
        right: '0',
        bottom: '0'
    }
};

var PopoverCloseButton = {
    baseStyle: function () { return ({
        position: 'absolute',
        right: 3,
        top: 3,
        zIndex: 1,
        p: '2',
        bg: 'transparent',
        borderRadius: 'sm',
        _web: {
            outlineWidth: 0,
            cursor: 'pointer'
        },
        _icon: {
            size: '4'
        },
        _light: {
            _icon: {
                color: 'muted.500'
            },
            _hover: {
                bg: 'muted.200'
            },
            _pressed: {
                bg: 'muted.300'
            }
        },
        _dark: {
            _icon: {
                color: 'muted.400'
            },
            _hover: {
                bg: 'muted.700'
            },
            _pressed: {
                bg: 'muted.600'
            }
        }
    }); }
};
var PopoverBody = {
    baseStyle: function () { return ({
        p: '3',
        shadow: '6',
        _light: {
            bg: 'muted.50',
            _text: {
                color: 'text.900'
            }
        },
        _dark: {
            bg: 'muted.800',
            _text: {
                color: 'text.50'
            }
        }
    }); }
};
var PopoverContent = {
    baseStyle: function () { return ({
        //TODO: Box inside PopperContent is not able to resolve shadow
        // shadow: '6',
        _light: {
            borderColor: 'muted.300',
            _text: {
                color: 'text.900'
            }
        },
        _dark: {
            borderColor: 'muted.700',
            _text: {
                color: 'text.50'
            }
        },
        borderWidth: 1,
        rounded: 'md',
        overflow: 'hidden'
    }); }
};
var PopoverHeader = {
    baseStyle: function () { return ({
        _web: {
            accessibilityRole: 'header'
        },
        p: '4',
        borderBottomWidth: '1',
        _text: {
            fontSize: 'md',
            fontWeight: '700',
            lineHeight: 'sm'
        },
        _light: {
            bg: 'muted.50',
            borderColor: 'muted.300',
            _text: {
                color: 'text.900'
            }
        },
        _dark: {
            bg: 'muted.800',
            borderColor: 'muted.700',
            _text: {
                color: 'text.50'
            }
        }
    }); }
};
var PopoverArrow = {
    baseStyle: function () { return ({
        _light: {
            bg: 'muted.50',
            borderColor: 'muted.300'
        },
        _dark: {
            bg: 'muted.800',
            borderColor: 'muted.700'
        }
    }); }
};
var PopoverFooter = {
    baseStyle: function () {
        return {
            p: '4',
            shadow: '6',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            flexWrap: 'wrap',
            borderTopWidth: 1,
            _light: {
                bg: 'muted.50',
                borderColor: 'muted.300'
            },
            _dark: {
                bg: 'muted.800',
                borderColor: 'muted.700'
            }
        };
    }
};

var PopoverComponentTheme = /*#__PURE__*/Object.freeze({
    __proto__: null,
    PopoverCloseButton: PopoverCloseButton,
    PopoverBody: PopoverBody,
    PopoverContent: PopoverContent,
    PopoverHeader: PopoverHeader,
    PopoverArrow: PopoverArrow,
    PopoverFooter: PopoverFooter
});

var defaultProps$d = {
    size: 'sm',
    step: 1,
    min: -Infinity,
    max: Infinity,
    defaultValue: '0',
    keepWithinRange: true,
    clampValueOnBlur: true,
    focusInputOnChange: true,
    getAriaValueText: true
};
var NumberInput = {
    defaultProps: defaultProps$d
};
//Steppers
var stepperbaseStyle = function (props) {
    return {
        bg: mode('primary.600', 'primary.200')(props),
        iconColor: mode('gray.50', 'gray.800')(props),
        _active: {},
        _disabled: {
            // iconColor: mode('gray.50', 'gray.300')(props),
            // bg: mode('blackAlpha.200', 'whiteAlpha.300')(props),
            opacity: 0.5
        }
    };
};
var NumberInputStepper = {
    baseStyle: stepperbaseStyle
};

var defaultProps$c = {
    placeholder: '○',
    size: 'md',
    manageFocus: true,
    space: 1
};
var sizes$7 = {
    '2xl': {
        fontSize: '2xl',
        p: 3,
        width: '56px',
        height: '56px',
        textAlign: 'center',
        borderRadius: 'lg'
    },
    'xl': {
        fontSize: 'xl',
        p: 3,
        width: '52px',
        height: '52px',
        textAlign: 'center',
        borderRadius: 'lg'
    },
    'lg': {
        fontSize: 'lg',
        p: 2,
        width: '48px',
        height: '48px',
        textAlign: 'center',
        borderRadius: 'md'
    },
    'md': {
        fontSize: 'md',
        p: 2,
        width: '40px',
        height: '40px',
        textAlign: 'center',
        borderRadius: 'md'
    },
    'sm': {
        fontSize: 'sm',
        p: 1,
        width: '30px',
        height: '30px',
        textAlign: 'center',
        borderRadius: 'md'
    },
    'xs': {
        fontSize: 'xs',
        p: 1,
        width: '24px',
        height: '24px',
        textAlign: 'center',
        borderRadius: 'md'
    }
};
var PinInput = {
    sizes: sizes$7,
    defaultProps: defaultProps$c
};

var baseStyle$i = function (props) {
    var primary = props.theme.colors.primary;
    var focusRing = mode({
        boxShadow: "".concat(primary[400], " 0px 0px 0px 2px")
    }, {
        boxShadow: "".concat(primary[500], " 0px 0px 0px 2px")
    })(props);
    return {
        _focusVisible: {
            _web: { style: __assign(__assign({}, focusRing), { outlineWidth: 0 }) }
        }
    };
};
var Pressable = {
    baseStyle: baseStyle$i,
    defaultProps: {}
};

var defaultProps$b = {
    colorScheme: 'primary',
    size: 'sm',
    rounded: 'full',
    min: 0,
    max: 100,
    value: 0,
    isIndeterminate: false
};
function baseStyle$h(props) {
    var c = props.colorScheme;
    return {
        overflow: 'hidden',
        _filledTrack: {
            shadow: 0,
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            rounded: 'full',
            _text: {
                color: 'white',
                fontWeight: 'bold'
            }
        },
        _light: {
            bg: 'muted.200',
            _filledTrack: {
                bg: "".concat(c, ".600")
            }
        },
        _dark: {
            bg: 'muted.700',
            _filledTrack: {
                bg: "".concat(c, ".400")
            }
        }
    };
}
var sizes$6 = {
    'xs': {
        height: 1
    },
    'sm': {
        height: 2
    },
    'md': {
        height: 3
    },
    'lg': {
        height: 4
    },
    'xl': {
        height: 5
    },
    '2xl': {
        height: 6
    }
};
var Progress = {
    baseStyle: baseStyle$h,
    defaultProps: defaultProps$b,
    sizes: sizes$6
};

var baseStyle$g = function (props) {
    var c = props.colorScheme, theme = props.theme;
    var colors = theme.colors;
    return {
        borderWidth: 2,
        borderRadius: 'full',
        p: 1,
        _light: {
            bg: 'muted.50',
            borderColor: 'muted.400',
            _checked: {
                borderColor: "".concat(c, ".600"),
                _icon: {
                    color: "".concat(c, ".600")
                },
                _hover: {
                    borderColor: "".concat(c, ".700"),
                    _icon: { color: "".concat(c, ".700") },
                    _disabled: {
                        borderColor: "".concat(c, ".600"),
                        _icon: {
                            color: "".concat(c, ".600")
                        }
                    }
                },
                _pressed: {
                    borderColor: "".concat(c, ".800"),
                    _icon: { color: "".concat(c, ".800") }
                }
            },
            _hover: {
                borderColor: 'muted.500',
                _disabled: {
                    borderColor: 'muted.400'
                }
            },
            _pressed: {
                borderColor: 'muted.600'
            },
            _invalid: {
                borderColor: 'error.600'
            }
        },
        _dark: {
            bg: 'muted.900',
            borderColor: 'muted.500',
            _checked: {
                borderColor: "".concat(c, ".500"),
                _icon: {
                    color: "".concat(c, ".500")
                },
                _hover: {
                    borderColor: "".concat(c, ".400"),
                    _icon: { color: "".concat(c, ".400") },
                    _disabled: {
                        borderColor: "".concat(c, ".500"),
                        _icon: {
                            color: "".concat(c, ".500")
                        }
                    }
                },
                _pressed: {
                    borderColor: "".concat(c, ".300"),
                    _icon: { color: "".concat(c, ".300") }
                }
            },
            _hover: {
                borderColor: 'muted.400',
                _disabled: {
                    borderColor: 'muted.500'
                }
            },
            _pressed: {
                borderColor: 'muted.300'
            },
            _invalid: {
                borderColor: 'error.500'
            }
        },
        _stack: {
            direction: 'row',
            alignItems: 'center',
            space: 2,
            _web: {
                cursor: props.isDisabled ? 'not-allowed' : 'pointer'
            }
        },
        _disabled: {
            opacity: '0.6',
            _icon: {
                bg: 'transparent'
            },
            _stack: {
                opacity: '0.6'
            }
        },
        _focusVisible: {
            _web: {
                style: {
                    outlineWidth: '2px',
                    outlineColor: colors[c][400],
                    outlineStyle: 'solid'
                }
            }
        }
    };
};
var sizes$5 = {
    lg: {
        _icon: { size: 4 },
        _text: { fontSize: 'lg' }
    },
    md: {
        _icon: { size: 3 },
        _text: { fontSize: 'md' }
    },
    sm: {
        _icon: { size: 2 },
        _text: { fontSize: 'sm' }
    }
};
var defaultProps$a = {
    defaultIsChecked: false,
    size: 'md',
    colorScheme: 'primary'
};
var Radio = {
    baseStyle: baseStyle$g,
    sizes: sizes$5,
    defaultProps: defaultProps$a
};

var baseStyle$f = function () {
    return {
        alignItems: 'flex-start'
    };
};
var RadioGroup = {
    baseStyle: baseStyle$f
};

// Skeleton
var Skeleton = {
    baseStyle: function (props) {
        return {
            startColor: mode('muted.200', 'muted.600')(props),
            endColor: 'transparent',
            overflow: 'hidden',
            fadeDuration: 0.1,
            speed: 1.0,
            h: '10',
            w: '100%'
        };
    }
};
// SkeletonText
var SkeletonText = {
    baseStyle: function (props) {
        return {
            startColor: mode('muted.200', 'muted.600')(props),
            endColor: 'transparent',
            fadeDuration: 0.1,
            w: '100%',
            speed: 1.0,
            flexDirection: 'column',
            _line: {
                h: 3,
                rounded: 'full'
            }
        };
    },
    defaultProps: {
        lines: 3,
        space: 3
    }
};

var Spinner = {
    baseStyle: {
        color: 'primary.600'
    },
    sizes: {
        sm: 'small',
        lg: 'large'
    },
    defaultProps: {
        size: 'sm'
    }
};

var defaultProps$9 = {
    _statLabel: {
        fontSize: 'xl'
    },
    _statNumber: {
        fontSize: '4xl',
        fontWeight: 'bold',
        my: 2
    },
    _statHelpText: {
        _text: {
            color: 'gray.500',
            fontSize: 'xl'
        },
        flexDirection: 'row',
        alignItems: 'center'
    },
    _statGroup: {
        flexWrap: 'wrap',
        space: 4,
        justifyContent: 'space-between'
    }
};
var Stat = {
    defaultProps: defaultProps$9
};

var baseStyle$e = function (props) {
    var c = props.colorScheme;
    return {
        _disabled: {
            opacity: 0.4
        },
        _invalid: {
            borderWidth: 2,
            borderRadius: 12
        },
        onThumbColor: 'muted.50',
        offThumbColor: 'muted.50',
        _light: {
            offTrackColor: 'muted.300',
            onTrackColor: "".concat(c, ".600"),
            _hover: {
                offTrackColor: 'muted.400',
                onTrackColor: "".concat(c, ".700")
            },
            _invalid: {
                borderColor: 'error.600'
            }
        },
        _dark: {
            offTrackColor: 'muted.700',
            onTrackColor: "".concat(c, ".500"),
            _hover: {
                offTrackColor: 'muted.600',
                onTrackColor: "".concat(c, ".400")
            },
            _invalid: {
                borderColor: 'error.500'
            }
        }
    };
};
var sizes$4 = {
    sm: {
        style: {
            transform: [{ scale: 0.75 }]
        }
    },
    md: {},
    lg: {
        style: {
            transform: [{ scale: 1.25 }]
        },
        margin: 1
    }
};
var defaultProps$8 = {
    size: 'md',
    colorScheme: 'primary'
};
var Switch = {
    baseStyle: baseStyle$e,
    sizes: sizes$4,
    defaultProps: defaultProps$8
};

function baseStyle$d(props) {
    var activeColor = getColorFormColorScheme(props);
    return {
        activeTabStyle: {
            justifyContent: 'center',
            alignItems: 'center',
            mb: '-2px',
            flexDirection: 'row',
            _text: { fontSize: 'sm', fontWeight: 'bold' }
        },
        inactiveTabStyle: {
            justifyContent: 'center',
            alignItems: 'center',
            mb: '-2px',
            flexDirection: 'row',
            _text: {
                color: mode('gray.500', 'gray.400')(props),
                fontSize: 'sm',
                fontWeight: 'bold'
            }
        },
        activeIconProps: {
            color: activeColor,
            name: 'home',
            mx: 2
        },
        inactiveIconProps: {
            name: 'home',
            mx: 2
        }
    };
}
var sizes$3 = {
    sm: {
        activeTabStyle: {
            _text: { fontSize: 'sm' },
            py: 2,
            px: 3
        },
        inactiveTabStyle: {
            _text: { fontSize: 'sm' },
            py: 2,
            px: 3
        }
    },
    md: {
        activeTabStyle: {
            _text: { fontSize: 'md' },
            py: 3,
            px: 4
        },
        inactiveTabStyle: {
            _text: { fontSize: 'md' },
            py: 3,
            px: 4
        }
    },
    lg: {
        activeTabStyle: {
            _text: { fontSize: 'lg' },
            py: 4,
            px: 5
        },
        inactiveTabStyle: {
            _text: { fontSize: 'lg' },
            py: 4,
            px: 5
        }
    }
};
function variantOutline(props) {
    var activeColor = getColorFormColorScheme(props);
    var colorScheme = props.colorScheme, status = props.status;
    colorScheme = getColorScheme(props, colorScheme !== 'primary' ? colorScheme : status);
    return {
        activeTabStyle: {
            borderColor: activeColor,
            _text: {
                color: mode("".concat(colorScheme, ".600"), "".concat(colorScheme, ".200"))(props)
            },
            _hover: {
                bg: mode("".concat(colorScheme, ".50"), "".concat(colorScheme, ".800"))(props)
            },
            borderBottomWidth: 2
        },
        inactiveTabStyle: {
            borderColor: 'transparent',
            borderBottomWidth: 2,
            _hover: {
                bg: mode("".concat(colorScheme, ".50"), "".concat(colorScheme, ".800"))(props)
            }
        },
        tabBarStyle: {
            borderBottomWidth: 2,
            borderColor: mode('muted.200', 'muted.500')(props)
        }
    };
}
function variantFilled(props) {
    var activeColor = getColorFormColorScheme(props);
    var colorScheme = props.colorScheme, status = props.status;
    colorScheme = getColorScheme(props, colorScheme !== 'primary' ? colorScheme : status);
    return {
        activeTabStyle: {
            borderColor: activeColor,
            _text: { color: mode("".concat(colorScheme, ".600"), "".concat(colorScheme, ".200"))(props) },
            _hover: {
                bg: mode("".concat(colorScheme, ".50"), "".concat(colorScheme, ".800"))(props)
            },
            borderBottomWidth: 2,
            bg: mode("".concat(colorScheme, ".100"), "".concat(colorScheme, ".700"))(props)
        },
        inactiveTabStyle: {
            borderColor: 'transparent',
            borderBottomWidth: 2,
            _hover: {
                bg: mode("".concat(colorScheme, ".50"), "".concat(colorScheme, ".800"))(props)
            }
        },
        tabBarStyle: {
            borderBottomWidth: 2,
            borderColor: mode('muted.200', 'muted.500')(props)
        }
    };
}
// function variantEnclosed(props: Record<string, any>) {
//   const activeColor = getColorFormColorScheme(props);
//   return {
//     activeTabStyle: {
//       borderTopWidth: 2,
//       borderLeftWidth: 2,
//       borderRightWidth: 2,
//       borderColor: activeColor,
//     },
//     inactiveTabStyle: {
//       borderColor: 'muted.200',
//       borderBottomWidth: 2,
//     },
//     tabBarStyle: {},
//   };
// }
function variantFilledOutline(props) {
    var activeColor = getColorFormColorScheme(props);
    var colorScheme = props.colorScheme, status = props.status;
    colorScheme = getColorScheme(props, colorScheme !== 'primary' ? colorScheme : status);
    return {
        activeTabStyle: {
            borderColor: activeColor,
            _text: { color: mode("".concat(colorScheme, ".600"), "".concat(colorScheme, ".200"))(props) },
            _hover: {
                bg: mode("".concat(colorScheme, ".50"), "".concat(colorScheme, ".800"))(props)
            },
            borderBottomWidth: 2
        },
        inactiveTabStyle: {
            borderColor: 'transparent',
            borderBottomWidth: 2,
            _hover: {
                bg: mode("".concat(colorScheme, ".50"), "".concat(colorScheme, ".800"))(props)
            }
        },
        tabBarStyle: {
            borderBottomWidth: 2,
            borderColor: mode('muted.200', 'muted.500')(props),
            bg: mode("".concat(colorScheme, ".100"), "".concat(colorScheme, ".700"))(props)
        }
    };
}
// function varientSoftRounded(props: Record<string, any>) {
//   const activeColor = getColorFormColorScheme(props);
//   return {
//     activeTabStyle: {
//       borderRadius: 'full',
//       bg: transparentize(activeColor, 0.7)(props.theme),
//       color: 'white',
//     },
//     inactiveTabStyle: {},
//     tabBarStyle: {},
//   };
// }
// function varientSolidRounded(props: Record<string, any>) {
//   const activeColor = getColorFormColorScheme(props);
//   return {
//     activeTabStyle: {
//       borderRadius: 'full',
//       bg: activeColor,
//       color: 'white',
//     },
//     inactiveTabStyle: {},
//     tabBarStyle: {},
//   };
// }
// function varientSolidBox(props: Record<string, any>) {
//   const activeColor = getColorFormColorScheme(props);
//   return {
//     activeTabStyle: {
//       bg: activeColor,
//       color: 'white',
//     },
//     inactiveTabStyle: {},
//     tabBarStyle: {},
//   };
// }
var variants$2 = {
    'outline': variantOutline,
    'filled': variantFilled,
    'filled-outline': variantFilledOutline
};
var defaultProps$7 = {
    size: 'md',
    variant: 'outline',
    colorScheme: 'primary'
};
var Tabs = {
    baseStyle: baseStyle$d,
    variants: variants$2,
    sizes: sizes$3,
    defaultProps: defaultProps$7
};

var variants$1 = Badge.variants;
var baseStyle$c = {
    _text: {
        fontWeight: 'medium'
    },
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    display: 'flex'
};
var sizes$2 = {
    sm: {
        minH: 5,
        minW: 5,
        _text: {
            fontSize: 'xs'
        },
        p: 1,
        borderRadius: 'sm'
    },
    md: {
        minH: 6,
        minW: 6,
        _text: {
            fontSize: 'sm'
        },
        borderRadius: 'md',
        p: 2
    },
    lg: {
        minH: 8,
        minW: 8,
        _text: {
            fontSize: 'md'
        },
        borderRadius: 'md',
        p: 3
    }
};
var defaultProps$6 = {
    size: 'md',
    variant: 'subtle',
    colorScheme: 'primary'
};
var Tag = {
    variants: variants$1,
    baseStyle: baseStyle$c,
    sizes: sizes$2,
    defaultProps: defaultProps$6
};

var baseStyle$b = {
    _light: {
        color: 'text.900'
    },
    _dark: {
        color: 'text.50'
    },
    fontWeight: '400',
    fontFamily: 'body',
    fontStyle: 'normal',
    fontSize: 'sm',
    letterSpacing: 'md',
    lineHeight: 'lg'
};
var defaultProps$5 = {};
var Text = { baseStyle: baseStyle$b, defaultProps: defaultProps$5 };

var baseStyle$a = function (props) {
    var colorScheme = getColorScheme(props);
    return {
        bg: mode("".concat(colorScheme, ".500"), "".concat(colorScheme, ".300"))(props),
        px: 2
    };
};
var defaultProps$4 = {
    colorScheme: 'primary'
};
var AppBar = {
    baseStyle: baseStyle$a,
    defaultProps: defaultProps$4
};

var baseStyle$9 = {
    multiline: true,
    p: '2',
    textAlignVertical: 'top',
    h: '20'
};
var TextArea = {
    baseStyle: baseStyle$9,
    defaultProps: {
        size: 'sm',
        variant: 'outline'
    }
};

// TextField
var baseStyle$8 = function (props) {
    return {
        _errorMessageProps: {
            mt: 1,
            ml: 3,
            fontSize: 'xs',
            color: 'error.400'
        },
        _helperTextProps: {
            mt: 1,
            ml: 3,
            fontSize: 'xs',
            color: mode('muted.400', 'muted.500')(props)
        }
    };
};
var TextField = {
    baseStyle: baseStyle$8,
    defaultProps: {
        component: 'input'
    }
};

var baseStyle$7 = function (props) {
    // NOTE: Internal pseudo props like _stack, _overlay nad _presenceTransition can only be update by the theme.
    return {
        bg: mode("muted.700", "muted.600")(props),
        p: '2',
        rounded: 'sm',
        shadow: 6,
        // The stack in which toast are being rendered
        _stack: {
            margin: 'auto',
            position: 'absolute',
            space: 2,
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'box-none',
            _web: { position: 'fixed' }
        },
        _overlay: {},
        _presenceTransition: {
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0,
                scale: 0.85
            }
        },
        _title: {
            color: 'text.50',
            fontWeight: 700
        },
        _description: {
            color: 'text.50',
            fontWeight: 400
        }
    };
};
var Toast = {
    baseStyle: baseStyle$7,
    defaultProps: {}
};

//Fade
// const fadeDefaultProps = {
//   entryDuration: 500,
//   exitDuration: 500,
// };
var fadeBaseStyle = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 500 } },
    exit: { opacity: 0, transition: { duration: 500 } }
};
var Fade = {
    baseStyle: fadeBaseStyle
};
//ScaleFade
//Can be commented if not used anywhere else
// const scaleFadeDefaultProps = {
//   duration: 500,
//   initialScale: 0.9,
// };
var scaleBaseStyle = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1, transition: 500 },
    exit: { opacity: 0, scale: 0.9, transition: 500 }
};
var ScaleFade = {
    baseStyle: scaleBaseStyle
};
//Slide
var slideDefaultProps = {
    duration: 500,
    placement: 'bottom',
    overlay: true,
    _overlay: { isOpen: true }
};
var Slide = {
    baseStyle: {
        h: '100%',
        pointerEvents: 'box-none',
        _overlay: { style: { overflow: 'hidden' } }
    },
    defaultProps: slideDefaultProps
};
//SlideFade
var slideFadeDefaultProps = {
    duration: 500,
    offsetX: 10,
    offsetY: 10
};
var SlideFade = {
    defaultProps: slideFadeDefaultProps
};

// List
var List = {
    baseStyle: function (props) {
        return {
            py: 2,
            borderWidth: 1,
            borderColor: 'gray.300',
            _hover: { bg: mode('primary.100', 'primary.700')(props) }
        };
    }
};
// ListItem
var ListItem = {
    baseStyle: {
        // borderTopWidth: 1,
        py: 2,
        borderColor: 'gray.300'
    },
    defaultProps: {
        start: 1
    }
};
// ListIcon
var ListIcon = {
    baseStyle: {
        mr: 8,
        size: 'md'
    }
};

var typeaheadSearchItemBaseStyle = function (props) {
    return {
        backgroundColor: mode('gray.100', 'gray.600')(props),
        _focus: {
            backgroundColor: mode('primary.300', 'primary.700')(props)
        },
        _disabled: {
            backgroundColor: 'gray.200'
        }
    };
};
var TypeAheadSearchItem = {
    baseStyle: typeaheadSearchItemBaseStyle
};

// Wrap
var Wrap = {};

var Flex = {
    baseStyle: {
        display: 'flex',
        flexDirection: 'column'
    }
};
var Spacer = {
    baseStyle: {
        flexGrow: 1
    }
};

var baseStyle$6 = {};
var defaultProps$3 = {};
// sizes in stack means the height or width of the spacer elements that get's added between the children, in other
// words it maps to space prop that user passes.
var sizes$1 = {
    'gutter': 0,
    '2xs': 1,
    'xs': 2,
    'sm': 3,
    'md': 4,
    'lg': 6,
    'xl': 7,
    '2xl': 8
};
var Stack = {
    baseStyle: baseStyle$6,
    defaultProps: defaultProps$3,
    sizes: sizes$1
};

var sizes = {
    'xs': {
        height: 10,
        width: 10
    },
    'sm': {
        height: 12,
        width: 12
    },
    'md': {
        height: 16,
        width: 16
    },
    'lg': {
        height: 24,
        width: 24
    },
    'xl': {
        height: 32,
        width: 32
    },
    '2xl': {
        height: 40,
        width: 40
    }
};
var baseStyle$5 = {
    alignItems: 'center',
    justifyContent: 'center'
};
var Square = {
    baseStyle: baseStyle$5,
    sizes: sizes
};

var baseStyle$4 = {};
var defaultProps$2 = {};
var View = {
    baseStyle: baseStyle$4,
    defaultProps: defaultProps$2
};

var baseStyle$3 = {};
var defaultProps$1 = {};
var ZStack = {
    baseStyle: baseStyle$3,
    defaultProps: defaultProps$1
};

var placementProps = {
    'top-right': { top: 4, right: 4, position: 'absolute' },
    'top-left': { top: 4, left: 4, position: 'absolute' },
    'bottom-right': { bottom: 4, right: 4, position: 'absolute' },
    'bottom-left': { bottom: 4, left: 4, position: 'absolute' }
};
var baseStyle$2 = {
    shadow: 7,
    rounded: 'full',
    zIndex: 20,
    placementProps: placementProps,
    px: 4,
    py: 4
};
var defaultProps = {
    renderInPortal: true,
    variant: 'solid',
    colorScheme: 'primary',
    placement: 'bottom-right'
};
var FAB = { baseStyle: baseStyle$2, defaultProps: defaultProps };

var SliderTrack = {
    baseStyle: function () {
        return {
            borderRadius: 'lg',
            overflow: 'hidden',
            _pressable: {
                alignItems: 'center',
                justifyContent: 'center'
            },
            _light: {
                bg: 'muted.200'
            },
            _dark: {
                bg: 'muted.700'
            }
        };
    },
    variants: {
        horizontal: {
            px: '3',
            width: '100%',
            height: 1,
            _pressable: {
                width: '100%'
            }
        },
        vertical: {
            py: '3',
            height: '100%',
            width: 1,
            _pressable: {
                height: '100%'
            }
        }
    }
};
var SliderThumb = {
    baseStyle: function (props) {
        var colorScheme = props.colorScheme;
        var colors = props.theme.colors;
        return {
            borderRadius: 'full',
            zIndex: 999,
            alignItems: 'center',
            justifyContent: 'center',
            scaleOnPressed: 1,
            _interactionBox: {
                position: 'absolute',
                borderRadius: 'full',
                zIndex: -1
            },
            _stack: {
                direction: 'row',
                alignItems: 'center',
                justifyContent: 'center'
            },
            _light: {
                bg: "".concat(colorScheme, ".600"),
                _hover: {
                    _web: {
                        outlineWidth: '4px',
                        outlineColor: colors[colorScheme][300],
                        outlineStyle: 'solid'
                    }
                },
                _focus: {
                    _web: {
                        outlineWidth: '2px',
                        outlineColor: colors.primary[400],
                        outlineStyle: 'solid'
                    }
                },
                _pressed: {
                    _interactionBox: {
                        borderWidth: '8',
                        borderColor: "".concat(colorScheme, ".300")
                    }
                }
            },
            _dark: {
                bg: "".concat(colorScheme, ".500"),
                _hover: {
                    _web: {
                        outlineWidth: '4px',
                        outlineColor: colors[colorScheme][800],
                        outlineStyle: 'solid'
                    }
                },
                _focus: {
                    _web: {
                        outlineWidth: '2px',
                        outlineColor: colors.primary[400],
                        outlineStyle: 'solid'
                    }
                },
                _pressed: {
                    _interactionBox: {
                        borderWidth: '8',
                        borderColor: "".concat(colorScheme, ".800")
                    }
                }
            },
            // shadow: 6,
            _web: {
                cursor: 'pointer'
            }
        };
    },
    defaultProps: {
        colorScheme: 'primary'
    },
    sizes: {
        lg: {
            _interactionBox: '3'
        },
        md: {
            _interactionBox: '2'
        },
        sm: {
            _interactionBox: '2.5'
        }
    }
};
var SliderFilledTrack = {
    baseStyle: function (_a) {
        var colorScheme = _a.colorScheme;
        return {
            _light: {
                bg: "".concat(colorScheme, ".600")
            },
            _dark: {
                bg: "".concat(colorScheme, ".500")
            }
        };
    },
    defaultProps: {
        colorScheme: 'primary'
    },
    variants: {
        vertical: {
            // height: '100%',
            bottom: 0,
            _reversed: {
                top: 0,
                bottom: undefined
            }
        },
        horizontal: {
            // height: `4px`,
            left: 0,
            _reversed: {
                right: 0,
                left: undefined
            }
        }
    }
};
var sliderSizes = {
    lg: { thumbSize: 6, sliderTrackHeight: 6, _interactionBox: { p: '3' } },
    md: { thumbSize: 5, sliderTrackHeight: 5, _interactionBox: { p: '2.5' } },
    sm: { thumbSize: 4, sliderTrackHeight: 4, _interactionBox: { p: '2' } }
};
var variants = {
    vertical: {
        height: '100%'
    },
    horizontal: {
        width: '100%'
    }
};
var Slider = {
    baseStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        _disabled: {
            opacity: 0.4,
            _web: {
                cursor: 'not-allowed'
            }
        }
    },
    defaultProps: {
        size: 'sm',
        variant: 'horizontal',
        colorScheme: 'primary'
    },
    sizes: sliderSizes,
    variants: variants
};

var baseStyle$1 = function () {
    return {
        // roundedLeft: '4',
        p: '2',
        borderWidth: '1',
        borderRightWidth: '0',
        borderLeftRadius: 'sm',
        _text: {
            fontWeight: 400
        },
        alignItems: 'center',
        justifyContent: 'center',
        _light: {
            bg: 'muted.50',
            borderColor: 'muted.300',
            _text: {
                color: 'text.900'
            }
        },
        _dark: {
            bg: 'muted.800',
            borderColor: 'muted.700',
            _text: {
                color: 'text.50'
            }
        }
    };
};
var InputLeftAddon = { baseStyle: baseStyle$1 };

var baseStyle = function () {
    return {
        // roundedRight: '4',
        p: '2',
        borderWidth: '1',
        borderLeftWidth: '0',
        borderRightRadius: 'sm',
        _text: {
            fontWeight: 400
        },
        alignItems: 'center',
        justifyContent: 'center',
        _light: {
            bg: 'muted.50',
            borderColor: 'muted.300',
            _text: {
                color: 'text.900'
            }
        },
        _dark: {
            bg: 'muted.800',
            borderColor: 'muted.700',
            _text: {
                color: 'text.50'
            }
        }
    };
};
var InputRightAddon = { baseStyle: baseStyle };

var components = __assign(__assign({ FlatList: FlatList, KeyboardAvoidingView: KeyboardAvoidingView, ScrollView: ScrollView, SectionList: SectionList, StatusBar: StatusBar, Accordion: Accordion, AccordionItem: AccordionItem, AccordionIcon: AccordionIcon, AccordionSummary: AccordionSummary, AccordionDetails: AccordionDetails, Actionsheet: Actionsheet, ActionsheetContent: ActionsheetContent, 
    // ActionsheetHeader,
    // ActionsheetFooter,
    ActionsheetItem: ActionsheetItem, Alert: Alert, 
    // AlertDescription,
    // AlertTitle,
    AlertIcon: AlertIcon, AspectRatio: AspectRatio, Avatar: Avatar, AvatarBadge: AvatarBadge, AvatarGroup: AvatarGroup, Badge: Badge, Box: Box, Breadcrumb: Breadcrumb, BreadcrumbText: BreadcrumbText, BreadcrumbIcon: BreadcrumbIcon, Button: Button, ButtonGroup: ButtonGroup, Card: Card, Center: Center, Circle: Circle, Checkbox: Checkbox, CheckboxGroup: CheckboxGroup, CircularProgress: CircularProgress, Code: Code, Container: Container, Divider: Divider, Fade: Fade, FAB: FAB, Flex: Flex, Spacer: Spacer, FormControl: FormControl, FormControlLabel: FormControlLabel, FormControlHelperText: FormControlHelperText, FormControlErrorMessage: FormControlErrorMessage, Heading: Heading, HStack: HStack, VStack: VStack, Icon: Icon, IconButton: IconButton, Image: Image, Input: Input, InputLeftAddon: InputLeftAddon, InputRightAddon: InputRightAddon, Kbd: Kbd, Link: Link, List: List, ListItem: ListItem, ListIcon: ListIcon, Menu: Menu, MenuGroup: MenuGroup, MenuItem: MenuItem, Modal: Modal, ModalContent: ModalContent, ModalHeader: ModalHeader, ModalBody: ModalBody, ModalFooter: ModalFooter, ModalOverlay: ModalOverlay, ModalCloseButton: ModalCloseButton, AlertDialog: AlertDialog, AlertDialogContent: AlertDialogContent, AlertDialogHeader: AlertDialogHeader, AlertDialogBody: AlertDialogBody, AlertDialogFooter: AlertDialogFooter, AlertDialogOverlay: AlertDialogOverlay, AlertDialogCloseButton: AlertDialogCloseButton, NumberInput: NumberInput, NumberInputStepper: NumberInputStepper, PinInput: PinInput, Pressable: Pressable }, PopoverComponentTheme), { Progress: Progress, Radio: Radio, RadioGroup: RadioGroup, ScaleFade: ScaleFade, Select: Select, SelectItem: SelectItem, SimpleGrid: SimpleGrid, Skeleton: Skeleton, SkeletonText: SkeletonText, SliderFilledTrack: SliderFilledTrack, SliderThumb: SliderThumb, SliderTrack: SliderTrack, Slider: Slider, Slide: Slide, SlideFade: SlideFade, Spinner: Spinner, Square: Square, Stack: Stack, Stat: Stat, Switch: Switch, Tabs: Tabs, Tag: Tag, Text: Text, AppBar: AppBar, TextArea: TextArea, TextField: TextField, Toast: Toast, TypeAheadSearchItem: TypeAheadSearchItem, View: View, Wrap: Wrap, ZStack: ZStack, Tooltip: Tooltip });

var config = {
    useSystemColorMode: false,
    initialColorMode: 'light',
    accessibleColors: false
};
var theme = __assign(__assign({}, theme$1), { components: components, config: config });

// Adding Map for storing the props and style for the styled component
exports.resolvedStyledMap = {};
var PSEUDO_PROP_COMPONENT_MAP = {
    _spinner: 'Spinner',
    _stack: 'Stack',
    _text: 'Text',
    _icon: 'Icon',
    _checkbox: 'Checkbox',
    _radio: 'Radio',
    _pressable: 'Pressable',
    _slide: 'Slide',
    _fade: 'Fade',
    _backdropFade: 'BackdropFace'
};
var COLOR_SCHEME_MAP = {
    Button: true,
    ButtonGroup: true,
    IconButton: true,
    Checkbox: true,
    Radio: true,
    Alert: true,
    Badge: true,
    CircularProgress: true,
    Fab: true,
    Modal: true,
    Progress: true,
    Switch: true,
    Tag: true,
    Slider: true,
    SliderThumb: true,
    // SliderTrack: true,
    SliderFilledTrack: true
};
var init = function (inputResolvedStyledMap) {
    if (inputResolvedStyledMap) {
        exports.resolvedStyledMap = inputResolvedStyledMap;
    }
    if (process.env.NODE_ENV === 'development') {
        //@ts-ignore
        window['resolvedStyledMap'] = exports.resolvedStyledMap;
        //@ts-ignore
    }
};
var getResolvedStyleMap = function (providerId, key) {
    return exports.resolvedStyledMap[providerId][key];
};
var setResolvedStyleMap = function (providerId, key, value, colorMode) {
    var _a;
    if (!exports.resolvedStyledMap[providerId]) {
        exports.resolvedStyledMap[providerId] = {};
    }
    var styledMap = exports.resolvedStyledMap[providerId][key];
    if (!styledMap) {
        exports.resolvedStyledMap[providerId][key] = (_a = {},
            _a[colorMode] = [value],
            _a);
    }
    else {
        if (!styledMap[colorMode]) {
            styledMap[colorMode] = [];
        }
        styledMap[colorMode].push(value);
    }
};
var getThemeObject = function (providerId, componentName, colorMode, state) {
    var _a;
    var styleObj = (_a = exports.resolvedStyledMap === null || exports.resolvedStyledMap === void 0 ? void 0 : exports.resolvedStyledMap[providerId]) === null || _a === void 0 ? void 0 : _a[componentName];
    if (!styleObj || !styleObj[colorMode]) {
        return {};
    }
    // Theme style
    var styleSheet = styleObj[colorMode];
    // state style
    var stateStyles = getPseudoStateStyles(providerId, componentName, state);
    if (componentName === 'Checkbox' && state.isInvalid && state.isHovered) ;
    lodash.forEach(stateStyles, function (stateStyleObj) {
        if (stateStyleObj[colorMode]) {
            styleSheet = styleSheet.concat(stateStyleObj[colorMode]);
        }
    });
    var unResolvedPropsArray = lodash.map(styleSheet, 'unResolvedProps');
    var unResolvedProps = {};
    for (var _i = 0, unResolvedPropsArray_1 = unResolvedPropsArray; _i < unResolvedPropsArray_1.length; _i++) {
        var props = unResolvedPropsArray_1[_i];
        // unResolvedProps = { ...unResolvedProps, ...props };
        unResolvedProps = lodash.merge({}, unResolvedProps, props);
    }
    var restDefaultPropsArray = lodash.map(styleSheet, 'restDefaultProps');
    var restDefaultProps = {};
    for (var _b = 0, restDefaultPropsArray_1 = restDefaultPropsArray; _b < restDefaultPropsArray_1.length; _b++) {
        var props = restDefaultPropsArray_1[_b];
        restDefaultProps = __assign(__assign({}, restDefaultProps), props);
    }
    var styleFromPropsArray = lodash.map(styleSheet, 'styleFromProps');
    var styleFromProps = {};
    for (var _c = 0, styleFromPropsArray_1 = styleFromPropsArray; _c < styleFromPropsArray_1.length; _c++) {
        var props = styleFromPropsArray_1[_c];
        styleFromProps = __assign(__assign({}, styleFromProps), props);
    }
    var internalPseudoPropsArray = lodash.map(styleSheet, 'internalPseudoProps');
    var internalPseudoProps = {};
    for (var _d = 0, internalPseudoPropsArray_1 = internalPseudoPropsArray; _d < internalPseudoPropsArray_1.length; _d++) {
        var props = internalPseudoPropsArray_1[_d];
        internalPseudoProps = __assign(__assign({}, internalPseudoProps), props);
    }
    return {
        style: lodash.map(styleSheet, 'style'),
        unResolvedProps: unResolvedProps,
        styleFromProps: styleFromProps,
        restDefaultProps: restDefaultProps,
        internalPseudoProps: internalPseudoProps
    };
};
var getComponentNameKeyFromProps = function (componentName, _a) {
    var _b = _a === void 0 ? {} : _a, variant = _b.variant, colorScheme = _b.colorScheme;
    var componentKeyName = componentName;
    // const componentTheme = lodashGet(theme, `components.${componentName}`, {});
    var colorSchemeKey = colorScheme;
    // || componentTheme.defaultProps?.colorScheme;
    var variantKey = variant;
    // || componentTheme.defaultProps?.variant;
    if (colorSchemeKey && variantKey) {
        componentKeyName = "".concat(componentName, ".").concat(colorSchemeKey, ".").concat(variantKey);
    }
    else if (variantKey) {
        componentKeyName = "".concat(componentName, ".").concat(variant);
    }
    else if (colorSchemeKey) {
        componentKeyName = "".concat(componentName, ".").concat(colorSchemeKey);
    }
    return componentKeyName;
};
// const get
var getThemeProps = function (theme, providerId, inputComponentKeyName, config, state, props) {
    if (props === void 0) { props = {}; }
    var componentNames = inputComponentKeyName.split('.');
    var rootComponentName = componentNames[0];
    var pseudoComponentKeyName = componentNames[1];
    var componentKeyName = rootComponentName;
    componentKeyName = getComponentNameKeyFromProps(rootComponentName, props);
    if (pseudoComponentKeyName) {
        componentKeyName = "".concat(componentKeyName, ".").concat(pseudoComponentKeyName);
    }
    var themeObj = getThemeObject(providerId, componentKeyName, config.colorMode, state);
    // console.log(themeObj, providerId, 'theme obje');
    if (isEmptyObj(themeObj)) {
        // console.log('hello here 1111', inputComponentKeyName);
        // updateComponentThemeMap(inputComponentKeyName, {}, config, {});
        updateComponentThemeMap(theme, providerId, inputComponentKeyName, {}, config, {
            variant: props.variant,
            colorScheme: props.colorScheme
        });
        themeObj = getThemeObject(providerId, componentKeyName, config.colorMode, state);
    }
    if (!isEmptyObj(themeObj) && props.size) {
        var componentKeyNameForSize = "".concat(rootComponentName, ".").concat(props.size);
        if (pseudoComponentKeyName) {
            componentKeyNameForSize = "".concat(componentKeyNameForSize, ".").concat(pseudoComponentKeyName);
        }
        var sizeThemeObj = getThemeObject(providerId, "".concat(componentKeyNameForSize), config.colorMode, state);
        if (isEmptyObj(sizeThemeObj)) {
            if (!pseudoComponentKeyName) {
                if (isEmptyObj(sizeThemeObj)) {
                    updateComponentThemeMap(theme, providerId, rootComponentName, {}, config, {
                        size: props.size
                    });
                    sizeThemeObj = getThemeObject(providerId, componentKeyNameForSize, config.colorMode, state);
                }
            }
        }
        var mergedThemeObj = {
            style: (sizeThemeObj === null || sizeThemeObj === void 0 ? void 0 : sizeThemeObj.style)
                ? __spreadArray(__spreadArray([], themeObj === null || themeObj === void 0 ? void 0 : themeObj.style, true), sizeThemeObj === null || sizeThemeObj === void 0 ? void 0 : sizeThemeObj.style, true) : themeObj.style,
            styleFromProps: lodash.merge({}, themeObj.styleFromProps, sizeThemeObj.styleFromProps),
            unResolvedProps: lodash.merge({}, themeObj.unResolvedProps, sizeThemeObj.unResolvedProps),
            internalPseudoProps: lodash.merge({}, themeObj.internalPseudoProps, sizeThemeObj.internalPseudoProps),
            restDefaultProps: __assign(__assign({}, themeObj.restDefaultProps), sizeThemeObj.restDefaultProps)
        };
        themeObj = mergedThemeObj;
    }
    return themeObj;
};
var getResolvedProps = function (key, colorMode) {
    var styleObj = exports.resolvedStyledMap[key];
    if (!colorMode || !styleObj) {
        return null;
    }
    return styleObj[colorMode]['styleFromProps'];
};
var isValidStateKey = function (stateKey, state) {
    // console.log(stateKey, pseudoPropStateMap[stateKey], state, 'is valid');
    try {
        //@ts-ignore
        return state[pseudoPropsMap[stateKey].respondTo];
    }
    catch (e) {
        return false;
    }
};
var isValidState = function (key, state) {
    // include only startWith("_")
    var stateKeys = key.split('.');
    var isValid = stateKeys.every(function (stateKey) {
        if (isValidStateKey(stateKey, state)) {
            return true;
        }
        return false;
    });
    // console.log(isValid, 'valid here');
    return isValid;
};
var getPriority = function (propName) {
    var propNameArray = propName.split('.');
    var maxPriority = propNameArray.reduce(function (previousValue, currentValue) {
        var _a;
        //@ts-ignore
        return Math.max(previousValue, (_a = pseudoPropsMap[currentValue]) === null || _a === void 0 ? void 0 : _a.priority);
    }, 0);
    var priority = 
    //@ts-ignore
    maxPriority + propNameArray.length / 10;
    // }
    return priority;
};
var getPseudoStateStyles = function (providerId, componentName, state) {
    var styleObj = [];
    var stateStyleArray = [];
    var componentStates = getResolvedStyleMap(providerId, componentName);
    // console.log(componentStates, '***** &&&&');
    // const currentPriority = 0;
    for (var k in componentStates) {
        var value = componentStates[k];
        // console.log(componentStates, k, componentName, 'value **&');
        //get for _hover, _checked
        if (k.startsWith('_')) {
            var priority = getPriority(k);
            stateStyleArray.push({ key: k, value: value, priority: priority });
        }
    }
    stateStyleArray.sort(function (obj1, obj2) { return obj1.priority - obj2.priority; });
    stateStyleArray.forEach(function (item) {
        if (isValidState(item.key, state)) {
            styleObj.push(item.value);
        }
    });
    return styleObj;
};
var resolveForInternalPseudoProps = function (theme, providerId, name, key, styledObj, config, mergeDefaultProps, propertyName) {
    // if (name !== 'Button') {
    //   return;
    // }
    var _a, _b, _c;
    var _d;
    if (mergeDefaultProps === void 0) { mergeDefaultProps = true; }
    for (var property in styledObj.internalPseudoProps) {
        if (PSEUDO_PROP_COMPONENT_MAP[property]) {
            //TODO: not calling again for nested state prop
            if (!propertyName) {
                updateComponentThemeMapForColorMode(theme, providerId, PSEUDO_PROP_COMPONENT_MAP[property], "".concat(key, ".").concat(PSEUDO_PROP_COMPONENT_MAP[property]), styledObj.internalPseudoProps[property], config, false, mergeDefaultProps);
            }
        }
        else {
            // const themeProps = getThemeProps(name, colorMode, {
            //   [pseudoPropStateMap[property]]: true,
            // });
            // if (property === '_hover') {
            //   console.log(
            //     // name,
            //     // property,
            //     // pseudoPropStateMap[property],
            //     themeProps,
            //     {
            //       ...themeProps.styleFromProps,
            //       ...styledObj.internalPseudoProps[property],
            //     },
            //     'theme props '
            //   );
            // }
            // console.log(name, key, 'config here');
            var styledObjNestedProp = getStyledObject(theme, name, {}, config, styledObj.internalPseudoProps[property]);
            var componentMapPath = key;
            var componentObj = getResolvedStyleMap(providerId, componentMapPath);
            if (componentObj) {
                // const stateKey = key.slice(componentMapPath.length + 1);
                //@ts-ignore
                if ((_d = pseudoPropsMap === null || pseudoPropsMap === void 0 ? void 0 : pseudoPropsMap[property]) === null || _d === void 0 ? void 0 : _d.respondTo) {
                    var stateKey = propertyName
                        ? propertyName + '.' + property
                        : property;
                    if (componentObj[stateKey]) {
                        if (!componentObj[stateKey][config.colorMode]) {
                            componentObj[stateKey][config.colorMode] = [];
                        }
                        componentObj[stateKey][config.colorMode].push(styledObjNestedProp);
                    }
                    else {
                        componentObj[stateKey] = (_a = {},
                            _a[config.colorMode] = [styledObjNestedProp],
                            _a);
                    }
                    // if (name == 'Checkbox') {
                    //   console.log(
                    //     // property,
                    //     key,
                    //     // componentObj,
                    //     // componentMapPath,
                    //     styledObjNestedProp,
                    //     'hello here 111'
                    //   );
                    // if (!isEmptyObj(styledObjNestedProp.internalPseudoProps)) {
                    resolveForInternalPseudoProps(theme, providerId, name, key, styledObjNestedProp, config, false, property);
                    // }
                    // }
                }
                else {
                    // console.log(
                    //   'hello here &&&*',
                    //   styledObj.internalPseudoProps[property]
                    // );
                    if (!propertyName) {
                        componentObj[config.colorMode][0].unResolvedProps = __assign(__assign({}, componentObj[config.colorMode][0].unResolvedProps), (_b = {}, _b[property] = styledObj.internalPseudoProps[property], _b));
                    }
                    else {
                        componentObj[propertyName][config.colorMode][0].unResolvedProps = __assign(__assign({}, componentObj[propertyName][config.colorMode][0]
                            .unResolvedProps), (_c = {}, _c[property] = styledObj.internalPseudoProps[property], _c));
                    }
                }
            }
        }
    }
};
var updateComponentThemeMapForColorMode = function (theme, providerId, name, key, inputProps, config, resolveForStatePseudoProps, mergeDefaultProps) {
    if (config === void 0) { config = {
        colorMode: 'light',
        platform: 'web'
    }; }
    if (resolveForStatePseudoProps === void 0) { resolveForStatePseudoProps = false; }
    if (mergeDefaultProps === void 0) { mergeDefaultProps = true; }
    // console.log(theme, 'theme here');
    var componentTheme = lodash.get(theme, "components.".concat(name), {});
    // let componentTheme = get(defaultTheme, `components.${name}`, {});
    // if (runtime) {
    //   componentTheme =
    // }
    // resolve for variant
    if (resolveForStatePseudoProps) {
        componentTheme = {};
    }
    var styledObj = getStyledObject(theme, name, componentTheme, config, __assign(__assign({}, inputProps), { extraProp: key }), mergeDefaultProps);
    setResolvedStyleMap(providerId, key, styledObj, config.colorMode);
    // console.log(key, styledObj, config.colorMode, '&&&&&&');
    resolveForInternalPseudoProps(theme, providerId, name, key, styledObj, config, mergeDefaultProps);
    return styledObj;
};
// export const resolveDefaultTheme = (platform?: string) => {
//   // for (const key in theme.components) {
//   //   // console.log(key, platform);
//   //   updateComponentThemeMap(key, {}, { platform });
//   // }
//   // return resolvedStyledMap;
// };
var generateBuildTimeMap = function (platform, usedComponentDetailMap) {
    if (platform === void 0) { platform = 'web'; }
    var componentsUsed = Object.keys(usedComponentDetailMap);
    for (var _i = 0, componentsUsed_1 = componentsUsed; _i < componentsUsed_1.length; _i++) {
        var componentName = componentsUsed_1[_i];
        var componentPropsArray = usedComponentDetailMap[componentName];
        for (var _a = 0, componentPropsArray_1 = componentPropsArray; _a < componentPropsArray_1.length; _a++) {
            var componentProps = componentPropsArray_1[_a];
            updateComponentThemeMap(theme, 
            // boot time provider id
            'generatedBuildTimeMap', componentName, {}, { platform: platform, colorMode: 'light' }, componentProps);
            updateComponentThemeMap(theme, 
            // boot time provider id
            'generatedBuildTimeMap', componentName, {}, { platform: platform, colorMode: 'dark' }, componentProps);
        }
    }
    // return resolvedStyledMap;
};
var updateComponentThemeMap = function (theme, providerId, name, inputProps, config, props) {
    if (config === void 0) { config = { platform: 'web', colorMode: 'light' }; }
    var platform = config.platform, colorMode = config.colorMode;
    // console.log(props, 'props here');
    // const componentTheme = get(theme, `components.${name}`, {});
    var themeObj = {};
    // if (runTimeResolution) {
    var currentColorScheme = props === null || props === void 0 ? void 0 : props.colorScheme; // || componentTheme?.defaultProps?.colorScheme;
    var currentVariant = props === null || props === void 0 ? void 0 : props.variant; // || componentTheme?.defaultProps?.variant;
    var currentSize = props === null || props === void 0 ? void 0 : props.size; // || componentTheme?.defaultProps?.size;
    if (currentVariant && currentColorScheme) {
        themeObj = updateComponentThemeMapForColorMode(theme, providerId, name, "".concat(name, ".").concat(currentColorScheme, ".").concat(currentVariant), { variant: currentVariant, colorScheme: currentColorScheme }, {
            colorMode: colorMode,
            platform: platform
        });
    }
    else if (currentColorScheme) {
        // if (name === 'SliderThumb') {
        //   console.log(props, 'hello slider ');
        // }
        themeObj = updateComponentThemeMapForColorMode(theme, providerId, name, "".concat(name, ".").concat(currentColorScheme), { colorScheme: currentColorScheme }, {
            colorMode: colorMode,
            platform: platform
        });
    }
    else if (currentVariant) {
        themeObj = updateComponentThemeMapForColorMode(theme, providerId, name, "".concat(name, ".").concat(currentVariant), { variant: currentVariant }, {
            colorMode: colorMode,
            platform: platform
        });
    }
    else if (currentSize) {
        // console.log(name, 'name here 111', currentSize);
        // if (name == 'Button') {
        //   console.trace('hh');
        // }
        themeObj = updateComponentThemeMapForColorMode(theme, providerId, name, "".concat(name, ".").concat(currentSize), { size: currentSize }, {
            colorMode: colorMode,
            platform: platform
        }, false, false);
    }
    else {
        themeObj = updateComponentThemeMapForColorMode(theme, providerId, name, name, inputProps, {
            colorMode: colorMode,
            platform: platform
        }, false, true);
    }
    return themeObj;
};

exports.COLOR_SCHEME_MAP = COLOR_SCHEME_MAP;
exports.PSEUDO_PROP_COMPONENT_MAP = PSEUDO_PROP_COMPONENT_MAP;
exports.generateBuildTimeMap = generateBuildTimeMap;
exports.getResolvedProps = getResolvedProps;
exports.getResolvedStyleMap = getResolvedStyleMap;
exports.getThemeProps = getThemeProps;
exports.init = init;
exports.setResolvedStyleMap = setResolvedStyleMap;
exports.updateComponentThemeMap = updateComponentThemeMap;
exports.updateComponentThemeMapForColorMode = updateComponentThemeMapForColorMode;
