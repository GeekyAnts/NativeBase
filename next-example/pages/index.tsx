import React from 'react';
import type { NextPage } from 'next';
import { Text } from 'react-native';
import { Box } from 'native-base';

const Home: NextPage = () => {
  return (
    <Box bg={{ base: 'gray.500', md: 'white', lg: 'pink.800' }}>
      <Text>hi</Text>
    </Box>
  );
};

export default Home;
