import React from 'react';
import { TextArea, Heading, Center, Text, Stack } from 'native-base';

export default function () {
  const Sizes: any = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];
  return (
    <Stack space={4}>
      <Center>
        <Heading>TextArea</Heading>
      </Center>
      <Center>
        <Text>TextArea with different font sizes</Text>
      </Center>
      {Sizes.map((value: string) => {
        return (
          <TextArea key={value} w="90%" size={value} placeholder={value} />
        );
      })}
    </Stack>
  );
}
