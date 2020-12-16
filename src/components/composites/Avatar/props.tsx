import type {
  LayoutProps,
  BorderProps,
  SpaceProps,
  FlexboxProps,
} from 'styled-system';
import type { ImageSourcePropType } from 'react-native';
import type { customBorderProps } from '../../../utils/customProps';

export type IAvatarProps = LayoutProps &
  SpaceProps &
  customBorderProps &
  BorderProps &
  FlexboxProps & {
    name?: string | undefined;
    style?: any;
    size?: string | undefined;
    source?: ImageSourcePropType;
  };

export type IAvatarBadgeProps = IAvatarProps & {
  bg?: string;
  boxSize?: number;
  borderColor?: string;
};
