import React from 'react';
export const ModalContext = React.createContext({
  handleClose: () => {},
  contentSize: {},
  initialFocusRef: { current: null } as React.RefObject<any> | undefined,
  finalFocusRef: { current: null } as React.RefObject<any> | undefined,
});
