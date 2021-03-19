import React from 'react';
import { Stack, IconButton, Icon } from 'native-base';
export default function () {
  return (
    <Stack space={4}>
      {['outline', 'solid', 'ghost'].map((variant: any) => (
        <IconButton
          key={variant}
          variant={variant}
          colorScheme="teal"
          icon={
            <Icon
              name={'menu'}
              color={variant === 'solid' ? 'white' : undefined}
            />
          }
        />
      ))}
    </Stack>
  );
}
