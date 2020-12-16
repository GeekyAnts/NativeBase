import type { TextStyle } from 'react-native';
import type { ColorProps, SpaceProps, TypographyProps } from 'styled-system';

export type IconType =
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

export type IIconProps = TypographyProps &
  ColorProps &
  SpaceProps & {
    name?: string;
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
