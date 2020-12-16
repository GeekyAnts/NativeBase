import React from 'react';
import { VStack, Tabs, TabBar, TabViews, Tab, TabView } from 'native-base';

export default function () {
  return (
    <VStack width="100%" p={3} space={7}>
      <Tabs colorScheme="danger">
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
      <Tabs colorScheme="warning">
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
      <Tabs colorScheme="teal">
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
      <Tabs colorScheme="orange">
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
      <Tabs colorScheme="info">
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
    </VStack>
  );
}
