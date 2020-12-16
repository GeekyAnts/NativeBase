import { Config, system } from 'styled-system';
import type * as CSS from 'csstype';

const config: Config = {
  listStyleType: true,
  listStylePosition: true,
  listStylePos: {
    property: 'listStylePosition',
  },
  listStyleImage: true,
  listStyleImg: {
    property: 'listStyleImage',
  },
};

export interface customListProps {
  listStyleType?: CSS.Property.ListStyleType;
  /**
   * The CSS `list-style-position` property
   */
  listStylePosition?: CSS.Property.ListStylePosition;
  /**
   * The CSS `list-style-position` property
   */
  listStylePos?: CSS.Property.ListStylePosition;
  /**
   * The CSS `list-style-image` property
   */
  listStyleImage?: CSS.Property.ListStyleImage;
  /**
   * The CSS `list-style-image` property
   */
  listStyleImg?: CSS.Property.ListStyleImage;
}

export const customList = system(config);
