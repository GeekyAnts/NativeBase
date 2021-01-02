import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import IconNB from 'react-native-vector-icons/Ionicons';
import { connectStyle } from 'native-base-shoutem-theme';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';
import variable from '../theme/variables/platform';
import { PLATFORM } from '../theme/variables/commonColor';
import computeProps from '../utils/computeProps';

class CheckBox extends Component {
  static contextTypes = {
    theme: PropTypes.object
  };

  getInitialStyle(variables) {
    const { color, checked, checkboxType, borderColor } = this.props;
    return {
      checkStyle: {
        borderRadius: this.getBorderRadius(checkboxType, variables),
        borderColor: borderColor || color || variables.checkboxBgColor,
        backgroundColor:
          checked === true
            ? color || variables.checkboxBgColor
            : variables.checkboxDefaultColor
      }
    };
  }

  // eslint-disable-next-line class-methods-use-this
  getBorderRadius(checkboxType, variables) {
    if (checkboxType === 'rounded') {
      return 13;
    }
    if (checkboxType === 'square') {
      return 0;
    }
    return variables.CheckboxRadius;
  }

  prepareRootProps(variables) {
    const defaultProps = {
      style: this.getInitialStyle(variables).checkStyle
    };

    return computeProps(this.props, defaultProps);
  }
  render() {
    const { checked, tickColor } = this.props;
    const variables = this.context.theme
      ? this.context.theme['@@shoutem.theme/themeStyle'].variables
      : variable;
    const platformStyle = variables.platformStyle;
    const platform = variables.platform;
    return (
      <TouchableOpacity
        ref={c => (this._root = c)}
        {...this.prepareRootProps(variables)}
      >
        <IconNB
          style={{
            color:
              checked === true
                ? tickColor || variables.checkboxTickColor
                : variables.checkboxDefaultColor,
            fontSize: variables.CheckboxFontSize,
            lineHeight: variables.CheckboxIconSize,
            marginTop: variables.CheckboxIconMarginTop,
            textShadowRadius: variables.checkboxTextShadowRadius
          }}
          name={
            platform === PLATFORM.IOS && platformStyle !== PLATFORM.MATERIAL
              ? 'ios-checkmark'
              : 'md-checkmark'
          }
        />
      </TouchableOpacity>
    );
  }
}

CheckBox.propTypes = {
  ...TouchableOpacity.propTypes,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ]),
  checked: PropTypes.bool,
  onPress: PropTypes.func
};

const StyledCheckBox = connectStyle(
  'NativeBase.CheckBox',
  {},
  mapPropsToStyleNames
)(CheckBox);

export { StyledCheckBox as CheckBox };
