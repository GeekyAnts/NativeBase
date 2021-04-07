import React from 'react';
import { Divider, Heading, Box, Icon } from 'native-base';

export default function () {
  return (
    <Box>
      <Heading mx={3}>
        Chrome <Icon ml="auto" type="AntDesign" name="chrome" />
      </Heading>
      <Divider my={2} />
      <Heading mx={3}>
        Firefox {'  '}
        <Icon ml="auto" type="FontAwesome" name="firefox" />
      </Heading>
    </Box>
  );
}
