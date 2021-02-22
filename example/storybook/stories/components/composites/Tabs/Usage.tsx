import React from 'react';
import { Tabs } from 'native-base';

export default function () {
  return (
    <Tabs>
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
  );
}
