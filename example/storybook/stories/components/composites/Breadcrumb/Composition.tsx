import React from 'react';
import { Breadcrumb, Box, Heading, Icon, Text, HStack } from 'native-base';
import {
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
} from '@expo/vector-icons';

export const Example = () => {
  return (
    <Box>
      <Heading mb={4}>Breadcrumb Composition</Heading>
      <Breadcrumb spacing={2} fontSize="lg">
        <Breadcrumb.Item>
          <Breadcrumb.Link>
            <HStack>
              <Icon as={<MaterialIcons name="home" />} mr={1} size="xs" />
              <Text>Home</Text>
            </HStack>
          </Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="https://alpha.nativebase.io/" isExternal>
            <HStack>
              <Icon
                as={<MaterialCommunityIcons name="file-document" />}
                mr={1}
                size="xs"
              />
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
              <Icon as={<AntDesign name="github" />} mr={1} size="xs" />
              <Text>Github (This is currently active)</Text>
            </HStack>
          </Breadcrumb.Link>
        </Breadcrumb.Item>
      </Breadcrumb>
    </Box>
  );
};
