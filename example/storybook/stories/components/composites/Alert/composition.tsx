import React from 'react';
import { Alert, CloseButton, Box, VStack } from 'native-base';

export default function () {
  return (
    <VStack m={3} space={3}>
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
        <Alert.Title mt={4} mb={2}>
          This is a success alert
        </Alert.Title>
        <Alert.Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
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
        <Alert.Title mt={4} mb={2}>
          This is a success alert
        </Alert.Title>
        <Alert.Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Alert.Description>
      </Alert>

      <Alert status="success">
        <Alert.Icon />
        <Box flex={1}>
          <Alert.Title>This is a success alert</Alert.Title>
          <Alert.Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Alert.Description>
        </Box>
        <CloseButton size="xs" position="absolute" top={2} right={2} />
      </Alert>
    </VStack>
  );
}
