import { isDark, randomColor, mode } from './../tools';

const baseStyle = (props: Record<string, any>) => {
  const { name, theme, ...colorModeProps } = props;
  const bg = name ? randomColor({ string: name }) : 'gray.400';
  const color = name ? (isDark(bg)(theme) ? 'gray.800' : 'gray.100') : 'white';
  const borderColor = mode('gray.800', 'white')(colorModeProps);
  return {
    bg,
    color,
    borderColor,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 'full',
    fontWeight: 600,
  };
};

function getSize(size: any, fontSize: string) {
  return {
    width: size,
    height: size,
    fontSize: fontSize,
  };
}

const sizes = {
  '2xs': getSize('4', 'xs'),
  'xs': getSize('6', 'sm'),
  'sm': getSize('8', 'md'),
  'md': getSize('12', 'lg'),
  'lg': getSize('16', 'xl'),
  'xl': getSize('24', '2xl'),
  '2xl': getSize('32', '3xl'),
  'full': getSize('100%', '4xl'),
};

const defaultProps = {
  size: 'md',
};

export default {
  baseStyle,
  sizes,
  defaultProps,
};
