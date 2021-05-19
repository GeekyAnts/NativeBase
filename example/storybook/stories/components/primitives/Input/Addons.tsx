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
    <Stack alignItems="center" mx={3}>
      <InputGroup>
        <InputLeftAddon children={'https://'} />
        <Input placeholder="nativebase" />
        <InputRightAddon children={'.io'} />
      </InputGroup>
    </Stack>
  );
};
