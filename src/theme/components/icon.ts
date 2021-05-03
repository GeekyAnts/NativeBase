import { default as allSizes } from './../base/sizes';
import { mode } from './../tools';
import omit from 'lodash/omit';

let sizes = omit(allSizes, ['container']);
const baseStyle = (props: Record<string, any>) => {
  return {
    color: mode('muted.800', 'muted.100')(props),
  };
};

const iconSizes = {
  'xxs': '2',
  'xs': '4',
  'sm': '6',
  'md': '8',
  'lg': '10',
  'xl': '12',
  '2xl': '16',
  '3xl': '20',
  '4xl': '24',
  '5xl': '32',
  '6xl': '64',
};

sizes = {
  ...sizes,
  ...iconSizes,
};

const defaultProps = { size: 'md', color: 'primary' };
export default { baseStyle, sizes, defaultProps };
