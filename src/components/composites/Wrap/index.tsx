import isNil from 'lodash.isnil';
import React from 'react';
import Flex from '../../primitives/Flex';
import type { IWrapProps } from './types';
import { useThemeProps } from '../../../hooks';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const Wrap = ({ children, ...props }: IWrapProps, ref?: any) => {
  const { space, ...newProps } = useThemeProps('Wrap', props);

  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }

  return (
    <Flex wrap="wrap" {...newProps} ref={ref}>
      {isNil(space)
        ? children
        : React.Children.map(children, (child: any) => {
            return React.cloneElement(
              child,
              { ...props, style: { margin: space } },
              child.props.children
            );
          })}
    </Flex>
  );
};

export default React.memo(React.forwardRef(Wrap));
export type { IWrapProps };
