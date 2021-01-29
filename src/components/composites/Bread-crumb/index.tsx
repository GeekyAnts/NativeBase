import React from 'react';
import { Flex, Link as BreadcrumbLink } from '../../primitives';
import type { IBreadcrumbProps } from './props';
import { extractInObject } from '../../../theme/tools';
import { getBreadcrumbSeparator } from './BreadcrumbSeparator';
import { useThemeProps } from '../../../hooks';
export { default as BreadcrumbItem } from './BreadcrumbItem';
export { BreadcrumbLink };

const Breadcrumb = ({
  style,
  children,
  separator,
  spacing,
  ...props
}: IBreadcrumbProps) => {
  const [textProps, remainingProps] = extractInObject(props, [
    'fontWeight',
    'fontFamily',
    'fontSize',
    'color',
    'textDecoration',
    'txtDecor',
    'wordBreak',
    'textOverflow',
    'textTransform',
    'whiteSpace',
    'overflowWrap',
    'bold',
    'italic',
    'underline',
    'strikeThrough',
    'isTruncated',
    'noOfLines',
  ]);

  let newProps = useThemeProps('Breadcrumb', remainingProps);
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
