import React from 'react';
import { Tag, HStack } from 'native-base';

export default function () {
  return (
    <HStack space={4} alignItems="flex-start">
      {['solid', 'subtle', 'outline'].map((variant: any) => (
        <Tag key={variant} variant={variant}>
          NativeBase
        </Tag>
      ))}
    </HStack>
  );
}
