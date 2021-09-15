import React from 'react';
import { Slider, Icon, Box } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

export const Example = () => {
  return (
    <Box mx="5" width="80%">
      <Slider defaultValue={70} size="sm" colorScheme="green">
        <Slider.Track bg="green.100">
          <Slider.FilledTrack bg="green.600" />
        </Slider.Track>
        <Slider.Thumb borderWidth="0" bg="transparent">
          <Icon as={MaterialIcons} name="park" color="green.600" size="sm" />
        </Slider.Thumb>
      </Slider>
    </Box>
  );
};
