import React from 'react';
import {
  Alert,
  AlertDescription,
  AlertTitle,
  AlertIcon,
  CloseButton,
  Box,
  VStack,
} from 'native-base';

export default function () {
  return (
    <VStack mx={2} space={3}>
      <Alert
        status="success"
        display="flex"
        variant="outline"
        borderColor="gray.200"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="200px"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={2}>
          This is a success alert
        </AlertTitle>
        <AlertDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AlertDescription>
      </Alert>

      <Alert
        status="success"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="200px"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={2}>
          This is a success alert
        </AlertTitle>
        <AlertDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AlertDescription>
      </Alert>

      <Alert status="success">
        <AlertIcon />
        <Box flex={1}>
          <AlertTitle>This is a success alert</AlertTitle>
          <AlertDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AlertDescription>
        </Box>
        <CloseButton position="absolute" top={2} right={2} />
      </Alert>
    </VStack>
  );
}
