import isNil from 'lodash/isNil';
import React from 'react';
import Flex from '../../primitives/Flex';
import type { IWrapProps } from './types';

const Wrap = ({ spacing, children, ...props }: IWrapProps, ref?: any) => {
  return (
    <Flex {...props} wrap="wrap" ref={ref}>
      {isNil(spacing)
        ? children
        : React.Children.map(children, (child: any) => {
            return React.cloneElement(
              child,
              { ...props, style: { margin: spacing } },
              child.props.children
            );
          })}
    </Flex>
  );
};

export default React.memo(React.forwardRef(Wrap));
export type { IWrapProps };
