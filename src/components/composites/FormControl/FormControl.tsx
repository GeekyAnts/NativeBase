import React, { memo, forwardRef } from 'react';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import Box from '../../primitives/Box';
import type { IFormControlProps } from './types';
import { useFormControlProvider, FormControlContext } from './useFormControl';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const FormControl = (props: IFormControlProps, ref: any) => {
  const { htmlProps, ...context } = useFormControlProvider(props);
  const resolvedProps = usePropsResolution('FormControl', props, {
    isDisabled: context.isDisabled,
    isReadOnly: context.isReadOnly,
    isInvalid: context.isInvalid,
    // isRequired: context.isRequired,
  });
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return (
    <FormControlContext.Provider value={context}>
      <Box width="100%" {...resolvedProps} {...htmlProps} ref={ref} />
    </FormControlContext.Provider>
  );
};

export default memo(forwardRef(FormControl));
