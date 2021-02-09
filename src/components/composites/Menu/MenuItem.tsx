import React from 'react';
import Text from '../../primitives/Text';
import { useThemeProps } from '../../../hooks';
import { themeTools } from '../../../theme';
import TouchableItem from '../../primitives/TouchableItem';
import type { IMenuItemProps } from './types';
import { usePopover } from '../../../core';

export const MenuItem = React.memo(
  ({ children, onPress, style, textStyle, ...props }: IMenuItemProps) => {
    const {
      parentComponentConfig: { closeMenu, closeOnSelect },
    } = usePopover();

    const newProps = useThemeProps('MenuItem', props);
    let allProps = {
      ...newProps,
      ...(newProps.isDisabled ? newProps._disabled : {}),
    };
    const [textProps, touchProps] = themeTools.extractInObject(allProps, [
      'color',
      'fontWeight',
      'fontStyle',
      'fontFamily',
      'fontSize',
      'padding',
      'px',
      'py',
      'textAlign',
    ]);

    return (
      <TouchableItem
        {...touchProps}
        style={style}
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
                <Text
                  {...textProps}
                  key={`menu-item-${index}`}
                  style={textStyle}
                >
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
