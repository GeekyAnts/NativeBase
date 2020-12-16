import type { IRadioContext, IRadioProps } from './props';

export function useRadio(
  props: IRadioProps,
  state: IRadioContext,
  _ref: any
): any {
  let { value, isDisabled, children, accessibilityLabel } = props;
  let { value: selectedValue, onChange, name } = state;

  let hasChildren = children != null;
  let hasAccessibilityLabel = accessibilityLabel != null;

  if (!hasChildren && !hasAccessibilityLabel) {
    console.warn(
      'If you do not provide children, you must specify an accessibilityLabel for accessibility'
    );
  }

  let checked = selectedValue === value;

  const onPress = () => {
    onChange(value);
  };

  return {
    inputProps: {
      onPress,
      disabled: isDisabled,
      checked,
      name,
      accessibilityLabel,
      accessibilityRole: 'radio',
      accessible: true,
      accessibilityHint: props.accessibilityHint,
      accessibilityState: {
        disabled: isDisabled,
        checked,
      },
    },
  };
}
