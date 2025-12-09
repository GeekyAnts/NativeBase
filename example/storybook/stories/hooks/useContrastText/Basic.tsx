import React from 'react';
import { Button, Center, VStack, useContrastText } from '@bilwifi/native-base';
export const Example = () => {
  const bgDark = 'coolGray.900';
  const bgLight = 'coolGray.100';
  const colorContrastDark = useContrastText(bgDark);
  const colorContrastLight = useContrastText(bgLight);
  return (
    <Center>
      <VStack space="4">
        <Button
          bg={bgDark}
          _text={{
            color: colorContrastDark,
          }}
        >
          NativeBase
        </Button>
        <Button
          bg={bgLight}
          _text={{
            color: colorContrastLight,
          }}
        >
          NativeBase
        </Button>
      </VStack>
    </Center>
  );
};
