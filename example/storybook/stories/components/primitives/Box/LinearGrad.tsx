import { Box } from 'native-base';
import React from 'react';
export const Example = () => {
  return (
    <Box
      bg={{
        linearGradient: {
          colors: ['lightBlue.300', 'violet.800'],
          start: [0, 0],
          end: [1, 0],
        },
      }}
      p="12"
      w="72"
      rounded="xl"
      _text={{
        fontSize: 'md',
        fontWeight: 'medium',
        color: 'warmGray.50',
        textAlign: 'center',
      }}
    >
      This is a Box with Linear Gradient
    </Box>
  );
};

export const ExampleWithAngle = () => {
  return (
    <Box
      bg={{
        linearGradient: {
          colors: ['lightBlue.300', 'violet.800'],
          angle: 45,
          angleCenter: { x: 0.5, y: 0.5},
        },
      }}
      p="12"
      w="72"
      rounded="xl"
      _text={{
        fontSize: 'md',
        fontWeight: 'medium',
        color: 'warmGray.50',
        textAlign: 'center',
      }}
    >
      This is a Box with Linear Gradient using angle props
    </Box>
  );
}
