import React from 'react';
import { Breadcrumb, Box, Heading, Icon, Text, HStack } from 'native-base';
export default function () {
  return (
    <Box>
      <Heading mb={4}>Breadcrumb Composition</Heading>
      <Breadcrumb spacing={2} fontSize="lg">
        <Breadcrumb.Item>
          <Breadcrumb.Link>
            <HStack>
              <Icon name="home" mr={1} />
              <Text>Home</Text>
            </HStack>
          </Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="https://alpha.nativebase.io/" isExternal>
            <HStack>
              <Icon name="file-document" type="MaterialCommunityIcons" mr={1} />
              <Text>Docs</Text>
            </HStack>
          </Breadcrumb.Link>
        </Breadcrumb.Item>

        <Breadcrumb.Item isCurrentPage>
          <Breadcrumb.Link
            href="https://github.com/GeekyAnts/nativebase"
            isExternal
          >
            <HStack>
              <Icon name="github" type="AntDesign" mr={1} />
              <Text>Github (This is currently active)</Text>
            </HStack>
          </Breadcrumb.Link>
        </Breadcrumb.Item>
      </Breadcrumb>
    </Box>
  );
}
