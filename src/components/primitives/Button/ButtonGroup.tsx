import React from 'react';
import styled from 'styled-components/native';
import { border, color, flexbox, layout, space } from 'styled-system';
import type { IButtonGroupProps } from './props';

const StyledButtonGroup = styled.View<IButtonGroupProps>(
  color,
  space,
  layout,
  flexbox,
  border,
  { flexDirection: 'row', flexWrap: 'wrap' }
);

export const ButtonGroup = ({
  children,
  spacing,
  ...props
}: IButtonGroupProps) => {
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
};
