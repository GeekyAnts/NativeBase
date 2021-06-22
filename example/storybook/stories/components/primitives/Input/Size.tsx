import React from 'react';
import { Input, Stack, Center, Heading, useColorModeValue } from 'native-base';
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
          placeholderTextColor={useColorModeValue(
            'blueGray.400',
            'blueGray.50'
          )}
        />
        <Input
          size="sm"
          placeholder="sm Input"
          placeholderTextColor={useColorModeValue(
            'blueGray.400',
            'blueGray.50'
          )}
        />
        <Input
          size="md"
          placeholder="md Input"
          placeholderTextColor={useColorModeValue(
            'blueGray.400',
            'blueGray.50'
          )}
        />
        <Input
          size="lg"
          placeholder="lg Input"
          placeholderTextColor={useColorModeValue(
            'blueGray.400',
            'blueGray.50'
          )}
        />
        <Input
          size="xl"
          placeholder="xl Input"
          placeholderTextColor={useColorModeValue(
            'blueGray.400',
            'blueGray.50'
          )}
        />
        <Input
          size="2xl"
          placeholder="2xl Input"
          placeholderTextColor={useColorModeValue(
            'blueGray.400',
            'blueGray.50'
          )}
        />
        {/* ========== */}
        <Input
          size="xs"
          placeholder="xs Input"
          placeholderTextColor={useColorModeValue(
            'blueGray.400',
            'blueGray.50'
          )}
        />
        <Input
          size="sm"
          placeholder="sm Input"
          placeholderTextColor={useColorModeValue(
            'blueGray.400',
            'blueGray.50'
          )}
        />
        <Input
          size="md"
          placeholder="md Input"
          placeholderTextColor={useColorModeValue(
            'blueGray.400',
            'blueGray.50'
          )}
        />
        <Input
          size="lg"
          placeholder="lg Input"
          placeholderTextColor={useColorModeValue(
            'blueGray.400',
            'blueGray.50'
          )}
        />
        <Input
          size="xl"
          placeholder="xl Input"
          placeholderTextColor={useColorModeValue(
            'blueGray.400',
            'blueGray.50'
          )}
        />
        <Input
          size="2xl"
          placeholder="2xl Input"
          placeholderTextColor={useColorModeValue(
            'blueGray.400',
            'blueGray.50'
          )}
        />
        {/*  */}
      </Stack>
    </ScrollView>
  );
};
