import React from 'react';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { Pressable } from '../Pressable';
import Box from '../Box';
import { SliderContext } from './Context';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import type { ISliderTrackProps } from './types';

const SliderTrack = ({ children, ...props }: ISliderTrackProps, ref?: any) => {
  const {
    orientation,
    trackProps,
    onTrackLayout,
    colorScheme,
    sliderSize,
    isReadOnly,
    isDisabled,
  } = React.useContext(SliderContext);

  const isVertical = orientation === 'vertical';

  const { _pressable, ...resolvedProps } = usePropsResolution(
    'SliderTrack',
    {
      size: sliderSize,
      colorScheme,
      isVertical,
      ...props,
    },
    { isReadOnly, isDisabled }
  );

  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
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
