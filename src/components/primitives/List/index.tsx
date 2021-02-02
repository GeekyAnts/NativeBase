import React from 'react';
import { VStack } from '../Stack';
import Box from '../Box';
import Text from '../Text';
import { IIconProps, default as Icon } from '../Icon';
import type { IListProps, IListItemProps } from './types';

const List = ({ style, children, spacing, ...props }: IListProps) => {
  // add props to children
  children = React.Children.map(children, (child: any, ind: number) => {
    return React.cloneElement(
      child,
      { index: ind, ...props },
      child.props.children
    );
  });
  return (
    <Box {...props} style={style}>
      <VStack space={spacing} {...props}>
        {children}
      </VStack>
    </Box>
  );
};
export const Ol = ({ style, children, spacing, ...props }: IListProps) => {
  // add props to children
  children = React.Children.map(children, (child: any, ind: number) => {
    return React.cloneElement(
      child,
      { index: ind, ...props, ol: true },
      child.props.children
    );
  });
  return (
    <Box {...props} style={style}>
      <VStack space={spacing} {...props}>
        {children}
      </VStack>
    </Box>
  );
};
export const Ul = ({ style, children, spacing, ...props }: IListProps) => {
  // add props to children
  children = React.Children.map(children, (child: any, ind: number) => {
    return React.cloneElement(
      child,
      { index: ind, ...props, ul: true },
      child.props.children
    );
  });
  return (
    <Box {...props} style={style}>
      <VStack space={spacing} {...props}>
        {children}
      </VStack>
    </Box>
  );
};

export const ListItem = React.memo((props: IListItemProps) => {
  const { children, unordered, ul, ordered, ol, ...remainingProps } = props;
  const startNum = remainingProps.start ? remainingProps.start : 1; // Ordered list starting number
  return (
    <Box flexDirection="row" alignItems="center">
      <Box flexDirection="row" alignItems="center" {...remainingProps}>
        {unordered || ul ? ( //Adding disc in front of ListItem
          <Text
            mr={2}
            fontSize={remainingProps.fontSize}
            color={remainingProps.color}
            style={{ transform: [{ scale: 1.5 }] }}
          >
            {`\u2022`}
          </Text>
        ) : null}
        {ordered || ol ? ( //Adding index number in front of ListItem
          <Text
            mr={2}
            fontSize={remainingProps.fontSize}
            color={remainingProps.color}
          >
            {remainingProps.index + startNum + '.'}
          </Text>
        ) : null}
      </Box>
      <Box flexDirection="row" alignItems="center" {...remainingProps}>
        {children}
      </Box>
    </Box>
  );
});
export const ListIcon = React.memo((props: IIconProps) => {
  return <Icon mr={2} {...props} />;
});

export type { IListProps, IListItemProps };
export default React.memo(List);
