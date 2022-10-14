import { useStyledSystemPropsResolver } from '../useStyledSystemPropsResolver';
import { useNativeBaseConfig } from '../../core/NativeBaseContext';
import { isResponsiveAnyProp } from '../../theme/tools';
import { useTheme } from '../useTheme';
import { useMemo } from 'react';
//@ts-ignore
import stableHash from 'stable-hash';
import type { StyledProps } from '../../theme/types';

export const useSx = () => {
  const isSSR = useNativeBaseConfig('useBreakpointResolvedProps').isSSR;
  const theme = useTheme();
  const Sx = (query: StyledProps) => {
    const StableHashQuery = stableHash(query);
    const checkWarning = useMemo(() => {
      return isResponsiveAnyProp(query, theme);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [StableHashQuery]);

    if (isSSR && checkWarning) {
      console.warn("useSx prop doesn't resolve responsive prop with SSR");
    }
    // eslint-disable-next-line
    const [_style, _restProps, styleFromProps] = useStyledSystemPropsResolver(
      query
    );

    return styleFromProps;
  };
  return Sx;
};
