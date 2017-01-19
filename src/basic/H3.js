import React, { Component } from 'react';
import { Text } from 'react-native';

import { connectStyle } from '@shoutem/theme';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';

class H3 extends Component {
  render() {
    return (
      <Text ref={c => this._root = c} {...this.props} />
    );
  }
}

const childrenType = function (props, propName, component) {
  let error;
  const prop = props[propName];
  React.Children.forEach(prop, (child) => {
    if (typeof child !== 'string') {
      error = new Error(`${component} should have only string`);
    }
  });
  return error;
};

H3.propTypes = {
  ...Text.propTypes,
  children: childrenType,
  style: React.PropTypes.object,
};

const StyledH3 = connectStyle('NativeBase.H3', {}, mapPropsToStyleNames)(H3);

export {
  StyledH3 as H3,
};
