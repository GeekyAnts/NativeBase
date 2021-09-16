import React, { useState } from 'react';
import { Breadcrumb, Box, Heading, HStack, Button } from 'native-base';
import {
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
} from '@expo/vector-icons';

export const Example = () => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <>
      <Box>
        <Heading mb={4}>Breadcrumb Collapsible</Heading>
        <Breadcrumb
          mt={3}
          spacing={2}
          _button={{ bg: 'transparent' }}
          maxItems={1}
          isCollapsed={collapsed}
          onCollapseChange={() => {
            setCollapsed(!collapsed);
          }}
        >
          <Breadcrumb.Item>
            <Breadcrumb.Link>
              <HStack>
                <Breadcrumb.Icon
                  as={<MaterialIcons name="home" />}
                  mr={1}
                  size="xs"
                  _current={{ color: 'blue.500' }}
                />
                <Breadcrumb.Text _current={{ color: 'blue.500' }}>
                  Home
                </Breadcrumb.Text>
              </HStack>
            </Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Breadcrumb.Link>
              <HStack>
                <Breadcrumb.Icon
                  as={<MaterialIcons name="home" />}
                  mr={1}
                  size="xs"
                  _current={{ color: 'blue.500' }}
                />
                <Breadcrumb.Text _current={{ color: 'blue.500' }}>
                  Discord
                </Breadcrumb.Text>
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
                  _current={{ color: 'red.500' }}
                />
                <Breadcrumb.Text _current={{ color: 'red.500' }}>
                  Github (This is currently active)
                </Breadcrumb.Text>
              </HStack>
            </Breadcrumb.Link>
          </Breadcrumb.Item>
        </Breadcrumb>
      </Box>
      <Box mt={3}>
        <Button
          variant="outline"
          colorScheme="gray"
          p={3}
          borderWidth={0}
          onPress={() => {
            setCollapsed(!collapsed);
          }}
        >
          {collapsed ? 'Expand' : 'Collapse'}
        </Button>
      </Box>
    </>
  );
};
