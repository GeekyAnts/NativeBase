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
  // TODO: Slide from right and left needs implmentation.
  const { in: visible, placement = 'left' } = useThemeProps('Slide', props);
  const [containerOpacity, setContainerOpacity] = React.useState(1);
  const [size, setSize] = React.useState(0);
  const provideSize = (layoutSize: any) => {
    if (placement === 'right' || placement === 'left')
      setSize(layoutSize.width);
    else setSize(layoutSize.height);
    setContainerOpacity(1);
  };

  const animatioStyle: any = {
    top: {
      from: {
        translateY: -size,
      },
      exit: {
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
      exit: {
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
      exit: {
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
      exit: {
        translateX: size,
      },
      entry: {
        translateX: 0,
      },
    },
  };

  return (
    <Box
      overflow="hidden"
      position="absolute"
      style={holderStyle[placement]}
      opacity={containerOpacity}
      ref={ref}
    >
      <Transition
        visible={visible}
        {...animatioStyle[placement]}
        entryDuration={200}
        exitDuration={150}
      >
        <Box {...props} onLayout={(e) => provideSize(e.nativeEvent.layout)}>
          {children}
        </Box>
      </Transition>
    </Box>
  );
};

export default React.memo(React.forwardRef(Slide));
