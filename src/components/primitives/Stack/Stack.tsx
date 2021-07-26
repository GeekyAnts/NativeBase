import React, { memo, forwardRef } from 'react';
import { default as Box } from '../Box';
import { getSpacedChildren } from '../../../utils';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import type { IBoxProps } from '../Box';
import type { ResponsiveValue } from '../../types';
import { useBreakpointResolvedProps } from '../../../hooks';

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
  const {
    children,
    space,
    direction,
    divider,
    reversed,
    ...remainingProps
  } = props;
  const newProps: any = usePropsResolution('Stack', remainingProps);

  const {
    space: resolvedSpace,
    direction: resolvedDirection,
  } = useBreakpointResolvedProps({ space, direction });

  return (
    <Box flexDirection={resolvedDirection} {...newProps} ref={ref}>
      {getSpacedChildren(
        children,
        resolvedSpace,
        resolvedDirection === 'row' ? 'X' : 'Y',
        reversed ? 'reverse' : 'normal',
        divider
      )}
    </Box>
  );
};

export default memo(forwardRef(Stack));
