import React from 'react';
import { Breadcrumb, Box, Heading, HStack, Button } from 'native-base';
import {
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
} from '@expo/vector-icons';
import { useState } from 'react';

export const Example = () => {
  const [collapsed, setCollapse] = useState(true);

  return (
    <Box>
      <Heading mb={4}>Breadcrumb Collapsible</Heading>
      <Breadcrumb
        spacing={2}
        _button={{ bg: 'transparent' }}
        maxItems={1}
        isCollapsed={collapsed}
      >
        <Breadcrumb.Item isCurrent>
          <Breadcrumb.Link>
            <HStack>
              <Breadcrumb.Icon
                as={<MaterialIcons name="home" />}
                mr={1}
                size="xs"
              />
              <Breadcrumb.Text fontSize="lg">Home</Breadcrumb.Text>
            </HStack>
          </Breadcrumb.Link>
        </Breadcrumb.Item>
        ,
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
        ,
        <Breadcrumb.Item>
          <Breadcrumb.Link
            href="https://github.com/GeekyAnts/nativebase"
            isExternal
          >
            <HStack>
              <Breadcrumb.Icon
                as={<MaterialCommunityIcons name="file-document" />}
                mr={1}
                size="xs"
              />
              <Breadcrumb.Text>Discord</Breadcrumb.Text>
            </HStack>
          </Breadcrumb.Link>
        </Breadcrumb.Item>
        ,
        <Breadcrumb.Item isCurrent>
          <Breadcrumb.Link
            href="https://github.com/GeekyAnts/nativebase"
            isExternal
          >
            <HStack>
              <Breadcrumb.Icon
                as={<AntDesign name="github" />}
                mr={1}
                size="xs"
              />
              <Breadcrumb.Text>
                Github (This is currently active)
              </Breadcrumb.Text>
            </HStack>
          </Breadcrumb.Link>
        </Breadcrumb.Item>
      </Breadcrumb>
      <Button
        onPress={() => {
          setCollapse(false);
        }}
      >
        Click
      </Button>
    </Box>
  );
};
