import React from 'react';
import { Icon, MoonIcon, Stack, HStack } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

export const Example = () => {
  const sizes = [
    '10',
    '50px',
    '2xl',
    // 'xs',
    // 'sm',
    // 'md',
    // 'lg',
    // 'xl',
    // '2xl',
    // '3xl',
    // '4xl',
    // '5xl',
    // '6xl',
  ];
  return (
    <Stack space={8}>
      <HStack space={4}>
        {sizes.map((size) => (
          <MoonIcon size={size} />
        ))}
      </HStack>
      <HStack space={4}>
        {sizes.map((size) => (
          <Icon as={Ionicons} name="md-checkmark-circle" size={size} />
        ))}
      </HStack>
    </Stack>
  );
};
