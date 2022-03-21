import { mode } from '../tools';

const baseStyle = (props: Record<string, any>) => {
  return {
    color: mode('coolGray.800', 'warmGray.50')(props),
    fontWeight: '400',
    fontFamily: 'body',
    fontStyle: 'normal',
    fontSize: 'sm',
    letterSpacing: 'md',
    lineHeight: 'lg',
  };
};
const defaultProps = {};

export default { baseStyle, defaultProps };
