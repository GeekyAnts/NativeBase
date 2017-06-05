/* @flow */


import React, { Component } from 'react';
import { View, ViewPropTypes } from 'react-native';
import { connectStyle } from 'native-base-shoutem-theme';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';


class TabContainer extends Component {
  render() {
    return (
      <View ref={c => this._root = c} {...this.props}></View>
    );
  }
}

TabContainer.propTypes = {
  ...ViewPropTypes,
  style: React.PropTypes.object,
};

const StyledTabContainer = connectStyle('NativeBase.TabContainer', {}, mapPropsToStyleNames)(TabContainer);
export {
  StyledTabContainer as TabContainer,
};
