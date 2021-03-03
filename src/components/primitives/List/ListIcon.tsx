import React from 'react';
import { IIconProps, default as Icon } from '../Icon';
import { useThemeProps } from '../../../hooks';

const ListIcon = React.memo((props: IIconProps) => {
  const newProps = useThemeProps('ListIcon', props);

  return <Icon mr={2} {...newProps} />;
});

export default React.memo(ListIcon);
