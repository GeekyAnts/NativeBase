import type { ViewStyle } from 'react-native';
import type {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  SpaceProps,
} from 'styled-system';
import type {
  customBackgroundProps,
  customBorderProps,
  customExtraProps,
  customLayoutProps,
  customOutlineProps,
  customShadowProps,
} from '../../../utils/customProps';
import type { Props as tooltipProps } from './Tooltip';
import type { IBoxProps } from '../../primitives/Box';
import type { ICloseButtonProps } from '../CloseButton';
type SpaceType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
export type IPopoverProps = ColorProps &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  customBorderProps &
  customExtraProps &
  customOutlineProps &
  customShadowProps &
  customLayoutProps &
  customBackgroundProps &
  tooltipProps &
  BorderProps & {
    style?: ViewStyle;
    initialFocusRef?: any;
    finalFocusRef?: any;
    children: JSX.Element | JSX.Element[];
    onOpen?: Function;
    onClose?: Function;
    closeOnBlur?: boolean;
    id?: any;
    size?: SpaceType | string | number;
  };
export type IPopoverComponentType = ((props: IPopoverProps) => JSX.Element) & {
  Body: React.MemoExoticComponent<(props: IBoxProps) => JSX.Element>;
  CloseButton: React.MemoExoticComponent<
    (props: ICloseButtonProps) => JSX.Element
  >;
  Content: React.MemoExoticComponent<(props: IPopoverProps) => JSX.Element>;
  Footer: React.MemoExoticComponent<(props: IBoxProps) => JSX.Element>;
  Header: React.MemoExoticComponent<(props: IBoxProps) => JSX.Element>;
  Trigger: React.MemoExoticComponent<(props: any) => JSX.Element>;
};
