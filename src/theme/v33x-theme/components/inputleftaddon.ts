import { mode } from '../tools';

const baseStyle = (props: Record<string, any>) => {
  return {
    borderRightWidth: '0',
    roundedLeft: '4',
    bg: mode('gray.50', 'gray.700')(props),
    p: '2',
    borderColor: mode('gray.300', 'gray.600')(props),
    borderWidth: '1',
    _text: {
      color: mode('muted.400', 'muted.500')(props),
      fontWeight: 600,
    },
    alignItems: 'center',
    justifyContent: 'center',
  };
};

export default { baseStyle };
