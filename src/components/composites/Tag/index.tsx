import React from 'react';
import styled from 'styled-components/native';
import { Box, IIconProps, Icon, Text, ITextProps } from '../../primitives';
import CloseButton from '../CloseButton';
import { useThemeProps } from '../../../hooks';

export { CloseButton as TagCloseButton };
import type { ITagProps } from './props';

const StyledTag = styled(Box)<ITagProps>({});

export const TagLabel = (props: ITextProps) => {
  return <Text {...props} />;
};
export const TagLeftIcon = (props: IIconProps) => {
  return <Icon mr={2} {...props} />;
};
export const TagRightIcon = (props: IIconProps) => {
  return <Icon ml={2} {...props} />;
};

const Tag = ({ style, ...props }: ITagProps) => {
  let newProps = useThemeProps('Tag', props);
  return <StyledTag style={style} {...newProps} />;
};

export default Tag;
export type { ITagProps };
