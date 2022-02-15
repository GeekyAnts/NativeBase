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
import { useFocusRing } from '@react-native-aria/focus';

const Tab = ({ children, value, ...props }: ITabProps, ref?: any) => {
  const { active, setActive, variant }: ITabsContextProps = useContext(
    TabsContext
  );

  const { hoverProps, isHovered } = useHover();
  const { pressableProps, isPressed } = useIsPressed();
  const { focusProps, isFocused } = useFocus();
  const { isFocusVisible, focusProps: focusRingProps }: any = useFocusRing();
  const {
    activeTabStyle,
    inactiveTabStyle,
    onPressIn,
    onPressOut,
    onHoverIn,
    onHoverOut,
    onFocus,
    ...resolvedProps
  } = usePropsResolution(
    'Tab',
    { variant, ...props },
    {
      isHovered,
      isPressed,
      isFocused,
      isFocusVisible,
    }
  );

  const tabStyle = value === active ? activeTabStyle : inactiveTabStyle;
  return (
    <Pressable
      disabled={props.isDisabled}
      onPress={() => setActive(value)}
      onPressIn={composeEventHandlers(onPressIn, pressableProps.onPressIn)}
      onPressOut={composeEventHandlers(onPressOut, pressableProps.onPressOut)}
      // @ts-ignore - web only
      onHoverIn={composeEventHandlers(onHoverIn, hoverProps.onHoverIn)}
      // @ts-ignore - web only
      onHoverOut={composeEventHandlers(onHoverOut, hoverProps.onHoverOut)}
      // @ts-ignore - web only
      onFocus={composeEventHandlers(
        composeEventHandlers(onFocus, focusProps.onFocus),
        focusRingProps.onFocus
      )}
      ref={ref}
    >
      <Box _web={{ cursor: 'pointer' }} {...resolvedProps} {...tabStyle}>
        {children}
      </Box>
    </Pressable>
  );
};

export default memo(forwardRef(Tab));
