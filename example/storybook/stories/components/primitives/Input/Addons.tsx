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
    <Stack alignItems="center" w="100%">
      <InputGroup>
        <InputLeftAddon children={'https://'} />
        <Input w={{ base: '50%', md: '100%' }} placeholder="nativebase" />
        <InputRightAddon children={'.io'} />
      </InputGroup>
    </Stack>
  );
};
