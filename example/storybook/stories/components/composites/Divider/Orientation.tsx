import React from 'react';
import { Divider, Flex, Box, Heading, Icon } from 'native-base';

export default function () {
  return (
    <Box w={160}>
      <Heading mx={3}>Browser</Heading>
      <Divider my={2} />
      <Flex mx={3} direction="row" justify="space-evenly">
        <Icon type="AntDesign" name="chrome" />
        <Divider orientation="vertical" />
        <Icon type="FontAwesome" name="firefox" />
      </Flex>
    </Box>
  );
}
