import React, { Component } from 'react';
import { View } from 'react-native';

import { connectStyle } from '@shoutem/theme';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';

class Right extends Component {
  render() {
    return (
      <View ref={c => this._root = c} {...this.props} />
    );
  }
}

Right.propTypes = {
  ...View.propTypes,
  style: React.PropTypes.object,
};

const StyledRight = connectStyle('NativeBase.Right', {}, mapPropsToStyleNames)(Right);

export {
  StyledRight as Right,
};
