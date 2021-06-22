import React, { memo, forwardRef } from 'react';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import Box from '../../primitives/Box';
import type { IFormControlProps } from './types';
import { useFormControlProvider, FormControlContext } from './useFormControl';

const FormControl = (props: IFormControlProps, ref: any) => {
  const { htmlProps, ...context } = useFormControlProvider(props);
  const themedProps = usePropsResolution('FormControl', props);

  return (
    <FormControlContext.Provider value={context}>
      <Box width="100%" {...themedProps} {...htmlProps} ref={ref} />
    </FormControlContext.Provider>
  );
};

export default memo(forwardRef(FormControl));
