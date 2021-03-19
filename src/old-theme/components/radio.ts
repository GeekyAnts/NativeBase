import { mode, getColorScheme } from '../tools';

const baseStyle = (props: Record<string, any>) => {
  const { isInvalid } = props;
  const simplifiedColorScheme = getColorScheme(props);
  const activeColor = mode(
    `${simplifiedColorScheme}.500`,
    `${simplifiedColorScheme}.200`
  )(props);
  return {
    activeColor,
    borderColor: isInvalid
      ? mode('danger.500', 'danger.200')(props)
      : mode('muted.400', 'muted.600')(props),
  };
};

const sizes = {
  lg: { size: 5 },
  md: { size: 4 },
  sm: { size: 3 },
};

const defaultProps = {
  defaultIsChecked: false,
  size: 'md',
  colorScheme: 'default',
};

export default {
  baseStyle,
  sizes,
  defaultProps,
};
