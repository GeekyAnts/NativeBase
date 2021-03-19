import React from 'react';
import { HStack, IconButton, Icon } from 'native-base';
export default function () {
  return (
    <HStack space={4}>
      {[8, 10, 12].map((size: any) => (
        <IconButton
          key={size}
          colorScheme="blue.200"
          icon={<Icon name={'menu'} size={size} />}
        />
      ))}
    </HStack>
  );
}
