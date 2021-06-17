import React from 'react';
import { List, SearchIcon } from 'native-base';

export const Example = () => {
  return (
    <List mt={2} my={2}>
      <List.Item>
        {/* <List.Icon as={<SearchIcon />} /> */}
        Inbox
      </List.Item>
      <List.Item>
        <List.Icon as={<SearchIcon />} />
        Drafts
      </List.Item>
      <List.Item>
        <List.Icon as={<SearchIcon />} />
        Graphs and stats
      </List.Item>
      <List.Item>
        <List.Icon as={<SearchIcon />} />
        Attachments
      </List.Item>
    </List>
  );
};
