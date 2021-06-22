import React from 'react';
import { IIconProps, Icon } from '../Icon';
import { usePropsResolution } from '../../../hooks/useThemeProps';

const ListIcon = (props: IIconProps, ref?: any) => {
  const newProps = usePropsResolution('ListIcon', props);

  return <Icon {...newProps} ref={ref} />;
};

export default React.memo(React.forwardRef(ListIcon));
