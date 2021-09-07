import React from 'react';
import Center from './Center';
import type { ICircleProps } from './types';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const Circle = ({ style, size, ...props }: ICircleProps, ref: any) => {
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return (
    <Center
      rounded="full"
      size={size}
      {...props}
      ref={ref}
      height={props.height ? props.height : undefined}
      width={props.width ? props.width : undefined}
      style={style}
    />
  );
};

export default React.memo(React.forwardRef(Circle));
