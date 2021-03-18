import React from 'react';
import Text from '../../primitives/Text';
import { useThemeProps } from '../../../hooks';
import TouchableItem from '../../primitives/TouchableItem';
import type { IMenuItemProps } from './types';
import { usePopover } from '../../../core';

export const MenuItem = React.memo(
  ({ children, onPress, style, ...props }: IMenuItemProps) => {
    const {
      parentComponentConfig: { closeMenu, closeOnSelect },
    } = usePopover();

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
              closeMenu && closeMenu();
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
