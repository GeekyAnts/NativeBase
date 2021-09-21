import React from 'react';
import {
  Stack,
  Alert,
  Text,
  HStack,
  VStack,
  IconButton,
  Box,
  CloseIcon,
} from 'native-base';

export function Example() {
  return (
    <Stack space={4} mx={3} w="100%">
      {['red', 'orange', 'pink'].map((key: any) => (
        <Alert w="100%" colorScheme={key} key={key}>
          <VStack space={2} flexShrink={1} w="100%">
            <HStack
              flexShrink={1}
              space={2}
              alignItems="center"
              justifyContent="space-between"
            >
              <HStack space={2} flexShrink={1} alignItems="center">
                <Alert.Icon />
                <Text fontSize="md" fontWeight="medium" color="coolGray.800">
                  Please try again later!
                </Text>
              </HStack>
              <IconButton
                variant="unstyled"
                icon={<CloseIcon size="3" color="coolGray.600" />}
              />
            </HStack>
            <Box pl="6" _text={{ color: 'coolGray.600' }}>
              Your coupon could not be processed at this time.
            </Box>
          </VStack>
        </Alert>
      ))}
    </Stack>
  );
}
