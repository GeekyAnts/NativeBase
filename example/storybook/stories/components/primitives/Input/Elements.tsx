import React from 'react';
import { Input, Icon, Stack } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

export const Example = () => {
  const [show, setShow] = React.useState(false);
  return (
    <Stack space={4} w="100%" alignItems="center">
      <Input
        w={{ base: '75%', md: '25%' }}
        InputLeftElement={
          <Icon
            as={<MaterialIcons name="person" />}
            size={5}
            ml="2"
            color="muted.400"
          />
        }
        placeholder="Name"
      />
      <Input
        w={{ base: '75%', md: '25%' }}
        type={show ? 'text' : 'password'}
        InputRightElement={
          <Icon
            as={<MaterialIcons name={show ? 'visibility' : 'visibility-off'} />}
            size={5}
            mr="2"
            color="muted.400"
            onPress={() => setShow(!show)}
          />
        }
        placeholder="Password"
      />
    </Stack>
  );
};
