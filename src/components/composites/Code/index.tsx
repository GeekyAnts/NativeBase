import React from 'react';
import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { useThemeProps } from '../../../hooks';
import Box from '../../primitives/Box';
import type { ICodeProps } from './types';

const StyledCode = styled(Box)<ICodeProps>({});

const Code = ({ style, ...props }: ICodeProps) => {
  let newProps = useThemeProps('Code', props);
  return (
    <StyledCode
      {...newProps}
      fontFamily={Platform.OS === 'ios' ? 'Courier' : 'monospace'}
      style={style}
    />
  );
};

export type { ICodeProps };
export default React.memo(Code);
