import React from 'react';
import { Radio, Icon } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Example = () => {
  return (
    <Radio.Group
      defaultValue="1"
      size="lg"
      name="exampleGroup"
      accessibilityLabel="pick a choice"
    >
      <Radio
        _text={{ mx: 2 }}
        colorScheme="green"
        value="1"
        icon={<Icon as={<MaterialCommunityIcons name="alien" />} />}
        my={1}
      >
        Alien
      </Radio>
      <Radio
        _text={{ mx: 2 }}
        colorScheme="red"
        value="2"
        icon={<Icon as={<MaterialCommunityIcons name="fire" />} />}
        my={1}
      >
        Fire
      </Radio>
      <Radio
        colorScheme="warning"
        _text={{ mx: 2 }}
        value="3"
        icon={<Icon as={<MaterialCommunityIcons name="exclamation" />} />}
        my={1}
      >
        Warning
      </Radio>
    </Radio.Group>
  );
};
