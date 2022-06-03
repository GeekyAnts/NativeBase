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
import { useColorMode } from '../../../core/color-mode';
import { getThemeProps } from '../../../core';

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

  const state = {
    isHovered: isHoveredProp || isHovered,
    isPressed: isPressedProp || isPressed,
    isFocused: isFocusedProp || isFocused,
    isFocusVisible: isFocusVisibleProp || isFocusVisible,
    isDisabled,
  };
  const { colorMode } = useColorMode();
  const { style, unResolvedProps } = getThemeProps(
    'IconButton',
    colorMode,
    state,
    props
  );
  const {
    style: iconStyle,
    styleFromProps,
    unResolvedProps: iconUnResolvedProps,
  } = getThemeProps('IconButton.Icon', colorMode, state, props._icon);

  console.log(styleFromProps, props._icon, 'style here 112');

  const {
    _icon,
    onPressIn,
    onPressOut,
    onHoverIn,
    onHoverOut,
    onFocus,
    onBlur,
    ...resolvedProps
  } = usePropsResolution('IconButton', { ...unResolvedProps, ...props }, state);

  let clonedIcon;
  if (icon) {
    clonedIcon = React.cloneElement(icon, {
      ..._icon,
      ...icon?.props,
      INTERNAL_themeStyle: iconStyle,
      ...iconUnResolvedProps,
      styleFromProps,
    });
  }

  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }

  // console.log(clonedIcon, 'ICICICIC');
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
      INTERNAL_themeStyle={style}
      {...resolvedProps}
    >
      {clonedIcon || (
        <Icon
          {..._icon}
          INTERNAL_themeStyle={iconStyle}
          styleFromProps={styleFromProps}
          {...iconUnResolvedProps}
          myprop="hello"
        >
          {children}
        </Icon>
      )}
    </Pressable>
  );
};

export default memo(forwardRef(IconButton));
export type { IIconButtonProps };
