import type * as CSS from 'csstype';

import type { BackgroundColorProps as ssBackgroundColorProps } from 'styled-system';

export interface BackgroundProps extends ssBackgroundColorProps {
  // Both exist on ssColorProps
  // bg?: CSS.Property.BackgroundColor;
  // backgroundColor?: CSS.Property.BackgroundColor;

  bgColor?: CSS.Property.BackgroundColor;

  backgroundImage?: CSS.Property.BackgroundImage;

  backgroundSize?: CSS.Property.BackgroundSize;

  backgroundPosition?: CSS.Property.BackgroundPosition;

  backgroundRepeat?: CSS.Property.BackgroundRepeat;

  backgroundAttachment?: CSS.Property.BackgroundAttachment;

  backgroundBlendMode?: CSS.Property.BackgroundBlendMode;

  bgImage?: CSS.Property.BackgroundImage;

  bgImg?: CSS.Property.BackgroundImage;

  bgBlendMode?: CSS.Property.BackgroundBlendMode;

  bgSize?: CSS.Property.BackgroundSize;

  bgPosition?: CSS.Property.BackgroundPosition;

  bgPos?: CSS.Property.BackgroundPosition;

  bgRepeat?: CSS.Property.BackgroundRepeat;

  bgAttachment?: CSS.Property.BackgroundAttachment;
}
