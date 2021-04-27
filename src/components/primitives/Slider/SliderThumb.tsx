import React from 'react';
import { Platform } from 'react-native';
import { useSliderThumb } from '@react-native-aria/slider';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { useToken } from '../../../hooks';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import type { AriaSliderThumbProps } from './types';
import Box, { IBoxProps } from '../Box';
import { SliderContext } from './Context';

interface SliderThumbProps extends AriaSliderThumbProps, IBoxProps {}

function SliderThumb(props: Omit<SliderThumbProps, 'index'>, ref: any) {
  let {
    state,
    trackLayout,
    orientation,
    colorScheme,
    thumbSize,
  } = React.useContext(SliderContext);
  const themeProps = usePropsResolution('SliderThumb', {
    size: thumbSize,
    colorScheme,
    ...props,
  });
  let inputRef = React.useRef(null);
  let { thumbProps, inputProps } = useSliderThumb(
    {
      index: 0,
      trackLayout,
      inputRef,
      orientation,
    },
    state
  );

  const thumbAbsoluteSize = useToken('sizes', themeProps.size);

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
    scale: state.isThumbDragging(0) ? themeProps.scaleOnPressed : 1,
  });

  return (
    <Box
      position="absolute"
      {...thumbProps}
      {...themeProps}
      ref={ref}
      style={[thumbStyles, props.style]}
    >
      {props.children}
      {Platform.OS === 'web' && (
        <VisuallyHidden>
          <input ref={inputRef} {...inputProps} />
        </VisuallyHidden>
      )}
    </Box>
  );
}

SliderThumb.displayName = 'SliderThumb';

export default React.forwardRef(SliderThumb);
