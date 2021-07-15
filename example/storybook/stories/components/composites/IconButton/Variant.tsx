import React from 'react';
import { HStack, IconButton } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
export const Example = () => {
  return (
    <HStack space={4}>
      {['outline', 'solid', 'ghost'].map((variant: any) => (
        <IconButton
          colorScheme="amber"
          key={variant}
          variant={variant}
          _icon={{
            as: AntDesign,
            name: 'search1',
          }}
        />
      ))}
    </HStack>
  );
};
