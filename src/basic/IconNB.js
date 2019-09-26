import { connectStyle } from 'native-base-shoutem-theme';
import PropTypes from 'prop-types';
import React, {
  forwardRef,
  memo,
  useContext,
  useImperativeHandle,
  useMemo,
  useRef
} from 'react';
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

import { StyleProviderContext } from '../StyleProviderContext';
import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';

const IconNB = memo(
  forwardRef((props, ref) => {
    const iconRef = useRef();
    const theme = useContext(StyleProviderContext);

    const iconType = useMemo(() => {
      if (theme) {
        return theme.variables.iconFamily;
      }

      return props.type;
    }, [props.type, theme]);

    const Icon = useMemo(() => {
      switch (iconType) {
        case 'AntDesign':
          return AntDesign;
        case 'Entypo':
          return Entypo;
        case 'EvilIcons':
          return EvilIcons;
        case 'Feather':
          return Feather;
        case 'FontAwesome':
          return FontAwesome;
        case 'FontAwesome5':
          return FontAwesome5;
        case 'Foundation':
          return Foundation;
        case 'Ionicons':
          return Ionicons;
        case 'MaterialCommunityIcons':
          return MaterialCommunityIcons;
        case 'MaterialIcons':
          return MaterialIcons;
        case 'Octicons':
          return Octicons;
        case 'SimpleLineIcons':
          return SimpleLineIcons;
        case 'Zocial':
          return Zocial;
        default:
          return Ionicons;
      }
    }, [iconType]);

    useImperativeHandle(
      ref,
      () => ({
        _root: iconRef.current
      }),
      [iconRef]
    );

    return <Icon ref={iconRef} {...props} />;
  })
);

IconNB.propTypes = {
  type: PropTypes.oneOf([
    'AntDesign',
    'Entypo',
    'EvilIcons',
    'Feather',
    'FontAwesome',
    'FontAwesome5',
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
