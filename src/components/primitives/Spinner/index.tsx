import React from 'react';
import { ActivityIndicator } from 'react-native';
import type { ActivityIndicator as ActivityIndicatorType } from 'react-native';
import styled from 'styled-components/native';
import { color, space, position } from 'styled-system';
import { useToken, useThemeProps } from '../../../hooks';
import type { ISpinnerProps } from './props';
import { useSpinner } from './useSpinner';

const StyledSpinner = styled(ActivityIndicator)<ISpinnerProps>(
  color,
  space,
  position
);
const Spinner = (props: ISpinnerProps, ref: any) => {
  const newProps = useThemeProps('Spinner', props);
  const spinnerColor = useToken('colors', newProps.color);
  const { spinnerProps } = useSpinner(props);

  return (
    <StyledSpinner
      {...spinnerProps}
      {...newProps}
      color={spinnerColor}
      ref={ref}
    />
  );
};

export default React.forwardRef<ActivityIndicatorType, ISpinnerProps>(Spinner);
export type { ISpinnerProps };
