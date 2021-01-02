import React from 'react';
import PropTypes from 'prop-types';
import { Platform } from 'react-native';
import { connectStyle } from 'native-base-shoutem-theme';

import variable from '../../theme/variables/platform';
import mapPropsToStyleNames from '../../utils/mapPropsToStyleNames';
import { IconNB } from '../IconNB';

import ic from './NBIcons.json';


const IS_IOS = Platform.OS === 'ios';


class Icon extends React.PureComponent {
  static contextTypes = {
    theme: PropTypes.object
  };

  setRoot(c){
    this._root = c;
  }

  getName() {
    const variables = this.context.theme
      ? this.context.theme['@@shoutem.theme/themeStyle'].variables
      : variable;
    const platformStyle = variables.platformStyle;

    if ((this.props.type || variables.iconFamily) === 'Ionicons') {
      if (typeof ic[this.props.name] !== 'object') {
        return this.props.name;
      }
      let name;
      if (IS_IOS && platformStyle !== 'material') {
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
    return this.props.name;
  }

  getIconName() {
    if (IS_IOS) {
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
          ref={this.setRoot}
          {...this.props}
          name={IS_IOS ? this.props.ios : this.props.android}
        />
      );
    } else if (this.props.name && (this.props.android || this.props.ios)) {
      return (
        <IconNB
          ref={this.setRoot}
          {...this.props}
          name={this.getIconName()}
        />
      );
    }
    return (
      <IconNB
        ref={this.setRoot}
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
