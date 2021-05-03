export const Select = {
  baseStyle: {
    customDropdownIconProps: {
      type: 'MaterialCommunityIcons',
      name: 'chevron-down',
      size: 5,
      mr: 2,
    },
    _actionSheetContent: {
      maxHeight: '50%',
      pb: 6,
    },
  },
  defaultProps: {
    variant: 'outline',
  },
};

// SelectIcon - only for custom variant
export const SelectItem = {
  baseStyle: {
    p: 1,
    px: 2,
    borderRadius: 0,
    minH: 0,
  },
};
