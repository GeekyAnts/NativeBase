import React from 'react';
import {
  Input,
  KeyboardAvoidingView,
  Text,
  Button,
  VStack,
  Heading,
  useBreakpointValue,
} from 'native-base';
import { Platform } from 'react-native';

export const Example = () => {
  const isLargeScreen = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: true,
  });
  return (
    <KeyboardAvoidingView
      h={{ base: '400px', lg: 'auto' }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <VStack p="6" flex="1" justifyContent="flex-end">
        <Heading fontSize={36} mb="3">
          Forgot Password
        </Heading>
        <Text>
          Not to worry! Enter email address associated with your account and
          we’ll send a link to reset your password.
        </Text>
        <Input placeholder="Email Address" mt="10" mb="4" />
        <Button mb="4">Proceed</Button>
        {isLargeScreen ? (
          <Text>
            Please see the example in your mobile to observe the effect.
          </Text>
        ) : null}
      </VStack>
    </KeyboardAvoidingView>
  );
};
