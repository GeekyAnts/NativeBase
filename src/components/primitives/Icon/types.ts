import type { TextStyle } from 'react-native';
import type {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  SpaceProps,
  TypographyProps,
  PositionProps,
} from 'styled-system';
import type {
  customBorderProps,
  customBackgroundProps,
  customOutlineProps,
  customLayoutProps,
  customExtraProps,
  customShadowProps,
  customTypographyProps,
  customTransformProps,
  customFlexboxProps,
  customPositionProps,
} from '../../../utils/customProps';

import type { AntDesignIconNames } from '@expo/vector-icons/build/AntDesign';
import type { EntypoIconNames } from '@expo/vector-icons/build/Entypo';
import type { EvilIconsIconNames } from '@expo/vector-icons/build/EvilIcons';
import type { FeatherIconNames } from '@expo/vector-icons/build/Feather';
import type { FontAwesomeIconNames } from '@expo/vector-icons/build/FontAwesome';
import type { FontistoIconNames } from '@expo/vector-icons/build/Fontisto';
import type { FoundationIconNames } from '@expo/vector-icons/build/Foundation';
import type { IoniconsIconNames } from '@expo/vector-icons/build/Ionicons';
import type { MaterialCommunityIconsIconNames } from '@expo/vector-icons/build/MaterialCommunityIcons';
import type { MaterialIconsIconNames } from '@expo/vector-icons/build/MaterialIcons';
import type { OcticonsIconNames } from '@expo/vector-icons/build/Octicons';
import type { SimpleLineIconsIconNames } from '@expo/vector-icons/build/SimpleLineIcons';
import type { ZocialIconNames } from '@expo/vector-icons/build/Zocial';

export type IconNameType =
  | AntDesignIconNames
  | EntypoIconNames
  | EvilIconsIconNames
  | FeatherIconNames
  | FontAwesomeIconNames
  | FontistoIconNames
  | FoundationIconNames
  | IoniconsIconNames
  | MaterialCommunityIconsIconNames
  | MaterialIconsIconNames
  | OcticonsIconNames
  | SimpleLineIconsIconNames
  | ZocialIconNames;
export type IconType =
  | 'AntDesign'
  | 'Entypo'
  | 'EvilIcons'
  | 'Feather'
  | 'FontAwesome'
  | 'FontAwesome5'
  | 'Fontisto'
  | 'Foundation'
  | 'Ionicons'
  | 'MaterialCommunityIcons'
  | 'MaterialIcons'
  | 'Octicons'
  | 'SimpleLineIcons'
  | 'Zocial';

export type IIconProps = ColorProps &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  TypographyProps &
  PositionProps &
  customBorderProps &
  customPositionProps &
  customExtraProps &
  customOutlineProps &
  customShadowProps &
  customLayoutProps &
  customTypographyProps &
  customBackgroundProps &
  customTransformProps &
  customFlexboxProps &
  BorderProps & {
    name?: IconNameType;
    type?: IconType;
    style?: TextStyle;
    viewBox?: string;
    size?: string | number;
    color?: string;
    focusable?: boolean;
    children?: JSX.Element[] | JSX.Element;
    stroke?: string;
    strokeWidth?: string;
  };

export type ICreateIconProps = {
  viewBox?: string;
  path?: JSX.Element[] | JSX.Element;
  d?: string;
};
