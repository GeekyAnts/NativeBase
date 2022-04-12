const placementProps: any = {
  'top-right': { top: 4, right: 4, position: 'absolute' },
  'top-left': { top: 4, left: 4, position: 'absolute' },
  'bottom-right': { bottom: 4, right: 4, position: 'absolute' },
  'bottom-left': { bottom: 4, left: 4, position: 'absolute' },
  'top-center':{left:'50%',position:'absolute',},
  'bottom-center':{left:'50%',bottom:0,position:'absolute',},
  'center':{left:'50%',top:'50%',position:'absolute',},
  'left-center':{top:'50%',position:'absolute',}, 
  'right-center':{top:'50%',right:0,position:'absolute',}
};
const baseStyle = {
  shadow: 7,
  rounded: 'full',
  zIndex: 20,
  placementProps,
  px: 4,
  py: 4,
};
const defaultProps = {
  renderInPortal: true,
  variant: 'solid',
  colorScheme: 'primary',
  placement: 'bottom-right',
};

export default { baseStyle, defaultProps };
