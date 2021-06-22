import React from 'react';
import { HStack, IconButton, Icon } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
export const Example = () => {
  return (
    <HStack space={4}>
      {['outline', 'solid', 'ghost'].map((variant: any) => (
        <IconButton
          key={variant}
          variant={variant}
          icon={
            <Icon
              size={4}
              name="search1"
              as={AntDesign}
              color={variant === 'solid' ? 'white' : 'primary.500'}
            />
          }
        />
      ))}
    </HStack>
  );
};
