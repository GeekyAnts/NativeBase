import React from 'react';
import { Button, useContrastText } from 'native-base';
export const Example = () => {
  const bgDark = 'gray.900';
  const bgLight = 'gray.50';
  const colorContrastDark = useContrastText(bgDark);
  const colorContrastLight = useContrastText(bgLight);

  return (
    <>
      <Button bg={bgDark} _text={{ color: colorContrastDark }} my={6}>
        NativeBase
      </Button>
      <Button bg={bgLight} _text={{ color: colorContrastLight }}>
        NativeBase
      </Button>
    </>
  );
};
