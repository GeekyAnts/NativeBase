import React, { memo, forwardRef } from 'react';
import type { IInputGroupProps } from './types';
import { getAttachedChildren } from '../../../utils';
import { HStack } from '../Stack';
import { extractInObject, stylingProps } from '../../../theme/tools/utils';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const supplyPropsToChildren = (children: any, props: any) => {
  return React.Children.map(children, (child: JSX.Element) => {
    return React.cloneElement(child, props, child.props.children);
  });
};

export const InputGroup = memo(
  forwardRef(({ children, ...props }: IInputGroupProps, ref: any) => {
    const [layoutProps, nonLayoutProps] = extractInObject(props, [
      ...stylingProps.margin,
      ...stylingProps.border,
      ...stylingProps.layout,
      ...stylingProps.flexbox,
      ...stylingProps.position,
      ...stylingProps.background,
      'space',
      'shadow',
      'opacity',
    ]);
    //TODO: refactor for responsive prop
    if (useHasResponsiveProps(props)) {
      return null;
    }
    return (
      <HStack {...layoutProps} ref={ref}>
        {supplyPropsToChildren(getAttachedChildren(children), nonLayoutProps)}
      </HStack>
    );
  })
);
