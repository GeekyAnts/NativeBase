import { mode } from '../tools';
import { Platform } from 'react-native';

function baseStyle(props: Record<string, any>) {
  return {
    bg: mode('muted.200', 'muted.700')(props),
    borderColor: mode('muted.300', 'muted.600')(props),
    borderWidth: 2,
    borderBottomWidth: 4,
    shadow: 1,
    borderRadius: 'md',
    px: 2,
    _text: {
      fontSize: 'sm',
      fontWeight: 'bold',
      fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
    },
  };
}

const defaultProps = {};
export default {
  baseStyle,
  defaultProps,
};
