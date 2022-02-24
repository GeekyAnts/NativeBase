import React from 'react';
import { Tabs } from 'native-base';

export const Example = () => {
  return (
    <Tabs>
      <Tabs.List>
        <Tabs.Tab>Button1</Tabs.Tab>
        <Tabs.Tab>Button2</Tabs.Tab>
      </Tabs.List>
      <Tabs.Contents>
        <Tabs.Body>Body1</Tabs.Body>
        <Tabs.Body>Body2</Tabs.Body>
      </Tabs.Contents>
    </Tabs>
  );
};
