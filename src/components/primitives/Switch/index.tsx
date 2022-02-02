import React, { memo, forwardRef } from 'react';
import { useToggleState } from '@react-stately/toggle';
import { Switch as RNSwitch } from 'react-native';
import isNil from 'lodash.isnil';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { useToken } from '../../../hooks';
import { makeStyledComponent } from '../../../utils/styled';
import type { ISwitchProps } from './types';
import { mergeRefs } from '../../../utils';
import { useHover } from '@react-native-aria/interactions';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import { useFormControlContext } from '../../composites/FormControl';
import { combineContextAndProps } from '../../../utils';

const StyledNBSwitch = makeStyledComponent(RNSwitch);

// TODO: Needs proper refactor
const Switch = (
  {
    disabled,
    isDisabled,
    isInvalid,
    isChecked,
    defaultIsChecked,
    accessibilityLabel,
    accessibilityHint,
    onToggle,
    value,
    onValueChange,
    isHovered: isHoveredProp,
    ...props
  }: ISwitchProps,
  ref: any
) => {
  const formControlContext = useFormControlContext();

  const combinedProps = combineContextAndProps(formControlContext, props);

  const state = useToggleState({
    defaultSelected: !isNil(defaultIsChecked) ? defaultIsChecked : false,
  });
  const checked = !isNil(isChecked) ? isChecked : state.isSelected;
  const _ref = React.useRef(null);
  const { isHovered } = useHover({}, _ref);

  const {
    onTrackColor: _onTrackColor,
    offTrackColor: _offTrackColor,
    onThumbColor: _onThumbColor,
    offThumbColor: _offThumbColor,
    ...resolvedProps
  } = usePropsResolution('Switch', props, {
    isHovered: isHoveredProp || isHovered,
    isDisabled: disabled || isDisabled || combinedProps.isDisabled,
    isInvalid: isInvalid || combinedProps.isInvalid,
    isChecked: checked,
  });

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
      disabled={disabled || isDisabled || combinedProps.isDisabled}
      onValueChange={(val: boolean) => {
        onValueChange && onValueChange(val);
        onToggle ? onToggle() : state.toggle();
      }}
      value={value || checked}
      ref={mergeRefs([ref, _ref])}
    />
  );
};

export default memo(forwardRef(Switch));
export type { ISwitchProps };
