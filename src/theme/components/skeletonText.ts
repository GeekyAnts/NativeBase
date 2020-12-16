import { getColor } from '../tools/colors';

const baseStyle = (props: Record<string, any>) => {
  let { startColor, endColor, theme } = props;
  let skeletonColor = getColor(theme, startColor, theme.colors.muted[200]);
  let baseColor = getColor(theme, endColor, 'transparent');
  return {
    skeletonColor,
    baseColor,
  };
};

const defaultProps = {
  isLoaded: false,
  lineSize: 2,
  noOfLines: 3,
};

export default {
  baseStyle,
  defaultProps,
};
