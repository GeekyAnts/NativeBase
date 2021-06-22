import React from 'react';
import { VStack, Tabs } from 'native-base';

export const Example = () => {
  return (
    <VStack width="100%" p={3} space={7}>
      <Tabs align="start">
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
      <Tabs align="center">
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
      <Tabs align="end">
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
    </VStack>
  );
};
