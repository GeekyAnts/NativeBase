import React, { memo, forwardRef } from 'react';
import { Box, Image, Text } from '../../primitives';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import type { IAvatarProps } from './types';

const Avatar = ({ wrapperRef, ...props }: IAvatarProps, ref: any) => {
  const [error, setError] = React.useState(false);
  const { size, style, source, children, ...remainingProps } = props;

  const { _text, ...newProps } = usePropsResolution('Avatar', {
    ...remainingProps,
    name: 'avatar',
    size,
  });

  let Badge = <></>;
  const remainingChildren: JSX.Element[] = [];
  //  Pop Badge from children
  React.Children.map(children, (child, key) => {
    if (
      typeof child?.type === 'object' &&
      child?.type.displayName === 'AvatarBadge'
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
    <Box {...newProps} style={style} ref={wrapperRef}>
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
          ref={ref}
        />
      ) : (
        remainingChildren.length !== 0 && remainingChildren
      )}
      {Badge}
    </Box>
  );
};

export default memo(forwardRef(Avatar));
