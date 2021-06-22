import React from 'react';
import { VStack, Tabs } from 'native-base';

export const Example = () => {
  return (
    <VStack width="100%" p={3} space={7}>
      {/* Small Tabs */}
      <Tabs size="sm">
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
      {/* Medium Tabs (default) */}
      <Tabs size="md">
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
      {/* Large Tabs (default) */}
      <Tabs size="lg">
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
