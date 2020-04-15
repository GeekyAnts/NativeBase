import React, { Component } from 'react';
import { View } from 'react-native';
import { connectStyle } from 'native-base-shoutem-theme';

import variables from '../theme/variables/platform';
import computeProps from '../utils/computeProps';
import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';
type InputGroupProps = {
  regular?: boolean;
  underline?: boolean;
  rounded?: boolean;
  success?: boolean;
  error?: boolean;
  disabled?: boolean;
};

class InputGroup extends Component<InputGroupProps, {}> {
  getInitialStyle() {
    return {
      roundedInputGroup: {
        borderWidth: this.props.rounded ? 1 : undefined,
        borderRadius: this.props.rounded ? variables.inputGroupRoundedBorderRadius : undefined,
      },
    };
  }
  prepareRootProps() {
    const defaultProps = {
      style: this.getInitialStyle().roundedInputGroup,
    };

    return computeProps(this.props, defaultProps);
  }
  render() {
    return <View {...this.prepareRootProps()}>{this.props.children}</View>;
  }
}
const StyledInputGroup = connectStyle('NativeBase.InputGroup', {}, mapPropsToStyleNames)(InputGroup);

export { StyledInputGroup as InputGroup };
