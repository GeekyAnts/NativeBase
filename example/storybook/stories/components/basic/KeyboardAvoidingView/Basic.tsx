import React from 'react';
import { Input, Box, KeyboardAvoidingView } from 'native-base';
export const Example = () => {
  return (
    <Box w="100%" justifyContent="flex-end" flex={1}>
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={40}>
        <Input m={4} variant="filled" />
      </KeyboardAvoidingView>
    </Box>
  );
};
