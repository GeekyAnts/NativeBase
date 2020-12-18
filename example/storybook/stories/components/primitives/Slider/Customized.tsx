import React from 'react';
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Icon,
  Box,
} from 'native-base';

export default function () {
  return (
    <Box mx={5} width="80%">
      <Slider defaultValue={70} colorScheme="purple">
        <SliderTrack bg="orange.100">
          <SliderFilledTrack bg="orange.400" />
        </SliderTrack>
        <SliderThumb>
          <Icon name="circle" type="MaterialIcons" />
        </SliderThumb>
      </Slider>
    </Box>
  );
}
