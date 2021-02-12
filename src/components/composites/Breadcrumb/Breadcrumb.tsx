import React from 'react';
import { useThemeProps } from '../../../hooks';
import Flex from '../../primitives/Flex';
import { getBreadcrumbSeparator } from './BreadcrumbSeparator';
import type { IBreadcrumbProps } from './types';

const Breadcrumb = ({
  style,
  children,
  separator,
  spacing,
  _text,
  ...props
}: IBreadcrumbProps) => {
  const textProps = { ..._text };

  let newProps = useThemeProps('Breadcrumb', props);
  return (
    <Flex {...newProps} style={style}>
      {children && !children.length
        ? children
        : getBreadcrumbSeparator(children, separator, textProps, spacing)}
    </Flex>
  );
};

export default React.memo(Breadcrumb);
export type { IBreadcrumbProps };
