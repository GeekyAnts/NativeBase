import React from 'react';
import { Tabs, TabBar, TabViews, Tab, TabView } from 'native-base';

export default function () {
  return (
    <Tabs>
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
  );
}
