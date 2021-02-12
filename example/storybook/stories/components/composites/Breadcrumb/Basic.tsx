import React from 'react';
import { Breadcrumb, Box, Heading } from 'native-base';
export default function () {
  return (
    <Box>
      <Heading mb={4}>This is a Default Breadcrumb</Heading>
      <Breadcrumb>
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
}
