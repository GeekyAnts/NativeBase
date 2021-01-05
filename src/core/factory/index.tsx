import React from 'react';
import type { AnyStyledComponent } from 'styled-components';
import styled from 'styled-components/native';
import {
  background,
  border,
  color,
  flexbox,
  layout,
  margin,
  padding,
  position,
  space,
  typography,
} from 'styled-system';
import {
  customBackground,
  customBorder,
  customExtra,
  customLayout,
  customOutline,
  customPosition,
  customShadow,
  customTypography,
} from '../../utils/customProps';
import type { FactoryComponentProps } from './types';

export function NBFactory<P>(Component: React.ComponentType<P>, options?: any) {
  return (props: P & FactoryComponentProps) => {
    const StyledComponent = styled(Component as AnyStyledComponent)(
      color,
      background,
      padding,
      margin,
      space,
      layout,
      flexbox,
      border,
      position,
      typography,
      customPosition,
      customBorder,
      customBackground,
      customOutline,
      customShadow,
      customExtra,
      customTypography,
      customLayout
    );
    return <StyledComponent {...(props as P)} />;
  };
}

export type { FactoryComponentProps };
