import React from 'react';
import { Pressable, IPressableProps } from '../../primitives/Pressable';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const Backdrop = (props: IPressableProps) => {
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return (
    <Pressable
      _web={{
        cursor: 'default',
      }}
      position="absolute"
      top={0}
      bottom={0}
      left={0}
      right={0}
      accessible={false}
      importantForAccessibility="no"
      bg={props.bg || 'rgb(0, 0, 0)'}
      opacity={0.3}
      {...props}
    ></Pressable>
  );
};

export default React.memo(Backdrop);
