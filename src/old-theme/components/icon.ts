import { default as allSizes } from './../base/sizes';
import { mode } from './../tools';
import omit from 'lodash/omit';

const sizes = omit(allSizes, ['container']);
const baseStyle = (props: Record<string, any>) => {
  return {
    color: mode(undefined, 'white')(props),
  };
};

const defaultProps = { size: 5 };
export default { baseStyle, sizes, defaultProps };
