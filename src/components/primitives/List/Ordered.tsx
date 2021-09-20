import React from 'react';
import { VStack } from '../Stack';
import type { IListProps } from './types';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const OrderedList = ({ style, children, ...props }: IListProps, ref?: any) => {
  const { _text, start, _hover, ...resolvedProps } = usePropsResolution(
    'List',
    props
  );
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
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
    <VStack style={style} {...resolvedProps} ref={ref}>
      {children}
    </VStack>
  );
};

export default React.memo(React.forwardRef(OrderedList));
