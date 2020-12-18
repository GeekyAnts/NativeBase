import React from 'react';
import styled from 'styled-components/native';
import { Box, Image, Text } from '../../primitives';
import { usePropsConfig } from '../../../hooks';
import type { IAvatarProps } from './props';

const initials = (name: string) => {
  const [firstName, lastName] = name.split(' ');
  return firstName && lastName
    ? `${firstName.charAt(0)}${lastName.charAt(0)}`
    : firstName.charAt(0);
};

const StyledAvatar = styled(Box)<IAvatarProps>({});

export const Avatar = (
  props: IAvatarProps & {
    children?: JSX.Element[] | JSX.Element | any | undefined;
  }
) => {
  const { size, name, style, source, children, ...remainingProps } = props;
  const { color, fontSize, fontWeight, ...newProps } = usePropsConfig(
    'Avatar',
    { ...remainingProps, name, size }
  );
  const textProps = { color, fontSize, fontWeight };
  const imageFitStyle = { height: '100%', width: '100%' };
  return (
    <StyledAvatar {...newProps} style={style}>
      {source ? (
        <Image
          borderRadius={newProps.borderRadius}
          source={source}
          alt={name ? initials(name) : '--'}
          textProps={{
            color,
            fontSize,
            fontWeight,
          }}
          style={[style, imageFitStyle]}
        />
      ) : (
        <Text {...textProps}>{name ? initials(name) : '--'}</Text>
      )}
      {children}
    </StyledAvatar>
  );
};
