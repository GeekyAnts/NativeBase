import React, { Component } from 'react';

import { connectStyle } from '@shoutem/theme';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';

import mapPropsToStyleNames from '../../Utils/mapPropsToStyleNames';

class Icon extends Component {


  componentWillMount() {
    if (this.context.theme) {
      switch (this.context.theme['@@shoutem.theme/themeStyle'].variables.iconFamily) {
        case 'Ionicons':
          this.Icon = Ionicons;
          break;
        case 'Entypo':
          this.Icon = Entypo;
          break;
        case 'FontAwesome':
          this.Icon = FontAwesome;
          break;
        case 'Foundation':
          this.Icon = Foundation;
          break;
        case 'MaterialIcons':
          this.Icon = MaterialIcons;
          break;
        case 'Octicons':
          this.Icon = Octicons;
          break;
        case 'Zocial':
          this.Icon = Zocial;
          break;
        default:
          this.Icon = Ionicons;
      }
    } else {
      this.Icon = Ionicons;
    }
  }

  render() {
    return (
      <this.Icon ref={c => this._root = c} {...this.props} />
    );
  }
}

Icon.propTypes = {
  ...Ionicons.propTypes,
  style: React.PropTypes.object,
};

const StyledIcon = connectStyle('NativeBase.Icon', {}, mapPropsToStyleNames)(Icon);

export {
  StyledIcon as Icon,
};
