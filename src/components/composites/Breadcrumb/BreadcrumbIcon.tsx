import React, { forwardRef, memo } from 'react';
import { Icon } from '../../primitives/Icon';
import type { IBreadcrumbItemContext, IBreadcrumbIconProps } from './types';
import { BreadcrumbItemContext } from './Context';
import { usePropsResolution } from '../../../hooks/useThemeProps/usePropsResolution';

// Add breadcrumbIcon as child of breadcrumbItem for implementaion of isCurrent prop
const BreadcrumbIcon = (props: IBreadcrumbIconProps, ref?: any) => {
  const { isCurrent }: IBreadcrumbItemContext = React.useContext(
    BreadcrumbItemContext
  );

  let { children, _current, ...resolvedProps } = usePropsResolution(
    'BreadcrumbIcon',
    props
  );
  return (
    <Icon ref={ref} {...(isCurrent && _current)} {...resolvedProps}>
      {children}
    </Icon>
  );
};

export default memo(forwardRef(BreadcrumbIcon));
