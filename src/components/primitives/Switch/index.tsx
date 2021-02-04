import React from 'react';
import { useToggleState } from '@react-stately/toggle';
import {
  StyleSheet,
  ViewStyle,
  Switch as RNSwitch,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components/native';
import isNil from 'lodash/isNil';
import { useToken, useThemeProps } from '../../../hooks';
import { border, color, flexbox, layout, space, position } from 'styled-system';
import {
  customBorder,
  customBackground,
  customOutline,
  customLayout,
  customExtra,
  customShadow,
  customPosition,
} from '../../../utils/customProps';
import type { ISwitchProps } from './types';
import { useSwitch } from 'react-native-aria';

const StyledNBSwitch = styled(RNSwitch)<ISwitchProps>(
  color,
  space,
  layout,
  flexbox,
  border,
  position,
  customPosition,
  customBorder,
  customBackground,
  customOutline,
  customShadow,
  customExtra,
  customLayout
);

const Switch = (
  {
    style,
    onToggle,
    isDisabled,
    isInvalid,
    iosBgColor,
    isChecked,
    defaultIsChecked,
    accessibilityLabel,
    accessibilityHint,
    onColor,
    offColor,
    ...props
  }: ISwitchProps,
  ref: any
) => {
  const state = useToggleState({
    defaultSelected: !isNil(defaultIsChecked) ? defaultIsChecked : false,
  });

  const borderColorInvalid = useToken('colors', 'danger.600');
  const checked = !isNil(isChecked) ? isChecked : state.isSelected;
  const newProps = useThemeProps('Switch', {
    ...props,
    checked,
    onColor,
    offColor,
  });
  const inValidPropFactors = {
    borderWidth: 1,
    borderRadius: 16,
    borderColor: borderColorInvalid,
  };

  let computedStyle: ViewStyle = StyleSheet.flatten([
    style,
    { transform: newProps.transform ?? undefined },
    isInvalid ? inValidPropFactors : {},
  ]);

  const inputRef = React.useRef(null);
  let { inputProps } = useSwitch(
    {
      'aria-label': accessibilityLabel,
      'aria-describedby': accessibilityHint,
      isDisabled,
    },
    state,
    inputRef
  );
  return (
    //@ts-ignore
    <TouchableOpacity {...inputProps} ref={inputRef}>
      <StyledNBSwitch
        {...newProps}
        disabled={isDisabled}
        ios_backgroundColor={iosBgColor}
        onValueChange={onToggle ? onToggle : state.toggle}
        value={checked}
        style={computedStyle}
        ref={ref}
        opacity={isDisabled ? 0.4 : 1}
      />
    </TouchableOpacity>
  );
};

export default React.memo(React.forwardRef<RNSwitch, ISwitchProps>(Switch));
export type { ISwitchProps };
