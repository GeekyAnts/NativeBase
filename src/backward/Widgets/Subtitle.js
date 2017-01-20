/* @flow */


import React, { Component } from 'react';
import { Text } from 'react-native';
import { connectStyle } from '@shoutem/theme';
import mapPropsToStyleNames from '../../Utils/mapPropsToStyleNames';

class Subtitle extends Component {
  render() {
    return (
      <Text ref={c => this._root = c} {...this.props} />
    );
  }
}

Subtitle.propTypes = {
  ...Text.propTypes,
  style: React.PropTypes.object,
};

const StyledSubtitle = connectStyle('NativeBase.Subtitle', {}, mapPropsToStyleNames)(Subtitle);
export {
  StyledSubtitle as Subtitle,
};
