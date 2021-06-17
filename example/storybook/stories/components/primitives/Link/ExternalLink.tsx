import React from 'react';
import { Link } from 'native-base';

export const Example = () => {
  return (
    <Link
      _text={{ color: 'blue.700' }}
      href="https://nativebase.io"
      isExternal
      mt={4}
    >
      NativeBase
    </Link>
  );
};
