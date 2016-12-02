import React, { Component } from 'react';
import { TouchableOpacity,Platform } from 'react-native';
import { connectStyle } from '@shoutem/theme';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';

import { Icon } from 'native-base';

import variables from '../variables';

class Radio extends Component {
  render() {
    return (
      <TouchableOpacity ref={c => this._root = c} {...this.props}>
      {(Platform.OS === 'ios') ?
          <Icon name={this.props.selected ? 'ios-radio-button-on' : 'ios-radio-button-off-outline'} />
          :
          <Icon name={this.props.selected ? 'md-radio-button-on' : 'md-radio-button-off'} />
      }
      </TouchableOpacity>
    );
  }
}

Radio.propTypes = {
  ...TouchableOpacity.propTypes,
};

const StyledRadio = connectStyle('NativeBase.Radio', {}, mapPropsToStyleNames)(Radio);

export {
  StyledRadio as Radio,
};
