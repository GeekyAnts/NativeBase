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
    <ScrollView showsVerticalScrollIndicator={false} px="3">
      <VStack
        w="100%"
        space={4}
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
          <Button size="sm">PRIMARY</Button>
          <Button size="sm" colorScheme="secondary">
            SECONDARY
          </Button>
          <Button size="sm" isDisabled>
            DISABLED
          </Button>
        </Stack>

        <Divider w="100%" />

        <Heading size="md">Subtle</Heading>

        {/* Subtle */}
        <Stack
          mb="2.5"
          mt="1.5"
          direction={{ base: 'column', md: 'row' }}
          space={2}
          mx={{ base: 'auto', md: '0' }}
        >
          <Button size="sm" variant="subtle">
            PRIMARY
          </Button>
          <Button size="sm" variant="subtle" colorScheme="secondary">
            SECONDARY
          </Button>
          <Button size="sm" variant="subtle" isDisabled>
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
          <Button size="sm" variant="outline">
            PRIMARY
          </Button>
          <Button size="sm" variant="outline" colorScheme="secondary">
            SECONDARY
          </Button>
          <Button size="sm" variant="outline" isDisabled>
            DISABLED
          </Button>
        </Stack>
        <Divider w="100%" />

        <Heading size="md">Link</Heading>

        {/* Link */}
        <Stack
          mb="2.5"
          mt="1.5"
          direction={{ base: 'column', md: 'row' }}
          space={2}
          mx={{ base: 'auto', md: '0' }}
        >
          <Button size="sm" variant="link">
            PRIMARY
          </Button>
          <Button size="sm" variant="link" colorScheme="secondary">
            SECONDARY
          </Button>
          <Button size="sm" variant="link" isDisabled>
            DISABLED
          </Button>
        </Stack>
        <Divider w="100%" />

        <Heading size="md">Ghost</Heading>

        {/* Ghost */}
        <Stack
          mb="2.5"
          mt="1.5"
          direction={{ base: 'column', md: 'row' }}
          space={2}
          mx={{ base: 'auto', md: '0' }}
        >
          <Button size="sm" variant="ghost">
            PRIMARY
          </Button>
          <Button size="sm" variant="ghost" colorScheme="secondary">
            SECONDARY
          </Button>
          <Button size="sm" variant="ghost" isDisabled>
            DISABLED
          </Button>
        </Stack>

        <Divider w="100%" />

        <Heading size="md">Unstyled</Heading>

        {/* Unstyled */}
        <Stack
          mb="2.5"
          mt="1.5"
          direction={{ base: 'column', md: 'row' }}
          space={2}
          mx={{ base: 'auto', md: '0' }}
        >
          <Button variant="unstyled">Unstyled</Button>
        </Stack>
      </VStack>
    </ScrollView>
  );
};
