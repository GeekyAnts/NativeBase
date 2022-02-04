import React from 'react';
import {
  FormControl,
  Slider,
  VStack,
  WarningOutlineIcon,
  Box,
} from 'native-base';

export const Example = () => {
  return (
    <Box alignItems="center" w="100%">
      <VStack space={4} w="75%" maxW="300">
        <FormControl isInvalid>
          <FormControl.Label>Set your budget</FormControl.Label>
          <Slider defaultValue={50}>
            <Slider.Track>
              <Slider.FilledTrack />
            </Slider.Track>
            <Slider.Thumb />
          </Slider>
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Something is wrong.
          </FormControl.ErrorMessage>
        </FormControl>
      </VStack>
    </Box>
  );
};
