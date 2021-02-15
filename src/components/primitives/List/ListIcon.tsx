import React from 'react';
import { IIconProps, default as Icon } from '../Icon';

const ListIcon = React.memo((props: IIconProps) => {
  return <Icon mr={2} {...props} />;
});

export default React.memo(ListIcon);
