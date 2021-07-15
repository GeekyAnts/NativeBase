import React from 'react';
import { Pressable, Text } from 'native-base';

export function Example() {
  return (
    <Pressable
      p={4}
      borderWidth={1}
      _light={{ borderColor: 'dark.200' }}
      _dark={{ borderColor: 'dark.600' }}
    >
      {({ isHovered, isFocused, isPressed }) => {
        return (
          <Text>
            Pressable is in state{' :: '}
            {isPressed
              ? 'pressed'
              : isHovered
              ? 'hovered'
              : isFocused
              ? 'focused'
              : ''}
          </Text>
        );
      }}
    </Pressable>
  );
}
