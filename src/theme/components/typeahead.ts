import { mode } from '../tools/colors';

const typeaheadSearchItemBaseStyle = (props: Record<string, any>) => {
  return {
    backgroundColor: mode('gray.100', 'gray.600')(props),
    _focus: {
      backgroundColor: mode('default.300', 'default.700')(props),
    },
    _disabled: {
      backgroundColor: 'gray.200',
    },
  };
};

export const TypeAheadSearchItem = {
  baseStyle: typeaheadSearchItemBaseStyle,
};
