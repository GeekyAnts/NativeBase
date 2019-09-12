/* eslint-disable no-nested-ternary */
/* eslint-disable no-unneeded-ternary */
import { get } from 'lodash';
import { connectStyle } from 'native-base-shoutem-theme';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, StatusBar, StyleSheet, ViewPropTypes } from 'react-native';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';
import variable from '../theme/variables/platform';

class Header extends Component {
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

  calculateHeight(mode, inSet) {
    const { style } = this.props;
    let inset = null;

    if (inSet !== undefined) {
      inset = inSet;
    } else {
      inset = variable.Inset;
    }

    const InsetValues = mode === 'portrait' ? inset.portrait : inset.landscape;
    let oldHeight = null;

    if (style.height !== undefined) {
      oldHeight = style.height;
    } else if (style[1]) {
      oldHeight = style[1].height ? style[1].height : style[0].height;
    } else {
      oldHeight = style[0].height;
    }

    const height = oldHeight + InsetValues.topInset;

    return height;
  }

  calculatePadder(mode, inSet) {
    let inset = null;

    if (inSet !== undefined) {
      inset = inSet;
    } else {
      inset = variable.Inset;
    }

    const InsetValues = mode === 'portrait' ? inset.portrait : inset.landscape;
    let topPadder = null;
    const style = StyleSheet.flatten(this.props.style);

    if (style.padding !== undefined || style.paddingTop !== undefined) {
      topPadder =
        (style.paddingTop ? style.paddingTop : get(style, 'padding', 0)) +
        InsetValues.topInset;
    } else {
      topPadder = InsetValues.topInset;
    }

    return topPadder;
  }

  render() {
    const {
      androidStatusBarColor,
      iosBarStyle,
      style,
      transparent,
      translucent
    } = this.props;
    const { orientation } = this.state;
    const variables = this.context.theme
      ? this.context.theme['@@shoutem.theme/themeStyle'].variables
      : variable;
    const platformStyle = variables.platformStyle;

    return (
      <View onLayout={e => this.layoutChange(e.nativeEvent.layout)}>
        <StatusBar
          backgroundColor={
            androidStatusBarColor
              ? androidStatusBarColor
              : variables.statusBarColor
          }
          barStyle={
            iosBarStyle
              ? iosBarStyle
              : platformStyle === 'material'
              ? 'light-content'
              : variables.iosStatusbar
          }
          translucent={transparent ? true : translucent}
        />
        {variables.isIphoneX ? (
          <View
            ref={c => (this._root = c)}
            {...this.props}
            style={[
              style,
              {
                height: this.calculateHeight(orientation, variables.Inset),
                paddingTop: this.calculatePadder(orientation, variables.Inset)
              }
            ]}
          />
        ) : (
          <View ref={c => (this._root = c)} {...this.props} />
        )}
      </View>
    );
  }
}

Header.propTypes = {
  ...ViewPropTypes,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ]),
  searchBar: PropTypes.bool,
  rounded: PropTypes.bool
};

const StyledHeader = connectStyle(
  'NativeBase.Header',
  {},
  mapPropsToStyleNames
)(Header);
export { StyledHeader as Header };
