import React from 'react';
import { IconButton, Icon } from 'native-base';
import { Entypo } from '@expo/vector-icons';

export const Example = () => {
  return (
    <IconButton
      icon={<Icon as={Entypo} name="emoji-happy" />}
      borderRadius="full"
      _icon={{
        color: 'orange.500',
        size: 'md',
      }}
      _hover={{
        bg: 'orange.600:alpha.20',
        // _icon: {
        //   color: 'red.500',
        //   name: 'smileo',
        // },
      }}
      _pressed={{
        bg: 'orange.600:alpha.20',
        _icon: {
          name: 'emoji-flirt',
          // color: 'lime.500',
        },
      }}
      _ios={{
        _icon: {
          size: '2xl',
        },
      }}
    />
  );
};
