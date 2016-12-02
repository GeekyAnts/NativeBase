/* @flow */


import React, { Component } from 'react';
import { Platform, View, Text } from 'react-native';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';
import { connectStyle } from '@shoutem/theme';

class Title extends Component {
  render() {
    return (
      <Text ref={c => this._root = c} {...this.props} />
    );
  }
}

Title.propTypes = {
  ...Text.propTypes,
};

const StyledTitle = connectStyle('NativeBase.Title', {}, mapPropsToStyleNames)(Title);
export {
  StyledTitle as Title,
};
