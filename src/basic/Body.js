import React, { Component } from 'react';
import { View, ViewPropTypes } from 'react-native';

import { connectStyle } from 'native-base-shoutem-theme';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';

class Body extends Component {
  render() {
    return (
      <View ref={c => this._root = c} {...this.props} />
    );
  }
}

Body.propTypes = {
  ...ViewPropTypes,
  style: React.PropTypes.object,
};

const StyledBody = connectStyle('NativeBase.Body', {}, mapPropsToStyleNames)(Body);

export {
  StyledBody as Body,
};
