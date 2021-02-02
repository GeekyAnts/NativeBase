import React from 'react';
import type { IMenuProps } from './types';
import View from '../../primitives/View';
import { useThemeProps } from '../../../hooks';
import { usePopover } from '../../../core';

export const Menu = React.memo(
  ({
    trigger,
    closeOnSelect = true,
    children,
    onOpen,
    onClose,
    ...props
  }: IMenuProps) => {
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
      setPopover(<View {...newProps}>{children}</View>, {
        triggerRef,
        animationDuration: 200,
        onClose: closeMenu,
        parentComponentConfig: { open: isOpen, closeMenu, closeOnSelect },
      });
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
);
