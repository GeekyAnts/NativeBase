import React from 'react';
import { Divider, Heading, Box, Icon } from 'native-base';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

export const Example = () => {
  return (
    <Box w={190}>
      <Heading mx={3} d="flex" alignItems="center" flexDirection="row">
        Chrome <Icon ml="auto" as={<AntDesign name="chrome" />} />
      </Heading>
      <Divider my={2} />
      <Heading mx={3} d="flex" alignItems="center" flexDirection="row">
        Firefox {'  '}
        <Icon ml="auto" as={<FontAwesome name="firefox" />} />
      </Heading>
    </Box>
  );
};
