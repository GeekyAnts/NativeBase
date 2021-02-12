import React from 'react';
import { Breadcrumb, Box, Heading, Icon } from 'native-base';
export default function () {
  return (
    <Box>
      <Heading mb={4}>Breadcrumb Composition</Heading>
      <Breadcrumb spacing={2} fontSize="lg">
        <Breadcrumb.Item>
          <Breadcrumb.Link>
            <Icon name="home" mr={1} />
            Home
          </Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="https://alpha.nativebase.io/" isExternal>
            <Icon name="file-document" type="MaterialCommunityIcons" mr={1} />
            Docs
          </Breadcrumb.Link>
        </Breadcrumb.Item>

        <Breadcrumb.Item isCurrentPage>
          <Breadcrumb.Link
            href="https://github.com/GeekyAnts/nativebase"
            isExternal
          >
            <Icon name="github" type="AntDesign" mr={1} />
            Github (This is currently active)
          </Breadcrumb.Link>
        </Breadcrumb.Item>
      </Breadcrumb>
    </Box>
  );
}
