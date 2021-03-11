import React from 'react';
import { Slider, Text, Box, Button } from 'native-base';

export default function () {
  const [onChangeValue, setOnChangeValue] = React.useState(70);
  const [onChangeEndValue, setOnChangeEndValue] = React.useState(70);
  return (
    <Box mx={5} alignItems="center" w="100%">
      <Text>onChangeValue - {onChangeValue}</Text>
      <Text mt={4}>onChangeEndValue - {onChangeEndValue}</Text>

      <Box mx={5} width="80%" mt={4}>
        <Slider
          defaultValue={70}
          value={onChangeValue}
          colorScheme="amber"
          onChange={(v: any) => {
            setOnChangeValue(Math.floor(v));
          }}
          onChangeEnd={(v: any) => {
            v && setOnChangeEndValue(Math.floor(v));
          }}
        >
          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
        </Slider>
      </Box>
      <Button
        onPress={() => {
          setOnChangeValue(0);
        }}
        colorScheme="dark"
      >
        Reset
      </Button>
    </Box>
  );
}
