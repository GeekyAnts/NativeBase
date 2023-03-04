import React from 'react';

import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Stack,
} from 'native-base';

export const Example = () => {
  return (
    <Stack>
      <InputGroup w={{ base: '70%', md: '285' }} justifyContent="center">
        <InputLeftAddon children={'https://'} />
        <Input w={{ base: '70%', md: '100%' }} placeholder="nativebase" />
        <InputRightAddon children={'.io'} />
      </InputGroup>
    </Stack>
  );
};
