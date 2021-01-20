import React from 'react';
import styled from 'styled-components/native';
import Box from '../../primitives/Box';
import type { IBadgeProps } from './props';
import { useThemeProps } from '../../../hooks';

const StyledBadge = styled(Box)<IBadgeProps>({});

const Badge = ({ children, style, ...props }: IBadgeProps) => {
  let newProps = useThemeProps('Badge', props);
  return (
    <StyledBadge {...newProps} style={style}>
      {children}
    </StyledBadge>
  );
};

export default React.memo(Badge);
export type { IBadgeProps };
