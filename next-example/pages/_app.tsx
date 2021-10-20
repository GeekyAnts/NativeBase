import React from 'react';
import type { AppProps } from 'next/app';
import { NativeBaseProvider } from 'native-base';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NativeBaseProvider>
      <Component {...pageProps} />
    </NativeBaseProvider>
  );
}
export default MyApp;
