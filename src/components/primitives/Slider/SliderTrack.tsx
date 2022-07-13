import React from 'react';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { Pressable } from '../Pressable';
import Box from '../Box';
import { SliderContext } from './Context';
import type { ISliderTrackProps } from './types';

const SliderTrack = ({ children, ...props }: ISliderTrackProps, ref?: any) => {
  const {
    // orientation,
    trackProps,
    onTrackLayout,
    sliderSize,
    isReadOnly,
    isDisabled,
    variant,
  } = React.useContext(SliderContext);

  const { _pressable, ...resolvedProps } = usePropsResolution(
    'SliderTrack',
    {
      variant,
      ...props,
    },
    { isReadOnly, isDisabled }
  );

  if (variant === 'vertical') {
    _pressable.width = sliderSize;
  } else {
    _pressable.height = sliderSize;
  }

  return (
    <Pressable
      onLayout={onTrackLayout}
      ref={ref}
      {...trackProps}
      {..._pressable}
    >
      <Box {...resolvedProps}>{children}</Box>
    </Pressable>
  );
};

export default React.forwardRef(SliderTrack);
