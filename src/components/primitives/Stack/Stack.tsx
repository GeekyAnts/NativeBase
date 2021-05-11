import React, { memo, forwardRef } from 'react';
import { default as Box } from '../Box';
import { getSpacedChildren } from '../../../utils';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import type { IBoxProps } from '../Box';
import type { ResponsiveValue } from '../../types';

export interface IStackProps extends IBoxProps {
  /**
   * The divider element to use between elements.
   */
  divider?: JSX.Element;
  /**
   * The space between each stack item. Accepts Responsive values
   */
  space?: ResponsiveValue<
    'gutter' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | number
  >;
  /**
   * Determines whether to reverse the direction of Stack Items.
   */
  reversed?: boolean;
  /**
   * The direction of the Stack Items.
   * @default column
   */
  direction?: ResponsiveValue<'column' | 'row'>;
}

const Stack = (props: IStackProps, ref?: any) => {
  const { children, divider, reversed, ...remainingProps } = props;
  const { space, direction, ...newProps }: any = usePropsResolution(
    'Stack',
    remainingProps
  );

  return (
    <Box flexDirection={direction} {...newProps} ref={ref}>
      {getSpacedChildren(
        children,
        space,
        direction === 'row' ? 'X' : 'Y',
        reversed ? 'reverse' : 'normal',
        divider
      )}
    </Box>
  );
};

export default memo(forwardRef(Stack));
