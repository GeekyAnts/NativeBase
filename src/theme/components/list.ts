// List
export const List = {
  baseStyle: () => {
    return {
      _web: {
        cursor: 'default',
      },
    };
  },
};

// ListItem
export const ListItem = {
  baseStyle: {
    py: 1,
    borderColor: 'gray.300',
    _bullet: {
      mr: 1,
    },
  },
  defaultProps: {
    start: 1,
  },
};

// ListIcon
export const ListIcon = {
  baseStyle: {
    mr: 2,
    size: 'sm',
  },
};
