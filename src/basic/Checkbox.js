import React, { Component } from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import { IconNB } from './IconNB';
import { connectStyle } from '@shoutem/theme';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';
import variable from '../theme/variables';


class CheckBox extends Component {
  getBackgroundColor() {
    const backgroundColor = ['transparent'];
    if (this.props.checked) {
      backgroundColor.push((this.props.color) ? this.props.color : variable.checkboxBgColor);
    } else {
      backgroundColor.push('transparent');
    }
    return backgroundColor[1];
  }
  render() {
    return (
      <TouchableOpacity
        ref={c => this._root = c}
        {...this.props}
        style={{
          borderRadius: variable.CheckboxRadius,
          overflow: 'hidden',
          width: variable.checkboxSize,
          height: variable.checkboxSize,
          borderWidth: variable.CheckboxBorderWidth,
          paddingLeft: variable.CheckboxPaddingLeft - 1,
          paddingBottom: variable.CheckboxPaddingBottom,
          borderColor: this.props.color ? this.props.color : variable.checkboxBgColor,
          backgroundColor: this.getBackgroundColor()
        }}
        >
        <IconNB name={(Platform.OS === 'ios') ? 'ios-checkmark-outline' : 'md-checkmark'} />
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
