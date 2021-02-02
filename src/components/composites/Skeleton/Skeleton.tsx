import React from 'react';
import Box from '../../primitives/Box';
import Bones from './Bones';
import type { ISkeletonProps } from './types';

export const Skeleton = React.memo(
  ({ children, isLoaded, ...props }: ISkeletonProps & { circle?: boolean }) => {
    if (isLoaded) return <Box {...props}>{children}</Box>;

    const hideChildren = () => {
      return React.Children.map(
        children,
        (child: JSX.Element, index: number) => {
          return React.cloneElement(
            child,
            { opacity: 0, key: `skeleton-hide-child-${index}` },
            child.props.children
          );
        }
      );
    };

    return (
      <Bones width="100%" {...props}>
        {children ? hideChildren() : null}
      </Bones>
    );
  }
);
