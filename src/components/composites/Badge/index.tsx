import React from 'react';
import styled from 'styled-components/native';
import Box from '../../primitives/Box';
import type { IBadgeProps } from './props';
import { usePropsConfig } from '../../../hooks';

const StyledBadge = styled(Box)<IBadgeProps>({});

const Badge = ({ children, style, ...props }: IBadgeProps) => {
  let newProps = usePropsConfig('Badge', props);
  return (
    <StyledBadge {...newProps} style={style}>
      {children}
    </StyledBadge>
  );
};

export default Badge;
export type { IBadgeProps };
