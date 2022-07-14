import React, { memo, forwardRef } from 'react';
import { Box, Image } from '../../primitives';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import type { IAvatarProps } from './types';
import isNil from 'lodash.isnil';
import has from 'lodash.has';

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
    // if (typeof child?.type === 'object') {
    //   console.log(_badgeSize, child, 'badge size here');
    // }

    if (
      typeof child?.type === 'object' &&
      child?.type?.type?.render.displayName === 'AvatarBadge'
    ) {
      Badge = React.cloneElement(child, {
        boxSize: child?.props?.size
          ? child?.props?.size
          : _badgeSize
          ? _badgeSize[0]
          : undefined,
      });
    } else {
      remainingChildren.push(child);
    }
  });

  const getSource = () => {
    if (source) {
      if (has(source, 'uri') && !isNil(source.uri)) {
        return source;
      } else if (!has(source, 'uri')) {
        return source;
      }
    }
    return null;
  };
  const imageSource = getSource();

  return (
    <Box {...resolvedProps}>
      {imageSource && !error ? (
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
