import React from 'react';
import { Slider, Stack, Text, Box } from 'native-base';

export const Example = () => {
  const [onChangeValue, setOnChangeValue] = React.useState(70);
  const [onChangeEndValue, setOnChangeEndValue] = React.useState(70);
  return (
    <Box alignItems="center" w="100%">
      <Stack space={4} alignItems="center" w="75%" maxW="300">
        <Text textAlign="center">onChangeValue - {onChangeValue}</Text>
        <Text textAlign="center">onChangeEndValue - {onChangeEndValue}</Text>
        <Slider
          defaultValue={70}
          colorScheme="cyan"
          onChange={(v) => {
            setOnChangeValue(Math.floor(v));
          }}
          onChangeEnd={(v) => {
            v && setOnChangeEndValue(Math.floor(v));
          }}
        >
          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
        </Slider>
      </Stack>
    </Box>
  );
};
