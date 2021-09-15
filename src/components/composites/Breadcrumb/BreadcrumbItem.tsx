import React, { forwardRef, memo } from 'react';
import { Platform } from 'react-native';
import { HStack } from '../../primitives/Stack';
import { BreadcrumbItemContext } from './Context';
import type { IBreadcrumbItemProps } from './types';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const BreadcrumbItem = (props: IBreadcrumbItemProps, ref?: any) => {
  const { children, isCurrent, _text, ...remainingProps } = props;
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return (
    // Provider wrapped to use isCurrent prop in children of breadcrumb Item
    <BreadcrumbItemContext.Provider value={{ isCurrent }}>
      <HStack {...remainingProps} ref={ref}>
        {React.Children.map(children, (child: any, index: number) =>
          React.cloneElement(child, {
            'key': `breadcrumb-item-${index}`,
            '_text': {
              ..._text, //taken out empty _text prop from props
              fontWeight: 700,
            },
            ...{
              isUnderlined: false,
            },
            ...remainingProps,
            'aria-current':
              Platform.OS === 'web' && isCurrent ? 'page' : undefined,
          })
        )}
      </HStack>
    </BreadcrumbItemContext.Provider>
  );
};

export default memo(forwardRef(BreadcrumbItem));
