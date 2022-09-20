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
var simplifyProps = function (_a, flattenProps, stateProps, specificityMap, priority) {
    var _b;
    var _c;
    var props = _a.props, colormode = _a.colormode, platform = _a.platform, state = _a.state, currentSpecificity = _a.currentSpecificity, previouslyFlattenProps = _a.previouslyFlattenProps, cascadePseudoProps = _a.cascadePseudoProps;
    if (flattenProps === void 0) { flattenProps = {}; }
    if (stateProps === void 0) { stateProps = {}; }
    if (specificityMap === void 0) { specificityMap = {}; }
    var mergePsuedoProps = function (property, propertySpecity) {
        if (compareSpecificity(specificityMap[property], propertySpecity, false)) {
            // if (process.env.NODE_ENV === 'development' && props.debug) {
            //   /* eslint-disable-next-line */
            //   console.log(
            //     `%c ${property}`,
            //     'color: #818cf8;',
            //     'updated as internal prop with higher specificity'
            //   );
            // }
            specificityMap[property] = propertySpecity;
            // merging internal props (like, _text, _stack ...)
            flattenProps[property] = merge__default["default"]({}, flattenProps[property], props[property]);
        }
        else {
            // if (process.env.NODE_ENV === 'development' && props.debug) {
            //   /* eslint-disable-next-line */
            //   console.log(
            //     `%c ${property}`,
            //     'color: #818cf8;',
            //     'updated as internal prop with lower specificity'
            //   );
            // }
            flattenProps[property] = merge__default["default"]({}, props[property], flattenProps[property]);
        }
    };
    for (var property in props) {
        // NOTE: the order is important here. Keep in mind while specificity breakpoints.
        var propertySpecity = currentSpecificity
            ? __assign({}, currentSpecificity) : __assign(__assign({}, INITIAL_PROP_SPECIFICITY), (_b = {}, _b[SPECIFICITY_20] = priority, _b));
        if (
        // @ts-ignore
        state[(_c = pseudoPropsMap[property]) === null || _c === void 0 ? void 0 : _c.respondTo]) {
            // @ts-ignore
            if (shouldResolvePseudoProp({ property: property, state: state, platform: platform, colormode: colormode })) {
                // NOTE: Handling (state driven) props like _important, _web, _ios, _android, _dark, _light, _disabled, _focus, _focusVisible, _hover, _pressed, _readOnly, _invalid, .... Only when they are true.
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
                }, stateProps, stateProps, specificityMap, priority);
                // if (props.bg == 'blue.500') {
                //   console.log(flattenProps, stateProps, property, '*** #');
                // }
            }
        }
        else if (['_dark', '_light', '_web', '_ios', '_android', '_important'].includes(property)) {
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
                }, flattenProps, stateProps, specificityMap, priority);
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
    var stateProps = {};
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
    }, flattenProps, stateProps, specificityMap, priority);
    return [flattenProps, specificityMap, stateProps];
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

function isEmptyObj(obj) {
    for (var _x in obj) {
        return false;
    }
    return true;
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
var typography = {
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
var propConfig = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, color), space), layout), flexbox), border), position), typography), background), extraProps);
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
            var _c = getResponsiveStyles(query_1), newDataSet = _c.dataSet, styleFromQuery = _c.styleFromQuery;
            dataSet = __assign(__assign({}, dataSet), newDataSet);
            styleFromProps = __assign(__assign({}, styleFromProps), styleFromQuery);
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
    return {
        //TODO: build-time
        styleSheet: {},
        styleFromProps: styleFromProps,
        restDefaultProps: restDefaultProps,
        dataSet: dataSet,
        unResolvedProps: unResolvedProps
    };
};

var resolvePropsToStyle = function (styledSystemProps, propStyle, theme, platform, debug, currentBreakpoint, strictMode, getResponsiveStyles, INTERNAL_themeStyle, stateProps) {
    var _a;
    var flattenInternalThemeProps = INTERNAL_themeStyle;
    var fontSize;
    if (Array.isArray(flattenInternalThemeProps)) {
        flattenInternalThemeProps = flattenInternalThemeProps.flat();
        fontSize = (_a = flattenInternalThemeProps[0]) === null || _a === void 0 ? void 0 : _a.fontSize;
    }
    else {
        fontSize = flattenInternalThemeProps === null || flattenInternalThemeProps === void 0 ? void 0 : flattenInternalThemeProps.fontSize;
    }
    var modifiedStyledSytemProps = __assign({ fontSize: fontSize }, styledSystemProps);
    var _b = getStyleAndFilteredProps({
        styledSystemProps: modifiedStyledSytemProps,
        theme: theme,
        debug: debug,
        currentBreakpoint: currentBreakpoint,
        strictMode: strictMode,
        getResponsiveStyles: getResponsiveStyles,
        platform: platform
    }), unResolvedProps = _b.unResolvedProps, styleFromProps = _b.styleFromProps, restDefaultProps = _b.restDefaultProps, dataSet = _b.dataSet;
    var _c = getStyleAndFilteredProps({
        styledSystemProps: stateProps,
        theme: theme,
        debug: debug,
        currentBreakpoint: currentBreakpoint,
        strictMode: strictMode,
        getResponsiveStyles: getResponsiveStyles,
        platform: platform
    }), stateUnResolvedProps = _c.unResolvedProps, inlineStyleFromProps = _c.styleFromProps, stateRestDefaultProps = _c.restDefaultProps, stateDataSet = _c.dataSet;
    var mergedStyle = merge__default["default"].apply({}, [
        merge__default["default"].apply({}, INTERNAL_themeStyle),
        styleFromProps,
        merge__default["default"].apply({}, stateProps === null || stateProps === void 0 ? void 0 : stateProps.INTERNAL_themeStyle),
        inlineStyleFromProps,
        propStyle !== null && propStyle !== void 0 ? propStyle : undefined,
    ]);
    return {
        style: mergedStyle,
        styleFromProps: styleFromProps,
        unResolvedProps: merge__default["default"](unResolvedProps, stateUnResolvedProps),
        restDefaultProps: merge__default["default"](restDefaultProps, stateRestDefaultProps),
        dataSet: !isEmptyObj(stateDataSet) ? stateDataSet : dataSet
    };
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

// import { theme as defaultTheme } from '../theme';
var defaultTheme = {};
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
    if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
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
/**
 *
 * @param styleSheet StyleSheet with theme style or state style
 * @param styleSheetProperty key of styleSheet
 * @returns style with current stylsheet property
 */
var getAndMergeThemeFromStylesheet = function (styleSheet, styleSheetProperty) {
    // get style from stylsheet
    var currentPropertyStyleArray = lodash.map(styleSheet, styleSheetProperty);
    // merge styles
    var currentPropertyStyle = {};
    for (var _i = 0, currentPropertyStyleArray_1 = currentPropertyStyleArray; _i < currentPropertyStyleArray_1.length; _i++) {
        var props = currentPropertyStyleArray_1[_i];
        currentPropertyStyle = lodash.merge({}, currentPropertyStyle, props);
    }
    return currentPropertyStyle;
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
    var stateStyleSheet = [];
    lodash.forEach(stateStyles, function (stateStyleObj) {
        if (stateStyleObj[colorMode]) {
            // styleSheet = styleSheet.concat(stateStyleObj[colorMode]);
            stateStyleSheet = stateStyleSheet.concat(stateStyleObj[colorMode]);
        }
    });
    // Theme style props resolution
    var unResolvedProps = getAndMergeThemeFromStylesheet(styleSheet, 'unResolvedProps');
    var restDefaultProps = getAndMergeThemeFromStylesheet(styleSheet, 'restDefaultProps');
    var styleFromProps = getAndMergeThemeFromStylesheet(styleSheet, 'styleFromProps');
    var internalPseudoProps = getAndMergeThemeFromStylesheet(styleSheet, 'internalPseudoProps');
    // State style props resolution
    var stateStyleFromProps = getAndMergeThemeFromStylesheet(stateStyleSheet, 'styleFromProps');
    // Merging state styles internal pseudo props with theme style internal pseudo props
    internalPseudoProps = __assign(__assign({}, internalPseudoProps), getAndMergeThemeFromStylesheet(stateStyleSheet, 'internalPseudoProps'));
    // Merging state styles restDefaultProps props with theme style restDefaultProps props
    restDefaultProps = __assign(__assign({}, restDefaultProps), getAndMergeThemeFromStylesheet(stateStyleSheet, 'restDefaultProps'));
    // Merging state styles unresolved props with theme style unresolved props
    unResolvedProps = __assign(__assign({}, unResolvedProps), getAndMergeThemeFromStylesheet(stateStyleSheet, 'unResolvedProps'));
    return {
        // style: map(styleSheet, 'style'),
        unResolvedProps: unResolvedProps,
        styleFromProps: styleFromProps,
        stateStyleFromProps: stateStyleFromProps,
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
    if (isEmptyObj(themeObj)) {
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
            // style: sizeThemeObj?.style
            //   ? [...themeObj?.style, ...sizeThemeObj?.style]
            //   : themeObj.style,
            styleFromProps: lodash.merge({}, themeObj.styleFromProps, sizeThemeObj.styleFromProps),
            unResolvedProps: lodash.merge({}, themeObj.unResolvedProps, sizeThemeObj.unResolvedProps),
            internalPseudoProps: lodash.merge({}, themeObj.internalPseudoProps, sizeThemeObj.internalPseudoProps),
            stateStyleFromProps: lodash.merge({}, themeObj.stateStyleFromProps, sizeThemeObj.stateStyleFromProps),
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
            updateComponentThemeMap(defaultTheme, 
            // boot time provider id
            'generatedBuildTimeMap', componentName, {}, { platform: platform, colorMode: 'light' }, componentProps);
            updateComponentThemeMap(defaultTheme, 
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
