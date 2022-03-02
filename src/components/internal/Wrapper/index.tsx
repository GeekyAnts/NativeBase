import React, { forwardRef } from 'react';
import { View } from 'react-native';
import { makeStyledComponent } from '../../../utils/styled';
import type { IInternalWrapperProps } from './types';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const StyledView: any = makeStyledComponent(View);

export const InternalWrapper = forwardRef(
  (props: IInternalWrapperProps, ref: any) => {
    //TODO: refactor for responsive prop
    if (useHasResponsiveProps(props)) {
      return null;
    }
    return <StyledView {...props} ref={ref} />;
  }
);
