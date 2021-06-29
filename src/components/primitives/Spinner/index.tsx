import React, { memo, forwardRef } from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import { color, space, position } from 'styled-system';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import type { ISpinnerProps } from './types';

const StyledSpinner = styled(ActivityIndicator)<ISpinnerProps>(
  color,
  space,
  position
);
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
