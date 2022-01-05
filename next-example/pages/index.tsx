import React from 'react';
import type { NextPage } from 'next';
import { Text } from 'react-native';
import { Box, Stack } from 'native-base';

const Home: NextPage = () => {
  return (
    <Stack space={[20, 40, 80]} direction={['column', 'column', 'row']}>
      <Text>hi</Text>
      <Box boxSize="20" bg="red.100"></Box>
    </Stack>
  );
};

export default Home;
