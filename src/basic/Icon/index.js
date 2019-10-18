import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Platform } from 'react-native';
import { connectStyle } from 'native-base-shoutem-theme';

import variable from '../../theme/variables/platform';
import mapPropsToStyleNames from '../../utils/mapPropsToStyleNames';
import { IconNB } from '../IconNB';

import ic from './NBIcons.json';

class Icon extends Component {
  static contextTypes = {
    theme: PropTypes.object
  };

  getName() {
    const variables = this.context.theme
      ? this.context.theme['@@shoutem.theme/themeStyle'].variables
      : variable;
    const platformStyle = variables.platformStyle;
    const platform = variables.platform;

    if ((this.props.type || variables.iconFamily) === 'Ionicons') {
      if (typeof ic[this.props.name] !== 'object') {
        return this.props.name;
      } else if (typeof ic[this.props.name] === 'object') {
        let name;
        if (platform === 'ios' && platformStyle !== 'material') {
          name = this.props.active
            ? ic[this.props.name].ios.active
            : ic[this.props.name].ios.default;
        } else {
          name = this.props.active
            ? ic[this.props.name].android.active
            : ic[this.props.name].android.default;
        }
        return name;
      }
    } else {
      return this.props.name;
    }
    return null;
  }

  getIconName() {
    if (Platform.OS === 'ios') {
      if (this.props.ios) {
        return this.props.ios;
      }
      return this.props.active
        ? ic[this.props.name].ios.active
        : ic[this.props.name].ios.default;
    } else if (this.props.android) {
      return this.props.android;
    }
    return this.props.active
      ? ic[this.props.name].android.active
      : ic[this.props.name].android.default;
  }

  render() {
    if (this.props.ios && this.props.android) {
      return (
        <IconNB
          ref={c => (this._root = c)}
          {...this.props}
          name={Platform.OS === 'ios' ? this.props.ios : this.props.android}
        />
      );
    } else if (this.props.name && (this.props.android || this.props.ios)) {
      return (
        <IconNB
          ref={c => (this._root = c)}
          {...this.props}
          name={this.getIconName()}
        />
      );
    }
    return (
      <IconNB
        ref={c => (this._root = c)}
        {...this.props}
        name={this.getName()}
      />
    );
  }
}

Icon.propTypes = {
  ...IconNB.propTypes,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ]),
  name: PropTypes.string,
  ios: PropTypes.string,
  android: PropTypes.string,
  active: PropTypes.bool,
  type: PropTypes.string
};

const StyledIcon = connectStyle('NativeBase.Icon', {}, mapPropsToStyleNames)(
  Icon
);

export { StyledIcon as Icon };
