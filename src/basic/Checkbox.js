import React, { Component } from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import { IconNB } from './IconNB';
import { connectStyle } from '@shoutem/theme';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';
import variable from '../theme/variables';
import _ from 'lodash';

class CheckBox extends Component {
  static contextTypes = {
    theme: React.PropTypes.object,
  }

  getBackgroundColor() {
    const backgroundColor = ['transparent'];

    if (this.props.checked) {
      const variables = (this.context.theme) ? this.context.theme['@@shoutem.theme/themeStyle'].variables : variable;
      backgroundColor.push((this.props.color) ? this.props.color : variables.checkboxBgColor);
    } else {
      backgroundColor.push('transparent');
    }
    return backgroundColor[1];
  }
  render() {
    const variables = (this.context.theme) ? this.context.theme['@@shoutem.theme/themeStyle'].variables : variable;
    const platformStyle = variables.platformStyle;
    const platform = variables.platform;
    return (
      <TouchableOpacity
        ref={c => this._root = c}
        {...this.props}
        style={{
          borderRadius: variables.CheckboxRadius,
          overflow: 'hidden',
          width: variables.checkboxSize,
          height: variables.checkboxSize,
          borderWidth: variables.CheckboxBorderWidth,
          paddingLeft: variables.CheckboxPaddingLeft - 1,
          paddingBottom: variables.CheckboxPaddingBottom,
          borderColor: this.props.color ? this.props.color : variables.checkboxBgColor,
          backgroundColor: this.getBackgroundColor()
        }}
        >
        <IconNB name={((platform === 'ios') && (platformStyle !== 'material')) ? 'ios-checkmark-outline' : 'md-checkmark'} />
      </TouchableOpacity>
    );
  }
}

CheckBox.propTypes = {
  ...TouchableOpacity.propTypes,
  style: React.PropTypes.object,
  checked: React.PropTypes.bool,
};

const StyledCheckBox = connectStyle('NativeBase.CheckBox', {}, mapPropsToStyleNames)(CheckBox);

export {
  StyledCheckBox as CheckBox,
};
