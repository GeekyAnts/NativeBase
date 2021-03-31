import { NativeBaseProvider } from '../core/NativeBaseProvider';
import * as React from 'react';

export const Wrapper = ({ children }: any) => {
  return (
    <NativeBaseProvider
      initialWindowMetrics={{
        frame: { x: 0, y: 0, width: 0, height: 0 },
        insets: { top: 0, left: 0, right: 0, bottom: 0 },
      }}
    >
      {children}
    </NativeBaseProvider>
  );
};
