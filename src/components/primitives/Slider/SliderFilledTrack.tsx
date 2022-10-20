import React from 'react';
import { SliderContext } from './Context';
import Box from '../Box';
import type { ISliderTrackFilledProps } from './types';
import { usePropsResolution } from '../../../hooks/useThemeProps';

const SliderFilledTrack = (props: ISliderTrackFilledProps, ref?: any) => {
  const {
    isReversed,
    colorScheme,
    state,
    trackLayout,
    // orientation,
    variant,
    isDisabled,
    sliderSize,
    isReadOnly,
  } = React.useContext(SliderContext);

  const getSliderTrackPosition = () => {
    if (variant === 'vertical') {
      return isReversed
        ? trackLayout.height - trackLayout.height * state.getThumbPercent(0)
        : trackLayout.height * state.getThumbPercent(0);
    } else {
      return isReversed
        ? trackLayout.width - trackLayout.width * state.getThumbPercent(0)
        : trackLayout.width * state.getThumbPercent(0);
    }
  };

  const sliderTrackPosition = getSliderTrackPosition();

  const resolvedProps = usePropsResolution(
    'SliderFilledTrack',
    {
      size: sliderSize,
      colorScheme,
      isReversed,
      variant,
      ...props,
    },
    { isDisabled, isReadOnly, isReversed }
  );

  return (
    <Box
      position="absolute"
      {...resolvedProps}
      ref={ref}
      size={4}
      style={{
        width: variant !== 'vertical' ? sliderTrackPosition : 4,
        height: variant === 'vertical' ? sliderTrackPosition : 4,
      }}
      // {...(isReadOnly && _readOnly)}
      // {...(isDisabled && _disabled)}
    />
  );
};

export default React.forwardRef(SliderFilledTrack);
