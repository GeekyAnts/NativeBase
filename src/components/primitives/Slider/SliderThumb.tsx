import React, { forwardRef } from 'react';
import { Platform } from 'react-native';
import { useSliderThumb } from '@react-native-aria/slider';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { useToken } from '../../../hooks';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import type { ISliderThumbProps } from './types';
import Box from '../Box';
import { SliderContext } from './Context';
import { useHover } from '@react-native-aria/interactions';
import { mergeRefs } from '../../../utils';
import { extractInObject, stylingProps } from '../../../theme/tools/utils';
import { Stack } from '../Stack';
import { Center } from '../../composites/Center';
// import { getThemeProps } from '../../../core';
// import { useColorMode } from '../../../core/color-mode';

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

  // console.log('context box', thumbSize);

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

  const filterProps = [
    ...stylingProps.margin,
    ...stylingProps.layout,
    ...stylingProps.flexbox,
    ...stylingProps.position,
    ...stylingProps.outline,
  ];

  const [layoutProps, nonLayoutProps] = extractInObject(
    resolvedProps,
    filterProps
  );

  // const [layoutStyles, nonLayoutStyles] = extractInObject(
  //   styleFromProps,
  //   filterProps
  // );

  // console.log(_interactionBox, 'resolved props here 111');

  const [
    accessibilityProps,
    nonAccessibilityProps,
  ] = extractInObject(nonLayoutProps, [
    'accessibilityRole',
    'accessibilityState',
  ]);

  // console.log(
  //   layoutProps,
  //   nonLayoutProps,
  //   nonAccessibilityProps,
  //   'props here 111'
  // );

  return (
    <Box
      position="absolute"
      {...thumbProps}
      {...resolvedProps}
      {...accessibilityProps}
      {...layoutProps}
      style={[thumbStyles]}
      // borderWidth="8"
      // borderRadius="8"
      // INTERNAL_themeStyle={layoutStyles}
      // INTERNAL_themeStyle={[layoutStyles, resolvedProps.INTERNAL_themeStyle]}
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
        <Center
          {...nonAccessibilityProps}
          // INTERNAL_themeStyle={[nonLayoutStyles]}
        >
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
