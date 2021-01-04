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
      <Slider defaultValue={70} colorScheme="orange">
        <SliderTrack bg="orange.100">
          <SliderFilledTrack bg="green.400" />
        </SliderTrack>
        <SliderThumb>
          <Icon name="park" type="MaterialIcons" color="green.500" />
        </SliderThumb>
      </Slider>
    </Box>
  );
}
