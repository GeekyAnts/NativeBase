import React from 'react';
import { Button } from 'native-base';

export const Example = () => {
  return (
    <>
      <Button
        onPress={() => console.log('hello world')}
        // isDisabled
        // isLoading

        // action="ghost"
        // action="link"
        // action="secondary"
        // action="positive"
        action="negative"
        // variant="solid"
        // variant="subtle"
        variant="outline"
        // variant="unstyled"

        // size="sm"
        // size="lg"
        _focus={{
          _web: { style: { outline: 'none' } },
        }}
      >
        Button
      </Button>
      <button
        style={{
          outline: 'none',
        }}
      >
        sdvcdfvdf
      </button>
    </>
  );
};
