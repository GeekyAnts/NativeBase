import React from 'react';
import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { Text } from '../../primitives';
import type { ICodeProps } from './props';
import { usePropsConfig } from '../../../hooks';

const StyledCode = styled(Text)<ICodeProps>({});

const Code = ({ style, ...props }: ICodeProps) => {
  let newProps = usePropsConfig('Code', props);
  return (
    <StyledCode
      {...newProps}
      fontFamily={Platform.OS === 'ios' ? 'Courier' : 'monospace'}
      style={style}
    />
  );
};

export type { ICodeProps };
export default Code;
