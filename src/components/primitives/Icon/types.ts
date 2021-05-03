import type { IPlatformProps } from '../../types/IPlafromProps';
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

import type { default as AntDesignIconNames } from '@expo/vector-icons/build/AntDesign';
import type { default as EntypoIconNames } from '@expo/vector-icons/build/Entypo';
import type { default as EvilIconsIconNames } from '@expo/vector-icons/build/EvilIcons';
import type { default as FeatherIconNames } from '@expo/vector-icons/build/Feather';
import type { default as FontAwesomeIconNames } from '@expo/vector-icons/build/FontAwesome';
import type { default as FontistoIconNames } from '@expo/vector-icons/build/Fontisto';
import type { default as FoundationIconNames } from '@expo/vector-icons/build/Foundation';
import type { default as IoniconsIconNames } from '@expo/vector-icons/build/Ionicons';
import type { default as MaterialCommunityIconsIconNames } from '@expo/vector-icons/build/MaterialCommunityIcons';
import type { default as MaterialIconsIconNames } from '@expo/vector-icons/build/MaterialIcons';
import type { default as OcticonsIconNames } from '@expo/vector-icons/build/Octicons';
import type { default as SimpleLineIconsIconNames } from '@expo/vector-icons/build/SimpleLineIcons';
import type { default as ZocialIconNames } from '@expo/vector-icons/build/Zocial';

export type IconNameType =
  | keyof typeof AntDesignIconNames.glyphMap
  | keyof typeof EntypoIconNames.glyphMap
  | keyof typeof EvilIconsIconNames.glyphMap
  | keyof typeof FeatherIconNames.glyphMap
  | keyof typeof FontAwesomeIconNames.glyphMap
  | keyof typeof FontistoIconNames.glyphMap
  | keyof typeof FoundationIconNames.glyphMap
  | keyof typeof IoniconsIconNames.glyphMap
  | keyof typeof MaterialCommunityIconsIconNames.glyphMap
  | keyof typeof MaterialIconsIconNames.glyphMap
  | keyof typeof OcticonsIconNames.glyphMap
  | keyof typeof SimpleLineIconsIconNames.glyphMap
  | keyof typeof ZocialIconNames.glyphMap;
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

export type IIconProps = IPlatformProps &
  ColorProps &
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
    // name?: IconNameType;
    // type?: IconType;
    as?: any;
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
