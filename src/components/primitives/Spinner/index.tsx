import React, { memo, forwardRef } from 'react';
import { ActivityIndicator } from 'react-native';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import type { ISpinnerProps } from './types';
import { makeStyledComponent } from '../../../utils/styled';

const StyledSpinner = makeStyledComponent(ActivityIndicator);
const Spinner = (props: ISpinnerProps, ref: any) => {
  const resolvedProps = usePropsResolution('Spinner', props);
  return (
    <StyledSpinner
      accessible
      accessibilityLabel="loading"
      {...resolvedProps}
      ref={ref}
    />
  );
};

export default memo(forwardRef(Spinner));
export type { ISpinnerProps };
