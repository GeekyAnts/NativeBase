import React from 'react';
import { Button } from 'native-base';
export function NBButtons() {
  const foo = new Array(10).fill('hello');
  return (
    <>
      {foo.map((val, index) => (
        <Button key={index} onPress={() => {}}>
          {`NativeBase Button ${index}`}
        </Button>
      ))}
    </>
  );
}
