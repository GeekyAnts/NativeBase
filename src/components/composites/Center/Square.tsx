import React from 'react';
import Center from './Center';
import type { ISquareProps } from './types';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const Square = ({ style, size, ...props }: ISquareProps) => {
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
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

export default React.memo(Square);
