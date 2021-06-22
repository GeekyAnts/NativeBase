import React from 'react';
import { Button } from 'react-native';
export function RNButtons() {
  const foo = new Array(10).fill('hello');
  return (
    <>
      {foo.map((val, index) => (
        <Button key={index} title={`RN Button ${index}`} onPress={() => {}} />
      ))}
    </>
  );
}
