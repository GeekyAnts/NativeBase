import React from 'react';
import styled from 'styled-components/native';
import { Box, IIconProps, Icon, Text, ITextProps } from '../../primitives';
import { useThemeProps } from '../../../hooks';

import type { ITagProps } from './types';

const StyledTag = styled(Box)<ITagProps>({});

export const TagLabel = React.memo((props: ITextProps) => {
  return <Text {...props} />;
});
export const TagLeftIcon = React.memo((props: IIconProps) => {
  return (
    <Box mr={1}>
      <Icon {...props} />
    </Box>
  );
});
export const TagRightIcon = React.memo((props: IIconProps) => {
  return (
    <Box ml={1}>
      <Icon {...props} />
    </Box>
  );
});

const Tag = ({ style, ...props }: ITagProps) => {
  let newProps = useThemeProps('Tag', props);
  return <StyledTag style={style} {...newProps} />;
};

export default React.memo(Tag);
export type { ITagProps };
