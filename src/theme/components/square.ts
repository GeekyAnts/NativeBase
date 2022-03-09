import type { Dict } from './../tools';

const baseStyle = (props: Dict) => ({
  alignItems: 'center',
  justifyContent: 'center',
  size: props?.size,
  height: props?.height,
  width: props?.width,
});

export default {
  baseStyle,
};
