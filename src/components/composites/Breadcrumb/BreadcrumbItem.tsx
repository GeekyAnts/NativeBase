import React from 'react';
import Flex from '../../primitives/Flex';
import type { IBreadcrumbProps } from './props';

const BreadcrumbItem = (
  props: IBreadcrumbProps & { isCurrentPage?: boolean }
) => {
  const { children, isCurrentPage, ...remainingProps } = props;
  return (
    <Flex {...remainingProps}>
      {React.Children.map(children, (child: any, index: number) =>
        React.cloneElement(child, {
          key: `breadcrumb-item-${index}`,
          ...{
            isUnderlined: false,
            fontWeight: isCurrentPage ? 'bold' : undefined,
          },
          ...remainingProps,
        })
      )}
    </Flex>
  );
};

export default React.memo(BreadcrumbItem);
