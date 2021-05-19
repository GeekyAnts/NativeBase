import React, { memo, forwardRef } from 'react';
import { useToggleState } from '@react-stately/toggle';
import { StyleSheet, ViewStyle, Switch as RNSwitch } from 'react-native';
import styled from 'styled-components/native';
import isNil from 'lodash.isnil';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { useToken } from '../../../hooks';
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
import { mergeRefs } from '../../../utils';
import { useHover } from '@react-native-aria/interactions';

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
    isChecked,
    defaultIsChecked,
    accessibilityLabel,
    accessibilityHint,
    ...props
  }: ISwitchProps,
  ref: any
) => {
  const state = useToggleState({
    defaultSelected: !isNil(defaultIsChecked) ? defaultIsChecked : false,
  });
  const {
    onTrackColor: _onTrackColor,
    offTrackColor: _offTrackColor,
    onThumbColor: _onThumbColor,
    offThumbColor: _offThumbColor,
    style: themeStyle,
    _hover,
    ...newProps
  } = usePropsResolution('Switch', props);
  const borderColorInvalid = useToken('colors', 'danger.600');
  const checked = !isNil(isChecked) ? isChecked : state.isSelected;
  const onTrackColor = useToken('colors', _onTrackColor);
  const offTrackColor = useToken('colors', _offTrackColor);
  const onThumbColor = useToken('colors', _onThumbColor);
  const offThumbColor = useToken('colors', _offThumbColor);
  const inValidPropFactors = {
    borderWidth: 1,
    borderRadius: 16,
    borderColor: borderColorInvalid,
  };

  let computedStyle: ViewStyle = StyleSheet.flatten([
    themeStyle,
    style,
    isInvalid ? inValidPropFactors : {},
  ]);

  const _ref = React.useRef(null);
  const { isHovered } = useHover({}, _ref);

  return (
    <StyledNBSwitch
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      trackColor={{ false: offTrackColor, true: onTrackColor }}
      thumbColor={checked ? onThumbColor : offThumbColor}
      activeThumbColor={onThumbColor} // react-native-web prop for active thumbColor
      ios_backgroundColor={offTrackColor}
      {...(isHovered && _hover)}
      {...newProps}
      disabled={isDisabled}
      onValueChange={onToggle ? onToggle : state.toggle}
      value={checked}
      style={computedStyle}
      ref={mergeRefs([ref, _ref])}
      opacity={isDisabled ? 0.4 : 1}
    />
  );
};

export default memo(forwardRef(Switch));
export type { ISwitchProps };
