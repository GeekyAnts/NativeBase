import { mode } from '../tools';
// List
export const List = {
  baseStyle: (props: Record<string, any>) => {
    return {
      py: 2,
      borderWidth: 1,
      borderColor: 'gray.300',
      _hover: { bg: mode('primary.100', 'primary.700')(props) },
    };
  },
};

// ListItem
export const ListItem = {
  baseStyle: {
    // borderTopWidth: 1,
    py: 2,
    borderColor: 'gray.300',
  },
  defaultProps: {
    start: 1,
  },
};

// ListIcon
export const ListIcon = {
  baseStyle: {
    mr: 8,
    size: 'md',
  },
};
