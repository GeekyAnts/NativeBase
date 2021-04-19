import React from 'react';
import { VStack } from '../Stack';
import type { IListProps, IListItemProps } from './types';
import { usePropsResolution } from '../../../hooks/useThemeProps';

const List = ({ children, divider, ...props }: IListProps, ref?: any) => {
  const { _text, _hover, ...newProps } = usePropsResolution('List', props);
  // add props to children
  children = React.Children.map(children, (child: any, ind: number) => {
    return React.cloneElement(
      child,
      {
        index: ind,
        _text: _text,
        _hover,
        ...child.props,
      },
      child.props.children
    );
  });
  return (
    <VStack divider={divider} ref={ref} {...newProps}>
      {children}
    </VStack>
  );
};

export type { IListProps, IListItemProps };
export default React.memo(React.forwardRef(List));
