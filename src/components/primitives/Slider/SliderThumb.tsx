import React, { forwardRef } from 'react';
import { Platform } from 'react-native';
import { useSliderThumb } from '@react-native-aria/slider';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { useToken } from '../../../hooks';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import type { ISliderThumbProps } from './types';
import Box from '../Box';
import { SliderContext } from './Context';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import { useHover } from '@react-native-aria/interactions';
import { mergeRefs } from '../../../utils';
import { extractInObject, stylingProps } from '../../../theme/tools/utils';
import { Stack } from '../Stack';
import { Center } from '../../composites/Center';

function SliderThumb(props: ISliderThumbProps, ref: any) {
  const [isPressed, setIsPressed] = React.useState(false);

  const [isFocused, setIsFocused] = React.useState(false);
  const handleFocus = (focusState: boolean, callback: any) => {
    setIsFocused(focusState);
    callback();
  };

  const _ref = React.useRef(null);
  const { isHovered } = useHover({}, _ref);

  const {
    state,
    trackLayout,
    orientation,
    colorScheme,
    thumbSize,
    isReadOnly,
    isDisabled,
    _interactionBox: interactionBoxContext,
  } = React.useContext(SliderContext);
  const {
    onFocus,
    onBlur,
    _stack,
    _interactionBox,
    ...resolvedProps
  } = usePropsResolution(
    'SliderThumb',
    {
      size: thumbSize,
      _interactionBox: interactionBoxContext,
      colorScheme,
      ...props,
    },
    {
      isDisabled,
      isReadOnly,
      isPressed,
      isFocused,
      isHovered,
    }
  );

  const inputRef = React.useRef(null);
  const { thumbProps, inputProps } = useSliderThumb(
    {
      index: 0,
      trackLayout,
      inputRef,
      orientation,
    },
    state
  );

  React.useEffect(() => {
    setIsPressed(state.isThumbDragging(0));
  }, [state]);

  const thumbAbsoluteSize = useToken('sizes', resolvedProps.size);

  const thumbStyles: any = {
    bottom:
      orientation === 'vertical'
        ? `${state.getThumbPercent(0) * 100}%`
        : undefined,
    left:
      orientation !== 'vertical'
        ? `${state.getThumbPercent(0) * 100}%`
        : undefined,
    transform:
      orientation === 'vertical'
        ? [{ translateY: parseInt(thumbAbsoluteSize) / 2 }]
        : [{ translateX: -parseInt(thumbAbsoluteSize) / 2 }],
  };

  thumbStyles.transform.push({
    scale: state.isThumbDragging(0) ? resolvedProps.scaleOnPressed : 1,
  });

  const [layoutProps, nonLayoutProps] = extractInObject(resolvedProps, [
    ...stylingProps.margin,
    ...stylingProps.layout,
    ...stylingProps.flexbox,
    ...stylingProps.position,
    ...stylingProps.outline,
  ]);

  const [
    accessibilityProps,
    nonAccessibilityProps,
  ] = extractInObject(nonLayoutProps, [
    'accessibilityRole',
    'accessibilityState',
  ]);

  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }

  return (
    <Box
      position="absolute"
      {...thumbProps}
      {...resolvedProps}
      {...accessibilityProps}
      {...layoutProps}
      style={[thumbStyles, resolvedProps.style]}
      onFocus={(e: any) => {
        handleFocus(true, onFocus ? () => onFocus(e) : () => {});
      }}
      onBlur={(e: any) => {
        handleFocus(false, onBlur ? () => onBlur(e) : () => {});
      }}
      // {...(isReadOnly && _readOnly)}
      // {...(isDisabled && _disabled)}
      ref={mergeRefs([_ref, ref])}
    >
      <Stack {..._stack}>
        <Box {..._interactionBox} />
        <Center {...nonAccessibilityProps}>
          {props.children}
          {Platform.OS === 'web' && (
            <VisuallyHidden>
              <input ref={inputRef} {...inputProps} />
            </VisuallyHidden>
          )}
        </Center>
      </Stack>
    </Box>
  );
}

SliderThumb.displayName = 'SliderThumb';

export default forwardRef(SliderThumb);
