import React from 'react';
import { List, Heading, Box, SearchIcon } from 'native-base';

export const Example = () => {
  return (
    <Box height="50%" width="80%">
      <Heading>List with Icons</Heading>
      <List mt={2} my={2}>
        <List.Item>
          <List.Icon as={SearchIcon} />
          Inbox
        </List.Item>
        <List.Item>
          <List.Icon as={SearchIcon} />
          Drafts
        </List.Item>
        <List.Item>
          <List.Icon as={SearchIcon} />
          Graphs and stats
        </List.Item>
        <List.Item>
          <List.Icon as={SearchIcon} />
          Attachments
        </List.Item>
      </List>
    </Box>
  );
};
