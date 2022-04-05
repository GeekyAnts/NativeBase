import React, { memo, forwardRef } from 'react';
import { default as Box, InterfaceBoxProps } from '../Box';
import { getSpacedChildren } from '../../../utils';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import type { CustomProps, ResponsiveValue, SpaceType } from '../../types';
import { ResponsiveQueryContext } from '../../../utils/useResponsiveQuery/ResponsiveQueryProvider';

export interface InterfaceStackProps extends InterfaceBoxProps<IStackProps> {
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
  /**
   * If true, the Stack will be in hovered state.
   */
  isHovered?: boolean;
  /**
   * If true, the Stack will be focused.
   */
  isFocused?: boolean;
  /**
   * If true, the Stack will be disabled.
   */
  isDisabled?: boolean;
  /**
   * If true, the Stack will be invalid.
   */
  isInvalid?: boolean;
  /**
   * If true, prevents the value of the children from being edited. Used with FormControls.
   */
  isReadOnly?: boolean;
}

export type IStackProps = InterfaceStackProps & CustomProps<'Stack'>;

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
    {
      isDisabled: props.isDisabled,
      isHovered: props.isHovered,
      isFocused: props.isFocused,
      isInvalid: props.isInvalid,
      isReadOnly: props.isReadOnly,
    },
    { resolveResponsively: ['space', 'direction'] }
  );

  const responsiveQueryContext = React.useContext(ResponsiveQueryContext);
  const disableCSSMediaQueries = responsiveQueryContext.disableCSSMediaQueries;

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
