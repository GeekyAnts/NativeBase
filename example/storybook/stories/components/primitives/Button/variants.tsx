import React from 'react';
import {
  Button,
  Divider,
  Heading,
  VStack,
  Stack,
  ScrollView,
} from 'native-base';

export const Example = () => {
  return (
    <ScrollView px="32">
      <VStack
        w="100%"
        space={2.5}
        px="2"
        mt="4"
        alignItems="center"
        justifyContent="center"
      >
        {/* Solid */}
        <Heading size="md">Solid</Heading>
        <Stack
          mb="2.5"
          mt="1.5"
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

        <Heading size="md">Subtle</Heading>

        {/* Subtle */}
        <Stack
          mb="2.5"
          mt="1.5"
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
        <Heading size="md">Outline</Heading>

        {/* Outline */}
        <Stack
          mb="2.5"
          mt="1.5"
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

        <Heading size="md">Link</Heading>

        {/* Link */}
        <Stack
          mb="2.5"
          mt="1.5"
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

        <Heading size="md">Ghost</Heading>

        {/* Ghost */}
        <Stack
          mb="2.5"
          mt="1.5"
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

        <Heading size="md">Unstyled</Heading>

        {/* Unstyled */}
        <Stack
          mb="2.5"
          mt="1.5"
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
    </ScrollView>
  );
};
