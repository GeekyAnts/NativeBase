import React from 'react';
import { TextArea, Stack, ScrollView, Center, Heading } from 'native-base';

export const Example = () => {
  const Sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];
  return (
    <ScrollView w={{ base: '70%', md: '20%' }}>
      <Center mt="4">
        <Heading textAlign="center" mb="10">
          Sizes
        </Heading>
        <Stack space={4} w="90%">
          {Sizes.map((value) => {
            return (
              <TextArea
                aria-label="t2"
                key={value}
                size={value}
                placeholder={value}
                _dark={{ placeholderTextColor: 'white' }}
              />
            );
          })}
        </Stack>
      </Center>
    </ScrollView>
  );
};
