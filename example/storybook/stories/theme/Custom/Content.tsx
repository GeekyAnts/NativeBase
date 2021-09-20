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
  Center,
} from 'native-base';

export const Content = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <Center
      _light={{ bg: 'warmGray.50' }}
      h="100%"
      _dark={{ bg: 'coolGray.800' }}
    >
      <Box flex={1}>
        <VStack
          my={4}
          space={4}
          flex={1}
          justifyContent="center"
          // alignItems="center"
        >
          <Heading
            justifyContent="center"
            color="custom.200"
            _dark={{ color: 'warmGray.50' }}
            mb="1"
          >
            Inbox
          </Heading>
          <Box
            py={2}
            border={1}
            borderRadius="md"
            _light={{ borderColor: 'gray.800' }}
            _dark={{ borderColor: 'gray.50' }}
          >
            <HStack
              alignItems="center"
              justifyContent="space-between"
              space={3}
            >
              <Box
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
              >
                <Avatar
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
                  <Heading fontWeight="medium" size="md">
                    Ankur
                  </Heading>
                  <Text color="amber.400" _dark={{ color: 'amber.500' }}>
                    Software Engineer
                  </Text>
                </VStack>
              </Box>
            </HStack>
          </Box>
          <Box
            py={2}
            border={1}
            borderRadius="md"
            _light={{ borderColor: 'gray.800' }}
            _dark={{ borderColor: 'gray.50' }}
          >
            <HStack
              alignItems="center"
              justifyContent="space-between"
              space={3}
            >
              <Box
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
              >
                <Avatar
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
                  <Heading fontWeight="medium" size="md">
                    Rehman
                  </Heading>
                  <Text color="amber.400" _dark={{ color: 'amber.500' }}>
                    Software Engineer
                  </Text>
                </VStack>
              </Box>
            </HStack>
          </Box>
          <Box
            py={2}
            border={1}
            borderRadius="md"
            _light={{ borderColor: 'gray.800' }}
            _dark={{ borderColor: 'gray.50' }}
          >
            <HStack
              alignItems="center"
              justifyContent="space-between"
              space={3}
            >
              <Box
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
              >
                <Avatar
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
                  <Heading fontWeight="medium" size="md">
                    Rohit
                  </Heading>
                  <Text color="amber.400" _dark={{ color: 'amber.500' }}>
                    Software Engineer
                  </Text>
                </VStack>
              </Box>
            </HStack>
          </Box>
          <HStack justifyContent="center">
            <Button
              mt={4}
              onPress={() => {
                toggleColorMode && toggleColorMode();
              }}
            >
              Change mode
            </Button>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};
