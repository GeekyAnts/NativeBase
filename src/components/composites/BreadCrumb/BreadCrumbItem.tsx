import React from 'react';
import Flex from '../../primitives/Flex';
import type { IBreadCrumbProps } from './props';

const BreadCrumbItem = (
  props: IBreadCrumbProps & { isCurrentPage?: boolean }
) => {
  const { children, isCurrentPage, ...remainingProps } = props;
  return (
    <Flex {...remainingProps}>
      {React.Children.map(children, (child: any, index: number) => {
        return React.cloneElement(child, {
          key: `breadcrumb-item-${index}`,
          ...remainingProps,
          ...{ isUnderlined: isCurrentPage ? false : undefined },
        });
      })}
    </Flex>
  );
};

export default React.memo(BreadCrumbItem);
