import React from 'react';
import {
  Stack,
  Alert,
  IconButton,
  HStack,
  VStack,
  CloseIcon,
  Text,
  Divider,
  ScrollView,
} from 'native-base';

export function Example() {
  return (
    <ScrollView px="30" my="3">
      <Stack space={3} w="100%">
        {[
          'solid',
          'left-accent',
          'top-accent',
          'outline',
          'subtle',
          'outline-light',
        ].map((key) => {
          return (
            <>
              <Text bold fontSize="xl" mb="4" textAlign="center">
                {key}
              </Text>
              <Alert
                w="100%"
                variant={key}
                colorScheme="success"
                status="success"
              >
                <VStack space={2} flexShrink={1} w="100%">
                  <HStack
                    flexShrink={1}
                    space={2}
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <HStack space={2} alignItems="center">
                      <Alert.Icon />
                      <Text>Selection successfully moved!</Text>
                    </HStack>
                  </HStack>
                </VStack>
              </Alert>
              <Divider mt="5" mb="2.5" />
            </>
          );
        })}
      </Stack>
    </ScrollView>
  );
}
