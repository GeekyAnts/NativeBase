import React, { Component } from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import { IconNB } from './IconNB';
import { connectStyle } from '@shoutem/theme';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';


class CheckBox extends Component {
  static contextTypes = {
    theme: React.PropTypes.object,
  }

  getBackgroundColor() {
    const backgroundColor = ['transparent'];

    if (this.props.checked) {
      const variables = this.context.theme['@@shoutem.theme/themeStyle'].variables;
      backgroundColor.push((this.props.color) ? this.props.color : variables.checkboxBgColor);
    } else {
      backgroundColor.push('transparent');
    }
    return backgroundColor[1];
  }
  render() {
    const platformStyle = this.context.theme['@@shoutem.theme/themeStyle'].variables.platformStyle;
    const platform = this.context.theme['@@shoutem.theme/themeStyle'].variables.platform;
    const variables = this.context.theme['@@shoutem.theme/themeStyle'].variables;

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
