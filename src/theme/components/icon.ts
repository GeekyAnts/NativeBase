import { default as allSizes } from './../base/sizes';
import { mode } from './../tools';
import omit from 'lodash/omit';

const sizes = omit(allSizes, ['container']);
const baseStyle = (props: Record<string, any>) => {
  return {
    color: mode('gray.100', 'gray.800')(props),
  };
};

const defaultProps = { size: 8, color: 'primary' };
export default { baseStyle, sizes, defaultProps };
