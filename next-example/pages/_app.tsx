import React from 'react';
import type { AppProps } from 'next/app';

const ClientOnly = (props: any) => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? props.children : null;
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClientOnly>
      <Component {...pageProps} />
    </ClientOnly>
  );
}
export default MyApp;
