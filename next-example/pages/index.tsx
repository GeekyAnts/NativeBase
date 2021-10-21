import React from 'react';
import type { NextPage } from 'next';
import { Text } from 'react-native';
import { Box } from 'native-base';

const Home: NextPage = () => {
  return (
    <Box bg={{ sm: 'black', md: 'pink.800' }} width={[10, 200]}>
      <Text>hi</Text>
    </Box>
  );
};

export default Home;
