import { getColor } from '../tools/colors';
import { mode } from '../tools';

const baseStyle = (props: Record<string, any>) => {
  let { startColor, endColor, theme } = props;
  let skeletonColor = getColor(
    theme,
    startColor,
    mode(theme.colors.muted[200], theme.colors.muted[100])(props)
  );
  let baseColor = getColor(theme, endColor, 'transparent');
  return {
    skeletonColor,
    baseColor,
  };
};

const defaultProps = {
  isLoaded: false,
};

export default {
  baseStyle,
  defaultProps,
};
