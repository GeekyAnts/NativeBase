import React from 'react';
import type { IMenuProps } from './types';
import View from '../../primitives/View';
import { useThemeProps } from '../../../hooks';
import { usePopover } from '../../../core';
//@ts-ignore - Todo - fix types to typings in rn-aria in next version
import { FocusScope } from '@react-native-aria/focus';

export const Menu = React.memo(
  React.forwardRef<any, IMenuProps>(
    (
      {
        trigger,
        closeOnSelect = true,
        children,
        onOpen,
        onClose,
        ...props
      }: IMenuProps,
      ref: any
    ) => {
      let triggerRef = React.useRef();
      const newProps = useThemeProps('Menu', props);
      let [isOpen, toggle] = React.useState<boolean>(false);
      const { setPopover, closePopover } = usePopover();

      const closeMenu = () => {
        closePopover();
        toggle(false);
        onClose && onClose();
      };
      const openMenu = () => {
        setPopover(
          <View {...newProps} ref={ref}>
            <FocusScope restoreFocus autoFocus>
              {children}
            </FocusScope>
          </View>,
          {
            triggerRef,
            animationDuration: 200,
            onClose: closeMenu,
            parentComponentConfig: { open: isOpen, closeMenu, closeOnSelect },
          }
        );
        toggle(true);
        onOpen && onOpen();
      };
      return trigger(
        {
          onPress: openMenu,
          ref: triggerRef,
        },
        { open: isOpen }
      );
    }
  )
);
