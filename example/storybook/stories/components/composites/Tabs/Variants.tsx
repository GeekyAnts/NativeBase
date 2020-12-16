import React from 'react';
import { VStack, Tabs, TabBar, TabViews, Tab, TabView } from 'native-base';

export default function () {
  return (
    <VStack width="100%" p={3} space={7}>
      <Tabs variant="line">
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
      <Tabs variant="enclosed">
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
      <Tabs variant="enclosed-colored">
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
      <Tabs variant="soft-rounded">
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
      <Tabs variant="solid-rounded">
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
