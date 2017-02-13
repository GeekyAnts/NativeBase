import React, { Component } from 'react';
import { Text } from 'react-native';

import { connectStyle } from '@shoutem/theme';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';

class H2 extends Component {
  render() {
    return (
      <Text ref={c => this._root = c} {...this.props} />
    );
  }
}

H2.propTypes = {
  ...Text.propTypes,
  children: React.PropTypes.oneOfType[React.PropTypes.node, React.PropTypes.string],
  style: React.PropTypes.object,
};

const StyledH2 = connectStyle('NativeBase.H2', {}, mapPropsToStyleNames)(H2);

export {
  StyledH2 as H2,
};
