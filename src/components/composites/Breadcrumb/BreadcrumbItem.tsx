import React, { forwardRef } from 'react';
import { Platform } from 'react-native';
import Flex from '../../primitives/Flex';
import type { IBreadcrumbItemProps } from './types';

const BreadcrumbItem = (props: IBreadcrumbItemProps, ref?: any) => {
  const { children, isCurrentPage, _text, ...remainingProps } = props;
  return (
    <Flex {...remainingProps} ref={ref}>
      {React.Children.map(children, (child: any, index: number) =>
        React.cloneElement(child, {
          'key': `breadcrumb-item-${index}`,
          '_text': {
            ..._text, //taken out empty _text prop from props
            fontWeight: isCurrentPage ? 'bold' : undefined,
          },
          ...{
            isUnderlined: false,
          },
          ...remainingProps,
          'aria-current':
            Platform.OS === 'web' && isCurrentPage ? 'page' : undefined,
        })
      )}
    </Flex>
  );
};

export default React.memo(forwardRef(BreadcrumbItem));
