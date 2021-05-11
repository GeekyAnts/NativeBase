import React from 'react';
import { Button, useToast, VStack } from 'native-base';

export const Example = () => {
  const toast = useToast();

  return (
    <VStack space={2}>
      <Button
        onPress={() =>
          toast.show({
            title: 'Account verified',
            status: 'success',
            description: 'Thanks for signing up with us.',
          })
        }
      >
        Success
      </Button>

      <Button
        onPress={() =>
          toast.show({
            title: 'Something went wrong',
            status: 'error',
            description: 'Please create a support ticket from the support page',
          })
        }
      >
        Error
      </Button>

      <Button
        onPress={() =>
          toast.show({
            title: 'Network connection restored',
            status: 'info',
            description:
              'This is to inform you that your network connectivity is restored',
          })
        }
      >
        Info
      </Button>

      <Button
        onPress={() =>
          toast.show({
            title: 'Invalid email address',
            status: 'warning',
            description: 'Please enter a valid email address',
          })
        }
      >
        Warning
      </Button>
    </VStack>
  );
};
