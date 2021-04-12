import React from 'react';
import { IIconProps, default as Icon } from '../Icon';
import { useThemeProps } from '../../../hooks';

const ListIcon = (props: IIconProps, ref?: any) => {
  const newProps = useThemeProps('ListIcon', props);

  return <Icon {...newProps} ref={ref} />;
};

export default React.memo(React.forwardRef(ListIcon));
