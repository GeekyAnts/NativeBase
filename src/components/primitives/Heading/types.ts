import type { ITextProps } from '../Text';
import type { ResponsiveValue } from '../../../components/types';
import type { ISizes } from '../../../theme/base/sizes';

export interface IHeadingProps extends ITextProps {
  /**
   * The size of the heading.
   * @default xl
   */
  size?: ResponsiveValue<ISizes | (string & {}) | number>;
}
