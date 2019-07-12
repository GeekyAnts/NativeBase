import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connectStyle } from 'native-base-shoutem-theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5Pro from "react-native-vector-icons/FontAwesome5Pro"
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';

class IconNB extends Component {
  static contextTypes = {
    theme: PropTypes.object
  };

  componentWillMount() {
    this.setIcon(this.props.type);
  }

  componentWillUpdate(nextProps) {
    if (nextProps.type && this.props.type !== nextProps.type) {
      this.setIcon(nextProps.type);
    }
  }

  setIcon(iconType) {
    if (iconType === undefined && this.context.theme) {
      // eslint-disable-next-line
      let iconType = this.context.theme['@@shoutem.theme/themeStyle'].variables
        .iconFamily;
    }
    switch (iconType) {
    case 'AntDesign':
      this.Icon = AntDesign;
      break;
    case 'Entypo':
      this.Icon = Entypo;
      break;
    case 'EvilIcons':
      this.Icon = EvilIcons;
      break;
    case 'Feather':
      this.Icon = Feather;
      break;
    case 'FontAwesome':
      this.Icon = FontAwesome;
      break;
    case 'FontAwesome5':
      this.Icon = FontAwesome5;
      break;
    case "FontAwesome5Pro":
      this.Icon = FontAwesome5Pro;
      break;
    case 'Foundation':
      this.Icon = Foundation;
      break;
    case 'Ionicons':
      this.Icon = Ionicons;
      break;
    case 'MaterialCommunityIcons':
      this.Icon = MaterialCommunityIcons;
      break;
    case 'MaterialIcons':
      this.Icon = MaterialIcons;
      break;
    case 'Octicons':
      this.Icon = Octicons;
      break;
    case 'SimpleLineIcons':
      this.Icon = SimpleLineIcons;
      break;
    case 'Zocial':
      this.Icon = Zocial;
      break;
    default:
      this.Icon = Ionicons;
    }
  }

  render() {
    return <this.Icon ref={c => (this._root = c)} {...this.props} />;
  }
}

IconNB.propTypes = {
  type: PropTypes.oneOf([
    'AntDesign',
    'Entypo',
    'EvilIcons',
    'Feather',
    'FontAwesome',
    'FontAwesome5',
    "FontAwesome5Pro",
    'Foundation',
    'Ionicons',
    'MaterialCommunityIcons',
    'MaterialIcons',
    'Octicons',
    'SimpleLineIcons',
    'Zocial'
  ])
};

const StyledIconNB = connectStyle(
  'NativeBase.IconNB',
  {},
  mapPropsToStyleNames
)(IconNB);

export { StyledIconNB as IconNB };
