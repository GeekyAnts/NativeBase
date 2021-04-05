import React from 'react';
import { Tabs } from 'native-base';

export default function () {
  return (
    <Tabs>
      <Tabs.Bar>
        <Tabs.Tab>TAB ONE</Tabs.Tab>
        <Tabs.Tab>TAB TWO</Tabs.Tab>
        <Tabs.Tab>TAB THREE</Tabs.Tab>
      </Tabs.Bar>
      <Tabs.Views>
        <Tabs.View>One</Tabs.View>
        <Tabs.View>Two</Tabs.View>
        <Tabs.View>Three</Tabs.View>
      </Tabs.Views>
    </Tabs>
  );
}
