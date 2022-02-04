import React, { memo, forwardRef } from 'react';
import { default as Box } from '../Box';
import { getSpacedChildren } from '../../../utils';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import type { IBoxProps } from '../Box';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import type { ResponsiveValue, SpaceType } from '../../types';
import { ResponsiveQueryContext } from '../../../utils/useResponsiveQuery/ResponsiveQueryProvider';

export interface IStackProps extends IBoxProps<IStackProps> {
  /**
   * The divider element to use between elements.
   */
  divider?: JSX.Element;
  /**
   * The space between each stack item. Accepts Responsive values
   */
  space?: ResponsiveValue<
    'gutter' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | SpaceType
  >;
  /**
   * Determines whether to reverse the direction of Stack Items.
   */
  reversed?: boolean;
  /**
   * The direction of the Stack Items.
   * @default column
   */
  direction?: ResponsiveValue<
    'column' | 'row' | 'column-reverse' | 'row-reverse'
  >;
}

const Stack = ({ space, ...props }: IStackProps, ref?: any) => {
  const dir = props.direction;
  const {
    children,
    direction,
    reversed,
    divider,
    size,
    ...resolvedProps
  }: any = usePropsResolution(
    'Stack',
    { ...props, size: space },
    {},
    { resolveResponsively: ['space', 'direction'] }
  );

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const responsiveQueryContext = React.useContext(ResponsiveQueryContext);
  const disableCSSMediaQueries = responsiveQueryContext.disableCSSMediaQueries;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const resolvedGap = useToken('space', space);

  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }

  return (
    <Box
      flexDirection={dir}
      {...resolvedProps}
      ref={ref}
      // @ts-ignore
      gap={disableCSSMediaQueries ? undefined : size}
    >
      {getSpacedChildren(
        children,
        size,
        direction === 'row' ? 'X' : 'Y',
        reversed ? 'reverse' : 'normal',
        divider
      )}
    </Box>
  );
};

export default memo(forwardRef(Stack));
