import { useSxStyledSystemPropsResolver } from './useSxStyledSystemPropsResolver';
import { useNativeBaseConfig } from '../../core/NativeBaseContext';
import { isArray } from 'lodash';
export const useSx = () => {
  const isSSR = useNativeBaseConfig('useBreakpointResolvedProps').isSSR;
  const Sx = (query: any) => {
    if (isSSR && hasResposiveProps(query)) {
      console.warn("useSx prop doesn't resolve responsive prop with SSR");
    }
    const resolvedStyle = useSxStyledSystemPropsResolver(query);
    return resolvedStyle;
  };
  return Sx;
};

// Need a Better Logic to Identify object responsive props

/**
 *
 * @param query
 * @returns Boolean
 */

const hasResposiveProps = (query: any) => {
  for (const item of Object.keys(query)) {
    if (isArray(query[item])) return true;
  }
  return false;
};
