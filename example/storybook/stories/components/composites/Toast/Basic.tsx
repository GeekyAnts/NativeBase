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
            status: 'success',
            description: 'this is a test toast. Please ignore',
            duration: 3000,
            variant: 'solid',
          })
        }
      >
        Success toast
      </Button>
      <Button onPress={() => toast.show({ title: 'Toast check' })}>
        Bottom
      </Button>
      <Button
        onPress={() =>
          toast.show({
            title: 'Toast check',
            position: 'top',
            status: 'success',
          })
        }
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
