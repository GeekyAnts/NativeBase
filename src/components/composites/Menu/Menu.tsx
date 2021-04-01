import React from 'react';
import type { IMenuProps } from './types';
import Box from '../../primitives/Box';
import { useThemeProps } from '../../../hooks';
import { Popover } from '../Popover';
import { ScrollView } from 'react-native';

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
          placement={props.placement ?? 'bottom left'}
          trapFocus
          shouldOverlapWithTrigger
        >
          <Popover.Content isUnstyled>
            <MenuContext.Provider value={{ closeOnSelect }}>
              <Box {...newProps} ref={ref}>
                <ScrollView>{children}</ScrollView>
              </Box>
            </MenuContext.Provider>
          </Popover.Content>
        </Popover>
      );
    }
  )
);
