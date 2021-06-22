import React from 'react';
import { Box, Tabs } from 'native-base';

export const Example = () => {
  return (
    <Box width="100%" p={3}>
      <Tabs>
        <Tabs.Bar>
          <Tabs.Tab>
            <Tabs.Icon />
            Home
          </Tabs.Tab>
          <Tabs.Tab>
            <Tabs.Icon name="book" />
            Bookmarks
          </Tabs.Tab>
          <Tabs.Tab>
            <Tabs.Icon name="camera" />
            Camera
          </Tabs.Tab>
        </Tabs.Bar>
        <Tabs.Views>
          <Tabs.View>Home</Tabs.View>
          <Tabs.View>Bookmarks</Tabs.View>
          <Tabs.View>Camera</Tabs.View>
        </Tabs.Views>
      </Tabs>
    </Box>
  );
};
