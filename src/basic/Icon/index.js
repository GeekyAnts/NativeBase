import React, { Component } from 'react';

import { Platform } from 'react-native';
import { connectStyle } from '@shoutem/theme';

import { IconNB } from '../IconNB';
import ic from './NBIcons.json';
import variable from './../../theme/variables/platform';
import _ from 'lodash';

import mapPropsToStyleNames from '../../Utils/mapPropsToStyleNames';

class Icon extends Component {
  static contextTypes = {
    theme: React.PropTypes.object,
  }

  getName() {
    const variables = (this.context.theme) ? this.context.theme['@@shoutem.theme/themeStyle'].variables : variable;
    const platformStyle = variables.platformStyle;
    const platform = variables.platform;
    
    if (variables.iconFamily==='Ionicons') {
      if (typeof ic[this.props.name]!=='object' ) {
        return this.props.name;
      }
      else if (typeof ic[this.props.name]==='object') {
        let name;
        if ((platform === 'ios') && (platformStyle !== 'material') ) {
          name = (this.props.active) ? ic[this.props.name].ios.active : ic[this.props.name].ios.default;
        } else {
          name = (this.props.active) ? ic[this.props.name].android.active : ic[this.props.name].android.default;
        }
        return name;
      }
    }
    else {
      return this.props.name;
    }
  }

  getIconName() {
    if (Platform.OS === 'ios') {
      if (this.props.ios) {
        return this.props.ios;
      } else {
        return (this.props.active) ?
        ic[this.props.name].ios.active : ic[this.props.name].ios.default;
      }
    } else if(this.props.android) {
      return this.props.android;
    } else {
      return (this.props.active) ?
      ic[this.props.name].android.active : ic[this.props.name].android.default;
    }
  }

  render() {
    if (this.props.ios && this.props.android) {
      return (
        <IconNB ref={c => this._root = c} {...this.props} name={(Platform.OS === 'ios') ? this.props.ios : this.props.android} />
      );
    } else if (this.props.name && (this.props.android || this.props.ios)) {
      return (
        <IconNB ref={c => this._root = c} {...this.props} name={this.getIconName()} />
      );
    } else {
      return (
        <IconNB ref={c => this._root = c} {...this.props} name={this.getName()} />
      );
    }
  }
}

Icon.propTypes = {
  ...IconNB.propTypes,
  style: React.PropTypes.object,
  name: React.PropTypes.string,
  ios: React.PropTypes.string,
  android: React.PropTypes.string,
  active: React.PropTypes.bool,
};

const StyledIcon = connectStyle('NativeBase.Icon', {}, mapPropsToStyleNames)(Icon);

export {
  StyledIcon as Icon,
};
