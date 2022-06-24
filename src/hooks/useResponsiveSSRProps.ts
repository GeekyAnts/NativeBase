import { useEffect, useState } from 'react';
import { useNativeBaseConfig } from '../core/NativeBaseContext';
import { isResponsiveAnyProp } from '../theme/tools';

export function useResponsiveSSRProps(incomingProps: any, theme: any) {
  const [modified, setModified] = useState(false);
  // const theme = useTheme();

  const isSSR = useNativeBaseConfig('NativeBase').isSSR;

  let responsivePropsExists = false;
  if (isSSR) {
    responsivePropsExists = isResponsiveAnyProp(incomingProps, theme);
  }

  let modifiedProps = incomingProps;
  if (responsivePropsExists && isSSR && !modified) {
    modifiedProps = { ...modifiedProps, key: Math.random() };
  }
  useEffect((): any => {
    if (responsivePropsExists && isSSR) {
      setModified(true);
    }
  }, [responsivePropsExists, isSSR]);

  return modifiedProps;
}
