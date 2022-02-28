import React from 'react';
import { Tabs } from 'native-base';

export const Example = () => {
  return (
    <Tabs>
      <Tabs.Bar>
        <Tabs.Item>Button1</Tabs.Item>
        <Tabs.Item>Button2</Tabs.Item>
      </Tabs.Bar>
      <Tabs.Contents>
        <Tabs.Body>Body1</Tabs.Body>
        <Tabs.Body>Body2</Tabs.Body>
      </Tabs.Contents>
    </Tabs>
  );
};
