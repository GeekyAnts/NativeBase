import { mode } from './../tools';
import { Easing } from 'react-native';

const baseStyle = (props: Record<string, any>) => {
  // NOTE: Internal pseudo props like _stack, _overlay nad _presenceTransition can only be update by the theme.
  return {
    bg: mode(`coolGray.600`, `warmGray.200`)(props),
    p: '2',
    rounded: 'sm',
    shadow: 1,
    // The stack in which toast are being rendered
    _stack: {
      margin: 'auto',
      position: 'absolute',
      space: 2,
      alignItems: 'center',
      justifyContent: 'center',
      pointerEvents: 'box-none',
    },
    _overlay: {},
    _presenceTransition: {
      animate: {
        opacity: 1,
        transition: { easing: Easing.ease, duration: 250 },
      },
      exit: {
        opacity: 0,
        scale: 0.85,
        transition: { easing: Easing.ease, duration: 100 },
      },
    },
    _title: {
      color: mode(`warmGray.200`, `coolGray.600`)(props),
      fontWeight: 700,
    },
    _description: {
      color: mode(`warmGray.200`, `coolGray.600`)(props),
      fontWeight: 400,
    },
  };
};

export const Toast = {
  baseStyle,
  defaultProps: {},
};
