import { useEffect, useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import { useNativeBaseConfig } from '../core/NativeBaseContext';
import { isResponsiveAnyProp } from '../theme/tools';

export function useResponsiveSSRProps(incomingProps: any) {
  const [modified, setModified] = useState(false);
  const theme = useTheme();

  const responsivePropsExists = isResponsiveAnyProp(incomingProps, theme);
  const isSSR = useNativeBaseConfig('useBreakpointResolvedProps').isSSR;

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
