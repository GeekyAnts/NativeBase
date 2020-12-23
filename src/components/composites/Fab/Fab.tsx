import React from 'react';
import { Box } from '../../primitives';
import type { IFabProps } from './props';

import { omitUndefined } from '../../../theme/tools/utils';

export const FabContext = React.createContext({});

const Fab = ({ children, ...props }: IFabProps) => {
  const {
    placement = 'bottom-right',
    slide = 'up',
    ...newProps
  } = omitUndefined(props);
  const [isOpen, setIsOpen] = React.useState(false);

  const positioningStyle: any = {
    'top-right': { top: 0, right: 0 },
    'top-left': { top: 0, left: 0 },
    'bottom-right': { bottom: 0, right: 0 },
    'bottom-left': { bottom: 0, right: 0 },
  };

  return (
    <FabContext.Provider
      value={{
        isOpen,
        slide,
        onToggle: () => setIsOpen(!isOpen),
      }}
    >
      <Box position="absolute" {...positioningStyle[placement]} {...newProps}>
        {children}
      </Box>
    </FabContext.Provider>
  );
};

export default Fab;
