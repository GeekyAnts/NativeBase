import React from 'react';
import type { AppProps } from 'next/app';
import { NativeBaseProvider } from '../../src';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NativeBaseProvider>
      <Component {...pageProps} />
    </NativeBaseProvider>
  );
}
export default MyApp;
