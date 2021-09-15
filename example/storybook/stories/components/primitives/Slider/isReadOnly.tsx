import React from 'react';
import { Slider, Box } from 'native-base';

export const Example = () => {
  return (
    <Box mx={5} width="80%">
      <Slider minValue={0} maxValue={100} step={1} defaultValue={50} isReadOnly>
        <Slider.Track _readOnly={{ bg: 'indigo.100' }}>
          <Slider.FilledTrack _readOnly={{ bg: 'indigo.600' }} />
        </Slider.Track>
        <Slider.Thumb _readOnly={{ bg: 'indigo.600' }} />
      </Slider>
    </Box>
  );
};
