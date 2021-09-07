import React from 'react';
import {
  Flex,
  Center,
  Heading,
  ScrollView,
  VStack,
  Divider,
} from 'native-base';

export function Example() {
  return (
    <ScrollView>
      <Center>
        <VStack space={6}>
          {/* flexDirection -> row */}
          <Heading>row</Heading>
          <Flex direction="row">
            <Center size="16" bg="primary.100" _text={{ color: 'gray.800' }}>
              100
            </Center>
            <Center size="16" bg="primary.200" _text={{ color: 'white' }}>
              200
            </Center>
            <Center bg="primary.300" size="16" _text={{ color: 'white' }}>
              300
            </Center>
            <Center size="16" bg="primary.400" _text={{ color: 'white' }}>
              400
            </Center>
          </Flex>
          <Divider />
          {/* flexDirection -> column */}
          <Heading>column</Heading>
          <Flex direction="column">
            <Center size="16" bg="primary.100" _text={{ color: 'gray.800' }}>
              100
            </Center>
            <Center size="16" bg="primary.200" _text={{ color: 'white' }}>
              200
            </Center>
            <Center bg="primary.300" size="16" _text={{ color: 'white' }}>
              300
            </Center>
            <Center size="16" bg="primary.400" _text={{ color: 'white' }}>
              400
            </Center>
          </Flex>
          <Divider />
          {/* flexDirection -> row-reverse */}
          <Heading>row-reverse</Heading>
          <Flex direction="row-reverse">
            <Center size="16" bg="primary.100" _text={{ color: 'gray.800' }}>
              100
            </Center>
            <Center size="16" bg="primary.200" _text={{ color: 'white' }}>
              200
            </Center>
            <Center bg="primary.300" size="16" _text={{ color: 'white' }}>
              300
            </Center>
            <Center size="16" bg="primary.400" _text={{ color: 'white' }}>
              400
            </Center>
          </Flex>
          <Divider />
          {/* flexDirection -> column-reverse */}
          <Heading>column-reverse</Heading>
          <Flex direction="column-reverse">
            <Center size="16" bg="primary.100" _text={{ color: 'gray.800' }}>
              100
            </Center>
            <Center size="16" bg="primary.200" _text={{ color: 'white' }}>
              200
            </Center>
            <Center bg="primary.300" size="16" _text={{ color: 'white' }}>
              300
            </Center>
            <Center size="16" bg="primary.400" _text={{ color: 'white' }}>
              400
            </Center>
          </Flex>
          <Divider />
        </VStack>
      </Center>
    </ScrollView>
  );
}
