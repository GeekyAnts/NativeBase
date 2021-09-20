import React from 'react';
import { Text, VStack } from 'native-base';

export const Example = () => {
  return (
    <VStack space={2} alignItems="center">
      <Text bold>Bold</Text>
      <Text italic>Italic</Text>
      <Text underline>Underline</Text>
      <Text highlight _dark={{ color: 'coolgray.800' }}>
        Highlighted
      </Text>
      <Text>
        H<Text sub>2</Text>O
      </Text>
      <Text underline>Underline</Text>
      <Text strikeThrough>StrikeThrough</Text>
      <Text bold italic underline>
        Bold, Italic & Underline
      </Text>
    </VStack>
  );
};
