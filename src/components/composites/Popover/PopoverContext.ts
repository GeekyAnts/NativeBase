import React, { RefObject } from 'react';
export const PopoverContext = React.createContext({
  onClose: () => {},
  initialFocusRef: { current: null } as RefObject<any>,
  finalFocusRef: { current: null } as RefObject<any>,
});
