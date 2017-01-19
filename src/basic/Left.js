import React, { Component } from 'react';
import { View } from 'react-native';

import { connectStyle } from '@shoutem/theme';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';

class Left extends Component {
  render() {
    return (
      <View ref={c => this._root = c} {...this.props} />
    );
  }
}

Left.propTypes = {
  ...View.propTypes,
  style: React.PropTypes.object,
};

const StyledLeft = connectStyle('NativeBase.Left', {}, mapPropsToStyleNames)(Left);

export {
  StyledLeft as Left,
};
