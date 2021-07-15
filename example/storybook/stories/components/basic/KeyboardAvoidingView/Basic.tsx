import React from 'react';
import {
  Input,
  KeyboardAvoidingView,
  View,
  Text,
  Button,
  VStack,
  useBreakpointValue,
} from 'native-base';
export const Example = () => {
  const isLargeScreen = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: true,
  });
  return (
    <KeyboardAvoidingView h={{ base: '600px', lg: 'auto' }}>
      {isLargeScreen ? (
        <Text>Please see the example in your mobile to observe the effect</Text>
      ) : (
        <VStack p={6} flex={1} justifyContent="space-around">
          <Text fontSize={36} mb={12}>
            Header
          </Text>
          <Input
            placeholder="Username"
            borderBottomWidth="1px"
            mb={9}
            mt="auto"
          />
          <View bg="white" mt={3}>
            <Button variant="solid">Submit</Button>
          </View>
        </VStack>
      )}
    </KeyboardAvoidingView>
  );
};
