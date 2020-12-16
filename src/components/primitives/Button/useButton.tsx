import { RefObject, useState } from 'react';
import type { GestureResponderEvent } from 'react-native';
import type { IButtonAccessibilityProps } from './props';

type IUseButtonProps = {
  isDisabled: boolean;
  onPress: any;
} & IButtonAccessibilityProps;

export interface ButtonAria {
  /** Props for the button element. */
  buttonProps: {
    onPress: any;
    onPressIn: any;
    onPressOut: any;
    disabled: boolean;
  } & IButtonAccessibilityProps;
  /** Whether the button is currently pressed. */
  isPressed: boolean;
}

export function useButton(
  props: Partial<IUseButtonProps>,
  _ref: RefObject<any>
): ButtonAria {
  const [isPressed, setIsPressed] = useState(false);
  const disabled = !!props.isDisabled;

  const buttonProps = {
    accessible: props.accessible ?? true,
    accessibilityRole: props.accessibilityRole ?? 'button',
    accessibilityState: props.accessibilityState ?? {
      disabled,
    },
    disabled,
    ...props,
    onPress: (e: GestureResponderEvent) => {
      props.onPress && props.onPress(e);
    },
    onPressIn: () => {
      setIsPressed(true);
    },
    onPressOut: () => {
      setIsPressed(false);
    },
  };

  const newProps = {
    isPressed,
    buttonProps,
  };

  return newProps;
}
