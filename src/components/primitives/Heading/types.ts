import type { InterfaceTextProps } from '../Text/types';

import type { CustomProps, ThemeComponentSizeType } from '../../types/utils';

export interface IterfaceHeadingProps
  extends InterfaceTextProps<IHeadingProps> {
  /**
   * The size of the heading.
   * @default xl
   */
  size?: ThemeComponentSizeType<'Heading'>;
}

export type IHeadingProps = IterfaceHeadingProps & CustomProps<'Heading'>;
