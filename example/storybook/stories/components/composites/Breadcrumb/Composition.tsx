import React from 'react';
import { Breadcrumb, Box, Heading, HStack } from 'native-base';
import {
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
} from '@expo/vector-icons';

export const Example = () => {
  return (
    <Box>
      <Heading mb={4}>Breadcrumb Composition</Heading>
      <Breadcrumb spacing={2} fontSize="lg" _button={{ bg: 'transparent' }}>
        <Breadcrumb.Item isCurrent>
          <Breadcrumb.Link>
            <HStack>
              <Breadcrumb.Icon
                as={MaterialIcons}
                name="home"
                mr={1}
                size="xs"
              />
              <Breadcrumb.Text>Home</Breadcrumb.Text>
            </HStack>
          </Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="https://alpha.nativebase.io/" isExternal>
            <Breadcrumb.Icon
              fontWeight={'bold'}
              as={MaterialCommunityIcons}
              name="file-document"
              mr={1}
              size="xs"
            />
            <Breadcrumb.Text>Docs</Breadcrumb.Text>
          </Breadcrumb.Link>
        </Breadcrumb.Item>

        <Breadcrumb.Item>
          <Breadcrumb.Link
            href="https://github.com/GeekyAnts/nativebase"
            isExternal
          >
            <HStack>
              <Breadcrumb.Icon as={AntDesign} name="github" mr={1} size="xs" />
              <Breadcrumb.Text>Github</Breadcrumb.Text>
            </HStack>
          </Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Breadcrumb.Link
            href="https://github.com/GeekyAnts/nativebase"
            isExternal
          >
            <HStack>
              <Breadcrumb.Icon as={AntDesign} name="github" mr={1} size="xs" />
              <Breadcrumb.Text>Discord</Breadcrumb.Text>
            </HStack>
          </Breadcrumb.Link>
        </Breadcrumb.Item>
      </Breadcrumb>
    </Box>
  );
};
