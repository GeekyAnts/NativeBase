import type { InterfaceBoxProps } from '../../primitives/Box';
import type { CustomProps, ResponsiveValue } from '../../../components/types';

export interface InterfaceAspectRatioProps
  extends InterfaceBoxProps<IAspectRatioProps> {
  /**
   * The aspect ratio of the container. Some examples are `16/9`, `16/10`, `9/16`, `4/3`
   * @default 4/3
   */
  ratio?: ResponsiveValue<number>;
}

export type IAspectRatioProps = InterfaceAspectRatioProps &
  CustomProps<'AspectRatio'>;
