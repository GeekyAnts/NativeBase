import React from 'react';
import { Link } from 'native-base';

export const Example = () => {
  return (
    // @ts-ignore
    <Link
      _text={{
        fontSize: 'xl',
        color: 'purple.400',
      }}
      mt={4}
      href="https://nativebase.io"
      isUnderlined
      _hover={{ _text: { color: 'blue.300' } }}
    >
      Click me to open NativeBase website.
    </Link>
  );
};
