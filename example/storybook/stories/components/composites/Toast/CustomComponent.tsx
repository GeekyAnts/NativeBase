import React from 'react';
import { Button, useToast, Box } from 'native-base';

export const Example = () => {
  const toast = useToast();

  return (
    <Button
      onPress={() => {
        toast.show({
          render: () => {
            return (
              <Box bg="teal.500" px={4} py={3} rounded="md" mb={5}>
                Hi, Nice to see you ( ´ ∀ ` )ﾉ
              </Box>
            );
          },
        });
      }}
    >
      Custom Toast
    </Button>
  );
};
