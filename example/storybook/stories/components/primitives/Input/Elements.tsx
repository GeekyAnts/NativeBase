import React from 'react';
import { Input, Icon, Stack } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

export const Example = () => {
  return (
    <Stack space={4}>
      <Input
        InputLeftElement={
          <Icon
            as={<MaterialIcons name="person" />}
            size={5}
            ml="2"
            _light={{ color: 'muted.400' }}
            _dark={{ color: 'muted.500' }}
          />
        }
        placeholder="Name"
      />
      <Input
        InputRightElement={
          <Icon
            as={<MaterialIcons name="visibility-off" />}
            size={5}
            mr="2"
            _light={{ color: 'muted.400' }}
            _dark={{ color: 'muted.500' }}
          />
        }
        placeholder="Password"
      />
    </Stack>
  );
};
