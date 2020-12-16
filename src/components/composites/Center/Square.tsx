import React from 'react';
import Center from './Center';
import type { ISquareProps } from './props';

const Square = ({ style, size, ...props }: ISquareProps) => {
  return (
    <Center
      size={size}
      {...props}
      height={props.height ? props.height : undefined}
      width={props.width ? props.width : undefined}
      style={style}
    />
  );
};

export default Square;
