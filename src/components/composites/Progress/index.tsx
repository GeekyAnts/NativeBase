import React, { memo, forwardRef } from 'react';
import { Box } from '../../primitives';
import type { InterfaceBoxProps } from '../../primitives/Box';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import type { CustomProps, ResponsiveValue } from '../../../components/types';
import type { ISizes } from '../../../theme/base/sizes';

export interface InterfaceProgressProps
  extends InterfaceBoxProps<IProgressProps> {
  /**
   * Value of Progress.
   * @default 0
   */
  value?: number;
  /**
   * Defines height of Progress
   * @default sm
   */
  size?: ResponsiveValue<ISizes | (string & {}) | number>;

  /**
   * The color scheme of the progress. This should be one of the color keys in the theme (e.g."green", "red").
   * @default primary
   */
  colorScheme?: string;
  // /**
  //  * Whether progress is indeterminate
  //  * @default false
  //  */
  // isIndeterminate?: boolean;
  /**
   * Pseudo prop to give Prop to filled track
   */
  _filledTrack?: InterfaceBoxProps<IProgressProps>;
  /**
   * Min progress value
   * @default 0
   */
  min?: number;
  /**
   * Max progress value
   * @default 100
   */
  max?: number;
}

export type IProgressProps = InterfaceProgressProps & CustomProps<'Progress'>;
const Progress = (props: IProgressProps, ref?: any) => {
  const {
    min,
    max,
    value,
    _filledTrack,
    children,
    ...resolvedProps
  } = usePropsResolution('Progress', props);

  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }

  return (
    <Box
      {...resolvedProps}
      ref={ref}
      accessible
      accessibilityRole="progressbar"
      accessibilityValue={{
        min: min,
        max: max,
        now:
          value < max && value > min
            ? ((value - min) / (max - min)) * 100
            : value > min
            ? 100
            : 0,
      }}
    >
      <Box
        // {...resolvedProps}
        {..._filledTrack}
        w={
          value < max && value > min
            ? ((value - min) / (max - min)) * 100 + '%'
            : value > min
            ? '100%'
            : '0%'
        }
      >
        {children}
      </Box>
    </Box>
  );
};

export default memo(forwardRef(Progress));
