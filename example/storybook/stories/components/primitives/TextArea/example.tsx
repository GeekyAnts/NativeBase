import React from 'react';
import { TextArea, Stack } from 'native-base';

export default function () {
  return (
    <Stack space={4} w="90%">
      <TextArea h={20} placeholder="Text Area Placeholder" />
    </Stack>
  );
}
