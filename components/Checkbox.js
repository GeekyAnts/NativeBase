import React, { Component } from 'react';
import { TouchableOpacity,Platform } from 'react-native';
import IIcon from 'react-native-vector-icons/Ionicons';
import { connectStyle } from '@shoutem/theme';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';
import { Icon } from 'native-base/Advanced';

import variables from '../variables';

class CheckBox extends Component {
  render() {
    return (
      <TouchableOpacity ref={c => this._root = c} {...this.props}>
        <Icon name={(Platform.OS === 'ios') ? 'ios-checkmark-outline' : 'md-checkmark'} />
      </TouchableOpacity>
    );
  }
}

CheckBox.propTypes = {
  ...TouchableOpacity.propTypes,
};

const StyledCheckBox = connectStyle('NativeBase.CheckBox', {}, mapPropsToStyleNames)(CheckBox);

export {
  StyledCheckBox as CheckBox,
};
