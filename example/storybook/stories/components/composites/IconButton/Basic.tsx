import React from 'react';
import { IconButton, Icon } from 'native-base';
import { AntDesign } from '@expo/vector-icons';

export const Example = () => {
  return (
    <IconButton
      icon={<Icon as={AntDesign} name="meho" />}
      borderRadius="full"
      _icon={{
        color: 'red.500',
        size: 'md',
      }}
      _hover={{
        bg: 'red.500:alpha.20',
        _icon: {
          color: 'red.500',
          name: 'smileo',
        },
      }}
      _pressed={{
        bg: 'lime.500:alpha.20',
        _icon: {
          name: 'smile-circle',
          color: 'lime.500',
        },
      }}
      _ios={{
        _icon: {
          size: '2xl',
        },
        _pressed: {
          bg: 'amber.500:alpha.20',
          _icon: {
            size: '2xl',
            name: 'smile-circle',
            color: 'amber.500',
          },
        },
      }}
    />
  );
};
