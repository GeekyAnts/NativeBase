//@ts-nocheck
import React from 'react';
import {
  Stack,
  Center,
  Heading,
  ScrollView,
  VStack,
  Divider,
} from 'native-base';

export function Example() {
  return (
    <ScrollView>
      <VStack space="6">
        <Heading>row</Heading>
        <Stack direction="row" space={3}>
          <Center
            size="16"
            bg="primary.400"
            rounded="md"
            _text={{ color: 'white' }}
            shadow={3}
          >
            Box 1
          </Center>
          <Center
            bg="secondary.400"
            size="16"
            rounded="md"
            _text={{ color: 'white' }}
            shadow={3}
          >
            Box 2
          </Center>
          <Center
            size="16"
            bg="emerald.400"
            rounded="md"
            _text={{ color: 'white' }}
            shadow={3}
          >
            Box 3
          </Center>
        </Stack>
        <Divider />
        <Heading>column</Heading>
        <Stack direction="column" space={3}>
          <Center
            size="16"
            bg="primary.400"
            rounded="md"
            _text={{ color: 'white' }}
            shadow={3}
          >
            Box 1
          </Center>
          <Center
            bg="secondary.400"
            size="16"
            rounded="md"
            _text={{ color: 'white' }}
            shadow={3}
          >
            Box 2
          </Center>
          <Center
            size="16"
            bg="emerald.400"
            rounded="md"
            _text={{ color: 'white' }}
            shadow={3}
          >
            Box 3
          </Center>
        </Stack>
        <Divider />
        <Heading>row-reverse</Heading>
        <Stack direction="row" reversed space={3}>
          <Center
            size="16"
            bg="primary.400"
            rounded="md"
            _text={{ color: 'white' }}
            shadow={3}
          >
            Box 1
          </Center>
          <Center
            bg="secondary.400"
            size="16"
            rounded="md"
            _text={{ color: 'white' }}
            shadow={3}
          >
            Box 2
          </Center>
          <Center
            size="16"
            bg="emerald.400"
            rounded="md"
            _text={{ color: 'white' }}
            shadow={3}
          >
            Box 3
          </Center>
        </Stack>
        <Divider />
        <Heading>column-reverse</Heading>
        <Stack direction="column-reverse" space={3}>
          <Center
            size="16"
            bg="primary.400"
            rounded="md"
            _text={{ color: 'white' }}
            shadow={3}
          >
            Box 1
          </Center>
          <Center
            bg="secondary.400"
            size="16"
            rounded="md"
            _text={{ color: 'white' }}
            shadow={3}
          >
            Box 2
          </Center>
          <Center
            size="16"
            bg="emerald.400"
            rounded="md"
            _text={{ color: 'white' }}
            shadow={3}
          >
            Box 3
          </Center>
        </Stack>
        <Divider />
      </VStack>
    </ScrollView>
  );
}
