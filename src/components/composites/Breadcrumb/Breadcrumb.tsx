import React from 'react';
import { Platform } from 'react-native';
import { useThemeProps } from '../../../hooks';
import Flex from '../../primitives/Flex';
import { getBreadcrumbSeparator } from './BreadcrumbSeparator';
import type { IBreadcrumbProps } from './types';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
const Breadcrumb = (
  { style, children, separator, spacing, _text, ...props }: IBreadcrumbProps,
  ref: any
) => {
  const textProps = { ..._text };
  let newProps = useThemeProps('Breadcrumb', props);
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return (
    <Flex
      {...newProps}
      ref={ref}
      style={style}
      // @ts-ignore - Web only prop
      accessibilityRole={Platform.OS === 'web' ? 'navigation' : undefined}
      accessibilityLabel="Breadcrumb"
    >
      {children && !children.length
        ? children
        : getBreadcrumbSeparator(children, separator, textProps, spacing)}
    </Flex>
  );
};
export default React.memo(React.forwardRef(Breadcrumb));
export type { IBreadcrumbProps };
