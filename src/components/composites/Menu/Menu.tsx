import React from 'react';
import type { IMenuProps } from './types';
import Box from '../../primitives/Box';
import { useThemeProps } from '../../../hooks';
import { Popover } from 'react-native-popper';
import { Platform, ScrollView } from 'react-native';
import { useControllableState } from '../../../hooks';
import { useMenuTrigger, useMenu, useMenuTypeahead } from './useMenu';

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
      ref?: any
    ) => {
      const triggerRef = React.useRef(null);
      const [isOpen, setIsOpen] = useControllableState({
        value: props.isOpen,
        defaultValue: props.defaultIsOpen,
        onChange: (value) => {
          value ? onOpen && onOpen() : onClose && onClose();
        },
      });

      const newProps = useThemeProps('Menu', props);
      const handleOpen = React.useCallback(() => {
        setIsOpen(true);
      }, [setIsOpen]);

      const handleClose = React.useCallback(() => {
        setIsOpen(false);
      }, [setIsOpen]);

      const triggerProps = useMenuTrigger({
        handleOpen,
        isOpen,
      });

      let updatedTrigger = () => {
        return trigger(
          {
            ...triggerProps,
            ref: triggerRef,
            onPress: handleOpen,
          },
          { open: isOpen }
        );
      };
      return (
        <>
          {updatedTrigger()}
          <Popover
            isOpen={isOpen}
            // Disabling android animation till a fix for this issue is found. https://github.com/facebook/react-native/issues/23090
            animated={Platform.OS !== 'android'}
            trigger={triggerRef}
            onOpenChange={(value) => {
              if (!value) {
                handleClose();
              }
            }}
            placement={props.placement ?? 'bottom left'}
            shouldOverlapWithTrigger
          >
            <Popover.Backdrop />
            <Popover.Content>
              <MenuContext.Provider value={{ closeOnSelect }}>
                <MenuContent menuRef={ref} {...newProps}>
                  {children}
                </MenuContent>
              </MenuContext.Provider>
            </Popover.Content>
          </Popover>
        </>
      );
    }
  )
);

const MenuContent = ({
  menuRef,
  ...restProps
}: Omit<IMenuProps, 'trigger'> & { menuRef: any }) => {
  const menuProps = useMenu();
  const typeaheadProps = useMenuTypeahead(menuProps);

  return (
    <Box {...restProps} {...menuProps} {...typeaheadProps} ref={menuRef}>
      <ScrollView>{restProps.children}</ScrollView>
    </Box>
  );
};
