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

H3.propTypes = {
  ...Text.propTypes,
};

const StyledH3 = connectStyle('NativeBase.H3', {}, mapPropsToStyleNames)(H3);

export {
  StyledH3 as H3,
};
