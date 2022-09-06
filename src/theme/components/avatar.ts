import { randomColor, getRandomString } from './../tools';
import type { InterfaceAvatarProps } from '../../components/composites/Avatar/types';
const baseStyle = (props: InterfaceAvatarProps & { name: string }) => {
  const { name } = props;
  const bg = name
    ? randomColor({ string: getRandomString(5) + name })
    : 'gray.400';
  return {
    bg,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 'full',
    _text: {
      fontWeight: 600,
      color: 'text.50',
    },
    _image: {
      borderRadius: 'full',
      alt: '--',
      _alt: {
        fontWeight: 600,
      },
      style: {
        height: '100%',
        width: '100%',
      },
    },
    borderColor: 'gray.800',
    _dark: {
      borderColor: 'white',
    },
  };
};

function getSize(size: any, fontSize: string, badgeSize: any) {
  return {
    width: size,
    height: size,
    _text: {
      fontSize: fontSize,
    },
    _badgeSize: badgeSize,
  };
}

const sizes = {
  'xs': getSize('6', '2xs', '2'),
  'sm': getSize('8', 'xs', '3'),
  'md': getSize('12', 'md', '4'),
  'lg': getSize('16', 'xl', '5'),
  'xl': getSize('24', '3xl', '6'),
  '2xl': getSize('32', '5xl', '7'),
};

const defaultProps = {
  size: 'md',
};

export default {
  baseStyle,
  sizes,
  defaultProps,
};
