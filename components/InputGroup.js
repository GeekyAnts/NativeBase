import React, { Component } from 'react';
import { View } from 'react-native';

import computeProps from '../Utils/computeProps';
import { variables } from 'native-base';
import { connectStyle } from '@shoutem/theme';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';

class InputGroup extends Component {

    getInitialStyle() {
      return {
        roundedInputGroup: {
          borderWidth: (this.props.rounded) ? 1 : undefined,
          borderRadius: (this.props.rounded) ? variables.inputGroupRoundedBorderRadius : undefined,
        },
      }
    }

    prepareRootProps() {
      var defaultProps = {
        style: this.getInitialStyle().roundedInputGroup
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
};

const StyledInputGroup = connectStyle('NativeBase.InputGroup', {}, mapPropsToStyleNames)(InputGroup);

export {
  StyledInputGroup as InputGroup,
};
