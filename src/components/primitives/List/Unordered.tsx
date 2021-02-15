import React from 'react';
import { VStack } from '../Stack';
// import Box from '../Box';
import type { IListProps } from './types';
import { useThemeProps } from '../../../hooks';
import { findProps } from './utils';

const UnorderedList = ({ style, children, spacing, ...props }: IListProps) => {
  // add props to children
  const themeProps = useThemeProps('List', props);
  let childrenArray = React.Children.toArray(children);
  children = React.Children.map(children, (child: any, ind: number) => {
    if (ind === childrenArray.length - 1) {
      return React.cloneElement(
        child,
        {
          index: ind,
          ...themeProps.lastListItemStyle,
          ...props,
          ul: true,
          py: spacing,
        },
        child.props.children
      );
    }
    return React.cloneElement(
      child,
      { index: ind, ...props, ul: true, py: spacing },
      child.props.children
    );
  });

  let [, remainingProps, layoutProps, borderProps] = findProps(props);

  return (
    // <Box>
    <VStack
      style={style}
      {...themeProps.listStyle}
      {...layoutProps}
      {...borderProps}
      {...remainingProps}
    >
      {children}
    </VStack>
    // </Box>
  );
};

export default React.memo(UnorderedList);
