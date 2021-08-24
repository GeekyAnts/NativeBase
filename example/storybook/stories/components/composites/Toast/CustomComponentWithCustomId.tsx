import React from 'react';
import { Button, useToast, Box } from 'native-base';

export const Example = () => {
  const toast = useToast();
  const id = 'test-toast';

  return (
    <Button
      onPress={() => {
        if (!toast.isActive(id)) {
          toast.show({
            id,
            render: () => {
              return (
                <Box bg="teal.500" px={4} py={3} rounded="md" mb={5}>
                  Hi, Nice to see you ( ´ ∀ ` )ﾉ
                </Box>
              );
            },
          });
        }
      }}
    >
      Custom Toast
    </Button>
  );
};
