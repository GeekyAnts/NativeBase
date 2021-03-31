import React from 'react';
import { Tabs } from 'native-base';

export default function () {
  return (
    <Tabs isFitted>
      <Tabs.Bar>
        <Tabs.Tab>One</Tabs.Tab>
        <Tabs.Tab>Two</Tabs.Tab>
        <Tabs.Tab>Three</Tabs.Tab>
        <Tabs.Tab>Four</Tabs.Tab>
      </Tabs.Bar>
    </Tabs>
  );
}
