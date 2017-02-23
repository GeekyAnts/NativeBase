import React, { Component } from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import IconNB from 'react-native-vector-icons/Ionicons';
import { connectStyle } from '@shoutem/theme';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';
import variable from '../theme/variables/platform';
import _ from 'lodash';
import computeProps from '../Utils/computeProps';


class CheckBox extends Component {
  static contextTypes = {
    theme: React.PropTypes.object,
  }

  getInitialStyle() {
    return {
      checkStyle: {
        borderColor: this.props.color ? this.props.color : variable.checkboxBgColor,
        backgroundColor: (this.props.checked === true) ? (this.props.color ? this.props.color : variable.checkboxBgColor) : 'transparent',
      },
    };
  }

  prepareRootProps() {
    const defaultProps = {
      style: this.getInitialStyle().checkStyle,
    };

    return computeProps(this.props, defaultProps);
  }
  render() {
    const variables = (this.context.theme) ? this.context.theme['@@shoutem.theme/themeStyle'].variables : variable;
    const platformStyle = variables.platformStyle;
    const platform = variables.platform;
    return (
      <TouchableOpacity ref={c => this._root = c} {...this.prepareRootProps()}>
        <IconNB style={{
            color: variables.checkboxTickColor,
            fontSize: variables.CheckboxFontSize,
            lineHeight: variables.CheckboxIconSize
          }} name={((platform === 'ios') && (platformStyle !== 'material')) ? 'ios-checkmark-outline' : 'md-checkmark'} />
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
