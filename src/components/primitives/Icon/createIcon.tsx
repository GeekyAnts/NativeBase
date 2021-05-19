import React, { memo, forwardRef } from 'react';
import SVGIcon from './SVGIcon';
import { Path } from './nbSvg';
import type { IcreateIconProps } from './types';
import isEmpty from 'lodash.isempty';

export const createIcon = ({ path, d, ...initialProps }: IcreateIconProps) => {
  const createdIcon = (props: any, ref: any) => {
    let children = path;
    if (d && (!path || isEmpty(path))) {
      children = <Path fill="currentColor" d={d} />;
    }
    return (
      <SVGIcon children={children} {...initialProps} {...props} ref={ref} />
    );
  };
  return memo(forwardRef(createdIcon));
};
