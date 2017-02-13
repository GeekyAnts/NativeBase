/* @flow */


import React, { Component } from 'react';
import { View } from 'react-native';
import { connectStyle } from '@shoutem/theme';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';


class TabHeadingNB extends Component {
  render() {
    return (
      <View ref={c => this._root = c} {...this.props}></View>
    );
  }
}

TabHeadingNB.propTypes = {
  ...View.propTypes,
  style: React.PropTypes.object,
};

const StyledTabHeadingNB = connectStyle('NativeBase.TabHeading', {}, mapPropsToStyleNames)(TabHeadingNB);
export {
  StyledTabHeadingNB as TabHeading,
};
