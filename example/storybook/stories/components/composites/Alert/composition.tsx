import React from 'react';
import {
  Alert,
  Box,
  IconButton,
  CloseIcon,
  HStack,
  VStack,
  Text,
  Center,
} from 'native-base';

export function Example() {
  return (
    <Center>
      <VStack space={5} maxW="400">
        <Alert w="100%" status="success">
          <VStack space={2} flexShrink={1} w="100%">
            <HStack
              flexShrink={1}
              space={1}
              alignItems="center"
              justifyContent="space-between"
            >
              <HStack space={2} flexShrink={1} alignItems="center">
                <Alert.Icon />
                <Text
                  fontSize="md"
                  fontWeight="medium"
                  _dark={{ color: 'coolGray.800' }}
                >
                  Application received!
                </Text>
              </HStack>
              <IconButton
                variant="unstyled"
                icon={<CloseIcon size="3" color="coolGray.600" />}
              />
            </HStack>
            <Box pl="6" _dark={{ _text: { color: 'coolGray.600' } }}>
              Your application has been received. We will review your
              application and respond within the next 48 hours.
            </Box>
          </VStack>
        </Alert>
        <Alert w="100%" status="success">
          <VStack space={1} flexShrink={1} w="100%" alignItems="center">
            <Alert.Icon size="md" />
            <Text
              fontSize="md"
              fontWeight="medium"
              _dark={{ color: 'coolGray.800' }}
            >
              Application received!
            </Text>

            <Box
              _text={{ textAlign: 'center' }}
              _dark={{ _text: { color: 'coolGray.600' } }}
            >
              Your application has been received. We will review your
              application and respond within the next 48 hours.
            </Box>
          </VStack>
        </Alert>
      </VStack>
    </Center>
  );
}
