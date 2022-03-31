import React, { memo, forwardRef } from 'react';
import { Box, Image } from '../../primitives';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import type { IAvatarProps } from './types';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const Avatar = ({ children, ...props }: IAvatarProps, ref: any) => {
  const [error, setError] = React.useState(false);
  const { _image, _badgeSize, source, ...resolvedProps } = usePropsResolution(
    'Avatar',
    props
  );

  let Badge = <></>;
  const remainingChildren: JSX.Element[] = [];
  //  Pop Badge from children
  React.Children.map(children, (child) => {
    if (
      typeof child?.type === 'object' &&
      child?.type.displayName === 'AvatarBadge'
    ) {
      Badge = React.cloneElement(child, { size: _badgeSize[0] });
    } else {
      remainingChildren.push(child);
    }
  });

  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }

  return (
    <Box {...resolvedProps}>
      {!!source?.uri && !error ? (
        <Image
          source={source}
          onError={() => {
            setError(true);
          }}
          {..._image}
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
