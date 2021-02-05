import React from 'react';
import { List, Heading, Box, ListIcon, Li } from 'native-base';

export default function () {
  return (
    <Box height="50%">
      <Heading color="indigo.500">List with Icons</Heading>
      <List mt={2} fontSize={24} spacing={4}>
        <Li>
          <ListIcon
            name="check-circle-outline"
            color="green.400"
            type="MaterialIcons"
          />
          Server went up
        </Li>
        <Li>
          <ListIcon name="cancel" color="red.400" type="MaterialIcons" />
          Server went down
        </Li>
        <Li>
          <ListIcon name="equalizer" type="MaterialIcons" />
          Graphs and stats
        </Li>
        <Li>
          <ListIcon name="attach-file" color="gray.400" type="MaterialIcons" />
          Attachments
        </Li>
      </List>
    </Box>
  );
}
