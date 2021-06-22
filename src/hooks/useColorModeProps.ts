import merge from 'lodash.merge';
import { useColorMode } from '../core/color-mode';

export const useColorModeProps = (props: any) => {
  const { _light, _dark, ...remainingProps } = props;
  const { colorMode } = useColorMode();
  const colorModeProps = () => {
    switch (colorMode) {
      case 'light':
        return _light;
      case 'dark':
        return _dark;
      default:
        return {};
    }
  };
  return merge(remainingProps, colorModeProps());
};
