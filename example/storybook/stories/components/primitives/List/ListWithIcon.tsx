import React from 'react';
import { List } from 'native-base';
import { SimpleLineIcons, Ionicons } from '@expo/vector-icons';
export const Example = () => {
  return (
    <List mt={2} my={2} width={80}>
      <List.Item>
        {/* <List.Icon as={<SearchIcon />} /> */}
        Inbox
      </List.Item>
      <List.Item>
        <List.Icon as={SimpleLineIcons} name="docs" />
        Drafts
      </List.Item>
      <List.Item>
        <List.Icon as={Ionicons} name="stats-chart-outline" />
        Graphs and stats
      </List.Item>
      <List.Item>
        <List.Icon as={Ionicons} name="attach" />
        Attachments
      </List.Item>
    </List>
  );
};
