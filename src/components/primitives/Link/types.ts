import type { MutableRefObject } from 'react';
import type { GestureResponderEvent } from 'react-native';
import type { CustomProps } from '../../types';
import type { InterfaceBoxProps } from '../Box/types';

export interface InterfaceLinkProps extends InterfaceBoxProps<ILinkProps> {
  /**
   * URL that should be opened on Link press
   */
  href?: string | undefined;
  /**
   * Size of the link
   */
  size?: '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xsm' | number;
  /**
   * Whether Link text should be underlined
   */
  isUnderlined?: boolean | undefined;
  /**
   * Whether Link text should be hovered
   */
  isHovered?: boolean;
  /**
   * Callback that will be invoked on Link press
   */
  onPress?: ((event?: GestureResponderEvent) => any) | null | undefined;
  /**
   * If true, link will be opened in new tab on web. It uses _target property to achieve this
   */
  isExternal?: boolean;
  /**
   * Hover props. Accepts all styled system props.
   */
  _hover?: Omit<Partial<ILinkProps>, '_hover'>;
  /**
   * Ref to be attached to the Link wrapper
   */
  wrapperRef?: MutableRefObject<any>;
}

export type IUseLinkProp = {
  href?: string;
  isExternal?: boolean;
  onPress: ((event?: GestureResponderEvent) => any) | null | undefined;
  _ref: MutableRefObject<any>;
};

export type ILinkProps = InterfaceLinkProps & CustomProps<'Link'>;
