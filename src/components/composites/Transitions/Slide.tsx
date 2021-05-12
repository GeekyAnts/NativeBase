import React from 'react';
import Box from '../../primitives/Box';
import { useThemeProps } from '../../../hooks/useThemeProps';
import type { ISlideProps } from './types';
import { Transition } from './Transition';

const holderStyle: any = {
  top: {
    top: 0,
    right: 0,
    left: 0,
  },
  right: {
    right: 0,
    top: 0,
    bottom: 0,
  },
  bottom: {
    bottom: 0,
    right: 0,
    left: 0,
  },
  left: {
    left: 0,
    bottom: 0,
    top: 0,
  },
};

const Slide = ({ children, ...props }: ISlideProps, ref: any) => {
  const { in: visible, placement, duration } = useThemeProps('Slide', props);
  const [containerOpacity, setContainerOpacity] = React.useState(0);
  const [size, setSize] = React.useState(0);
  const provideSize = (layoutSize: any) => {
    if (placement === 'right' || placement === 'left')
      setSize(layoutSize.width);
    else setSize(layoutSize.height);
    setContainerOpacity(1);
  };

  const animationStyle: any = {
    top: {
      from: {
        translateY: -size,
      },
      entry: {
        translateY: 0,
      },
    },
    bottom: {
      from: {
        translateY: size,
      },
      entry: {
        translateY: 0,
      },
    },
    left: {
      from: {
        translateX: -size,
      },
      entry: {
        translateX: 0,
      },
    },
    right: {
      from: {
        translateX: size,
      },
      entry: {
        translateX: 0,
      },
    },
  };

  return (
    <Transition
      visible={visible}
      {...animationStyle[placement]}
      entryTransition={{ duration }}
      exitTransition={{ duration }}
      style={[{ position: 'absolute' }, holderStyle[placement]]}
    >
      <Box
        {...props}
        opacity={containerOpacity}
        ref={ref}
        onLayout={(e) => provideSize(e.nativeEvent.layout)}
      >
        {children}
      </Box>
    </Transition>
  );
};

export default React.memo(React.forwardRef(Slide));
