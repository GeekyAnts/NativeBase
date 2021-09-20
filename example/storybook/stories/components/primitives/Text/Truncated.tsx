import React from 'react';
import { Text } from 'native-base';

export const Example = () => {
  return (
    <Text isTruncated maxW="300" w="80%">
      NativeBase gives you a contrasting color based on your theme. You can also
      customise it using the useAccessibleColors hook.
    </Text>
  );
};
