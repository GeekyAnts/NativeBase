import React from 'react';
import Box from '../../primitives/Box';
import getIndexedChildren from '../../../utils/getIndexedChildren';
import type { ITabViewsProps } from './props';

const TabViews = ({ children, ...props }: ITabViewsProps) => {
  return <Box {...props}>{getIndexedChildren(children, 'TabView')}</Box>;
};

export default TabViews;
