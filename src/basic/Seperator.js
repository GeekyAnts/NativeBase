import React, { Component } from 'react';
import { View } from 'react-native';

import { connectStyle } from '@shoutem/theme';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';

class Seperator extends Component {
  render() {
    return (
      <View ref={c => this._root = c} {...this.props} />
    );
  }
}

Seperator.propTypes = {
  ...View.propTypes,
  style: React.PropTypes.object,
};

const StyledSeperator = connectStyle('NativeBase.Seperator', {}, mapPropsToStyleNames)(Seperator);

export {
  StyledSeperator as Seperator,
};
