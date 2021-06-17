import React from 'react';
import { Divider, Flex, Box, Heading, Icon } from 'native-base';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

export const Example = () => {
  return (
    <Box w={160}>
      <Heading mx="auto">Browser</Heading>
      <Divider my={2} />
      <Flex mx={3} direction="row" justify="space-evenly">
        <Icon as={<AntDesign name="chrome" />} />
        <Divider orientation="vertical" />
        <Icon as={<FontAwesome name="firefox" />} />
      </Flex>
    </Box>
  );
};
