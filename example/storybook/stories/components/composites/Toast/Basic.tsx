import React from 'react';
import { Button, useToast, Text } from 'native-base';

const Basic = () => {
  const toast = useToast();
  return (
    <>
      <Button onPress={() => toast('Toast check', 'top-right')}>
        Button on top
      </Button>
      <Button onPress={() => toast('Toast check')}>Button</Button>
      <Button
        onPress={() =>
          toast({ title: 'Alert Test', description: 'Hey', status: 'success' })
        }
      >
        Button
      </Button>
      <Button onPress={() => toast(() => <Text>aklsdfjdskl</Text>, 'top')}>
        Button
      </Button>
    </>
  );
};

export default Basic;
