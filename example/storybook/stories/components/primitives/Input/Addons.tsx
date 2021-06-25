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
      <InputGroup w="100%">
        <InputLeftAddon children={'https://'} />
        <Input
          w={{ base: '50%', md: '100%' }}
          placeholder="nativebase"
          _light={{ placeholderTextColor: 'blueGray.400' }}
          _dark={{ placeholderTextColor: 'blueGray.50' }}
        />
        <InputRightAddon children={'.io'} />
      </InputGroup>
    </Stack>
  );
};
