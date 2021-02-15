import React from 'react';
import { VStack } from '../Stack';
import Box from '../Box';
import type { IListProps } from './types';
import { useThemeProps } from '../../../hooks';
import { findProps } from './utils';

const OrderedList = ({ style, children, spacing, ...props }: IListProps) => {
  // add props to children
  let childrenArray = React.Children.toArray(children);
  const themeProps = useThemeProps('List', props);

  children = React.Children.map(children, (child: any, ind: number) => {
    if (ind === childrenArray.length - 1) {
      return React.cloneElement(
        child,
        {
          ...themeProps.lastListItemStyle,
          ...child.props,
          ...props,
          ol: true,
          py: spacing,
          index: ind,
        },
        child.props.children
      );
    }
    return React.cloneElement(
      child,
      { ...child.props, ...props, ol: true, py: spacing, index: ind },
      child.props.children
    );
  });
  let [, remainingProps, layoutProps, borderProps] = findProps(props);
  return (
    <Box
      style={style}
      {...layoutProps}
      {...themeProps.listStyle}
      {...borderProps}
    >
      <VStack {...remainingProps}>{children}</VStack>
    </Box>
  );
};

export default React.memo(OrderedList);
