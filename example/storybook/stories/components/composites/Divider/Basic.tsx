import React from 'react';
import { Divider, Heading, Box, Icon } from 'native-base';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

export const Example = () => {
  return (
    <Box w={190}>
      <Heading mx={3}>
        Chrome <Icon ml="auto" as={<AntDesign name="chrome" />} />
      </Heading>
      <Divider my={2} />
      <Heading mx={3}>
        Firefox {'  '}
        <Icon ml="auto" as={<FontAwesome name="firefox" />} />
      </Heading>
    </Box>
  );
};
