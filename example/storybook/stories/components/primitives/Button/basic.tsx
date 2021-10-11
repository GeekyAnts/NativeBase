import React from 'react';
import { Button } from 'native-base';

export const Example = () => {
  return (
    <>
      <Button flex={'1'} onPress={() => console.log('hello world')}>
        Primary
      </Button>
    </>
  );
};
