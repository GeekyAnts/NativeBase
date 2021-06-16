import React from 'react';

import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Stack,
  useColorModeValue,
} from 'native-base';

export const Example = () => {
  return (
    <Stack alignItems="center" w="100%">
      <InputGroup w="100%">
        <InputLeftAddon children={'https://'} />
        <Input
          w={{ base: '50%', md: '100%' }}
          placeholder="nativebase"
          placeholderTextColor={useColorModeValue(
            'blueGray.400',
            'blueGray.50'
          )}
        />
        <InputRightAddon children={'.io'} />
      </InputGroup>
    </Stack>
  );
};
