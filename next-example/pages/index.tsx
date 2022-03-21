import React from 'react';
import type { NextPage } from 'next';
import { Text } from 'react-native';
import { Box, Stack, Button } from 'native-base';

const Home: NextPage = () => {
  return (
    <Box
      bg={{
        linearGradient: {
          colors: ['lightBlue.300', 'violet.800', 'pink.800', 'lime.800'],
          start: [0, 0],
          end: [1, 1],
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

export default Home;
