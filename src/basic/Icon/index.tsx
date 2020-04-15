import React, { Component, createRef } from 'react';
import { Platform, StyleProp, ViewStyle } from 'react-native';
import { object } from 'prop-types';
import { connectStyle } from 'native-base-shoutem-theme';

import variable from '../../theme/variables/platform';
import mapPropsToStyleNames from '../../utils/mapPropsToStyleNames';
import { IconNB } from '../IconNB';
import ic from './NBIcons.json';

export type IconName = keyof typeof ic;

type IconProps = {
  style?: StyleProp<ViewStyle>;
  name: IconName;
  ios?: string;
  android?: string;
  active?: boolean;
  type?: string;
};

export class IconComponent extends Component<IconProps, {}> {
  _root = createRef<typeof IconNB>();
  static contextTypes = {
    theme: object,
  };
  getName() {
    const variables = this.context.theme ? this.context.theme['@@shoutem.theme/themeStyle'].variables : variable;
    const platformStyle = variables.platformStyle;
    const platform = variables.platform;

    if ((this.props.type || variables.iconFamily) === 'Ionicons') {
      if (typeof ic[this.props.name] !== 'object') {
        return this.props.name;
      } else if (typeof ic[this.props.name] === 'object') {
        let name;

        if (platform === 'ios' && platformStyle !== 'material') {
          name = this.props.active ? ic[this.props.name].ios.active : ic[this.props.name].ios.default;
        } else {
          name = this.props.active ? ic[this.props.name].android.active : ic[this.props.name].android.default;
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

      return this.props.active ? ic[this.props.name].ios.active : ic[this.props.name].ios.default;
    } else if (this.props.android) {
      return this.props.android;
    }

    return this.props.active ? ic[this.props.name].android.active : ic[this.props.name].android.default;
  }
  render() {
    if (this.props.ios && this.props.android) {
      return (
        <IconNB ref={this._root} {...this.props} name={Platform.OS === 'ios' ? this.props.ios : this.props.android} />
      );
    } else if (this.props.name && (this.props.android || this.props.ios)) {
      return <IconNB ref={this._root} {...this.props} name={this.getIconName()} />;
    }

    return <IconNB ref={this._root} {...this.props} name={this.getName()} />;
  }
}
const StyledIcon = connectStyle('NativeBase.Icon', {}, mapPropsToStyleNames)(IconComponent);

export { StyledIcon as Icon };
