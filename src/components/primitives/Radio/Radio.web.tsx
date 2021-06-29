import React, { memo, forwardRef } from 'react';
import Box from '../Box';
import { Center } from '../../composites/Center';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import type { IRadioProps } from './types';
import { mergeRefs } from './../../../utils';
import { useHover } from '@react-native-aria/interactions';
import { useRadio } from '@react-native-aria/radio';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { RadioContext } from './RadioGroup';
import { useFocusRing } from '@react-native-aria/focus';
import { CircleIcon } from '../Icon/Icons';

const Radio = (
  { icon, children, wrapperRef, ...props }: IRadioProps,
  ref: any
) => {
  const contextState = React.useContext(RadioContext);
  const {
    _interactionBox: {
      _hover: _iterationBoxHover,
      _focus: _iterationBoxFocus,
      _disabled: _iterationBoxDisabled,
      ..._interactionBox
    },
    _radio: {
      _checked: _radioChecked,
      _disabled: _radioDisabled,
      _invalid: _radioInvalid,
      ..._radio
    },
    _icon,
    isInvalid,
    ...themedProps
  } = usePropsResolution('Radio', {
    ...contextState,
    ...props,
  });

  const inputRef = React.useRef(null);
  const { inputProps } = useRadio(
    { ...props, 'aria-label': props.accessibilityLabel, children },
    contextState.state,
    inputRef
  );
  const { disabled, checked } = inputProps;

  const _ref = React.useRef(null);
  const { isHovered } = useHover({}, _ref);
  const mergedRefs = mergeRefs([_ref, wrapperRef]);
  const { focusProps, isFocusVisible } = useFocusRing();

  // only calling below function when icon exist.
  const sizedIcon = () =>
    //@ts-ignore
    React.cloneElement(icon, {
      ..._icon,
    });

  const component = (
    <Box
      flexDirection="row"
      alignItems="center"
      {...themedProps}
      opacity={disabled ? 0.4 : 1}
      cursor={disabled ? 'not-allowed' : 'pointer'}
    >
      <Center>
        {/* Interaction Box */}
        <Box
          {..._interactionBox}
          {...(isFocusVisible && _iterationBoxFocus)}
          {...(isHovered && _iterationBoxHover)}
          {...(disabled && _iterationBoxDisabled)}
          style={{
            // @ts-ignore - only for web"
            transition: 'height 200ms, width 200ms',
          }}
          h={isFocusVisible || isHovered ? '200%' : '100%'}
          w={isFocusVisible || isHovered ? '200%' : '100%'}
        />
        {/* Radio */}
        <Center
          {..._radio}
          {...(checked && _radioChecked)}
          {...(disabled && _radioDisabled)}
          {...(isInvalid && _radioInvalid)}
        >
          {icon && sizedIcon && checked ? (
            sizedIcon()
          ) : (
            <CircleIcon {..._icon} opacity={checked ? 1 : 0} />
          )}
        </Center>
      </Center>
      {children}
    </Box>
  );

  return (
    <Box
      // @ts-ignore - RN web supports accessibilityRole="label"
      accessibilityRole="label"
      ref={mergedRefs}
    >
      <VisuallyHidden>
        <input {...inputProps} ref={ref} {...focusProps} />
      </VisuallyHidden>
      {component}
    </Box>
  );
};

export default memo(forwardRef(Radio));
