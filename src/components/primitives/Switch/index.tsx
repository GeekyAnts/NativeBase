import React, { useState } from 'react';
import { StyleSheet, ViewStyle, Switch as RNSwitch } from 'react-native';
import styled from 'styled-components/native';
import isNil from 'lodash/isNil';
import { useToken, usePropsConfig } from '../../../hooks';
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
import type { ISwitchProps } from './props';

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
    ariaLabel,
    onColor,
    offColor,
    ...props
  }: ISwitchProps,
  ref: any
) => {
  const [isActive, setIsActive] = useState(
    !isNil(defaultIsChecked) ? defaultIsChecked : false
  );
  const borderColorInvalid = useToken('colors', 'danger.600');
  const checked = !isNil(isChecked) ? isChecked : isActive;
  const newProps = usePropsConfig('Switch', {
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
  return (
    <StyledNBSwitch
      {...newProps}
      disabled={isDisabled}
      ios_backgroundColor={iosBgColor}
      onValueChange={onToggle ? onToggle : () => setIsActive(!isActive)}
      value={checked}
      style={computedStyle}
      accessibilityLabel={ariaLabel}
      accessibilityRole="switch"
      ref={ref}
      opacity={isDisabled ? 0.4 : 1}
    />
  );
};

export default React.forwardRef<RNSwitch, ISwitchProps>(Switch);
export type { ISwitchProps };
