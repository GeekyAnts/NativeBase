import React, { memo, forwardRef } from 'react';
import { useToggleState } from '@react-stately/toggle';
import { StyleSheet, ViewStyle, Switch as RNSwitch } from 'react-native';
import isNil from 'lodash.isnil';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { useToken } from '../../../hooks';
import { makeStyledComponent } from '../../../utils/styled';
import type { ISwitchProps } from './types';
import { mergeRefs } from '../../../utils';
import { useHover } from '@react-native-aria/interactions';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const StyledNBSwitch = makeStyledComponent(RNSwitch);

// TODO: Needs proper refactor
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

  const borderColorInvalid = useToken('colors', 'danger.600');
  const checked = !isNil(isChecked) ? isChecked : state.isSelected;
  const inValidPropFactors = {
    borderWidth: 1,
    borderRadius: 16,
    borderColor: borderColorInvalid,
  };

  const _ref = React.useRef(null);
  const { isHovered } = useHover({}, _ref);

  const {
    onTrackColor: _onTrackColor,
    offTrackColor: _offTrackColor,
    onThumbColor: _onThumbColor,
    offThumbColor: _offThumbColor,
    style: themeStyle,
    ...resolvedProps
  } = usePropsResolution('Switch', props, {
    isHovered,
    isDisabled,
    isInvalid,
    isChecked: checked,
  });

  const computedStyle: ViewStyle = StyleSheet.flatten([
    themeStyle,
    style,
    isInvalid ? inValidPropFactors : {},
  ]);

  const onTrackColor = useToken('colors', _onTrackColor);
  const offTrackColor = useToken('colors', _offTrackColor);
  const onThumbColor = useToken('colors', _onThumbColor);
  const offThumbColor = useToken('colors', _offThumbColor);

  //TODO: refactor for responsive prop
  if (
    useHasResponsiveProps({
      ...props,
      isDisabled,
      isInvalid,
      isChecked,
      defaultIsChecked,
      accessibilityLabel,
      accessibilityHint,
    })
  ) {
    return null;
  }
  return (
    <StyledNBSwitch
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      trackColor={{ false: offTrackColor, true: onTrackColor }}
      thumbColor={checked ? onThumbColor : offThumbColor}
      activeThumbColor={onThumbColor} // react-native-web prop for active thumbColor
      ios_backgroundColor={offTrackColor}
      {...resolvedProps}
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
