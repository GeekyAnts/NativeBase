import React, { Component } from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import { connectStyle } from '@shoutem/theme';
import { IconNB as Icon } from './IconNB';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';
import variable from '../theme/variables';

class Radio extends Component {
  render() {
    return (
      <TouchableOpacity ref={c => this._root = c} {...this.props}>
        {(Platform.OS === 'ios') ?
          (this.props.selected) && <Icon name="ios-checkmark" style={{height: 20, lineHeight: 25, fontSize: 30, color: variable.brandPrimary}} />
          :
          <Icon name={this.props.selected ? 'md-radio-button-on' : 'md-radio-button-off'} style={{fontSize: 22, lineHeight: 23, color: (this.props.selected) ? variable.radioSelectedColorAndroid : undefined}} />
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
