import { mode } from './../tools';

const baseStyle = (props: Record<string, any>) => {
  return {
    color: mode('muted.700', 'white')(props),
  };
};
const defaultProps = {
  fontWeight: 400,
  letterSpacing: '3xl',
  fontFamily: 'body',
  fontStyle: 'normal',
};

export default { baseStyle, defaultProps };
