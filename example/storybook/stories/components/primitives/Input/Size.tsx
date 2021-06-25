import React from 'react';
import { Input, Stack, Center, Heading } from 'native-base';
import { ScrollView } from 'react-native';

export const Example = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Stack space={4} w="100%" safeArea>
        <Center>
          <Heading>Input Sizes</Heading>
        </Center>
        <Input
          size="xs"
          placeholder="xs Input"
          _light={{ placeholderTextColor: 'blueGray.400' }}
          _dark={{ placeholderTextColor: 'blueGray.50' }}
        />
        <Input
          size="sm"
          placeholder="sm Input"
          _light={{ placeholderTextColor: 'blueGray.400' }}
          _dark={{ placeholderTextColor: 'blueGray.50' }}
        />
        <Input
          size="md"
          placeholder="md Input"
          _light={{ placeholderTextColor: 'blueGray.400' }}
          _dark={{ placeholderTextColor: 'blueGray.50' }}
        />
        <Input
          size="lg"
          placeholder="lg Input"
          _light={{ placeholderTextColor: 'blueGray.400' }}
          _dark={{ placeholderTextColor: 'blueGray.50' }}
        />
        <Input
          size="xl"
          placeholder="xl Input"
          _light={{ placeholderTextColor: 'blueGray.400' }}
          _dark={{ placeholderTextColor: 'blueGray.50' }}
        />
        <Input
          size="2xl"
          placeholder="2xl Input"
          _light={{ placeholderTextColor: 'blueGray.400' }}
          _dark={{ placeholderTextColor: 'blueGray.50' }}
        />
        {/* ========== */}
        <Input
          size="xs"
          placeholder="xs Input"
          _light={{ placeholderTextColor: 'blueGray.400' }}
          _dark={{ placeholderTextColor: 'blueGray.50' }}
        />
        <Input
          size="sm"
          placeholder="sm Input"
          _light={{ placeholderTextColor: 'blueGray.400' }}
          _dark={{ placeholderTextColor: 'blueGray.50' }}
        />
        <Input
          size="md"
          placeholder="md Input"
          _light={{ placeholderTextColor: 'blueGray.400' }}
          _dark={{ placeholderTextColor: 'blueGray.50' }}
        />
        <Input
          size="lg"
          placeholder="lg Input"
          _light={{ placeholderTextColor: 'blueGray.400' }}
          _dark={{ placeholderTextColor: 'blueGray.50' }}
        />
        <Input
          size="xl"
          placeholder="xl Input"
          _light={{ placeholderTextColor: 'blueGray.400' }}
          _dark={{ placeholderTextColor: 'blueGray.50' }}
        />
        <Input
          size="2xl"
          placeholder="2xl Input"
          _light={{ placeholderTextColor: 'blueGray.400' }}
          _dark={{ placeholderTextColor: 'blueGray.50' }}
        />
        {/*  */}
      </Stack>
    </ScrollView>
  );
};
