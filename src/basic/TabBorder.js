/* @flow */


import React, { Component } from 'react';
import { View, Animated } from 'react-native';
import { connectStyle } from '@shoutem/theme';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';


class TabBorder extends Component {
  render() {
    return (
      <Animated.View ref={c => this._root = c} {...this.props}></Animated.View>
    );
  }
}

TabBorder.propTypes = {
  ...View.propTypes,
  style: React.PropTypes.object,
};

const StyledTabBorder = connectStyle('NativeBase.TabBorder', {}, mapPropsToStyleNames)(TabBorder);
export {
  StyledTabBorder as TabBorder,
};
