import React from 'react';
import { IIconProps, Icon } from '../Icon';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const ListIcon = (props: IIconProps, ref?: any) => {
  const resolvedProps = usePropsResolution('ListIcon', props);
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return <Icon {...resolvedProps} ref={ref} />;
};

export default React.memo(React.forwardRef(ListIcon));
