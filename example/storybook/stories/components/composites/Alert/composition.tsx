import React from 'react';
import { Alert, Box, VStack, IconButton, CloseIcon } from 'native-base';
import { ScrollView } from 'react-native';

export function Example() {
  return (
    <ScrollView>
      <VStack my={3} space={5} w="100%">
        <Alert
          status="success"
          display="flex"
          variant="outline"
          borderColor="gray.200"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Alert.Icon boxSize="40px" mr={0} />
          <Alert.Title mt={2} mb={2}>
            This is a success alert
          </Alert.Title>
          <Alert.Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Alert.Description>
        </Alert>

        <Alert
          status="success"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Alert.Icon boxSize="40px" mr={0} />
          <Alert.Title mt={2} mb={2}>
            This is a success alert
          </Alert.Title>
          <Alert.Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Alert.Description>
        </Alert>

        <Alert status="success">
          <Alert.Icon />
          <Box flex={1} ml={2}>
            <Alert.Title>This is a success alert</Alert.Title>
            <Alert.Description mt={2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Alert.Description>
          </Box>
          <IconButton
            icon={<CloseIcon color="success.500" size="xs" />}
            position="absolute"
            top={0.5}
            right={1}
          />
        </Alert>
      </VStack>
    </ScrollView>
  );
}
