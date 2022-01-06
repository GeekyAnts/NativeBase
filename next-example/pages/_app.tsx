import React from 'react';
import type { AppProps } from 'next/app';
import { NativeBaseProvider } from 'native-base';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NativeBaseProvider isSSR>
      <Component {...pageProps} />
    </NativeBaseProvider>
  );
}
export default MyApp;
