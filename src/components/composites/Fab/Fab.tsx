import React from 'react';
import { Button, HStack } from '../../primitives';
import type { IFabProps } from './props';
import { FabContext } from './context';
import { omitUndefined } from '../../../theme/tools/utils';

const Fab = ({ children, icon, label, ...props }: IFabProps) => {
  const {
    position = 'bottomRight',
    direction = 'up',
    ...newProps
  } = omitUndefined(props);
  const [isOpen, setIsOpen] = React.useState(false);

  const positioningProps: any = {
    topRight: { top: 4, right: 4 },
    topLeft: { top: 4, left: 4 },
    bottomRight: { bottom: 4, right: 4 },
    bottomLeft: { bottom: 4, left: 4 },
  };

  return (
    <FabContext.Provider
      value={{
        isOpen,
        direction,
        onToggle: () => setIsOpen(!isOpen),
      }}
    >
      <Button
        variant="unstyled"
        bg="default.200"
        borderRadius="full"
        {...newProps}
        // onPress={pressHandler}
        p={2}
        position="absolute"
        {...positioningProps[position]}
        {...newProps}
      >
        {icon && label ? (
          <HStack space={1} justifyContent="center" alignItems="center">
            {icon}
            {label}
          </HStack>
        ) : (
          icon ?? label
        )}
      </Button>
    </FabContext.Provider>
  );
};

export default Fab;
