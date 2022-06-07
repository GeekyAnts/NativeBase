import React, { memo, forwardRef } from 'react';
import { ModalContext } from './Context';
import { usePropsResolution } from '../../../hooks';
import { Pressable } from '../../primitives/Pressable';
import { CloseIcon } from '../../primitives/Icon/Icons';
import type { IButtonProps } from '../../primitives/Button';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import {
  useHover,
  useFocus,
  useIsPressed,
} from '../../primitives/Pressable/Pressable';
import { composeEventHandlers } from '../../../utils';
import { useFocusRing } from '@react-native-aria/focus';
import { getThemeProps } from '../../../core';
import { useColorMode } from '../../../core/color-mode';

const ModalCloseButton = (props: IButtonProps, ref?: any) => {
  const { colorMode } = useColorMode();

  const { hoverProps, isHovered } = useHover();
  const { pressableProps, isPressed } = useIsPressed();
  const { focusProps, isFocused } = useFocus();
  const { isFocusVisible, focusProps: focusRingProps }: any = useFocusRing();
  const state = {
    isHovered,
    isPressed,
    isFocused,
    isFocusVisible,
  };

  const { style, unResolvedProps } = getThemeProps(
    'ModalCloseButton',
    colorMode,
    state,
    props
  );

  const {
    _icon,
    onPressIn,
    onPressOut,
    onHoverIn,
    onHoverOut,
    onFocus,
    onBlur,
    ...resolvedProps
  } = usePropsResolution(
    'ModalCloseButton',
    { ...unResolvedProps, ...props },
    state
  );
  const { handleClose } = React.useContext(ModalContext);
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
      onPress={handleClose}
      {...resolvedProps}
      INTERNAL_themeStyle={style}
    >
      <CloseIcon {..._icon} />
    </Pressable>
  );
};

export default memo(forwardRef(ModalCloseButton));
