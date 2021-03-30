import React from 'react';
import InputBase from './InputBase';
import InputAdvanced from './InputAdvanced';
import type { IInputProps } from './types';

const Input = (props: IInputProps, ref: any) => {
  if (props.InputLeftElement || props.InputRightElement)
    return <InputAdvanced {...props} ref={ref} />;
  else return <InputBase {...props} ref={ref} />;
};

export default React.memo(React.forwardRef(Input));
