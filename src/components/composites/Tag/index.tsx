import React from 'react';
import styled from 'styled-components/native';
import Box from '../../primitives/Box';
import { useThemeProps } from '../../../hooks';
import type { ITagProps } from './types';

const StyledTag = styled(Box)<ITagProps>({});

const Tag = ({ style, ...props }: ITagProps, ref: any) => {
  let newProps = useThemeProps('Tag', props);
  return <StyledTag style={style} {...newProps} ref={ref} />;
};

export default React.memo(React.forwardRef(Tag));
export type { ITagProps };
