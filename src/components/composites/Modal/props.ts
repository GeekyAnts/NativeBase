import type { ViewStyle, ModalProps } from 'react-native';
import type {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  SpaceProps,
  PositionProps,
} from 'styled-system';
import type {
  customBorderProps,
  customBackgroundProps,
  customOutlineProps,
  customLayoutProps,
  customExtraProps,
  customShadowProps,
} from '../../../utils/customProps';
type SpaceType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
export type IModalSemiProps = ModalProps &
  ColorProps &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  PositionProps &
  customBorderProps &
  customExtraProps &
  customOutlineProps &
  customShadowProps &
  customLayoutProps &
  customBackgroundProps &
  BorderProps & {
    style?: ViewStyle;
    isCentered?: boolean;
    initialFocusRef?: any;
    finalFocusRef?: any;
    children: JSX.Element | JSX.Element[];
    avoidKeyboard?: boolean;
    size?: SpaceType | string | number;
    id?: any;
    motionPreset?: 'slide' | 'fade' | 'none';
    closeOnOverlayClick?: boolean;
    overlayVisible?: boolean;
    overlayColor?: string;
  };

export type IModalProps = IModalSemiProps & { isOpen: boolean; onClose: any };
