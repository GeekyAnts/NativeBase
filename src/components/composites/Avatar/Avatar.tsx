import React, { memo, forwardRef } from 'react';
import { Box, Image, Text } from '../../primitives';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import type { IAvatarProps } from './types';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const Avatar = ({ wrapperRef, style, ...props }: IAvatarProps, ref: any) => {
  const [error, setError] = React.useState(false);
  const { size, source, children, ...remainingProps } = props;

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
        typeof child === 'string' || typeof child === 'number' ? (
          <Text key={'avatar-children-' + key} {..._text}>
            {child}
          </Text>
        ) : (
          child
        )
      );
    }
  });

  const imageFitStyle: any = { height: '100%', width: '100%' };
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
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
