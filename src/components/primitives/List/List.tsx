import React from 'react';
import { VStack } from '../Stack';
import Box from '../Box';
import type { IListProps, IListItemProps } from './types';
import { useThemeProps } from '../../../hooks';
import { findProps } from './utils';

const List = ({ style, children, spacing, ...props }: IListProps) => {
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
          ...props,
          py: spacing,
        },
        child.props.children
      );
    }
    return React.cloneElement(
      child,
      { index: ind, ...props, py: spacing },
      child.props.children
    );
  });
  let [, remainingProps, layoutProps, borderProps] = findProps(props);

  return (
    <Box
      style={style}
      {...themeProps.listStyle}
      {...layoutProps}
      {...borderProps}
    >
      <VStack {...remainingProps}>{children}</VStack>
    </Box>
  );
};

export type { IListProps, IListItemProps };
export default React.memo(List);
