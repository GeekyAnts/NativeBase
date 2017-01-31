import React, { Component } from 'react';
import { View } from 'react-native';

import { connectStyle } from '@shoutem/theme';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';

class Separator extends Component {
  render() {
    return (
      <View ref={c => this._root = c} {...this.props} />
    );
  }
}

Separator.propTypes = {
  ...View.propTypes,
  style: React.PropTypes.object,
};

const StyledSeparator = connectStyle('NativeBase.Separator', {}, mapPropsToStyleNames)(Separator);

export {
  StyledSeparator as Separator,
};
