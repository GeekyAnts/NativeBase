import React, { forwardRef, memo } from 'react';
import Text from '../../primitives/Text';
import type { IBreadcrumbItemContext, IBreadcrumbTextProps } from './types';
import { BreadcrumbItemContext } from './Context';
import { usePropsResolution } from '../../../hooks/useThemeProps/usePropsResolution';

const BreadcrumbText = (props: IBreadcrumbTextProps, ref?: any) => {
  const { children } = props;
  const { isCurrent }: IBreadcrumbItemContext = React.useContext(
    BreadcrumbItemContext
  );
  let newProps = usePropsResolution('Text', props);
  return (
    <Text ref={ref} {...newProps} fontWeight={isCurrent ? 'bold' : 'normal'}>
      {children}
    </Text>
  );
};

export default memo(forwardRef(BreadcrumbText));
