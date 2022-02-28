import React, { memo, forwardRef } from 'react';
import type { ITabBarProps } from './types';

const TabBar = (props: ITabBarProps) => {
  return <>{props.children}</>;
};

export default memo(forwardRef(TabBar));
