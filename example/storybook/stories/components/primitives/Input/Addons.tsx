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
    <Stack space={4} w="100%" alignItems="center">
      <InputGroup w={{ base: '70%', md: '25%' }} justifyContent="center">
        <InputLeftAddon children={'https://'} />
        <Input w={{ base: '70%', md: '100%' }} placeholder="nativebase" />
        <InputRightAddon children={'.io'} />
      </InputGroup>
    </Stack>
  );
};
