import React from 'react';
import { Tabs } from 'native-base';

export const Example = () => {
  return (
    <Tabs w="max">
      <Tabs.List>
        <Tabs.Tab value="btn1">Button1</Tabs.Tab>
        <Tabs.Tab value="btn2" isDisabled>
          Button2
        </Tabs.Tab>
        <Tabs.Tab value="btn3">Button3</Tabs.Tab>
        <Tabs.Tab value="btn4">Button4</Tabs.Tab>
      </Tabs.List>
      <Tabs.Contents>
        <Tabs.Body for="btn1">Body1</Tabs.Body>
        <Tabs.Body for="btn2">Body2</Tabs.Body>
        <Tabs.Body for="btn3">Body3</Tabs.Body>
        <Tabs.Body for="btn4">Body4</Tabs.Body>
      </Tabs.Contents>
    </Tabs>
  );
};
