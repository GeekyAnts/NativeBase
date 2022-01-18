import React from 'react';
import { Slider, VStack, Box } from 'native-base';

export const Example = () => {
  return (
    <Box alignItems="center" w="100%">
      <VStack space={4} w="75%" maxW="300">
        <Slider defaultValue={40} size="sm">
          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
        </Slider>
        <Slider defaultValue={60} size="md">
          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
        </Slider>
        <Slider defaultValue={80} size="lg">
          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
        </Slider>
      </VStack>
    </Box>
  );
};
