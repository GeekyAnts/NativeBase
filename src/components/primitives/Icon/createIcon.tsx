import React from 'react';
import { SVGIcon } from './SVGIcon';
import { Path } from 'react-native-svg';
import type { ICreateIconProps } from './props';
import isEmpty from 'lodash/isEmpty';
export function createIcon({ path, d, ...initialProps }: ICreateIconProps) {
  return (props: any) => {
    let children = path;
    if (d && (!path || isEmpty(path))) {
      children = <Path fill="currentColor" d={d} />;
    }
    return <SVGIcon children={children} {...initialProps} {...props} />;
  };
}
