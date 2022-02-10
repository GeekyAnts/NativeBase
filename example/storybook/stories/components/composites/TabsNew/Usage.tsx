import React from 'react';
import { Tabs } from 'native-base';

export const Example = () => {
  return (
    <Tabs>
      <Tabs.List>
        <Tabs.Tab>Button1</Tabs.Tab>
        <Tabs.Tab>Button2</Tabs.Tab>
        <Tabs.Tab>Button3</Tabs.Tab>
        <Tabs.Tab>Button4</Tabs.Tab>
      </Tabs.List>
      <Tabs.Contents>
        <Tabs.Body h={200}>Body1</Tabs.Body>
        <Tabs.Body bg="red.300">
          <Tabs>
            <Tabs.Contents>
              <Tabs.Body h={100}>BodyBody1</Tabs.Body>
              <Tabs.Body h={100}>BodyBody2</Tabs.Body>
            </Tabs.Contents>
            <Tabs.List>
              <Tabs.Tab>Button1</Tabs.Tab>
              <Tabs.Tab>Button2</Tabs.Tab>
            </Tabs.List>
          </Tabs>
        </Tabs.Body>
        <Tabs.Body bg="pink.300" h={200}>
          Body3
        </Tabs.Body>
        <Tabs.Body bg="yellow.300" h={200}>
          Body4
        </Tabs.Body>
      </Tabs.Contents>
    </Tabs>
  );
};
