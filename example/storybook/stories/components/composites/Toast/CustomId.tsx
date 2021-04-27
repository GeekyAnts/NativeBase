import React from 'react';
import { Button, useToast, Text } from 'native-base';

const CustomID = () => {
  const toast = useToast();

  const id = 'test-id';
  return (
    <>
      <Button onPress={() => toast.show({ title: 'Toast check', id })}>
        Show Toast
      </Button>

      <Button onPress={() => toast.close(id)}>Hide toast</Button>
    </>
  );
};

export default CustomID;
