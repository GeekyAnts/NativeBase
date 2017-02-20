import React, { Component } from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import { connectStyle } from '@shoutem/theme';
import { IconNB as Icon } from './IconNB';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';
import variable from '../theme/variables/platform';

class Radio extends Component {
  render() {
    return (
      <TouchableOpacity ref={c => this._root = c} {...this.props}>
        {(Platform.OS === 'ios') ?
          (this.props.selected) && <Icon name="ios-checkmark" />
          :
          <Icon name={this.props.selected ? 'md-radio-button-on' : 'md-radio-button-off'}  />
      }
      </TouchableOpacity>
    );
  }
}

Radio.propTypes = {
  ...TouchableOpacity.propTypes,
  selected: React.PropTypes.bool,
};

const StyledRadio = connectStyle('NativeBase.Radio', {}, mapPropsToStyleNames)(Radio);

export {
  StyledRadio as Radio,
};
