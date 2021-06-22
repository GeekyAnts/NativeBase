import React from 'react';
import { Tabs, Text } from 'native-base';

export const Example = () => {
  const [index, setIndex] = React.useState(0);

  return (
    <Tabs index={index} onChange={setIndex}>
      <Tabs.Bar>
        <Tabs.Tab>One</Tabs.Tab>
        <Tabs.Tab accessibilityLabel="two">
          <Text color="red.500">Two</Text>
        </Tabs.Tab>
        <Tabs.Tab accessibilityLabel="three">Three</Tabs.Tab>
      </Tabs.Bar>
      <Tabs.Views>
        <Tabs.View>One</Tabs.View>
        <Tabs.View>Two</Tabs.View>
        <Tabs.View>Three</Tabs.View>
      </Tabs.Views>
    </Tabs>
  );
};
