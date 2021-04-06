import React from 'react';
import { default as Box } from '../Box';
import { getSpacedChildren } from '../../../utils';
import { useThemeProps } from '../../../hooks';
import type { IBoxProps } from '../Box';

type SpaceType = 'gutter' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type IStackProps = IBoxProps & {
  children: React.ReactNode[];
  divider?: JSX.Element;
  space?: number | SpaceType;
  reversed?: boolean;
};
const Stack = (
  props: IStackProps & { direction?: 'column' | 'row' },
  ref?: any
) => {
  const {
    space,
    children,
    divider,
    reversed,
    direction,
    ...remainingProps
  } = props;
  const newProps: any = useThemeProps('Stack', remainingProps);
  console.log('mancn', newProps);

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

// Exporting this to use it inside HStack and VStack only,
export { Stack as StackMain };
export default React.memo(React.forwardRef(Stack));
