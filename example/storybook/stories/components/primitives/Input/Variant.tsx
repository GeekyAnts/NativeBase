import React from 'react';
import { Input, Stack, Center, Heading, ScrollView } from 'native-base';
export const Example = () => {
  return (
    <ScrollView>
      <Stack space={4} w="100%">
        <Center>
          <Heading>Input Variants</Heading>
        </Center>
        <Input
          variant="outline"
          placeholder="Outline"
          _light={{ placeholderTextColor: 'blueGray.400' }}
          _dark={{ placeholderTextColor: 'blueGray.50' }}
        />
        <Input
          variant="filled"
          placeholder="Filled"
          _light={{ placeholderTextColor: 'blueGray.400' }}
          _dark={{ placeholderTextColor: 'blueGray.50' }}
        />
        <Input
          variant="underlined"
          placeholder="Underlined"
          _light={{ placeholderTextColor: 'blueGray.400' }}
          _dark={{ placeholderTextColor: 'blueGray.50' }}
        />
        <Input
          variant="unstyled"
          placeholder="Unstyled"
          _light={{ placeholderTextColor: 'blueGray.400' }}
          _dark={{ placeholderTextColor: 'blueGray.50' }}
        />
        <Input
          variant="rounded"
          placeholder="Round"
          _light={{ placeholderTextColor: 'blueGray.400' }}
          _dark={{ placeholderTextColor: 'blueGray.50' }}
        />
      </Stack>
    </ScrollView>
  );
};
