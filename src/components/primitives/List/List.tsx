import React from 'react';
import { VStack } from '../Stack';
import type { IListProps, IListItemProps } from './types';
import { useThemeProps } from '../../../hooks';

const List = ({ children, spacing, ...props }: IListProps, ref?: any) => {
  const { _text, ...newProps } = useThemeProps('List', props);
  // add props to children
  children = React.Children.map(children, (child: any, ind: number) => {
    return React.cloneElement(
      child,
      {
        index: ind,
        py: spacing,
        _text: _text,
        ...child.props,
      },
      child.props.children
    );
  });
  return (
    <VStack ref={ref} {...newProps}>
      {children}
    </VStack>
  );
};

export type { IListProps, IListItemProps };
export default React.memo(React.forwardRef(List));
