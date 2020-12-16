import React from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  VStack,
} from 'native-base';

export default function () {
  return (
    <VStack space={4} mx={10}>
      <FormControl isRequired isInvalid isDisabled>
        <FormLabel>Just Slide</FormLabel>
        <Slider defaultValue={50}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <FormHelperText>We'll keep this between us.</FormHelperText>
        <FormErrorMessage>Don't worry, it's just an example.</FormErrorMessage>
      </FormControl>
    </VStack>
  );
}
