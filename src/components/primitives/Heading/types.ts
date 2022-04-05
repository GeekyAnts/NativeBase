import type { ITextProps } from '../Text';

import type { CustomProps, ThemeComponentSizeType } from '../../types/utils';

export interface IterfaceHeadingProps extends ITextProps {
  /**
   * The size of the heading.
   * @default xl
   */
  size?: ThemeComponentSizeType<'Heading'>;
}

export type IHeadingProps = IterfaceHeadingProps & CustomProps<'Heading'>;
