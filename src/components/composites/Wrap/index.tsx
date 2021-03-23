import isNil from 'lodash/isNil';
import React from 'react';
import Flex from '../../primitives/Flex';
import type { IWrapProps } from './types';
import { useThemeProps } from '../../../hooks';

const Wrap = ({ children, ...props }: IWrapProps, ref?: any) => {
  const { spacing, ...newProps } = useThemeProps('Wrap', props);
  return (
    <Flex wrap="wrap" {...newProps} ref={ref}>
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
