import React from 'react';
import styled from 'styled-components/native';
import { IViewProps, default as View } from '../View';
import { getSpacedChildren } from '../../../utils';

type SpaceType = 'gutter' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

const StyledStack = styled(View)<IStackProps>({});
export type IStackProps = IViewProps & {
  children: JSX.Element[] | JSX.Element;
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
  return (
    <StyledStack flexDirection={direction} {...remainingProps} ref={ref}>
      {getSpacedChildren(
        children,
        space,
        direction === 'row' ? 'X' : 'Y',
        reversed ? 'reverse' : 'normal',
        divider
      )}
    </StyledStack>
  );
};

// Exporting this to use it inside HStack and VStack only,
export { Stack as StackMain };
export default React.memo(React.forwardRef(Stack));
