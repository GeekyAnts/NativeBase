import React from 'react';
import styled from 'styled-components/native';
import { Box, Image, Text } from '../../primitives';
import { useThemeProps } from '../../../hooks';
import type { IAvatarProps } from './types';

const initials = (name: string) => {
  const [firstName, lastName] = name.split(' ');
  return firstName && lastName
    ? `${firstName.charAt(0)}${lastName.charAt(0)}`
    : firstName.charAt(0);
};

const StyledAvatar = styled(Box)<IAvatarProps>({});

const Avatar = (props: IAvatarProps) => {
  const { size, name, style, source, children, ...remainingProps } = props;
  const { _name, ...newProps } = useThemeProps('Avatar', {
    ...remainingProps,
    name,
    size,
  });
  const imageFitStyle = { height: '100%', width: '100%' };
  return (
    <StyledAvatar {...newProps} style={style}>
      {source ? (
        <Image
          borderRadius={newProps.borderRadius}
          source={source}
          alt={name ? initials(name) : '--'}
          _alt={_name}
          style={[style, imageFitStyle]}
        />
      ) : (
        <Text {..._name}>{name ? initials(name) : '--'}</Text>
      )}
      {children}
    </StyledAvatar>
  );
};

export default React.memo(Avatar);
