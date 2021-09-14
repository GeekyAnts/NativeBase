import React from 'react';
import { Button, Divider, Heading, VStack, Stack } from 'native-base';

export const Example = () => {
  return (
    <VStack space={4} px="2" w="100%" alignItems="center">
      {/* Solid */}
      <Heading size="sm">Solid</Heading>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        space={2}
        mx={{ base: 'auto', md: '0' }}
      >
        <Button
          size="sm"
          //  onPress={() => console.log('hello world')}
        >
          PRIMARY
        </Button>
        <Button
          size="sm"
          colorScheme="secondary"
          // onPress={() => console.log('hello world')}
        >
          SECONDARY
        </Button>
        <Button
          size="sm"
          isDisabled
          // onPress={() => console.log('hello world')}
        >
          DISABLED
        </Button>
      </Stack>

      <Divider />

      <Heading size="sm">Subtle</Heading>

      {/* Subtle */}
      <Stack
        direction={{ base: 'column', md: 'row' }}
        space={2}
        mx={{ base: 'auto', md: '0' }}
      >
        <Button
          size="sm"
          variant="subtle"
          // onPress={() => console.log('hello world')}
        >
          PRIMARY
        </Button>
        <Button
          size="sm"
          variant="subtle"
          colorScheme="secondary"
          // onPress={() => console.log('hello world')}
        >
          SECONDARY
        </Button>
        <Button
          size="sm"
          variant="subtle"
          isDisabled
          // onPress={() => console.log('hello world')}
        >
          DISABLED
        </Button>
      </Stack>
      <Divider />
      <Heading size="sm">Outline</Heading>

      {/* Outline */}
      <Stack
        direction={{ base: 'column', md: 'row' }}
        space={2}
        mx={{ base: 'auto', md: '0' }}
      >
        <Button
          size="sm"
          variant="outline"
          // onPress={() => console.log('hello world')}
        >
          PRIMARY
        </Button>
        <Button
          size="sm"
          variant="outline"
          colorScheme="secondary"
          // onPress={() => console.log('hello world')}
        >
          SECONDARY
        </Button>
        <Button
          size="sm"
          variant="outline"
          isDisabled
          // onPress={() => console.log('hello world')}
        >
          DISABLED
        </Button>
      </Stack>
      <Divider />

      <Heading size="sm">Link</Heading>

      {/* Link */}
      <Stack
        direction={{ base: 'column', md: 'row' }}
        space={2}
        mx={{ base: 'auto', md: '0' }}
      >
        <Button
          size="sm"
          variant="link"
          // onPress={() => console.log('hello world')}
        >
          PRIMARY
        </Button>
        <Button
          size="sm"
          variant="link"
          colorScheme="secondary"
          // onPress={() => console.log('hello world')}
        >
          SECONDARY
        </Button>
        <Button
          size="sm"
          variant="link"
          isDisabled
          // onPress={() => console.log('hello world')}
        >
          DISABLED
        </Button>
      </Stack>
      <Divider />

      <Heading size="sm">Ghost</Heading>

      {/* Ghost */}
      <Stack
        direction={{ base: 'column', md: 'row' }}
        space={2}
        mx={{ base: 'auto', md: '0' }}
      >
        <Button
          size="sm"
          variant="ghost"
          // onPress={() => console.log('hello world')}
        >
          PRIMARY
        </Button>
        <Button
          size="sm"
          variant="ghost"
          colorScheme="secondary"
          // onPress={() => console.log('hello world')}
        >
          SECONDARY
        </Button>
        <Button
          size="sm"
          variant="ghost"
          isDisabled
          // onPress={() => console.log('hello world')}
        >
          DISABLED
        </Button>
      </Stack>

      <Divider />

      <Heading size="sm">Unstyled</Heading>

      {/* Unstyled */}
      <Stack
        direction={{ base: 'column', md: 'row' }}
        space={2}
        mx={{ base: 'auto', md: '0' }}
      >
        <Button
          variant="unstyled"
          // onPress={() => console.log('hello world')}
        >
          Unstyled
        </Button>
      </Stack>
    </VStack>
  );
};
