import React from 'react';
import { Box, Heading, Tabs, Text } from 'native-base';

export default function () {
  return (
    <Box width="100%" p={3}>
      <Heading>This is an example for Tabs</Heading>
      <Tabs my={10}>
        <Tabs.Bar>
          <Tabs.Tab>One</Tabs.Tab>
          <Tabs.Tab>Two</Tabs.Tab>
          <Tabs.Tab>Three</Tabs.Tab>
        </Tabs.Bar>
        <Tabs.Views>
          <Tabs.View>One</Tabs.View>
          <Tabs.View>Two</Tabs.View>
          <Tabs.View>Three</Tabs.View>
        </Tabs.Views>
      </Tabs>
      <Text>To show how tabs behaves around other components.</Text>
    </Box>
  );
}
