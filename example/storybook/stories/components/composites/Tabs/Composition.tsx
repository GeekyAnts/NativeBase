import React from 'react';
import {
  Box,
  Heading,
  Tabs,
  TabBar,
  TabViews,
  Tab,
  TabView,
  Text,
} from 'native-base';

export default function () {
  return (
    <Box width="100%" p={3}>
      <Heading>This is an example for Tabs</Heading>
      <Tabs my={10}>
        <TabBar>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabBar>
        <TabViews>
          <TabView>One</TabView>
          <TabView>Two</TabView>
          <TabView>Three</TabView>
        </TabViews>
      </Tabs>
      <Text>To show how tabs behaves around other components.</Text>
    </Box>
  );
}
