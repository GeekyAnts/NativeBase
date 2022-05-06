import React, { memo, forwardRef } from 'react';
import { Pressable } from '../../primitives/Pressable';
import { Icon } from '../../primitives/Icon';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import { composeEventHandlers } from '../../../utils';
import type { IIconButtonProps } from './types';
import {
  useHover,
  useFocus,
  useIsPressed,
} from '../../primitives/Pressable/Pressable';
import { useFocusRing } from '@react-native-aria/focus';

const IconButton = (
  {
    icon,
    children,
    isHovered: isHoveredProp,
    isPressed: isPressedProp,
    isFocused: isFocusedProp,
    isFocusVisible: isFocusVisibleProp,
    isDisabled,
    ...props
  }: IIconButtonProps,
  ref: any
) => {
  const { hoverProps, isHovered } = useHover();
  const { pressableProps, isPressed } = useIsPressed();
  const { focusProps, isFocused } = useFocus();
  const { isFocusVisible, focusProps: focusRingProps }: any = useFocusRing();

  const {
    _icon,
    onPressIn,
    onPressOut,
    onHoverIn,
    onHoverOut,
    onFocus,
    onBlur,
    ...resolvedProps
  } = usePropsResolution('IconButton', props, {
    isHovered: isHoveredProp || isHovered,
    isPressed: isPressedProp || isPressed,
    isFocused: isFocusedProp || isFocused,
    isFocusVisible: isFocusVisibleProp || isFocusVisible,
    isDisabled,
  });

  let clonedIcon;
  if (icon) {
    clonedIcon = React.cloneElement(icon, {
      ..._icon,
      ...icon?.props,
    });
  }

  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }

  return (
    <Pressable
      accessibilityRole="button"
      ref={ref}
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
      // @ts-ignore - web only
      onBlur={composeEventHandlers(
        composeEventHandlers(onBlur, focusProps.onBlur),
        focusRingProps.onBlur
      )}
      {...resolvedProps}
    >
      {clonedIcon || <Icon {..._icon}>{children}</Icon>}
    </Pressable>
  );
};

export default memo(forwardRef(IconButton));
export type { IIconButtonProps };
