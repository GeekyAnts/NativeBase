import React from 'react';
import { Tabs } from 'native-base';

export const Example = () => {
  return (
    <Tabs>
      <Tabs.List>
        <Tabs.Tab value="btn1">Button1</Tabs.Tab>
        <Tabs.Tab value="btn2">Button2</Tabs.Tab>
        <Tabs.Tab value="btn3">Button3</Tabs.Tab>
        <Tabs.Tab value="btn4">Button4</Tabs.Tab>
      </Tabs.List>
      <Tabs.Contents h={200}>
        <Tabs.Body for="btn1">Body1</Tabs.Body>
        <Tabs.Body for="btn2" bg="red.300">
          <Tabs>
            <Tabs.Contents>
              <Tabs.Body for="btn1">Body1</Tabs.Body>
              <Tabs.Body for="btn2" bg="indigo.300">
                Body2
              </Tabs.Body>
            </Tabs.Contents>
            <Tabs.List>
              <Tabs.Tab value="btn1">Button1</Tabs.Tab>
              <Tabs.Tab value="btn2">Button2</Tabs.Tab>
            </Tabs.List>
          </Tabs>
        </Tabs.Body>
        <Tabs.Body for="btn3" bg="pink.300">
          Body3
        </Tabs.Body>
        <Tabs.Body for="btn4" bg="yellow.300">
          Body4
        </Tabs.Body>
      </Tabs.Contents>
    </Tabs>
  );
};
