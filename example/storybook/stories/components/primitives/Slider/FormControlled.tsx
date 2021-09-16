import React from 'react';
import { FormControl, Slider, VStack, WarningOutlineIcon } from 'native-base';

export const Example = () => {
  return (
    <VStack space={4} mx="10" width="80%">
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
  );
};
