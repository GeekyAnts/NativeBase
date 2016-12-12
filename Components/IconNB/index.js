import React, { Component } from 'react';

import { Platform } from 'react-native';
import { connectStyle } from '@shoutem/theme';

import { Icon } from 'native-base/Advanced';
import ic from './NBIcons.json';

import mapPropsToStyleNames from '../../Utils/mapPropsToStyleNames';

class IconNB extends Component {

  static contextTypes = {
    theme: React.PropTypes.object,
  }
  getName() {
    if(Platform.OS === 'ios') {
      return (this.props.active) ? ic[this.props.name].ios.active : ic[this.props.name].ios.default;
    }
    else {
      return (this.props.active) ? ic[this.props.name].android.active : ic[this.props.name].android.default;
    }
  }

  getIconName() {
    if(Platform.OS === 'ios') {
      if(this.props.ios) {
        return this.props.ios;
      }
      else {
        return (this.props.active) ? ic[this.props.name].ios.active : ic[this.props.name].ios.default;
      }
    }
    else {
      if(this.props.android) {
        return this.props.android;
      }
      else {
        return (this.props.active) ? ic[this.props.name].android.active : ic[this.props.name].android.default;
      }
    }
  }

  render() {
    if (this.props.ios && this.props.android) {
      return (
        <Icon ref={c => this._root = c} {...this.props} name={(Platform.OS === 'ios') ? this.props.ios : this.props.android} />
      );
    }
    else if (this.props.name && (this.props.android || this.props.ios)) {
      return (
        <Icon ref={c => this._root = c} {...this.props} name={this.getIconName()} />
      );
    }
    else {
      return (
        <Icon ref={c => this._root = c} {...this.props} name={this.getName()} />
      );
    }
  }
}

IconNB.propTypes = {
  ...Icon.propTypes,
  theme: React.PropTypes.object,
};

const StyledIconNB = connectStyle('NativeBase.IconNB', {}, mapPropsToStyleNames)(IconNB);

export {
  StyledIconNB as IconNB,
};
