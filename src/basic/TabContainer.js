/* @flow */


import React, { Component } from 'react';
import { View } from 'react-native';
import { connectStyle } from '@shoutem/theme';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';


class TabContainer extends Component {
  render() {
    return (
      <View ref={c => this._root = c} {...this.props}></View>
    );
  }
}

TabContainer.propTypes = {
  ...View.propTypes,
  style: React.PropTypes.object,
};

const StyledTabContainer = connectStyle('NativeBase.TabContainer', {}, mapPropsToStyleNames)(TabContainer);
export {
  StyledTabContainer as TabContainer,
};
