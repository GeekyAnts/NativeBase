import React from 'react';
import { useThemeProps } from '../../../hooks';
import Box from '../../primitives/Box';
import type { IFormControlProps } from './types';
import { useFormControlProvider, FormControlContext } from './useFormControl';

const FormControl = (props: IFormControlProps, ref: any) => {
  const { htmlProps, ...context } = useFormControlProvider(props);
  const themedProps = useThemeProps('FormControl', props);

  return (
    <FormControlContext.Provider value={context}>
      <Box width="100%" {...themedProps} {...htmlProps} ref={ref} />
    </FormControlContext.Provider>
  );
};

export default React.memo(React.forwardRef(FormControl));
