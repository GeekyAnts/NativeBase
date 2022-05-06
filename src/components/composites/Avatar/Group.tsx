import React, { memo, forwardRef } from 'react';
import Box from '../../primitives/Box';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import isNil from 'lodash.isnil';
import type { IAvatarGroupProps } from './types';
import { default as Avatar } from './Avatar';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

// Todo: Try using HStack instead

const getAvatarGroupChildren = (
  children?: JSX.Element[] | JSX.Element,
  space?: number,
  max?: number,
  _hiddenAvatarPlaceholder?: Object,
  _avatar?: any,
  isVertical?: Boolean
) => {
  let childrenArray: any = React.Children.toArray(children);
  let plusAvatars: number = 0;
  if (!isNil(max) && max < childrenArray.length && max > 0) {
    plusAvatars = childrenArray.length - max;
    childrenArray = childrenArray.slice(0, max);
  }
  const trailingChildren = childrenArray.slice(1);
  const spacingProps = {
    ml: isVertical ? 0 : space,
    mt: isVertical ? space : 0,
  };
  return [
    plusAvatars > 0 ? (
      <Avatar {...spacingProps} {..._avatar} {..._hiddenAvatarPlaceholder}>
        {'+ ' + plusAvatars}
      </Avatar>
    ) : null,
    React.Children.map(
      trailingChildren.reverse(),
      (child: any, index: number) => {
        return React.cloneElement(
          child,
          {
            key: `avatar-group-child-${index}`,
            ..._avatar,
            ...spacingProps,
            ...child.props,
          },
          child.props.children
        );
      }
    ),
    React.cloneElement(
      childrenArray[0],
      {
        ..._avatar,
        ...childrenArray[0].props,
      },
      childrenArray[0].props.children
    ),
  ];
};

const AvatarGroup = ({ children, ...props }: IAvatarGroupProps, ref: any) => {
  const {
    max,
    _avatar,
    _hiddenAvatarPlaceholder,
    isVertical,
    space,
    ...resolvedProps
  } = usePropsResolution('AvatarGroup', props);

  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return (
    <Box {...resolvedProps} ref={ref}>
      {getAvatarGroupChildren(
        children,
        space,
        max,
        _hiddenAvatarPlaceholder,
        _avatar,
        isVertical
      )}
    </Box>
  );
};

export default memo(forwardRef(AvatarGroup));
