import { useWindowDimensions } from 'react-native';
import { isResponsiveAnyProp } from '../theme/tools';

export function useHasResponsiveProps(props: any) {
  const windowDimensions = useWindowDimensions();

  if (!windowDimensions.width || !windowDimensions.height) {
    const responsivePropsExists = isResponsiveAnyProp(props);
    if (responsivePropsExists) {
      return true;
    }
  }
  return false;
}
