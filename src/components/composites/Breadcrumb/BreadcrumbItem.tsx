import React, { forwardRef, memo } from 'react';
import { Platform } from 'react-native';
import Flex from '../../primitives/Flex';
import { BreadcrumbItemContext } from './Context';
import type { IBreadcrumbItemProps } from './types';

const BreadcrumbItem = (props: IBreadcrumbItemProps, ref?: any) => {
  const { children, isCurrent, _text, ...remainingProps } = props;
  return (
    <BreadcrumbItemContext.Provider value={{ isCurrent, allChildren: true }}>
      <Flex {...remainingProps} ref={ref}>
        {React.Children.map(children, (child: any, index: number) =>
          React.cloneElement(child, {
            'key': `breadcrumb-item-${index}`,
            '_text': {
              ..._text, //taken out empty _text prop from props
              fontWeight: isCurrent ? 'bold' : undefined,
            },
            ...{
              isUnderlined: false,
            },
            ...remainingProps,
            'aria-current':
              Platform.OS === 'web' && isCurrent ? 'page' : undefined,
          })
        )}
      </Flex>
    </BreadcrumbItemContext.Provider>
  );
};

export default memo(forwardRef(BreadcrumbItem));
