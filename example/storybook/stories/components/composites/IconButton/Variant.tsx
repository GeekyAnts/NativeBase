import React from 'react';
import { HStack, IconButton, Icon } from 'native-base';
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
              name={'search1'}
              type="AntDesign"
              color={variant === 'solid' ? 'white' : 'primary.500'}
            />
          }
        />
      ))}
    </HStack>
  );
};
