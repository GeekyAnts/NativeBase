import React, { memo, forwardRef } from 'react';
import Flex from '../../primitives/Flex';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import isNil from 'lodash.isnil';
import type { IAvatarGroupProps } from './types';
import { default as Avatar } from './Avatar';

// Todo: Try using HStack instead

const getAvatarGroupChildren = (
  children?: JSX.Element[] | JSX.Element,
  space?: number,
  max?: number,
  plusAvatarBg?: string,
  props?: any
) => {
  let childrenArray: any = React.Children.toArray(children);
  let plusAvatars: number = 0;
  if (!isNil(max) && max < childrenArray.length && max > 0) {
    plusAvatars = childrenArray.length - max;
    childrenArray = childrenArray.slice(0, max);
  }
  let trailingChildren = childrenArray.slice(1);
  const defaultProps = {
    ml: space,
  };
  return [
    plusAvatars > 0 ? (
      <Avatar bg={plusAvatarBg} {...defaultProps} {...props}>
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
            ...props,
            ...defaultProps,
            ...child.props,
          },
          child.props.children
        );
      }
    ),
    React.cloneElement(
      childrenArray[0],
      {
        ...props,
        ...childrenArray[0].props,
      },
      childrenArray[0].props.children
    ),
  ];
};

const AvatarGroup = (allProps: IAvatarGroupProps, ref: any) => {
  const { children, max, ...props } = allProps;
  const { borderColor, borderWidth, bg, space } = usePropsResolution(
    'AvatarGroup',
    props
  );
  return (
    <Flex direction="row-reverse" ref={ref}>
      {getAvatarGroupChildren(children, space, max, bg, {
        borderColor,
        borderWidth,
        ...props,
      })}
    </Flex>
  );
};

export default memo(forwardRef(AvatarGroup));
