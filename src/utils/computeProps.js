'use_strict';
import _ from 'lodash';
import { StyleSheet } from 'react-native';

module.exports = function(incomingProps, defaultProps) {
  // External props has a higher precedence
  let computedProps = {};

  const clonedIncomingProps = _.clone(incomingProps);
  delete clonedIncomingProps.children;

  const incomingPropsStyle = incomingProps.style;
  delete clonedIncomingProps.style;

  if (incomingProps) {
    _.assign(computedProps, defaultProps, incomingProps);
  } else {
    computedProps = defaultProps;
  }
  // Pass the merged Style Object instead
  if (incomingPropsStyle) {
    let computedPropsStyle = {};
    computedProps.style = {};
    if (Array.isArray(incomingPropsStyle)) {
      _.forEach(incomingPropsStyle, style => {
        if (typeof style === 'number') {
          _.merge(computedPropsStyle, StyleSheet.flatten(style));
        } else {
          _.merge(computedPropsStyle, style);
        }
      });
    } else if (typeof incomingPropsStyle === 'number') {
      computedPropsStyle = StyleSheet.flatten(incomingPropsStyle);
    } else {
      computedPropsStyle = incomingPropsStyle;
    }

    _.merge(computedProps.style, defaultProps.style, computedPropsStyle);
  }
  return computedProps;
};
