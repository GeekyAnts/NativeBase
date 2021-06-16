import React from 'react';
import { Link } from 'native-base';

export const Example = () => {
  return (
    // @ts-ignore
    <Link mt={4} fontSize="xl" href="https://nativebase.io" isUnderlined>
      Default Link
    </Link>
  );
};
