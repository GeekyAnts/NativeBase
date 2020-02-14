'use_strict';
import {
  clone as _clone,
  assign as _assign,
  forEach as _forEach,
  merge as _merge,
} from 'lodash';
import { StyleSheet } from 'react-native';

export default function(incomingProps, defaultProps) {
  // External props has a higher precedence
  let computedProps = {};

  const clonedIncomingProps = _clone(incomingProps);
  delete clonedIncomingProps.children;

  const incomingPropsStyle = incomingProps.style;
  delete clonedIncomingProps.style;

  if (incomingProps) {
    _assign(computedProps, defaultProps, incomingProps);
  } else {
    computedProps = defaultProps;
  }
  // Pass the merged Style Object instead
  if (incomingPropsStyle) {
    let computedPropsStyle = {};
    computedProps.style = {};
    if (Array.isArray(incomingPropsStyle)) {
      _forEach(incomingPropsStyle, style => {
        if (typeof style === 'number') {
          _merge(computedPropsStyle, StyleSheet.flatten(style));
        } else {
          _merge(computedPropsStyle, style);
        }
      });
    } else if (typeof incomingPropsStyle === 'number') {
      computedPropsStyle = StyleSheet.flatten(incomingPropsStyle);
    } else {
      computedPropsStyle = incomingPropsStyle;
    }

    _merge(computedProps.style, defaultProps.style, computedPropsStyle);
  }
  return computedProps;
}
