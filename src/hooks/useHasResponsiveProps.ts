import { useWindowDimensions } from 'react-native';
import { isResponsiveAnyProp } from '../theme/tools';
import isNil from 'lodash.isnil';

export function useHasResponsiveProps(props: any) {
  const windowDimensions = useWindowDimensions();
  if (isNil(windowDimensions.width) || isNil(windowDimensions.height)) {
    const responsivePropsExists = isResponsiveAnyProp(props);
    if (responsivePropsExists) {
      return true;
    }
  }
  return false;
}
