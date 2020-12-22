import { Platform } from 'react-native';
import { extractInObject } from './../theme/tools/';
import isEmpty from 'lodash/isEmpty';

export const filterShadowProps = (props: any, ignoredProps: any) => {
  if (Platform.OS === 'web') {
    return { ...ignoredProps, ...props };
  }
  let style = ignoredProps.style ?? {};
  let [shadowProps, remainingProps] = extractInObject(props, [
    'shadowColor',
    'shadowOffset',
    'shadowOpacity',
    'shadowRadius',
  ]);
  if (!isEmpty(shadowProps)) {
    style = { ...style, ...shadowProps };
  }
  return { ...remainingProps, ...ignoredProps, style };
};
