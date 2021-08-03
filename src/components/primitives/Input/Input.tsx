import React, { memo, forwardRef } from 'react';
import InputBase from './InputBase';
import InputAdvanced from './InputAdvanced';
import type { IInputProps } from './types';
import { useFormControl } from '../../composites/FormControl';
import { isResponsiveAnyProp } from '../../../theme/tools';
import { useWindowDimensions } from 'react-native';
import isNil from 'lodash.isnil';

const Input = (props: IInputProps, ref: any) => {
  const inputProps = useFormControl({
    isDisabled: props.isDisabled,
    isInvalid: props.isInvalid,
    isReadOnly: props.isReadOnly,
    isRequired: props.isRequired,
    nativeID: props.nativeID,
  });

  //TODO: refactor for responsive prop
  const windowDimensions = useWindowDimensions();
  if (isNil(windowDimensions.width) || isNil(windowDimensions.height)) {
    const responsivePropsExists = isResponsiveAnyProp(props);
    if (responsivePropsExists) {
      return null;
    }
  }

  if (props.InputLeftElement || props.InputRightElement)
    return <InputAdvanced {...props} ref={ref} inputProps={inputProps} />;
  else return <InputBase {...props} ref={ref} inputProps={inputProps} />;
};

export default memo(forwardRef(Input));
