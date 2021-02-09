import React from 'react';
import styled from 'styled-components/native';
import { border, color, flexbox, layout, position, space } from 'styled-system';
import {
  customBackground,
  customBorder,
  customExtra,
  customLayout,
  customOutline,
  customPosition,
  customShadow,
} from '../../../utils/customProps';
import type { IButtonGroupProps } from './types';

const StyledButtonGroup = styled.View<IButtonGroupProps>(
  color,
  space,
  layout,
  flexbox,
  border,
  position,
  customPosition,
  customBorder,
  customBackground,
  customOutline,
  customShadow,
  customExtra,
  customLayout,
  { flexDirection: 'row', flexWrap: 'wrap' }
);

export const ButtonGroup = React.memo(
  ({ children, spacing, ...props }: IButtonGroupProps) => {
    return (
      <StyledButtonGroup>
        {React.Children.map(children, (child: JSX.Element, index: number) => {
          return React.cloneElement(child, {
            ml: index !== 0 ? spacing : undefined,
            ...props,
          });
        })}
      </StyledButtonGroup>
    );
  }
);
