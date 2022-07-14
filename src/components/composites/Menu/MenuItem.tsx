import React, { forwardRef, memo } from 'react';
import Text from '../../primitives/Text';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { Pressable } from '../../primitives/Pressable';
import type { IMenuItemProps } from './types';
import { MenuContext } from './MenuContext';
import { useMenuItem } from './useMenu';
import { mergeRefs } from '../../../utils';
import { composeEventHandlers } from '../../../utils';
import { useFocusRing } from '@react-native-aria/focus';

import {
  useHover,
  useFocus,
  useIsPressed,
} from '../../primitives/Pressable/Pressable';
const MenuItem = (
  {
    //@ts-ignore
    onPressIn,
    onPressOut,
    onHoverIn,
    onHoverOut,
    onFocus,
    onBlur,
    children,
    isDisabled,
    onPress,
    textValue,
    ...props
  }: IMenuItemProps,
  ref: any
) => {
  const { closeOnSelect, onClose } = React.useContext(MenuContext);
  const menuItemRef = React.useRef<any>(null);
  const mergedRef = mergeRefs([menuItemRef, ref]);

  const { hoverProps, isHovered } = useHover();
  const { pressableProps, isPressed } = useIsPressed();
  const { focusProps, isFocused } = useFocus();
  const { isFocusVisible, focusProps: focusRingProps }: any = useFocusRing();

  const state = {
    isDisabled,
    isHovered: isHovered,
    isFocused: isFocused,
    isPressed: isPressed,
    isFocusVisible: isFocusVisible,
  };

  const { _text, ...resolvedProps } = usePropsResolution(
    'MenuItem',
    props,
    state,
    {
      cascadePseudoProps: true,
    }
  );
  const [textContent, setTextContent] = React.useState('');
  React.useEffect(() => {
    const menuItem = menuItemRef.current;
    if (menuItem) {
      setTextContent((menuItem.textContent ?? '').trim());
    }
  }, [children]);

  const menuItemProps = useMenuItem({
    textValue: textValue ?? textContent,
    ref: menuItemRef,
  });

  return (
    <Pressable
      disabled={isDisabled}
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
      {...menuItemProps}
      {...resolvedProps}
      ref={mergedRef}
      // disabled={isDisabled}
      accessibilityState={{
        disabled: isDisabled,
      }}
      onPress={(e: any) => {
        if (!isDisabled) {
          onPress && onPress(e);
          if (closeOnSelect) {
            onClose && onClose();
          }
        }
      }}
    >
      <>
        {React.Children.map(children, (child, index: any) => {
          if (typeof child === 'string' || typeof child === 'number') {
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
    </Pressable>
  );
};

export default memo(forwardRef(MenuItem));
