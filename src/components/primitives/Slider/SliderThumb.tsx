import React, { forwardRef } from 'react';
import { Platform } from 'react-native';
import { useSliderThumb } from '@react-native-aria/slider';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { useToken } from '../../../hooks';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import type { ISliderThumbProps } from './types';
import Box from '../Box';
import { SliderContext } from './Context';

function SliderThumb(props: ISliderThumbProps, ref: any) {
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

export default forwardRef(SliderThumb);
