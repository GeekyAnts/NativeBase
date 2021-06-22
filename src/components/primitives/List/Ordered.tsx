import React from 'react';
import { VStack } from '../Stack';
import type { IListProps } from './types';
import { usePropsResolution } from '../../../hooks/useThemeProps';

const OrderedList = ({ style, children, ...props }: IListProps, ref?: any) => {
  const { _text, start, _hover, ...newProps } = usePropsResolution(
    'List',
    props
  );
  // add props to children
  children = React.Children.map(children, (child: any, ind: number) => {
    return React.cloneElement(
      child,
      {
        ol: true,
        index: ind,
        _text,
        _hover,
        start,
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

export default React.memo(React.forwardRef(OrderedList));
