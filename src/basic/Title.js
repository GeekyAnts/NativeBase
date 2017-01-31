/* @flow */


import React, { Component } from 'react';
import { Text } from 'react-native';
import { connectStyle } from '@shoutem/theme';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';

class Title extends Component {
  render() {
    return (
      <Text ref={c => this._root = c} {...this.props} numberOfLines={1} />
    );
  }
}

Title.propTypes = {
  ...Text.propTypes,
  style: React.PropTypes.object,
};

const StyledTitle = connectStyle('NativeBase.Title', {}, mapPropsToStyleNames)(Title);
export {
  StyledTitle as Title,
};
