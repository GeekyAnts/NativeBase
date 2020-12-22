import baseSizes from './../base/sizes';
import typography from './../base/typography';
import { mode } from './../tools';

function getSizes() {
  let spaceValues: any = {};
  for (let key in baseSizes) {
    if (key !== 'container') {
      spaceValues[key] = {
        // @ts-ignore
        dimension: baseSizes[key],
      };
    }
  }
  let fontValues: any = {};
  for (let key in typography.fontSizes) {
    fontValues[key] = {
      // @ts-ignore
      dimension: typography.fontSizes[key],
    };
  }
  return { ...fontValues, ...spaceValues };
}

const sizes = getSizes();
const baseStyle = (props: Record<string, any>) => {
  return {
    color: mode(undefined, 'white')(props),
    size: 20,
  };
};
export default { sizes, baseStyle };
