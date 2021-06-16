import React from 'react';
import { Button, useToast, Wrap } from 'native-base';

export const Example = () => {
  const toast = useToast();
  const variants = ['solid', 'subtle', 'left-accent', 'top-accent'];

  return (
    <Wrap>
      {variants.map((variant) => (
        <Button
          key={variant}
          onPress={() =>
            toast.show({
              title: `${variant} toast`,
              // @ts-ignore
              variant: variant,
              isClosable: true,
            })
          }
          mr={2}
          mb={2}
        >
          {`Show ${variant} toast`}
        </Button>
      ))}
    </Wrap>
  );
};
