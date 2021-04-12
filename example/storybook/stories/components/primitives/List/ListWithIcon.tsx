import React from 'react';
import { List, Heading, Box } from 'native-base';

export default function () {
  return (
    <Box height="50%" width="80%">
      <Heading>List with Icons</Heading>
      <List mt={2} my={2}>
        <List.Item>
          <List.Icon name="inbox" />
          Inbox
        </List.Item>
        <List.Item>
          <List.Icon name="mail-outline" />
          Drafts
        </List.Item>
        <List.Item>
          <List.Icon name="equalizer" type="MaterialIcons" />
          Graphs and stats
        </List.Item>
        <List.Item>
          <List.Icon name="attach-file" type="MaterialIcons" />
          Attachments
        </List.Item>
      </List>
    </Box>
  );
}
