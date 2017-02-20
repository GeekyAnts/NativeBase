import React, { Component } from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import { connectStyle } from '@shoutem/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';
import variable from '../theme/variables/platform';

class Radio extends Component {
  static contextTypes = {
    theme: React.PropTypes.object,
  }

  render() {
    const variables = (this.context.theme) ? this.context.theme['@@shoutem.theme/themeStyle'].variables : variable;
    const platformStyle = variables.platformStyle;
    const platform = variables.platform;

    return (
      <TouchableOpacity ref={c => this._root = c} {...this.props}>
        {(Platform.OS === 'ios') ?
          (this.props.selected) && <Icon
          style={{
            color: variables.brandPrimary,
            lineHeight: 25,
            height: 20,
            fontSize: variables.radioBtnSize,
          }}
          name="ios-checkmark" />
          :
          <Icon
            style={{
              color: (this.props.selected) ? variables.radioSelectedColorAndroid : undefined,
              lineHeight: variables.radioBtnLineHeight,
              fontSize: variables.radioBtnSize,
            }}
            name={this.props.selected ? 'md-radio-button-on' : 'md-radio-button-off'}  />
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
