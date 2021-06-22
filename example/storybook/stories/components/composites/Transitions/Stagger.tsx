import React from 'react';
import { Box, useDisclose, IconButton, Stagger } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Example = () => {
  const { isOpen, onToggle } = useDisclose();
  return (
    <Box>
      <Box alignItems="center" minH={220}>
        <Stagger
          visible={isOpen}
          initial={{
            opacity: 0,
            scale: 0,
            translateY: 34,
          }}
          animate={{
            translateY: 0,
            scale: 1,
            opacity: 1,
            transition: {
              type: 'spring',
              mass: 0.8,
              stagger: { offset: 30, reverse: true },
            },
          }}
          exit={{
            translateY: 34,
            scale: 0.5,
            opacity: 0,
            transition: {
              duration: 100,
              stagger: { offset: 30, reverse: true },
            },
          }}
        >
          <IconButton
            mb={4}
            variant="solid"
            rounded="full"
            icon={<MaterialCommunityIcons size={24} name="share" />}
          />
          <IconButton
            mb={4}
            variant="solid"
            rounded="full"
            icon={<MaterialCommunityIcons size={24} name="heart" />}
          />
          <IconButton
            mb={4}
            variant="solid"
            rounded="full"
            icon={<MaterialCommunityIcons size={24} name="library" />}
          />
          <IconButton
            mb={4}
            variant="solid"
            rounded="full"
            icon={<MaterialCommunityIcons size={24} name="lighthouse" />}
          />
        </Stagger>
      </Box>
      <IconButton
        variant="solid"
        rounded="full"
        size="lg"
        onPress={onToggle}
        icon={<MaterialCommunityIcons size={24} name="attachment" />}
      >
        Press me
      </IconButton>
    </Box>
  );
};
