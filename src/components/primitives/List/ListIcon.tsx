import React from 'react';
import { IIconProps, Icon } from '../Icon';
import { usePropsResolution } from '../../../hooks/useThemeProps';

const ListIcon = (props: IIconProps, ref?: any) => {
  const resolvedProps = usePropsResolution('ListIcon', props);

  return <Icon {...resolvedProps} ref={ref} />;
};

export default React.memo(React.forwardRef(ListIcon));
