import React from 'react';
import Center from './Center';
import type { ICircleProps } from './props';

const Circle = ({ style, size, ...props }: ICircleProps) => {
  return (
    <Center
      rounded="100"
      size={size}
      {...props}
      height={props.height ? props.height : undefined}
      width={props.width ? props.width : undefined}
      style={style}
    />
  );
};

export default React.memo(Circle);
