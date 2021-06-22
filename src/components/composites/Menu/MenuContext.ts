import React from 'react';
export const MenuContext = React.createContext({
  closeOnSelect: true,
  onClose: () => {},
});
