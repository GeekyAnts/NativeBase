import React from 'react';
import { Button, useToast, Text } from 'native-base';

const Basic = () => {
  const toast = useToast();

  return (
    <>
      <Button
        onPress={() =>
          toast.show({ title: 'Toast check', position: 'top-right' })
        }
      >
        Button on top
      </Button>
      <Button onPress={() => toast.show({ title: 'Toast check' })}>
        Button
      </Button>
      <Button
        onPress={() =>
          toast.show({
            render: (props) => <Text>hello world</Text>,
          })
        }
      >
        Button
      </Button>

      <Button onPress={() => toast.closeAll()}>close all</Button>
      <Button
        onPress={() =>
          toast.show({
            title: 'hello world',
            status: 'success',
          })
        }
      >
        Button
      </Button>
    </>
  );
};

export default Basic;
