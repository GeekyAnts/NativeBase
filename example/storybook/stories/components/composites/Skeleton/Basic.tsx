import React from 'react';
import { Skeleton, Stack } from 'native-base';
export const Example = () => {
  return (
    <Stack w="50%" space={8}>
      <Skeleton h={20}></Skeleton>
      <Skeleton.Circle size={20} />
      <Skeleton.Text noOfLines={5} lineHeight={3} h={90}></Skeleton.Text>
    </Stack>
  );
};
