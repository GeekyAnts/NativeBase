import React from 'react';
import { NativeBaseProvider, Box } from 'native-base';
import { Example } from './Example';

export default function App() {
  return (
    <NativeBaseProvider>
      <Example />
    </NativeBaseProvider>
  );
}
