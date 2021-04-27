import React from 'react';
import { Button, useToast, Text } from 'native-base';

const Basic = () => {
  const toast = useToast();

  return (
    <>
      <Button
        onPress={() =>
          toast.show({
            title: 'Toast check',
            position: 'top-right',
            status: 'info',
          })
        }
      >
        Top right
      </Button>
      <Button onPress={() => toast.show({ title: 'Toast check' })}>
        Bottom
      </Button>
      <Button
        onPress={() => toast.show({ title: 'Toast check', position: 'top' })}
      >
        Top
      </Button>

      <Button
        onPress={() =>
          toast.show({ title: 'Toast check', position: 'top-left' })
        }
      >
        Top Left
      </Button>

      <Button
        onPress={() =>
          toast.show({ title: 'Toast check', position: 'bottom-right' })
        }
      >
        Bottom Right
      </Button>

      <Button
        onPress={() =>
          toast.show({ title: 'Toast check', position: 'bottom-left' })
        }
      >
        Bottom Left
      </Button>
    </>
  );
};

export default Basic;
