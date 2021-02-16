import React from 'react';
import { VStack } from '../Stack';
import type { IListProps, IListItemProps } from './types';
import { useThemeProps } from '../../../hooks';

const List = ({ children, spacing, ...props }: IListProps, ref?: any) => {
  const themeProps = useThemeProps('List', props);
  // add props to children
  let childrenArray = React.Children.toArray(children);
  children = React.Children.map(children, (child: any, ind: number) => {
    if (ind === childrenArray.length - 1) {
      return React.cloneElement(
        child,
        {
          index: ind,
          ...themeProps.lastListItemStyle,
          py: spacing,
        },
        child.props.children
      );
    }
    return React.cloneElement(
      child,
      {
        index: ind,
        py: spacing,
      },
      child.props.children
    );
  });
  return (
    <VStack ref={ref} {...themeProps.listStyle} {...props}>
      {children}
    </VStack>
  );
};

export type { IListProps, IListItemProps };
export default React.memo(React.forwardRef(List));
