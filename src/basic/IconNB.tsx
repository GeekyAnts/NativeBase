import * as React from 'react';
import { connectStyle } from 'native-base-shoutem-theme';
import { get } from 'lodash';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';
import { IconName } from './Icon';
type IconNBProps = {
  name: IconName;
  type?:
    | 'AntDesign'
    | 'Entypo'
    | 'EvilIcons'
    | 'Feather'
    | 'FontAwesome'
    | 'FontAwesome5'
    | 'Foundation'
    | 'Ionicons'
    | 'MaterialCommunityIcons'
    | 'MaterialIcons'
    | 'Octicons'
    | 'SimpleLineIcons'
    | 'Zocial';
};

class IconNB extends React.Component<IconNBProps, {}> {
  Icon:
    | typeof AntDesign
    | typeof Entypo
    | typeof EvilIcons
    | typeof Feather
    | typeof FontAwesome
    | typeof FontAwesome5
    | typeof Foundation
    | typeof Ionicons
    | typeof MaterialCommunityIcons
    | typeof MaterialIcons
    | typeof Octicons
    | typeof SimpleLineIcons
    | typeof Zocial;

  _root = React.createRef<any>();
  constructor(props: IconNBProps) {
    super(props);
    this.setIcon(props.type);
    this.Icon = Ionicons;
  }
  // eslint-disable-next-line camelcase
  UNSAFE_componentWillUpdate(nextProps: IconNBProps) {
    if (nextProps.type && this.props.type !== nextProps.type) {
      this.setIcon(nextProps.type);
    }
  }
  setIcon(iconType: IconNBProps['type']) {
    if (iconType === undefined && get(this, 'context.theme')) {
      iconType = this.context.theme['@@shoutem.theme/themeStyle'].variables.iconFamily;
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
    const { Icon } = this;

    return <Icon ref={this._root} {...this.props} />;
  }
}
const StyledIconNB = connectStyle('NativeBase.IconNB', {}, mapPropsToStyleNames)(IconNB);

export { StyledIconNB as IconNB };
