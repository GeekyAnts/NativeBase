//Fade
// const fadeDefaultProps = {
//   entryDuration: 500,
//   exitDuration: 500,
// };

export const fadeBaseStyle = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 500 } },
  exit: { opacity: 0, transition: { duration: 500 } },
};
export const Fade = {
  baseStyle: fadeBaseStyle,
};

//ScaleFade
//Can be commented if not used anywhere else
// const scaleFadeDefaultProps = {
//   duration: 500,
//   initialScale: 0.9,
// };

const scaleBaseStyle = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1, transition: 500 },
  exit: { opacity: 0, scale: 0.9, transition: 500 },
};
export const ScaleFade = {
  baseStyle: scaleBaseStyle,
};

//Slide
const slideDefaultProps = {
  duration: 500,
  placement: 'bottom',
  overlay: true,
  _overlay: { isOpen: true },
};

export const Slide = {
  baseStyle: {
    h: '100%',
    pointerEvents: 'box-none',
    _overlay: { style: { overflow: 'hidden' } },
  },
  defaultProps: slideDefaultProps,
};

//SlideFade
const slideFadeDefaultProps = {
  duration: 500,
  offsetX: 10,
  offsetY: 10,
};

export const SlideFade = {
  defaultProps: slideFadeDefaultProps,
};
