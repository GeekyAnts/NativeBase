import React from 'react';
import { HStack, IconButton, Icon } from 'native-base';
export default function () {
  return (
    <HStack space={4}>
      {['outline', 'solid', 'ghost'].map((variant: any) => (
        <IconButton
          key={variant}
          variant={variant}
          icon={
            <Icon
              name={'menu'}
              color={variant === 'solid' ? 'white' : 'primary.500'}
            />
          }
        />
      ))}
    </HStack>
  );
}
