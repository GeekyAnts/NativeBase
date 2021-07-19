import React, { forwardRef, memo } from 'react';
import Text from '../../primitives/Text';
import type { IBreadcrumbItemContext, IBreadcrumbTextProps } from './types';
import { BreadcrumbItemContext } from './Context';
import { usePropsResolution } from '../../../hooks/useThemeProps/usePropsResolution';

// Add breadcrumbText as child of breadcrumbItem for implementaion of isCurrent prop
const BreadcrumbText = (props: IBreadcrumbTextProps, ref?: any) => {
  const { isCurrent }: IBreadcrumbItemContext = React.useContext(
    BreadcrumbItemContext
  );
  let { children, _current, ...resolvedProps } = usePropsResolution(
    'BreadcrumbText',
    props
  );
  return (
    <Text ref={ref} {...(isCurrent && _current)} {...resolvedProps}>
      {children}
    </Text>
  );
};

export default memo(forwardRef(BreadcrumbText));
