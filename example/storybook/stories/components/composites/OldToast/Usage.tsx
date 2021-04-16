import React from 'react';
import { Button, useToast } from 'native-base';

export default function () {
  const toast = useToast();

  return (
    <Button
      onPress={() => {
        toast({
          position: 'top',
          title: 'Toast Top',
        });
      }}
    >
      Button
    </Button>
  );
}
