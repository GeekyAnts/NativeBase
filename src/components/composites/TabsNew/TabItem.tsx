import React, { memo, forwardRef } from 'react';
import type { ITabItemProps } from './types';

const TabItem = (props: ITabItemProps) => {
  return <>{props.children}</>;
};

export default memo(forwardRef(TabItem));
