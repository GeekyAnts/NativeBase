import type { ITextProps } from '../Text';
import type { ResponsiveValue } from '../../../components/types';
import type { ISizes } from '../../../theme/base/sizes';

import type { CustomProps, ThemeComponentSizeType } from '../../types/utils';

export interface IterfaceHeadingProps extends ITextProps {
  /**
   * The size of the heading.
   * @default xl
   */
  size?:
    | ResponsiveValue<ISizes | (string & {}) | number>
    | ThemeComponentSizeType<'Heading'>;
}

export type IHeadingProps = IterfaceHeadingProps & CustomProps<'Heading'>;
