import React from 'react';
import { Flex, Link as BreadCrumbLink } from '../../primitives';
import type { IBreadCrumbProps } from './props';
import { BreadCrumbSeparator } from './BreadCrumbSeparator';
import { usePropsConfig } from '../../../hooks';
export { BreadCrumbItem } from './BreadCrumbItem';
export { BreadCrumbLink };

const BreadCrumb = ({
  style,
  children,
  separator,
  fontSize,
  color,
  textDecoration,
  txtDecor,
  wordBreak,
  textOverflow,
  textTransform,
  whiteSpace,
  overflowWrap,
  fontFamily,
  fontWeight,
  bold,
  italic,
  underline,
  strikeThrough,
  isTruncated,
  noOfLines,
  spacing,
  ...props
}: IBreadCrumbProps) => {
  const textProps = {
    fontWeight,
    fontFamily,
    fontSize,
    color,
    textDecoration,
    txtDecor,
    wordBreak,
    textOverflow,
    textTransform,
    whiteSpace,
    overflowWrap,
    bold,
    italic,
    underline,
    strikeThrough,
    isTruncated,
    noOfLines,
  };
  let newProps = usePropsConfig('BreadCrumb', props);
  return (
    <Flex {...newProps} style={style}>
      {children && !children.length
        ? children
        : BreadCrumbSeparator(children, separator, textProps, spacing)}
    </Flex>
  );
};

export default BreadCrumb;
export type { IBreadCrumbProps };
