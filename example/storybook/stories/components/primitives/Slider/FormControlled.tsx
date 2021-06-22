import React from 'react';
import { FormControl, Slider, VStack } from 'native-base';

export const Example = () => {
  return (
    <VStack space={4} mx={10} width="80%">
      <FormControl isRequired isInvalid isDisabled>
        <FormControl.Label>Just Slide</FormControl.Label>
        <Slider defaultValue={50}>
          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
        </Slider>
        <FormControl.HelperText>
          We'll keep this between us.
        </FormControl.HelperText>
        <FormControl.ErrorMessage>
          Don't worry, it's just an example.
        </FormControl.ErrorMessage>
      </FormControl>
    </VStack>
  );
};
