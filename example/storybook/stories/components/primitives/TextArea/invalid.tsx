import React from 'react';
import { TextArea, Text, Stack } from 'native-base';

export const Example = () => {
  return (
    <Stack space={4} w="90%">
      <Text bold fontSize="lg">
        Invalid TextArea
      </Text>

      <TextArea
        aria-label="t1"
        numberOfLines={4}
        placeholder="Invalid TextArea"
        isInvalid
        _dark={{ placeholderTextColor: 'gray.300' }}
      />

      <Text bold fontSize="lg">
        Disabled TextArea
      </Text>

      <TextArea
        aria-label="t1Disabled"
        placeholder="Disabled TextArea"
        isDisabled
      />
    </Stack>
  );
};
