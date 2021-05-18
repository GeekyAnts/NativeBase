const placementProps: any = {
  'top-right': { top: 12, right: 4, position: 'absolute' },
  'top-left': { top: 12, left: 4, position: 'absolute' },
  'bottom-right': { bottom: 4, right: 4, position: 'absolute' },
  'bottom-left': { bottom: 4, left: 4, position: 'absolute' },
};
const defaultProps = {
  variant: 'solid',
  colorScheme: 'primary',
  rounded: 'full',
  zIndex: 20,
  placementProps,
  p: 4,
  placement: 'bottom-right',
};
const baseStyle = {
  shadow: 7,
};

export default { baseStyle, defaultProps };
