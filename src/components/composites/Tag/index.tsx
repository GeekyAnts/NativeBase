import React from 'react';
import styled from 'styled-components/native';
import Box from '../../primitives/Box';
import { useThemeProps } from '../../../hooks';
import type { ITagProps } from './types';

const StyledTag = styled(Box)<ITagProps>({});

const Tag = ({ style, ...props }: ITagProps) => {
  let newProps = useThemeProps('Tag', props);
  return <StyledTag style={style} {...newProps} />;
};

export default React.memo(Tag);
export type { ITagProps };
