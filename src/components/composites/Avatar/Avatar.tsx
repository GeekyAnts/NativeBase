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

const AvatarMain: any = (
  props: IAvatarProps & {
    children?: JSX.Element[] | JSX.Element | any | undefined;
  }
) => {
  const { size, name, style, source, children, ...remainingProps } = props;
  const { color, fontSize, fontWeight, ...newProps } = useThemeProps('Avatar', {
    ...remainingProps,
    name,
    size,
  });
  const textProps = { color, fontSize, fontWeight };
  const imageFitStyle = { height: '100%', width: '100%' };
  return (
    <StyledAvatar {...newProps} style={style}>
      {source ? (
        <Image
          borderRadius={newProps.borderRadius}
          source={source}
          alt={name ? initials(name) : '--'}
          // FIXME: Review needed
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

export default AvatarMain;
