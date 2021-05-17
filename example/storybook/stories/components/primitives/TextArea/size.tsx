import React from 'react';
import { TextArea, Stack } from 'native-base';

export const Example = () => {
  const Sizes: any = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];
  return (
    <Stack space={4} w="90%">
      {Sizes.map((value: string) => {
        return <TextArea key={value} size={value} placeholder={value} />;
      })}
    </Stack>
  );
};
