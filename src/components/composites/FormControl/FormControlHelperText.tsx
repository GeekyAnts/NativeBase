import React, { memo, forwardRef } from 'react';
import Box from '../../primitives/Box';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { useFormControlContext } from './useFormControl';
import type { IFormControlHelperTextProps } from './types';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import { combineContextAndProps } from '../../../utils';

const FormControlHelperText = (
  props: IFormControlHelperTextProps,
  ref: any
) => {
  const formControlContext = useFormControlContext();
  const combinedProps = combineContextAndProps(formControlContext, props);
  const resolvedProps = usePropsResolution(
    'FormControlHelperText',
    combinedProps,
    {
      isDisabled: combinedProps.isDisabled,
      isReadOnly: combinedProps.isReadOnly,
      isInvalid: combinedProps.isInvalid,
      // isRequired: combinedProps.isRequired,
    }
  );

  React.useEffect(() => {
    resolvedProps?.setHasHelpText(true);
    return () => {
      resolvedProps?.setHasHelpText(false);
    };
  });
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }

  return (
    <Box {...resolvedProps} nativeID={resolvedProps?.feedbackId} ref={ref} />
  );
};

export default memo(forwardRef(FormControlHelperText));
