import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ViewPropTypes } from 'react-native';
import { connectStyle } from 'native-base-shoutem-theme';

import variable from '../theme/variables/platform';
import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';

class Footer extends Component {
  static contextTypes = {
    theme: PropTypes.object
  };
  constructor(props) {
    super(props);
    this.state = {
      orientation:
        variable.deviceHeight > variable.deviceWidth ? 'portrait' : 'landscape'
    };
  }
  layoutChange(val) {
    const maxComp = Math.max(variable.deviceWidth, variable.deviceHeight);
    if (val.width >= maxComp) this.setState({ orientation: 'landscape' });
    else {
      this.setState({ orientation: 'portrait' });
    }
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
      oldHeight = style[1].height || style[0].height;
    } else {
      oldHeight = style[0].height;
    }
    const height = oldHeight + InsetValues.bottomInset;
    return height;
  }

  calculatePadder(mode, inSet) {
    const { style } = this.props;
    let inset = null;
    if (inSet !== undefined) {
      inset = inSet;
    } else {
      inset = variable.Inset;
    }
    const InsetValues = mode === 'portrait' ? inset.portrait : inset.landscape;
    let bottomPadder = null;
    if (style[1] !== undefined) {
      if (style[1].padding !== undefined || style[1].paddingTop !== undefined) {
        bottomPadder =
          (style[1].paddingTop || style[1].padding) + InsetValues.bottomInset;
      }
    } else if (style.padding !== undefined && style.paddingTop !== undefined) {
      bottomPadder =
        (style.paddingTop || style.padding) + InsetValues.bottomInset;
    } else {
      bottomPadder = InsetValues.bottomInset;
    }
    return bottomPadder;
  }
  render() {
    const { style } = this.props;
    const variables = this.context.theme
      ? this.context.theme['@@shoutem.theme/themeStyle'].variables
      : variable;
    return variables.isIphoneX ? (
      <View
        ref={c => (this._root = c)}
        {...this.props}
        onLayout={e => this.layoutChange(e.nativeEvent.layout)}
        style={[
          style,
          {
            height: this.calculateHeight(
              this.state.orientation,
              variables.Inset
            ),
            paddingBottom: this.calculatePadder(
              this.state.orientation,
              variables.Inset
            )
          }
        ]}
      />
    ) : (
      <View ref={c => (this._root = c)} {...this.props} />
    );
  }
}

Footer.propTypes = {
  ...ViewPropTypes,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ])
};

const StyledFooter = connectStyle(
  'NativeBase.Footer',
  {},
  mapPropsToStyleNames
)(Footer);
export { StyledFooter as Footer };
