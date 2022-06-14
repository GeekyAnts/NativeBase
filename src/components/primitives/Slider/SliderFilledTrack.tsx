import React from 'react';
import { SliderContext } from './Context';
import Box from '../Box';
import type { ISliderTrackFilledProps } from './types';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const SliderFilledTrack = (props: ISliderTrackFilledProps, ref?: any) => {
  const {
    isReversed,
    colorScheme,
    state,
    trackLayout,
    orientation,
    variant,
    isDisabled,
    sliderSize,
    isReadOnly,
    _sliderFilledTrack,
  } = React.useContext(SliderContext);

  const sliderTrackPosition = isReversed
    ? variant === 'vertical'
      ? trackLayout.height - trackLayout.height * state.getThumbPercent(0)
      : trackLayout.width - trackLayout.width * state.getThumbPercent(0)
    : state.getThumbPercent(0) * 100 + '%';

  const resolvedProps = usePropsResolution(
    'SliderFilledTrack',
    {
      size: sliderSize,
      colorScheme,
      isReversed,
      orientation,
      sliderTrackPosition,
      ..._sliderFilledTrack,
      ...props,
    },
    { isDisabled, isReadOnly }
  );

  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }

  console.log(
    resolvedProps,
    orientation,
    variant,
    'resolved props here &&& >>>>'
  );
  return (
    <Box
      position="absolute"
      {...resolvedProps}
      ref={ref}
      size={4}
      style={{
        width: variant === 'horizontal' ? sliderTrackPosition : 4,
        height: variant !== 'horizontal' ? sliderTrackPosition : 4,
      }}
      // {...(isReadOnly && _readOnly)}
      // {...(isDisabled && _disabled)}
    />
  );
};

export default React.forwardRef(SliderFilledTrack);
