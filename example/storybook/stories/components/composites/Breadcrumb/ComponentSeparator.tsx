import React from 'react';
import { Breadcrumb, Box, Heading, Icon } from 'native-base';
export const Example = () => {
  return (
    <Box>
      <Heading mb={4}>Breadcrumb with Custom Separator</Heading>
      <Breadcrumb
        spacing={1}
        separator={<Icon name="keyboard-arrow-right" size={5} />}
      >
        <Breadcrumb.Item isCurrentPage>
          <Breadcrumb.Link>Home (This is currently active)</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="https://alpha.nativebase.io/" isExternal>
            Docs
          </Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Breadcrumb.Link
            href="https://github.com/GeekyAnts/nativebase"
            isExternal
          >
            Github
          </Breadcrumb.Link>
        </Breadcrumb.Item>
      </Breadcrumb>
    </Box>
  );
};
