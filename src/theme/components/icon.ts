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
  'xs': '16',
  'sm': '20',
  'md': '24',
  'lg': '30',
  'xl': '34',
  '2xl': '38',
  '3xl': '42',
  '4xl': '48',
  '5xl': '56',
  '6xl': '64',
};

sizes = {
  ...sizes,
  ...iconSizes,
};

const defaultProps = { size: 8, color: 'primary' };
export default { baseStyle, sizes, defaultProps };
