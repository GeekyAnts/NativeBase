import React from 'react';
import { List, Heading, Box } from 'native-base';

export default function () {
  return (
    <Box height="50%">
      <Heading color="indigo.500">List with Icons</Heading>
      <List mt={2} fontSize={24} spacing={4}>
        <List.Item>
          <List.Icon
            name="check-circle-outline"
            color="green.400"
            type="MaterialIcons"
          />
          Server went up
        </List.Item>
        <List.Item>
          <List.Icon name="cancel" color="red.400" type="MaterialIcons" />
          Server went down
        </List.Item>
        <List.Item>
          <List.Icon name="equalizer" type="MaterialIcons" />
          Graphs and stats
        </List.Item>
        <List.Item>
          <List.Icon name="attach-file" color="gray.400" type="MaterialIcons" />
          Attachments
        </List.Item>
      </List>
    </Box>
  );
}
