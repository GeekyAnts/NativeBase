import Badge from './badge';
import { Platform } from 'react-native';

const { variants, defaultProps } = Badge;

const baseStyle = {
  _text: {
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
    fontSize: 'sm',
  },
  borderRadius: 'xs',
  px: 2,
  py: 1,
};

export default {
  baseStyle,
  variants,
  defaultProps,
};
