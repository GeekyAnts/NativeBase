import React from 'react';
import { Button, useToast } from 'native-base';

// function test() {
//   console.log('In test');
//   toast.show({ title: 'hihihih' });
// }

export const Example = () => {
  const toast = useToast();
  return (
    <Button onPress={() => toast.show({ title: 'hihihihjnjnjnjn' })}>
      Bottom
    </Button>
  );
};
