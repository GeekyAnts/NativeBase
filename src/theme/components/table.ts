import { mode } from '../tools';

export const Table = {
  baseStyle: (props: any) => {
    return {
      textAlign: 'center',
      w: '100%',
      bg: mode('trueGray.50', 'trueGray.900')(props),
      borderRadius: '8',
    };
  },
};

export const TableRow = {
  baseStyle: (props: any) => ({
    borderColor: mode('muted.200', 'muted.200')(props),
  }),
};

export const TableHeaderData = {
  baseStyle: (props: any) => ({
    px: '5',
    py: '3',
    _text: {
      fontWeight: '700',
      fontSize: 'md',
      color: mode('muted.500', 'muted.500')(props),
    },
  }),
};

export const TableData = {
  baseStyle: (props: any) => ({
    px: '5',
    py: '3',
    _text: {
      fontSize: 'md',
      color: mode('trueGray.900', 'trueGray.50')(props),
    },
  }),
};
