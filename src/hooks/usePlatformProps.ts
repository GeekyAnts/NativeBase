import merge from 'lodash.merge';
import { Platform } from 'react-native';

export const usePlatformProps = (props: any) => {
  const { _web, _ios, _android, ...remainingProps } = props;
  const platformProps = () => {
    switch (Platform.OS) {
      case 'web':
        return _web;
      case 'ios':
        return _ios;
      case 'android':
        return _android;
      default:
        return {};
    }
  };
  return merge(remainingProps, platformProps());
};
