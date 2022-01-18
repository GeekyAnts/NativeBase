import React from 'react';
import { Slider, Box, VStack } from 'native-base';

export const Example = () => {
  return (
    <Box alignItems="center" w="100%">
      <VStack w="3/4" maxW="300" space={4}>
        <Slider defaultValue={70} colorScheme="orange">
          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
        </Slider>
        <Slider defaultValue={70} colorScheme="emerald">
          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
        </Slider>
        <Slider defaultValue={70} colorScheme="indigo">
          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
        </Slider>
      </VStack>
    </Box>
  );
};
