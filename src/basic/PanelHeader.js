/* eslint-disable no-nested-ternary */
/* eslint-disable no-unneeded-ternary */
import { get } from 'lodash';
import { connectStyle } from 'native-base-shoutem-theme';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Platform, View, StyleSheet, ViewPropTypes } from 'react-native';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';
import variable from '../theme/variables/platform';

class PanelHeader extends Component {
  static contextTypes = {
    theme: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      orientation: 'portrait'
    };
  }

  layoutChange(val) {
    const maxComp = Math.max(variable.deviceWidth, variable.deviceHeight);

    if (val.width >= maxComp) this.setState({ orientation: 'landscape' });
    else this.setState({ orientation: 'portrait' });
  }

  render() {
    const {
      style,
    } = this.props;
    const { orientation } = this.state;
    const variables = this.context.theme
      ? this.context.theme['@@shoutem.theme/themeStyle'].variables
      : variable;

    return (
      <View onLayout={e => this.layoutChange(e.nativeEvent.layout)}>
        <View ref={c => (this._root = c)} style={style} {...this.props} />
      </View>
    );
  }
}

PanelHeader.propTypes = {
  ...ViewPropTypes,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ]),
  searchBar: PropTypes.bool,
  rounded: PropTypes.bool
};

const StyledPanelHeader = connectStyle(
  'NativeBase.PanelHeader',
  {},
  mapPropsToStyleNames
)(PanelHeader);
export { StyledPanelHeader as PanelHeader };

