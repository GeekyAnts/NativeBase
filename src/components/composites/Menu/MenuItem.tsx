import React from 'react';
import Text from '../../primitives/Text';
import { useThemeProps } from '../../../hooks';
import TouchableItem from '../../primitives/TouchableItem';
import type { IMenuItemProps } from './types';
import { MenuContext } from './Menu';
import { PopoverContext } from '../Popover/PopoverContext';

export const MenuItem = React.memo(
  ({ children, onPress, style, ...props }: IMenuItemProps) => {
    const { closeOnSelect } = React.useContext(MenuContext);
    const { onClose } = React.useContext(PopoverContext);

    const newProps = useThemeProps('MenuItem', props);
    let allProps = {
      ...newProps,
      ...(newProps.isDisabled ? newProps._disabled : {}),
    };
    const { _text, ...touchProps } = allProps;
    return (
      <TouchableItem
        {...touchProps}
        style={style}
        disabled={props.isDisabled}
        // TouchableHighlight doesn't announce disabled, even if disabled prop is set
        accessibilityState={{
          disabled: props.isDisabled,
        }}
        onPress={(e: any) => {
          if (!props.isDisabled) {
            onPress && onPress(e);
            if (closeOnSelect) {
              onClose && onClose();
            }
          }
        }}
      >
        <>
          {React.Children.map(children, (child, index: any) => {
            if (typeof child === 'string') {
              return (
                <Text {..._text} key={`menu-item-${index}`}>
                  {child}
                </Text>
              );
            } else {
              return child;
            }
          })}
        </>
      </TouchableItem>
    );
  }
);
