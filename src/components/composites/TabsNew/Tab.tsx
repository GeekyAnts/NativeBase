import React, { memo, forwardRef, useContext } from 'react';
import Box from '../../primitives/Box';
import { Pressable } from '../../primitives/Pressable';
import { TabsContext } from './Context';
import type { ITabProps, ITabsContextProps } from './types';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import {
  useHover,
  useFocus,
  useIsPressed,
} from '../../primitives/Pressable/Pressable';
import { composeEventHandlers } from '../../../utils';

const Tab = (
  { children, isDisabled, value, _selectedItem, ...props }: ITabProps,
  ref?: any
) => {
  const {
    active,
    setActive,
    variant,
    orientation,
  }: ITabsContextProps = useContext(TabsContext);
  const { hoverProps, isHovered } = useHover();
  const { pressableProps, isPressed } = useIsPressed();
  const { focusProps, isFocused } = useFocus();

  const {
    activeTabStyle,
    onPressIn,
    onPressOut,
    onHoverIn,
    onHoverOut,
    onFocus,
    onBlur,
    ...resolvedProps
  } = usePropsResolution(
    'Tab',
    { variant, ...props },
    {
      isHovered,
      isPressed,
      isFocused,
      isDisabled,
    }
  );

  const tabStyle = value === active ? _selectedItem ?? activeTabStyle : null;
  return (
    <Pressable
      disabled={isDisabled}
      onPress={() => setActive(value)}
      onPressIn={composeEventHandlers(onPressIn, pressableProps.onPressIn)}
      onPressOut={composeEventHandlers(onPressOut, pressableProps.onPressOut)}
      // @ts-ignore - web only
      onHoverIn={composeEventHandlers(onHoverIn, hoverProps.onHoverIn)}
      // @ts-ignore - web only
      onHoverOut={composeEventHandlers(onHoverOut, hoverProps.onHoverOut)}
      // // @ts-ignore - web only
      onFocus={composeEventHandlers(
        composeEventHandlers(onFocus, focusProps.onFocus)
      )}
      onBlur={composeEventHandlers(
        composeEventHandlers(onBlur, focusProps.onBlur)
      )}
      borderBottomWidth={orientation === 'horizontal' ? '2' : '0'}
      borderRightWidth={orientation === 'vertical' ? '2' : '0'}
      ref={ref}
      accessibilityRole="tab"
      {...resolvedProps}
      {...tabStyle}
    >
      <Box>{children}</Box>
    </Pressable>
  );
};

export default memo(forwardRef(Tab));
