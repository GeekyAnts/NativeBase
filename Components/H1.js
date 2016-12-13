import React, { Component } from 'react';
import { Text } from 'react-native';

import { connectStyle } from '@shoutem/theme';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';

class H1 extends Component {
  render() {
    return (
      <Text ref={c => this._root = c} {...this.props} />
    );
  }
}

H1.propTypes = {
  ...Text.propTypes,
  style: React.PropTypes.object,
};

const StyledH1 = connectStyle('NativeBase.H1', {}, mapPropsToStyleNames)(H1);

export {
  StyledH1 as H1,
};
