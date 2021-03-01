import React from 'react';

export const ModalContext = React.createContext({
  visible: false,
  toggleVisible: (_bool: boolean) => {},
  toggleOnClose: (_bool: boolean) => {},
});
