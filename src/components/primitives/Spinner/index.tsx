import React, { memo, forwardRef } from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import { color, space, position } from 'styled-system';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { useToken } from '../../../hooks';
import type { ISpinnerProps } from './types';

const StyledSpinner = styled(ActivityIndicator)<ISpinnerProps>(
  color,
  space,
  position
);
const Spinner = (props: ISpinnerProps, ref: any) => {
  const { color, ...resolvedProps } = usePropsResolution('Spinner', props);
  const resolvedColor = useToken('colors', color);

  return (
    <StyledSpinner
      accessible
      accessibilityLabel="loading"
      {...resolvedProps}
      // TODO: Fix color resolution issue in styled component.
      color={resolvedColor}
      ref={ref}
    />
  );
};

export default memo(forwardRef(Spinner));
export type { ISpinnerProps };
