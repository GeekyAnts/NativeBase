import React from 'react';
export const ModalContext: any = React.createContext({
  handleClose: () => {},
  contentSize: {},
  initialFocusRef: { current: null },
  finalFocusRef: { current: null },
});
