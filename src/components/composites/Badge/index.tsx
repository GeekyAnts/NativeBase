import React from 'react';
import styled from 'styled-components/native';
import Box from '../../primitives/Box';
import type { IBadgeProps } from './types';
import { useThemeProps } from '../../../hooks';

const StyledBadge = styled(Box)<IBadgeProps>({});

const Badge = ({ children, style, ...props }: IBadgeProps, ref: any) => {
  let newProps = useThemeProps('Badge', props);
  return (
    <StyledBadge {...newProps} ref={ref} style={style}>
      {children}
    </StyledBadge>
  );
};

export default React.memo(React.forwardRef<any, IBadgeProps>(Badge));
export type { IBadgeProps };
