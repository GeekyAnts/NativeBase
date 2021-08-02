import React from 'react';
import { TextArea, Stack } from 'native-base';

export const Example = () => {
  const Sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];
  return (
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
  );
};
