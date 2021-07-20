import React from 'react';

import {
  Heading,
  useColorMode,
  Button,
  HStack,
  Avatar,
  VStack,
  Text,
  Box,
} from 'native-base';

export const Content = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <Box _light={{ bg: 'gray.50' }} _dark={{ bg: 'gray.800' }} flex={1}>
      <VStack m={4} space={4} flex={1} justifyContent="center">
        <Heading justifyContent="center" color="custom.200">
          NativeBase Team
        </Heading>
        <Box
          p={4}
          border={1}
          borderRadius="sm"
          _light={{ borderColor: 'gray.800' }}
          _dark={{ borderColor: 'gray.50' }}
        >
          <HStack alignItems="center" justifyContent="space-between">
            <Box flexDirection="row">
              <Avatar
                borderWidth={1}
                mr={4}
                size="lg"
                source={{
                  uri:
                    'https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg',
                }}
              >
                Ankur
              </Avatar>
              <VStack>
                <Heading>Ankur</Heading>
                <Text color="amber.400">Software Engineer</Text>
              </VStack>
            </Box>
          </HStack>
        </Box>
        <Box
          p={4}
          border={1}
          borderRadius="sm"
          _light={{ borderColor: 'gray.800' }}
          _dark={{ borderColor: 'gray.50' }}
        >
          <HStack alignItems="center" justifyContent="space-between">
            <Box flexDirection="row">
              <Avatar
                borderWidth={1}
                mr={4}
                size="lg"
                source={{
                  uri:
                    'https://pbs.twimg.com/profile_images/1320985200663293952/lE_Kg6vr_400x400.jpg',
                }}
              >
                Rehman
              </Avatar>
              <VStack>
                <Heading>Rehman</Heading>
                <Text color="amber.400">Software Engineer</Text>
              </VStack>
            </Box>
          </HStack>
        </Box>
        <Box
          p={4}
          border={1}
          borderRadius="sm"
          _light={{ borderColor: 'gray.800' }}
          _dark={{ borderColor: 'gray.50' }}
        >
          <HStack alignItems="center" justifyContent="space-between">
            <Box flexDirection="row">
              <Avatar
                borderWidth={1}
                mr={4}
                size="lg"
                source={{
                  uri:
                    'https://pbs.twimg.com/profile_images/1352844693151731713/HKO7cnlW_400x400.jpg',
                }}
              >
                Rohit
              </Avatar>
              <VStack>
                <Heading>Rohit</Heading>
                <Text color="amber.400">Software Engineer</Text>
              </VStack>
            </Box>
          </HStack>
        </Box>
        <HStack justifyContent="center">
          <Button
            onPress={() => {
              toggleColorMode && toggleColorMode();
            }}
          >
            Change mode
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};
