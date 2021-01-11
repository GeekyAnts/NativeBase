import React from 'react';

import {
  Heading,
  useColorMode,
  Button,
  HStack,
  Avatar,
  useColorModeValue,
  VStack,
  Text,
  Checkbox,
  Box,
} from 'native-base';

export const Content = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <VStack m={4} space={4} flex={1} justifyContent="center">
      <Heading justifyContent="center" color="custom.200">
        NativeBase Team
      </Heading>
      <Box
        p={4}
        border={1}
        borderRadius="md"
        borderColor={useColorModeValue('gray.800', 'gray.50')}
      >
        <HStack alignItems="center" justifyContent="space-between">
          <Box flexDirection="row">
            <Avatar
              name="Ankur"
              borderWidth={1}
              mr={4}
              size="lg"
              source={{
                uri:
                  'https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg',
              }}
            />
            <VStack>
              <Heading>Ankur</Heading>
              <Text color="amber.400">Software Engineer</Text>
            </VStack>
          </Box>
          <Checkbox isChecked value={1} />
        </HStack>
      </Box>
      <Box
        p={4}
        border={1}
        borderRadius="md"
        borderColor={useColorModeValue('gray.800', 'gray.50')}
      >
        <HStack alignItems="center" justifyContent="space-between">
          <Box flexDirection="row">
            <Avatar
              name="Rehman"
              borderWidth={1}
              mr={4}
              size="lg"
              source={{
                uri:
                  'https://pbs.twimg.com/profile_images/1320985200663293952/lE_Kg6vr_400x400.jpg',
              }}
            />
            <VStack>
              <Heading>Rehman</Heading>
              <Text color="amber.400">Software Engineer</Text>
            </VStack>
          </Box>
          <Checkbox isChecked value={1} />
        </HStack>
      </Box>
      <Box
        p={4}
        border={1}
        borderRadius="md"
        borderColor={useColorModeValue('gray.800', 'gray.50')}
      >
        <HStack alignItems="center" justifyContent="space-between">
          <Box flexDirection="row">
            <Avatar
              name="Rohit"
              borderWidth={1}
              mr={4}
              size="lg"
              source={{
                uri:
                  'https://pbs.twimg.com/profile_images/1260766060401188864/ySJfMIbZ_400x400.jpg',
              }}
            />
            <VStack>
              <Heading>Rohit</Heading>
              <Text color="amber.400">Software Engineer</Text>
            </VStack>
          </Box>
          <Checkbox isChecked value={1} />
        </HStack>
      </Box>
      <HStack justifyContent="center">
        <Button
          onPress={() => {
            toggleColorMode();
          }}
        >
          Change mode
        </Button>
      </HStack>
    </VStack>
  );
};
