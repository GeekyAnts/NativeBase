import React, { memo, forwardRef } from 'react';
import InputBase from './InputBase';
import InputAdvanced from './InputAdvanced';
import type { IInputProps } from './types';
import { useFormControl } from '../../composites/FormControl';

const Input = (props: IInputProps, ref: any) => {
  const inputProps = useFormControl({
    isDisabled: props.isDisabled,
    isInvalid: props.isInvalid,
    isReadOnly: props.isReadOnly,
    isRequired: props.isRequired,
    nativeID: props.nativeID,
  });

  if (props.InputLeftElement || props.InputRightElement)
    return <InputAdvanced {...props} ref={ref} inputProps={inputProps} />;
  else return <InputBase {...props} ref={ref} inputProps={inputProps} />;
};

export default memo(forwardRef(Input));
