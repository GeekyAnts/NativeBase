import React from 'react';
import { Button, useToast, Box, Center } from 'native-base';

export const Example = () => {
  const toast = useToast();

  return (
    <Center>
      <Button
        onPress={() => {
          toast.show({
            render: () => {
              return (
                <Box bg="emerald.500" px="2" py="1" rounded="sm" mb={5}>
                  Hello! Have a nice day
                </Box>
              );
            },
          });
        }}
      >
        Custom Toast
      </Button>
    </Center>
  );
};
