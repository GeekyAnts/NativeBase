import { getColorScheme } from '../tools';

const baseStyle = {
  flexDirection: 'row',
  space: 1,
  px: '2',
  py: '0.5',
  alignItems: 'center',
  _text: { fontSize: 'xs', fontWeight: 'medium' },
};

function variantSolid(props: Record<string, any>) {
  const colorScheme = getColorScheme(props);
  return {
    _text: {
      color: 'text.50',
    },
    _icon: {
      color: 'text.50',
    },
    bg: `${colorScheme}.600`,
    borderWidth: '1',
    borderColor: 'transparent',
    borderRadius: '2',
  };
}

function variantSubtle(props: Record<string, any>) {
  const colorScheme = getColorScheme(props);
  return {
    _text: { color: `${colorScheme}.900` },
    _icon: { color: `${colorScheme}.900` },
    _light: { bg: `${colorScheme}.100` },
    _dark: { bg: `${colorScheme}.300` },
    borderWidth: '1',
    borderRadius: '2',
    borderColor: 'transparent',
  };
}

function variantOutline(props: Record<string, any>) {
  const colorScheme = getColorScheme(props);
  return {
    _light: {
      _text: { color: `${colorScheme}.600` },
      _icon: { color: `${colorScheme}.600` },
      borderColor: `${colorScheme}.600`,
    },
    _dark: {
      _text: {
        color: `${colorScheme}.300`,
      },
      _icon: {
        color: `${colorScheme}.300`,
      },
      borderColor: `${colorScheme}.300`,
    },
    borderRadius: '2',
    borderWidth: '1',
  };
}

const variants = {
  solid: variantSolid,
  subtle: variantSubtle,
  outline: variantOutline,
};

const defaultProps = {
  variant: 'subtle',
  colorScheme: 'muted',
  size: 'md',
};

export default {
  baseStyle,
  variants,
  defaultProps,
};
