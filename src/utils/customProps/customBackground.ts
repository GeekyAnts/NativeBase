import { Config, system } from 'styled-system';
import type * as CSS from 'csstype';

const config: Config = {
  bgColor: {
    property: 'backgroundColor',
    scale: 'colors',
  },
  bg: {
    property: 'backgroundColor',
    scale: 'colors',
  },
  backgroundColor: {
    property: 'backgroundColor',
    scale: 'colors',
  },
  backgroundImage: true,
  backgroundSize: true,
  backgroundPosition: true,
  backgroundRepeat: true,
  backgroundAttachment: true,
  backgroundBlendMode: true,
  bgImage: {
    property: 'backgroundImage',
  },
  bgImg: {
    property: 'backgroundImage',
  },
  bgBlendMode: {
    property: 'backgroundBlendMode',
  },
  bgSize: {
    property: 'backgroundSize',
  },
  bgPosition: {
    property: 'backgroundPosition',
  },
  bgPos: {
    property: 'backgroundPosition',
  },
  bgRepeat: {
    property: 'backgroundRepeat',
  },
  bgAttachment: {
    property: 'backgroundAttachment',
  },
};

export interface customBackgroundProps {
  bg?: CSS.Property.BackgroundColor;

  bgColor?: CSS.Property.BackgroundColor;

  backgroundColor?: CSS.Property.BackgroundColor;

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
export const customBackground = system(config);
