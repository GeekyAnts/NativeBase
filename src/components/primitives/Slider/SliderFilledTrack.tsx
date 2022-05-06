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
    isDisabled,
    sliderSize,
    isReadOnly,
  } = React.useContext(SliderContext);

  const sliderTrackPosition = isReversed
    ? orientation === 'vertical'
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
      ...props,
    },
    { isDisabled, isReadOnly }
  );

  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }

  return (
    <Box
      position="absolute"
      {...resolvedProps}
      ref={ref}
      // {...(isReadOnly && _readOnly)}
      // {...(isDisabled && _disabled)}
    />
  );
};

export default React.forwardRef(SliderFilledTrack);
