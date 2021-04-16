import React from 'react';
import Pressable from '../../primitives/Pressable';

const Backdrop = ({ onClick }: { onClick?: () => void }) => {
  return (
    <Pressable
      position="absolute"
      top={0}
      bottom={0}
      left={0}
      right={0}
      bg="rgba(0, 0, 0, 0.5)"
      onPress={onClick}
    ></Pressable>
  );
};

export default React.memo(Backdrop);
