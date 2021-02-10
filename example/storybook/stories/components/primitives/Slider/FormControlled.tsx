import React from 'react';
import {
  FormControl,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  VStack,
} from 'native-base';

export default function () {
  return (
    <VStack space={4} mx={10} width="80%">
      <FormControl isRequired isInvalid isDisabled>
        <FormControl.Label>Just Slide</FormControl.Label>
        <Slider defaultValue={50}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
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
}
