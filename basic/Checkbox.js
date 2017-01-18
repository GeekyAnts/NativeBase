import React, { Component } from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import { IconNB } from './IconNB';
import { connectStyle } from '@shoutem/theme';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';


class CheckBox extends Component {
  render() {
    return (
      <TouchableOpacity ref={c => this._root = c} {...this.props}>
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
