import React from 'react';
import type { IMenuProps } from './types';
import View from '../../primitives/View';
import { useThemeProps } from '../../../hooks';
import { Popover } from '../Popover';

export const MenuContext = React.createContext({ closeOnSelect: true });

export const Menu = React.memo(
  React.forwardRef(
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
      const newProps = useThemeProps('Menu', props);

      return (
        <Popover
          isOpen={props.isOpen}
          defaultIsOpen={props.defaultIsOpen}
          onClose={onClose}
          onOpen={onOpen}
          trigger={trigger}
          shouldOverlapWithTrigger
          placement="bottom left"
          trapFocus
        >
          <Popover.Content isUnstyled>
            <MenuContext.Provider value={{ closeOnSelect }}>
              <View {...newProps} ref={ref}>
                {children}
              </View>
            </MenuContext.Provider>
          </Popover.Content>
        </Popover>
      );
    }
  )
);
