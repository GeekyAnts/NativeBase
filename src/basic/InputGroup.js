import React, { Component } from 'react';
import { View } from 'react-native';

import variables from '../theme/variables/platform';
import { connectStyle } from '@shoutem/theme';
import computeProps from '../Utils/computeProps';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';

class InputGroup extends Component {

  getInitialStyle() {
    return {
      roundedInputGroup: {
        borderWidth: (this.props.rounded) ? 1 : undefined,
        borderRadius: (this.props.rounded) ? variables.inputGroupRoundedBorderRadius : undefined,
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
    return (
      <View ref={c => this._root = c} {...this.prepareRootProps()}>
        {this.props.children}
      </View>
    );
  }
}

InputGroup.propTypes = {
  ...View.propTypes,
  regular: React.PropTypes.bool,
  underline: React.PropTypes.bool,
  rounded: React.PropTypes.bool,
  success: React.PropTypes.bool,
  error: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
};

const StyledInputGroup = connectStyle('NativeBase.InputGroup', {}, mapPropsToStyleNames)(InputGroup);

export {
  StyledInputGroup as InputGroup,
};
