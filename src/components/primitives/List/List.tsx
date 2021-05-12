import React, { memo, forwardRef } from 'react';
import { VStack } from '../Stack';
import type { IListProps, IListItemProps } from './types';
import { usePropsResolution } from '../../../hooks/useThemeProps';

const List = ({ children, divider, ...props }: IListProps, ref?: any) => {
  const { _text, _hover, _focus, _pressed, ...newProps } = usePropsResolution(
    'List',
    props
  );
  // add props to children
  children = React.Children.map(children, (child: any, ind: number) => {
    return React.cloneElement(child, {
      index: ind,
      _text: { ..._text, ...child.props?._text },
      _hover: { ..._hover, ...child.props?._hover },
      _focus: { ..._focus, ...child.props?._focus },
      _pressed: { ..._pressed, ...child.props?._pressed },
    });
  });

  return (
    <VStack divider={divider} ref={ref} {...newProps}>
      {children}
    </VStack>
  );
};

export type { IListProps, IListItemProps };
export default memo(forwardRef(List));
