import React from 'react';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { Pressable } from '../Pressable';
import Box from '../Box';
import { SliderContext } from './Context';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
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

  // const isVertical = orientation === 'vertical';

  const { _pressable, ...resolvedProps } = usePropsResolution(
    'SliderTrack',
    {
      sliderSize,
      variant,
      ...props,
    },
    { isReadOnly, isDisabled }
  );

  // console.log(
  //   // resolvedProps,
  //   // props,
  //   // _sliderTrack,
  //   // _pressable,
  //   resolvedProps,
  //   '&&& resolved props slider track ****'
  // );

  // console.log(variant, 'variant here');
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }

  // console.log(trackProps, 'trackProps props here &&&***');
  // console.log(resolvedProps, 'resolvedProps props here &&&***');
  // resolvedProps.boxSize = undefined;
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
