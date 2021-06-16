import React from 'react';
import { Slider, Icon, Box } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

export const Example = () => {
  return (
    <Box mx={5} width="80%">
      <Slider defaultValue={70} size="lg" colorScheme="orange">
        <Slider.Track bg="orange.100">
          <Slider.FilledTrack bg="green.400" />
        </Slider.Track>
        <Slider.Thumb borderWidth={0} bg="gray.200">
          <Icon as={MaterialIcons} name="park" color="green.500" />
        </Slider.Thumb>
      </Slider>
    </Box>
  );
};
