import React from 'react';
import { HStack, IconButton, Icon } from 'native-base';
export default function () {
  return (
    <HStack space={4}>
      {['outline', 'solid', 'ghost'].map((variant: any) => (
        <IconButton
          variant={variant}
          colorScheme="teal"
          icon={<Icon name={'menu'} size={'lg'} />}
        />
      ))}
    </HStack>
  );
}
