import React from 'react';
import { VStack } from '../Stack';
import type { IListProps } from './types';
import { useThemeProps } from '../../../hooks';

const UnorderedList = (
  { style, children, ...props }: IListProps,
  ref?: any
) => {
  const { _text, _hover, ...newProps } = useThemeProps('List', props);
  // add props to children
  children = React.Children.map(children, (child: any, ind: number) => {
    return React.cloneElement(
      child,
      {
        index: ind,
        ul: true,
        _text: _text,
        _hover,
        ...child.props,
      },
      child.props.children
    );
  });

  return (
    <VStack style={style} {...newProps} ref={ref}>
      {children}
    </VStack>
  );
};

export default React.memo(React.forwardRef(UnorderedList));
