import React, { Component } from 'react';
import { TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import IconNB from 'react-native-vector-icons/Ionicons';
import { connectStyle } from 'native-base-shoutem-theme';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';
import variable from '../theme/variables/platform';
import { PLATFORM } from '../theme/variables/commonColor';
import computeProps from '../utils/computeProps';
type CheckBoxProps = {
  color?: string;
  style?: StyleProp<ViewStyle>;
  checked?: boolean;
  onPress?: (...args: any[]) => any;
};

class CheckBox extends Component<CheckBoxProps, {}> {
  _root = React.createRef<TouchableOpacity>();
  getInitialStyle(variables: SimpleObject) {
    const { color, checked } = this.props;

    return {
      checkStyle: {
        borderColor: color || variables.checkboxBgColor,
        backgroundColor: checked === true ? color || variables.checkboxBgColor : variables.checkboxDefaultColor,
      },
    };
  }
  prepareRootProps(variables: SimpleObject) {
    const defaultProps = {
      style: this.getInitialStyle(variables).checkStyle,
    };

    return computeProps(this.props, defaultProps);
  }
  render() {
    const { checked } = this.props;
    const variables = this.context.theme ? this.context.theme['@@shoutem.theme/themeStyle'].variables : variable;
    const platformStyle = variables.platformStyle;
    const platform = variables.platform;

    return (
      <TouchableOpacity ref={this._root} {...this.prepareRootProps(variables)}>
        <IconNB
          style={{
            color: checked === true ? variables.checkboxTickColor : variables.checkboxDefaultColor,
            fontSize: variables.CheckboxFontSize,
            lineHeight: variables.CheckboxIconSize,
            marginTop: variables.CheckboxIconMarginTop,
            textShadowRadius: variables.checkboxTextShadowRadius,
          }}
          name={platform === PLATFORM.IOS && platformStyle !== PLATFORM.MATERIAL ? 'ios-checkmark' : 'md-checkmark'}
        />
      </TouchableOpacity>
    );
  }
}
const StyledCheckBox = connectStyle('NativeBase.CheckBox', {}, mapPropsToStyleNames)(CheckBox);

export { StyledCheckBox as CheckBox };
