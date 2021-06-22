//Fade
const fadeDefaultProps = {
  entryDuration: 500,
  exitDuration: 500,
};

export const Fade = {
  defaultProps: fadeDefaultProps,
};

//ScaleFade
const scaleFadeDefaultProps = {
  duration: 500,
  initialScale: 0.9,
};

export const ScaleFade = {
  defaultProps: scaleFadeDefaultProps,
};

//Slide
const slideDefaultProps = {
  duration: 500,
  placement: 'bottom',
};

export const Slide = {
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
