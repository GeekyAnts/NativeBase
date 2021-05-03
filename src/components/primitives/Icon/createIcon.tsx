import React from 'react';
import SVGIcon from './SVGIcon';
import { Path } from 'react-native-svg';
import type { ICreateIconProps } from './types';
import isEmpty from 'lodash.isempty';

export function createIcon({ path, d, ...initialProps }: ICreateIconProps) {
  const createdIcon = (props: any, ref: any) => {
    let children = path;
    if (d && (!path || isEmpty(path))) {
      children = <Path fill="currentColor" d={d} />;
    }
    return (
      <SVGIcon children={children} {...initialProps} {...props} ref={ref} />
    );
  };
  return React.memo(React.forwardRef(createdIcon));
}
