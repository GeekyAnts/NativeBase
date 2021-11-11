import type { IBoxProps } from '../../primitives/Box';
import type { ResponsiveValue } from '../../../components/types';

export interface IAspectRatioProps extends IBoxProps<IAspectRatioProps> {
  /**
   * The aspect ratio of the container. Some examples are `16/9`, `16/10`, `9/16`, `4/3`
   * @default 4/3
   */
  ratio?: ResponsiveValue<number>;
}
