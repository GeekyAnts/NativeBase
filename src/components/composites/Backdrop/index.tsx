import React from 'react';
import { Pressable, IPressableProps } from '../../primitives/Pressable';

const Backdrop = (props: IPressableProps) => {
  return (
    <Pressable
      position="absolute"
      top={0}
      bottom={0}
      left={0}
      right={0}
      accessible={false}
      importantForAccessibility="no"
      bg={props.bg || 'rgba(0, 0, 0, 0.3)'}
      {...props}
    ></Pressable>
  );
};

export default React.memo(Backdrop);
