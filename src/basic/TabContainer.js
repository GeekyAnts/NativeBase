import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ViewPropTypes } from 'react-native';
import { connectStyle } from 'native-base-shoutem-theme';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';

class TabContainer extends Component {
  render() {
    return <View ref={c => (this._root = c)} {...this.props} />;
  }
}

TabContainer.propTypes = {
  ...ViewPropTypes,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ])
};

const StyledTabContainer = connectStyle(
  'NativeBase.TabContainer',
  {},
  mapPropsToStyleNames
)(TabContainer);
export { StyledTabContainer as TabContainer };
