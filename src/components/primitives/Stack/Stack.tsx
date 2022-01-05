import React, { memo, forwardRef } from 'react';
import { default as Box } from '../Box';
import { getSpacedChildren } from '../../../utils';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import type { IBoxProps } from '../Box';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import type { ResponsiveValue, SpaceType } from '../../types';
import { ResponsiveQueryContext } from '../../../utils/useResponsiveQuery/ResponsiveQueryProvider';
import { useToken } from '../../../hooks';

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
  let dir = props.direction;
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
    { resolveResponsively: ['direction'] }
  );

  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }

  const responsiveQueryContext = React.useContext(ResponsiveQueryContext);
  const disableCSSMediaQueries = responsiveQueryContext.disableCSSMediaQueries;

  const resolvedGap = useToken('space', size);

  return (
    <Box flexDirection={dir} {...resolvedProps} ref={ref} style={disableCSSMediaQueries ? {} : { gap: resolvedGap }}>
      {
        getSpacedChildren(
          children,
          size,
          direction === 'row' ? 'X' : 'Y',
          reversed ? 'reverse' : 'normal',
          divider
        )}
    </Box >
  );
};

export default memo(forwardRef(Stack));
