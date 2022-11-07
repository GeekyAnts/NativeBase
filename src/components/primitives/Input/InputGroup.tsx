import React, { memo, forwardRef } from 'react';
import type { IInputGroupProps } from './types';
import { getAttachedChildren } from '../../../utils';
import { HStack } from '../Stack';
import { extractInObject, stylingProps } from '../../../theme/tools/utils';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const supplyPropsToChildren = (children: any, props: any) => {
  if (children.length >= 2) {
    const result = [];
    const firstChild = children[0];
    const firstChildProps = {
      ...firstChild.props.children,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    };
    result.push(
      React.cloneElement(firstChild, firstChildProps, firstChild.props.children)
    );
    for (let i = 1; i < children.length - 1; i++) {
      const child = children[i];
      const newProps = { ...props, borderRadius: '0' };
      result.push(React.cloneElement(child, newProps, child.props.children));
    }
    const lastChild = children[children.length - 1];
    const lastChildProps = {
      ...lastChild.props.children,
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    };
    result.push(
      React.cloneElement(lastChild, lastChildProps, lastChild.props.children)
    );
    return result;
  }

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
