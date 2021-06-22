import { mode } from './../tools';

const baseStyle = (props: Record<string, any>) => {
  return {
    color: mode('muted.700', 'white')(props),
    fontWeight: 400,
    fontFamily: 'body',
    fontStyle: 'normal',
  };
};
const defaultProps = {};

export default { baseStyle, defaultProps };
