import React from 'react';
export const ModalContext = React.createContext({
  handleClose: () => {},
  contentSize: {},
  initialFocusRef: { current: null },
  finalFocusRef: { current: null },
});
