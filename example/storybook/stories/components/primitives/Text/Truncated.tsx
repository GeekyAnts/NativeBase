import React from 'react';
import { Text, VStack, Heading } from 'native-base';

export const Example = () => {
  return (
    <VStack space={2} alignItems="center" width="100%">
      <Heading mt={3}>Truncated </Heading>
      <Text isTruncated w="80%">
        Lorem ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual mockups.
      </Text>
      <Heading mt={3}>With Two lines </Heading>
      <Text noOfLines={2}>
        "The quick brown fox jumps over the lazy dog" is an English-language
        pangram—a sentence that contains all of the letters of the English
        alphabet. Owing to its existence, Chakra was created.
      </Text>
    </VStack>
  );
};
