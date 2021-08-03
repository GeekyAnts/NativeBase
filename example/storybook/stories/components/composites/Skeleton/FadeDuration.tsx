import React from 'react';
import { Skeleton, Stack } from 'native-base';
export const Example = () => {
  return (
    <Stack w="50%">
      <Skeleton
        startColor="pink.600"
        fadeDuration={0.9}
        h={20}
        speed={10}
        endColor="green.500"
      ></Skeleton>
    </Stack>
  );
};
