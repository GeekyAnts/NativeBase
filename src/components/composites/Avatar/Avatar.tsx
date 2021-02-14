import React from 'react';
import styled from 'styled-components/native';
import { Box, Image, Text, IBoxProps } from '../../primitives';
import { useThemeProps } from '../../../hooks';
import type { IAvatarProps } from './types';

const StyledAvatar = styled(Box)<IAvatarProps>({});

const Avatar = (props: IAvatarProps, ref: any) => {
  const [error, setError] = React.useState(false);
  const { size, style, source, children, ...remainingProps } = props;

  const { _text, ...newProps } = useThemeProps('Avatar', {
    ...remainingProps,
    name: 'avatar',
    size,
  });

  let Badge = <></>;
  let remainingChildren: JSX.Element[] = [];
  //  Pop Badge from children
  React.Children.map(children, (child, key) => {
    if (
      typeof child.type === 'object' &&
      child.type.type?.name === 'AvatarBadge'
    ) {
      Badge = child;
    } else {
      remainingChildren.push(
        typeof child === 'string' ? (
          <Text key={'avatar-children-' + key} {..._text}>
            {child}
          </Text>
        ) : (
          child
        )
      );
    }
  });

  const imageFitStyle = { height: '100%', width: '100%' };

  return (
    <StyledAvatar {...newProps} style={style} ref={ref}>
      {source && !error ? (
        <Image
          borderRadius={newProps.borderRadius}
          source={source}
          alt={'--'}
          _alt={_text}
          style={[style, imageFitStyle]}
          onError={() => {
            setError(true);
          }}
        />
      ) : remainingChildren.length === 0 ? (
        <Text {..._text}>--</Text> // default alternate
      ) : (
        remainingChildren
      )}
      {Badge}
    </StyledAvatar>
  );
};

export default React.memo(React.forwardRef<IBoxProps, IAvatarProps>(Avatar));
